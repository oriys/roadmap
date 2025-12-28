import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week4Guides: Record<string, LessonGuide> = {
    "ml-w4-1": {
        lessonId: "ml-w4-1",
        background: [
            "【从回归到分类】线性回归输出无界实数，不适合预测概率。逻辑回归用 Sigmoid 函数 σ(z) = 1/(1+e⁻ᶻ) 将线性组合映射到 (0,1) 区间，输出可解释为正类概率。",
            "【Sigmoid 函数性质】σ(z) 在 z=0 处输出 0.5，z→+∞ 趋近 1，z→-∞ 趋近 0。导数 σ'(z) = σ(z)(1-σ(z)) 形式简洁，最大值 0.25（这是深度网络梯度消失的一个原因）。",
            "【对数几率解释】log(p/(1-p)) = wᵀx，即对数几率（log-odds）是特征的线性函数。系数 wᵢ 表示特征 xᵢ 增加 1 单位时，对数几率增加 wᵢ——这提供了良好的可解释性。",
            "【交叉熵损失】损失函数 L = -[y·log(p) + (1-y)·log(1-p)]。当预测错误且自信时惩罚很大。这等价于伯努利分布的负对数似然，最小化交叉熵等价于最大似然估计。",
            "【多分类扩展】Softmax 回归将 K 类概率表示为 pₖ = exp(wₖᵀx)/Σexp(wⱼᵀx)。多类交叉熵 L = -Σyₖ·log(pₖ)。sklearn 的 LogisticRegression 自动处理多分类（one-vs-rest 或 multinomial）。"
        ],
        keyDifficulties: [
            "【线性决策边界】逻辑回归的决策边界 wᵀx = 0 是超平面，无法直接处理非线性可分数据。解决方案：添加多项式特征或使用核方法。",
            "【类别不平衡】正负样本比例悬殊时，模型倾向于预测多数类。解决方案：class_weight='balanced' 或过采样/欠采样。",
            "【完全可分问题】当数据线性可分时，最优系数趋向无穷大（以获得无穷陡的 Sigmoid）。正则化是必要的。",
            "【概率校准】逻辑回归输出理论上是概率，但实际可能未校准。sklearn 的 CalibratedClassifierCV 可以后处理校准。"
        ],
        handsOnPath: [
            "手动实现逻辑回归：实现 Sigmoid、交叉熵损失、梯度下降更新。在二维数据上训练并可视化决策边界。",
            "用 sklearn.linear_model.LogisticRegression 在 Iris 数据集二分类上训练，查看 .coef_ 解释特征重要性。",
            "实验 class_weight='balanced' 处理不平衡数据，对比有无权重时的精确率和召回率。",
            "绘制校准曲线（calibration curve）：将预测概率分桶，对比每桶的平均概率和实际正类比例。"
        ],
        selfCheck: [
            "Sigmoid 函数的作用是什么？它如何将线性输出转换为概率？",
            "交叉熵损失的公式是什么？为什么它是分类问题的自然损失函数？",
            "逻辑回归的决策边界是什么形状？如何处理非线性可分数据？",
            "系数 wᵢ 的含义是什么？如何解释逻辑回归的结果？"
        ],
        extensions: [
            "学习 Probit 回归——用正态分布 CDF 替代 Sigmoid 的另一种二分类方法。",
            "探索序数回归（Ordinal Regression）处理有序类别。",
            "研究逻辑回归的贝叶斯版本，获得系数的后验分布。",
            "了解稀疏逻辑回归（L1 正则化）用于高维特征选择。"
        ],
        sourceUrls: [
            "https://scikit-learn.org/stable/modules/linear_model.html#logistic-regression",
            "https://www.youtube.com/watch?v=yIYKR4sgzI8",
            "https://scikit-learn.org/stable/modules/linear_model.html#multinomial-case"
        ]
    },
    "ml-w4-2": {
        lessonId: "ml-w4-2",
        background: [
            "【决策树思想】通过一系列 if-else 规则将空间划分为矩形区域，每个区域预测一个类别（多数表决）或数值（均值）。树的每个节点选择一个特征和阈值进行分裂。",
            "【分裂准则】信息增益（基于熵）：选择使子节点熵减少最多的分裂。基尼不纯度（Gini）：G = 1 - Σpₖ² 更快计算，sklearn 默认使用。两者效果通常相近。",
            "【过拟合控制】不加限制的树会完美拟合训练集（每叶一个样本）。控制方法：max_depth、min_samples_split、min_samples_leaf、max_leaf_nodes。预剪枝（提前停止）比后剪枝更常用。",
            "【随机森林原理】训练多棵树，每棵用 Bootstrap 样本（有放回抽样）和随机特征子集。预测时投票或平均。Bagging 降低方差，特征随机性进一步增加多样性。",
            "【特征重要性】基于特征在树中分裂带来的不纯度减少累计。随机森林的特征重要性更稳定。但相关特征会分摊重要性，导致都不显著。"
        ],
        keyDifficulties: [
            "【特征类型处理】sklearn 决策树只接受数值特征。类别特征需要 One-Hot 编码（多值类别）或 Ordinal 编码（有序）。高基数类别 One-Hot 后树倾向于选择它们。",
            "【不稳定性】决策树对数据微小变化敏感——训练数据略变可能产生完全不同的树。随机森林通过平均化解决。",
            "【外推能力差】决策树只能预测训练数据范围内的值。超出范围的输入会被裁剪到最近的叶节点值。",
            "【计算复杂度】训练复杂度 O(n·m·log(n))（n 样本，m 特征）。特征多时考虑先降维或特征选择。"
        ],
        handsOnPath: [
            "在鸢尾花数据集上训练决策树，用 plot_tree 或 export_graphviz 可视化树结构。",
            "实验不同 max_depth 对训练/测试准确率的影响，找到最佳深度。",
            "训练随机森林，比较与单棵决策树的性能差异。分析 feature_importances_。",
            "使用 OOB（Out-of-Bag）分数评估随机森林，理解 Bootstrap 样本的约 37% 样本未被抽中可作验证。"
        ],
        selfCheck: [
            "决策树如何选择最佳分裂？信息增益和基尼不纯度的公式是什么？",
            "为什么单棵决策树容易过拟合？有哪些控制方法？",
            "随机森林的'随机'体现在哪两个方面？它如何降低方差？",
            "决策树的特征重要性如何计算？有什么局限性？"
        ],
        extensions: [
            "学习 Isolation Forest 用于异常检测——随机森林的变体。",
            "探索 ExtraTrees（Extremely Randomized Trees），比随机森林更随机更快。",
            "研究 CART 算法细节和不同的剪枝策略。",
            "了解 Mondrian Forest 等在线学习树方法。"
        ],
        sourceUrls: [
            "https://scikit-learn.org/stable/modules/tree.html",
            "https://scikit-learn.org/stable/modules/ensemble.html#random-forests",
            "https://www.youtube.com/watch?v=7VeUPuFGJHk"
        ]
    },
    "ml-w4-3": {
        lessonId: "ml-w4-3",
        background: [
            "【Boosting 思想】串行训练一系列弱学习器，每个新学习器重点关注前一个的错误。最终预测是加权组合。与 Bagging 的并行独立训练形成对比。",
            "【GBDT 原理】梯度提升决策树拟合损失函数的负梯度（伪残差）。对于 MSE 损失，负梯度就是残差 y - ŷ。每棵新树拟合当前模型的残差，逐步逼近真实值。",
            "【XGBoost 改进】在 GBDT 基础上：1) 损失函数加入正则化项 2) 使用二阶泰勒展开加速优化 3) 列采样减少过拟合 4) 高效处理稀疏数据和缺失值 5) 并行化特征分裂查找。",
            "【LightGBM 创新】微软的 GBDT 实现：1) Leaf-wise 生长策略（vs Level-wise）更高效 2) GOSS（梯度单边采样）减少样本 3) EFB（互斥特征绑定）减少特征 4) 支持类别特征原生编码。",
            "【CatBoost 特点】Yandex 的实现，专门优化类别特征处理：Ordered Target Encoding 避免目标泄露。对称树结构提高推理速度。默认参数通常就很好。"
        ],
        keyDifficulties: [
            "【调参复杂】GBDT 有很多超参数：n_estimators、learning_rate、max_depth、min_child_weight、subsample、colsample_bytree 等。通常先固定 n_estimators 调其他，最后配合 early_stopping。",
            "【过拟合风险】Boosting 倾向于减少偏差，容易过拟合。关键调参：降低 learning_rate + 增加 n_estimators；限制树深度；使用 subsample 和 colsample。",
            "【类别特征编码】XGBoost 需要预编码类别特征。LightGBM/CatBoost 支持原生类别但需要正确指定。高基数类别特征可能导致过拟合。",
            "【特征交互】GBDT 自动学习特征交互（通过多层分裂），但深度有限。对于需要复杂交互的任务，可能需要手动构造交互特征。"
        ],
        handsOnPath: [
            "用 XGBoost 训练分类模型：xgb.XGBClassifier()，使用 early_stopping_rounds 防止过拟合。",
            "比较 XGBoost、LightGBM、CatBoost 在同一数据集上的训练速度和准确率。",
            "使用 GridSearchCV 或 Optuna 调参，找到最佳超参数组合。",
            "绘制特征重要性图：xgb.plot_importance() 或 SHAP 值解释模型。"
        ],
        selfCheck: [
            "Boosting 和 Bagging 的核心区别是什么？",
            "GBDT 如何用负梯度拟合残差？对于 MSE 损失，负梯度是什么？",
            "XGBoost 相比传统 GBDT 的主要改进有哪些？",
            "LightGBM 的 Leaf-wise 策略与 Level-wise 策略有什么区别？"
        ],
        extensions: [
            "深入学习 XGBoost 论文，理解二阶展开和正则化的数学推导。",
            "探索 NGBoost 用于概率预测——输出分布而非点估计。",
            "研究 SHAP（SHapley Additive exPlanations）用于解释树模型预测。",
            "了解 Histogram-based Gradient Boosting（sklearn.ensemble.HistGradientBoostingClassifier）。"
        ],
        sourceUrls: [
            "https://xgboost.readthedocs.io/en/latest/",
            "https://lightgbm.readthedocs.io/en/latest/",
            "https://explained.ai/gradient-boosting/"
        ]
    },
    "ml-w4-4": {
        lessonId: "ml-w4-4",
        background: [
            "【混淆矩阵】分类结果的 2x2 表格：True Positive (TP)、False Positive (FP)、False Negative (FN)、True Negative (TN)。所有评估指标都基于这四个值计算。",
            "【精确率与召回率】Precision = TP/(TP+FP) 预测为正的准确率；Recall = TP/(TP+FN) 实际为正的检出率。两者通常 trade-off：提高阈值增加精确率但降低召回率。",
            "【F1 分数】精确率和召回率的调和平均 F1 = 2PR/(P+R)。调和平均惩罚极端不平衡（如 P=1, R=0.01 时 F1 很低）。Fβ 可以调整对精确率/召回率的偏好。",
            "【ROC 曲线与 AUC】ROC 曲线绘制不同阈值下的 TPR（召回率）vs FPR（1-特异性）。AUC 是曲线下面积，等于随机正样本排在随机负样本前面的概率。AUC=0.5 是随机猜测。",
            "【PR 曲线】在类别不平衡时，PR 曲线比 ROC 更有意义。当负类远多于正类时，即使 FPR 很低，FP 绝对数也可能很大。PR 曲线直接关注正类预测质量。"
        ],
        keyDifficulties: [
            "【阈值选择】默认阈值 0.5 不一定最优。根据业务需求调整：医疗诊断可能偏好高召回率（不漏诊），垃圾邮件过滤可能偏好高精确率（不误杀）。",
            "【多分类指标】多分类需要考虑 macro（类别平均）、micro（样本平均）、weighted（加权平均）。类别不平衡时 macro 和 weighted 差异大。",
            "【代价敏感学习】不同类型错误的代价可能不同（漏诊癌症 vs 误诊）。可以通过调整阈值、class_weight 或直接优化代价矩阵来处理。",
            "【指标选择依赖业务】没有通用最佳指标。医疗通常重视召回率/敏感度；欺诈检测可能平衡精确率和召回率；推荐系统可能用 NDCG 等排序指标。"
        ],
        handsOnPath: [
            "计算混淆矩阵：sklearn.metrics.confusion_matrix，用 ConfusionMatrixDisplay 可视化。",
            "打印分类报告：classification_report(y_true, y_pred) 一次查看精确率、召回率、F1。",
            "绘制 ROC 曲线和 PR 曲线：使用 RocCurveDisplay 和 PrecisionRecallDisplay。",
            "实验不同阈值：获取预测概率 .predict_proba()，用不同阈值计算指标，找到最优阈值。"
        ],
        selfCheck: [
            "混淆矩阵的四个格子分别代表什么？",
            "精确率和召回率分别衡量什么？为什么它们通常有 trade-off？",
            "AUC=0.8 意味着什么？AUC 有什么优缺点？",
            "什么情况下应该用 PR 曲线而不是 ROC 曲线？"
        ],
        extensions: [
            "学习 Matthews Correlation Coefficient (MCC) 用于不平衡分类。",
            "探索 Log Loss 作为概率预测的评估指标。",
            "研究多标签分类的评估指标（Hamming Loss、Jaccard Index）。",
            "了解 Lift Chart 和 Gain Chart 在营销场景的应用。"
        ],
        sourceUrls: [
            "https://scikit-learn.org/stable/modules/model_evaluation.html#classification-metrics",
            "https://developers.google.com/machine-learning/crash-course/classification/roc-and-auc",
            "https://machinelearningmastery.com/roc-curves-and-precision-recall-curves-for-classification-in-python/"
        ]
    }
}

