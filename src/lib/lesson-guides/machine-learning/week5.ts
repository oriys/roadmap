import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week5Guides: Record<string, LessonGuide> = {
    "ml-w5-1": {
        lessonId: "ml-w5-1",
        background: [
            "【聚类的本质】聚类是无监督学习的典型任务——在没有标签的情况下发现数据的自然分组。好的聚类使簇内相似度高、簇间相似度低。",
            "【K-Means 算法】1) 随机初始化 K 个质心 2) 分配每个点到最近质心 3) 更新质心为簇内均值 4) 重复直到收敛。目标是最小化簇内平方和 (inertia)。",
            "【K-Means 局限性】只能发现球形簇；对初始化敏感（kmeans++ 改进）；需要预先指定 K；对异常值敏感。尽管如此，因为简单高效，仍是最常用的聚类方法。",
            "【层次聚类】自底向上（凝聚）或自顶向下（分裂）构建树状结构。不需要预设 K，可以通过树状图（dendrogram）选择切割高度确定簇数。链接方法（ward、complete、average）影响簇形状。",
            "【DBSCAN】基于密度的聚类：核心点（邻域内至少 min_samples 个点）、边界点、噪声点。能发现任意形状的簇，自动识别噪声。但对参数 eps 敏感，高维数据效果差。"
        ],
        keyDifficulties: [
            "【K 的选择】肘部法（Elbow Method）：绘制 K vs inertia，找拐点。轮廓系数（Silhouette Score）：度量簇内紧密度和簇间分离度，范围 [-1,1]，越大越好。",
            "【距离度量影响】欧氏距离假设各维度等重要且尺度一致。高维数据可能需要 cosine 距离。类别特征需要 Gower 距离或先编码。",
            "【维度诅咒】高维空间中，点之间的距离趋于相似，聚类效果变差。先用 PCA/UMAP 降维可能改善效果。",
            "【聚类评估困难】无标签时无法用分类指标。轮廓系数、Calinski-Harabasz、Davies-Bouldin 等内部指标可用但不完美。最好结合领域知识评估。"
        ],
        handsOnPath: [
            "在合成数据（make_blobs, make_moons）上可视化 K-Means、层次聚类、DBSCAN 的效果差异。",
            "绘制肘部曲线和轮廓系数曲线，确定最佳 K 值。",
            "使用 scipy.cluster.hierarchy 绘制树状图，理解层次聚类的结构。",
            "在 DBSCAN 上实验不同 eps 和 min_samples，观察对簇数和噪声点的影响。"
        ],
        selfCheck: [
            "K-Means 算法的步骤是什么？它优化的目标函数是什么？",
            "K-Means 有哪些局限性？DBSCAN 如何解决其中一些？",
            "如何选择聚类数 K？肘部法和轮廓系数分别如何使用？",
            "层次聚类的树状图如何解读？如何确定切割高度？"
        ],
        extensions: [
            "学习 Gaussian Mixture Model (GMM)——软聚类，输出概率而非硬分配。",
            "探索 HDBSCAN——DBSCAN 的改进版本，自动选择密度参数。",
            "研究谱聚类（Spectral Clustering）用于图结构数据。",
            "了解 Mini-Batch K-Means 处理大数据集。"
        ],
        sourceUrls: [
            "https://scikit-learn.org/stable/modules/clustering.html",
            "https://stanford.edu/~cpiech/cs221/handouts/kmeans.html",
            "https://www.kdnuggets.com/2020/04/dbscan-clustering-algorithm-machine-learning.html"
        ]
    },
    "ml-w5-2": {
        lessonId: "ml-w5-2",
        background: [
            "【降维的两个目的】1) 数据压缩：减少存储和计算成本 2) 可视化：将高维数据投影到 2D/3D 以便人类理解。不同方法侧重不同目的。",
            "【PCA 原理】找到方差最大的正交方向（主成分）。数学上是协方差矩阵的特征值分解。保留前 k 个主成分实现降维，解释方差比例指导 k 的选择。",
            "【t-SNE 原理】将高维点的概率邻近关系保持到低维。强调局部结构，同类点会聚在一起。但全局距离不可信，簇间距离和大小无意义。",
            "【UMAP 优势】比 t-SNE 更快、更好保持全局结构、支持将新数据投影到学习的低维空间。近年在可视化和预处理中越来越流行。",
            "【方法选择】线性降维用 PCA（可逆、可解释）；非线性可视化用 t-SNE/UMAP；降维后做监督学习考虑监督降维方法（LDA、监督 UMAP）。"
        ],
        keyDifficulties: [
            "【t-SNE 超参数】perplexity 控制局部邻域大小，通常 5-50。值太小只看最近邻居，值太大失去局部结构。不同 perplexity 结果差异大，需多次尝试。",
            "【t-SNE 陷阱】簇的大小和密度不反映真实情况；离散的点可能实际属于同一类；运行多次可能得到不同图形。仅用于探索，不要过度解读。",
            "【选择主成分数】累计解释方差比例（如保留 95%）是常用准则。但有时任务驱动更好——用交叉验证选择最佳维度。",
            "【降维信息损失】任何降维都有信息损失。PCA 丢弃小方差方向（可能恰好是重要信号）。非线性降维不可逆，无法重构原始数据。"
        ],
        handsOnPath: [
            "在 MNIST 上用 PCA 降维到 2D 可视化，着色不同数字，观察哪些数字容易混淆。",
            "比较 PCA、t-SNE、UMAP 在同一数据集上的可视化效果和运行时间。",
            "绘制 PCA 解释方差比例累计图，确定保留多少主成分。",
            "实验 t-SNE 不同 perplexity 值，观察可视化结果变化。"
        ],
        selfCheck: [
            "PCA 的数学原理是什么？主成分有什么性质？",
            "t-SNE 保持什么结构？为什么簇间距离不可信？",
            "如何确定 PCA 保留多少主成分？",
            "UMAP 相比 t-SNE 的优势是什么？"
        ],
        extensions: [
            "学习 Kernel PCA 处理非线性数据。",
            "探索 Autoencoders 用神经网络实现非线性降维。",
            "研究 Isomap、LLE 等流形学习方法。",
            "了解随机投影（Random Projection）用于超高维数据快速降维。"
        ],
        sourceUrls: [
            "https://scikit-learn.org/stable/modules/decomposition.html#pca",
            "https://www.jmlr.org/papers/volume9/vandermaaten08a/vandermaaten08a.pdf",
            "https://umap-learn.readthedocs.io/en/latest/"
        ]
    },
    "ml-w5-3": {
        lessonId: "ml-w5-3",
        background: [
            "【特征工程的重要性】'Applied machine learning is basically feature engineering'（Andrew Ng）。好特征比复杂模型更重要。特征工程将领域知识编码到数据中。",
            "【缺失值处理】删除（丢失信息）、填充均值/中位数/众数（简单但忽略相关性）、填充预测值（如 KNN 填充）、标记为缺失类别（类别特征）。理解缺失机制（随机/非随机）很重要。",
            "【数值特征变换】标准化 (z-score)、归一化 (min-max)、对数变换（处理偏斜）、Box-Cox 变换（自动选择）、分箱（离散化）。选择取决于数据分布和算法需求。",
            "【类别编码】One-Hot（低基数）、Ordinal（有序类别）、Target Encoding（高基数，需防止泄露）、Embedding（神经网络）。高基数类别编码是常见挑战。",
            "【特征选择方法】Filter（统计指标如相关系数、互信息）、Wrapper（递归特征消除 RFE）、Embedded（L1 正则化、树的特征重要性）。减少特征可防止过拟合和加速训练。"
        ],
        keyDifficulties: [
            "【Target Encoding 泄露】直接用标签均值编码会导致过拟合。解决方案：留一法（Leave-One-Out）、K-Fold 编码、加入噪声平滑。sklearn-contrib 的 category_encoders 库提供多种实现。",
            "【时间特征提取】日期可分解为年、月、日、星期几、是否节假日、是否周末、距今天数等。周期特征（如月份）可用正弦/余弦编码保持周期性。",
            "【交互特征】特征组合（如 面积 = 长 × 宽）、比率（如 单价 = 价格/面积）。领域知识指导哪些交互有意义。多项式特征可自动生成但会爆炸。",
            "【特征泄露】使用了训练时不可得的信息（如未来数据、标签信息）。常见于时间序列、特征编码、目标工程。泄露导致线下评估过于乐观。"
        ],
        handsOnPath: [
            "在 Titanic 数据集上实践：处理年龄缺失值、编码性别和登船港口、从姓名提取称谓。",
            "比较不同编码方法：One-Hot vs Target Encoding 在高基数类别上的效果。",
            "使用 SelectKBest 或 RFE 进行特征选择，观察保留不同数量特征时的模型性能。",
            "构建 sklearn Pipeline 将预处理和模型训练封装，确保交叉验证时正确处理数据。"
        ],
        selfCheck: [
            "常见的缺失值处理方法有哪些？各有什么优缺点？",
            "什么时候用标准化？什么时候用归一化？",
            "Target Encoding 为什么会导致过拟合？如何解决？",
            "什么是特征泄露？如何避免？"
        ],
        extensions: [
            "学习 FeatureTools 进行自动特征工程。",
            "探索 Featureform 等特征存储/服务平台。",
            "研究实体嵌入（Entity Embeddings）用神经网络学习类别编码。",
            "了解 OpenFE 等自动化特征生成方法。"
        ],
        sourceUrls: [
            "https://scikit-learn.org/stable/modules/preprocessing.html",
            "https://www.oreilly.com/library/view/feature-engineering-for/9781491953235/",
            "https://www.kaggle.com/learn/feature-engineering"
        ]
    },
    "ml-w5-4": {
        lessonId: "ml-w5-4",
        background: [
            "【Pipeline 的价值】将数据预处理和模型训练封装成一个对象。好处：1) 代码更简洁 2) 避免交叉验证时数据泄露 3) 易于部署（一个对象包含完整流程）。",
            "【ColumnTransformer】对不同列应用不同变换。例如：数值列标准化，类别列 One-Hot 编码。sklearn.compose.ColumnTransformer 是关键工具。",
            "【Pipeline 嵌套】Pipeline 可以嵌套——一个 Pipeline 作为另一个的步骤。例如：先特征工程 Pipeline，再模型训练 Pipeline，最后组合成完整流程。",
            "【GridSearchCV 与 Pipeline】Pipeline 的每个步骤都有超参数。GridSearchCV 可以同时搜索预处理参数（如 PCA 组件数）和模型参数（如正则化强度）。用 __ 连接步骤名和参数名。",
            "【AutoML 概念】自动化机器学习：自动特征工程、模型选择、超参数调优。代表工具：Auto-sklearn、TPOT、H2O AutoML。理解 AutoML 可以提高效率，但不能完全替代人类专家。"
        ],
        keyDifficulties: [
            "【交叉验证中的数据泄露】如果在交叉验证前对全部数据做标准化/编码，验证集信息泄露到训练过程。Pipeline 确保每折只用训练折计算统计量。",
            "【自定义 Transformer】sklearn 的 FunctionTransformer 可以包装简单函数。复杂变换需要继承 BaseEstimator 和 TransformerMixin，实现 fit 和 transform 方法。",
            "【Pipeline 调试】Pipeline 报错时定位困难。用 Pipeline.named_steps 访问中间步骤，或临时拆分 Pipeline 调试各步骤。",
            "【Optuna 高效搜索】Grid Search 穷举低效。Optuna 用贝叶斯优化智能选择下一组参数，支持早停、剪枝、分布式搜索。"
        ],
        handsOnPath: [
            "构建完整 Pipeline：ColumnTransformer（数值标准化 + 类别编码）→ PCA → LogisticRegression。",
            "用 GridSearchCV 同时调优 PCA 的 n_components 和 LogisticRegression 的 C。",
            "实现自定义 Transformer：例如对数变换、或从文本提取长度特征。",
            "使用 Optuna 替代 GridSearchCV：定义目标函数，用 study.optimize 搜索。"
        ],
        selfCheck: [
            "为什么需要 Pipeline？它解决什么问题？",
            "ColumnTransformer 的作用是什么？如何指定不同列的变换？",
            "如何在 GridSearchCV 中指定 Pipeline 步骤的超参数？",
            "为什么必须在 Pipeline 内部做标准化而不是在交叉验证外部？"
        ],
        extensions: [
            "学习 sklearn-pandas 库更方便地处理 DataFrame。",
            "探索 Feature-engine 库提供更多特征工程转换器。",
            "研究 mlflow 跟踪实验，与 Pipeline 配合使用。",
            "了解 PyCaret 快速原型开发低代码 ML 库。"
        ],
        sourceUrls: [
            "https://scikit-learn.org/stable/modules/compose.html",
            "https://automl.github.io/auto-sklearn/master/",
            "https://optuna.readthedocs.io/en/stable/"
        ]
    }
}

