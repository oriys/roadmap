import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const rustStages: Stage[] = [
  {
    id: "rust-s1",
    title: "阶段一：基础语法与核心概念",
    duration: "第 1-3 周",
    goal: "掌握 Rust 基本语法、所有权系统、结构体/枚举/模式匹配以及错误处理，建立 Rust 编程思维。",
    weeks: [
      {
        id: "rust-w1",
        title: "第 1 周：变量、类型与函数",
        summary: "掌握 Rust 变量绑定、基本数据类型、函数定义与控制流。",
        overview: "Rust 是一门注重安全与性能的系统编程语言。本周从基础语法入手，理解不可变性默认设计、强类型系统与表达式导向的语言特点。",
        keyPoints: [
          "Rust 变量默认不可变，使用 mut 显式声明可变性",
          "基本类型包括标量类型（i32/f64/bool/char）和复合类型（tuple/array）",
          "函数体最后一个表达式作为返回值，不加分号",
        ],
        lessons: [
          {
            id: "rust-w1-1",
            title: "变量绑定与可变性",
            detail: "理解 Rust 的变量绑定机制、mut 关键字、常量与 shadowing，掌握不可变性优先的设计哲学。",
            keyPoints: [
              "let 绑定默认不可变，mut 显式声明可变。",
              "const 是编译期常量，必须标注类型，遵循 SCREAMING_SNAKE_CASE 命名。",
              "Shadowing 允许同名重新绑定且可改变类型，与 mut 语义不同。",
            ],
            resources: [
              { title: "变量与可变性", url: "https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html" },
              { title: "Rust By Example - 变量", url: "https://doc.rust-lang.org/rust-by-example/variable_bindings.html" },
            ],
          },
          {
            id: "rust-w1-2",
            title: "数据类型与类型系统",
            detail: "掌握 Rust 的标量类型、复合类型、类型推导机制以及类型转换规则。",
            keyPoints: [
              "标量类型：整数（i8-i128/u8-u128）、浮点（f32/f64）、布尔、字符（Unicode）。",
              "复合类型：元组固定长度可异构，数组固定长度同类型。",
              "Rust 不做隐式类型转换，需使用 as 关键字或 From/Into trait。",
            ],
            resources: [
              { title: "数据类型", url: "https://doc.rust-lang.org/book/ch03-02-data-types.html" },
              { title: "Rust By Example - 类型", url: "https://doc.rust-lang.org/rust-by-example/types.html" },
              { title: "类型转换", url: "https://doc.rust-lang.org/rust-by-example/types/cast.html" },
            ],
          },
          {
            id: "rust-w1-3",
            title: "函数与控制流",
            detail: "学习函数定义、参数与返回值、if/loop/while/for 控制流以及表达式与语句的区别。",
            keyPoints: [
              "函数使用 fn 定义，参数必须声明类型，返回类型用 -> 标注。",
              "if 是表达式，可用于 let 绑定赋值。",
              "loop 可通过 break 返回值，for 搭配迭代器是最常用的循环形式。",
            ],
            resources: [
              { title: "函数", url: "https://doc.rust-lang.org/book/ch03-03-how-functions-work.html" },
              { title: "控制流", url: "https://doc.rust-lang.org/book/ch03-05-control-flow.html" },
            ],
          },
        ],
      },
      {
        id: "rust-w2",
        title: "第 2 周：所有权与借用",
        summary: "深入理解 Rust 核心机制：所有权、移动语义、借用规则与生命周期基础。",
        overview: "所有权是 Rust 最独特的设计，它在编译期保证内存安全而无需垃圾回收器。本周是学习 Rust 的关键转折点。",
        keyPoints: [
          "每个值有且只有一个所有者，所有者离开作用域时值被 drop",
          "赋值和传参默认移动（Move），实现 Copy trait 的类型除外",
          "借用规则：任意数量的不可变引用或一个可变引用，不可同时存在",
        ],
        lessons: [
          {
            id: "rust-w2-1",
            title: "所有权与移动语义",
            detail: "理解所有权三原则、移动（Move）语义、栈与堆分配，以及 Copy 与 Clone 的区别。",
            keyPoints: [
              "堆数据（如 String）赋值时发生所有权转移（Move），原变量失效。",
              "栈数据（如 i32）实现了 Copy trait，赋值时自动复制。",
              "Clone 执行深拷贝，Copy 是按位复制，二者语义不同。",
            ],
            resources: [
              { title: "所有权", url: "https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html" },
              { title: "Rust By Example - 所有权", url: "https://doc.rust-lang.org/rust-by-example/scope/move.html" },
            ],
          },
          {
            id: "rust-w2-2",
            title: "引用与借用",
            detail: "掌握不可变引用与可变引用的规则、悬垂引用的编译期检查以及借用检查器的工作原理。",
            keyPoints: [
              "&T 创建不可变引用，&mut T 创建可变引用，二者不可同时存在。",
              "借用检查器在编译期防止数据竞争和悬垂引用。",
              "引用的生命周期必须短于被引用值的生命周期。",
            ],
            resources: [
              { title: "引用与借用", url: "https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html" },
              { title: "Rust By Example - 借用", url: "https://doc.rust-lang.org/rust-by-example/scope/borrow.html" },
            ],
          },
          {
            id: "rust-w2-3",
            title: "切片与字符串",
            detail: "学习切片类型（&[T]、&str）的使用，理解 String 与 &str 的区别及其在所有权系统中的角色。",
            keyPoints: [
              "切片是对连续内存的引用，不拥有数据所有权。",
              "String 拥有堆上数据，&str 是字符串切片引用。",
              "函数参数优先使用 &str 而非 &String，提高灵活性。",
            ],
            resources: [
              { title: "切片类型", url: "https://doc.rust-lang.org/book/ch04-03-slices.html" },
              { title: "字符串", url: "https://doc.rust-lang.org/book/ch08-02-strings.html" },
              { title: "Rust By Example - 字符串", url: "https://doc.rust-lang.org/rust-by-example/std/str.html" },
            ],
          },
        ],
      },
      {
        id: "rust-w3",
        title: "第 3 周：结构体、枚举与错误处理",
        summary: "掌握自定义类型、模式匹配与 Rust 的错误处理机制。",
        overview: "结构体和枚举是 Rust 构建复杂数据模型的基础。配合模式匹配和 Result/Option，形成安全且表达力强的编程范式。",
        keyPoints: [
          "结构体使用 impl 块关联方法，枚举变体可携带不同类型数据",
          "match 必须穷举所有情况，if let 用于只关心一个匹配分支的场景",
          "Rust 使用 Result<T, E> 和 Option<T> 替代异常和空值",
        ],
        lessons: [
          {
            id: "rust-w3-1",
            title: "结构体与方法",
            detail: "学习结构体定义、字段初始化简写、元组结构体、impl 块中的方法与关联函数。",
            keyPoints: [
              "结构体通过 impl 块定义方法，&self 为不可变借用，&mut self 为可变借用。",
              "关联函数（无 self 参数）常用作构造器，如 String::new()。",
              "结构体可派生 Debug、Clone、PartialEq 等常用 trait。",
            ],
            resources: [
              { title: "结构体", url: "https://doc.rust-lang.org/book/ch05-01-defining-structs.html" },
              { title: "方法", url: "https://doc.rust-lang.org/book/ch05-03-method-syntax.html" },
            ],
          },
          {
            id: "rust-w3-2",
            title: "枚举与模式匹配",
            detail: "掌握枚举定义、变体携带数据、match 表达式穷举匹配以及 if let / while let 简写。",
            keyPoints: [
              "枚举变体可携带不同类型和数量的数据，比 C 枚举更强大。",
              "match 要求穷举所有可能，_ 通配符匹配剩余情况。",
              "Option<T> 是标准库枚举，代替空值，强制处理「无值」情况。",
            ],
            resources: [
              { title: "枚举", url: "https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html" },
              { title: "match 控制流", url: "https://doc.rust-lang.org/book/ch06-02-match.html" },
              { title: "if let", url: "https://doc.rust-lang.org/book/ch06-03-if-let.html" },
            ],
          },
          {
            id: "rust-w3-3",
            title: "错误处理：Result 与 Option",
            detail: "学习 Rust 的错误处理哲学、Result<T,E> 与 Option<T> 的使用、? 运算符传播错误以及自定义错误类型。",
            keyPoints: [
              "panic! 用于不可恢复错误，Result 用于可恢复错误。",
              "? 运算符简化错误传播，自动调用 From::from 转换错误类型。",
              "自定义错误类型可实现 std::error::Error trait，配合 thiserror crate 简化定义。",
            ],
            resources: [
              { title: "错误处理", url: "https://doc.rust-lang.org/book/ch09-00-error-handling.html" },
              { title: "Result", url: "https://doc.rust-lang.org/book/ch09-02-recoverable-errors-with-result.html" },
              { title: "thiserror crate", url: "https://docs.rs/thiserror/latest/thiserror/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "rust-s2",
    title: "阶段二：核心特性与抽象机制",
    duration: "第 4-6 周",
    goal: "掌握泛型、Trait、生命周期、集合、迭代器、闭包与智能指针，建立 Rust 高级抽象能力。",
    weeks: [
      {
        id: "rust-w4",
        title: "第 4 周：泛型与 Trait",
        summary: "掌握 Rust 的泛型编程与 Trait 系统，理解零成本抽象的设计理念。",
        overview: "泛型与 Trait 是 Rust 实现多态和代码复用的核心。通过单态化实现零成本抽象，既有泛型的灵活性又保持原生性能。",
        keyPoints: [
          "泛型在编译期单态化（Monomorphization），无运行时开销",
          "Trait 定义共享行为，类似接口但支持默认实现和关联类型",
          "Trait Bound 约束泛型参数必须实现指定行为",
        ],
        lessons: [
          {
            id: "rust-w4-1",
            title: "泛型函数与类型",
            detail: "学习在函数、结构体、枚举和方法中使用泛型参数，理解单态化原理与编译期类型展开。",
            keyPoints: [
              "泛型函数使用 <T> 声明类型参数，编译器为每种具体类型生成专用代码。",
              "结构体和枚举可携带泛型参数，如 Option<T>、Result<T, E>。",
              "单态化使泛型代码与手写具体类型代码性能相同。",
            ],
            resources: [
              { title: "泛型", url: "https://doc.rust-lang.org/book/ch10-01-syntax.html" },
              { title: "Rust By Example - 泛型", url: "https://doc.rust-lang.org/rust-by-example/generics.html" },
            ],
          },
          {
            id: "rust-w4-2",
            title: "Trait 定义与实现",
            detail: "掌握 Trait 的定义、为类型实现 Trait、默认方法、Trait Bound 以及 impl Trait 语法。",
            keyPoints: [
              "Trait 使用 trait 关键字定义，方法可提供默认实现。",
              "impl Trait 语法是 Trait Bound 的语法糖，简化函数签名。",
              "孤儿规则：只能为本地类型实现外部 Trait，或为外部类型实现本地 Trait。",
            ],
            resources: [
              { title: "Trait", url: "https://doc.rust-lang.org/book/ch10-02-traits.html" },
              { title: "Rust By Example - Trait", url: "https://doc.rust-lang.org/rust-by-example/trait.html" },
              { title: "Trait 对象", url: "https://doc.rust-lang.org/book/ch17-02-trait-objects.html" },
            ],
          },
          {
            id: "rust-w4-3",
            title: "常用标准库 Trait",
            detail: "学习 Display、Debug、Clone、Copy、PartialEq、PartialOrd、Iterator 等常用 Trait 及其派生宏。",
            keyPoints: [
              "Display 用于用户友好的输出，Debug 用于开发调试，可通过 #[derive] 自动实现。",
              "From/Into 实现类型转换，TryFrom/TryInto 处理可能失败的转换。",
              "Deref 和 DerefMut 实现智能指针的自动解引用行为。",
            ],
            resources: [
              { title: "派生 Trait", url: "https://doc.rust-lang.org/book/appendix-03-derivable-traits.html" },
              { title: "Display 与 Debug", url: "https://doc.rust-lang.org/rust-by-example/hello/print/print_display.html" },
            ],
          },
        ],
      },
      {
        id: "rust-w5",
        title: "第 5 周：生命周期与集合",
        summary: "掌握生命周期标注规则、集合类型（Vec/HashMap/HashSet）与迭代器模式。",
        overview: "生命周期是 Rust 借用检查器的核心机制，确保引用始终有效。集合与迭代器则是日常编程最常用的工具。",
        keyPoints: [
          "生命周期标注描述引用之间的存活关系，帮助编译器验证引用有效性",
          "三条生命周期省略规则覆盖大多数常见场景",
          "迭代器是惰性求值的，通过适配器链组合操作，最后由消费者触发执行",
        ],
        lessons: [
          {
            id: "rust-w5-1",
            title: "生命周期标注",
            detail: "理解生命周期的概念、标注语法、省略规则（Elision Rules）以及结构体中的生命周期参数。",
            keyPoints: [
              "生命周期 'a 描述引用的有效范围，不改变实际生命周期。",
              "三条省略规则：输入各自生命周期、单输入传播、&self 传播。",
              "结构体持有引用时必须标注生命周期，保证字段引用有效。",
            ],
            resources: [
              { title: "生命周期", url: "https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html" },
              { title: "Rust By Example - 生命周期", url: "https://doc.rust-lang.org/rust-by-example/scope/lifetime.html" },
            ],
          },
          {
            id: "rust-w5-2",
            title: "集合类型",
            detail: "掌握 Vec<T>、HashMap<K,V>、HashSet<T>、BTreeMap 等集合的使用场景与性能特征。",
            keyPoints: [
              "Vec 是可增长的连续数组，push/pop 操作 O(1)，索引访问 O(1)。",
              "HashMap 基于哈希表，插入/查找平均 O(1)，Key 需实现 Hash + Eq。",
              "entry API 提供优雅的「存在则更新，不存在则插入」模式。",
            ],
            resources: [
              { title: "Vec", url: "https://doc.rust-lang.org/book/ch08-01-vectors.html" },
              { title: "HashMap", url: "https://doc.rust-lang.org/book/ch08-03-hash-maps.html" },
              { title: "集合文档", url: "https://doc.rust-lang.org/std/collections/index.html" },
            ],
          },
          {
            id: "rust-w5-3",
            title: "迭代器与适配器",
            detail: "学习 Iterator trait、常用适配器（map/filter/fold/collect）、自定义迭代器与惰性求值机制。",
            keyPoints: [
              "Iterator trait 核心方法是 next()，返回 Option<Item>。",
              "适配器（map/filter/take）惰性求值，消费者（collect/sum/for_each）触发执行。",
              "迭代器链经编译器优化后通常与手写循环性能相当。",
            ],
            resources: [
              { title: "迭代器", url: "https://doc.rust-lang.org/book/ch13-02-iterators.html" },
              { title: "Iterator 文档", url: "https://doc.rust-lang.org/std/iter/trait.Iterator.html" },
            ],
          },
        ],
      },
      {
        id: "rust-w6",
        title: "第 6 周：闭包与智能指针",
        summary: "掌握闭包的捕获语义、函数式编程模式以及 Box/Rc/Arc 等智能指针的使用。",
        overview: "闭包是 Rust 函数式编程的基石，智能指针则扩展了所有权模型，支持堆分配、引用计数等高级模式。",
        keyPoints: [
          "闭包根据使用方式自动推断捕获模式：Fn / FnMut / FnOnce",
          "Box<T> 在堆上分配，Rc<T> 单线程引用计数，Arc<T> 线程安全引用计数",
          "RefCell<T> 提供运行时借用检查，配合 Rc 实现内部可变性",
        ],
        lessons: [
          {
            id: "rust-w6-1",
            title: "闭包与 Fn Trait",
            detail: "学习闭包定义语法、环境变量捕获方式、Fn/FnMut/FnOnce 三种 trait 以及 move 关键字。",
            keyPoints: [
              "闭包使用 |params| body 语法，类型可自动推断。",
              "Fn 借用捕获、FnMut 可变借用捕获、FnOnce 获取所有权。",
              "move 关键字强制闭包获取所有权，常用于线程和异步场景。",
            ],
            resources: [
              { title: "闭包", url: "https://doc.rust-lang.org/book/ch13-01-closures.html" },
              { title: "Rust By Example - 闭包", url: "https://doc.rust-lang.org/rust-by-example/fn/closures.html" },
            ],
          },
          {
            id: "rust-w6-2",
            title: "Box 与堆分配",
            detail: "理解 Box<T> 的使用场景：递归类型、trait 对象、大数据栈转堆，以及 Deref 自动解引用。",
            keyPoints: [
              "Box<T> 在堆上分配数据，拥有数据所有权，离开作用域自动释放。",
              "递归类型必须使用 Box 打破无限大小问题。",
              "Box<dyn Trait> 创建 trait 对象，实现运行时多态（动态分发）。",
            ],
            resources: [
              { title: "Box 智能指针", url: "https://doc.rust-lang.org/book/ch15-01-box.html" },
              { title: "Deref Trait", url: "https://doc.rust-lang.org/book/ch15-02-deref.html" },
            ],
          },
          {
            id: "rust-w6-3",
            title: "Rc/Arc 与内部可变性",
            detail: "掌握引用计数智能指针 Rc<T>/Arc<T> 的使用场景，以及 RefCell<T>/Mutex<T> 的内部可变性模式。",
            keyPoints: [
              "Rc<T> 允许单线程多所有权，通过引用计数在最后一个 Rc 释放时 drop 数据。",
              "Arc<T> 是 Rc 的线程安全版本，使用原子操作维护引用计数。",
              "RefCell<T> 在运行时检查借用规则，违规时 panic 而非编译错误。",
            ],
            resources: [
              { title: "Rc 引用计数", url: "https://doc.rust-lang.org/book/ch15-04-rc.html" },
              { title: "RefCell 内部可变性", url: "https://doc.rust-lang.org/book/ch15-05-interior-mutability.html" },
              { title: "Arc 文档", url: "https://doc.rust-lang.org/std/sync/struct.Arc.html" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "rust-s3",
    title: "阶段三：并发与系统编程",
    duration: "第 7-9 周",
    goal: "掌握 Rust 并发编程模型、异步编程、unsafe Rust 与 FFI，具备系统级编程能力。",
    weeks: [
      {
        id: "rust-w7",
        title: "第 7 周：线程与消息传递",
        summary: "掌握 Rust 线程创建、消息传递（channel）以及共享状态并发模型。",
        overview: "Rust 的类型系统在编译期防止数据竞争，使并发编程更加安全。本周学习线程管理、channel 通信与 Mutex 共享状态。",
        keyPoints: [
          "std::thread::spawn 创建线程，move 闭包转移所有权到新线程",
          "mpsc::channel 实现多生产者单消费者的消息传递",
          "Mutex<T> 提供互斥访问，Arc<Mutex<T>> 在线程间共享可变状态",
        ],
        lessons: [
          {
            id: "rust-w7-1",
            title: "线程创建与管理",
            detail: "学习 std::thread 模块的使用、JoinHandle、线程间数据传递以及 move 闭包的必要性。",
            keyPoints: [
              "thread::spawn 接收闭包并返回 JoinHandle，调用 join() 等待线程结束。",
              "move 闭包将外部变量所有权转移到线程中，满足 'static 生命周期约束。",
              "线程 panic 不会扩散到主线程，join() 返回 Result 来捕获。",
            ],
            resources: [
              { title: "线程", url: "https://doc.rust-lang.org/book/ch16-01-threads.html" },
              { title: "std::thread 文档", url: "https://doc.rust-lang.org/std/thread/index.html" },
            ],
          },
          {
            id: "rust-w7-2",
            title: "消息传递与 Channel",
            detail: "掌握 mpsc::channel 和 mpsc::sync_channel 的使用，理解发送者/接收者模型与所有权转移。",
            keyPoints: [
              "mpsc::channel() 返回 (Sender, Receiver)，发送时所有权转移到接收端。",
              "Sender 可克隆实现多生产者，Receiver 不可克隆保证单消费者。",
              "sync_channel 有容量限制，满时发送阻塞，提供背压机制。",
            ],
            resources: [
              { title: "消息传递", url: "https://doc.rust-lang.org/book/ch16-02-message-passing.html" },
              { title: "mpsc 文档", url: "https://doc.rust-lang.org/std/sync/mpsc/index.html" },
            ],
          },
          {
            id: "rust-w7-3",
            title: "共享状态：Mutex 与 RwLock",
            detail: "学习 Mutex<T> 互斥锁、RwLock<T> 读写锁的使用模式以及死锁预防策略。",
            keyPoints: [
              "Mutex::lock() 返回 MutexGuard，离开作用域自动释放锁。",
              "RwLock 允许多个读者或一个写者，适合读多写少场景。",
              "避免死锁：按固定顺序获取多把锁，或使用 try_lock 非阻塞获取。",
            ],
            resources: [
              { title: "共享状态", url: "https://doc.rust-lang.org/book/ch16-03-shared-state.html" },
              { title: "Mutex 文档", url: "https://doc.rust-lang.org/std/sync/struct.Mutex.html" },
              { title: "RwLock 文档", url: "https://doc.rust-lang.org/std/sync/struct.RwLock.html" },
            ],
          },
        ],
      },
      {
        id: "rust-w8",
        title: "第 8 周：Sync/Send 与异步编程",
        summary: "理解 Sync/Send 标记 Trait，掌握 async/await 与 Tokio 异步运行时。",
        overview: "Sync 和 Send 是 Rust 编译期并发安全的基石。异步编程通过 Future 实现高效 I/O 并发，Tokio 是最主流的异步运行时。",
        keyPoints: [
          "Send 表示类型可安全跨线程传递，Sync 表示类型可安全被多线程共享引用",
          "async fn 返回 Future，在 .await 点让出控制权实现协作式调度",
          "Tokio 提供多线程运行时、异步 I/O、定时器和同步原语",
        ],
        lessons: [
          {
            id: "rust-w8-1",
            title: "Send 与 Sync Trait",
            detail: "理解 Send/Sync 标记 Trait 的语义、自动实现规则以及它们如何保证编译期线程安全。",
            keyPoints: [
              "Send：类型的值可安全移动到另一个线程，大多数类型自动实现。",
              "Sync：类型的引用可安全在多线程间共享，即 &T: Send 意味着 T: Sync。",
              "Rc<T> 不是 Send/Sync，Arc<T> 是；RefCell<T> 不是 Sync，Mutex<T> 是。",
            ],
            resources: [
              { title: "Send 与 Sync", url: "https://doc.rust-lang.org/book/ch16-04-extensible-concurrency-sync-and-send.html" },
              { title: "Nomicon - Send/Sync", url: "https://doc.rust-lang.org/nomicon/send-and-sync.html" },
            ],
          },
          {
            id: "rust-w8-2",
            title: "async/await 基础",
            detail: "学习 Rust 异步编程模型、Future trait、async fn、.await 以及 Pin 的概念。",
            keyPoints: [
              "async fn 返回实现 Future trait 的匿名类型，惰性求值直到被 await。",
              "Future::poll 驱动状态机，返回 Poll::Ready 或 Poll::Pending。",
              "Pin 确保自引用结构不被移动，是异步编程底层的关键概念。",
            ],
            resources: [
              { title: "Async Book", url: "https://rust-lang.github.io/async-book/" },
              { title: "Future Trait", url: "https://doc.rust-lang.org/std/future/trait.Future.html" },
              { title: "Pin 与 Unpin", url: "https://doc.rust-lang.org/std/pin/index.html" },
            ],
          },
          {
            id: "rust-w8-3",
            title: "Tokio 异步运行时",
            detail: "掌握 Tokio 运行时配置、异步任务 spawn、异步 I/O、select! 宏与异步 channel。",
            keyPoints: [
              "#[tokio::main] 宏初始化运行时，tokio::spawn 创建异步任务。",
              "tokio::select! 同时等待多个异步操作，第一个完成的分支执行。",
              "tokio::sync 提供异步版 Mutex、RwLock、mpsc、broadcast 等同步原语。",
            ],
            resources: [
              { title: "Tokio 教程", url: "https://tokio.rs/tokio/tutorial" },
              { title: "Tokio 文档", url: "https://docs.rs/tokio/latest/tokio/" },
              { title: "Tokio mini-redis", url: "https://tokio.rs/tokio/tutorial/setup" },
            ],
          },
        ],
      },
      {
        id: "rust-w9",
        title: "第 9 周：unsafe Rust 与 FFI",
        summary: "理解 unsafe 的五种超能力、FFI 与 C 互操作以及编写安全抽象的原则。",
        overview: "unsafe 是 Rust 的逃生舱口，允许绕过借用检查器执行底层操作。FFI 使 Rust 能与 C 库无缝互操作，是系统编程的核心能力。",
        keyPoints: [
          "unsafe 块中可以：解引用裸指针、调用 unsafe 函数、访问可变静态变量、实现 unsafe trait、访问 union 字段",
          "unsafe 不关闭借用检查器，只额外允许五种操作",
          "FFI 通过 extern \"C\" 声明外部函数，#[no_mangle] 导出 Rust 函数给 C 调用",
        ],
        lessons: [
          {
            id: "rust-w9-1",
            title: "unsafe Rust",
            detail: "学习 unsafe 的五种超能力、裸指针操作、unsafe 函数与 unsafe trait，以及最小化 unsafe 范围的最佳实践。",
            keyPoints: [
              "裸指针 *const T / *mut T 可以为空、悬垂或未对齐，解引用需要 unsafe。",
              "unsafe 代码应封装在安全 API 后面，缩小不安全代码的范围。",
              "使用 unsafe impl 实现 Send/Sync 时必须确保类型确实满足线程安全要求。",
            ],
            resources: [
              { title: "unsafe Rust", url: "https://doc.rust-lang.org/book/ch19-01-unsafe-rust.html" },
              { title: "Rustonomicon", url: "https://doc.rust-lang.org/nomicon/" },
            ],
          },
          {
            id: "rust-w9-2",
            title: "FFI 与 C 互操作",
            detail: "掌握通过 extern \"C\" 调用 C 函数、将 Rust 函数导出给 C、类型映射以及 bindgen/cbindgen 工具。",
            keyPoints: [
              "extern \"C\" 使用 C ABI 声明外部函数，调用时必须在 unsafe 块中。",
              "#[no_mangle] 和 extern \"C\" 导出 Rust 函数，编译为动态/静态库供 C 调用。",
              "bindgen 自动从 C 头文件生成 Rust 绑定，cbindgen 生成 C 头文件。",
            ],
            resources: [
              { title: "FFI", url: "https://doc.rust-lang.org/nomicon/ffi.html" },
              { title: "bindgen", url: "https://rust-lang.github.io/rust-bindgen/" },
              { title: "cbindgen", url: "https://github.com/mozilla/cbindgen" },
            ],
          },
          {
            id: "rust-w9-3",
            title: "安全抽象与内联汇编",
            detail: "学习在 unsafe 之上构建安全抽象的模式、std::mem 工具函数以及 asm! 宏进行内联汇编。",
            keyPoints: [
              "安全抽象原则：内部使用 unsafe 实现，对外暴露安全的 API。",
              "std::mem::transmute 进行类型重解释，极其危险需谨慎使用。",
              "asm! 宏支持内联汇编，用于极致性能优化和硬件操作。",
            ],
            resources: [
              { title: "内联汇编", url: "https://doc.rust-lang.org/reference/inline-assembly.html" },
              { title: "std::mem 文档", url: "https://doc.rust-lang.org/std/mem/index.html" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "rust-s4",
    title: "阶段四：工程实践与生态应用",
    duration: "第 10-12 周",
    goal: "掌握 Cargo 工程化、宏编程、性能优化、Web 开发与嵌入式 Rust，具备生产级开发能力。",
    weeks: [
      {
        id: "rust-w10",
        title: "第 10 周：Cargo 工程化与宏",
        summary: "掌握 Cargo 工作空间、包发布流程以及声明宏和过程宏的编写。",
        overview: "Cargo 是 Rust 的构建系统和包管理器。宏是 Rust 元编程的核心工具，能在编译期生成代码减少样板。",
        keyPoints: [
          "Cargo workspace 管理多个 crate，共享依赖版本和构建缓存",
          "macro_rules! 声明宏通过模式匹配进行代码替换",
          "过程宏（derive/attribute/function-like）操作 TokenStream 生成代码",
        ],
        lessons: [
          {
            id: "rust-w10-1",
            title: "Cargo 工作空间与发布",
            detail: "学习 Cargo workspace 多 crate 管理、features 条件编译、crate 版本管理与发布到 crates.io 的流程。",
            keyPoints: [
              "workspace Cargo.toml 定义 members，统一管理依赖版本和编译。",
              "features 实现条件编译，cfg 属性控制平台特定代码。",
              "cargo publish 发布 crate，遵循语义化版本（SemVer）。",
            ],
            resources: [
              { title: "Cargo 工作空间", url: "https://doc.rust-lang.org/book/ch14-03-cargo-workspaces.html" },
              { title: "发布到 crates.io", url: "https://doc.rust-lang.org/book/ch14-02-publishing-to-crates-io.html" },
              { title: "Cargo Book", url: "https://doc.rust-lang.org/cargo/" },
            ],
          },
          {
            id: "rust-w10-2",
            title: "声明宏 macro_rules!",
            detail: "掌握 macro_rules! 的模式匹配语法、重复匹配、宏卫生性以及常用宏设计模式。",
            keyPoints: [
              "macro_rules! 通过 $name:designator 进行模式匹配（expr/ident/ty/tt 等）。",
              "重复匹配使用 $(...)*/$(...)+/$(...)?，实现可变参数宏。",
              "宏卫生性确保宏展开不会意外与外部标识符冲突。",
            ],
            resources: [
              { title: "宏", url: "https://doc.rust-lang.org/book/ch19-06-macros.html" },
              { title: "Rust By Example - 宏", url: "https://doc.rust-lang.org/rust-by-example/macros.html" },
              { title: "The Little Book of Rust Macros", url: "https://veykril.github.io/tlborm/" },
            ],
          },
          {
            id: "rust-w10-3",
            title: "过程宏",
            detail: "学习 derive 宏、属性宏和函数式过程宏的编写，使用 syn/quote crate 解析和生成代码。",
            keyPoints: [
              "过程宏在单独的 crate 中定义（proc-macro = true）。",
              "syn 解析 TokenStream 为语法树，quote! 将语法树转回 TokenStream。",
              "derive 宏最常用，如 #[derive(Serialize, Deserialize)] 自动生成序列化代码。",
            ],
            resources: [
              { title: "过程宏", url: "https://doc.rust-lang.org/reference/procedural-macros.html" },
              { title: "syn crate", url: "https://docs.rs/syn/latest/syn/" },
              { title: "quote crate", url: "https://docs.rs/quote/latest/quote/" },
            ],
          },
        ],
      },
      {
        id: "rust-w11",
        title: "第 11 周：性能分析与 Web 开发",
        summary: "掌握性能分析工具与优化策略，以及使用 Axum/Actix 进行 Web 开发。",
        overview: "Rust 的零成本抽象为极致性能提供了基础。配合 profiling 工具和 Web 框架，可以构建高性能的网络服务。",
        keyPoints: [
          "cargo bench 和 criterion 进行基准测试，perf/flamegraph 分析热点",
          "Axum 基于 Tower 中间件生态，类型安全的提取器模式",
          "Actix-web 基于 Actor 模型，高并发场景性能优异",
        ],
        lessons: [
          {
            id: "rust-w11-1",
            title: "性能分析与基准测试",
            detail: "学习 cargo bench、criterion 基准测试框架、perf/flamegraph 性能分析以及常见优化策略。",
            keyPoints: [
              "criterion 提供统计学基准测试，自动检测性能回归。",
              "cargo flamegraph 生成火焰图，直观定位 CPU 热点函数。",
              "常见优化：减少堆分配、避免不必要的 clone、使用 Cow 惰性复制。",
            ],
            resources: [
              { title: "criterion 文档", url: "https://docs.rs/criterion/latest/criterion/" },
              { title: "The Rust Performance Book", url: "https://nnethercote.github.io/perf-book/" },
              { title: "flamegraph", url: "https://github.com/flamegraph-rs/flamegraph" },
            ],
          },
          {
            id: "rust-w11-2",
            title: "Axum Web 框架",
            detail: "掌握 Axum 路由定义、Handler 函数、提取器（Extractor）、中间件与状态管理。",
            keyPoints: [
              "Axum Handler 是普通异步函数，参数通过提取器自动解析请求数据。",
              "Router 支持嵌套、路径参数和 Layer 中间件（基于 Tower）。",
              "State 提取器共享应用状态，通过 Arc 在 Handler 间安全传递。",
            ],
            resources: [
              { title: "Axum 文档", url: "https://docs.rs/axum/latest/axum/" },
              { title: "Axum 示例", url: "https://github.com/tokio-rs/axum/tree/main/examples" },
              { title: "Tower 中间件", url: "https://docs.rs/tower/latest/tower/" },
            ],
          },
          {
            id: "rust-w11-3",
            title: "Actix-web 与数据库集成",
            detail: "学习 Actix-web 框架基础、SQLx 异步数据库操作以及 REST API 项目的完整搭建。",
            keyPoints: [
              "Actix-web 使用 Actor 模型，每个工作线程运行独立的事件循环。",
              "SQLx 提供编译期 SQL 检查，支持 PostgreSQL/MySQL/SQLite。",
              "项目结构：分层架构（handler/service/repository），使用 dotenv 管理配置。",
            ],
            resources: [
              { title: "Actix-web 文档", url: "https://actix.rs/docs/" },
              { title: "SQLx 文档", url: "https://docs.rs/sqlx/latest/sqlx/" },
              { title: "Actix-web 示例", url: "https://github.com/actix/examples" },
            ],
          },
        ],
      },
      {
        id: "rust-w12",
        title: "第 12 周：嵌入式与综合实战",
        summary: "了解嵌入式 Rust 开发基础，完成综合项目实践与学习路线总结。",
        overview: "Rust 的零成本抽象和无需运行时的特性使其成为嵌入式开发的理想选择。最后一周通过综合实战巩固所学。",
        keyPoints: [
          "no_std 环境移除标准库依赖，使用 core 和 alloc 库",
          "embedded-hal trait 抽象硬件外设，实现跨平台驱动",
          "综合项目整合网络、并发、错误处理等核心技能",
        ],
        lessons: [
          {
            id: "rust-w12-1",
            title: "嵌入式 Rust 基础",
            detail: "学习 #![no_std] 环境、core/alloc 库、交叉编译配置以及 embedded-hal 硬件抽象层。",
            keyPoints: [
              "#![no_std] 禁用标准库，需自定义 panic handler 和内存分配器。",
              "embedded-hal 定义 GPIO/SPI/I2C/UART 等外设抽象 trait。",
              "使用 probe-rs 或 OpenOCD 进行固件烧录和调试。",
            ],
            resources: [
              { title: "Embedded Rust Book", url: "https://doc.rust-lang.org/embedded-book/" },
              { title: "embedded-hal", url: "https://docs.rs/embedded-hal/latest/embedded_hal/" },
              { title: "probe-rs", url: "https://probe.rs/" },
            ],
          },
          {
            id: "rust-w12-2",
            title: "WebAssembly 与跨平台",
            detail: "学习 Rust 编译到 WebAssembly 的流程、wasm-bindgen 与 JavaScript 互操作以及 wasm-pack 工具链。",
            keyPoints: [
              "rustup target add wasm32-unknown-unknown 添加 WASM 编译目标。",
              "wasm-bindgen 提供 Rust 与 JavaScript 之间的类型映射和绑定。",
              "wasm-pack 自动化构建、测试和发布 WASM 包到 npm。",
            ],
            resources: [
              { title: "Rust and WebAssembly", url: "https://rustwasm.github.io/docs/book/" },
              { title: "wasm-bindgen", url: "https://rustwasm.github.io/docs/wasm-bindgen/" },
              { title: "wasm-pack", url: "https://rustwasm.github.io/docs/wasm-pack/" },
            ],
          },
          {
            id: "rust-w12-3",
            title: "综合实战项目",
            detail: "综合运用所有权、并发、异步、错误处理等核心知识，完成一个完整的 Rust 项目并进行代码审查。",
            keyPoints: [
              "项目选型：CLI 工具、HTTP 服务或系统工具，覆盖核心知识点。",
              "工程实践：workspace 组织、CI/CD 集成、文档生成（rustdoc）。",
              "代码质量：clippy 静态分析、rustfmt 格式化、cargo audit 安全检查。",
            ],
            resources: [
              { title: "clippy 文档", url: "https://doc.rust-lang.org/clippy/" },
              { title: "rustdoc 文档", url: "https://doc.rust-lang.org/rustdoc/" },
              { title: "cargo audit", url: "https://docs.rs/cargo-audit/latest/cargo_audit/" },
            ],
          },
        ],
      },
    ],
  },
]

export const rustKnowledgeCards: KnowledgeCard[] = [
  {
    id: "rust-card-ownership",
    title: "所有权模型",
    summary: "所有权是 Rust 内存安全的基石，通过编译期检查消除悬垂指针和数据竞争。",
    points: [
      "每个值有唯一所有者，所有者离开作用域时值被自动释放（Drop）。",
      "赋值和传参默认移动所有权，Copy 类型除外。",
      "借用规则：任意数量 &T 或唯一 &mut T，不可同时存在。",
    ],
    practice: "实现一个简单的链表，体会 Box 和所有权转移在递归数据结构中的应用。",
  },
  {
    id: "rust-card-lifetime",
    title: "生命周期与借用检查",
    summary: "生命周期标注帮助编译器验证引用有效性，是 Rust 零运行时开销安全保证的关键。",
    points: [
      "生命周期 'a 描述引用的最短有效范围，不改变实际生存时间。",
      "三条省略规则覆盖大部分场景，仅复杂情况需手动标注。",
      "结构体持有引用时必须声明生命周期参数。",
    ],
    practice: "编写一个返回两个字符串切片中较长者的函数，理解生命周期标注的必要性。",
  },
  {
    id: "rust-card-trait",
    title: "Trait 与泛型",
    summary: "Trait 系统是 Rust 实现多态的核心，配合泛型通过单态化实现零成本抽象。",
    points: [
      "Trait 定义共享行为，支持默认实现、关联类型和 Trait Bound。",
      "静态分发（泛型 + Trait Bound）编译期展开，无运行时开销。",
      "动态分发（dyn Trait）通过 vtable 实现运行时多态，有微小开销。",
    ],
    practice: "定义一个 Shape trait，为 Circle 和 Rectangle 实现它，分别使用静态和动态分发调用。",
  },
  {
    id: "rust-card-concurrency",
    title: "并发安全模型",
    summary: "Rust 通过 Send/Sync trait 在编译期保证线程安全，消除数据竞争。",
    points: [
      "Send 允许值跨线程移动，Sync 允许引用跨线程共享。",
      "Arc<Mutex<T>> 是线程间共享可变状态的标准模式。",
      "Channel（mpsc）实现「不要通过共享内存通信，通过通信共享内存」。",
    ],
    practice: "使用 Arc<Mutex<Vec<T>>> 和 mpsc::channel 分别实现一个多线程计数器。",
  },
  {
    id: "rust-card-async",
    title: "异步编程模型",
    summary: "Rust 的 async/await 基于 Future trait 实现零成本异步，需要外部运行时驱动。",
    points: [
      "async fn 编译为状态机实现的 Future，在 await 点让出控制权。",
      "Rust 标准库只提供 Future trait，运行时（如 Tokio）负责调度和 I/O。",
      "tokio::select! 实现多异步分支竞争，tokio::join! 并发等待多个 Future。",
    ],
    practice: "使用 Tokio 编写一个并发 HTTP 请求程序，同时请求多个 URL 并汇总结果。",
  },
  {
    id: "rust-card-error",
    title: "错误处理范式",
    summary: "Rust 使用 Result/Option 代替异常，? 运算符使错误传播简洁优雅。",
    points: [
      "Result<T, E> 表示可恢复错误，Option<T> 表示可能缺失的值。",
      "? 运算符自动传播错误并通过 From trait 转换错误类型。",
      "anyhow 适合应用级错误处理，thiserror 适合库的自定义错误类型。",
    ],
    practice: "编写一个文件解析函数，使用自定义错误类型和 ? 运算符处理多种错误情况。",
  },
  {
    id: "rust-card-macro",
    title: "宏系统",
    summary: "Rust 宏在编译期展开代码，消除样板代码，是元编程的强大工具。",
    points: [
      "声明宏（macro_rules!）通过模式匹配替换代码，适合简单场景。",
      "过程宏操作 TokenStream，可实现 derive、属性和函数式宏。",
      "syn 解析语法树、quote 生成代码是过程宏开发的标准工具链。",
    ],
    practice: "用 macro_rules! 实现一个 hashmap! 宏，支持 hashmap!{ k1 => v1, k2 => v2 } 语法。",
  },
  {
    id: "rust-card-cargo",
    title: "Cargo 工程化",
    summary: "Cargo 是 Rust 的构建系统和包管理器，提供从开发到发布的全流程工具链。",
    points: [
      "workspace 管理多 crate 项目，共享 target 目录和依赖版本。",
      "features 实现条件编译，按需启用功能减少编译时间和二进制大小。",
      "clippy + rustfmt + cargo audit 构成代码质量保障工具链。",
    ],
    practice: "创建一个包含 lib crate 和 bin crate 的 workspace 项目，配置 features 和 CI。",
  },
]

export const rustExamQuestions: QuizQuestion[] = [
  { id: "rust-q1", question: "Rust 中变量默认是什么性质？", options: ["可变的", "不可变的", "全局的", "静态的"], answer: 1, rationale: "Rust 变量默认不可变（immutable），需要使用 mut 关键字显式声明可变性。" },
  { id: "rust-q2", question: "以下哪个是 Rust 所有权的核心规则？", options: ["值可以有多个所有者", "所有者离开作用域时值自动释放", "所有权不可转移", "堆数据自动复制"], answer: 1, rationale: "当所有者离开作用域时，Rust 自动调用 drop 函数释放值占用的资源。" },
  { id: "rust-q3", question: "Rust 中 String 赋值给另一个变量时发生什么？", options: ["深拷贝", "浅拷贝", "所有权移动（Move）", "编译错误"], answer: 2, rationale: "String 是堆分配类型，赋值时所有权发生转移（Move），原变量失效。" },
  { id: "rust-q4", question: "Rust 借用规则中，以下哪种情况是允许的？", options: ["同时存在 &T 和 &mut T", "同时存在多个 &mut T", "同时存在多个 &T", "对已释放的值创建引用"], answer: 2, rationale: "借用规则允许同时存在任意数量的不可变引用 &T，但不允许与 &mut T 同时存在。" },
  { id: "rust-q5", question: "match 表达式的核心要求是什么？", options: ["至少匹配一种情况", "必须穷举所有可能的值", "只能用于整数类型", "不能有默认分支"], answer: 1, rationale: "Rust 的 match 要求穷举所有可能的情况，可以使用 _ 通配符匹配剩余模式。" },
  { id: "rust-q6", question: "? 运算符的作用是什么？", options: ["强制解包 Option", "创建新的 Result", "自动传播错误，将 Err 提前返回", "忽略错误"], answer: 2, rationale: "? 运算符从 Result 中取出 Ok 值，遇到 Err 时自动从函数返回并通过 From trait 转换错误类型。" },
  { id: "rust-q7", question: "泛型函数在 Rust 中如何实现零成本抽象？", options: ["运行时类型擦除", "虚函数表分发", "编译期单态化（Monomorphization）", "解释执行"], answer: 2, rationale: "Rust 编译器通过单态化为泛型函数的每种具体类型生成专用代码，无运行时开销。" },
  { id: "rust-q8", question: "生命周期标注 'a 的作用是什么？", options: ["延长变量的生存时间", "描述引用间的有效范围关系", "创建全局变量", "标记堆分配"], answer: 1, rationale: "生命周期标注描述引用之间的有效范围关系，帮助编译器验证引用不会悬垂。" },
  { id: "rust-q9", question: "Rc<T> 和 Arc<T> 的核心区别是？", options: ["Rc 更快因为不需要计数", "Arc 使用原子操作实现线程安全的引用计数", "Rc 可跨线程使用", "Arc 不支持弱引用"], answer: 1, rationale: "Arc 使用原子操作（atomic operations）维护引用计数，是线程安全的；Rc 使用普通计数，仅限单线程。" },
  { id: "rust-q10", question: "闭包捕获环境变量时，Fn/FnMut/FnOnce 的区别是？", options: ["没有区别", "Fn 借用、FnMut 可变借用、FnOnce 获取所有权", "FnOnce 可调用多次", "Fn 获取所有权"], answer: 1, rationale: "Fn 以不可变引用捕获，FnMut 以可变引用捕获，FnOnce 获取所有权因此只能调用一次。" },
  { id: "rust-q11", question: "Send trait 表示什么含义？", options: ["类型可以被序列化", "类型的值可以安全地跨线程移动", "类型可以通过网络发送", "类型支持复制"], answer: 1, rationale: "Send 标记 trait 表示类型的值可以安全地在线程之间转移所有权。" },
  { id: "rust-q12", question: "async fn 在 Rust 中返回什么？", options: ["线程句柄", "立即执行的结果", "实现 Future trait 的匿名类型", "Promise 对象"], answer: 2, rationale: "async fn 返回一个实现了 Future trait 的匿名类型，在被 await 或 poll 之前不会执行。" },
  { id: "rust-q13", question: "unsafe 块中不能执行以下哪种操作？", options: ["解引用裸指针", "调用 unsafe 函数", "绕过借用检查器规则", "访问可变静态变量"], answer: 2, rationale: "unsafe 不会关闭借用检查器，它只额外允许五种特定操作（裸指针、unsafe 函数、可变静态变量、unsafe trait、union 字段）。" },
  { id: "rust-q14", question: "Cargo workspace 的主要优势是？", options: ["加快网络下载速度", "多个 crate 共享依赖版本和构建缓存", "自动部署到生产环境", "替代版本控制系统"], answer: 1, rationale: "workspace 让多个 crate 共享同一个 Cargo.lock 和 target 目录，统一依赖版本管理。" },
  { id: "rust-q15", question: "macro_rules! 宏属于哪种类型？", options: ["过程宏", "声明宏", "编译器内置宏", "运行时宏"], answer: 1, rationale: "macro_rules! 是声明式宏（declarative macro），通过模式匹配进行代码替换。" },
  { id: "rust-q16", question: "Tokio 中 select! 宏的作用是？", options: ["选择编译器版本", "同时等待多个异步操作，执行最先完成的分支", "选择运行时模式", "选择线程数量"], answer: 1, rationale: "tokio::select! 同时轮询多个 Future，第一个完成的分支执行，其余被取消。" },
  { id: "rust-q17", question: "Axum 框架中 Extractor 的作用是？", options: ["提取数据库记录", "从 HTTP 请求中自动解析数据到 Handler 参数", "提取日志信息", "提取环境变量"], answer: 1, rationale: "Extractor 自动从请求的不同部分（Path/Query/Body/Header）解析数据并注入 Handler 参数。" },
  { id: "rust-q18", question: "#![no_std] 的作用是什么？", options: ["禁用所有库", "禁用标准库，仅使用 core 库", "禁用类型检查", "禁用优化"], answer: 1, rationale: "#![no_std] 移除对标准库的依赖，仅保留 core 库，适用于嵌入式等无操作系统环境。" },
  { id: "rust-q19", question: "Rust 中避免不必要克隆的推荐做法是？", options: ["总是使用 clone()", "使用引用和借用，必要时使用 Cow<T>", "使用全局变量", "使用 unsafe 跳过检查"], answer: 1, rationale: "优先使用借用避免拷贝，Cow（Clone-on-Write）在需要时才进行克隆，平衡安全性和性能。" },
  { id: "rust-q20", question: "wasm-bindgen 的核心功能是？", options: ["绑定数据库", "实现 Rust 与 JavaScript 之间的类型映射和互调用", "绑定 C 库", "绑定 GPU"], answer: 1, rationale: "wasm-bindgen 提供 Rust 和 JavaScript 之间的高级绑定，自动生成互操作的胶水代码。" },
]

export const rustRoadmap: RoadmapDefinition = {
  id: "rust",
  label: "Rust 系统编程",
  title: "Rust 系统编程学习路线",
  durationLabel: "12 周·36 课时",
  description: "从基础语法到系统编程，系统掌握所有权、Trait、并发、异步编程、宏与工程化实践，构建安全高性能的 Rust 开发能力。",
  heroBadge: "所有权 · 并发安全 · 异步编程 · 系统编程",
  stages: rustStages,
  knowledgeCards: rustKnowledgeCards,
  examQuestions: rustExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "开始 Rust 之旅，先理解变量绑定、类型系统和所有权模型。"
    if (percent < 25) return "继续深入所有权与借用，这是 Rust 最核心的概念。"
    if (percent < 50) return "掌握泛型、Trait 和生命周期，建立 Rust 高级抽象能力。"
    if (percent < 75) return "深入并发与异步编程，理解 Rust 的系统级编程能力。"
    if (percent < 100) return "完善工程化实践，掌握宏编程和 Web 开发。"
    return "恭喜完成！你已具备 Rust 系统编程能力，继续探索嵌入式和高性能服务开发！"
  },
  resourceGuide: {
    environment: "安装 rustup（https://rustup.rs），配置 VS Code + rust-analyzer 扩展，使用 cargo 管理项目。",
    fallbackKeyPoints: [
      "所有权三原则：唯一所有者、作用域结束自动释放、赋值即移动",
      "借用规则：任意 &T 或唯一 &mut T，编译期保证无数据竞争",
      "泛型通过单态化实现零成本抽象",
      "async/await 编译为状态机，需要运行时（Tokio）驱动",
      "unsafe 是安全抽象的基础，应封装在安全 API 后面",
    ],
    handsOnSteps: [
      "用 cargo new 创建项目，实现一个命令行猜数字游戏（覆盖变量、循环、匹配）",
      "实现一个简单链表或二叉树，体会所有权和 Box 的使用",
      "编写泛型数据结构并实现常用 Trait（Display/Iterator/From）",
      "使用 Tokio 编写一个简单的异步 TCP 聊天服务器",
      "用 Axum 搭建 REST API，集成 SQLx 数据库操作和错误处理",
    ],
    selfChecks: [
      "能否解释所有权、Move、借用和生命周期之间的关系？",
      "是否理解 Trait 的静态分发与动态分发的区别和适用场景？",
      "是否掌握 Send/Sync 如何在编译期保证线程安全？",
      "能否使用 async/await 和 Tokio 编写并发网络程序？",
      "是否能用 Cargo workspace 组织多 crate 项目并配置 CI？",
    ],
    extensions: [
      "深入学习 Rustonomicon，理解 unsafe 底层细节",
      "探索嵌入式 Rust（embassy 框架）和实时系统开发",
      "学习 WebAssembly 应用开发（wasm-bindgen/Leptos/Yew）",
      "研究 Rust 在操作系统开发中的应用（如 Redox OS）",
    ],
    lessonQuizAdvice: "每周完成代码练习后再做测验，Rust 概念需要通过编译器反馈来加深理解。",
  },
}
