import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week7Guides: Record<string, LessonGuide> = {
    "ml-w7-1": {
        lessonId: "ml-w7-1",
        background: [
            "【卷积的直觉】卷积核（滤波器）在图像上滑动，提取局部模式。不同核检测不同特征：边缘、纹理、角点。深层网络的核自动学习从低级到高级的特征层次。",
            "【参数共享】同一卷积核应用于整张图像，不同位置共享参数。这大大减少参数量（相比全连接），并赋予平移不变性：图像平移后特征图也平移。",
            "【感受野】一个神经元'看到'的输入区域。单层 3x3 卷积感受野是 3x3，堆叠两层是 5x5。深层神经元有更大感受野，能整合更多全局信息。",
            "【池化层】下采样减少空间分辨率。最大池化保留区域内最强响应，平均池化取均值。现代网络倾向于用 stride>1 的卷积替代池化。",
            "【经典架构演进】LeNet(1998) → AlexNet(2012, ReLU+GPU) → VGG(2014, 小核堆叠) → GoogLeNet(2014, Inception) → ResNet(2015, 残差连接) → EfficientNet(2019, 复合缩放)。"
        ],
        keyDifficulties: [
            "【输出尺寸计算】output = (input + 2*padding - kernel) / stride + 1。例如 224 输入，3x3 核，padding=1，stride=2，输出 112。",
            "【通道处理】3 通道输入，64 个 3x3 核，每个核形状是 (3, 3, 3)，输出 64 通道。参数量 = 64 × 3 × 3 × 3 + 64(bias) = 1792。",
            "【1x1 卷积】看似无意义实则用于通道变换。ResNet 的 bottleneck：1x1 降维 → 3x3 卷积 → 1x1 升维，减少计算量。",
            "【深度可分离卷积】MobileNet 使用：先 depthwise（每通道独立卷积）再 pointwise（1x1 混合通道）。计算量是标准卷积的 1/k² + 1/C。"
        ],
        handsOnPath: [
            "用 NumPy 实现 2D 卷积：嵌套循环实现，可视化边缘检测核（Sobel）的效果。",
            "构建简单 CNN：Conv → ReLU → MaxPool → Conv → ReLU → MaxPool → Flatten → FC，在 MNIST 上训练。",
            "可视化卷积核和特征图：提取训练后网络的第一层滤波器和中间层激活，理解网络学到了什么。",
            "计算不同架构的参数量和 FLOPs，理解模型复杂度。"
        ],
        selfCheck: [
            "卷积相比全连接有什么优势？参数共享和局部连接带来什么好处？",
            "如何计算卷积层的输出尺寸？padding 和 stride 如何影响？",
            "什么是感受野？为什么深层网络需要大感受野？",
            "1x1 卷积有什么用途？为什么在现代网络中广泛使用？"
        ],
        extensions: [
            "学习空洞卷积（Dilated Convolution）增大感受野不增加参数。",
            "探索可变形卷积（Deformable Convolution）学习采样位置。",
            "研究注意力机制（SE-Net, CBAM）增强 CNN 特征选择。",
            "了解 Vision Transformer (ViT) 挑战 CNN 主导地位。"
        ],
        sourceUrls: [
            "https://cs231n.github.io/convolutional-networks/",
            "https://pytorch.org/tutorials/beginner/blitz/cifar10_tutorial.html",
            "https://poloclub.github.io/cnn-explainer/"
        ]
    },
    "ml-w7-2": {
        lessonId: "ml-w7-2",
        background: [
            "【迁移学习动机】从头训练深度网络需要大量数据和计算。预训练模型（如 ImageNet）的底层特征（边缘、纹理）是通用的，可以迁移到新任务。",
            "【微调策略】1) 特征提取：冻结预训练层，只训练新分类头 2) 微调：解冻部分/全部层，用小学习率训练。数据少时特征提取更安全，数据多时微调效果更好。",
            "【常用预训练模型】ResNet（残差连接，50/101/152 层）、EfficientNet（复合缩放，高效）、ConvNeXt（现代化 CNN）、ViT（Transformer）。torchvision.models 提供预训练权重。",
            "【残差连接】ResNet 的核心：y = F(x) + x。允许梯度直接流过跳跃连接，解决深层网络退化问题。使 100+ 层网络成为可能。",
            "【Timm 库】PyTorch Image Models，最全面的视觉模型库。800+ 预训练模型、统一接口、最新 SOTA。timm.create_model('resnet50', pretrained=True, num_classes=10)。"
        ],
        keyDifficulties: [
            "【学习率设置】微调时底层用更小学习率（已经学得好），顶层用较大学习率（需要适应新任务）。分层学习率或冻结底层是常用策略。",
            "【数据预处理一致性】使用预训练模型必须使用相同的预处理（归一化均值/标准差、尺寸）。ImageNet 预训练通常需要 normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])。",
            "【过拟合风险】小数据集微调容易过拟合。解决方案：强正则化、数据增强、早停、只微调顶层。",
            "【输入尺寸】预训练模型有推荐输入尺寸（如 224x224），但多数模型支持任意尺寸。过小会丢失信息，过大增加计算量。"
        ],
        handsOnPath: [
            "使用预训练 ResNet 分类自定义数据：替换最后 FC 层，冻结特征层，训练分类头。",
            "完整微调：用小学习率解冻全部层，观察性能提升。",
            "使用 Timm：timm.list_models('*efficientnet*')，加载模型，比较不同架构性能。",
            "可视化 Grad-CAM：哪些图像区域对预测最重要。"
        ],
        selfCheck: [
            "迁移学习的核心假设是什么？什么情况下迁移效果好？",
            "特征提取和微调的区别是什么？各自适用什么场景？",
            "为什么残差连接能让网络训练更深？梯度如何流动？",
            "使用预训练模型时为什么必须匹配预处理方式？"
        ],
        extensions: [
            "学习知识蒸馏（Knowledge Distillation）将大模型压缩。",
            "探索自监督预训练（如 SimCLR、DINO）不依赖标签。",
            "研究域适应（Domain Adaptation）处理训练/测试分布差异。",
            "了解 Few-shot Learning 用极少样本学习新类别。"
        ],
        sourceUrls: [
            "https://pytorch.org/vision/stable/models.html",
            "https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html",
            "https://huggingface.co/docs/timm/index"
        ]
    },
    "ml-w7-3": {
        lessonId: "ml-w7-3",
        background: [
            "【目标检测任务】输入图像，输出边界框 (bounding box) 和类别。比分类复杂：需要定位'在哪里'和识别'是什么'，一张图可能有多个目标。",
            "【两阶段检测器】如 Faster R-CNN：第一阶段生成候选区域（Region Proposal），第二阶段分类和精修边界框。准确但较慢。",
            "【单阶段检测器】如 YOLO、SSD：直接预测边界框和类别，不需要候选区域。更快但早期版本精度略低。YOLOv8 已达到很高精度。",
            "【锚框机制】预定义多种尺寸/比例的锚框。网络预测相对于锚框的偏移量和分类。帮助处理不同大小的目标。",
            "【评估指标】IoU（交并比）衡量预测框与真实框重叠程度。mAP（mean Average Precision）是主要指标，在不同 IoU 阈值和类别上平均。"
        ],
        keyDifficulties: [
            "【多尺度检测】图像中目标大小差异大。FPN（Feature Pyramid Network）融合不同层特征，在多个尺度检测。",
            "【NMS 后处理】同一目标可能多个框，非极大值抑制（NMS）保留最高分框，抑制重叠框。阈值影响召回率和精确率。",
            "【类别不平衡】背景框远多于目标框。Focal Loss 给难分类样本更高权重，减轻不平衡影响。",
            "【标注成本】检测需要边界框标注，比分类标签昂贵。半监督和自监督检测方法正在发展。"
        ],
        handsOnPath: [
            "使用 Ultralytics YOLOv8：pip install ultralytics，一行代码训练自定义数据集。",
            "尝试 Detectron2：Meta 的检测框架，预训练 Faster R-CNN 和 Mask R-CNN。",
            "计算 IoU：手动实现两个矩形框的 IoU 计算。",
            "在 COCO 格式数据上评估 mAP。"
        ],
        selfCheck: [
            "两阶段检测器和单阶段检测器的区别是什么？各有什么优缺点？",
            "什么是 IoU？IoU=0.5 意味着什么？",
            "锚框的作用是什么？为什么需要多种尺寸和比例？",
            "NMS 解决什么问题？它是如何工作的？"
        ],
        extensions: [
            "学习实例分割（Instance Segmentation）如 Mask R-CNN。",
            "探索 Anchor-free 检测器如 FCOS、CenterNet。",
            "研究 3D 目标检测用于自动驾驶。",
            "了解视频目标检测和跟踪。"
        ],
        sourceUrls: [
            "https://docs.ultralytics.com/",
            "https://detectron2.readthedocs.io/en/latest/",
            "https://lilianweng.github.io/posts/2017-12-31-object-recognition-part-3/"
        ]
    },
    "ml-w7-4": {
        lessonId: "ml-w7-4",
        background: [
            "【数据增强动机】增加数据多样性，提高泛化能力。对图像进行随机变换（翻转、旋转、裁剪等），每个 epoch 模型看到不同版本的图像。",
            "【常用增强方法】几何变换（翻转、旋转、缩放、裁剪）、颜色变换（亮度、对比度、饱和度、色调）、遮挡（Cutout、Random Erasing）、混合（Mixup、CutMix）。",
            "【Albumentations 库】高性能图像增强库。支持检测/分割（同步变换图像和标注）。管道组合多种增强，比 torchvision.transforms 更丰富更快。",
            "【AutoAugment】自动搜索最优增强策略。RandAugment 简化版本：随机选择 N 个增强，强度 M。TrivialAugment 更简单：每次一个随机增强随机强度。",
            "【增强注意事项】增强要合理——垂直翻转数字识别无意义。过强增强可能让模型学不到有用信息。验证集不做增强（或只做确定性增强如 resize）。"
        ],
        keyDifficulties: [
            "【训练 vs 测试增强】训练时随机增强，测试时用确定性变换（resize、center crop）或 TTA（Test-Time Augmentation，多个增强版本预测后平均）。",
            "【检测/分割同步变换】边界框和 mask 必须与图像同步变换。翻转图像时边界框坐标要相应调整。Albumentations 自动处理。",
            "【Mixup/CutMix】混合两张图像及其标签。Mixup 像素加权平均，CutMix 裁剪粘贴。标签也按比例混合。有效但增加训练时间。",
            "【过度增强】增强太强可能导致欠拟合。正则化效果强但可能需要更长训练时间。需要实验找到平衡。"
        ],
        handsOnPath: [
            "使用 torchvision.transforms 构建增强管道：RandomHorizontalFlip, RandomRotation, ColorJitter, Normalize。",
            "使用 Albumentations：A.Compose([A.RandomCrop, A.HorizontalFlip, A.RandomBrightnessContrast])。",
            "实现 Mixup：混合两张图像 x = λ*x1 + (1-λ)*x2，标签也混合，训练分类网络。",
            "可视化增强效果：对同一张图像应用不同增强，展示变换结果。"
        ],
        selfCheck: [
            "数据增强如何提高模型泛化能力？",
            "训练时和测试时的数据处理有什么不同？",
            "Mixup 和 CutMix 的区别是什么？标签如何处理？",
            "如何判断增强是否过强或过弱？"
        ],
        extensions: [
            "学习 RandAugment 和 TrivialAugment 的实现。",
            "探索生成式增强（用 GAN/Diffusion 生成新样本）。",
            "研究对抗增强（Adversarial Augmentation）提高鲁棒性。",
            "了解 Copy-Paste 增强用于实例分割。"
        ],
        sourceUrls: [
            "https://albumentations.ai/docs/",
            "https://pytorch.org/vision/stable/transforms.html",
            "https://journalofbigdata.springeropen.com/articles/10.1186/s40537-019-0197-0"
        ]
    }
}

