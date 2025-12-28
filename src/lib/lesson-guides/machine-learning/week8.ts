import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week8Guides: Record<string, LessonGuide> = {
    "ml-w8-1": {
        lessonId: "ml-w8-1",
        background: [
            "【文本到向量】计算机不能直接处理文本，需要转换为数值表示。从简单的 One-Hot 编码到稠密的词嵌入，表示方法决定了模型能捕捉多少语义信息。",
            "【Tokenization】文本切分为 token 是 NLP 的第一步。英文按空格/标点切分，中文需要分词器。子词 tokenization（BPE、WordPiece）平衡词汇量和未登录词处理。",
            "【Word2Vec 原理】通过预测上下文（Skip-gram）或由上下文预测中心词（CBOW）学习词向量。相似语义的词在向量空间中距离近，还能捕捉语义关系如 king - man + woman ≈ queen。",
            "【GloVe】结合全局统计（共现矩阵）和局部上下文。通过矩阵分解学习词向量，能利用整个语料库的统计信息。预训练向量可直接下载使用。",
            "【嵌入层】神经网络中的 nn.Embedding 是可学习的查找表，将离散 token ID 映射为稠密向量。可以随机初始化从头训练，也可以用预训练词向量初始化。"
        ],
        keyDifficulties: [
            "【OOV 问题】Out-of-Vocabulary：词表以外的词无法表示。解决方案：子词 tokenization（BPE）、字符级模型、FastText（子词向量求和）。",
            "【上下文无关】Word2Vec/GloVe 给每个词一个固定向量，无法区分多义词（如'苹果'水果还是公司）。上下文相关表示需要 ELMo、BERT 等模型。",
            "【嵌入维度选择】维度太小信息不足，太大参数过多易过拟合。常用 100-300 维。对于下游任务，可以用验证集调参。",
            "【预训练向量冻结与否】任务数据少时冻结预训练向量防止过拟合；数据多时微调让向量适应任务；折中方案是先冻结再解冻。"
        ],
        handsOnPath: [
            "使用 Gensim 加载预训练 Word2Vec 模型，探索词向量相似度和类比关系。",
            "实现简单的 Skip-gram：给定中心词预测上下文词，用负采样训练，观察学习到的词向量。",
            "比较不同 tokenizer：word-level、BPE（Hugging Face tokenizers）、SentencePiece，观察词表大小和 OOV 率。",
            "在文本分类任务中比较随机初始化 vs 预训练词向量初始化的效果。"
        ],
        selfCheck: [
            "Word2Vec 的两种训练目标（Skip-gram 和 CBOW）分别是什么？",
            "为什么词向量能捕捉语义关系？向量加减法有什么意义？",
            "什么是子词 tokenization？它如何解决 OOV 问题？",
            "Word2Vec 和 GloVe 的主要区别是什么？"
        ],
        extensions: [
            "学习 FastText——考虑子词信息的词向量，处理拼写错误和未登录词更好。",
            "探索 ELMo——上下文相关的词表示，用双向 LSTM 生成。",
            "研究 Sentence-BERT 获取句子级别的语义向量。",
            "了解对比学习在文本表示中的应用（SimCSE）。"
        ],
        sourceUrls: [
            "https://arxiv.org/abs/1301.3781",
            "https://nlp.stanford.edu/projects/glove/",
            "https://radimrehurek.com/gensim/auto_examples/index.html"
        ]
    },
    "ml-w8-2": {
        lessonId: "ml-w8-2",
        background: [
            "【序列建模挑战】文本是变长序列，词的意义依赖上下文。全连接网络无法处理变长输入和位置信息。RNN 通过隐状态在时间步之间传递信息。",
            "【RNN 基本原理】hₜ = f(Wₕhₜ₋₁ + Wₓxₜ)，当前隐状态由上一隐状态和当前输入共同决定。理论上能记住任意长历史，实际受梯度消失限制。",
            "【LSTM 解决长期依赖】引入细胞状态 C 作为'传送带'，信息可以无损传递。三个门控制信息流动：遗忘门（丢弃）、输入门（写入）、输出门（读出）。",
            "【GRU 简化版】将 LSTM 的 3 个门简化为 2 个（重置门、更新门），参数更少，在许多任务上效果相当。训练更快，适合中小规模数据。",
            "【双向 RNN】前向和后向各一个 RNN，最终表示融合双向信息。适合整句可见的任务（分类、NER），不适合自回归生成。"
        ],
        keyDifficulties: [
            "【梯度消失与爆炸】RNN 反向传播经过多个时间步，梯度连乘可能消失或爆炸。LSTM 的细胞状态和门机制缓解消失问题；梯度裁剪缓解爆炸问题。",
            "【序列长度限制】即使 LSTM，实际有效记忆长度也有限（通常几百 token）。超长序列需要截断、分块或使用 Transformer。",
            "【训练效率】RNN 按时间步顺序计算，无法并行。长序列训练慢。GPU 利用率低于 CNN 和 Transformer。",
            "【隐状态维度选择】太小表达能力不足，太大容易过拟合且计算昂贵。常用 128-512 维，复杂任务用多层 LSTM。"
        ],
        handsOnPath: [
            "实现 vanilla RNN：手动编写 RNN 单元的前向传播，理解隐状态更新过程。",
            "使用 PyTorch nn.LSTM 进行文本分类：嵌入层 → LSTM → 取最后隐状态 → 全连接分类。",
            "可视化 LSTM 门控：在训练好的模型上，绘制遗忘门和输入门的激活值，观察对标点、关键词的响应。",
            "实现 Seq2Seq 机器翻译：编码器 LSTM 压缩源句，解码器 LSTM 生成目标句。"
        ],
        selfCheck: [
            "RNN 的隐状态如何在时间步之间传递信息？",
            "LSTM 的三个门分别控制什么？为什么能缓解梯度消失？",
            "GRU 相比 LSTM 有什么简化？适合什么场景？",
            "为什么 RNN 不能像 CNN 那样并行计算？"
        ],
        extensions: [
            "学习 Attention 机制——让解码器'关注'编码器不同位置的信息。",
            "探索 Transformer-XL 处理超长序列的段级循环机制。",
            "研究 S4/Mamba 等状态空间模型（SSM）作为 RNN 的现代替代。",
            "了解 RWKV 结合 RNN 高效推理和 Transformer 表达能力。"
        ],
        sourceUrls: [
            "https://colah.github.io/posts/2015-08-Understanding-LSTMs/",
            "https://pytorch.org/tutorials/intermediate/char_rnn_classification_tutorial.html",
            "https://pytorch.org/tutorials/intermediate/seq2seq_translation_tutorial.html"
        ]
    },
    "ml-w8-3": {
        lessonId: "ml-w8-3",
        background: [
            "【Transformer 革命】2017 年《Attention Is All You Need》提出纯注意力架构，抛弃 RNN 的序列依赖，实现完全并行计算。成为 NLP 和 CV 的主导架构。",
            "【自注意力机制】每个位置与所有位置计算相关性分数（注意力权重），然后加权求和。Q（查询）、K（键）、V（值）三个线性变换。Attention(Q,K,V) = softmax(QKᵀ/√d)V。",
            "【多头注意力】将 Q、K、V 拆分为多个头，每个头独立计算注意力，最后拼接。不同头捕捉不同类型的依赖关系（如语法、语义、位置）。",
            "【位置编码】自注意力是排列不变的（打乱输入顺序结果相同），需要显式注入位置信息。正弦位置编码或可学习位置嵌入。",
            "【Transformer 结构】编码器：多层（自注意力 + FFN + 残差 + LayerNorm）。解码器增加交叉注意力（attend to encoder）和因果 mask（防止看到未来）。"
        ],
        keyDifficulties: [
            "【计算复杂度】自注意力 O(n²) 复杂度，长序列计算量和内存爆炸。解决方案：Longformer（局部+全局注意力）、Flash Attention（IO 优化）、Linear Attention。",
            "【训练不稳定】Transformer 对初始化、学习率、warmup 敏感。常用 Pre-LN（LayerNorm 在前）比 Post-LN 更稳定。",
            "【注意力可视化理解】注意力权重不等于'解释'。高权重不一定意味着因果关系。作为分析工具有价值，但不要过度解读。",
            "【位置编码外推】绝对位置编码在超出训练长度时失效。相对位置编码（RoPE、ALiBi）能更好泛化到更长序列。"
        ],
        handsOnPath: [
            "手动实现缩放点积注意力：计算 QKᵀ、除以 √d、softmax、乘 V。验证与 PyTorch 内置实现结果一致。",
            "实现单头自注意力层：线性变换生成 Q、K、V，计算注意力输出。",
            "使用 nn.TransformerEncoder 构建文本分类模型：加入位置编码和 CLS token。",
            "可视化注意力权重：用 BertViz 或手动绘制 heatmap，观察不同层和头的关注模式。"
        ],
        selfCheck: [
            "自注意力机制中 Q、K、V 分别代表什么？缩放因子 √d 的作用是什么？",
            "多头注意力相比单头有什么优势？",
            "为什么 Transformer 需要位置编码？正弦编码的特点是什么？",
            "编码器和解码器的主要区别是什么？什么是因果 mask？"
        ],
        extensions: [
            "学习 Sparse Attention 变体（Longformer、BigBird）处理长文档。",
            "探索 Flash Attention 的 IO 感知优化原理。",
            "研究 Vision Transformer (ViT) 将 Transformer 应用于图像。",
            "了解 Mixture of Experts (MoE) 扩展 Transformer 容量。"
        ],
        sourceUrls: [
            "https://arxiv.org/abs/1706.03762",
            "https://jalammar.github.io/illustrated-transformer/",
            "https://nlp.seas.harvard.edu/2018/04/03/attention.html"
        ]
    },
    "ml-w8-4": {
        lessonId: "ml-w8-4",
        background: [
            "【预训练革命】大规模无监督预训练 + 下游任务微调成为 NLP 范式。预训练模型学习通用语言理解能力，微调适应特定任务，大幅降低标注数据需求。",
            "【BERT 原理】Masked Language Model：随机遮挡 15% token 让模型预测。双向编码器，能看到完整上下文。Next Sentence Prediction 学习句子关系（后被发现作用有限）。",
            "【GPT 原理】因果语言模型：只看左边上下文，预测下一个 token。适合生成任务。GPT-2/3/4 规模递增，展现涌现能力（in-context learning、思维链）。",
            "【Hugging Face Transformers】统一接口访问数千个预训练模型。AutoModel 自动选择架构，AutoTokenizer 匹配 tokenizer。from_pretrained 一行加载。",
            "【微调策略】全量微调：更新所有参数，效果最好但资源需求高。冻结部分层：只训练顶层。Adapter/LoRA：插入少量可训练参数，参数高效微调。"
        ],
        keyDifficulties: [
            "【选择合适模型】任务类型决定模型选择：分类/NER 用 BERT 类编码器；生成用 GPT 类解码器；翻译/摘要用 T5/BART 编码器-解码器。",
            "【微调超参数】学习率关键（通常 1e-5 到 5e-5），太大破坏预训练知识，太小收敛慢。epoch 数通常 2-5，过多易过拟合小数据集。",
            "【内存限制】大模型微调需要大量 GPU 内存。解决方案：梯度累积、混合精度（FP16）、梯度检查点、LoRA/QLoRA。",
            "【领域适应】通用预训练模型在特定领域（法律、医疗）可能效果不佳。可以在领域语料上继续预训练（Domain-Adaptive Pre-training）。"
        ],
        handsOnPath: [
            "使用 Hugging Face 加载 BERT 进行文本分类：AutoModelForSequenceClassification + Trainer。",
            "微调 GPT-2 生成特定风格文本：准备对话数据，用 TrainingArguments 配置训练。",
            "使用 LoRA 高效微调：peft 库插入低秩适配器，对比全量微调的参数量和效果。",
            "部署 Pipeline 进行推理：pipeline('sentiment-analysis') 一行代码完成情感分析。"
        ],
        selfCheck: [
            "BERT 和 GPT 的预训练目标有什么不同？各自适合什么任务？",
            "为什么微调大模型的学习率要比从头训练小很多？",
            "什么是 LoRA？它如何实现参数高效微调？",
            "如何选择合适的预训练模型？编码器、解码器、编码器-解码器分别适合什么？"
        ],
        extensions: [
            "学习 Instruction Tuning 使模型遵循指令（InstructGPT、FLAN）。",
            "探索 RLHF（Reinforcement Learning from Human Feedback）对齐人类偏好。",
            "研究 Prompt Engineering 和 In-context Learning 不微调使用大模型。",
            "了解 LLM 推理优化（vLLM、TensorRT-LLM）加速生成。"
        ],
        sourceUrls: [
            "https://huggingface.co/docs/transformers/index",
            "https://arxiv.org/abs/1810.04805",
            "https://huggingface.co/docs/transformers/training"
        ]
    }
}