export const week5Quizzes: Record<string, QuizQuestion[]> = {
    "ml-w5-1": [
        {
            id: "ml-w5-1-q1",
            question: "K-Means 算法优化的目标函数是什么？",
            options: [
                "最大化簇间距离",
                "最小化簇内平方和（inertia）",
                "最大化轮廓系数",
                "最小化簇的数量"
            ],
            answer: 1,
            rationale: "K-Means 最小化每个点到其簇质心距离的平方和，即 inertia = Σᵢ||xᵢ - μcᵢ||²。"
        },
        {
            id: "ml-w5-1-q2",
            question: "K-Means 无法处理什么形状的簇？",
            options: [
                "圆形簇",
                "椭圆形簇",
                "任意形状（如月牙形）的簇",
                "大小不同的簇"
            ],
            answer: 2,
            rationale: "K-Means 假设簇是凸的、球形的。对于月牙形、环形等任意形状的簇，K-Means 会错误划分。DBSCAN 能处理任意形状。"
        },
        {
            id: "ml-w5-1-q3",
            question: "DBSCAN 如何定义'核心点'？",
            options: [
                "距离所有点最近的点",
                "eps 邻域内至少有 min_samples 个点",
                "每个簇的质心",
                "随机选择的点"
            ],
            answer: 1,
            rationale: "DBSCAN 将 eps 半径内至少有 min_samples 个点的点定义为核心点。核心点之间通过密度可达形成簇。"
        },
        {
            id: "ml-w5-1-q4",
            question: "轮廓系数的范围是什么？",
            options: [
                "[0, 1]",
                "[-1, 1]",
                "[0, ∞)",
                "(-∞, +∞)"
            ],
            answer: 1,
            rationale: "轮廓系数 s = (b-a)/max(a,b)，其中 a 是簇内距离，b 是最近簇距离。范围 [-1,1]，越大越好，负值表示错误聚类。"
        },
        {
            id: "ml-w5-1-q5",
            question: "肘部法选择 K 的原理是什么？",
            options: [
                "选择 inertia 最小的 K",
                "选择 K 增加而 inertia 下降速度明显变缓的'拐点'",
                "选择最大的 K",
                "选择运行时间最短的 K"
            ],
            answer: 1,
            rationale: "绘制 K vs inertia 曲线，inertia 随 K 增加下降，但边际收益递减。拐点处增加 K 收益不大，是较好的选择。"
        },
        {
            id: "ml-w5-1-q6",
            question: "层次聚类树状图的纵轴表示什么？",
            options: [
                "样本数量",
                "合并时的距离/不相似度",
                "特征维度",
                "簇的编号"
            ],
            answer: 1,
            rationale: "树状图纵轴表示合并/分裂时的距离或不相似度。在某高度水平切割，与垂直线相交的数量就是簇数。"
        }
    ],
    "ml-w5-2": [
        {
            id: "ml-w5-2-q1",
            question: "PCA 的第一主成分有什么特性？",
            options: [
                "解释数据中最小的方差",
                "解释数据中最大的方差",
                "与所有其他主成分平行",
                "总是沿 x 轴方向"
            ],
            answer: 1,
            rationale: "第一主成分是数据方差最大的方向（信息量最大）。后续主成分与前面正交，依次解释剩余最大方差。"
        },
        {
            id: "ml-w5-2-q2",
            question: "t-SNE 可视化中，簇间距离可靠吗？",
            options: [
                "完全可靠，反映真实距离",
                "不可靠，t-SNE 强调局部结构，簇间距离无意义",
                "只在 perplexity 大于 50 时可靠",
                "只在 3D 投影时可靠"
            ],
            answer: 1,
            rationale: "t-SNE 优化局部邻居关系，簇的大小、密度、间距都不反映真实高维结构。仅用于探索，不要过度解读全局模式。"
        },
        {
            id: "ml-w5-2-q3",
            question: "如何确定 PCA 保留多少主成分？",
            options: [
                "总是保留 2 个",
                "保留累计解释方差达到某阈值（如 95%）的主成分数",
                "保留第一个主成分",
                "保留所有主成分"
            ],
            answer: 1,
            rationale: "常用方法是绘制累计解释方差比例，保留达到阈值（如 90-99%）的主成分数。也可用交叉验证选择。"
        },
        {
            id: "ml-w5-2-q4",
            question: "UMAP 相比 t-SNE 的优势不包括？",
            options: [
                "更快的运行速度",
                "更好地保持全局结构",
                "支持将新数据投影到学习的空间",
                "不需要任何超参数"
            ],
            answer: 3,
            rationale: "UMAP 更快、保持全局结构更好、支持 transform 新数据。但它仍需要 n_neighbors、min_dist 等超参数。"
        },
        {
            id: "ml-w5-2-q5",
            question: "t-SNE 的 perplexity 参数控制什么？",
            options: [
                "输出维度",
                "迭代次数",
                "局部邻域的有效大小",
                "学习率"
            ],
            answer: 2,
            rationale: "perplexity 可理解为每个点的有效邻居数。小值（如 5）只看最近邻居，大值（如 50）考虑更多点。通常尝试 5-50。"
        },
        {
            id: "ml-w5-2-q6",
            question: "为什么高维数据可能需要先降维再聚类？",
            options: [
                "降维使数据更容易存储",
                "高维空间中距离趋于相似（维度诅咒），聚类效果差",
                "聚类算法只能处理 2D 数据",
                "降维会增加信息"
            ],
            answer: 1,
            rationale: "维度诅咒：高维空间中点之间的距离趋于相似，'最近邻'和'最远邻'差异缩小，基于距离的聚类效果变差。"
        }
    ],
    "ml-w5-3": [
        {
            id: "ml-w5-3-q1",
            question: "标准化 (z-score) 和归一化 (min-max) 的区别是什么？",
            options: [
                "标准化将数据转换为均值 0 标准差 1；归一化缩放到 [0,1] 范围",
                "两者完全相同",
                "标准化只能用于分类，归一化只能用于回归",
                "归一化更适合神经网络"
            ],
            answer: 0,
            rationale: "标准化 z = (x-μ)/σ 得到均值 0 标准差 1；归一化 x' = (x-min)/(max-min) 缩放到 [0,1]。选择取决于算法和数据分布。"
        },
        {
            id: "ml-w5-3-q2",
            question: "Target Encoding 为什么可能导致过拟合？",
            options: [
                "编码后特征太多",
                "使用了标签信息编码特征，训练时会'作弊'",
                "计算太慢",
                "只能用于二分类"
            ],
            answer: 1,
            rationale: "Target Encoding 用该类别的标签均值编码。训练时包含当前样本的标签信息，模型可能记住这种'泄露'，导致过拟合。"
        },
        {
            id: "ml-w5-3-q3",
            question: "特征选择的三种方法类型是什么？",
            options: [
                "快速、中速、慢速",
                "Filter（统计过滤）、Wrapper（包装评估）、Embedded（嵌入模型）",
                "监督、无监督、半监督",
                "线性、非线性、混合"
            ],
            answer: 1,
            rationale: "Filter 用统计指标（如互信息）快速筛选；Wrapper 评估特征子集的模型性能（如 RFE）；Embedded 在模型训练中选择（如 L1 正则化）。"
        },
        {
            id: "ml-w5-3-q4",
            question: "什么是特征泄露？",
            options: [
                "特征缺失值太多",
                "特征使用了训练时不可得的信息（如未来数据、标签信息）",
                "特征太少",
                "特征之间相关性太高"
            ],
            answer: 1,
            rationale: "特征泄露指使用了预测时不可得的信息，如未来时间的数据、直接包含标签的变量。导致模型在验证时看起来很好但部署后失效。"
        },
        {
            id: "ml-w5-3-q5",
            question: "高基数类别特征应该如何编码？",
            options: [
                "总是使用 One-Hot 编码",
                "Target Encoding（需防止泄露）、Embedding、或基于频率的编码",
                "直接丢弃",
                "只保留前 10 个类别"
            ],
            answer: 1,
            rationale: "高基数类别 One-Hot 会产生太多特征。可用 Target Encoding（需要交叉验证或正则化）、神经网络 Embedding、或按频率分桶。"
        },
        {
            id: "ml-w5-3-q6",
            question: "对数变换适合处理什么样的数据？",
            options: [
                "正态分布数据",
                "右偏分布（如收入、价格）",
                "左偏分布",
                "均匀分布"
            ],
            answer: 1,
            rationale: "对数变换将右偏分布拉向对称。收入、价格、浏览量等常呈右偏分布，取对数后更接近正态，有利于线性模型。"
        }
    ],
    "ml-w5-4": [
        {
            id: "ml-w5-4-q1",
            question: "为什么必须在交叉验证的 Pipeline 内部做标准化？",
            options: [
                "标准化更快",
                "避免验证集信息泄露到训练过程",
                "Pipeline 不支持外部标准化",
                "这只是代码风格问题"
            ],
            answer: 1,
            rationale: "如果在 CV 前对全部数据标准化，验证集的均值/标准差会影响训练数据的变换，造成信息泄露。Pipeline 确保每折独立计算。"
        },
        {
            id: "ml-w5-4-q2",
            question: "ColumnTransformer 的作用是什么？",
            options: [
                "删除列",
                "对不同列应用不同的预处理变换",
                "增加新列",
                "重命名列"
            ],
            answer: 1,
            rationale: "ColumnTransformer 可以对数值列应用标准化，对类别列应用 One-Hot，对文本列应用 TF-IDF 等，然后合并输出。"
        },
        {
            id: "ml-w5-4-q3",
            question: "在 GridSearchCV 中如何指定 Pipeline 步骤的参数？",
            options: [
                "直接用参数名",
                "用'步骤名__参数名'格式（双下划线连接）",
                "用'步骤名.参数名'格式",
                "无法指定"
            ],
            answer: 1,
            rationale: "用双下划线连接步骤名和参数名，如 {'pca__n_components': [10, 20], 'classifier__C': [0.1, 1]}。"
        },
        {
            id: "ml-w5-4-q4",
            question: "Optuna 相比 GridSearchCV 的优势是什么？",
            options: [
                "更简单",
                "贝叶斯优化智能选择参数，支持早停和剪枝",
                "不需要定义参数范围",
                "只能用于神经网络"
            ],
            answer: 1,
            rationale: "Optuna 用贝叶斯优化（如 TPE）根据历史结果智能选择参数，比网格穷举高效。支持早停低效试验、分布式搜索。"
        },
        {
            id: "ml-w5-4-q5",
            question: "自定义 sklearn Transformer 需要实现哪些方法？",
            options: [
                "只需 transform",
                "fit 和 transform",
                "只需 predict",
                "fit_transform"
            ],
            answer: 1,
            rationale: "需要实现 fit（从数据学习参数）和 transform（应用变换）。fit_transform 通常由基类自动提供。还需继承 BaseEstimator。"
        },
        {
            id: "ml-w5-4-q6",
            question: "AutoML 工具的主要功能是什么？",
            options: [
                "只是加速数据加载",
                "自动特征工程、模型选择、超参数调优",
                "只做数据可视化",
                "只能用于图像分类"
            ],
            answer: 1,
            rationale: "AutoML 自动化整个机器学习流程：特征工程、模型选择、超参数优化。代表工具有 Auto-sklearn、TPOT、H2O AutoML。"
        }
    ]
}