export const week7Quizzes: Record<string, QuizQuestion[]> = {
    "ml-w7-1": [
        {
            id: "ml-w7-1-q1",
            question: "卷积神经网络相比全连接网络的优势是什么？",
            options: [
                "更多参数",
                "参数共享和局部连接，减少参数量，赋予平移不变性",
                "只能处理图像",
                "训练更慢"
            ],
            answer: 1,
            rationale: "卷积核在整张图像共享参数，大幅减少参数量。局部连接专注于相邻像素。平移不变性意味着图像平移后特征也相应平移。"
        },
        {
            id: "ml-w7-1-q2",
            question: "224x224 输入，3x3 卷积核，padding=1，stride=2，输出尺寸是多少？",
            options: [
                "224x224",
                "112x112",
                "222x222",
                "111x111"
            ],
            answer: 1,
            rationale: "output = (224 + 2*1 - 3) / 2 + 1 = 112。padding=1 保持边界，stride=2 使尺寸减半。"
        },
        {
            id: "ml-w7-1-q3",
            question: "什么是感受野？",
            options: [
                "卷积核的大小",
                "一个神经元能'看到'的输入区域大小",
                "池化窗口大小",
                "批量大小"
            ],
            answer: 1,
            rationale: "感受野是输出神经元对应的输入区域。深层神经元通过堆叠卷积积累更大感受野，能看到更多全局上下文。"
        },
        {
            id: "ml-w7-1-q4",
            question: "1x1 卷积的主要用途是什么？",
            options: [
                "检测边缘",
                "改变通道数/特征混合，不改变空间尺寸",
                "增加空间分辨率",
                "添加噪声"
            ],
            answer: 1,
            rationale: "1x1 卷积可以增加或减少通道数（如 ResNet bottleneck 降维），也混合各通道信息。不改变空间尺寸。"
        },
        {
            id: "ml-w7-1-q5",
            question: "ResNet 的残差连接 y = F(x) + x 解决什么问题？",
            options: [
                "过拟合",
                "深层网络的退化问题（训练准确率随深度增加反而下降）",
                "数据不平衡",
                "计算速度"
            ],
            answer: 1,
            rationale: "没有残差连接时，深层网络反而比浅层网络性能差（退化）。残差连接让梯度直接流过，使 100+ 层网络成为可能。"
        },
        {
            id: "ml-w7-1-q6",
            question: "最大池化的作用是什么？",
            options: [
                "增加空间分辨率",
                "下采样减少尺寸，保留区域内最强响应",
                "增加通道数",
                "归一化激活值"
            ],
            answer: 1,
            rationale: "最大池化从每个池化窗口选择最大值，下采样减小特征图尺寸，减少计算量，并提供一定的平移不变性。"
        }
    ],
    "ml-w7-2": [
        {
            id: "ml-w7-2-q1",
            question: "迁移学习中'特征提取'和'微调'的区别是什么？",
            options: [
                "没有区别",
                "特征提取冻结预训练层只训练新层，微调解冻部分/全部层一起训练",
                "特征提取训练全部层，微调只训练新层",
                "特征提取用于分类，微调用于检测"
            ],
            answer: 1,
            rationale: "特征提取把预训练网络当作固定特征提取器，只训练新的分类头。微调解冻预训练层，用较小学习率一起更新。"
        },
        {
            id: "ml-w7-2-q2",
            question: "使用 ImageNet 预训练模型时为什么必须匹配预处理方式？",
            options: [
                "代码风格统一",
                "预训练的权重适配特定的输入分布（如归一化均值/标准差）",
                "运行更快",
                "减少内存使用"
            ],
            answer: 1,
            rationale: "预训练模型是在特定归一化的数据上训练的。不匹配的预处理会导致输入分布偏移，预训练特征失效。"
        },
        {
            id: "ml-w7-2-q3",
            question: "微调时为什么通常对底层使用更小的学习率？",
            options: [
                "底层参数更多",
                "底层特征（边缘、纹理）更通用，已经学得好，只需微调",
                "底层更容易过拟合",
                "底层梯度更大"
            ],
            answer: 1,
            rationale: "底层学习低级通用特征（在不同任务间迁移好），顶层学习任务特定特征。底层用小学习率保持已学特征，顶层用大学习率适应新任务。"
        },
        {
            id: "ml-w7-2-q4",
            question: "Timm 库的主要功能是什么？",
            options: [
                "数据加载",
                "提供 800+ 预训练视觉模型的统一接口",
                "模型部署",
                "标注工具"
            ],
            answer: 1,
            rationale: "Timm（PyTorch Image Models）提供最全面的预训练视觉模型集合，统一接口，支持最新 SOTA 模型如 ConvNeXt、Swin Transformer 等。"
        },
        {
            id: "ml-w7-2-q5",
            question: "小数据集微调如何防止过拟合？",
            options: [
                "使用更复杂的模型",
                "冻结更多层、使用强数据增强、早停",
                "增加学习率",
                "去掉正则化"
            ],
            answer: 1,
            rationale: "小数据集容易过拟合。解决方案：冻结底层（减少可训练参数）、强数据增强（虚拟增加数据量）、早停（防止过度训练）。"
        },
        {
            id: "ml-w7-2-q6",
            question: "残差连接 y = F(x) + x 为什么有助于训练深层网络？",
            options: [
                "减少参数量",
                "让梯度可以直接通过跳跃连接流动，避免消失",
                "增加非线性",
                "加快计算速度"
            ],
            answer: 1,
            rationale: "残差连接提供梯度高速公路。即使 F(x) 的梯度很小，梯度仍可通过 x 直接传递。恒等映射的梯度恒为 1，不会消失。"
        }
    ],
    "ml-w7-3": [
        {
            id: "ml-w7-3-q1",
            question: "两阶段检测器和单阶段检测器的主要区别是什么？",
            options: [
                "两阶段更快",
                "两阶段先生成候选区域再分类，单阶段直接预测框和类别",
                "单阶段更准确",
                "两阶段只能检测一类"
            ],
            answer: 1,
            rationale: "两阶段（如 Faster R-CNN）先用 RPN 生成候选区域，再对每个区域分类和精修。单阶段（如 YOLO）一步到位预测。"
        },
        {
            id: "ml-w7-3-q2",
            question: "IoU = 0.7 意味着什么？",
            options: [
                "预测框和真实框完全重合",
                "预测框和真实框的交集面积是并集面积的 70%",
                "预测准确率 70%",
                "检测到 70% 的目标"
            ],
            answer: 1,
            rationale: "IoU（Intersection over Union）= 交集面积 / 并集面积。IoU=0.7 表示两个框重叠良好，通常认为是有效检测。"
        },
        {
            id: "ml-w7-3-q3",
            question: "NMS（非极大值抑制）解决什么问题？",
            options: [
                "训练速度慢",
                "同一目标产生多个重叠框，NMS 保留最高分框抑制其他",
                "类别不平衡",
                "过拟合"
            ],
            answer: 1,
            rationale: "检测器可能对同一目标输出多个框。NMS 按置信度排序，保留最高分框，抑制与其 IoU 超过阈值的其他框。"
        },
        {
            id: "ml-w7-3-q4",
            question: "锚框（Anchor Box）的作用是什么？",
            options: [
                "增加训练速度",
                "预定义不同尺寸/比例的框，网络预测相对于锚框的偏移",
                "减少内存使用",
                "数据增强"
            ],
            answer: 1,
            rationale: "锚框是预定义的候选框。网络预测每个锚框的类别概率和偏移量。多种尺寸/比例的锚框帮助检测不同大小的目标。"
        },
        {
            id: "ml-w7-3-q5",
            question: "mAP 是什么评估指标？",
            options: [
                "最大准确率",
                "在不同 IoU 阈值和类别上的平均精度",
                "最小平均误差",
                "模型大小"
            ],
            answer: 1,
            rationale: "mAP（mean Average Precision）对每个类别计算 AP（PR 曲线下面积），再对所有类别平均。COCO 还在多个 IoU 阈值（0.5:0.95）上平均。"
        },
        {
            id: "ml-w7-3-q6",
            question: "Focal Loss 解决什么问题？",
            options: [
                "梯度消失",
                "正负样本极度不平衡，给难分类样本更高权重",
                "过拟合",
                "计算速度"
            ],
            answer: 1,
            rationale: "检测中背景框远多于目标框。Focal Loss 降低易分类样本的权重，让模型聚焦于困难样本，缓解类别不平衡。"
        }
    ],
    "ml-w7-4": [
        {
            id: "ml-w7-4-q1",
            question: "数据增强的目的是什么？",
            options: [
                "增加训练时间",
                "增加数据多样性，提高模型泛化能力",
                "减少参数量",
                "加快推理速度"
            ],
            answer: 1,
            rationale: "数据增强对训练图像进行随机变换，相当于扩充数据集，让模型看到更多变化，减少过拟合，提高泛化能力。"
        },
        {
            id: "ml-w7-4-q2",
            question: "测试时是否应该进行数据增强？",
            options: [
                "是，与训练时完全相同的增强",
                "否，只做确定性变换（如 resize）或用 TTA 平均多个增强版本",
                "只做颜色增强",
                "只做几何增强"
            ],
            answer: 1,
            rationale: "测试时通常不做随机增强，只做确定性预处理。TTA（测试时增强）是可选的：对多个增强版本预测后平均，能提升性能。"
        },
        {
            id: "ml-w7-4-q3",
            question: "Mixup 增强如何处理标签？",
            options: [
                "保持原标签不变",
                "标签也按混合比例组合：y = λ*y1 + (1-λ)*y2",
                "随机选择一个标签",
                "使用新标签"
            ],
            answer: 1,
            rationale: "Mixup 混合两张图像 x = λ*x1 + (1-λ)*x2，标签也相应混合 y = λ*y1 + (1-λ)*y2。模型学习对混合图像输出混合概率。"
        },
        {
            id: "ml-w7-4-q4",
            question: "Albumentations 相比 torchvision.transforms 的优势是什么？",
            options: [
                "只支持 PyTorch",
                "更丰富的增强方法，更快的速度，支持检测/分割的标注同步变换",
                "更简单的 API",
                "只支持分类任务"
            ],
            answer: 1,
            rationale: "Albumentations 提供更多增强类型（如天气、模糊、噪声），速度更快，且支持检测框和分割 mask 的同步变换。"
        },
        {
            id: "ml-w7-4-q5",
            question: "CutMix 和 Mixup 的区别是什么？",
            options: [
                "完全相同",
                "Mixup 像素加权平均，CutMix 裁剪一块区域用另一张图填充",
                "CutMix 只用于检测",
                "Mixup 更慢"
            ],
            answer: 1,
            rationale: "Mixup 全图像素级混合。CutMix 从一张图裁剪矩形区域粘贴到另一张，标签按区域面积比例混合。两者都是有效正则化。"
        },
        {
            id: "ml-w7-4-q6",
            question: "什么情况下数据增强可能有害？",
            options: [
                "数据量太少",
                "增强不符合任务（如垂直翻转手写数字）或增强过强导致欠拟合",
                "使用 GPU 训练",
                "批量大小太大"
            ],
            answer: 1,
            rationale: "增强必须保持语义不变。垂直翻转 '6' 变成 '9' 是有害的。增强过强（如极端旋转/遮挡）可能让模型无法学习。"
        }
    ]
}
