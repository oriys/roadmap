import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week3Guides: Record<string, LessonGuide> = {
    "ml-w3-1": {
        lessonId: "ml-w3-1",
        background: [
            "【线性回归的几何直觉】线性回归在特征空间中寻找一个超平面，使得数据点到超平面的垂直距离（残差）平方和最小。在 2D 中就是找一条最佳拟合直线，这是理解更复杂模型的起点。",
            "【最小二乘法推导】损失函数 L(w) = Σ(yᵢ - wᵀxᵢ)² 对 w 求导令其为 0，得到正规方程 w = (XᵀX)⁻¹Xᵀy。这是解析解，但计算 (XᵀX)⁻¹ 在高维下代价高昂且数值不稳定。",
            "【梯度下降替代】实际中常用梯度下降迭代求解：w ← w - η·∂L/∂w = w + η·Xᵀ(y - Xw)。批量梯度下降用全部数据，SGD 用单样本，Mini-batch 是折中。",
            "【特征标准化的重要性】不同尺度的特征会导致损失函数等高线呈椭圆形，梯度下降路径之字形震荡。标准化 (x-μ)/σ 使等高线接近圆形，加速收敛。Scikit-learn 的 StandardScaler 自动处理。",
            "【概率解释】假设 y = wᵀx + ε，ε ~ N(0, σ²)，则最大化似然函数等价于最小化 MSE。这建立了线性回归与概率统计的桥梁，也解释了为什么 MSE 是自然的损失函数。"
        ],
        keyDifficulties: [
            "【多重共线性】当特征高度相关时，XᵀX 接近奇异，系数估计不稳定（方差爆炸）。VIF（方差膨胀因子）检测共线性，L2 正则化是解决方案。",
            "【残差分析】好的模型残差应该：均值为 0、方差恒定（同方差性）、无自相关、近似正态分布。QQ 图、残差-拟合值图是诊断工具。违反假设说明模型有缺陷。",
            "【外推风险】线性模型只在训练数据范围内可靠。外推到未见区域的预测缺乏保证，特别是当真实关系是非线性时。",
            "【异常值敏感性】最小二乘法对异常值非常敏感——单个离群点可以显著拉动回归线。鲁棒回归方法（如 Huber loss、RANSAC）能减轻影响。"
        ],
        handsOnPath: [
            "用 NumPy 手动实现线性回归：生成合成数据 y = 2x + 1 + noise，用正规方程求解系数，验证结果接近 [2, 1]。",
            "实现梯度下降版本：初始化 w，迭代 w ← w - lr * gradient，绘制损失曲线观察收敛过程。",
            "使用 sklearn.linear_model.LinearRegression 在波士顿房价数据集上训练，用 .coef_ 和 .intercept_ 查看系数。",
            "进行残差分析：绘制残差直方图、QQ 图、残差-拟合值图，检验是否满足线性回归假设。"
        ],
        selfCheck: [
            "最小二乘法的目标函数是什么？正规方程是什么？",
            "为什么需要特征标准化？对梯度下降有什么影响？",
            "多重共线性会导致什么问题？如何检测和解决？",
            "线性回归的概率解释是什么？MSE 损失对应什么分布假设？"
        ],
        extensions: [
            "学习加权最小二乘法（WLS），处理异方差数据。",
            "探索贝叶斯线性回归，获得参数的后验分布而非点估计。",
            "研究广义线性模型（GLM），将线性回归扩展到非正态响应变量。",
            "了解工具变量法处理内生性问题。"
        ],
        sourceUrls: [
            "https://scikit-learn.org/stable/modules/linear_model.html",
            "https://www.coursera.org/learn/machine-learning",
            "https://www.statlearning.com/"
        ]
    },
    "ml-w3-2": {
        lessonId: "ml-w3-2",
        background: [
            "【过拟合的本质】复杂模型能完美拟合训练数据，但捕捉的可能是噪声而非信号。正则化通过约束模型复杂度，在拟合能力和泛化能力之间取得平衡。",
            "【L2 正则化 (Ridge)】损失函数 L(w) = MSE + λΣwᵢ²，惩罚大权重但不将其压到 0。解析解变为 w = (XᵀX + λI)⁻¹Xᵀy，加入 λI 使矩阵总可逆，解决共线性问题。",
            "【L1 正则化 (Lasso)】损失函数 L(w) = MSE + λΣ|wᵢ|，倾向于产生稀疏解（部分权重精确为 0）。这实现了自动特征选择——不重要的特征被移除。",
            "【Elastic Net】结合 L1 和 L2：L(w) = MSE + λ₁Σ|wᵢ| + λ₂Σwᵢ²。既有 Lasso 的特征选择能力，又有 Ridge 的稳定性。当特征组相关时，Lasso 随机选一个，Elastic Net 倾向于选整组。",
            "【λ 的选择】正则化强度 λ 是关键超参数。λ 太小正则化效果弱，λ 太大欠拟合。交叉验证（如 5-fold CV）是标准选择方法，sklearn 的 RidgeCV/LassoCV 自动完成。"
        ],
        keyDifficulties: [
            "【L1 稀疏性的几何解释】L1 约束域是菱形（|w₁|+|w₂|≤t），等高线与约束边界最可能在顶点相切，而顶点处某个坐标为 0。L2 约束域是圆，相切点通常在内部（非稀疏）。",
            "【特征尺度敏感性】正则化对特征尺度敏感——大尺度特征的系数被惩罚更多。因此正则化前必须标准化特征。sklearn 的 Ridge/Lasso 不自动标准化，需要配合 StandardScaler 使用。",
            "【Lasso 的解不唯一问题】当特征高度相关时，Lasso 可能随机选择其中之一，结果不稳定。Elastic Net 通过 L2 项稳定化解决这个问题。",
            "【正则化路径】λ 从大到小变化时，系数从 0 逐渐变大。绘制正则化路径（系数 vs λ）可以洞察特征重要性和选择合适的 λ。"
        ],
        handsOnPath: [
            "在高维数据（特征数 > 样本数）上比较普通线性回归和 Ridge：观察系数大小和预测误差的差异。",
            "使用 LassoCV 自动选择 λ，检查哪些特征系数变为 0，理解 Lasso 的特征选择效果。",
            "绘制正则化路径：用 sklearn.linear_model.lasso_path，横轴 λ 纵轴系数，观察系数如何随正则化强度变化。",
            "实验 Elastic Net：在相关特征组上比较 Lasso 和 Elastic Net 的特征选择行为。"
        ],
        selfCheck: [
            "L1 和 L2 正则化的区别是什么？各自的优缺点？",
            "为什么 L1 正则化产生稀疏解？用几何直觉解释。",
            "正则化前为什么必须标准化特征？",
            "如何选择正则化强度 λ？"
        ],
        extensions: [
            "学习 Group Lasso 和 Sparse Group Lasso，用于结构化特征选择。",
            "探索核岭回归（Kernel Ridge Regression），将线性方法扩展到非线性。",
            "研究 SCAD、MCP 等非凸正则化方法，比 Lasso 有更好的统计性质。",
            "了解 Double Descent 现象——过参数化模型在插值后泛化反而变好。"
        ],
        sourceUrls: [
            "https://scikit-learn.org/stable/modules/linear_model.html#ridge-regression-and-classification",
            "https://scikit-learn.org/stable/modules/linear_model.html#lasso",
            "https://www.statlearning.com/"
        ]
    },
    "ml-w3-3": {
        lessonId: "ml-w3-3",
        background: [
            "【多项式回归思想】通过添加特征的高次项（x², x³, x₁x₂ 等），线性模型可以拟合非线性关系。模型对参数仍是线性的，所以所有线性回归技术仍适用。",
            "【PolynomialFeatures】sklearn.preprocessing.PolynomialFeatures 自动生成多项式特征。degree=2 将 [a, b] 变为 [1, a, b, a², ab, b²]。注意特征数爆炸增长：n 个特征 degree=d 产生 C(n+d, d) 个新特征。",
            "【Bias-Variance Tradeoff】模型预测误差 = Bias² + Variance + 不可约噪声。简单模型高偏差低方差（欠拟合），复杂模型低偏差高方差（过拟合）。最优模型在两者间取得平衡。",
            "【学习曲线诊断】绘制训练误差和验证误差 vs 训练样本量。高偏差：两曲线都高且平行；高方差：训练误差低验证误差高、差距大。学习曲线指导是否需要更多数据或更简单/复杂的模型。",
            "【特征变换泛化】除多项式外，还可用 log、sqrt、倒数等变换。例如收入服从对数正态，取 log 后更接近正态，线性模型效果更好。领域知识指导变换选择。"
        ],
        keyDifficulties: [
            "【过拟合风险】高次多项式在训练集上完美拟合，但在训练范围外急剧震荡。degree > 5 通常危险，需要配合强正则化使用。",
            "【特征交互爆炸】interaction_only=True 只生成交互项不含高次项，减少特征数。但当原特征很多时，交互项数量仍然爆炸，需要领域知识筛选重要交互。",
            "【外推灾难】多项式在训练范围外行为不可控——可能剧烈上升或下降。如果需要外推，考虑更稳健的非线性方法（如样条回归、GAM）。",
            "【与神经网络对比】多项式回归可视为单层神经网络加多项式激活函数。神经网络通过多层非线性变换自动学习特征交互，不需要手动构造。"
        ],
        handsOnPath: [
            "生成非线性数据 y = sin(x) + noise，分别用 degree=1,3,5,10 的多项式拟合，可视化拟合曲线观察过拟合。",
            "绘制学习曲线：使用 sklearn.model_selection.learning_curve，诊断模型是欠拟合还是过拟合。",
            "结合多项式特征和 Ridge 回归，观察正则化如何抑制高次多项式的过拟合。",
            "在真实数据集上实验特征变换：对价格列取 log、对面积取 sqrt，观察对线性模型性能的影响。"
        ],
        selfCheck: [
            "多项式回归如何拟合非线性关系？它对参数是线性还是非线性的？",
            "什么是偏差-方差权衡？简单模型和复杂模型分别有什么特点？",
            "学习曲线如何诊断欠拟合和过拟合？分别表现为什么形状？",
            "为什么高次多项式在外推时不可靠？"
        ],
        extensions: [
            "学习样条回归（Spline Regression），用分段多项式实现平滑非线性拟合。",
            "探索广义加性模型（GAM），每个特征有独立的非线性变换。",
            "研究分位数回归，预测条件分位数而非条件均值。",
            "了解局部线性回归（LOESS/LOWESS）用于非参数回归。"
        ],
        sourceUrls: [
            "https://scikit-learn.org/stable/modules/preprocessing.html#generating-polynomial-features",
            "https://www.cs.cornell.edu/courses/cs4780/2018fa/lectures/lecturenote12.html",
            "https://scikit-learn.org/stable/auto_examples/model_selection/plot_underfitting_overfitting.html"
        ]
    },
    "ml-w3-4": {
        lessonId: "ml-w3-4",
        background: [
            "【为什么需要交叉验证】简单的训练/测试划分随机性大，评估结果方差高。交叉验证通过多次不同划分的平均，得到更稳定的性能估计。K-Fold CV 是最常用的方法。",
            "【K-Fold CV 流程】数据分成 K 份，轮流用 1 份验证其他训练，得到 K 个评估分数，取平均。K=5 或 10 是常用选择。Stratified K-Fold 保证每折类别比例一致（分类问题必用）。",
            "【时间序列的特殊性】时间序列不能随机打乱划分，否则会用未来数据预测过去（数据泄露）。TimeSeriesSplit 保证验证集总在训练集时间之后。",
            "【回归评估指标】MSE（均方误差）对大误差惩罚重；MAE（平均绝对误差）对异常值更鲁棒；RMSE（MSE 开根号）与原数据同单位；R²（决定系数）表示模型解释的方差比例，1 是完美，0 是不如均值预测。",
            "【嵌套交叉验证】同时做超参数调优和性能评估时，需要嵌套 CV：外层评估泛化性能，内层选择超参数。否则超参数选择也会过拟合验证集。"
        ],
        keyDifficulties: [
            "【K 值选择】K 小（如 5）计算快但方差大，K 大（如 Leave-One-Out）偏差小但方差可能反而大且计算昂贵。经验上 5-10 是好的折中。",
            "【分组数据泄露】如果同一实体（如同一用户、同一患者）的多条数据分散在训练和验证集，会导致过于乐观的评估。GroupKFold 确保同一组不跨折。",
            "【计算代价】K-Fold CV 需要训练 K 次模型。对于大数据集和复杂模型，可能需要权衡：使用更简单的单次 holdout，或减小 K。",
            "【方差估计】单次 K-Fold CV 只给点估计，不提供不确定性。RepeatedKFold（多次 K-Fold 取不同随机种子）可以估计方差。"
        ],
        handsOnPath: [
            "用 sklearn.model_selection.cross_val_score 进行 5 折交叉验证，打印每折分数和平均分数。",
            "比较不同 K 值（3, 5, 10, n=LOO）的 CV 分数方差，验证 K 值对稳定性的影响。",
            "在时间序列数据上使用 TimeSeriesSplit，可视化每次划分的训练/验证索引。",
            "实现嵌套 CV：外层 5 折评估，内层 3 折调参，使用 GridSearchCV 作为内层。"
        ],
        selfCheck: [
            "为什么单次训练/测试划分不够？交叉验证解决什么问题？",
            "K-Fold CV 的流程是什么？K 值如何影响偏差和方差？",
            "时间序列为什么不能用普通 K-Fold？应该用什么方法？",
            "R² = 0.8 意味着什么？R² 可以是负数吗？什么情况下？"
        ],
        extensions: [
            "学习 Bootstrap 方法，另一种估计模型性能和不确定性的重采样技术。",
            "探索 Bayesian Optimization 用于超参数调优，比 Grid Search 更高效。",
            "研究模型校准（Calibration）评估——预测概率是否与真实频率一致。",
            "了解 Conformal Prediction 提供有理论保证的预测区间。"
        ],
        sourceUrls: [
            "https://scikit-learn.org/stable/modules/cross_validation.html",
            "https://scikit-learn.org/stable/modules/model_evaluation.html#regression-metrics",
            "https://machinelearningmastery.com/k-fold-cross-validation/"
        ]
    }
}