export const week4Quizzes: Record<string, QuizQuestion[]> = {
    "ml-w4-1": [
        {
            id: "ml-w4-1-q1",
            question: "Sigmoid 函数 σ(z) = 1/(1+e⁻ᶻ) 的输出范围是什么？",
            options: [
                "(-∞, +∞)",
                "(0, 1)",
                "[-1, 1]",
                "[0, +∞)"
            ],
            answer: 1,
            rationale: "Sigmoid 将任意实数映射到 (0,1) 开区间，适合表示概率。z→+∞ 时趋近 1，z→-∞ 时趋近 0，z=0 时等于 0.5。"
        },
        {
            id: "ml-w4-1-q2",
            question: "逻辑回归使用交叉熵损失等价于什么统计方法？",
            options: [
                "最小二乘估计",
                "最大似然估计",
                "贝叶斯估计",
                "矩估计"
            ],
            answer: 1,
            rationale: "交叉熵损失是伯努利分布的负对数似然。最小化交叉熵等价于最大化似然函数，是统计学上有良好性质的方法。"
        },
        {
            id: "ml-w4-1-q3",
            question: "逻辑回归的决策边界 wᵀx = 0 是什么形状？",
            options: [
                "曲线",
                "超平面（线性）",
                "圆形",
                "多边形"
            ],
            answer: 1,
            rationale: "逻辑回归的决策边界是线性的（超平面）。要处理非线性可分数据，需要添加多项式特征或使用核方法。"
        },
        {
            id: "ml-w4-1-q4",
            question: "逻辑回归系数 wᵢ 的解释是什么？",
            options: [
                "特征 xᵢ 增加 1 时，概率增加 wᵢ",
                "特征 xᵢ 增加 1 时，对数几率增加 wᵢ",
                "特征 xᵢ 的方差",
                "特征 xᵢ 的均值"
            ],
            answer: 1,
            rationale: "log(p/(1-p)) = wᵀx，所以 xᵢ 增加 1 单位时，对数几率（log-odds）增加 wᵢ。注意不是概率直接增加 wᵢ。"
        },
        {
            id: "ml-w4-1-q5",
            question: "Softmax 函数的作用是什么？",
            options: [
                "二分类输出概率",
                "将 K 个实数转换为和为 1 的 K 类概率分布",
                "正则化权重",
                "计算梯度"
            ],
            answer: 1,
            rationale: "Softmax pₖ = exp(zₖ)/Σexp(zⱼ) 将任意 K 维向量转换为概率分布（所有元素正且和为 1），用于多分类输出层。"
        },
        {
            id: "ml-w4-1-q6",
            question: "处理类别不平衡时，sklearn LogisticRegression 可以设置什么参数？",
            options: [
                "penalty='l1'",
                "class_weight='balanced'",
                "solver='lbfgs'",
                "max_iter=1000"
            ],
            answer: 1,
            rationale: "class_weight='balanced' 自动根据类别频率调整权重，使少数类获得更高权重，缓解不平衡问题。"
        }
    ],
    "ml-w4-2": [
        {
            id: "ml-w4-2-q1",
            question: "决策树选择分裂特征的基尼不纯度公式是什么？",
            options: [
                "G = Σpₖ²",
                "G = 1 - Σpₖ²",
                "G = -Σpₖ·log(pₖ)",
                "G = Σ|pₖ - 0.5|"
            ],
            answer: 1,
            rationale: "基尼不纯度 G = 1 - Σpₖ² 度量随机样本被错误分类的概率。G=0 表示纯净（只有一类），G 越大越不纯。"
        },
        {
            id: "ml-w4-2-q2",
            question: "随机森林的'随机'体现在哪两个方面？",
            options: [
                "随机初始化权重和随机选择损失函数",
                "Bootstrap 抽样训练数据和随机选择特征子集",
                "随机选择树深度和随机选择学习率",
                "随机划分测试集和随机选择评估指标"
            ],
            answer: 1,
            rationale: "随机森林每棵树用 Bootstrap 样本（有放回抽样约 63% 数据），分裂时只考虑随机特征子集。两个随机性增加树的多样性。"
        },
        {
            id: "ml-w4-2-q3",
            question: "为什么单棵决策树容易过拟合？",
            options: [
                "树的参数太少",
                "不加限制的树会生长到每叶一个样本，完美记忆训练数据",
                "决策树无法处理连续特征",
                "决策树的损失函数不可微"
            ],
            answer: 1,
            rationale: "不加限制时，决策树会一直分裂直到每个叶子只有一个样本，100% 训练准确率但泛化差。需要剪枝或限制深度。"
        },
        {
            id: "ml-w4-2-q4",
            question: "随机森林如何进行预测？",
            options: [
                "只用最后一棵树",
                "所有树投票（分类）或平均（回归）",
                "选择深度最大的树",
                "随机选择一棵树"
            ],
            answer: 1,
            rationale: "随机森林集成多棵树的预测。分类时用多数投票，回归时用所有树预测的平均。集成降低方差提高稳定性。"
        },
        {
            id: "ml-w4-2-q5",
            question: "决策树的特征重要性基于什么计算？",
            options: [
                "特征的方差",
                "特征在分裂中带来的不纯度减少累计",
                "特征与标签的相关系数",
                "特征的缺失率"
            ],
            answer: 1,
            rationale: "特征重要性是该特征在所有节点分裂带来的不纯度减少的加权和。使用频率高且分裂效果好的特征重要性高。"
        },
        {
            id: "ml-w4-2-q6",
            question: "Bootstrap 样本大约包含原数据的多少比例不重复样本？",
            options: [
                "约 37%",
                "约 63%",
                "100%",
                "50%"
            ],
            answer: 1,
            rationale: "有放回抽样 n 次，每个样本被抽中概率 1-(1-1/n)ⁿ ≈ 1-1/e ≈ 63%。约 37% 样本（OOB）未被抽中，可作验证集。"
        }
    ],
    "ml-w4-3": [
        {
            id: "ml-w4-3-q1",
            question: "Boosting 和 Bagging 的核心区别是什么？",
            options: [
                "Boosting 串行训练，每个学习器关注前一个的错误；Bagging 并行独立训练",
                "Boosting 用决策树，Bagging 用线性模型",
                "Boosting 用于回归，Bagging 用于分类",
                "两者没有区别"
            ],
            answer: 0,
            rationale: "Boosting 串行，新模型重点拟合前面的残差/错误，降低偏差。Bagging 并行独立训练多个模型再平均，降低方差。"
        },
        {
            id: "ml-w4-3-q2",
            question: "GBDT 中，对于 MSE 损失函数，每棵新树拟合的是什么？",
            options: [
                "原始标签 y",
                "当前模型的残差 y - ŷ（即负梯度）",
                "标签的对数",
                "随机噪声"
            ],
            answer: 1,
            rationale: "GBDT 拟合损失函数的负梯度。对于 MSE，负梯度就是残差 y - ŷ。每棵树拟合当前模型的错误，逐步改进。"
        },
        {
            id: "ml-w4-3-q3",
            question: "XGBoost 相比传统 GBDT 的改进不包括哪项？",
            options: [
                "损失函数加入正则化项",
                "使用二阶泰勒展开",
                "使用 Dropout",
                "支持列采样"
            ],
            answer: 2,
            rationale: "XGBoost 的改进：正则化、二阶展开、列采样、并行化、稀疏数据处理。Dropout 是神经网络技术，不是 XGBoost 的特性。"
        },
        {
            id: "ml-w4-3-q4",
            question: "LightGBM 的 Leaf-wise 生长策略有什么特点？",
            options: [
                "每层均匀生长所有叶子",
                "优先分裂增益最大的叶子，可能产生不平衡树",
                "只生长左子树",
                "随机选择叶子分裂"
            ],
            answer: 1,
            rationale: "Leaf-wise 每次选择增益最大的叶子分裂，更高效但可能产生深度不均衡的树，容易过拟合小数据。"
        },
        {
            id: "ml-w4-3-q5",
            question: "GBDT 调参时，learning_rate 和 n_estimators 的关系是什么？",
            options: [
                "两者独立，可以任意组合",
                "较小的 learning_rate 通常需要更多的 n_estimators",
                "learning_rate 越大需要越多树",
                "只需要调其中一个"
            ],
            answer: 1,
            rationale: "learning_rate 控制每棵树的贡献。小的学习率收敛更稳定但需要更多树达到同样效果。通常先固定大 n_estimators，用 early_stopping 配合小学习率。"
        },
        {
            id: "ml-w4-3-q6",
            question: "CatBoost 处理类别特征的特点是什么？",
            options: [
                "必须预先 One-Hot 编码",
                "使用 Ordered Target Encoding 避免目标泄露",
                "忽略类别特征",
                "将类别特征转为数值的哈希值"
            ],
            answer: 1,
            rationale: "CatBoost 用 Ordered Target Encoding：根据样本顺序，用之前样本的目标均值编码，避免用当前样本信息导致的泄露。"
        }
    ],
    "ml-w4-4": [
        {
            id: "ml-w4-4-q1",
            question: "精确率（Precision）的计算公式是什么？",
            options: [
                "TP / (TP + FN)",
                "TP / (TP + FP)",
                "TN / (TN + FP)",
                "(TP + TN) / 总数"
            ],
            answer: 1,
            rationale: "Precision = TP/(TP+FP)，即预测为正类的样本中实际为正的比例。衡量正类预测的准确性。"
        },
        {
            id: "ml-w4-4-q2",
            question: "召回率（Recall）衡量的是什么？",
            options: [
                "预测为正类的准确率",
                "实际为正类的样本被正确识别的比例",
                "预测为负类的准确率",
                "所有预测的准确率"
            ],
            answer: 1,
            rationale: "Recall = TP/(TP+FN)，即实际正类中被正确预测的比例。也叫敏感度或真阳性率。衡量对正类的检出能力。"
        },
        {
            id: "ml-w4-4-q3",
            question: "AUC = 0.5 意味着什么？",
            options: [
                "完美分类器",
                "与随机猜测相当，模型无区分能力",
                "非常差的分类器",
                "过拟合"
            ],
            answer: 1,
            rationale: "AUC 是随机正样本得分高于随机负样本的概率。AUC=0.5 意味着模型的排序能力等于抛硬币，无法区分正负类。"
        },
        {
            id: "ml-w4-4-q4",
            question: "什么情况下应该使用 PR 曲线而不是 ROC 曲线？",
            options: [
                "类别均衡时",
                "类别严重不平衡时（负类远多于正类）",
                "多分类问题",
                "回归问题"
            ],
            answer: 1,
            rationale: "类别不平衡时，即使 FPR 很低，FP 的绝对数也可能很大。PR 曲线直接关注正类预测质量，对不平衡更敏感。"
        },
        {
            id: "ml-w4-4-q5",
            question: "F1 分数是精确率和召回率的什么平均？",
            options: [
                "算术平均",
                "几何平均",
                "调和平均",
                "加权平均"
            ],
            answer: 2,
            rationale: "F1 = 2PR/(P+R) 是调和平均。调和平均惩罚极端不平衡，如 P=1, R=0.01 时 F1≈0.02 而非算术平均的 0.505。"
        },
        {
            id: "ml-w4-4-q6",
            question: "多分类指标中，macro 和 micro 的区别是什么？",
            options: [
                "macro 是类别平均，micro 是样本平均（相当于全局计算）",
                "macro 用于二分类，micro 用于多分类",
                "两者相同",
                "macro 计算更快"
            ],
            answer: 0,
            rationale: "macro 对每个类别分别计算指标再平均（类别平等）；micro 将所有样本汇总计算（样本平等）。不平衡时两者差异大。"
        }
    ]
}
