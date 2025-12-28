import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week2Guides: Record<string, LessonGuide> = {
    "ml-w2-1": {
        lessonId: "ml-w2-1",
        background: [
            "【ndarray 的本质】NumPy 的核心是 ndarray——同质多维数组，所有元素类型相同且内存连续。这与 Python list 的异质、分散存储形成对比，使得 NumPy 能够利用 SIMD 指令和缓存局部性实现 10-100 倍加速。",
            "【广播机制】广播允许不同形状数组运算：从右向左对齐维度，大小为 1 的维度被'广播'扩展。(3,4) + (4,) 合法，(3,4) + (3,) 非法。理解广播能写出更简洁高效的代码，但也容易引入难以发现的 bug。",
            "【视图 vs 副本】切片操作返回视图（共享内存），修改会影响原数组；copy() 创建独立副本。arr[::2] 是视图，arr[[0,2,4]] 是副本。理解这一点能避免意外修改数据和不必要的内存开销。",
            "【dtype 精度权衡】float32 比 float64 省一半内存和带宽，GPU 训练通常用 float32 甚至 float16。但数值精度降低可能导致梯度计算误差累积，深度学习中常用混合精度训练平衡效率与精度。",
            "【线性代数加速】NumPy 底层调用 BLAS/LAPACK 库（如 Intel MKL、OpenBLAS），大矩阵乘法自动多线程并行。np.dot 和 @ 运算符调用优化的 GEMM 实现，比手写循环快数百倍。"
        ],
        keyDifficulties: [
            "【轴的概念】axis 参数容易混淆：axis=0 沿行方向操作（结果压缩行），axis=1 沿列方向。np.sum(arr, axis=0) 对每列求和，结果形状丢失第 0 维。建议用具体例子而非抽象描述理解。",
            "【花式索引陷阱】arr[[0,1], [2,3]] 返回 arr[0,2] 和 arr[1,3] 两个元素，不是 2x2 子矩阵。要选 2x2 子矩阵用 arr[[0,1]][:, [2,3]] 或 np.ix_([0,1], [2,3])。",
            "【性能陷阱】append/concatenate 在循环中使用会导致 O(n²) 复杂度（每次创建新数组）。正确做法：预分配数组或用 list 收集后一次性转换。",
            "【随机数状态】np.random 使用全局状态，多线程或多次运行结果不可复现。推荐使用 np.random.Generator（新 API）：rng = np.random.default_rng(seed)，保证可复现性。"
        ],
        handsOnPath: [
            "创建各种形状数组：np.zeros, np.ones, np.arange, np.linspace, np.random.randn，用 .shape, .dtype, .ndim 检查属性。",
            "实验广播：创建 (3,1) 和 (1,4) 数组相加得到 (3,4)，绘制广播过程的图示理解维度对齐规则。",
            "对比视图和副本：arr = np.arange(10); view = arr[::2]; view[0] = 100; print(arr)，观察原数组被修改。",
            "实现一个矩阵乘法的三种方式：嵌套循环、np.dot、@，用 %timeit 对比 1000x1000 矩阵的耗时。"
        ],
        selfCheck: [
            "ndarray 为什么比 Python list 快？从内存布局和 CPU 缓存角度解释。",
            "广播规则是什么？(5,3) 和 (3,) 能广播吗？(5,3) 和 (5,) 呢？",
            "什么操作返回视图？什么返回副本？如何判断？",
            "为什么不应该在循环中使用 np.append？正确做法是什么？"
        ],
        extensions: [
            "学习 NumPy 的 einsum 函数，用爱因斯坦求和约定简洁表达复杂张量运算。",
            "探索 Numba 的 @jit 装饰器，将 Python 循环 JIT 编译为机器码。",
            "研究内存布局：C 连续 vs Fortran 连续，以及 .flags 属性。",
            "了解 NumPy 2.0 的新特性和与旧版本的兼容性变化。"
        ],
        sourceUrls: [
            "https://numpy.org/doc/stable/user/quickstart.html",
            "https://numpy.org/doc/stable/user/basics.broadcasting.html",
            "https://github.com/rougier/numpy-100"
        ]
    },
    "ml-w2-2": {
        lessonId: "ml-w2-2",
        background: [
            "【DataFrame 结构】Pandas DataFrame 是带标签的二维表格，每列是一个 Series（带索引的一维数组）。支持异构数据类型（不同列可以是 int、float、str），是表格数据分析的瑞士军刀。",
            "【索引系统】Pandas 有两套索引：.loc（基于标签）和 .iloc（基于位置）。df.loc['a':'c'] 包含 'c'（标签切片两端都包含），df.iloc[0:3] 不包含 3（位置切片右开）。混用会导致难以发现的 bug。",
            "【链式赋值陷阱】df[df['A']>0]['B'] = 1 可能不生效，因为 df[condition] 可能返回副本。正确写法：df.loc[df['A']>0, 'B'] = 1。SettingWithCopyWarning 就是在警告这个问题。",
            "【缺失值处理】Pandas 用 NaN (float) 和 pd.NA (nullable) 表示缺失。NaN 的传染性：任何与 NaN 的运算结果都是 NaN。dropna()、fillna()、interpolate() 是常用的缺失值处理方法。",
            "【性能考量】Pandas 操作尽量用向量化方法（内置函数），避免 iterrows()（极慢）。groupby + agg 比循环快 100 倍。对于超大数据，考虑 Dask 或 Polars。"
        ],
        keyDifficulties: [
            "【MultiIndex 复杂性】层级索引功能强大但语法复杂：df.loc[('A', 1), :] 选择外层 'A' 内层 1。xs 方法更直观：df.xs('A', level=0)。stack/unstack 在长宽格式间转换。",
            "【merge vs join vs concat】merge 基于列值连接（SQL 风格），join 基于索引连接，concat 堆叠行或列。merge 的 how 参数：inner（交集）、outer（并集）、left、right。",
            "【时间序列处理】pd.to_datetime 解析日期，resample 重采样（如日数据变周数据），rolling 滑动窗口。时区处理复杂，建议统一使用 UTC 或无时区时间。",
            "【内存优化】object 类型（字符串）占用大量内存。category 类型适合低基数分类变量，可节省 90% 内存。df.astype({'col': 'category'}) 转换。"
        ],
        handsOnPath: [
            "加载 CSV/Excel 文件：pd.read_csv, pd.read_excel。探索数据：df.head(), df.info(), df.describe(), df.isnull().sum()。",
            "练习数据清洗：处理缺失值（fillna, dropna）、重复值（drop_duplicates）、异常值（clip, 分位数过滤）。",
            "掌握 groupby：df.groupby('category').agg({'value': ['mean', 'std', 'count']})，理解 split-apply-combine 模式。",
            "实现表连接：准备两个表，用 merge 模拟 SQL 的 inner join、left join，用 concat 垂直堆叠。"
        ],
        selfCheck: [
            ".loc 和 .iloc 的区别是什么？df.loc[0] 和 df.iloc[0] 结果一定相同吗？",
            "为什么 df[df['A']>0]['B'] = 1 可能不生效？正确写法是什么？",
            "groupby 的 split-apply-combine 三个阶段分别做什么？",
            "如何优化 Pandas 内存使用？category 类型适合什么场景？"
        ],
        extensions: [
            "学习 method chaining 风格：df.pipe(func1).assign(new_col=...).query('condition')，代码更优雅。",
            "探索 Polars 库——Rust 实现的 DataFrame 库，比 Pandas 快 10-100 倍。",
            "研究 pandas-profiling（ydata-profiling）自动生成数据探索报告。",
            "学习如何用 Pandas 处理大于内存的数据：分块读取 chunksize、使用 Dask。"
        ],
        sourceUrls: [
            "https://pandas.pydata.org/docs/user_guide/index.html",
            "https://pandas.pydata.org/docs/user_guide/10min.html",
            "https://www.kaggle.com/learn/pandas"
        ]
    },
    "ml-w2-3": {
        lessonId: "ml-w2-3",
        background: [
            "【Matplotlib 架构】Figure 是画布容器，Axes 是实际绑定数据的绑定区域。一个 Figure 可以有多个 Axes（subplot）。推荐使用面向对象接口 fig, ax = plt.subplots() 而非 pyplot 状态机接口。",
            "【Seaborn 封装】Seaborn 构建在 Matplotlib 之上，提供统计图表的高级接口。sns.histplot, sns.boxplot, sns.heatmap 等函数自动处理数据分组、统计计算、美观样式。",
            "【图表类型选择】分布用 histplot/kdeplot/boxplot/violinplot；关系用 scatterplot/lineplot/regplot；分类用 barplot/countplot/catplot；矩阵用 heatmap/clustermap。选对图表类型是可视化的第一步。",
            "【颜色与调色板】Seaborn 提供多种调色板：sequential（连续数据）、diverging（有中心点）、qualitative（分类）。colorblind 友好的调色板确保无障碍访问。",
            "【交互式可视化】Matplotlib 适合静态图表和出版。交互式探索可用 Plotly（支持缩放、悬停）、Bokeh（大数据流式渲染）、Altair（声明式语法）。"
        ],
        keyDifficulties: [
            "【双 Y 轴陷阱】ax.twinx() 创建共享 X 轴的第二 Y 轴，但容易误导读者（两个尺度不可比）。除非有充分理由，避免使用双 Y 轴图。",
            "【图例位置】legend 默认位置可能遮挡数据。使用 loc='best' 自动选择，或 bbox_to_anchor=(1.05, 1) 放到图外。",
            "【保存图片质量】plt.savefig('fig.png', dpi=300, bbox_inches='tight') 确保高分辨率且不裁剪标签。矢量格式（PDF, SVG）适合出版。",
            "【大数据可视化】散点图数据量大时点会重叠。解决方案：降低 alpha 透明度、使用 hexbin 六边形分箱、核密度估计 KDE、或用 datashader 库。"
        ],
        handsOnPath: [
            "用 Matplotlib 创建基础图：折线图、散点图、柱状图、饼图。掌握 title, xlabel, ylabel, legend, grid 等元素。",
            "用 Seaborn 探索数据集：加载 tips/iris/titanic 数据集，用 pairplot 画全变量关系图，用 heatmap 画相关性矩阵。",
            "创建子图布局：fig, axes = plt.subplots(2, 3, figsize=(12, 8))，在每个子图绑定不同数据。",
            "自定义样式：plt.style.use('seaborn-v0_8')，修改颜色、字体、线宽，保存为可复用的 style 文件。"
        ],
        selfCheck: [
            "Figure 和 Axes 的关系是什么？为什么推荐面向对象接口？",
            "什么类型的数据用什么图表？分布、关系、分类分别用哪些？",
            "如何处理大量数据点重叠的散点图？",
            "保存图片时如何确保高质量且不裁剪？"
        ],
        extensions: [
            "学习 Python Graph Gallery 中的各种可视化范例和代码。",
            "探索 Plotly Express 创建交互式图表，支持 Jupyter 和网页嵌入。",
            "研究数据可视化原则：Tufte 的数据墨水比、避免 chartjunk、讲故事的可视化。",
            "学习 Manim（3Blue1Brown 使用的动画库）创建数学动画。"
        ],
        sourceUrls: [
            "https://matplotlib.org/stable/tutorials/index.html",
            "https://seaborn.pydata.org/tutorial.html",
            "https://www.python-graph-gallery.com/"
        ]
    },
    "ml-w2-4": {
        lessonId: "ml-w2-4",
        background: [
            "【Notebook 本质】Jupyter Notebook 是交互式计算环境，将代码、输出、Markdown 文档组合在一个 JSON 文件中。内核（如 IPython）维护运行时状态，支持逐单元格执行和即时反馈。",
            "【Cell 类型】Code Cell 执行代码并显示输出；Markdown Cell 支持 Markdown 语法、LaTeX 公式（$...$）；Raw Cell 原样保存不渲染。合理组织 Cell 类型提高可读性。",
            "【Magic 命令】% 行魔法，%% 单元格魔法。%timeit 测量代码耗时，%matplotlib inline 嵌入图表，%%writefile 写入文件，%load 加载脚本，%who 列出变量。",
            "【JupyterLab 进化】JupyterLab 是下一代界面，支持多标签、拖放布局、终端、扩展系统。VS Code 的 Jupyter 扩展提供更好的 Git 集成和代码补全。",
            "【版本控制挑战】Notebook 的 JSON 格式包含输出和元数据，diff 难以阅读。解决方案：nbstripout 清除输出后提交、jupytext 将 notebook 转为纯 Python/Markdown。"
        ],
        keyDifficulties: [
            "【隐藏状态问题】非线性执行导致的状态不一致是 Notebook 最大痛点。删除单元格不会删除变量，上面的 Cell 可能依赖下面的。建议经常 Restart & Run All 验证。",
            "【代码复用】Notebook 中的函数难以跨项目复用。最佳实践：将稳定函数提取到 .py 模块，Notebook 只做胶水代码和可视化。使用 %autoreload 自动重载模块修改。",
            "【调试困难】Notebook 不支持传统调试器的断点。%debug 进入 post-mortem 调试，但功能有限。复杂逻辑建议在 IDE 中编写测试，Notebook 只做探索。",
            "【性能瓶颈】大输出（如长列表、大 DataFrame）会使 Notebook 变慢甚至崩溃。使用 .head()/.sample() 限制输出，或 pd.set_option('display.max_rows', 50)。"
        ],
        handsOnPath: [
            "熟悉键盘快捷键：Enter 进入编辑，Esc 退出，a/b 上下插入 Cell，dd 删除，m/y 切换 Markdown/Code，Shift+Enter 执行。",
            "使用 Magic 命令：%timeit np.dot(a,b) 测试性能，%%time 测量整个 Cell，%prun 性能分析。",
            "安装扩展：nbextensions（目录、代码折叠）、jupyterlab-git（Git 集成）、jupyterlab-lsp（代码补全）。",
            "建立模板 Notebook：包含常用 import、配置、数据加载代码，作为新项目起点。"
        ],
        selfCheck: [
            "Jupyter Notebook 的隐藏状态问题是什么？如何避免？",
            "如何在 Notebook 中复用代码？为什么不应该把所有代码都放在 Notebook 里？",
            "列举 3 个常用的 Magic 命令及其用途。",
            "如何让 Notebook 代码能够被版本控制？"
        ],
        extensions: [
            "学习 nbdev：用 Notebook 编写文档、测试、库代码，导出为 Python 包。",
            "探索 Papermill：参数化执行 Notebook，适合批量实验。",
            "研究 Google Colab 和 Kaggle Kernels 的云端 Notebook 环境。",
            "学习 Quarto：下一代科学出版系统，支持 Notebook 到论文/网站/幻灯片的转换。"
        ],
        sourceUrls: [
            "https://jupyter.org/documentation",
            "https://www.dataquest.io/blog/jupyter-notebook-tips-tricks-shortcuts/",
            "https://nbdev.fast.ai/"
        ]
    }
}