export const week3Quizzes: Record<string, QuizQuestion[]> = {
    "ml-w3-1": [
        {
            id: "ml-w3-1-q1",
            question: "线性回归的正规方程解是什么？",
            options: [
                "w = XᵀX·y",
                "w = (XᵀX)⁻¹Xᵀy",
                "w = X⁻¹y",
                "w = Xᵀy"
            ],
            answer: 1,
            rationale: "对 MSE 损失函数求导令其为 0，得到正规方程解 w = (XᵀX)⁻¹Xᵀy。这是闭式解但计算代价 O(n³)。"
        },
        {
            id: "ml-w3-1-q2",
            question: "特征标准化对梯度下降有什么影响？",
            options: [
                "没有影响",
                "使损失函数等高线更圆，加速收敛",
                "增加模型复杂度",
                "减少特征数量"
            ],
            answer: 1,
            rationale: "不同尺度特征导致椭圆形等高线，梯度下降之字形震荡。标准化使等高线接近圆形，梯度直指最优点，收敛更快。"
        },
        {
            id: "ml-w3-1-q3",
            question: "多重共线性会导致什么问题？",
            options: [
                "模型无法训练",
                "系数估计不稳定，方差很大",
                "训练误差增大",
                "特征数减少"
            ],
            answer: 1,
            rationale: "特征高度相关时 XᵀX 接近奇异，系数估计方差爆炸。微小数据扰动导致系数剧烈变化，虽然预测可能仍准确。"
        },
        {
            id: "ml-w3-1-q4",
            question: "假设 y = wᵀx + ε，ε ~ N(0, σ²)，最大似然估计等价于最小化什么？",
            options: [
                "MAE（平均绝对误差）",
                "MSE（均方误差）",
                "交叉熵",
                "Hinge Loss"
            ],
            answer: 1,
            rationale: "在高斯噪声假设下，最大化似然函数等价于最小化 MSE。这是线性回归使用 MSE 损失的概率论基础。"
        },
        {
            id: "ml-w3-1-q5",
            question: "线性回归残差应该满足什么条件？",
            options: [
                "均值为 0、方差恒定、无自相关、近似正态",
                "均值为 1、方差递增",
                "呈指数分布",
                "与预测值正相关"
            ],
            answer: 0,
            rationale: "线性回归假设残差是 iid 正态的，表现为：均值为 0、同方差性、无自相关、正态分布。违反说明模型有缺陷。"
        },
        {
            id: "ml-w3-1-q6",
            question: "为什么不推荐使用正规方程求解大规模线性回归？",
            options: [
                "正规方程不准确",
                "计算 (XᵀX)⁻¹ 复杂度 O(n³) 且数值不稳定",
                "正规方程只能用于二维数据",
                "正规方程不支持正则化"
            ],
            answer: 1,
            rationale: "矩阵求逆复杂度 O(n³)，特征多时计算昂贵。当 XᵀX 条件数大时数值不稳定。梯度下降和 SVD 分解是更好的选择。"
        }
    ],
    "ml-w3-2": [
        {
            id: "ml-w3-2-q1",
            question: "L1 正则化（Lasso）和 L2 正则化（Ridge）的主要区别是什么？",
            options: [
                "L1 产生稀疏解（部分系数为 0），L2 缩小但不消除系数",
                "L1 计算更快",
                "L2 产生稀疏解",
                "两者效果相同"
            ],
            answer: 0,
            rationale: "L1 的约束域是菱形，优化解倾向于在顶点（系数为 0）处取得。L2 约束域是圆，解通常在内部（非稀疏）。"
        },
        {
            id: "ml-w3-2-q2",
            question: "正则化前为什么必须标准化特征？",
            options: [
                "标准化使模型更简单",
                "正则化对特征尺度敏感，大尺度特征被过度惩罚",
                "标准化减少特征数量",
                "标准化提高计算速度"
            ],
            answer: 1,
            rationale: "正则化惩罚系数大小，但系数大小与特征尺度反相关。不标准化会使大尺度特征的系数被过度惩罚，不公平。"
        },
        {
            id: "ml-w3-2-q3",
            question: "Ridge 回归的解析解是什么？",
            options: [
                "w = (XᵀX)⁻¹Xᵀy",
                "w = (XᵀX + λI)⁻¹Xᵀy",
                "w = λXᵀy",
                "w = X⁻¹(y + λ)"
            ],
            answer: 1,
            rationale: "Ridge 在正规方程基础上加入 λI 正则化项，w = (XᵀX + λI)⁻¹Xᵀy。λI 保证矩阵可逆，解决共线性问题。"
        },
        {
            id: "ml-w3-2-q4",
            question: "如何选择正则化强度 λ？",
            options: [
                "固定使用 λ=1",
                "用交叉验证选择使验证误差最小的 λ",
                "使用最大的 λ 值",
                "不需要调整 λ"
            ],
            answer: 1,
            rationale: "λ 是超参数，通过交叉验证搜索最优值。sklearn 的 RidgeCV/LassoCV 在一系列 λ 中自动选择。"
        },
        {
            id: "ml-w3-2-q5",
            question: "Elastic Net 结合了什么？",
            options: [
                "L1 和 L2 正则化",
                "线性和多项式特征",
                "回归和分类",
                "训练和测试数据"
            ],
            answer: 0,
            rationale: "Elastic Net 损失 = MSE + λ₁|w| + λ₂w²，兼具 Lasso 的稀疏性和 Ridge 的稳定性，适合相关特征组。"
        },
        {
            id: "ml-w3-2-q6",
            question: "当特征高度相关时，Lasso 有什么问题？",
            options: [
                "无法训练",
                "随机选择相关特征中的一个，结果不稳定",
                "选择所有相关特征",
                "系数全为 0"
            ],
            answer: 1,
            rationale: "Lasso 在相关特征组中只保留一个（随机），不同训练运行可能选不同特征。Elastic Net 的 L2 项稳定化这个行为。"
        }
    ],
    "ml-w3-3": [
        {
            id: "ml-w3-3-q1",
            question: "多项式回归对参数是线性还是非线性的？",
            options: [
                "对参数非线性",
                "对参数仍是线性的，只是特征是非线性的",
                "取决于多项式次数",
                "都不是"
            ],
            answer: 1,
            rationale: "多项式回归 y = w₀ + w₁x + w₂x² 对 x 是非线性的，但对参数 w 仍是线性的。所以线性回归技术全部适用。"
        },
        {
            id: "ml-w3-3-q2",
            question: "偏差-方差分解中，复杂模型的特点是什么？",
            options: [
                "高偏差、低方差",
                "低偏差、高方差",
                "高偏差、高方差",
                "低偏差、低方差"
            ],
            answer: 1,
            rationale: "复杂模型能拟合复杂模式（低偏差），但对训练数据变化敏感（高方差）。表现为训练误差低、测试误差高（过拟合）。"
        },
        {
            id: "ml-w3-3-q3",
            question: "学习曲线显示训练误差和验证误差都很高且接近，说明什么？",
            options: [
                "过拟合",
                "欠拟合（高偏差）",
                "模型完美",
                "需要更多特征"
            ],
            answer: 1,
            rationale: "两条曲线都高且平行说明模型太简单，无法捕捉数据规律（欠拟合/高偏差）。需要更复杂的模型或更好的特征。"
        },
        {
            id: "ml-w3-3-q4",
            question: "为什么高次多项式在外推时不可靠？",
            options: [
                "计算太慢",
                "多项式在训练范围外可能急剧震荡",
                "高次多项式只能用于分类",
                "需要更多数据"
            ],
            answer: 1,
            rationale: "多项式在训练范围内可以很好拟合，但在外部行为不可控——高次项主导导致预测值可能极大或极小。"
        },
        {
            id: "ml-w3-3-q5",
            question: "n 个特征用 degree=2 的 PolynomialFeatures 会产生多少特征？",
            options: [
                "2n",
                "n²",
                "C(n+2,2) = (n+1)(n+2)/2",
                "n+1"
            ],
            answer: 2,
            rationale: "degree=2 包含常数项、一次项、二次项和交互项。对 n 个特征，总数是 C(n+2,2) = (n+1)(n+2)/2。特征数增长很快。"
        },
        {
            id: "ml-w3-3-q6",
            question: "学习曲线显示训练误差低、验证误差高且差距大，说明什么？",
            options: [
                "欠拟合",
                "过拟合（高方差）",
                "数据有问题",
                "模型完美"
            ],
            answer: 1,
            rationale: "训练误差低说明模型拟合训练数据好，验证误差高说明泛化差。大差距是过拟合的典型表现，需要正则化或简化模型。"
        }
    ],
    "ml-w3-4": [
        {
            id: "ml-w3-4-q1",
            question: "K-Fold 交叉验证的流程是什么？",
            options: [
                "数据分 K 份，每次用 1 份验证其他训练，取 K 次结果平均",
                "随机选 K 个样本验证",
                "训练 K 次取最好的",
                "数据复制 K 份"
            ],
            answer: 0,
            rationale: "K-Fold 将数据均分为 K 份，轮流用每份作验证集其余作训练集，得到 K 个评估分数，取平均作为最终性能估计。"
        },
        {
            id: "ml-w3-4-q2",
            question: "时间序列数据为什么不能用普通 K-Fold CV？",
            options: [
                "时间序列数据太少",
                "会用未来数据预测过去，导致数据泄露",
                "时间序列不能划分",
                "K-Fold 不支持回归"
            ],
            answer: 1,
            rationale: "时间序列有时间顺序，随机划分可能把未来数据放入训练集。这是数据泄露，会导致过于乐观的评估。应用 TimeSeriesSplit。"
        },
        {
            id: "ml-w3-4-q3",
            question: "R² 决定系数等于 0.8 意味着什么？",
            options: [
                "预测值与真实值相关系数为 0.8",
                "模型解释了目标变量 80% 的方差",
                "预测准确率为 80%",
                "模型使用了 80% 的特征"
            ],
            answer: 1,
            rationale: "R² = 1 - SS_res/SS_tot 表示模型解释的方差比例。R²=0.8 意味着模型捕捉了 80% 的数据变异，20% 是残差。"
        },
        {
            id: "ml-w3-4-q4",
            question: "R² 可以是负数吗？什么情况下？",
            options: [
                "不可以，R² 始终非负",
                "可以，当模型预测比简单预测均值还差时",
                "只有分类问题才会",
                "当数据有缺失值时"
            ],
            answer: 1,
            rationale: "R² = 1 - SS_res/SS_tot。当模型残差平方和超过总平方和时（预测比均值还差），R² 为负。说明模型非常糟糕。"
        },
        {
            id: "ml-w3-4-q5",
            question: "什么是嵌套交叉验证？为什么需要它？",
            options: [
                "用更多折数的 CV",
                "外层评估泛化性能，内层选超参数，避免调参过拟合验证集",
                "将数据嵌套分组",
                "只用于深度学习"
            ],
            answer: 1,
            rationale: "如果用同一验证集既调参又评估，超参数选择也会过拟合这个验证集。嵌套 CV 分离这两步，外层评估泛化，内层调参。"
        },
        {
            id: "ml-w3-4-q6",
            question: "MAE 和 MSE 相比，对异常值的敏感性如何？",
            options: [
                "MAE 对异常值更敏感",
                "MSE 对异常值更敏感（因为平方放大大误差）",
                "两者敏感性相同",
                "取决于数据分布"
            ],
            answer: 1,
            rationale: "MSE 对误差平方，大误差被放大。MAE 用绝对值，对异常值更鲁棒。如果数据有离群点，MAE 可能更合适。"
        }
    ]
}
