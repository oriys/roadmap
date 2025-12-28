import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week6Guides: Record<string, LessonGuide> = {
    "ml-w6-1": {
        lessonId: "ml-w6-1",
        background: [
            "【神经元模型】单个神经元：y = f(Σwᵢxᵢ + b)，线性组合后通过激活函数 f。没有激活函数的堆叠神经元仍是线性的，激活函数引入非线性，使网络能拟合任意函数。",
            "【通用近似定理】单隐藏层神经网络（足够宽）可以近似任意连续函数。但深度网络用更少参数达到同样表达能力，且在实践中更容易优化。",
            "【激活函数演进】Sigmoid/Tanh 会饱和导致梯度消失。ReLU = max(0,x) 简单高效，正区间梯度恒为 1。Leaky ReLU、ELU、GELU 解决 ReLU 的'死神经元'问题。",
            "【前向传播】从输入层逐层计算：h = f(W·x + b)。每层输出是下一层输入。矩阵运算表示使得 GPU 批量计算高效。",
            "【网络架构符号】MLP(784, 256, 128, 10) 表示输入 784 维，两个隐藏层（256、128 神经元），输出 10 类。参数量：784×256 + 256 + 256×128 + 128 + 128×10 + 10。"
        ],
        keyDifficulties: [
            "【维度对齐】矩阵乘法要求维度匹配。输入 (batch, in_features)，权重 (in_features, out_features)，输出 (batch, out_features)。PyTorch 的 nn.Linear 自动处理。",
            "【初始化的重要性】全零初始化会导致对称性——所有神经元学到相同东西。Xavier 初始化 W ~ N(0, 2/(n_in+n_out)) 保持各层方差一致。He 初始化适合 ReLU。",
            "【深度 vs 宽度】深度网络层次化学习特征，浅宽网络需要指数级更多神经元达到同样表达力。但深度带来优化困难（梯度消失/爆炸）。",
            "【死神经元问题】ReLU 神经元输出永远为 0（输入始终为负）就'死'了，不再更新。解决方案：Leaky ReLU（负区间小斜率）、参数化 ReLU、ELU。"
        ],
        handsOnPath: [
            "用 NumPy 实现两层 MLP 的前向传播：矩阵乘法 + ReLU + 矩阵乘法 + Softmax。",
            "用 PyTorch nn.Sequential 构建同样结构：nn.Linear, nn.ReLU, nn.Linear, nn.Softmax。",
            "比较不同激活函数（Sigmoid, Tanh, ReLU, LeakyReLU）的导数图形和饱和区域。",
            "可视化隐藏层输出：在 MNIST 上训练后，用 t-SNE 可视化倒数第二层的激活。"
        ],
        selfCheck: [
            "没有激活函数的多层神经网络等价于什么？为什么需要非线性激活？",
            "ReLU 相比 Sigmoid 的优势是什么？ReLU 有什么问题？",
            "什么是通用近似定理？它说明了什么？",
            "Xavier 和 He 初始化分别适合什么激活函数？为什么？"
        ],
        extensions: [
            "学习 Swish (x·σ(x)) 和 GELU 激活函数在 Transformer 中的应用。",
            "探索稀疏激活和 Mixture of Experts 架构。",
            "研究神经网络的 Lottery Ticket Hypothesis。",
            "了解神经网络的信息瓶颈理论。"
        ],
        sourceUrls: [
            "https://pytorch.org/tutorials/beginner/basics/intro.html",
            "https://www.3blue1brown.com/topics/neural-networks",
            "http://neuralnetworksanddeeplearning.com/"
        ]
    },
    "ml-w6-2": {
        lessonId: "ml-w6-2",
        background: [
            "【反向传播本质】高效计算损失对所有参数的梯度。核心是链式法则：∂L/∂w = ∂L/∂y · ∂y/∂w。从输出反向逐层计算，复用中间结果，复杂度与前向传播相同。",
            "【计算图】将计算表示为有向无环图（DAG）。节点是操作（加法、乘法、激活），边是张量流动。反向传播沿边反向传递梯度。PyTorch 动态图、TensorFlow 静态图。",
            "【自动微分】框架自动构建计算图并计算梯度。PyTorch 的 autograd：前向时记录操作，backward() 时自动反向传播。无需手动推导公式。",
            "【优化器家族】SGD：随机梯度下降，基础但需要调学习率。Momentum：累积历史梯度加速。RMSprop：自适应缩放梯度。Adam：结合 Momentum 和 RMSprop，默认首选。",
            "【学习率调度】固定学习率可能太大（震荡）或太小（收敛慢）。策略：StepLR（每 N 步衰减）、CosineAnnealingLR（余弦周期）、OneCycleLR（先升后降）、ReduceLROnPlateau（验证集不改善时衰减）。"
        ],
        keyDifficulties: [
            "【梯度消失/爆炸】深层网络梯度经多次乘法可能趋近 0（消失）或无穷大（爆炸）。解决方案：好的初始化、Batch Normalization、残差连接、梯度裁剪。",
            "【Adam 的超参数】默认 (lr=0.001, betas=(0.9, 0.999), eps=1e-8) 通常不错。但 Adam 在某些问题上可能不如调好的 SGD+Momentum。AdamW 解耦权重衰减，更推荐。",
            "【批量大小影响】大批量训练更稳定、GPU 利用率高，但可能收敛到 sharp minima 泛化差。小批量噪声有正则化效果。通常 32-256 是好的起点。",
            "【梯度裁剪】防止梯度爆炸：torch.nn.utils.clip_grad_norm_ 将梯度范数限制在阈值内。对 RNN/LSTM 训练尤其重要。"
        ],
        handsOnPath: [
            "手动实现反向传播：对简单表达式 z = (x-y)² 计算 ∂z/∂x 和 ∂z/∂y，与 PyTorch autograd 结果对比。",
            "使用 .grad 检查梯度：PyTorch 中对参数调用 .grad 查看梯度值，验证梯度计算正确。",
            "比较不同优化器：在 MNIST 上训练，用 SGD、Momentum、Adam 训练，绘制损失曲线对比收敛速度。",
            "实验学习率调度：使用 CosineAnnealingLR，观察学习率变化和对训练的影响。"
        ],
        selfCheck: [
            "反向传播如何高效计算梯度？为什么复杂度与前向传播相同？",
            "Adam 优化器结合了什么？为什么它是常用默认选择？",
            "梯度消失/爆炸的原因是什么？有哪些解决方案？",
            "批量大小如何影响训练？大批量和小批量各有什么特点？"
        ],
        extensions: [
            "学习 LAMB/LARS 大批量优化器用于分布式训练。",
            "探索 Sharpness-Aware Minimization (SAM) 寻找更平坦的最优解。",
            "研究梯度累积技术在内存受限时模拟大批量。",
            "了解混合精度训练（FP16 + FP32）加速和节省内存。"
        ],
        sourceUrls: [
            "https://pytorch.org/tutorials/beginner/basics/autogradqs_tutorial.html",
            "https://www.ruder.io/optimizing-gradient-descent/",
            "https://arxiv.org/abs/1412.6980"
        ]
    },
    "ml-w6-3": {
        lessonId: "ml-w6-3",
        background: [
            "【Dropout 原理】训练时随机将一部分神经元输出置零（概率 p），推理时不 dropout 但输出缩放。效果类似训练多个子网络的集成，是强有力的正则化。",
            "【Batch Normalization】对每个 mini-batch 的激活值标准化为均值 0、方差 1，然后用可学习参数缩放和偏移。使训练更稳定，允许更大学习率，有轻微正则化效果。",
            "【Layer Normalization】对每个样本（而非批次）的特征标准化。不依赖批量大小，适合 RNN 和 Transformer。",
            "【权重衰减】损失函数加入 λ||w||² 惩罚项，等价于每步更新 w ← (1-λη)w - η∇L。防止权重过大，是 L2 正则化的实现方式。PyTorch 优化器的 weight_decay 参数。",
            "【早停】监控验证集损失，连续多个 epoch 不改善时停止训练。简单有效的正则化，避免过拟合后期的无效计算。"
        ],
        keyDifficulties: [
            "【Dropout 的放置】通常放在全连接层之间，CNN 中用得较少（BN 更有效）。不要放在输出层前。推理时必须关闭 Dropout（model.eval()）。",
            "【BatchNorm vs LayerNorm】BatchNorm 在 CNN 中效果好，但依赖批量统计量，小批量或推理时用训练时的 running mean/var。LayerNorm 不依赖批量，Transformer 标配。",
            "【BN 的 running statistics】训练时更新 running_mean 和 running_var（移动平均）。推理时使用这些统计量。必须正确设置 model.train()/model.eval() 切换模式。",
            "【正则化组合】多种正则化可以叠加，但要避免过度正则化（欠拟合）。典型组合：Dropout + Weight Decay + Early Stopping。"
        ],
        handsOnPath: [
            "在 MLP 中加入 Dropout：比较有无 Dropout 时的训练/验证曲线，观察过拟合程度变化。",
            "使用 BatchNorm：在 CNN 中每个卷积层后加 BatchNorm，对比训练稳定性和收敛速度。",
            "实现早停：用 EarlyStopping callback 或手动监控验证损失，保存最佳模型。",
            "实验不同 dropout 概率（0.1, 0.3, 0.5）对最终性能的影响。"
        ],
        selfCheck: [
            "Dropout 的训练和推理行为有什么不同？为什么需要缩放？",
            "Batch Normalization 的作用是什么？它有哪些好处？",
            "BatchNorm 和 LayerNorm 的区别是什么？分别适合什么场景？",
            "为什么需要早停？如何实现？"
        ],
        extensions: [
            "学习 DropConnect、Spatial Dropout 等 Dropout 变体。",
            "探索 GroupNorm、InstanceNorm 等其他归一化方法。",
            "研究 Mixup、CutMix 等数据增强正则化。",
            "了解 Label Smoothing 的正则化效果。"
        ],
        sourceUrls: [
            "https://jmlr.org/papers/v15/srivastava14a.html",
            "https://arxiv.org/abs/1502.03167",
            "https://pytorch.org/docs/stable/optim.html"
        ]
    },
    "ml-w6-4": {
        lessonId: "ml-w6-4",
        background: [
            "【PyTorch 核心概念】Tensor（张量）、Module（模型）、Optimizer（优化器）、Loss（损失函数）。训练循环：前向传播 → 计算损失 → 反向传播 → 更新参数 → 清零梯度。",
            "【nn.Module 自定义】继承 nn.Module，在 __init__ 中定义层，在 forward 中定义前向计算。PyTorch 自动追踪参数并计算梯度。",
            "【DataLoader】封装数据集的批量加载、打乱、多进程预读取。配合 Dataset 使用。num_workers > 0 启用多进程加速数据准备。",
            "【设备管理】.to(device) 将模型和数据移到 GPU。device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')。确保模型和数据在同一设备。",
            "【PyTorch Lightning】高级封装，分离训练逻辑。自动处理 GPU/分布式、日志、checkpoint。LightningModule 定义 training_step/validation_step，Trainer 处理训练循环。"
        ],
        keyDifficulties: [
            "【梯度清零】optimizer.zero_grad() 必须在每次前向传播前调用，否则梯度会累积。这是 PyTorch 的设计选择（允许梯度累积技巧）。",
            "【train vs eval 模式】model.train() 启用 Dropout 和 BN 训练行为；model.eval() 关闭 Dropout，BN 用 running statistics。验证/测试前必须切换。",
            "【with torch.no_grad()】推理时禁用梯度计算，节省内存和计算。验证循环应使用 with torch.no_grad() 包装。",
            "【常见 bug】忘记 zero_grad（梯度爆炸）、忘记 eval 模式（Dropout 影响）、数据设备不一致（RuntimeError）。"
        ],
        handsOnPath: [
            "实现完整训练循环：加载 MNIST，定义 MLP，训练 10 epoch，打印每个 epoch 的训练/验证准确率。",
            "自定义 nn.Module：实现一个带残差连接的 Block，组合成网络。",
            "使用 DataLoader：设置 batch_size、shuffle、num_workers，观察数据加载速度。",
            "用 PyTorch Lightning 重构训练代码：定义 LightningModule，用 Trainer 训练，对比代码简洁性。"
        ],
        selfCheck: [
            "PyTorch 训练循环的五个步骤是什么？",
            "为什么必须调用 optimizer.zero_grad()？",
            "model.train() 和 model.eval() 分别做什么？何时使用？",
            "PyTorch Lightning 相比原生 PyTorch 的优势是什么？"
        ],
        extensions: [
            "学习 torch.compile（PyTorch 2.0）加速模型。",
            "探索 Hugging Face Accelerate 简化分布式训练。",
            "研究 TorchScript 导出模型用于生产部署。",
            "了解 PyTorch Profiler 分析性能瓶颈。"
        ],
        sourceUrls: [
            "https://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html",
            "https://lightning.ai/docs/pytorch/stable/",
            "https://pytorch.org/tutorials/beginner/introyt/debugging_tutorial.html"
        ]
    }
}

