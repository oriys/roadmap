import type { KnowledgeCard, QuizQuestion, RoadmapDefinition, Stage } from "../types"

export const machineLearningStages: Stage[] = [
  {
    id: "ml-foundation",
    title: "阶段一：数学与 Python 基础",
    duration: "第 1-2 周",
    goal: "掌握机器学习必备的数学知识和 Python 数据科学工具栈，为算法学习打下坚实基础。",
    weeks: [
      {
        id: "ml-w1",
        title: "第 1 周：数学基础",
        summary: "理解线性代数、微积分与概率统计在机器学习中的核心作用。",
        keyPoints: [
          "矩阵运算、特征值分解与奇异值分解是降维和优化的数学基础。",
          "梯度和偏导数是理解反向传播和优化算法的关键。",
          "概率分布、贝叶斯定理与统计推断贯穿整个机器学习体系。",
        ],
        lessons: [
          {
            id: "ml-w1-1",
            title: "线性代数核心",
            detail: "掌握向量、矩阵、特征值分解与 SVD 等核心概念及其在 ML 中的应用。",
            resources: [
              { title: "3Blue1Brown 线性代数的本质", url: "https://www.3blue1brown.com/topics/linear-algebra" },
              { title: "Khan Academy 线性代数", url: "https://www.khanacademy.org/math/linear-algebra" },
              { title: "MIT 18.06 线性代数", url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/" },
            ],
          },
          {
            id: "ml-w1-2",
            title: "微积分与优化",
            detail: "理解导数、梯度、链式法则与凸优化的基本概念。",
            resources: [
              { title: "3Blue1Brown 微积分的本质", url: "https://www.3blue1brown.com/topics/calculus" },
              { title: "Khan Academy 多变量微积分", url: "https://www.khanacademy.org/math/multivariable-calculus" },
              { title: "Convex Optimization Book", url: "https://web.stanford.edu/~boyd/cvxbook/" },
            ],
          },
          {
            id: "ml-w1-3",
            title: "概率与统计",
            detail: "掌握概率分布、条件概率、贝叶斯定理与假设检验。",
            resources: [
              { title: "Khan Academy 统计与概率", url: "https://www.khanacademy.org/math/statistics-probability" },
              { title: "Seeing Theory 可视化概率", url: "https://seeing-theory.brown.edu/" },
              { title: "Think Stats 电子书", url: "https://greenteapress.com/thinkstats/" },
            ],
          },
          {
            id: "ml-w1-4",
            title: "信息论基础",
            detail: "理解熵、交叉熵与 KL 散度在损失函数中的应用。",
            resources: [
              { title: "Information Theory Visual Guide", url: "https://colah.github.io/posts/2015-09-Visual-Information/" },
              { title: "Elements of Information Theory", url: "https://onlinelibrary.wiley.com/doi/book/10.1002/047174882X" },
              { title: "Cross-Entropy 解释", url: "https://machinelearningmastery.com/cross-entropy-for-machine-learning/" },
            ],
          },
        ],
      },
      {
        id: "ml-w2",
        title: "第 2 周：Python 数据科学栈",
        summary: "熟练使用 NumPy、Pandas、Matplotlib 进行数据处理与可视化。",
        keyPoints: [
          "NumPy 的向量化操作比原生 Python 循环快数十倍。",
          "Pandas DataFrame 是表格数据清洗与分析的利器。",
          "良好的数据可视化能力对 EDA 和模型解释至关重要。",
        ],
        lessons: [
          {
            id: "ml-w2-1",
            title: "NumPy 高效计算",
            detail: "掌握数组操作、广播机制与线性代数运算。",
            resources: [
              { title: "NumPy 官方文档", url: "https://numpy.org/doc/stable/user/quickstart.html" },
              { title: "NumPy 100 练习", url: "https://github.com/rougier/numpy-100" },
              { title: "From Python to Numpy", url: "https://www.labri.fr/perso/nrougier/from-python-to-numpy/" },
            ],
          },
          {
            id: "ml-w2-2",
            title: "Pandas 数据分析",
            detail: "学习 DataFrame 操作、数据清洗、分组聚合与合并。",
            resources: [
              { title: "Pandas 官方文档", url: "https://pandas.pydata.org/docs/user_guide/index.html" },
              { title: "Pandas 10 分钟入门", url: "https://pandas.pydata.org/docs/user_guide/10min.html" },
              { title: "Kaggle Pandas 教程", url: "https://www.kaggle.com/learn/pandas" },
            ],
          },
          {
            id: "ml-w2-3",
            title: "数据可视化",
            detail: "使用 Matplotlib 和 Seaborn 进行数据探索与结果展示。",
            resources: [
              { title: "Matplotlib 官方教程", url: "https://matplotlib.org/stable/tutorials/index.html" },
              { title: "Seaborn 官方文档", url: "https://seaborn.pydata.org/tutorial.html" },
              { title: "Python Graph Gallery", url: "https://www.python-graph-gallery.com/" },
            ],
          },
          {
            id: "ml-w2-4",
            title: "Jupyter 工作流",
            detail: "建立高效的 Jupyter Notebook 开发与实验记录流程。",
            resources: [
              { title: "Jupyter 官方文档", url: "https://jupyter.org/documentation" },
              { title: "Jupyter Tips & Tricks", url: "https://www.dataquest.io/blog/jupyter-notebook-tips-tricks-shortcuts/" },
              { title: "nbdev 文档", url: "https://nbdev.fast.ai/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "ml-classical",
    title: "阶段二：经典机器学习",
    duration: "第 3-5 周",
    goal: "系统掌握监督学习与无监督学习的核心算法，理解模型评估与调优方法。",
    weeks: [
      {
        id: "ml-w3",
        title: "第 3 周：监督学习 - 回归",
        summary: "从线性回归出发，理解损失函数、正则化与模型评估。",
        keyPoints: [
          "线性回归通过最小化 MSE 学习权重，是理解梯度下降的最佳起点。",
          "L1/L2 正则化防止过拟合，Lasso 还能实现特征选择。",
          "RMSE、MAE、R² 等指标从不同角度评估回归性能。",
        ],
        lessons: [
          {
            id: "ml-w3-1",
            title: "线性回归原理",
            detail: "理解最小二乘法、梯度下降与正规方程。",
            resources: [
              { title: "Scikit-learn 线性模型", url: "https://scikit-learn.org/stable/modules/linear_model.html" },
              { title: "Andrew Ng 机器学习课程", url: "https://www.coursera.org/learn/machine-learning" },
              { title: "StatQuest 线性回归", url: "https://www.youtube.com/watch?v=nk2CQITm_eo" },
            ],
          },
          {
            id: "ml-w3-2",
            title: "正则化技术",
            detail: "掌握 Ridge、Lasso 与 Elastic Net 的原理与选择。",
            resources: [
              { title: "Regularization 详解", url: "https://scikit-learn.org/stable/modules/linear_model.html#ridge-regression-and-classification" },
              { title: "L1 vs L2 正则化", url: "https://towardsdatascience.com/l1-and-l2-regularization-methods-ce25e7fc831c" },
              { title: "Elastic Net", url: "https://scikit-learn.org/stable/modules/linear_model.html#elastic-net" },
            ],
          },
          {
            id: "ml-w3-3",
            title: "多项式与非线性回归",
            detail: "学习特征变换扩展线性模型的表达能力。",
            resources: [
              { title: "Polynomial Features", url: "https://scikit-learn.org/stable/modules/preprocessing.html#generating-polynomial-features" },
              { title: "Bias-Variance Tradeoff", url: "https://www.cs.cornell.edu/courses/cs4780/2018fa/lectures/lecturenote12.html" },
              { title: "Scikit-learn 示例", url: "https://scikit-learn.org/stable/auto_examples/model_selection/plot_underfitting_overfitting.html" },
            ],
          },
          {
            id: "ml-w3-4",
            title: "模型评估与交叉验证",
            detail: "使用交叉验证避免过拟合，正确评估泛化性能。",
            resources: [
              { title: "Cross-validation", url: "https://scikit-learn.org/stable/modules/cross_validation.html" },
              { title: "Metrics for Regression", url: "https://scikit-learn.org/stable/modules/model_evaluation.html#regression-metrics" },
              { title: "Train/Test Split 陷阱", url: "https://machinelearningmastery.com/k-fold-cross-validation/" },
            ],
          },
        ],
      },
      {
        id: "ml-w4",
        title: "第 4 周：监督学习 - 分类",
        summary: "掌握分类算法全貌，从逻辑回归到集成方法。",
        keyPoints: [
          "逻辑回归通过 Sigmoid 输出概率，交叉熵作为损失函数。",
          "决策树易解释但易过拟合，集成方法显著提升性能。",
          "混淆矩阵、ROC-AUC、F1 分数用于评估分类器。",
        ],
        lessons: [
          {
            id: "ml-w4-1",
            title: "逻辑回归",
            detail: "理解 Sigmoid 函数、交叉熵损失与多分类扩展。",
            resources: [
              { title: "Scikit-learn 逻辑回归", url: "https://scikit-learn.org/stable/modules/linear_model.html#logistic-regression" },
              { title: "StatQuest 逻辑回归", url: "https://www.youtube.com/watch?v=yIYKR4sgzI8" },
              { title: "Softmax 回归", url: "https://scikit-learn.org/stable/modules/linear_model.html#multinomial-case" },
            ],
          },
          {
            id: "ml-w4-2",
            title: "决策树与随机森林",
            detail: "学习信息增益、基尼系数与 Bagging 思想。",
            resources: [
              { title: "Decision Trees", url: "https://scikit-learn.org/stable/modules/tree.html" },
              { title: "Random Forest", url: "https://scikit-learn.org/stable/modules/ensemble.html#random-forests" },
              { title: "StatQuest 决策树", url: "https://www.youtube.com/watch?v=7VeUPuFGJHk" },
            ],
          },
          {
            id: "ml-w4-3",
            title: "梯度提升树",
            detail: "掌握 GBDT、XGBoost、LightGBM 的原理与调参。",
            resources: [
              { title: "XGBoost 文档", url: "https://xgboost.readthedocs.io/en/latest/" },
              { title: "LightGBM 文档", url: "https://lightgbm.readthedocs.io/en/latest/" },
              { title: "Gradient Boosting 详解", url: "https://explained.ai/gradient-boosting/" },
            ],
          },
          {
            id: "ml-w4-4",
            title: "分类评估指标",
            detail: "理解混淆矩阵、精确率、召回率、F1 与 ROC-AUC。",
            resources: [
              { title: "Classification Metrics", url: "https://scikit-learn.org/stable/modules/model_evaluation.html#classification-metrics" },
              { title: "ROC Curve 详解", url: "https://developers.google.com/machine-learning/crash-course/classification/roc-and-auc" },
              { title: "Precision-Recall Tradeoff", url: "https://machinelearningmastery.com/roc-curves-and-precision-recall-curves-for-classification-in-python/" },
            ],
          },
        ],
      },
      {
        id: "ml-w5",
        title: "第 5 周：无监督学习与特征工程",
        summary: "探索聚类、降维算法与实用的特征工程技术。",
        keyPoints: [
          "K-Means 简单高效但对初始化敏感，DBSCAN 能发现任意形状簇。",
          "PCA 通过正交变换实现线性降维，t-SNE/UMAP 适合可视化。",
          "特征工程往往比模型选择更能提升性能。",
        ],
        lessons: [
          {
            id: "ml-w5-1",
            title: "聚类算法",
            detail: "掌握 K-Means、层次聚类、DBSCAN 的原理与选择。",
            resources: [
              { title: "Scikit-learn Clustering", url: "https://scikit-learn.org/stable/modules/clustering.html" },
              { title: "K-Means 详解", url: "https://stanford.edu/~cpiech/cs221/handouts/kmeans.html" },
              { title: "DBSCAN 原理", url: "https://www.kdnuggets.com/2020/04/dbscan-clustering-algorithm-machine-learning.html" },
            ],
          },
          {
            id: "ml-w5-2",
            title: "降维技术",
            detail: "理解 PCA、t-SNE、UMAP 的原理与应用场景。",
            resources: [
              { title: "PCA 详解", url: "https://scikit-learn.org/stable/modules/decomposition.html#pca" },
              { title: "t-SNE 论文", url: "https://www.jmlr.org/papers/volume9/vandermaaten08a/vandermaaten08a.pdf" },
              { title: "UMAP 文档", url: "https://umap-learn.readthedocs.io/en/latest/" },
            ],
          },
          {
            id: "ml-w5-3",
            title: "特征工程实践",
            detail: "学习缺失值处理、编码、缩放与特征选择。",
            resources: [
              { title: "Scikit-learn 预处理", url: "https://scikit-learn.org/stable/modules/preprocessing.html" },
              { title: "Feature Engineering 书", url: "https://www.oreilly.com/library/view/feature-engineering-for/9781491953235/" },
              { title: "Kaggle 特征工程", url: "https://www.kaggle.com/learn/feature-engineering" },
            ],
          },
          {
            id: "ml-w5-4",
            title: "Pipeline 与 AutoML",
            detail: "构建可复用的机器学习流水线，了解自动化 ML。",
            resources: [
              { title: "Scikit-learn Pipeline", url: "https://scikit-learn.org/stable/modules/compose.html" },
              { title: "Auto-sklearn", url: "https://automl.github.io/auto-sklearn/master/" },
              { title: "Optuna 超参优化", url: "https://optuna.readthedocs.io/en/stable/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "ml-deep-learning",
    title: "阶段三：深度学习",
    duration: "第 6-8 周",
    goal: "掌握神经网络基础、计算机视觉与自然语言处理的核心技术。",
    weeks: [
      {
        id: "ml-w6",
        title: "第 6 周：神经网络基础",
        summary: "理解神经网络的构建模块与训练原理。",
        keyPoints: [
          "神经网络本质是通过非线性激活函数堆叠的可微分函数。",
          "反向传播通过链式法则高效计算梯度。",
          "Batch Normalization、Dropout 等技术显著改善训练。",
        ],
        lessons: [
          {
            id: "ml-w6-1",
            title: "前馈神经网络",
            detail: "理解感知机、多层网络与激活函数的作用。",
            resources: [
              { title: "PyTorch 官方教程", url: "https://pytorch.org/tutorials/beginner/basics/intro.html" },
              { title: "3Blue1Brown 神经网络", url: "https://www.3blue1brown.com/topics/neural-networks" },
              { title: "Neural Networks and Deep Learning", url: "http://neuralnetworksanddeeplearning.com/" },
            ],
          },
          {
            id: "ml-w6-2",
            title: "反向传播与优化",
            detail: "掌握计算图、自动微分与各种优化器。",
            resources: [
              { title: "PyTorch Autograd", url: "https://pytorch.org/tutorials/beginner/basics/autogradqs_tutorial.html" },
              { title: "Adam 优化器论文", url: "https://arxiv.org/abs/1412.6980" },
              { title: "优化器对比", url: "https://www.ruder.io/optimizing-gradient-descent/" },
            ],
          },
          {
            id: "ml-w6-3",
            title: "正则化与训练技巧",
            detail: "学习 Dropout、Batch Norm、学习率调度等技术。",
            resources: [
              { title: "Dropout 论文", url: "https://jmlr.org/papers/v15/srivastava14a.html" },
              { title: "Batch Normalization 论文", url: "https://arxiv.org/abs/1502.03167" },
              { title: "Learning Rate Scheduling", url: "https://pytorch.org/docs/stable/optim.html#how-to-adjust-learning-rate" },
            ],
          },
          {
            id: "ml-w6-4",
            title: "PyTorch 实战",
            detail: "使用 PyTorch 构建、训练与调试神经网络。",
            resources: [
              { title: "PyTorch 60min Blitz", url: "https://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html" },
              { title: "PyTorch Lightning", url: "https://lightning.ai/docs/pytorch/stable/" },
              { title: "Debugging PyTorch", url: "https://pytorch.org/tutorials/beginner/introyt/debugging_tutorial.html" },
            ],
          },
        ],
      },
      {
        id: "ml-w7",
        title: "第 7 周：计算机视觉",
        summary: "使用卷积神经网络解决图像分类、检测与分割任务。",
        keyPoints: [
          "卷积层通过局部感受野和参数共享高效提取空间特征。",
          "迁移学习利用预训练模型显著降低数据需求。",
          "数据增强是提升泛化能力的有效手段。",
        ],
        lessons: [
          {
            id: "ml-w7-1",
            title: "CNN 基础",
            detail: "理解卷积、池化、感受野与经典架构演进。",
            resources: [
              { title: "CS231n CNN", url: "https://cs231n.github.io/convolutional-networks/" },
              { title: "PyTorch Vision 教程", url: "https://pytorch.org/tutorials/beginner/blitz/cifar10_tutorial.html" },
              { title: "CNN Explainer", url: "https://poloclub.github.io/cnn-explainer/" },
            ],
          },
          {
            id: "ml-w7-2",
            title: "图像分类与迁移学习",
            detail: "使用 ResNet、EfficientNet 进行迁移学习实践。",
            resources: [
              { title: "TorchVision Models", url: "https://pytorch.org/vision/stable/models.html" },
              { title: "Transfer Learning 教程", url: "https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html" },
              { title: "Timm 模型库", url: "https://huggingface.co/docs/timm/index" },
            ],
          },
          {
            id: "ml-w7-3",
            title: "目标检测基础",
            detail: "了解 YOLO、Faster R-CNN 等检测框架的原理。",
            resources: [
              { title: "YOLO 官方", url: "https://docs.ultralytics.com/" },
              { title: "Detectron2", url: "https://detectron2.readthedocs.io/en/latest/" },
              { title: "Object Detection 综述", url: "https://lilianweng.github.io/posts/2017-12-31-object-recognition-part-3/" },
            ],
          },
          {
            id: "ml-w7-4",
            title: "数据增强与实践",
            detail: "使用 Albumentations 进行高效数据增强。",
            resources: [
              { title: "Albumentations 文档", url: "https://albumentations.ai/docs/" },
              { title: "TorchVision Transforms", url: "https://pytorch.org/vision/stable/transforms.html" },
              { title: "数据增强策略", url: "https://journalofbigdata.springeropen.com/articles/10.1186/s40537-019-0197-0" },
            ],
          },
        ],
      },
      {
        id: "ml-w8",
        title: "第 8 周：自然语言处理",
        summary: "从词向量到 Transformer，掌握 NLP 核心技术。",
        keyPoints: [
          "词嵌入将离散词汇映射到连续向量空间，捕捉语义关系。",
          "Transformer 通过自注意力机制实现并行化和长距离依赖建模。",
          "预训练语言模型 (BERT, GPT) 是现代 NLP 的基础。",
        ],
        lessons: [
          {
            id: "ml-w8-1",
            title: "文本表示",
            detail: "理解 Tokenization、Word2Vec、GloVe 等嵌入方法。",
            resources: [
              { title: "Word2Vec 论文", url: "https://arxiv.org/abs/1301.3781" },
              { title: "GloVe", url: "https://nlp.stanford.edu/projects/glove/" },
              { title: "Gensim 教程", url: "https://radimrehurek.com/gensim/auto_examples/index.html" },
            ],
          },
          {
            id: "ml-w8-2",
            title: "RNN 与序列模型",
            detail: "学习 RNN、LSTM、GRU 处理序列数据的原理。",
            resources: [
              { title: "Understanding LSTM", url: "https://colah.github.io/posts/2015-08-Understanding-LSTMs/" },
              { title: "PyTorch RNN 教程", url: "https://pytorch.org/tutorials/intermediate/char_rnn_classification_tutorial.html" },
              { title: "Seq2Seq 模型", url: "https://pytorch.org/tutorials/intermediate/seq2seq_translation_tutorial.html" },
            ],
          },
          {
            id: "ml-w8-3",
            title: "Transformer 架构",
            detail: "深入理解自注意力机制与 Transformer 结构。",
            resources: [
              { title: "Attention Is All You Need", url: "https://arxiv.org/abs/1706.03762" },
              { title: "The Illustrated Transformer", url: "https://jalammar.github.io/illustrated-transformer/" },
              { title: "Annotated Transformer", url: "https://nlp.seas.harvard.edu/2018/04/03/attention.html" },
            ],
          },
          {
            id: "ml-w8-4",
            title: "预训练模型与 Hugging Face",
            detail: "使用 BERT、GPT 等模型进行下游任务微调。",
            resources: [
              { title: "Hugging Face Transformers", url: "https://huggingface.co/docs/transformers/index" },
              { title: "BERT 论文", url: "https://arxiv.org/abs/1810.04805" },
              { title: "Fine-tuning 教程", url: "https://huggingface.co/docs/transformers/training" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "ml-production",
    title: "阶段四：MLOps 与生产实践",
    duration: "第 9-10 周",
    goal: "掌握模型部署、监控与 MLOps 工程化实践，将模型真正落地生产。",
    weeks: [
      {
        id: "ml-w9",
        title: "第 9 周：模型部署与服务化",
        summary: "学习模型导出、API 服务与容器化部署。",
        keyPoints: [
          "ONNX 提供跨框架的模型格式，便于部署与优化。",
          "模型服务需要考虑延迟、吞吐量与资源利用率平衡。",
          "容器化确保开发与生产环境的一致性。",
        ],
        lessons: [
          {
            id: "ml-w9-1",
            title: "模型序列化与优化",
            detail: "掌握 ONNX、TorchScript、模型量化与剪枝。",
            resources: [
              { title: "ONNX 官方", url: "https://onnx.ai/get-started.html" },
              { title: "TorchScript 教程", url: "https://pytorch.org/tutorials/beginner/Intro_to_TorchScript_tutorial.html" },
              { title: "模型量化", url: "https://pytorch.org/docs/stable/quantization.html" },
            ],
          },
          {
            id: "ml-w9-2",
            title: "API 服务开发",
            detail: "使用 FastAPI 构建高性能模型服务接口。",
            resources: [
              { title: "FastAPI 官方文档", url: "https://fastapi.tiangolo.com/" },
              { title: "ML API 最佳实践", url: "https://madewithml.com/courses/mlops/api/" },
              { title: "BentoML", url: "https://docs.bentoml.com/en/latest/" },
            ],
          },
          {
            id: "ml-w9-3",
            title: "容器化与 Kubernetes",
            detail: "使用 Docker 打包模型，Kubernetes 编排部署。",
            resources: [
              { title: "Docker 官方教程", url: "https://docs.docker.com/get-started/" },
              { title: "KServe 文档", url: "https://kserve.github.io/website/" },
              { title: "Seldon Core", url: "https://docs.seldon.io/projects/seldon-core/en/latest/" },
            ],
          },
          {
            id: "ml-w9-4",
            title: "GPU 推理与优化",
            detail: "了解 TensorRT、Triton Server 等推理加速技术。",
            resources: [
              { title: "NVIDIA Triton", url: "https://developer.nvidia.com/nvidia-triton-inference-server" },
              { title: "TensorRT", url: "https://developer.nvidia.com/tensorrt" },
              { title: "vLLM", url: "https://docs.vllm.ai/en/latest/" },
            ],
          },
        ],
      },
      {
        id: "ml-w10",
        title: "第 10 周：MLOps 工程化",
        summary: "建立实验管理、持续训练与模型监控体系。",
        keyPoints: [
          "实验跟踪是可重复研究的基础，记录代码、数据与超参。",
          "持续训练 (CT) 确保模型随数据分布变化自动更新。",
          "模型监控及时发现性能退化与数据漂移。",
        ],
        lessons: [
          {
            id: "ml-w10-1",
            title: "实验管理",
            detail: "使用 MLflow、Weights & Biases 跟踪实验。",
            resources: [
              { title: "MLflow 官方文档", url: "https://mlflow.org/docs/latest/index.html" },
              { title: "Weights & Biases", url: "https://docs.wandb.ai/" },
              { title: "DVC 数据版本控制", url: "https://dvc.org/doc" },
            ],
          },
          {
            id: "ml-w10-2",
            title: "特征存储",
            detail: "了解 Feature Store 在 ML 系统中的作用。",
            resources: [
              { title: "Feast 文档", url: "https://docs.feast.dev/" },
              { title: "Feature Store 概念", url: "https://www.featurestore.org/" },
              { title: "Tecton", url: "https://www.tecton.ai/blog/what-is-a-feature-store/" },
            ],
          },
          {
            id: "ml-w10-3",
            title: "ML Pipeline 编排",
            detail: "使用 Airflow、Kubeflow 构建自动化训练流水线。",
            resources: [
              { title: "Kubeflow Pipelines", url: "https://www.kubeflow.org/docs/components/pipelines/" },
              { title: "Apache Airflow", url: "https://airflow.apache.org/docs/" },
              { title: "Prefect", url: "https://docs.prefect.io/" },
            ],
          },
          {
            id: "ml-w10-4",
            title: "模型监控与告警",
            detail: "监控数据漂移、模型性能与系统健康。",
            resources: [
              { title: "Evidently AI", url: "https://docs.evidentlyai.com/" },
              { title: "Whylogs", url: "https://whylogs.readthedocs.io/en/latest/" },
              { title: "监控最佳实践", url: "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning" },
            ],
          },
        ],
      },
    ],
  },
]

export const machineLearningKnowledgeCards: KnowledgeCard[] = [
  {
    id: "ml-k1",
    title: "偏差-方差权衡",
    summary: "理解模型泛化能力的核心概念。",
    points: [
      "高偏差（欠拟合）：模型过于简单，无法捕捉数据规律。",
      "高方差（过拟合）：模型过于复杂，记住了训练噪声。",
      "通过交叉验证、正则化与集成方法寻找最佳平衡点。",
    ],
    practice: "在同一数据集上训练不同复杂度的模型，绘制学习曲线并分析偏差-方差。",
  },
  {
    id: "ml-k2",
    title: "梯度下降家族",
    summary: "优化算法是训练的发动机。",
    points: [
      "批量梯度下降收敛稳定但计算昂贵。",
      "SGD 引入噪声有助跳出局部最优但需调学习率。",
      "Adam 结合动量和自适应学习率，是默认首选。",
    ],
    practice: "比较 SGD、Momentum、Adam 在相同任务上的收敛速度与最终性能。",
  },
  {
    id: "ml-k3",
    title: "特征工程清单",
    summary: "好特征胜过复杂模型。",
    points: [
      "数值特征：归一化、标准化、分箱、多项式。",
      "类别特征：One-Hot、Target Encoding、Embedding。",
      "缺失值：删除、填充、当作特殊类别。",
    ],
    practice: "在 Kaggle 入门赛中尝试不同特征工程策略，观察分数变化。",
  },
  {
    id: "ml-k4",
    title: "集成学习策略",
    summary: "多模型协作提升性能。",
    points: [
      "Bagging（如 Random Forest）降低方差。",
      "Boosting（如 XGBoost）降低偏差。",
      "Stacking 用元模型组合多个基模型预测。",
    ],
    practice: "用 Random Forest、XGBoost 和 Stacking 解决同一分类问题并对比。",
  },
  {
    id: "ml-k5",
    title: "神经网络调试指南",
    summary: "深度学习调试是系统工程。",
    points: [
      "先在小数据集上过拟合验证模型能力。",
      "逐步增加模型复杂度并观察验证集表现。",
      "使用可视化工具检查梯度、激活与损失曲线。",
    ],
    practice: "故意在模型中引入 bug，练习通过调试技巧定位问题。",
  },
  {
    id: "ml-k6",
    title: "CNN 设计模式",
    summary: "卷积网络的架构演进智慧。",
    points: [
      "残差连接解决深层网络梯度消失问题。",
      "先用预训练模型微调，再考虑从头训练。",
      "注意力机制增强特征选择能力。",
    ],
    practice: "实现一个简单的 ResNet Block 并比较有无残差连接的训练效果。",
  },
  {
    id: "ml-k7",
    title: "Transformer 核心机制",
    summary: "理解自注意力是掌握现代 NLP/CV 的关键。",
    points: [
      "Query-Key-Value 机制实现动态权重分配。",
      "多头注意力从不同子空间捕获信息。",
      "位置编码弥补并行处理丢失的序列信息。",
    ],
    practice: "手动实现一个单头自注意力层并可视化注意力权重。",
  },
  {
    id: "ml-k8",
    title: "模型评估陷阱",
    summary: "避免常见的评估错误。",
    points: [
      "数据泄露：测试集信息泄露到训练流程。",
      "类别不平衡：准确率可能误导，关注 F1 或 AUC。",
      "时间序列：必须按时间顺序划分避免未来泄露。",
    ],
    practice: "检查一个现有项目的评估流程，识别潜在的数据泄露风险。",
  },
  {
    id: "ml-k9",
    title: "超参搜索策略",
    summary: "科学调参而非盲目尝试。",
    points: [
      "网格搜索适合小参数空间，随机搜索更高效。",
      "贝叶斯优化智能选择下一组参数。",
      "学习率是最重要的超参，优先调试。",
    ],
    practice: "用 Optuna 对一个模型进行超参搜索，理解其采样策略。",
  },
  {
    id: "ml-k10",
    title: "MLOps 成熟度模型",
    summary: "从实验到生产的演进路径。",
    points: [
      "Level 0：手动训练和部署，无自动化。",
      "Level 1：自动化训练流水线，手动部署。",
      "Level 2：持续训练、自动部署与监控。",
    ],
    practice: "评估团队当前 MLOps 成熟度，制定改进计划。",
  },
]

export const machineLearningExamQuestions: QuizQuestion[] = [
  {
    id: "ml-q1",
    question: "线性回归中，L2 正则化（Ridge）的主要作用是？",
    options: [
      "完全消除某些特征的权重",
      "通过惩罚大权重降低过拟合风险",
      "加速梯度下降收敛",
      "增加模型的偏差",
    ],
    answer: 1,
    rationale: "L2 正则化通过在损失函数中添加权重平方和惩罚项，迫使权重变小但不会为零，从而降低模型复杂度和过拟合风险。",
  },
  {
    id: "ml-q2",
    question: "在使用 K-Fold 交叉验证时，K 值过大（如等于样本数）会导致什么问题？",
    options: [
      "每个验证集只有一个样本，方差极高",
      "训练时间大幅缩短",
      "无法检测过拟合",
      "模型偏差增加",
    ],
    answer: 0,
    rationale: "当 K 等于样本数时（Leave-One-Out），每次验证只用一个样本，估计方差很高，且计算成本极大。",
  },
  {
    id: "ml-q3",
    question: "决策树中，信息增益的计算基于什么概念？",
    options: [
      "均方误差",
      "熵（Entropy）",
      "方差",
      "余弦相似度",
    ],
    answer: 1,
    rationale: "信息增益衡量的是分裂前后熵的减少量，熵越高表示不确定性越大。",
  },
  {
    id: "ml-q4",
    question: "随机森林相比单棵决策树的优势主要来自？",
    options: [
      "使用更深的树",
      "Bagging 降低方差 + 特征随机性增加多样性",
      "使用 Boosting 策略",
      "剪枝更激进",
    ],
    answer: 1,
    rationale: "随机森林通过 Bootstrap 采样和随机选择特征子集，训练多棵差异化的树，平均后显著降低方差。",
  },
  {
    id: "ml-q5",
    question: "XGBoost 相比传统 GBDT 的关键改进包括？",
    options: [
      "使用随机采样替代 Boosting",
      "正则化、列采样与二阶梯度优化",
      "完全去除决策树",
      "只支持回归任务",
    ],
    answer: 1,
    rationale: "XGBoost 在损失函数中加入正则化项，使用二阶泰勒展开加速优化，并引入列采样防止过拟合。",
  },
  {
    id: "ml-q6",
    question: "ROC 曲线下面积 (AUC) 等于 0.5 意味着什么？",
    options: [
      "模型完美预测",
      "模型性能与随机猜测相当",
      "模型严重过拟合",
      "模型有数据泄露",
    ],
    answer: 1,
    rationale: "AUC=0.5 表示模型的排序能力等于随机抛硬币，无区分正负样本的能力。",
  },
  {
    id: "ml-q7",
    question: "在类别不平衡问题中，以下哪种方法不适合？",
    options: [
      "使用 SMOTE 过采样",
      "调整分类阈值",
      "只关注准确率指标",
      "使用 class_weight 参数",
    ],
    answer: 2,
    rationale: "当类别严重不平衡时，多数类占主导，准确率可能很高但完全没有预测少数类的能力。",
  },
  {
    id: "ml-q8",
    question: "K-Means 聚类算法的主要局限是？",
    options: [
      "只能处理二维数据",
      "需要预先指定簇数 K，对异常值敏感",
      "无法并行化",
      "只支持类别特征",
    ],
    answer: 1,
    rationale: "K-Means 需要预设簇数，使用均值作为中心点使其对异常值敏感，且只能发现球形簇。",
  },
  {
    id: "ml-q9",
    question: "PCA 降维的基本原理是？",
    options: [
      "选择方差最大的方向作为新坐标轴",
      "随机投影到低维空间",
      "根据类别标签选择特征",
      "使用神经网络学习表示",
    ],
    answer: 0,
    rationale: "PCA 寻找方差最大的正交方向（主成分），将数据投影到这些方向上实现降维同时保留最多信息。",
  },
  {
    id: "ml-q10",
    question: "神经网络中，ReLU 激活函数相比 Sigmoid 的优势是？",
    options: [
      "输出范围在 0-1 之间",
      "计算简单，缓解梯度消失问题",
      "对负数输入有更好的响应",
      "是严格单调递减的",
    ],
    answer: 1,
    rationale: "ReLU(x)=max(0,x) 计算极快，且正区间梯度恒为 1 不会饱和，有效缓解深层网络的梯度消失问题。",
  },
  {
    id: "ml-q11",
    question: "Batch Normalization 的主要作用是？",
    options: [
      "增加模型参数量",
      "使每层输入分布稳定，加速训练收敛",
      "替代 Dropout 正则化",
      "减少数据增强需求",
    ],
    answer: 1,
    rationale: "BN 对每层输入进行归一化，减少内部协变量偏移，使训练更稳定，允许使用更大学习率。",
  },
  {
    id: "ml-q12",
    question: "卷积神经网络中，池化层的作用是？",
    options: [
      "增加参数量",
      "降低空间维度，提供平移不变性",
      "增加感受野但不改变维度",
      "学习可训练的权重",
    ],
    answer: 1,
    rationale: "池化通过下采样减少特征图尺寸和参数量，同时提供一定的空间不变性。",
  },
  {
    id: "ml-q13",
    question: "ResNet 引入残差连接解决的问题是？",
    options: [
      "过拟合",
      "深层网络的退化问题（训练准确率下降）",
      "数据不平衡",
      "计算效率",
    ],
    answer: 1,
    rationale: "残差连接让网络学习残差 F(x)=H(x)-x 而非直接学习 H(x)，使深层网络更容易优化，解决退化问题。",
  },
  {
    id: "ml-q14",
    question: "迁移学习中，微调（Fine-tuning）通常需要？",
    options: [
      "冻结所有层",
      "使用较小学习率，逐步解冻层",
      "从头训练所有权重",
      "只训练最后一层的偏置项",
    ],
    answer: 1,
    rationale: "微调时先冻结底层（保留通用特征），用小学习率训练顶层，然后逐步解冻更多层进行精调。",
  },
  {
    id: "ml-q15",
    question: "Word2Vec 中，Skip-gram 模型的训练目标是？",
    options: [
      "用上下文预测中心词",
      "用中心词预测周围上下文词",
      "最小化句子困惑度",
      "学习词的 TF-IDF 权重",
    ],
    answer: 1,
    rationale: "Skip-gram 给定中心词预测其上下文，与 CBOW（上下文预测中心词）相反。",
  },
  {
    id: "ml-q16",
    question: "LSTM 相比普通 RNN 的关键改进是？",
    options: [
      "更少的参数",
      "引入门控机制解决长程依赖问题",
      "只能处理固定长度序列",
      "去除了循环结构",
    ],
    answer: 1,
    rationale: "LSTM 通过遗忘门、输入门、输出门控制信息流，使梯度更容易在长序列中传播。",
  },
  {
    id: "ml-q17",
    question: "Transformer 中自注意力机制的时间复杂度是？",
    options: [
      "O(n)",
      "O(n²)",
      "O(n log n)",
      "O(1)",
    ],
    answer: 1,
    rationale: "自注意力需要计算序列中每对位置的注意力分数，因此复杂度是 O(n²)，其中 n 是序列长度。",
  },
  {
    id: "ml-q18",
    question: "BERT 使用的预训练任务包括？",
    options: [
      "语言模型和命名实体识别",
      "掩码语言模型（MLM）和下一句预测（NSP）",
      "机器翻译和摘要生成",
      "情感分析和问答",
    ],
    answer: 1,
    rationale: "BERT 使用 MLM（随机遮蔽词预测）和 NSP（判断两句是否连续）进行双向预训练。",
  },
  {
    id: "ml-q19",
    question: "将 PyTorch 模型导出为 ONNX 格式的主要目的是？",
    options: [
      "减少模型参数量",
      "实现跨框架部署和推理优化",
      "增加训练速度",
      "支持分布式训练",
    ],
    answer: 1,
    rationale: "ONNX 是开放的模型格式，可在不同框架（PyTorch、TensorFlow 等）和推理引擎间迁移。",
  },
  {
    id: "ml-q20",
    question: "模型量化的主要目的是？",
    options: [
      "提高模型精度",
      "减少模型大小和推理延迟",
      "增加训练稳定性",
      "支持更多数据类型",
    ],
    answer: 1,
    rationale: "量化将浮点权重转换为低精度表示（如 INT8），显著减少模型体积和推理延迟，适合边缘部署。",
  },
  {
    id: "ml-q21",
    question: "MLflow 的核心功能包括？",
    options: [
      "仅支持 PyTorch 模型",
      "实验跟踪、模型注册与部署",
      "只能本地运行",
      "替代所有云平台服务",
    ],
    answer: 1,
    rationale: "MLflow 提供实验跟踪（Tracking）、项目打包（Projects）、模型注册（Registry）和部署能力。",
  },
  {
    id: "ml-q22",
    question: "Feature Store 在 ML 系统中的作用是？",
    options: [
      "存储原始日志",
      "统一管理和服务特征，避免训练-推理偏差",
      "替代数据库",
      "仅用于离线训练",
    ],
    answer: 1,
    rationale: "Feature Store 确保训练和推理使用相同的特征计算逻辑，避免训练-服务偏差（Training-Serving Skew）。",
  },
  {
    id: "ml-q23",
    question: "数据漂移（Data Drift）指的是？",
    options: [
      "模型权重随时间变化",
      "输入数据分布与训练时发生变化",
      "标签错误率增加",
      "特征工程策略改变",
    ],
    answer: 1,
    rationale: "数据漂移指生产环境输入数据的分布相对于训练数据发生变化，可能导致模型性能下降。",
  },
  {
    id: "ml-q24",
    question: "Kubeflow Pipelines 的主要用途是？",
    options: [
      "数据库管理",
      "编排和自动化 ML 工作流",
      "前端开发",
      "网络配置",
    ],
    answer: 1,
    rationale: "Kubeflow Pipelines 用于定义、部署和管理可复用的机器学习工作流，支持 Kubernetes 环境。",
  },
  {
    id: "ml-q25",
    question: "Adam 优化器结合了哪两种技术？",
    options: [
      "Dropout 和 Batch Norm",
      "动量（Momentum）和自适应学习率（RMSprop）",
      "L1 和 L2 正则化",
      "早停和学习率衰减",
    ],
    answer: 1,
    rationale: "Adam 结合了动量的一阶矩估计和 RMSprop 的二阶矩估计，实现自适应学习率。",
  },
]

export const machineLearningRoadmap: RoadmapDefinition = {
  id: "machine-learning",
  label: "机器学习",
  title: "机器学习工程师成长路线",
  durationLabel: "10 周完整学习路线",
  description: "从数学基础到深度学习，再到 MLOps 生产实践的系统化学习路线，帮助你成为能够端到端交付 ML 系统的工程师。",
  heroBadge: "10 周 · 40 主题",
  stages: machineLearningStages,
  knowledgeCards: machineLearningKnowledgeCards,
  examQuestions: machineLearningExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "从数学基础开始，线性代数和概率统计是理解 ML 算法的根基。"
    if (percent < 30) return "掌握 Python 数据科学栈后，开始实践经典机器学习算法。"
    if (percent < 50) return "深入理解模型评估与调优，参加 Kaggle 练习实战能力。"
    if (percent < 70) return "进入深度学习阶段，动手实现神经网络加深理解。"
    if (percent < 90) return "开始关注 MLOps，将模型部署能力纳入技能栈。"
    return "恭喜完成路线！建议选择一个领域深耕（CV/NLP/推荐），或挑战 Kaggle 竞赛！"
  },
  resourceGuide: {
    environment: "安装 Python 3.10+、Jupyter、PyTorch、Scikit-learn。推荐使用 conda 或 venv 管理环境。有 GPU 则配置 CUDA。",
    fallbackKeyPoints: [
      "先理解数学直觉再看公式推导，3Blue1Brown 系列是最佳起点。",
      "每学一个算法就动手实现一遍，不要只调包。",
      "保持实验笔记习惯，记录超参、结果与观察。",
    ],
    handsOnSteps: [
      "在 Kaggle Titanic 比赛上完成端到端流程。",
      "从零实现线性回归和逻辑回归。",
      "使用 PyTorch 训练 MNIST 分类器。",
      "部署一个模型到 FastAPI + Docker。",
    ],
    selfChecks: [
      "能否解释偏差-方差权衡与正则化的关系？",
      "能否画出梯度下降的更新过程？",
      "能否说明 Transformer 自注意力的计算流程？",
      "能否区分数据漂移和概念漂移？",
    ],
    extensions: [
      "深入强化学习或生成模型（GAN、Diffusion）。",
      "学习分布式训练（DeepSpeed、FSDP）。",
      "探索 MLOps 平台（Vertex AI、SageMaker）。",
      "关注前沿：多模态模型、LLM 微调技术。",
    ],
    lessonQuizAdvice: "注重理解算法的适用场景与局限性，不要死记公式。评估指标要结合业务目标选择。",
  },
}