export const week8Quizzes: Record<string, QuizQuestion[]> = {
    "ml-w8-1": [
        {
            id: "ml-w8-1-q1",
            question: "Word2Vec 的 Skip-gram 模型的训练目标是什么？",
            options: [
                "给定上下文预测中心词",
                "给定中心词预测上下文词",
                "预测下一个句子",
                "最小化词向量的范数"
            ],
            answer: 1,
            rationale: "Skip-gram 模型给定中心词预测周围的上下文词。CBOW 则相反，由上下文预测中心词。"
        },
        {
            id: "ml-w8-1-q2",
            question: "BPE（Byte Pair Encoding）解决什么问题？",
            options: [
                "加速训练",
                "处理未登录词（OOV）和控制词表大小",
                "提高词向量质量",
                "减少内存使用"
            ],
            answer: 1,
            rationale: "BPE 是子词 tokenization 方法，将词拆分为子词单元。即使未见过的词也能由子词组合表示，有效解决 OOV 问题。"
        },
        {
            id: "ml-w8-1-q3",
            question: "Word2Vec 和 GloVe 的主要区别是什么？",
            options: [
                "Word2Vec 使用全局统计，GloVe 使用局部上下文",
                "GloVe 结合全局共现统计，Word2Vec 只使用局部上下文窗口",
                "GloVe 只能处理英文",
                "Word2Vec 向量维度更高"
            ],
            answer: 1,
            rationale: "Word2Vec 通过滑动窗口的局部上下文预测学习。GloVe 基于全局词共现矩阵分解，结合了全局统计信息。"
        },
        {
            id: "ml-w8-1-q4",
            question: "词向量的'类比推理'（如 king - man + woman ≈ queen）说明什么？",
            options: [
                "词向量只是随机数",
                "词向量捕捉了语义和语法关系，这些关系表现为向量空间中的线性结构",
                "词向量只能用于分类",
                "这只是偶然现象"
            ],
            answer: 1,
            rationale: "词向量能进行语义类比说明嵌入空间捕捉了有意义的语言结构，词之间的关系被编码为向量方向。"
        },
        {
            id: "ml-w8-1-q5",
            question: "使用预训练词向量时，何时应该冻结嵌入层？",
            options: [
                "总是冻结",
                "任务数据量小时冻结，防止过拟合预训练向量",
                "任务数据量大时冻结",
                "从不冻结"
            ],
            answer: 1,
            rationale: "数据量小时微调嵌入层容易过拟合，冻结可以保持预训练的泛化能力。数据量大时微调能使向量更适应任务。"
        },
        {
            id: "ml-w8-1-q6",
            question: "Word2Vec/GloVe 词向量的主要局限是什么？",
            options: [
                "向量维度太低",
                "每个词只有一个固定向量，无法区分多义词的不同含义",
                "只能用于英文",
                "训练速度太慢"
            ],
            answer: 1,
            rationale: "静态词向量给每个词一个固定表示，无法根据上下文区分多义词。BERT 等上下文相关模型解决了这个问题。"
        }
    ],
    "ml-w8-2": [
        {
            id: "ml-w8-2-q1",
            question: "RNN 梯度消失的根本原因是什么？",
            options: [
                "学习率太小",
                "反向传播时梯度经过多个时间步连乘，可能指数级衰减",
                "数据预处理不当",
                "隐状态维度太小"
            ],
            answer: 1,
            rationale: "RNN 反向传播通过时间展开，梯度是各时间步偏导的连乘。当偏导小于 1 时，长序列梯度指数衰减趋近 0。"
        },
        {
            id: "ml-w8-2-q2",
            question: "LSTM 如何缓解梯度消失问题？",
            options: [
                "使用更大的隐状态",
                "通过细胞状态提供'传送带'，信息可以无损传递；门控制信息流动",
                "使用更小的学习率",
                "增加网络层数"
            ],
            answer: 1,
            rationale: "LSTM 的细胞状态 C 通过相加操作更新（而非相乘），梯度可以直接流过。三个门控制何时遗忘、写入、输出。"
        },
        {
            id: "ml-w8-2-q3",
            question: "LSTM 的遗忘门（Forget Gate）的作用是什么？",
            options: [
                "决定输出什么信息",
                "决定细胞状态中哪些信息应该被丢弃",
                "决定输入什么新信息",
                "控制学习率"
            ],
            answer: 1,
            rationale: "遗忘门 fₜ = σ(Wf·[hₜ₋₁, xₜ]) 输出 0-1 之间的值，与细胞状态相乘。值接近 0 意味着'忘记'该信息。"
        },
        {
            id: "ml-w8-2-q4",
            question: "GRU 相比 LSTM 有什么特点？",
            options: [
                "更多参数，更强表达能力",
                "将 3 个门简化为 2 个，参数更少，训练更快",
                "只能处理短序列",
                "不支持双向"
            ],
            answer: 1,
            rationale: "GRU 只有重置门和更新门，参数约为 LSTM 的 75%。在很多任务上效果相当但训练更快，是常用的替代选择。"
        },
        {
            id: "ml-w8-2-q5",
            question: "双向 RNN 不适合什么任务？",
            options: [
                "文本分类",
                "命名实体识别",
                "自回归文本生成（每次只能看到前文）",
                "情感分析"
            ],
            answer: 2,
            rationale: "自回归生成需要根据已生成的 token 预测下一个，不能看到未来。双向 RNN 会'作弊'看到整个序列，适合分类不适合生成。"
        },
        {
            id: "ml-w8-2-q6",
            question: "为什么 RNN 不能像 Transformer 那样并行计算？",
            options: [
                "内存限制",
                "每个时间步的隐状态依赖前一时间步，必须顺序计算",
                "框架不支持",
                "GPU 不兼容"
            ],
            answer: 1,
            rationale: "RNN 的递推公式 hₜ = f(hₜ₋₁, xₜ) 意味着必须先计算 hₜ₋₁ 才能计算 hₜ，这种序列依赖阻止了并行化。"
        }
    ],
    "ml-w8-3": [
        {
            id: "ml-w8-3-q1",
            question: "Transformer 自注意力中缩放因子 √d 的作用是什么？",
            options: [
                "加速计算",
                "防止点积值过大导致 softmax 梯度消失",
                "增加模型容量",
                "减少参数量"
            ],
            answer: 1,
            rationale: "当维度 d 较大时，QKᵀ 的方差与 d 成正比，导致 softmax 输入值很大，梯度接近 0。除以 √d 稳定方差。"
        },
        {
            id: "ml-w8-3-q2",
            question: "多头注意力相比单头有什么优势？",
            options: [
                "减少计算量",
                "不同头可以关注不同类型的依赖关系（语法、语义、位置等）",
                "只需要更少的数据",
                "训练更快"
            ],
            answer: 1,
            rationale: "多头注意力将表示空间拆分为多个子空间，每个头独立学习注意力模式。可视化显示不同头确实捕捉不同信息。"
        },
        {
            id: "ml-w8-3-q3",
            question: "为什么 Transformer 需要位置编码？",
            options: [
                "减少参数量",
                "自注意力是排列不变的，需要显式注入位置信息",
                "加速训练",
                "防止过拟合"
            ],
            answer: 1,
            rationale: "自注意力只看 Q、K 相似度，打乱 token 顺序输出不变。位置编码让模型知道每个 token 在序列中的位置。"
        },
        {
            id: "ml-w8-3-q4",
            question: "自注意力的计算复杂度与序列长度的关系是什么？",
            options: [
                "O(n)",
                "O(n log n)",
                "O(n²)",
                "O(n³)"
            ],
            answer: 2,
            rationale: "每个位置要与所有 n 个位置计算相关性，共 n² 对。这是 Transformer 处理长序列的主要瓶颈。"
        },
        {
            id: "ml-w8-3-q5",
            question: "Transformer 解码器的因果 mask 的作用是什么？",
            options: [
                "加速计算",
                "防止当前位置看到未来位置的信息",
                "减少内存使用",
                "增加表达能力"
            ],
            answer: 1,
            rationale: "自回归生成中，位置 i 只能依赖 1 到 i-1 的 token。因果 mask 将未来位置的注意力权重设为 0。"
        },
        {
            id: "ml-w8-3-q6",
            question: "Transformer 中 LayerNorm 和残差连接的作用是什么？",
            options: [
                "减少参数量",
                "稳定训练，缓解梯度消失，允许训练更深的网络",
                "增加表达能力",
                "加速推理"
            ],
            answer: 1,
            rationale: "残差连接让梯度直接流过，缓解深层网络的梯度消失。LayerNorm 稳定激活值分布，使训练更稳定。"
        }
    ],
    "ml-w8-4": [
        {
            id: "ml-w8-4-q1",
            question: "BERT 的预训练目标 Masked Language Model 是什么？",
            options: [
                "预测下一个 token",
                "随机遮挡部分 token，让模型根据上下文预测被遮挡的词",
                "预测下一个句子",
                "最大化序列概率"
            ],
            answer: 1,
            rationale: "MLM 随机遮挡 15% 的 token（用 [MASK] 替换），模型需要根据双向上下文预测原词。这让 BERT 能看到完整上下文。"
        },
        {
            id: "ml-w8-4-q2",
            question: "GPT 和 BERT 预训练目标的主要区别是什么？",
            options: [
                "GPT 使用双向上下文，BERT 使用单向",
                "GPT 是因果语言模型（只看左边），BERT 是遮挡语言模型（看双向）",
                "GPT 参数更少",
                "BERT 只能用于分类"
            ],
            answer: 1,
            rationale: "GPT 预测下一个 token（自回归），适合生成。BERT 预测被遮挡的 token（双向上下文），适合理解任务如分类、NER。"
        },
        {
            id: "ml-w8-4-q3",
            question: "微调大型语言模型时，为什么学习率要设得很小（如 2e-5）？",
            options: [
                "节省计算资源",
                "太大的学习率会破坏预训练学到的知识（灾难性遗忘）",
                "防止 GPU 过热",
                "Hugging Face 的限制"
            ],
            answer: 1,
            rationale: "预训练模型已经学到了丰富的语言知识。过大的学习率会剧烈改变权重，破坏这些知识。小学习率温和调整以适应任务。"
        },
        {
            id: "ml-w8-4-q4",
            question: "LoRA（Low-Rank Adaptation）的核心思想是什么？",
            options: [
                "减少训练数据量",
                "冻结原模型，只训练插入的低秩矩阵，大幅减少可训练参数",
                "使用更小的模型",
                "增加 dropout"
            ],
            answer: 1,
            rationale: "LoRA 假设微调时权重更新是低秩的，用两个小矩阵 A、B 表示更新 ΔW = AB。原参数冻结，只训练 A、B，参数量减少 100 倍以上。"
        },
        {
            id: "ml-w8-4-q5",
            question: "对于文本生成任务，应该选择什么类型的预训练模型？",
            options: [
                "BERT 类编码器模型",
                "GPT 类解码器模型（因果语言模型）",
                "只能用 RNN",
                "任意模型都可以"
            ],
            answer: 1,
            rationale: "生成任务需要自回归预测下一个 token，这正是 GPT 类解码器的预训练目标。BERT 是双向编码器，不能直接用于生成。"
        },
        {
            id: "ml-w8-4-q6",
            question: "Hugging Face Transformers 的 Pipeline 是什么？",
            options: [
                "数据预处理工具",
                "封装好的端到端推理接口，一行代码完成特定 NLP 任务",
                "训练框架",
                "模型压缩工具"
            ],
            answer: 1,
            rationale: "Pipeline 封装了 tokenization、模型推理、后处理的完整流程。如 pipeline('sentiment-analysis')(text) 直接返回情感标签。"
        }
    ]
}
