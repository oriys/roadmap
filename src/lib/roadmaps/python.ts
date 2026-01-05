import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const pythonStages: Stage[] = [
  {
    id: "python-foundation",
    title: "阶段一：Python 基础入门",
    duration: "第 1-3 周",
    goal: "搭建开发环境，掌握 Python 基础语法与核心数据类型。",
    weeks: [
      {
        id: "py-w1",
        title: "第 1 周：环境搭建与第一个程序",
        summary: "安装 Python 环境，理解解释器工作原理，编写 Hello World。",
        keyPoints: [
          "安装 Python 3.11+ 并配置环境变量。",
          "理解 Python 解释器与交互式环境（REPL）。",
          "了解 Python 程序的基本结构和执行方式。",
        ],
        lessons: [
          {
            id: "py-w1-1",
            title: "环境搭建与配置",
            detail: "安装 Python，配置 PATH，选择合适的 IDE 或编辑器。",
            keyPoints: [
              "从 python.org 下载安装最新稳定版。",
              "推荐使用 VS Code + Python 扩展或 PyCharm。",
              "理解虚拟环境（venv）的重要性。",
            ],
            resources: [
              { title: "Python 官方下载", url: "https://www.python.org/downloads/" },
              { title: "Python 安装指南", url: "https://docs.python.org/3/using/index.html" },
              { title: "VS Code Python 扩展", url: "https://marketplace.visualstudio.com/items?itemName=ms-python.python" },
            ],
          },
          {
            id: "py-w1-2",
            title: "Hello World 与程序结构",
            detail: "编写第一个 Python 程序，理解脚本执行和模块概念。",
            keyPoints: [
              "使用 print() 函数输出内容。",
              "理解 __name__ == '__main__' 的作用。",
              "Python 使用缩进表示代码块，而非花括号。",
            ],
            resources: [
              { title: "Python 官方教程", url: "https://docs.python.org/3/tutorial/index.html" },
              { title: "Python 交互式教程", url: "https://docs.python.org/3/tutorial/interpreter.html" },
              { title: "roadmap.sh Python", url: "https://roadmap.sh/python" },
            ],
          },
          {
            id: "py-w1-3",
            title: "交互式环境与 pip",
            detail: "使用 Python REPL 进行交互式编程，使用 pip 管理包。",
            keyPoints: [
              "python -i 进入交互式模式。",
              "pip install 安装第三方包。",
              "pip freeze > requirements.txt 导出依赖。",
            ],
            resources: [
              { title: "pip 用户指南", url: "https://pip.pypa.io/en/stable/user_guide/" },
              { title: "Python 包索引 PyPI", url: "https://pypi.org/" },
              { title: "虚拟环境教程", url: "https://docs.python.org/3/tutorial/venv.html" },
            ],
          },
        ],
      },
      {
        id: "py-w2",
        title: "第 2 周：变量与基本数据类型",
        summary: "掌握变量定义、动态类型、数值、字符串和布尔类型。",
        keyPoints: [
          "Python 是动态类型语言，变量无需声明类型。",
          "理解 int、float、str、bool 基本类型。",
          "掌握字符串的常用操作和格式化方法。",
        ],
        lessons: [
          {
            id: "py-w2-1",
            title: "变量与动态类型",
            detail: "理解 Python 变量的本质是对象引用，掌握命名规范。",
            keyPoints: [
              "变量是对象的引用，而非存储值的容器。",
              "使用 type() 检查类型，id() 查看内存地址。",
              "遵循 PEP 8 命名规范：snake_case。",
            ],
            resources: [
              { title: "Python 数据模型", url: "https://docs.python.org/3/reference/datamodel.html" },
              { title: "PEP 8 风格指南", url: "https://peps.python.org/pep-0008/" },
              { title: "内置类型", url: "https://docs.python.org/3/library/stdtypes.html" },
            ],
          },
          {
            id: "py-w2-2",
            title: "数值类型",
            detail: "掌握整数、浮点数、复数以及数学运算。",
            keyPoints: [
              "Python 整数没有大小限制。",
              "// 是整除，% 是取模，** 是幂运算。",
              "使用 decimal.Decimal 处理精确小数。",
            ],
            resources: [
              { title: "数值类型文档", url: "https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex" },
              { title: "decimal 模块", url: "https://docs.python.org/3/library/decimal.html" },
              { title: "math 模块", url: "https://docs.python.org/3/library/math.html" },
            ],
          },
          {
            id: "py-w2-3",
            title: "字符串与格式化",
            detail: "掌握字符串的创建、操作和多种格式化方式。",
            keyPoints: [
              "字符串是不可变序列，支持切片操作。",
              "f-string 是现代 Python 推荐的格式化方式。",
              "使用 .split()、.join()、.strip() 等常用方法。",
            ],
            resources: [
              { title: "字符串方法", url: "https://docs.python.org/3/library/stdtypes.html#string-methods" },
              { title: "格式化字符串", url: "https://docs.python.org/3/tutorial/inputoutput.html#formatted-string-literals" },
              { title: "字符串教程", url: "https://docs.python.org/3/tutorial/introduction.html#strings" },
            ],
          },
          {
            id: "py-w2-4",
            title: "布尔与 None",
            detail: "理解布尔类型、真值测试和 None 的语义。",
            keyPoints: [
              "bool 类型只有 True 和 False 两个值。",
              "空容器、0、None 在布尔上下文中为假。",
              "使用 is None 而非 == None 检查 None。",
            ],
            resources: [
              { title: "布尔运算", url: "https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not" },
              { title: "真值测试", url: "https://docs.python.org/3/library/stdtypes.html#truth-value-testing" },
              { title: "比较运算", url: "https://docs.python.org/3/library/stdtypes.html#comparisons" },
            ],
          },
        ],
      },
      {
        id: "py-w3",
        title: "第 3 周：控制流与输入输出",
        summary: "学习条件判断、循环语句和用户输入输出。",
        keyPoints: [
          "掌握 if/elif/else 条件判断。",
          "理解 for 和 while 两种循环。",
          "使用 input() 获取用户输入。",
        ],
        lessons: [
          {
            id: "py-w3-1",
            title: "条件判断",
            detail: "使用 if/elif/else 进行分支控制，理解条件表达式。",
            keyPoints: [
              "Python 使用缩进标识代码块。",
              "支持条件表达式（三元运算符）：x if cond else y。",
              "使用 and、or、not 进行逻辑运算。",
            ],
            resources: [
              { title: "if 语句", url: "https://docs.python.org/3/tutorial/controlflow.html#if-statements" },
              { title: "条件表达式", url: "https://docs.python.org/3/reference/expressions.html#conditional-expressions" },
              { title: "复合语句", url: "https://docs.python.org/3/reference/compound_stmts.html" },
            ],
          },
          {
            id: "py-w3-2",
            title: "for 循环与 range",
            detail: "使用 for 循环遍历序列，掌握 range() 函数。",
            keyPoints: [
              "for item in iterable 是 Python 的迭代语法。",
              "range(start, stop, step) 生成整数序列。",
              "使用 enumerate() 同时获取索引和值。",
            ],
            resources: [
              { title: "for 语句", url: "https://docs.python.org/3/tutorial/controlflow.html#for-statements" },
              { title: "range 函数", url: "https://docs.python.org/3/library/stdtypes.html#range" },
              { title: "循环技巧", url: "https://docs.python.org/3/tutorial/datastructures.html#looping-techniques" },
            ],
          },
          {
            id: "py-w3-3",
            title: "while 循环与控制语句",
            detail: "使用 while 循环，掌握 break、continue、else 子句。",
            keyPoints: [
              "while 条件为真时持续执行。",
              "break 立即退出循环，continue 跳过本次迭代。",
              "循环的 else 子句在正常结束时执行。",
            ],
            resources: [
              { title: "while 语句", url: "https://docs.python.org/3/reference/compound_stmts.html#the-while-statement" },
              { title: "break/continue", url: "https://docs.python.org/3/tutorial/controlflow.html#break-and-continue-statements-and-else-clauses-on-loops" },
              { title: "pass 语句", url: "https://docs.python.org/3/tutorial/controlflow.html#pass-statements" },
            ],
          },
          {
            id: "py-w3-4",
            title: "输入输出",
            detail: "使用 input() 获取用户输入，格式化输出结果。",
            keyPoints: [
              "input() 返回字符串，需要类型转换。",
              "print() 支持 sep 和 end 参数自定义输出。",
              "使用 f-string 进行格式化输出。",
            ],
            resources: [
              { title: "输入输出教程", url: "https://docs.python.org/3/tutorial/inputoutput.html" },
              { title: "print 函数", url: "https://docs.python.org/3/library/functions.html#print" },
              { title: "input 函数", url: "https://docs.python.org/3/library/functions.html#input" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "python-data-structures",
    title: "阶段二：数据结构与函数",
    duration: "第 4-6 周",
    goal: "掌握 Python 核心数据结构和函数式编程特性。",
    weeks: [
      {
        id: "py-w4",
        title: "第 4 周：列表与元组",
        summary: "深入学习列表和元组的使用方法和区别。",
        keyPoints: [
          "列表是可变序列，元组是不可变序列。",
          "掌握列表推导式（List Comprehension）。",
          "理解序列的切片操作。",
        ],
        lessons: [
          {
            id: "py-w4-1",
            title: "列表基础",
            detail: "创建和操作列表，掌握常用方法。",
            keyPoints: [
              "使用 [] 或 list() 创建列表。",
              "append()、extend()、insert() 添加元素。",
              "pop()、remove()、clear() 删除元素。",
            ],
            resources: [
              { title: "列表教程", url: "https://docs.python.org/3/tutorial/introduction.html#lists" },
              { title: "列表方法", url: "https://docs.python.org/3/tutorial/datastructures.html#more-on-lists" },
              { title: "序列类型", url: "https://docs.python.org/3/library/stdtypes.html#sequence-types-list-tuple-range" },
            ],
          },
          {
            id: "py-w4-2",
            title: "列表推导式",
            detail: "使用列表推导式简洁地创建和转换列表。",
            keyPoints: [
              "[expr for item in iterable] 是基本语法。",
              "支持条件过滤：[x for x in list if condition]。",
              "可以嵌套多层循环。",
            ],
            resources: [
              { title: "列表推导式", url: "https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions" },
              { title: "嵌套推导式", url: "https://docs.python.org/3/tutorial/datastructures.html#nested-list-comprehensions" },
              { title: "PEP 202", url: "https://peps.python.org/pep-0202/" },
            ],
          },
          {
            id: "py-w4-3",
            title: "切片操作",
            detail: "使用切片访问和修改序列的部分元素。",
            keyPoints: [
              "seq[start:stop:step] 是切片语法。",
              "负数索引从末尾开始计数。",
              "切片返回新对象，原序列不变。",
            ],
            resources: [
              { title: "序列切片", url: "https://docs.python.org/3/library/stdtypes.html#common-sequence-operations" },
              { title: "切片对象", url: "https://docs.python.org/3/library/functions.html#slice" },
              { title: "切片赋值", url: "https://docs.python.org/3/tutorial/introduction.html#lists" },
            ],
          },
          {
            id: "py-w4-4",
            title: "元组与解包",
            detail: "使用元组存储不可变序列，掌握解包技巧。",
            keyPoints: [
              "元组用 () 创建，是不可变序列。",
              "支持解包赋值：a, b = (1, 2)。",
              "使用 * 捕获剩余元素：first, *rest = list。",
            ],
            resources: [
              { title: "元组文档", url: "https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences" },
              { title: "解包赋值", url: "https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences" },
              { title: "PEP 3132 扩展解包", url: "https://peps.python.org/pep-3132/" },
            ],
          },
        ],
      },
      {
        id: "py-w5",
        title: "第 5 周：字典与集合",
        summary: "掌握字典和集合的使用场景和操作方法。",
        keyPoints: [
          "字典是键值对映射，集合是无序不重复元素。",
          "理解哈希表原理和可哈希性要求。",
          "掌握字典推导式和集合推导式。",
        ],
        lessons: [
          {
            id: "py-w5-1",
            title: "字典基础",
            detail: "创建和操作字典，掌握常用方法。",
            keyPoints: [
              "使用 {} 或 dict() 创建字典。",
              "get() 方法安全获取值，避免 KeyError。",
              "keys()、values()、items() 返回视图对象。",
            ],
            resources: [
              { title: "字典教程", url: "https://docs.python.org/3/tutorial/datastructures.html#dictionaries" },
              { title: "字典类型", url: "https://docs.python.org/3/library/stdtypes.html#mapping-types-dict" },
              { title: "字典方法", url: "https://docs.python.org/3/library/stdtypes.html#dict" },
            ],
          },
          {
            id: "py-w5-2",
            title: "字典进阶",
            detail: "学习字典推导式、合并操作和默认值处理。",
            keyPoints: [
              "{k: v for k, v in iterable} 是字典推导式。",
              "Python 3.9+ 支持 | 运算符合并字典。",
              "使用 setdefault() 或 defaultdict 处理默认值。",
            ],
            resources: [
              { title: "字典推导式", url: "https://docs.python.org/3/tutorial/datastructures.html#dictionaries" },
              { title: "PEP 584 字典合并", url: "https://peps.python.org/pep-0584/" },
              { title: "collections.defaultdict", url: "https://docs.python.org/3/library/collections.html#collections.defaultdict" },
            ],
          },
          {
            id: "py-w5-3",
            title: "集合操作",
            detail: "使用集合进行去重和集合运算。",
            keyPoints: [
              "使用 set() 或 {} 创建集合（空集合必须用 set()）。",
              "支持交集 &、并集 |、差集 -、对称差 ^。",
              "集合元素必须是可哈希的。",
            ],
            resources: [
              { title: "集合类型", url: "https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset" },
              { title: "集合教程", url: "https://docs.python.org/3/tutorial/datastructures.html#sets" },
              { title: "frozenset 不可变集合", url: "https://docs.python.org/3/library/stdtypes.html#frozenset" },
            ],
          },
          {
            id: "py-w5-4",
            title: "哈希与可变性",
            detail: "理解哈希表原理，区分可变和不可变类型。",
            keyPoints: [
              "字典键和集合元素必须可哈希。",
              "可变对象（list、dict、set）不可哈希。",
              "自定义类型需实现 __hash__ 和 __eq__。",
            ],
            resources: [
              { title: "object.__hash__", url: "https://docs.python.org/3/reference/datamodel.html#object.__hash__" },
              { title: "hashable 定义", url: "https://docs.python.org/3/glossary.html#term-hashable" },
              { title: "可变与不可变", url: "https://docs.python.org/3/reference/datamodel.html#objects-values-and-types" },
            ],
          },
        ],
      },
      {
        id: "py-w6",
        title: "第 6 周：函数基础",
        summary: "掌握函数定义、参数传递和作用域规则。",
        keyPoints: [
          "理解函数定义和调用语法。",
          "掌握位置参数、关键字参数、默认参数。",
          "理解 LEGB 作用域规则。",
        ],
        lessons: [
          {
            id: "py-w6-1",
            title: "函数定义与调用",
            detail: "使用 def 定义函数，理解返回值和文档字符串。",
            keyPoints: [
              "def func_name(params): 定义函数。",
              "return 返回值，无 return 返回 None。",
              "使用三引号编写 docstring 文档。",
            ],
            resources: [
              { title: "函数定义", url: "https://docs.python.org/3/tutorial/controlflow.html#defining-functions" },
              { title: "函数对象", url: "https://docs.python.org/3/reference/compound_stmts.html#function-definitions" },
              { title: "文档字符串", url: "https://docs.python.org/3/tutorial/controlflow.html#documentation-strings" },
            ],
          },
          {
            id: "py-w6-2",
            title: "参数类型详解",
            detail: "掌握位置参数、关键字参数、默认参数和可变参数。",
            keyPoints: [
              "*args 接收任意数量位置参数（元组）。",
              "**kwargs 接收任意数量关键字参数（字典）。",
              "默认参数要避免使用可变对象。",
            ],
            resources: [
              { title: "参数默认值", url: "https://docs.python.org/3/tutorial/controlflow.html#default-argument-values" },
              { title: "关键字参数", url: "https://docs.python.org/3/tutorial/controlflow.html#keyword-arguments" },
              { title: "任意参数列表", url: "https://docs.python.org/3/tutorial/controlflow.html#arbitrary-argument-lists" },
            ],
          },
          {
            id: "py-w6-3",
            title: "作用域与闭包",
            detail: "理解 LEGB 作用域规则和闭包机制。",
            keyPoints: [
              "LEGB: Local、Enclosing、Global、Built-in。",
              "使用 global 声明全局变量，nonlocal 声明外层变量。",
              "闭包捕获外层函数的变量。",
            ],
            resources: [
              { title: "作用域规则", url: "https://docs.python.org/3/tutorial/classes.html#python-scopes-and-namespaces" },
              { title: "global 语句", url: "https://docs.python.org/3/reference/simple_stmts.html#the-global-statement" },
              { title: "nonlocal 语句", url: "https://docs.python.org/3/reference/simple_stmts.html#the-nonlocal-statement" },
            ],
          },
          {
            id: "py-w6-4",
            title: "Lambda 与高阶函数",
            detail: "使用 lambda 表达式和 map、filter、reduce 等高阶函数。",
            keyPoints: [
              "lambda args: expr 创建匿名函数。",
              "map(func, iterable) 对每个元素应用函数。",
              "filter(func, iterable) 过滤满足条件的元素。",
            ],
            resources: [
              { title: "Lambda 表达式", url: "https://docs.python.org/3/tutorial/controlflow.html#lambda-expressions" },
              { title: "map 函数", url: "https://docs.python.org/3/library/functions.html#map" },
              { title: "filter 函数", url: "https://docs.python.org/3/library/functions.html#filter" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "python-oop",
    title: "阶段三：面向对象编程",
    duration: "第 7-9 周",
    goal: "掌握 Python 面向对象编程核心概念和高级特性。",
    weeks: [
      {
        id: "py-w7",
        title: "第 7 周：类与对象基础",
        summary: "学习类的定义、实例化和属性访问。",
        keyPoints: [
          "理解类和实例的关系。",
          "掌握 __init__ 构造方法。",
          "区分实例属性和类属性。",
        ],
        lessons: [
          {
            id: "py-w7-1",
            title: "类定义与实例化",
            detail: "使用 class 定义类，创建和使用实例。",
            keyPoints: [
              "class ClassName: 定义类。",
              "调用类创建实例：obj = ClassName()。",
              "self 参数指向实例本身。",
            ],
            resources: [
              { title: "类教程", url: "https://docs.python.org/3/tutorial/classes.html" },
              { title: "类定义", url: "https://docs.python.org/3/reference/compound_stmts.html#class-definitions" },
              { title: "类对象", url: "https://docs.python.org/3/tutorial/classes.html#class-objects" },
            ],
          },
          {
            id: "py-w7-2",
            title: "__init__ 与实例属性",
            detail: "使用 __init__ 初始化实例，管理实例属性。",
            keyPoints: [
              "__init__ 在实例创建后自动调用。",
              "self.attr = value 设置实例属性。",
              "实例属性存储在 __dict__ 中。",
            ],
            resources: [
              { title: "实例对象", url: "https://docs.python.org/3/tutorial/classes.html#instance-objects" },
              { title: "__init__ 方法", url: "https://docs.python.org/3/reference/datamodel.html#object.__init__" },
              { title: "类与实例变量", url: "https://docs.python.org/3/tutorial/classes.html#class-and-instance-variables" },
            ],
          },
          {
            id: "py-w7-3",
            title: "类属性与方法",
            detail: "定义类属性和方法，理解与实例成员的区别。",
            keyPoints: [
              "类属性在类体中直接定义，所有实例共享。",
              "实例方法第一个参数是 self。",
              "通过类或实例都可以访问类属性。",
            ],
            resources: [
              { title: "类变量", url: "https://docs.python.org/3/tutorial/classes.html#class-and-instance-variables" },
              { title: "方法对象", url: "https://docs.python.org/3/tutorial/classes.html#method-objects" },
              { title: "类定义语法", url: "https://docs.python.org/3/reference/compound_stmts.html#class-definitions" },
            ],
          },
          {
            id: "py-w7-4",
            title: "静态方法与类方法",
            detail: "使用 @staticmethod 和 @classmethod 装饰器。",
            keyPoints: [
              "@staticmethod 定义不访问实例或类的方法。",
              "@classmethod 第一个参数 cls 指向类。",
              "类方法常用于工厂方法模式。",
            ],
            resources: [
              { title: "staticmethod", url: "https://docs.python.org/3/library/functions.html#staticmethod" },
              { title: "classmethod", url: "https://docs.python.org/3/library/functions.html#classmethod" },
              { title: "方法类型对比", url: "https://docs.python.org/3/howto/descriptor.html#static-methods-and-class-methods" },
            ],
          },
        ],
      },
      {
        id: "py-w8",
        title: "第 8 周：继承与多态",
        summary: "学习继承机制、方法重写和多态实现。",
        keyPoints: [
          "理解单继承和多继承。",
          "掌握 super() 调用父类方法。",
          "理解 MRO（方法解析顺序）。",
        ],
        lessons: [
          {
            id: "py-w8-1",
            title: "继承基础",
            detail: "使用继承扩展类功能，重写父类方法。",
            keyPoints: [
              "class Child(Parent): 定义子类。",
              "子类继承父类的属性和方法。",
              "重写方法覆盖父类实现。",
            ],
            resources: [
              { title: "继承教程", url: "https://docs.python.org/3/tutorial/classes.html#inheritance" },
              { title: "继承详解", url: "https://docs.python.org/3/reference/datamodel.html#customizing-class-creation" },
              { title: "isinstance 和 issubclass", url: "https://docs.python.org/3/library/functions.html#isinstance" },
            ],
          },
          {
            id: "py-w8-2",
            title: "super() 与方法解析",
            detail: "使用 super() 调用父类方法，理解 MRO。",
            keyPoints: [
              "super() 返回父类的代理对象。",
              "MRO 决定多继承时方法查找顺序。",
              "使用 ClassName.mro() 查看方法解析顺序。",
            ],
            resources: [
              { title: "super 函数", url: "https://docs.python.org/3/library/functions.html#super" },
              { title: "MRO 文档", url: "https://docs.python.org/3/glossary.html#term-method-resolution-order" },
              { title: "多继承教程", url: "https://docs.python.org/3/tutorial/classes.html#multiple-inheritance" },
            ],
          },
          {
            id: "py-w8-3",
            title: "多继承与 Mixin",
            detail: "使用多继承和 Mixin 模式组合功能。",
            keyPoints: [
              "Python 支持多继承：class C(A, B)。",
              "Mixin 是提供可选功能的小型类。",
              "C3 线性化算法确定 MRO。",
            ],
            resources: [
              { title: "多继承", url: "https://docs.python.org/3/tutorial/classes.html#multiple-inheritance" },
              { title: "C3 线性化", url: "https://www.python.org/download/releases/2.3/mro/" },
              { title: "Mixin 模式", url: "https://docs.python.org/3/howto/descriptor.html" },
            ],
          },
          {
            id: "py-w8-4",
            title: "鸭子类型与多态",
            detail: "理解 Python 的鸭子类型和多态机制。",
            keyPoints: [
              "鸭子类型：关注行为而非类型。",
              "Python 多态不需要继承，只需相同方法。",
              "使用 ABC 模块定义抽象基类。",
            ],
            resources: [
              { title: "鸭子类型", url: "https://docs.python.org/3/glossary.html#term-duck-typing" },
              { title: "abc 模块", url: "https://docs.python.org/3/library/abc.html" },
              { title: "抽象基类", url: "https://docs.python.org/3/library/abc.html#abc.ABC" },
            ],
          },
        ],
      },
      {
        id: "py-w9",
        title: "第 9 周：魔术方法与属性控制",
        summary: "学习特殊方法和属性访问控制机制。",
        keyPoints: [
          "理解 __str__、__repr__ 等常用魔术方法。",
          "掌握 @property 装饰器。",
          "了解描述符协议。",
        ],
        lessons: [
          {
            id: "py-w9-1",
            title: "对象表示方法",
            detail: "实现 __str__、__repr__、__format__ 等方法。",
            keyPoints: [
              "__repr__ 返回对象的正式字符串表示。",
              "__str__ 返回用户友好的字符串。",
              "__format__ 支持格式化规范。",
            ],
            resources: [
              { title: "__repr__ 文档", url: "https://docs.python.org/3/reference/datamodel.html#object.__repr__" },
              { title: "__str__ 文档", url: "https://docs.python.org/3/reference/datamodel.html#object.__str__" },
              { title: "格式化字符串语法", url: "https://docs.python.org/3/library/string.html#formatspec" },
            ],
          },
          {
            id: "py-w9-2",
            title: "运算符重载",
            detail: "实现 __add__、__eq__、__lt__ 等运算符方法。",
            keyPoints: [
              "__add__ 实现 + 运算符。",
              "__eq__ 实现 == 比较。",
              "__len__ 支持 len() 函数。",
            ],
            resources: [
              { title: "运算符重载", url: "https://docs.python.org/3/reference/datamodel.html#emulating-numeric-types" },
              { title: "比较运算符", url: "https://docs.python.org/3/reference/datamodel.html#object.__lt__" },
              { title: "functools.total_ordering", url: "https://docs.python.org/3/library/functools.html#functools.total_ordering" },
            ],
          },
          {
            id: "py-w9-3",
            title: "@property 装饰器",
            detail: "使用 property 实现 getter/setter/deleter。",
            keyPoints: [
              "@property 将方法变成只读属性。",
              "@attr.setter 定义属性设置方法。",
              "property 可用于数据验证和计算属性。",
            ],
            resources: [
              { title: "property 函数", url: "https://docs.python.org/3/library/functions.html#property" },
              { title: "property 教程", url: "https://docs.python.org/3/howto/descriptor.html#properties" },
              { title: "描述符指南", url: "https://docs.python.org/3/howto/descriptor.html" },
            ],
          },
          {
            id: "py-w9-4",
            title: "属性访问控制",
            detail: "实现 __getattr__、__setattr__、__delattr__ 方法。",
            keyPoints: [
              "__getattr__ 在属性未找到时调用。",
              "__getattribute__ 拦截所有属性访问。",
              "__slots__ 限制实例属性并节省内存。",
            ],
            resources: [
              { title: "__getattr__ 文档", url: "https://docs.python.org/3/reference/datamodel.html#object.__getattr__" },
              { title: "__slots__ 文档", url: "https://docs.python.org/3/reference/datamodel.html#slots" },
              { title: "自定义属性访问", url: "https://docs.python.org/3/reference/datamodel.html#customizing-attribute-access" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "python-files-exceptions",
    title: "阶段四：文件与异常处理",
    duration: "第 10-11 周",
    goal: "掌握文件操作、异常处理和上下文管理器。",
    weeks: [
      {
        id: "py-w10",
        title: "第 10 周：文件操作",
        summary: "学习文件读写、路径处理和序列化。",
        keyPoints: [
          "使用 open() 和 with 语句处理文件。",
          "掌握 pathlib 模块的现代路径操作。",
          "学习 JSON 和 pickle 序列化。",
        ],
        lessons: [
          {
            id: "py-w10-1",
            title: "文件读写基础",
            detail: "使用 open() 打开文件，读取和写入内容。",
            keyPoints: [
              "open(file, mode) 打开文件，mode 包括 r/w/a/b。",
              "使用 with 语句确保文件正确关闭。",
              "read()、readline()、readlines() 读取内容。",
            ],
            resources: [
              { title: "文件读写", url: "https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files" },
              { title: "open 函数", url: "https://docs.python.org/3/library/functions.html#open" },
              { title: "文件对象", url: "https://docs.python.org/3/glossary.html#term-file-object" },
            ],
          },
          {
            id: "py-w10-2",
            title: "pathlib 路径操作",
            detail: "使用 pathlib 模块进行跨平台路径操作。",
            keyPoints: [
              "Path 对象表示文件系统路径。",
              "/ 运算符拼接路径。",
              "支持 exists()、is_file()、glob() 等方法。",
            ],
            resources: [
              { title: "pathlib 模块", url: "https://docs.python.org/3/library/pathlib.html" },
              { title: "pathlib 教程", url: "https://docs.python.org/3/library/pathlib.html#basic-use" },
              { title: "os.path 对比", url: "https://docs.python.org/3/library/pathlib.html#correspondence-to-tools-in-the-os-module" },
            ],
          },
          {
            id: "py-w10-3",
            title: "JSON 序列化",
            detail: "使用 json 模块进行 JSON 编解码。",
            keyPoints: [
              "json.dumps() 和 json.loads() 处理字符串。",
              "json.dump() 和 json.load() 处理文件。",
              "使用 default 参数自定义序列化。",
            ],
            resources: [
              { title: "json 模块", url: "https://docs.python.org/3/library/json.html" },
              { title: "JSON 教程", url: "https://docs.python.org/3/tutorial/inputoutput.html#saving-structured-data-with-json" },
              { title: "自定义编码器", url: "https://docs.python.org/3/library/json.html#json.JSONEncoder" },
            ],
          },
          {
            id: "py-w10-4",
            title: "pickle 与其他格式",
            detail: "使用 pickle 序列化 Python 对象，了解 CSV 和 TOML。",
            keyPoints: [
              "pickle 可以序列化任意 Python 对象。",
              "pickle 有安全风险，勿加载不信任数据。",
              "csv 模块处理表格数据，tomllib 解析 TOML。",
            ],
            resources: [
              { title: "pickle 模块", url: "https://docs.python.org/3/library/pickle.html" },
              { title: "csv 模块", url: "https://docs.python.org/3/library/csv.html" },
              { title: "tomllib 模块", url: "https://docs.python.org/3/library/tomllib.html" },
            ],
          },
        ],
      },
      {
        id: "py-w11",
        title: "第 11 周：异常处理与上下文管理",
        summary: "掌握异常处理机制和上下文管理器协议。",
        keyPoints: [
          "使用 try/except/finally 处理异常。",
          "理解异常层次结构和自定义异常。",
          "实现 __enter__ 和 __exit__ 协议。",
        ],
        lessons: [
          {
            id: "py-w11-1",
            title: "异常处理基础",
            detail: "使用 try/except/else/finally 处理异常。",
            keyPoints: [
              "try 块包含可能出错的代码。",
              "except 捕获特定异常，可以使用 as 绑定异常对象。",
              "finally 无论是否异常都会执行。",
            ],
            resources: [
              { title: "异常处理", url: "https://docs.python.org/3/tutorial/errors.html" },
              { title: "try 语句", url: "https://docs.python.org/3/reference/compound_stmts.html#the-try-statement" },
              { title: "内置异常", url: "https://docs.python.org/3/library/exceptions.html" },
            ],
          },
          {
            id: "py-w11-2",
            title: "异常层次与自定义异常",
            detail: "理解异常类层次，创建自定义异常类。",
            keyPoints: [
              "所有异常继承自 BaseException。",
              "自定义异常应继承 Exception。",
              "使用 raise 主动抛出异常。",
            ],
            resources: [
              { title: "异常层次", url: "https://docs.python.org/3/library/exceptions.html#exception-hierarchy" },
              { title: "用户定义异常", url: "https://docs.python.org/3/tutorial/errors.html#user-defined-exceptions" },
              { title: "raise 语句", url: "https://docs.python.org/3/reference/simple_stmts.html#the-raise-statement" },
            ],
          },
          {
            id: "py-w11-3",
            title: "上下文管理器",
            detail: "使用 with 语句和实现上下文管理器协议。",
            keyPoints: [
              "with 语句自动调用 __enter__ 和 __exit__。",
              "__exit__ 返回 True 可以抑制异常。",
              "使用 contextlib 简化上下文管理器创建。",
            ],
            resources: [
              { title: "with 语句", url: "https://docs.python.org/3/reference/compound_stmts.html#the-with-statement" },
              { title: "上下文管理器", url: "https://docs.python.org/3/reference/datamodel.html#context-managers" },
              { title: "contextlib 模块", url: "https://docs.python.org/3/library/contextlib.html" },
            ],
          },
          {
            id: "py-w11-4",
            title: "异常链与最佳实践",
            detail: "使用异常链保留原始异常信息，遵循异常处理最佳实践。",
            keyPoints: [
              "raise ... from e 保留原始异常。",
              "避免裸 except，明确捕获异常类型。",
              "使用 logging 记录异常信息。",
            ],
            resources: [
              { title: "异常链", url: "https://docs.python.org/3/tutorial/errors.html#exception-chaining" },
              { title: "logging 模块", url: "https://docs.python.org/3/library/logging.html" },
              { title: "异常最佳实践", url: "https://docs.python.org/3/tutorial/errors.html#handling-exceptions" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "python-advanced",
    title: "阶段五：高级特性",
    duration: "第 12-14 周",
    goal: "掌握迭代器、生成器、装饰器等高级特性。",
    weeks: [
      {
        id: "py-w12",
        title: "第 12 周：迭代器与生成器",
        summary: "理解迭代协议，使用生成器实现惰性求值。",
        keyPoints: [
          "理解可迭代对象和迭代器的区别。",
          "使用 yield 创建生成器函数。",
          "掌握生成器表达式和 yield from。",
        ],
        lessons: [
          {
            id: "py-w12-1",
            title: "迭代协议",
            detail: "理解 __iter__ 和 __next__ 迭代器协议。",
            keyPoints: [
              "__iter__ 返回迭代器对象。",
              "__next__ 返回下一个元素，无元素时抛出 StopIteration。",
              "for 循环自动调用这两个方法。",
            ],
            resources: [
              { title: "迭代器类型", url: "https://docs.python.org/3/library/stdtypes.html#iterator-types" },
              { title: "迭代器教程", url: "https://docs.python.org/3/tutorial/classes.html#iterators" },
              { title: "__iter__ 文档", url: "https://docs.python.org/3/reference/datamodel.html#object.__iter__" },
            ],
          },
          {
            id: "py-w12-2",
            title: "生成器函数",
            detail: "使用 yield 创建生成器，理解生成器状态。",
            keyPoints: [
              "包含 yield 的函数是生成器函数。",
              "调用生成器函数返回生成器对象。",
              "生成器是惰性的，按需产出值。",
            ],
            resources: [
              { title: "生成器教程", url: "https://docs.python.org/3/tutorial/classes.html#generators" },
              { title: "yield 表达式", url: "https://docs.python.org/3/reference/expressions.html#yield-expressions" },
              { title: "生成器函数", url: "https://docs.python.org/3/glossary.html#term-generator" },
            ],
          },
          {
            id: "py-w12-3",
            title: "生成器表达式与 yield from",
            detail: "使用生成器表达式和 yield from 委托生成。",
            keyPoints: [
              "(expr for item in iterable) 是生成器表达式。",
              "yield from iterable 委托给另一个生成器。",
              "生成器表达式比列表推导式更节省内存。",
            ],
            resources: [
              { title: "生成器表达式", url: "https://docs.python.org/3/tutorial/classes.html#generator-expressions" },
              { title: "yield from", url: "https://docs.python.org/3/reference/expressions.html#yield-expressions" },
              { title: "PEP 380", url: "https://peps.python.org/pep-0380/" },
            ],
          },
          {
            id: "py-w12-4",
            title: "itertools 模块",
            detail: "使用 itertools 进行高效迭代操作。",
            keyPoints: [
              "chain()、cycle()、repeat() 创建迭代器。",
              "islice()、takewhile()、dropwhile() 切片迭代器。",
              "combinations()、permutations() 组合排列。",
            ],
            resources: [
              { title: "itertools 模块", url: "https://docs.python.org/3/library/itertools.html" },
              { title: "itertools 食谱", url: "https://docs.python.org/3/library/itertools.html#itertools-recipes" },
              { title: "functools 模块", url: "https://docs.python.org/3/library/functools.html" },
            ],
          },
        ],
      },
      {
        id: "py-w13",
        title: "第 13 周：装饰器",
        summary: "理解装饰器原理，编写和使用各类装饰器。",
        keyPoints: [
          "理解装饰器是高阶函数。",
          "掌握带参数的装饰器。",
          "学习 functools.wraps 保留元信息。",
        ],
        lessons: [
          {
            id: "py-w13-1",
            title: "装饰器基础",
            detail: "理解装饰器语法和工作原理。",
            keyPoints: [
              "@decorator 是 func = decorator(func) 的语法糖。",
              "装饰器接收函数并返回新函数。",
              "装饰器在函数定义时执行。",
            ],
            resources: [
              { title: "装饰器", url: "https://docs.python.org/3/glossary.html#term-decorator" },
              { title: "函数定义", url: "https://docs.python.org/3/reference/compound_stmts.html#function-definitions" },
              { title: "PEP 318", url: "https://peps.python.org/pep-0318/" },
            ],
          },
          {
            id: "py-w13-2",
            title: "带参数的装饰器",
            detail: "创建可配置的装饰器工厂。",
            keyPoints: [
              "装饰器工厂返回装饰器。",
              "@decorator(args) 先调用工厂再应用装饰器。",
              "使用 functools.partial 简化实现。",
            ],
            resources: [
              { title: "装饰器工厂", url: "https://docs.python.org/3/glossary.html#term-decorator" },
              { title: "functools.partial", url: "https://docs.python.org/3/library/functools.html#functools.partial" },
              { title: "嵌套装饰器", url: "https://peps.python.org/pep-0318/#current-syntax" },
            ],
          },
          {
            id: "py-w13-3",
            title: "functools.wraps",
            detail: "使用 wraps 保留被装饰函数的元信息。",
            keyPoints: [
              "@wraps(func) 复制 __name__、__doc__ 等属性。",
              "没有 wraps 会丢失函数元信息。",
              "update_wrapper 是底层实现。",
            ],
            resources: [
              { title: "functools.wraps", url: "https://docs.python.org/3/library/functools.html#functools.wraps" },
              { title: "update_wrapper", url: "https://docs.python.org/3/library/functools.html#functools.update_wrapper" },
              { title: "WRAPPER_ASSIGNMENTS", url: "https://docs.python.org/3/library/functools.html#functools.WRAPPER_ASSIGNMENTS" },
            ],
          },
          {
            id: "py-w13-4",
            title: "类装饰器",
            detail: "使用类实现装饰器，装饰类本身。",
            keyPoints: [
              "类装饰器实现 __call__ 方法。",
              "类实例可以维护状态。",
              "装饰器也可以用于装饰类。",
            ],
            resources: [
              { title: "__call__ 方法", url: "https://docs.python.org/3/reference/datamodel.html#object.__call__" },
              { title: "类装饰器", url: "https://peps.python.org/pep-3129/" },
              { title: "dataclasses", url: "https://docs.python.org/3/library/dataclasses.html" },
            ],
          },
        ],
      },
      {
        id: "py-w14",
        title: "第 14 周：元编程",
        summary: "学习描述符、元类和代码生成技术。",
        keyPoints: [
          "理解描述符协议。",
          "了解元类的作用和使用场景。",
          "掌握 __init_subclass__ 和类装饰器。",
        ],
        lessons: [
          {
            id: "py-w14-1",
            title: "描述符协议",
            detail: "实现 __get__、__set__、__delete__ 描述符。",
            keyPoints: [
              "描述符定义属性访问行为。",
              "__get__(self, obj, type) 获取属性值。",
              "__set__(self, obj, value) 设置属性值。",
            ],
            resources: [
              { title: "描述符指南", url: "https://docs.python.org/3/howto/descriptor.html" },
              { title: "描述符协议", url: "https://docs.python.org/3/reference/datamodel.html#descriptors" },
              { title: "数据描述符 vs 非数据描述符", url: "https://docs.python.org/3/howto/descriptor.html#descriptor-protocol" },
            ],
          },
          {
            id: "py-w14-2",
            title: "元类基础",
            detail: "理解 type() 和元类的作用。",
            keyPoints: [
              "类是 type 的实例，type 是元类。",
              "class Foo(metaclass=Meta) 指定元类。",
              "元类控制类的创建过程。",
            ],
            resources: [
              { title: "元类", url: "https://docs.python.org/3/reference/datamodel.html#metaclasses" },
              { title: "type 函数", url: "https://docs.python.org/3/library/functions.html#type" },
              { title: "__new__ 方法", url: "https://docs.python.org/3/reference/datamodel.html#object.__new__" },
            ],
          },
          {
            id: "py-w14-3",
            title: "__init_subclass__",
            detail: "使用 __init_subclass__ 钩子自定义子类行为。",
            keyPoints: [
              "__init_subclass__ 在子类创建时调用。",
              "比元类更简单的子类定制方式。",
              "可以接收关键字参数。",
            ],
            resources: [
              { title: "__init_subclass__", url: "https://docs.python.org/3/reference/datamodel.html#object.__init_subclass__" },
              { title: "PEP 487", url: "https://peps.python.org/pep-0487/" },
              { title: "类定制", url: "https://docs.python.org/3/reference/datamodel.html#customizing-class-creation" },
            ],
          },
          {
            id: "py-w14-4",
            title: "dataclasses 与代码生成",
            detail: "使用 dataclasses 自动生成类方法。",
            keyPoints: [
              "@dataclass 自动生成 __init__、__repr__ 等。",
              "field() 自定义字段行为。",
              "支持继承、冻结、排序等特性。",
            ],
            resources: [
              { title: "dataclasses 模块", url: "https://docs.python.org/3/library/dataclasses.html" },
              { title: "PEP 557", url: "https://peps.python.org/pep-0557/" },
              { title: "field 函数", url: "https://docs.python.org/3/library/dataclasses.html#dataclasses.field" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "python-modules",
    title: "阶段六：模块与包管理",
    duration: "第 15 周",
    goal: "掌握模块系统、包结构和依赖管理。",
    weeks: [
      {
        id: "py-w15",
        title: "第 15 周：模块与包",
        summary: "学习模块导入、包结构和现代依赖管理工具。",
        keyPoints: [
          "理解模块和包的概念。",
          "掌握导入系统和命名空间。",
          "学习虚拟环境和依赖管理。",
        ],
        lessons: [
          {
            id: "py-w15-1",
            title: "模块与导入",
            detail: "理解模块系统，掌握 import 语法。",
            keyPoints: [
              "一个 .py 文件就是一个模块。",
              "import module 导入整个模块。",
              "from module import name 导入特定对象。",
            ],
            resources: [
              { title: "模块教程", url: "https://docs.python.org/3/tutorial/modules.html" },
              { title: "导入系统", url: "https://docs.python.org/3/reference/import.html" },
              { title: "__all__ 变量", url: "https://docs.python.org/3/tutorial/modules.html#importing-from-a-package" },
            ],
          },
          {
            id: "py-w15-2",
            title: "包结构",
            detail: "创建包，理解 __init__.py 和命名空间包。",
            keyPoints: [
              "包是包含 __init__.py 的目录。",
              "__init__.py 在包导入时执行。",
              "命名空间包可以跨多个目录。",
            ],
            resources: [
              { title: "包教程", url: "https://docs.python.org/3/tutorial/modules.html#packages" },
              { title: "命名空间包", url: "https://docs.python.org/3/reference/import.html#namespace-packages" },
              { title: "PEP 420", url: "https://peps.python.org/pep-0420/" },
            ],
          },
          {
            id: "py-w15-3",
            title: "虚拟环境",
            detail: "使用 venv 创建隔离的 Python 环境。",
            keyPoints: [
              "python -m venv .venv 创建虚拟环境。",
              "source .venv/bin/activate 激活环境。",
              "每个项目使用独立的虚拟环境。",
            ],
            resources: [
              { title: "venv 模块", url: "https://docs.python.org/3/library/venv.html" },
              { title: "虚拟环境教程", url: "https://docs.python.org/3/tutorial/venv.html" },
              { title: "pip 文档", url: "https://pip.pypa.io/en/stable/" },
            ],
          },
          {
            id: "py-w15-4",
            title: "现代包管理",
            detail: "使用 pyproject.toml 和现代工具管理项目。",
            keyPoints: [
              "pyproject.toml 是现代项目配置标准。",
              "uv 和 poetry 是流行的依赖管理工具。",
              "使用 pip-tools 锁定依赖版本。",
            ],
            resources: [
              { title: "pyproject.toml", url: "https://packaging.python.org/en/latest/specifications/pyproject-toml/" },
              { title: "Python 打包指南", url: "https://packaging.python.org/en/latest/" },
              { title: "PEP 517/518", url: "https://peps.python.org/pep-0517/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "python-stdlib",
    title: "阶段七：标准库精选",
    duration: "第 16-17 周",
    goal: "熟悉常用标准库模块，提高开发效率。",
    weeks: [
      {
        id: "py-w16",
        title: "第 16 周：数据处理模块",
        summary: "学习 collections、datetime、re 等数据处理模块。",
        keyPoints: [
          "掌握 collections 模块的高级容器。",
          "学习 datetime 时间处理。",
          "使用 re 进行正则表达式匹配。",
        ],
        lessons: [
          {
            id: "py-w16-1",
            title: "collections 模块",
            detail: "使用 Counter、defaultdict、namedtuple 等容器。",
            keyPoints: [
              "Counter 用于计数和频率统计。",
              "defaultdict 提供默认值工厂。",
              "namedtuple 创建具名元组。",
            ],
            resources: [
              { title: "collections 模块", url: "https://docs.python.org/3/library/collections.html" },
              { title: "Counter", url: "https://docs.python.org/3/library/collections.html#collections.Counter" },
              { title: "deque", url: "https://docs.python.org/3/library/collections.html#collections.deque" },
            ],
          },
          {
            id: "py-w16-2",
            title: "datetime 模块",
            detail: "处理日期、时间和时区。",
            keyPoints: [
              "datetime.now() 获取当前时间。",
              "timedelta 表示时间差。",
              "使用 zoneinfo 处理时区（Python 3.9+）。",
            ],
            resources: [
              { title: "datetime 模块", url: "https://docs.python.org/3/library/datetime.html" },
              { title: "zoneinfo 模块", url: "https://docs.python.org/3/library/zoneinfo.html" },
              { title: "strftime 格式", url: "https://docs.python.org/3/library/datetime.html#strftime-strptime-behavior" },
            ],
          },
          {
            id: "py-w16-3",
            title: "正则表达式",
            detail: "使用 re 模块进行模式匹配。",
            keyPoints: [
              "re.search() 搜索匹配，re.match() 从开头匹配。",
              "re.findall() 返回所有匹配。",
              "使用原始字符串 r'' 定义模式。",
            ],
            resources: [
              { title: "re 模块", url: "https://docs.python.org/3/library/re.html" },
              { title: "正则表达式教程", url: "https://docs.python.org/3/howto/regex.html" },
              { title: "正则语法", url: "https://docs.python.org/3/library/re.html#regular-expression-syntax" },
            ],
          },
          {
            id: "py-w16-4",
            title: "typing 类型注解",
            detail: "使用类型注解提高代码可读性和工具支持。",
            keyPoints: [
              "def func(x: int) -> str: 函数类型注解。",
              "List[int]、Dict[str, int] 泛型类型。",
              "Python 3.10+ 支持 int | None 联合类型。",
            ],
            resources: [
              { title: "typing 模块", url: "https://docs.python.org/3/library/typing.html" },
              { title: "类型注解教程", url: "https://docs.python.org/3/library/typing.html#module-contents" },
              { title: "PEP 484", url: "https://peps.python.org/pep-0484/" },
            ],
          },
        ],
      },
      {
        id: "py-w17",
        title: "第 17 周：系统与工具模块",
        summary: "学习 os、sys、subprocess 等系统交互模块。",
        keyPoints: [
          "使用 os 和 sys 访问系统功能。",
          "使用 subprocess 执行外部命令。",
          "学习 argparse 解析命令行参数。",
        ],
        lessons: [
          {
            id: "py-w17-1",
            title: "os 与 sys 模块",
            detail: "访问操作系统功能和 Python 运行时信息。",
            keyPoints: [
              "os.environ 访问环境变量。",
              "sys.argv 获取命令行参数。",
              "sys.path 控制模块搜索路径。",
            ],
            resources: [
              { title: "os 模块", url: "https://docs.python.org/3/library/os.html" },
              { title: "sys 模块", url: "https://docs.python.org/3/library/sys.html" },
              { title: "os.path", url: "https://docs.python.org/3/library/os.path.html" },
            ],
          },
          {
            id: "py-w17-2",
            title: "subprocess 模块",
            detail: "使用 subprocess 执行外部命令和进程。",
            keyPoints: [
              "subprocess.run() 是推荐的接口。",
              "capture_output=True 捕获输出。",
              "shell=True 有安全风险，尽量避免。",
            ],
            resources: [
              { title: "subprocess 模块", url: "https://docs.python.org/3/library/subprocess.html" },
              { title: "subprocess.run", url: "https://docs.python.org/3/library/subprocess.html#subprocess.run" },
              { title: "安全考虑", url: "https://docs.python.org/3/library/subprocess.html#security-considerations" },
            ],
          },
          {
            id: "py-w17-3",
            title: "argparse 命令行解析",
            detail: "使用 argparse 构建命令行接口。",
            keyPoints: [
              "ArgumentParser 创建解析器。",
              "add_argument() 定义参数和选项。",
              "支持子命令、类型转换、帮助文本。",
            ],
            resources: [
              { title: "argparse 模块", url: "https://docs.python.org/3/library/argparse.html" },
              { title: "argparse 教程", url: "https://docs.python.org/3/howto/argparse.html" },
              { title: "子解析器", url: "https://docs.python.org/3/library/argparse.html#sub-commands" },
            ],
          },
          {
            id: "py-w17-4",
            title: "logging 日志模块",
            detail: "使用 logging 模块进行日志记录。",
            keyPoints: [
              "logging.basicConfig() 快速配置。",
              "DEBUG/INFO/WARNING/ERROR/CRITICAL 日志级别。",
              "使用 handlers 输出到文件或网络。",
            ],
            resources: [
              { title: "logging 模块", url: "https://docs.python.org/3/library/logging.html" },
              { title: "logging 教程", url: "https://docs.python.org/3/howto/logging.html" },
              { title: "日志手册", url: "https://docs.python.org/3/howto/logging-cookbook.html" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "python-concurrency",
    title: "阶段八：并发编程",
    duration: "第 18-19 周",
    goal: "掌握多线程、多进程和异步编程。",
    weeks: [
      {
        id: "py-w18",
        title: "第 18 周：多线程与多进程",
        summary: "学习 threading 和 multiprocessing 模块。",
        keyPoints: [
          "理解 GIL（全局解释器锁）的影响。",
          "使用 threading 处理 I/O 密集型任务。",
          "使用 multiprocessing 处理 CPU 密集型任务。",
        ],
        lessons: [
          {
            id: "py-w18-1",
            title: "GIL 与线程基础",
            detail: "理解 GIL，使用 threading 模块创建线程。",
            keyPoints: [
              "GIL 限制同一时刻只有一个线程执行字节码。",
              "线程适合 I/O 密集型任务。",
              "threading.Thread 创建和管理线程。",
            ],
            resources: [
              { title: "threading 模块", url: "https://docs.python.org/3/library/threading.html" },
              { title: "GIL 解释", url: "https://docs.python.org/3/glossary.html#term-global-interpreter-lock" },
              { title: "Thread 对象", url: "https://docs.python.org/3/library/threading.html#thread-objects" },
            ],
          },
          {
            id: "py-w18-2",
            title: "线程同步",
            detail: "使用 Lock、Event、Condition 等同步原语。",
            keyPoints: [
              "Lock 保护共享资源。",
              "Event 用于线程间信号传递。",
              "Queue 是线程安全的队列。",
            ],
            resources: [
              { title: "Lock 对象", url: "https://docs.python.org/3/library/threading.html#lock-objects" },
              { title: "Event 对象", url: "https://docs.python.org/3/library/threading.html#event-objects" },
              { title: "queue 模块", url: "https://docs.python.org/3/library/queue.html" },
            ],
          },
          {
            id: "py-w18-3",
            title: "multiprocessing 模块",
            detail: "使用进程绕过 GIL，实现真正的并行。",
            keyPoints: [
              "Process 类似 Thread 的 API。",
              "进程间通过 Queue、Pipe 通信。",
              "Pool 提供进程池简化并行任务。",
            ],
            resources: [
              { title: "multiprocessing 模块", url: "https://docs.python.org/3/library/multiprocessing.html" },
              { title: "Process 类", url: "https://docs.python.org/3/library/multiprocessing.html#the-process-class" },
              { title: "Pool 类", url: "https://docs.python.org/3/library/multiprocessing.html#using-a-pool-of-workers" },
            ],
          },
          {
            id: "py-w18-4",
            title: "concurrent.futures",
            detail: "使用高级接口简化并发编程。",
            keyPoints: [
              "ThreadPoolExecutor 管理线程池。",
              "ProcessPoolExecutor 管理进程池。",
              "Future 对象表示异步操作结果。",
            ],
            resources: [
              { title: "concurrent.futures", url: "https://docs.python.org/3/library/concurrent.futures.html" },
              { title: "Executor 对象", url: "https://docs.python.org/3/library/concurrent.futures.html#executor-objects" },
              { title: "Future 对象", url: "https://docs.python.org/3/library/concurrent.futures.html#future-objects" },
            ],
          },
        ],
      },
      {
        id: "py-w19",
        title: "第 19 周：异步编程",
        summary: "学习 asyncio 模块和 async/await 语法。",
        keyPoints: [
          "理解事件循环和协程。",
          "掌握 async/await 语法。",
          "学习异步 I/O 和并发控制。",
        ],
        lessons: [
          {
            id: "py-w19-1",
            title: "协程与 async/await",
            detail: "使用 async def 定义协程，await 等待结果。",
            keyPoints: [
              "async def 定义协程函数。",
              "await 暂停协程等待结果。",
              "协程必须在事件循环中运行。",
            ],
            resources: [
              { title: "协程", url: "https://docs.python.org/3/library/asyncio-task.html#coroutines" },
              { title: "asyncio 教程", url: "https://docs.python.org/3/library/asyncio.html" },
              { title: "await 表达式", url: "https://docs.python.org/3/reference/expressions.html#await-expression" },
            ],
          },
          {
            id: "py-w19-2",
            title: "事件循环与任务",
            detail: "理解事件循环，使用 Task 并发执行协程。",
            keyPoints: [
              "asyncio.run() 运行主协程。",
              "asyncio.create_task() 并发执行协程。",
              "asyncio.gather() 并发执行多个协程。",
            ],
            resources: [
              { title: "事件循环", url: "https://docs.python.org/3/library/asyncio-eventloop.html" },
              { title: "Task 对象", url: "https://docs.python.org/3/library/asyncio-task.html#creating-tasks" },
              { title: "asyncio.gather", url: "https://docs.python.org/3/library/asyncio-task.html#asyncio.gather" },
            ],
          },
          {
            id: "py-w19-3",
            title: "异步 I/O",
            detail: "使用异步网络和文件 I/O。",
            keyPoints: [
              "asyncio.open_connection() 异步 TCP 连接。",
              "aiohttp 是流行的异步 HTTP 客户端。",
              "aiofiles 提供异步文件操作。",
            ],
            resources: [
              { title: "异步流", url: "https://docs.python.org/3/library/asyncio-stream.html" },
              { title: "异步网络", url: "https://docs.python.org/3/library/asyncio-protocol.html" },
              { title: "aiohttp 文档", url: "https://docs.aiohttp.org/" },
            ],
          },
          {
            id: "py-w19-4",
            title: "异步同步原语",
            detail: "使用异步锁、信号量等同步工具。",
            keyPoints: [
              "asyncio.Lock 异步锁。",
              "asyncio.Semaphore 限制并发数量。",
              "asyncio.Queue 异步队列。",
            ],
            resources: [
              { title: "异步同步原语", url: "https://docs.python.org/3/library/asyncio-sync.html" },
              { title: "asyncio.Lock", url: "https://docs.python.org/3/library/asyncio-sync.html#asyncio.Lock" },
              { title: "asyncio.Queue", url: "https://docs.python.org/3/library/asyncio-queue.html" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "python-testing",
    title: "阶段九：测试与质量",
    duration: "第 20 周",
    goal: "掌握单元测试、代码质量工具和调试技术。",
    weeks: [
      {
        id: "py-w20",
        title: "第 20 周：测试与调试",
        summary: "学习 pytest、类型检查和调试工具。",
        keyPoints: [
          "使用 pytest 编写测试。",
          "使用 mypy 进行静态类型检查。",
          "掌握 pdb 调试器。",
        ],
        lessons: [
          {
            id: "py-w20-1",
            title: "pytest 基础",
            detail: "使用 pytest 编写和运行测试。",
            keyPoints: [
              "test_*.py 文件，test_* 函数自动发现。",
              "assert 语句断言测试结果。",
              "pytest -v 显示详细输出。",
            ],
            resources: [
              { title: "pytest 文档", url: "https://docs.pytest.org/" },
              { title: "unittest 模块", url: "https://docs.python.org/3/library/unittest.html" },
              { title: "测试教程", url: "https://docs.python.org/3/library/unittest.html#basic-example" },
            ],
          },
          {
            id: "py-w20-2",
            title: "pytest 高级特性",
            detail: "使用 fixture、参数化和插件。",
            keyPoints: [
              "@pytest.fixture 提供测试依赖。",
              "@pytest.mark.parametrize 参数化测试。",
              "pytest-cov 测量测试覆盖率。",
            ],
            resources: [
              { title: "pytest fixture", url: "https://docs.pytest.org/en/stable/explanation/fixtures.html" },
              { title: "参数化", url: "https://docs.pytest.org/en/stable/how-to/parametrize.html" },
              { title: "pytest 插件", url: "https://docs.pytest.org/en/stable/reference/plugin_list.html" },
            ],
          },
          {
            id: "py-w20-3",
            title: "类型检查与代码质量",
            detail: "使用 mypy、ruff 等工具保证代码质量。",
            keyPoints: [
              "mypy 进行静态类型检查。",
              "ruff 是快速的 linter 和格式化工具。",
              "pre-commit 在提交前自动检查。",
            ],
            resources: [
              { title: "mypy 文档", url: "https://mypy.readthedocs.io/" },
              { title: "ruff 文档", url: "https://docs.astral.sh/ruff/" },
              { title: "pre-commit", url: "https://pre-commit.com/" },
            ],
          },
          {
            id: "py-w20-4",
            title: "调试技术",
            detail: "使用 pdb 调试器和日志排查问题。",
            keyPoints: [
              "breakpoint() 设置断点（Python 3.7+）。",
              "pdb 命令：n(ext)、s(tep)、c(ontinue)、p(rint)。",
              "使用 IDE 调试器提高效率。",
            ],
            resources: [
              { title: "pdb 模块", url: "https://docs.python.org/3/library/pdb.html" },
              { title: "调试器命令", url: "https://docs.python.org/3/library/pdb.html#debugger-commands" },
              { title: "breakpoint 函数", url: "https://docs.python.org/3/library/functions.html#breakpoint" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "python-web",
    title: "阶段十：Web 开发入门",
    duration: "第 21-22 周",
    goal: "学习 Web 框架和 HTTP 编程基础。",
    weeks: [
      {
        id: "py-w21",
        title: "第 21 周：HTTP 与 Web 框架",
        summary: "学习 HTTP 基础和 Flask/FastAPI 框架。",
        keyPoints: [
          "理解 HTTP 协议基础。",
          "使用 requests 发送 HTTP 请求。",
          "学习 Flask 或 FastAPI 构建 Web 应用。",
        ],
        lessons: [
          {
            id: "py-w21-1",
            title: "HTTP 与 requests",
            detail: "理解 HTTP 协议，使用 requests 库发送请求。",
            keyPoints: [
              "requests.get/post/put/delete 发送请求。",
              "response.json() 解析 JSON 响应。",
              "Session 保持会话状态。",
            ],
            resources: [
              { title: "requests 文档", url: "https://requests.readthedocs.io/" },
              { title: "http.client 模块", url: "https://docs.python.org/3/library/http.client.html" },
              { title: "urllib.request", url: "https://docs.python.org/3/library/urllib.request.html" },
            ],
          },
          {
            id: "py-w21-2",
            title: "Flask 基础",
            detail: "使用 Flask 创建 Web 应用。",
            keyPoints: [
              "@app.route 定义路由。",
              "request 对象访问请求数据。",
              "render_template 渲染 Jinja2 模板。",
            ],
            resources: [
              { title: "Flask 文档", url: "https://flask.palletsprojects.com/" },
              { title: "Flask 快速开始", url: "https://flask.palletsprojects.com/en/stable/quickstart/" },
              { title: "Jinja2 模板", url: "https://jinja.palletsprojects.com/" },
            ],
          },
          {
            id: "py-w21-3",
            title: "FastAPI 基础",
            detail: "使用 FastAPI 构建现代 API。",
            keyPoints: [
              "自动生成 OpenAPI 文档。",
              "使用 Pydantic 进行数据验证。",
              "原生支持异步处理。",
            ],
            resources: [
              { title: "FastAPI 文档", url: "https://fastapi.tiangolo.com/" },
              { title: "FastAPI 教程", url: "https://fastapi.tiangolo.com/tutorial/" },
              { title: "Pydantic", url: "https://docs.pydantic.dev/" },
            ],
          },
          {
            id: "py-w21-4",
            title: "REST API 设计",
            detail: "设计 RESTful API，处理请求和响应。",
            keyPoints: [
              "使用 HTTP 方法表示操作（GET/POST/PUT/DELETE）。",
              "使用 JSON 作为数据格式。",
              "正确使用 HTTP 状态码。",
            ],
            resources: [
              { title: "REST 架构", url: "https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm" },
              { title: "HTTP 状态码", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status" },
              { title: "API 设计指南", url: "https://www.ietf.org/rfc/rfc9110.html" },
            ],
          },
        ],
      },
      {
        id: "py-w22",
        title: "第 22 周：数据库与 ORM",
        summary: "学习数据库连接和 SQLAlchemy ORM。",
        keyPoints: [
          "使用 sqlite3 操作 SQLite 数据库。",
          "学习 SQLAlchemy Core 和 ORM。",
          "理解数据库迁移。",
        ],
        lessons: [
          {
            id: "py-w22-1",
            title: "sqlite3 模块",
            detail: "使用内置 sqlite3 模块操作数据库。",
            keyPoints: [
              "connect() 创建数据库连接。",
              "cursor.execute() 执行 SQL 语句。",
              "使用参数化查询防止 SQL 注入。",
            ],
            resources: [
              { title: "sqlite3 模块", url: "https://docs.python.org/3/library/sqlite3.html" },
              { title: "sqlite3 教程", url: "https://docs.python.org/3/library/sqlite3.html#tutorial" },
              { title: "DB-API 规范", url: "https://peps.python.org/pep-0249/" },
            ],
          },
          {
            id: "py-w22-2",
            title: "SQLAlchemy Core",
            detail: "使用 SQLAlchemy Core 构建 SQL 查询。",
            keyPoints: [
              "create_engine() 创建数据库引擎。",
              "Table、Column 定义表结构。",
              "select、insert、update、delete 构建查询。",
            ],
            resources: [
              { title: "SQLAlchemy 文档", url: "https://docs.sqlalchemy.org/" },
              { title: "Core 教程", url: "https://docs.sqlalchemy.org/en/20/core/" },
              { title: "Engine 配置", url: "https://docs.sqlalchemy.org/en/20/core/engines.html" },
            ],
          },
          {
            id: "py-w22-3",
            title: "SQLAlchemy ORM",
            detail: "使用 ORM 映射 Python 类到数据库表。",
            keyPoints: [
              "DeclarativeBase 定义模型基类。",
              "Mapped 和 mapped_column 声明字段。",
              "Session 管理数据库会话。",
            ],
            resources: [
              { title: "ORM 教程", url: "https://docs.sqlalchemy.org/en/20/orm/" },
              { title: "声明式映射", url: "https://docs.sqlalchemy.org/en/20/orm/declarative_tables.html" },
              { title: "Session 使用", url: "https://docs.sqlalchemy.org/en/20/orm/session.html" },
            ],
          },
          {
            id: "py-w22-4",
            title: "数据库迁移",
            detail: "使用 Alembic 进行数据库版本控制。",
            keyPoints: [
              "alembic init 初始化迁移环境。",
              "alembic revision 创建迁移脚本。",
              "alembic upgrade/downgrade 执行迁移。",
            ],
            resources: [
              { title: "Alembic 文档", url: "https://alembic.sqlalchemy.org/" },
              { title: "Alembic 教程", url: "https://alembic.sqlalchemy.org/en/latest/tutorial.html" },
              { title: "自动迁移生成", url: "https://alembic.sqlalchemy.org/en/latest/autogenerate.html" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "python-data-science",
    title: "阶段十一：数据科学入门",
    duration: "第 23-24 周",
    goal: "学习数据分析和科学计算基础库。",
    weeks: [
      {
        id: "py-w23",
        title: "第 23 周：NumPy 与 Pandas",
        summary: "学习数值计算和数据分析基础。",
        keyPoints: [
          "使用 NumPy 进行数组运算。",
          "使用 Pandas 处理表格数据。",
          "学习数据清洗和转换。",
        ],
        lessons: [
          {
            id: "py-w23-1",
            title: "NumPy 数组",
            detail: "使用 ndarray 进行高效数值计算。",
            keyPoints: [
              "np.array() 创建数组。",
              "支持广播和向量化运算。",
              "切片、索引和形状操作。",
            ],
            resources: [
              { title: "NumPy 文档", url: "https://numpy.org/doc/stable/" },
              { title: "NumPy 快速入门", url: "https://numpy.org/doc/stable/user/quickstart.html" },
              { title: "数组基础", url: "https://numpy.org/doc/stable/user/basics.html" },
            ],
          },
          {
            id: "py-w23-2",
            title: "Pandas 基础",
            detail: "使用 DataFrame 和 Series 处理数据。",
            keyPoints: [
              "DataFrame 是二维表格数据结构。",
              "read_csv/read_excel 读取数据文件。",
              "loc/iloc 选择数据。",
            ],
            resources: [
              { title: "Pandas 文档", url: "https://pandas.pydata.org/docs/" },
              { title: "10 分钟入门", url: "https://pandas.pydata.org/docs/user_guide/10min.html" },
              { title: "DataFrame", url: "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html" },
            ],
          },
          {
            id: "py-w23-3",
            title: "数据清洗",
            detail: "处理缺失值、重复值和数据类型转换。",
            keyPoints: [
              "isna/dropna/fillna 处理缺失值。",
              "duplicated/drop_duplicates 处理重复。",
              "astype 转换数据类型。",
            ],
            resources: [
              { title: "缺失数据", url: "https://pandas.pydata.org/docs/user_guide/missing_data.html" },
              { title: "数据清洗", url: "https://pandas.pydata.org/docs/user_guide/basics.html#essential-basic-functionality" },
              { title: "数据类型", url: "https://pandas.pydata.org/docs/user_guide/basics.html#dtypes" },
            ],
          },
          {
            id: "py-w23-4",
            title: "数据分析",
            detail: "进行分组、聚合和数据透视。",
            keyPoints: [
              "groupby 分组聚合。",
              "pivot_table 创建数据透视表。",
              "merge/join 合并数据集。",
            ],
            resources: [
              { title: "分组操作", url: "https://pandas.pydata.org/docs/user_guide/groupby.html" },
              { title: "数据透视", url: "https://pandas.pydata.org/docs/user_guide/reshaping.html" },
              { title: "合并数据", url: "https://pandas.pydata.org/docs/user_guide/merging.html" },
            ],
          },
        ],
      },
      {
        id: "py-w24",
        title: "第 24 周：数据可视化",
        summary: "学习 Matplotlib 和数据可视化技术。",
        keyPoints: [
          "使用 Matplotlib 创建图表。",
          "了解 Seaborn 高级可视化。",
          "学习图表定制和导出。",
        ],
        lessons: [
          {
            id: "py-w24-1",
            title: "Matplotlib 基础",
            detail: "使用 pyplot 接口创建图表。",
            keyPoints: [
              "plt.plot/scatter/bar/hist 创建图表。",
              "plt.xlabel/ylabel/title 设置标签。",
              "plt.savefig 保存图表。",
            ],
            resources: [
              { title: "Matplotlib 文档", url: "https://matplotlib.org/stable/contents.html" },
              { title: "快速入门", url: "https://matplotlib.org/stable/users/explain/quick_start.html" },
              { title: "pyplot 教程", url: "https://matplotlib.org/stable/tutorials/pyplot.html" },
            ],
          },
          {
            id: "py-w24-2",
            title: "高级图表",
            detail: "创建子图、定制样式和交互式图表。",
            keyPoints: [
              "fig, ax = plt.subplots() 面向对象接口。",
              "使用样式表 plt.style.use()。",
              "支持多种输出格式（PNG、PDF、SVG）。",
            ],
            resources: [
              { title: "子图布局", url: "https://matplotlib.org/stable/gallery/subplots_axes_and_figures/index.html" },
              { title: "样式表", url: "https://matplotlib.org/stable/gallery/style_sheets/style_sheets_reference.html" },
              { title: "图表类型", url: "https://matplotlib.org/stable/plot_types/index.html" },
            ],
          },
          {
            id: "py-w24-3",
            title: "Seaborn 可视化",
            detail: "使用 Seaborn 进行统计可视化。",
            keyPoints: [
              "基于 Matplotlib 的高级接口。",
              "内置美观的样式和调色板。",
              "支持分类数据和统计图表。",
            ],
            resources: [
              { title: "Seaborn 文档", url: "https://seaborn.pydata.org/" },
              { title: "Seaborn 教程", url: "https://seaborn.pydata.org/tutorial.html" },
              { title: "图表类型", url: "https://seaborn.pydata.org/examples/index.html" },
            ],
          },
          {
            id: "py-w24-4",
            title: "Jupyter Notebook",
            detail: "使用 Jupyter 进行交互式数据分析。",
            keyPoints: [
              "Notebook 结合代码、文本和可视化。",
              "%matplotlib inline 内嵌显示图表。",
              "支持 Markdown 和 LaTeX 公式。",
            ],
            resources: [
              { title: "Jupyter 文档", url: "https://jupyter.org/documentation" },
              { title: "Notebook 基础", url: "https://jupyter-notebook.readthedocs.io/en/latest/" },
              { title: "Magic 命令", url: "https://ipython.readthedocs.io/en/stable/interactive/magics.html" },
            ],
          },
        ],
      },
    ],
  },
]

export const pythonKnowledgeCards: KnowledgeCard[] = [
  {
    id: "py-zen",
    title: "Python 之禅",
    summary: "Python 的设计哲学：简洁、明确、可读性优先。",
    points: [
      "Beautiful is better than ugly. 优美胜于丑陋。",
      "Explicit is better than implicit. 明确胜于隐晦。",
      "Simple is better than complex. 简单胜于复杂。",
      "Readability counts. 可读性很重要。",
    ],
    practice: "在 Python 解释器中输入 import this 阅读完整的 Python 之禅。",
  },
  {
    id: "py-dynamic",
    title: "动态类型",
    summary: "Python 是动态类型语言，变量是对象的引用。",
    points: [
      "变量不需要声明类型，类型在运行时确定。",
      "同一变量可以指向不同类型的对象。",
      "使用类型注解可以提高代码可读性和工具支持。",
    ],
    practice: "使用 type() 和 id() 函数探索变量的类型和内存地址变化。",
  },
  {
    id: "py-duck-typing",
    title: "鸭子类型",
    summary: "如果它走起来像鸭子，叫起来像鸭子，那它就是鸭子。",
    points: [
      "关注对象的行为（方法），而非类型。",
      "无需继承即可实现多态。",
      "接口由协议定义，而非显式声明。",
    ],
    practice: "创建两个不相关的类，只要实现相同的方法，就可以被同一函数调用。",
  },
  {
    id: "py-comprehension",
    title: "推导式",
    summary: "Python 的推导式提供了简洁的数据结构创建方式。",
    points: [
      "列表推导式：[x for x in iterable if condition]",
      "字典推导式：{k: v for k, v in iterable}",
      "生成器表达式：(x for x in iterable) 惰性求值。",
    ],
    practice: "将嵌套循环改写为推导式，比较代码简洁性。",
  },
  {
    id: "py-with",
    title: "上下文管理",
    summary: "with 语句确保资源的正确获取和释放。",
    points: [
      "自动调用 __enter__ 和 __exit__ 方法。",
      "文件、锁、数据库连接等资源应使用 with 管理。",
      "contextlib 模块简化上下文管理器的创建。",
    ],
    practice: "实现一个计时器上下文管理器，测量代码块执行时间。",
  },
]

export const pythonExamQuestions: QuizQuestion[] = [
  {
    id: "py-q1",
    question: "以下哪种方式可以创建空集合？",
    options: [
      "{}",
      "set()",
      "[]",
      "dict()",
    ],
    answer: 1,
    rationale: "{} 创建的是空字典，空集合必须使用 set() 创建。",
  },
  {
    id: "py-q2",
    question: "关于 Python 列表，以下哪项描述是正确的？",
    options: [
      "列表是不可变的",
      "列表只能存储相同类型的元素",
      "列表支持负数索引，-1 表示最后一个元素",
      "列表不支持切片操作",
    ],
    answer: 2,
    rationale: "Python 列表是可变的，可以存储任意类型元素，支持负数索引和切片。",
  },
  {
    id: "py-q3",
    question: "以下哪个是检查字典中键是否存在的推荐方式？",
    options: [
      "if key in dict:",
      "if dict[key]:",
      "if dict.has_key(key):",
      "try: dict[key] except KeyError:",
    ],
    answer: 0,
    rationale: "使用 in 运算符是检查键是否存在的推荐方式，简洁且高效。has_key 在 Python 3 中已移除。",
  },
  {
    id: "py-q4",
    question: "关于 Python 函数参数，以下哪项描述是错误的？",
    options: [
      "*args 接收任意数量的位置参数",
      "**kwargs 接收任意数量的关键字参数",
      "默认参数可以使用可变对象如 []",
      "关键字参数必须在位置参数之后",
    ],
    answer: 2,
    rationale: "使用可变对象作为默认参数是常见错误，因为默认值只创建一次，会在调用间共享。",
  },
  {
    id: "py-q5",
    question: "关于 Python 的 GIL（全局解释器锁），以下哪项是正确的？",
    options: [
      "GIL 使多线程无法并发执行任何任务",
      "GIL 限制同一时刻只有一个线程执行 Python 字节码",
      "使用多进程也受 GIL 限制",
      "asyncio 可以绕过 GIL 实现真正的并行",
    ],
    answer: 1,
    rationale: "GIL 限制同一时刻只有一个线程执行字节码，但 I/O 操作会释放 GIL，多进程不受 GIL 影响。",
  },
  {
    id: "py-q6",
    question: "以下哪种方式定义生成器函数？",
    options: [
      "使用 return 语句",
      "使用 generator 关键字",
      "使用 yield 语句",
      "使用 async def",
    ],
    answer: 2,
    rationale: "包含 yield 语句的函数是生成器函数，调用时返回生成器对象。",
  },
  {
    id: "py-q7",
    question: "关于装饰器，以下哪项描述是正确的？",
    options: [
      "装饰器只能用于函数",
      "@decorator 是 decorator(func) 的语法糖",
      "装饰器在函数调用时执行",
      "装饰器不能带参数",
    ],
    answer: 1,
    rationale: "@decorator 等价于 func = decorator(func)，装饰器在函数定义时执行，可以带参数，也可以装饰类。",
  },
  {
    id: "py-q8",
    question: "使用 with 语句打开文件的好处是？",
    options: [
      "文件读取速度更快",
      "自动处理文件关闭，即使发生异常",
      "可以同时打开多个文件",
      "文件内容自动缓存",
    ],
    answer: 1,
    rationale: "with 语句确保文件在退出代码块时正确关闭，即使发生异常也能正确释放资源。",
  },
  {
    id: "py-q9",
    question: "以下哪个是 Python 3.9+ 合并字典的新语法？",
    options: [
      "dict1.merge(dict2)",
      "dict1 + dict2",
      "dict1 | dict2",
      "{**dict1, **dict2}",
    ],
    answer: 2,
    rationale: "Python 3.9 引入了 | 运算符用于合并字典，{**dict1, **dict2} 也可以但不是新语法。",
  },
  {
    id: "py-q10",
    question: "关于 async/await，以下哪项是正确的？",
    options: [
      "await 可以用在任何函数中",
      "async def 定义的函数直接返回结果",
      "协程必须在事件循环中运行",
      "asyncio 自动创建多个线程",
    ],
    answer: 2,
    rationale: "协程必须在事件循环中运行（如通过 asyncio.run()），await 只能在 async 函数中使用。",
  },
  {
    id: "py-q11",
    question: "以下哪种方式是创建虚拟环境的推荐方法？",
    options: [
      "pip install virtualenv",
      "python -m venv .venv",
      "conda create",
      "pip freeze",
    ],
    answer: 1,
    rationale: "python -m venv 是 Python 标准库提供的创建虚拟环境的方式，无需额外安装。",
  },
  {
    id: "py-q12",
    question: "关于 Python 类，以下哪项描述是错误的？",
    options: [
      "self 是实例方法的第一个参数",
      "@classmethod 的第一个参数是 cls",
      "@staticmethod 不需要 self 或 cls 参数",
      "Python 不支持多继承",
    ],
    answer: 3,
    rationale: "Python 支持多继承，使用 C3 线性化算法确定方法解析顺序（MRO）。",
  },
  {
    id: "py-q13",
    question: "以下哪个是捕获异常的正确语法？",
    options: [
      "try: ... catch Exception:",
      "try: ... except Exception as e:",
      "try: ... handle Exception:",
      "try: ... on Exception:",
    ],
    answer: 1,
    rationale: "Python 使用 except 关键字捕获异常，使用 as 绑定异常对象。",
  },
  {
    id: "py-q14",
    question: "关于 __init__ 方法，以下哪项是正确的？",
    options: [
      "__init__ 是类的构造函数，创建对象",
      "__init__ 在对象创建后初始化实例属性",
      "__init__ 必须返回 self",
      "__init__ 是可选的，没有也能创建实例",
    ],
    answer: 1,
    rationale: "__new__ 创建对象，__init__ 初始化对象。__init__ 不应返回任何值（隐式返回 None）。",
  },
  {
    id: "py-q15",
    question: "以下哪种方式可以安全地读取可能不存在的字典键？",
    options: [
      "dict[key]",
      "dict.get(key)",
      "dict.read(key)",
      "dict.fetch(key)",
    ],
    answer: 1,
    rationale: "dict.get(key) 在键不存在时返回 None（或指定的默认值），而 dict[key] 会抛出 KeyError。",
  },
  {
    id: "py-q16",
    question: "Python 中 is 和 == 的区别是什么？",
    options: [
      "没有区别，可以互换使用",
      "is 比较值，== 比较身份",
      "is 比较身份（内存地址），== 比较值",
      "is 用于数字，== 用于字符串",
    ],
    answer: 2,
    rationale: "is 比较两个对象是否是同一个对象（内存地址相同），== 比较两个对象的值是否相等。",
  },
  {
    id: "py-q17",
    question: "关于列表推导式 [x*2 for x in range(5) if x % 2 == 0]，结果是？",
    options: [
      "[0, 2, 4, 6, 8]",
      "[0, 4, 8]",
      "[2, 4, 6, 8, 10]",
      "[0, 2, 4]",
    ],
    answer: 1,
    rationale: "range(5) 生成 0-4，if x % 2 == 0 过滤出偶数 0, 2, 4，然后 x*2 得到 0, 4, 8。",
  },
  {
    id: "py-q18",
    question: "以下哪个是 f-string 的正确用法？",
    options: [
      "f'Hello {name}'",
      "'Hello {name}'.f()",
      "f('Hello {name}')",
      "'Hello'.f(name)",
    ],
    answer: 0,
    rationale: "f-string 使用 f 前缀，花括号内可以放入表达式，如 f'Hello {name}'。",
  },
  {
    id: "py-q19",
    question: "关于 Python 的 LEGB 规则，正确的作用域查找顺序是？",
    options: [
      "Local, Enclosing, Global, Built-in",
      "Built-in, Global, Enclosing, Local",
      "Global, Local, Enclosing, Built-in",
      "Local, Global, Enclosing, Built-in",
    ],
    answer: 0,
    rationale: "Python 按 Local（局部）-> Enclosing（闭包）-> Global（全局）-> Built-in（内置）顺序查找变量。",
  },
  {
    id: "py-q20",
    question: "以下哪种方式可以让子类调用父类的方法？",
    options: [
      "parent.method()",
      "super().method()",
      "this.parent.method()",
      "base.method()",
    ],
    answer: 1,
    rationale: "Python 使用 super() 获取父类的代理对象，从而调用父类的方法。",
  },
]

export const pythonRoadmap: RoadmapDefinition = {
  id: "python",
  label: "Python",
  title: "Python 语言",
  durationLabel: "24 周完整学习路线",
  description:
    "从环境搭建到高级特性，从 Web 开发到数据科学，系统化掌握 Python 语言核心特性与生产实践。",
  heroBadge: "24 周 · 96 主题",
  stages: pythonStages,
  knowledgeCards: pythonKnowledgeCards,
  examQuestions: pythonExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "从环境搭建和 Hello World 开始，熟悉 Python 的简洁语法。"
    if (percent < 30) return "重点掌握数据类型、函数和面向对象，这是 Python 的基础。"
    if (percent < 50) return "深入学习文件操作和异常处理，理解上下文管理器的重要性。"
    if (percent < 70) return "探索生成器、装饰器等高级特性，感受 Python 的优雅。"
    if (percent < 90) return "学习并发编程和 Web 开发，将 Python 应用于实际项目。"
    return "恭喜完成基础学习！继续探索数据科学或其他专业领域。"
  },
  resourceGuide: {
    environment: "安装 Python 3.11+，配置 VS Code + Python 扩展或 PyCharm IDE，确保 python --version 正常。",
    fallbackKeyPoints: [
      "Python 之禅：简洁、明确、可读性优先。",
      "动态类型：变量是对象的引用，无需声明类型。",
      "鸭子类型：关注行为而非类型，接口由协议定义。",
    ],
    handsOnSteps: [
      "完成 Python 官方教程的全部章节。",
      "实现一个命令行工具（如 todo list 或文件搜索）。",
      "使用 Flask/FastAPI 构建一个 REST API 服务。",
    ],
    selfChecks: [
      "能否解释列表和元组的区别？",
      "能否使用装饰器实现缓存功能？",
      "是否理解 GIL 对多线程的影响？",
    ],
    extensions: [
      "学习 Django 或 FastAPI 进行 Web 开发。",
      "使用 NumPy 和 Pandas 进行数据分析。",
      "探索 asyncio 和异步编程模式。",
    ],
    lessonQuizAdvice: "Python 语法简单但有很多细节，遇到不确定的题目时回顾官方文档。",
  },
}