export const week6Quizzes: Record<string, QuizQuestion[]> = {
    "ml-w6-1": [
        {
            id: "ml-w6-1-q1",
            question: "为什么神经网络需要非线性激活函数？",
            options: [
                "加速计算",
                "没有非线性，多层神经网络等价于单层线性变换",
                "减少参数数量",
                "防止过拟合"
            ],
            answer: 1,
            rationale: "线性函数的组合仍是线性的。没有非线性激活，无论多少层，网络只能表示线性函数，失去深度学习的意义。"
        },
        {
            id: "ml-w6-1-q2",
            question: "ReLU 激活函数的定义是什么？",
            options: [
                "1/(1+e⁻ˣ)",
                "tanh(x)",
                "max(0, x)",
                "x²"
            ],
            answer: 2,
            rationale: "ReLU(x) = max(0, x)，正数输出自身，负数输出 0。计算简单，正区间梯度恒为 1 不会饱和。"
        },
        {
            id: "ml-w6-1-q3",
            question: "Xavier 初始化的目的是什么？",
            options: [
                "让所有权重为 0",
                "保持各层激活和梯度的方差一致",
                "让权重尽可能大",
                "减少参数数量"
            ],
            answer: 1,
            rationale: "Xavier 初始化 W ~ N(0, 2/(n_in+n_out)) 使前向传播的激活和反向传播的梯度在各层保持相近的方差，避免消失或爆炸。"
        },
        {
            id: "ml-w6-1-q4",
            question: "什么是'死神经元'问题？",
            options: [
                "神经元权重太大",
                "ReLU 神经元输入始终为负，输出永远为 0，不再更新",
                "神经元激活值太小",
                "神经元之间没有连接"
            ],
            answer: 1,
            rationale: "如果 ReLU 神经元的输入总是负数（如权重更新不当），输出恒为 0，梯度也为 0，该神经元永远不会被更新。"
        },
        {
            id: "ml-w6-1-q5",
            question: "通用近似定理说明了什么？",
            options: [
                "神经网络无法拟合非线性函数",
                "单隐藏层神经网络（足够宽）可以近似任意连续函数",
                "神经网络只能用于分类",
                "深度网络不如浅层网络"
            ],
            answer: 1,
            rationale: "通用近似定理证明了单隐藏层的前馈网络（足够多神经元）可以以任意精度近似任意连续函数。但实践中深度网络更高效。"
        },
        {
            id: "ml-w6-1-q6",
            question: "MLP(784, 256, 10) 表示什么网络结构？",
            options: [
                "输入 784，1 个隐藏层 256 神经元，输出 10",
                "输入 10，2 个隐藏层，输出 784",
                "784 个隐藏层",
                "10 个独立网络"
            ],
            answer: 0,
            rationale: "MLP(784, 256, 10) 表示输入维度 784，一个隐藏层有 256 个神经元，输出层 10 个神经元（如 10 分类）。"
        }
    ],
    "ml-w6-2": [
        {
            id: "ml-w6-2-q1",
            question: "反向传播的核心数学工具是什么？",
            options: [
                "矩阵分解",
                "链式法则",
                "傅里叶变换",
                "积分"
            ],
            answer: 1,
            rationale: "反向传播用链式法则逐层计算梯度：∂L/∂w = ∂L/∂y · ∂y/∂w。从输出层反向传播到输入层，高效复用中间结果。"
        },
        {
            id: "ml-w6-2-q2",
            question: "Adam 优化器结合了哪两种技术？",
            options: [
                "L1 和 L2 正则化",
                "Momentum 和 RMSprop（自适应学习率）",
                "Dropout 和 BatchNorm",
                "SGD 和 Early Stopping"
            ],
            answer: 1,
            rationale: "Adam 使用一阶矩估计（Momentum）加速收敛，二阶矩估计（RMSprop）自适应调整每个参数的学习率。"
        },
        {
            id: "ml-w6-2-q3",
            question: "梯度消失通常发生在什么情况下？",
            options: [
                "学习率太大",
                "深层网络使用饱和激活函数（如 Sigmoid），梯度连乘后趋近 0",
                "批量大小太小",
                "数据没有标准化"
            ],
            answer: 1,
            rationale: "Sigmoid 导数最大 0.25，深层网络中梯度经过多次乘法趋近 0。ReLU、残差连接、BatchNorm 是解决方案。"
        },
        {
            id: "ml-w6-2-q4",
            question: "torch.nn.utils.clip_grad_norm_ 的作用是什么？",
            options: [
                "增加梯度值",
                "将梯度范数限制在阈值内，防止梯度爆炸",
                "清零梯度",
                "计算梯度"
            ],
            answer: 1,
            rationale: "梯度裁剪将梯度向量的范数限制在指定最大值，如果超过则按比例缩放。防止梯度爆炸导致的训练不稳定。"
        },
        {
            id: "ml-w6-2-q5",
            question: "余弦退火（Cosine Annealing）学习率调度的特点是什么？",
            options: [
                "学习率恒定不变",
                "学习率按余弦曲线从初始值平滑衰减到最小值",
                "学习率阶梯式下降",
                "学习率线性增加"
            ],
            answer: 1,
            rationale: "余弦退火让学习率按余弦曲线衰减，开始衰减慢中间快后期慢，平滑过渡，常用于训练后期精细调整。"
        },
        {
            id: "ml-w6-2-q6",
            question: "大批量训练可能有什么问题？",
            options: [
                "训练太慢",
                "可能收敛到 sharp minima，泛化性能差",
                "GPU 利用率低",
                "梯度计算不准确"
            ],
            answer: 1,
            rationale: "大批量梯度更准确但缺乏噪声的正则化效果，倾向于收敛到尖锐的最优解。小批量的噪声有助于找到平坦的解，泛化更好。"
        }
    ],
    "ml-w6-3": [
        {
            id: "ml-w6-3-q1",
            question: "Dropout 在训练和推理时的行为有什么不同？",
            options: [
                "完全相同",
                "训练时随机置零，推理时不 dropout 但缩放输出",
                "训练时不 dropout，推理时随机置零",
                "只在第一层使用"
            ],
            answer: 1,
            rationale: "训练时以概率 p 置零神经元，推理时使用全部神经元但输出乘以 (1-p)（或训练时除以 1-p，推理时不缩放）。"
        },
        {
            id: "ml-w6-3-q2",
            question: "Batch Normalization 的主要好处不包括？",
            options: [
                "使训练更稳定",
                "允许使用更大学习率",
                "减少参数数量",
                "有轻微正则化效果"
            ],
            answer: 2,
            rationale: "BatchNorm 增加参数（γ 和 β），但使训练更稳定、允许更大学习率、有正则化效果、加速收敛。"
        },
        {
            id: "ml-w6-3-q3",
            question: "LayerNorm 和 BatchNorm 的主要区别是什么？",
            options: [
                "LayerNorm 在批次维度归一化，BatchNorm 在特征维度",
                "LayerNorm 对每个样本的特征归一化，BatchNorm 对每个特征在批次内归一化",
                "两者完全相同",
                "LayerNorm 只能用于 CNN"
            ],
            answer: 1,
            rationale: "BatchNorm 对 (batch, feature) 在 batch 维度归一化；LayerNorm 在 feature 维度归一化。LayerNorm 不依赖批量大小，适合 RNN/Transformer。"
        },
        {
            id: "ml-w6-3-q4",
            question: "权重衰减（weight decay）等价于什么正则化？",
            options: [
                "L1 正则化",
                "L2 正则化",
                "Dropout",
                "早停"
            ],
            answer: 1,
            rationale: "权重衰减在每次更新时将权重乘以 (1-λη)，等价于在损失函数中添加 λ||w||² 的 L2 正则化项。"
        },
        {
            id: "ml-w6-3-q5",
            question: "早停（Early Stopping）如何确定何时停止？",
            options: [
                "训练一个固定 epoch 数",
                "监控验证集损失，连续多个 epoch 不改善时停止",
                "当训练损失为 0 时停止",
                "随机选择停止时间"
            ],
            answer: 1,
            rationale: "早停监控验证集指标，如果连续 patience 个 epoch 没有改善，停止训练并恢复到最佳模型。防止过拟合后期的无效训练。"
        },
        {
            id: "ml-w6-3-q6",
            question: "model.train() 和 model.eval() 分别做什么？",
            options: [
                "训练模型和评估模型",
                "设置模型为训练模式（启用 Dropout/BN 训练行为）或评估模式（关闭 Dropout，BN 用 running stats）",
                "加载和保存模型",
                "编译和运行模型"
            ],
            answer: 1,
            rationale: "train() 启用 Dropout 随机置零、BN 更新 running statistics；eval() 关闭 Dropout、BN 使用训练时积累的统计量。"
        }
    ],
    "ml-w6-4": [
        {
            id: "ml-w6-4-q1",
            question: "PyTorch 训练循环中为什么需要 optimizer.zero_grad()？",
            options: [
                "初始化优化器",
                "清零梯度，否则梯度会累积到之前的值上",
                "更新学习率",
                "保存模型"
            ],
            answer: 1,
            rationale: "PyTorch 默认累积梯度（方便梯度累积技巧）。每次新的前向传播前必须清零，否则梯度会累加到之前的值。"
        },
        {
            id: "ml-w6-4-q2",
            question: "验证循环中应该使用什么上下文管理器？",
            options: [
                "with torch.enable_grad()",
                "with torch.no_grad()",
                "with torch.autograd()",
                "不需要特殊处理"
            ],
            answer: 1,
            rationale: "torch.no_grad() 禁用梯度计算，节省内存和计算。验证时不需要梯度，应该包在 with torch.no_grad() 中。"
        },
        {
            id: "ml-w6-4-q3",
            question: "DataLoader 的 num_workers > 0 有什么作用？",
            options: [
                "使用更多 GPU",
                "启用多进程并行加载数据，加速数据准备",
                "增加批量大小",
                "启用数据增强"
            ],
            answer: 1,
            rationale: "num_workers 指定用于数据加载的子进程数。多进程可以在 GPU 计算时预加载下一批数据，减少 I/O 等待。"
        },
        {
            id: "ml-w6-4-q4",
            question: "自定义 nn.Module 需要实现哪个方法？",
            options: [
                "__init__ 和 backward",
                "__init__ 和 forward",
                "只需 forward",
                "只需 __init__"
            ],
            answer: 1,
            rationale: "__init__ 定义层和参数，forward 定义前向计算流程。backward 由 autograd 自动处理，不需要手动实现。"
        },
        {
            id: "ml-w6-4-q5",
            question: "将模型和数据移到 GPU 的方法是什么？",
            options: [
                ".cuda() 或 .to(device)",
                ".gpu()",
                ".transfer()",
                ".move()"
            ],
            answer: 0,
            rationale: "使用 .to(device) 或 .cuda() 将模型和张量移到 GPU。device = torch.device('cuda')。确保模型和数据在同一设备。"
        },
        {
            id: "ml-w6-4-q6",
            question: "PyTorch Lightning 的主要优势是什么？",
            options: [
                "运行更快",
                "分离训练逻辑，自动处理 GPU/分布式/日志/checkpoint",
                "减少参数数量",
                "只能用于图像任务"
            ],
            answer: 1,
            rationale: "Lightning 将训练样板代码封装，用户只需定义 training_step/validation_step。自动处理多 GPU、混合精度、日志、模型保存等。"
        }
    ]
}