export const week2Quizzes: Record<string, QuizQuestion[]> = {
    "ml-w2-1": [
        {
            id: "ml-w2-1-q1",
            question: "NumPy 数组为什么比 Python list 快？",
            options: [
                "NumPy 用 C 实现，内存连续，利用 SIMD 指令",
                "Python list 有 bug",
                "NumPy 数组只能存储少量元素",
                "Python list 不支持数学运算"
            ],
            answer: 0,
            rationale: "NumPy ndarray 是同质、内存连续的数组，底层 C 实现可以使用 SIMD 向量指令和利用 CPU 缓存局部性，比 Python 解释器逐元素循环快 10-100 倍。"
        },
        {
            id: "ml-w2-1-q2",
            question: "(3,4) 形状数组和 (4,) 形状数组相加的结果形状是什么？",
            options: [
                "(3,4)，通过广播实现",
                "(3,)，取较小形状",
                "报错，形状不兼容",
                "(4,4)，自动扩展"
            ],
            answer: 0,
            rationale: "广播规则从右向左对齐维度，(4,) 对齐 (3,4) 的最后一维，然后在第 0 维广播复制 3 次，结果是 (3,4)。"
        },
        {
            id: "ml-w2-1-q3",
            question: "arr = np.arange(10); view = arr[::2]; view[0] = 100 后 arr[0] 是什么？",
            options: [
                "0，原数组不变",
                "100，切片是视图共享内存",
                "报错，视图不能修改",
                "None"
            ],
            answer: 1,
            rationale: "基本切片（如 [::2]）返回原数组的视图，共享内存。修改视图会影响原数组。要创建独立副本需要显式 .copy()。"
        },
        {
            id: "ml-w2-1-q4",
            question: "np.sum(arr, axis=0) 对 (3,4) 数组操作后结果形状是什么？",
            options: [
                "(3,)，沿列求和",
                "(4,)，沿行方向压缩，保留列",
                "(3,4)，形状不变",
                "(1,4)"
            ],
            answer: 1,
            rationale: "axis=0 沿第 0 轴（行方向）操作，对每列的 3 个元素求和，结果压缩掉第 0 维，形状变为 (4,)。"
        },
        {
            id: "ml-w2-1-q5",
            question: "为什么不应该在循环中使用 np.append？",
            options: [
                "np.append 语法复杂",
                "每次 append 创建新数组复制数据，导致 O(n²) 复杂度",
                "np.append 只能追加标量",
                "np.append 会改变数据类型"
            ],
            answer: 1,
            rationale: "np.append 每次调用都创建新数组并复制所有数据，n 次追加总复杂度是 O(n²)。正确做法：预分配或用 list 收集后一次转换。"
        },
        {
            id: "ml-w2-1-q6",
            question: "如何确保 NumPy 随机数可复现？",
            options: [
                "使用更多种子值",
                "使用 np.random.Generator 对象而非全局函数",
                "避免使用随机数",
                "只在单线程运行"
            ],
            answer: 1,
            rationale: "np.random.default_rng(seed) 创建独立的生成器对象，避免全局状态干扰。推荐用 rng = np.random.default_rng(42); rng.random() 代替 np.random.rand()。"
        }
    ],
    "ml-w2-2": [
        {
            id: "ml-w2-2-q1",
            question: "df.loc['a':'c'] 和 df.iloc[0:3] 在包含边界上有什么区别？",
            options: [
                "完全相同",
                ".loc 标签切片两端都包含，.iloc 位置切片右端不包含",
                ".loc 不支持切片",
                ".iloc 两端都包含"
            ],
            answer: 1,
            rationale: "loc 基于标签，df.loc['a':'c'] 包含 'c'；iloc 基于位置，df.iloc[0:3] 包含 0,1,2 不包含 3。这是 Pandas 的重要区别。"
        },
        {
            id: "ml-w2-2-q2",
            question: "df[df['A']>0]['B'] = 1 可能不生效的原因是什么？",
            options: [
                "语法错误",
                "df[condition] 可能返回副本，赋值不影响原 DataFrame",
                "布尔索引不支持赋值",
                "列 'B' 不存在"
            ],
            answer: 1,
            rationale: "链式索引 df[cond]['B'] 可能返回视图或副本，取决于内部实现。赋值给副本不影响原数据。正确写法：df.loc[df['A']>0, 'B'] = 1。"
        },
        {
            id: "ml-w2-2-q3",
            question: "groupby 的 split-apply-combine 模式中，apply 阶段做什么？",
            options: [
                "将数据分成组",
                "对每个组应用聚合函数（如 sum、mean）",
                "将结果合并成一个 DataFrame",
                "排序数据"
            ],
            answer: 1,
            rationale: "split 按键分组，apply 对每组独立应用函数（如 mean、sum、自定义函数），combine 将各组结果合并为最终输出。"
        },
        {
            id: "ml-w2-2-q4",
            question: "category 数据类型适合什么场景？",
            options: [
                "高精度浮点数",
                "低基数分类变量（如性别、国家），可节省内存",
                "时间序列数据",
                "大文本字段"
            ],
            answer: 1,
            rationale: "category 用整数编码加字典存储，适合取值种类少但重复多的列（如性别、城市），可节省 90%+ 内存并加速某些操作。"
        },
        {
            id: "ml-w2-2-q5",
            question: "merge 和 concat 的主要区别是什么？",
            options: [
                "merge 基于列值连接（SQL 风格），concat 堆叠行或列",
                "两者完全相同",
                "merge 只能垂直合并",
                "concat 需要相同列名"
            ],
            answer: 0,
            rationale: "merge 类似 SQL JOIN，基于一列或多列的值匹配行。concat 简单地沿轴堆叠，不考虑值匹配。"
        },
        {
            id: "ml-w2-2-q6",
            question: "为什么要避免 df.iterrows() 遍历 DataFrame？",
            options: [
                "iterrows 会修改原数据",
                "iterrows 极慢，向量化操作快 100 倍以上",
                "iterrows 不返回完整行",
                "iterrows 只能遍历前 100 行"
            ],
            answer: 1,
            rationale: "iterrows 逐行迭代，每行都要创建 Series 对象，非常慢。向量化操作（如 df['new'] = df['A'] + df['B']）利用底层优化，快 100-1000 倍。"
        }
    ],
    "ml-w2-3": [
        {
            id: "ml-w2-3-q1",
            question: "Matplotlib 中 Figure 和 Axes 的关系是什么？",
            options: [
                "Figure 是画布容器，Axes 是实际绑定数据的绑定区域",
                "两者是同一个概念",
                "Axes 包含 Figure",
                "Figure 用于 3D 图，Axes 用于 2D 图"
            ],
            answer: 0,
            rationale: "Figure 是顶层容器（画布），可以包含多个 Axes（子图）。每个 Axes 是独立的坑位区域，有自己的坐标轴、标题等。"
        },
        {
            id: "ml-w2-3-q2",
            question: "展示数据分布应该用什么图表类型？",
            options: [
                "折线图",
                "直方图、箱线图、小提琴图、KDE 图",
                "散点图",
                "饼图"
            ],
            answer: 1,
            rationale: "分布可视化用 histplot（直方图）、boxplot（箱线图）、violinplot（小提琴图）、kdeplot（核密度估计）。它们展示数据的集中趋势和分散程度。"
        },
        {
            id: "ml-w2-3-q3",
            question: "大量数据点重叠的散点图如何处理？",
            options: [
                "增加点的大小",
                "降低透明度（alpha）、使用 hexbin 分箱、或 KDE",
                "减少数据量",
                "使用饼图替代"
            ],
            answer: 1,
            rationale: "点重叠时可以：1) 降低 alpha 透明度显示密度 2) 用 hexbin 六边形分箱 3) 用 KDE 核密度估计 4) 用 datashader 处理百万级数据。"
        },
        {
            id: "ml-w2-3-q4",
            question: "保存高质量图片的正确方式是什么？",
            options: [
                "plt.savefig('fig.png')",
                "plt.savefig('fig.png', dpi=300, bbox_inches='tight')",
                "plt.show() 然后截图",
                "fig.save('fig.png')"
            ],
            answer: 1,
            rationale: "dpi=300 确保高分辨率，bbox_inches='tight' 避免裁剪标签和图例。出版用矢量格式（PDF、SVG）质量更好。"
        },
        {
            id: "ml-w2-3-q5",
            question: "Seaborn 相比 Matplotlib 的优势是什么？",
            options: [
                "速度更快",
                "提供统计图表的高级接口，自动处理数据分组和美观样式",
                "支持 3D 图",
                "不需要导入其他库"
            ],
            answer: 1,
            rationale: "Seaborn 构建在 Matplotlib 上，提供更高级的统计可视化接口（如 pairplot、heatmap），自动处理分组、计算统计量，默认样式更美观。"
        },
        {
            id: "ml-w2-3-q6",
            question: "为什么应该避免使用双 Y 轴图表？",
            options: [
                "技术上无法实现",
                "两个尺度不可比较，容易误导读者",
                "只有 Seaborn 支持",
                "双 Y 轴图渲染慢"
            ],
            answer: 1,
            rationale: "双 Y 轴图的两个尺度独立，视觉上的对齐可能暗示不存在的关系，容易误导。除非有充分理由（如温度和降水量），否则避免使用。"
        }
    ],
    "ml-w2-4": [
        {
            id: "ml-w2-4-q1",
            question: "Jupyter Notebook 的'隐藏状态问题'是什么？",
            options: [
                "Notebook 文件太大",
                "非线性执行导致变量状态与代码不一致",
                "无法保存输出",
                "不支持 Python 3"
            ],
            answer: 1,
            rationale: "Notebook 允许任意顺序执行 Cell，删除 Cell 不删除变量。这导致当前状态可能无法通过从上到下执行代码重现。建议经常 Restart & Run All。"
        },
        {
            id: "ml-w2-4-q2",
            question: "%timeit 和 %%time 的区别是什么？",
            options: [
                "%timeit 多次运行取平均，%%time 运行一次测量整个 Cell",
                "两者完全相同",
                "%timeit 测内存，%%time 测时间",
                "%%time 是语法错误"
            ],
            answer: 0,
            rationale: "%timeit 是行魔法，多次运行取平均更准确；%%time 是单元格魔法，测量整个 Cell 执行一次的时间，适合长时间操作。"
        },
        {
            id: "ml-w2-4-q3",
            question: "如何在 Notebook 中复用代码到其他项目？",
            options: [
                "复制粘贴",
                "将稳定函数提取到 .py 模块，Notebook import 使用",
                "Notebook 不支持代码复用",
                "只能在同一 Notebook 内复用"
            ],
            answer: 1,
            rationale: "最佳实践：将通用函数提取到 .py 模块（如 utils.py），Notebook 通过 import 使用。用 %autoreload 扩展可以自动重载模块修改。"
        },
        {
            id: "ml-w2-4-q4",
            question: "Notebook 版本控制的挑战是什么？",
            options: [
                "Git 不支持 JSON 格式",
                "JSON 包含输出和元数据，diff 难以阅读",
                "Notebook 文件太小",
                "没有挑战"
            ],
            answer: 1,
            rationale: "Notebook 的 JSON 格式包含代码、输出、执行计数、元数据，diff 混乱。解决方案：nbstripout 清除输出、jupytext 转为纯文本格式。"
        },
        {
            id: "ml-w2-4-q5",
            question: "Notebook 输出过大会导致什么问题？",
            options: [
                "没有影响",
                "Notebook 变慢甚至崩溃",
                "输出自动截断",
                "文件加密"
            ],
            answer: 1,
            rationale: "大输出（如打印整个 DataFrame、长列表）会嵌入 JSON 文件，使 Notebook 变慢、打开卡顿甚至崩溃。使用 .head()/.sample() 限制输出。"
        },
        {
            id: "ml-w2-4-q6",
            question: "在 Notebook 中如何进入 post-mortem 调试？",
            options: [
                "使用 print 语句",
                "在错误后执行 %debug 魔法命令",
                "Notebook 不支持调试",
                "添加断点"
            ],
            answer: 1,
            rationale: "代码报错后执行 %debug 进入 post-mortem 调试器（ipdb），可以检查变量、执行表达式。但功能有限，复杂调试建议用 IDE。"
        }
    ]
}
