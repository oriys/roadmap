import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week9Guides: Record<string, LessonGuide> = {
    "ml-w9-1": {
        lessonId: "ml-w9-1",
        background: [
            "【模型导出的必要性】训练好的模型需要导出为可部署格式。PyTorch 模型包含 Python 代码依赖，不能直接在生产环境运行。序列化消除 Python 依赖，支持跨语言部署。",
            "【TorchScript】PyTorch 的模型序列化格式。两种导出方式：Tracing（运行模型记录操作）和 Scripting（分析 Python 代码生成 IR）。生成的模型可在 C++ 环境运行，无需 Python。",
            "【ONNX 标准】Open Neural Network Exchange，跨框架的模型格式。PyTorch → ONNX → TensorRT/OpenVINO/CoreML。提供统一的算子定义，促进模型互操作性。",
            "【模型量化】将 FP32 权重和激活转为 INT8，模型大小减少 4 倍，推理加速 2-4 倍。三种方式：动态量化（推理时量化激活）、静态量化（需要校准数据）、量化感知训练（QAT）。",
            "【模型剪枝】移除不重要的权重或神经元，减少模型大小和计算量。非结构化剪枝（个别权重置零）稀疏度高但加速有限；结构化剪枝（移除整个通道）更容易加速。"
        ],
        keyDifficulties: [
            "【动态控制流】Tracing 无法处理 if/for 依赖输入的动态控制流，结果可能不正确。需要用 Scripting 或重构代码避免动态控制流。",
            "【ONNX 算子支持】不是所有 PyTorch 操作都有 ONNX 对应算子。自定义操作需要实现 ONNX 符号函数，或用支持的操作组合替代。",
            "【量化精度损失】INT8 表示范围有限，极端值被截断。敏感层可能精度下降显著。解决方案：混合精度量化（敏感层保持 FP32）、QAT 恢复精度。",
            "【校准数据选择】静态量化需要代表性数据确定量化范围。校准数据分布与实际数据差异大时，量化效果差。"
        ],
        handsOnPath: [
            "TorchScript 导出：torch.jit.trace 导出模型，torch.jit.save 保存，在 C++ libtorch 中加载运行。",
            "ONNX 导出：torch.onnx.export 导出，onnxruntime 加载推理，对比原模型精度。",
            "动态量化：torch.quantization.quantize_dynamic 量化 LSTM/Linear，对比模型大小和推理速度。",
            "使用 torch.compile（PyTorch 2.0）：一行代码加速模型，对比编译前后推理时间。"
        ],
        selfCheck: [
            "TorchScript 的 Tracing 和 Scripting 有什么区别？各自适合什么情况？",
            "ONNX 是什么？为什么需要跨框架的模型格式？",
            "量化的三种方式（动态、静态、QAT）分别是什么？各有什么特点？",
            "模型剪枝如何减少计算量？结构化和非结构化剪枝的区别是什么？"
        ],
        extensions: [
            "学习 PyTorch 2.0 的 torch.compile 和 TorchDynamo 编译优化。",
            "探索 OpenVINO 在 Intel CPU 上的推理优化。",
            "研究知识蒸馏（Knowledge Distillation）将大模型压缩为小模型。",
            "了解稀疏训练和 N:M 稀疏模式在现代 GPU 上的加速。"
        ],
        sourceUrls: [
            "https://onnx.ai/get-started.html",
            "https://pytorch.org/tutorials/beginner/Intro_to_TorchScript_tutorial.html",
            "https://pytorch.org/docs/stable/quantization.html"
        ]
    },
    "ml-w9-2": {
        lessonId: "ml-w9-2",
        background: [
            "【模型服务化】将模型封装为 API 接口，供其他应用调用。RESTful API 是最通用的方式，接收 JSON 请求返回 JSON 响应。gRPC 适合高性能内部服务通信。",
            "【FastAPI 框架】现代 Python Web 框架，性能接近 Go/NodeJS，自动生成 OpenAPI 文档。类型提示 + Pydantic 验证请求数据。async/await 支持高并发。",
            "【请求处理流程】接收请求 → 数据验证 → 预处理（tokenize、resize）→ 模型推理 → 后处理 → 返回响应。每个步骤都可能成为瓶颈。",
            "【批处理优化】收集多个请求合并为一个 batch 推理，提高 GPU 利用率。需要平衡吞吐量和延迟。动态批处理根据请求量自动调整。",
            "【服务框架对比】BentoML：打包模型和依赖为可部署 artifact。TorchServe：PyTorch 官方服务框架。Triton：高性能多框架推理服务器。"
        ],
        keyDifficulties: [
            "【模型加载时机】每个请求都加载模型太慢。应用启动时加载到内存/GPU，请求时直接推理。多 worker 时注意 GPU 内存共享问题。",
            "【GIL 限制】Python GIL 限制 CPU 并发。解决方案：多 worker（Gunicorn/Uvicorn workers）、异步 IO、将计算密集部分移到 C++/Rust。",
            "【预处理一致性】训练和推理的预处理必须完全一致（normalize 参数、resize 方式）。不一致是常见的隐蔽 bug 来源。",
            "【错误处理】模型可能对某些输入崩溃或超时。需要输入验证、超时控制、异常捕获、降级策略。"
        ],
        handsOnPath: [
            "FastAPI 基础：创建 POST 端点接收图像 base64，返回分类结果。添加 Pydantic 模型验证请求。",
            "模型集成：应用启动时加载 PyTorch 模型，端点中调用推理，处理 GPU 内存管理。",
            "性能测试：使用 locust 或 wrk 进行压测，分析吞吐量和延迟分布，定位瓶颈。",
            "BentoML 打包：定义 Service，bentoml build 打包，bentoml serve 启动，bentoml containerize 生成 Docker 镜像。"
        ],
        selfCheck: [
            "为什么需要将模型封装为 API 服务？有哪些常见的服务框架？",
            "FastAPI 相比 Flask 有什么优势？为什么适合 ML 服务？",
            "如何优化模型服务的吞吐量？批处理如何工作？",
            "训练和推理预处理不一致会导致什么问题？如何避免？"
        ],
        extensions: [
            "学习 gRPC 构建高性能内部服务通信。",
            "探索 Ray Serve 进行分布式模型服务。",
            "研究 A/B 测试和金丝雀发布策略。",
            "了解模型版本管理和回滚机制。"
        ],
        sourceUrls: [
            "https://fastapi.tiangolo.com/",
            "https://madewithml.com/courses/mlops/api/",
            "https://docs.bentoml.com/en/latest/"
        ]
    },
    "ml-w9-3": {
        lessonId: "ml-w9-3",
        background: [
            "【容器化价值】Docker 将应用及其依赖打包为镜像，确保开发/测试/生产环境一致。'在我机器上能跑'不再是问题。ML 应用依赖复杂（CUDA、cuDNN、框架版本），容器化尤其重要。",
            "【Docker 基础】Dockerfile 定义构建步骤。基础镜像选择：官方 PyTorch 镜像已包含 CUDA。多阶段构建减小镜像大小。.dockerignore 排除不需要的文件。",
            "【Kubernetes 概念】容器编排平台：自动部署、扩缩容、负载均衡、自愈。Pod 是最小单元，Deployment 管理 Pod 副本，Service 暴露服务，Ingress 外部访问。",
            "【ML 专属组件】KServe（原 KFServing）：Kubernetes 上的 ML 模型服务，支持自动扩缩容、金丝雀发布、模型解释。Seldon Core：另一个流行的 ML 部署框架。",
            "【GPU 调度】Kubernetes 通过 device plugin 管理 GPU。节点标签区分 GPU 型号。资源请求 nvidia.com/gpu: 1。多模型共享 GPU 需要 MIG 或时间分片。"
        ],
        keyDifficulties: [
            "【镜像大小】ML 镜像常超过 10GB（CUDA + 框架 + 模型）。解决方案：多阶段构建、精简依赖、使用 distroless 基础镜像、模型外置下载。",
            "【GPU 容器配置】需要 NVIDIA Container Toolkit。docker run --gpus all。CUDA 版本需与主机驱动兼容。",
            "【冷启动问题】模型加载可能需要数分钟，扩容时新 Pod 无法立即服务。解决方案：保持最小副本数、预热探针、模型缓存。",
            "【资源估算】GPU 内存、CPU、普通内存需求估算。过度分配浪费资源，不足导致 OOM。需要实际测试确定。"
        ],
        handsOnPath: [
            "编写 Dockerfile：基于 pytorch/pytorch 镜像，安装依赖，复制代码和模型，设置入口点。",
            "本地测试：docker build 构建镜像，docker run --gpus all 启动容器，curl 测试 API。",
            "Kubernetes 部署：编写 Deployment 和 Service YAML，kubectl apply 部署，观察 Pod 状态。",
            "KServe 部署：定义 InferenceService CRD，自动获得扩缩容、流量拆分等功能。"
        ],
        selfCheck: [
            "Docker 如何解决 ML 项目的环境一致性问题？",
            "如何减小 ML 应用的 Docker 镜像大小？",
            "Kubernetes 的 Deployment 和 Service 分别是什么？",
            "KServe 相比原生 Kubernetes 部署 ML 模型有什么优势？"
        ],
        extensions: [
            "学习 Helm Chart 模板化 Kubernetes 配置。",
            "探索 Knative 无服务器部署 ML 模型。",
            "研究模型注册表（Model Registry）管理模型版本。",
            "了解 GitOps（ArgoCD、Flux）自动化部署流程。"
        ],
        sourceUrls: [
            "https://docs.docker.com/get-started/",
            "https://kserve.github.io/website/",
            "https://docs.seldon.io/projects/seldon-core/en/latest/"
        ]
    },
    "ml-w9-4": {
        lessonId: "ml-w9-4",
        background: [
            "【推理优化动机】训练可以慢（离线），推理必须快（实时）。优化方向：减少计算量（量化、剪枝）、高效实现（算子融合、内核优化）、充分利用硬件（批处理、并行）。",
            "【TensorRT】NVIDIA 的高性能推理引擎。将模型编译为优化后的 TensorRT 引擎：算子融合、内核自动调优、FP16/INT8 自动量化。通常比原生 PyTorch 快 2-5 倍。",
            "【Triton Inference Server】NVIDIA 的生产级推理服务器。支持多框架（PyTorch、TensorFlow、ONNX、TensorRT）、动态批处理、多模型管理、性能监控。",
            "【LLM 推理优化】大语言模型推理挑战：模型大（显存）、自回归慢（顺序生成）。优化技术：KV Cache（缓存注意力）、连续批处理、PagedAttention（vLLM）、投机解码。",
            "【边缘部署】在端侧设备运行模型：手机（CoreML、TensorFlow Lite）、嵌入式（ONNX Runtime、TensorRT Lite）。需要极致压缩和硬件特定优化。"
        ],
        keyDifficulties: [
            "【TensorRT 构建时间】优化过程可能需要数小时（自动调优每个 kernel）。可以序列化引擎复用，但引擎与 GPU 型号绑定。",
            "【动态 shape 处理】TensorRT 默认固定输入 shape。动态 shape 需要显式配置 optimization profile，指定最小/最优/最大尺寸。",
            "【精度验证】优化后模型可能精度略有下降。需要在代表性数据上验证输出差异在可接受范围内。",
            "【Triton 模型配置】config.pbtxt 配置模型格式、输入输出、批处理策略、实例数等。配置不当影响性能。"
        ],
        handsOnPath: [
            "TensorRT 转换：使用 torch2trt 或 onnx2trt 将模型转换为 TensorRT 引擎，对比推理速度。",
            "Triton 部署：按 model_repository 目录结构组织模型，编写 config.pbtxt，启动 Triton 服务。",
            "性能分析：使用 Triton 的 perf_analyzer 测试吞吐量和延迟，调整批处理参数优化性能。",
            "vLLM 部署：使用 vLLM 部署开源 LLM，对比与原生 Hugging Face 推理的速度差异。"
        ],
        selfCheck: [
            "TensorRT 通过哪些技术加速推理？",
            "Triton Inference Server 的主要功能是什么？如何支持多框架模型？",
            "LLM 推理的主要挑战是什么？KV Cache 如何加速？",
            "边缘部署有什么特殊约束？常用什么工具？"
        ],
        extensions: [
            "学习 FasterTransformer 加速 Transformer 模型推理。",
            "探索 FlashAttention 的 IO 感知算法原理。",
            "研究模型并行（Tensor Parallelism）部署超大模型。",
            "了解推测解码（Speculative Decoding）加速自回归生成。"
        ],
        sourceUrls: [
            "https://developer.nvidia.com/nvidia-triton-inference-server",
            "https://developer.nvidia.com/tensorrt",
            "https://docs.vllm.ai/en/latest/"
        ]
    }
}

export const week9Quizzes: Record<string, QuizQuestion[]> = {
    "ml-w9-1": [
        {
            id: "ml-w9-1-q1",
            question: "TorchScript 的 Tracing 和 Scripting 的主要区别是什么？",
            options: [
                "Tracing 更快，Scripting 更慢",
                "Tracing 运行模型记录操作，无法处理动态控制流；Scripting 分析代码，支持控制流",
                "Scripting 只能用于 CNN",
                "两者没有区别"
            ],
            answer: 1,
            rationale: "Tracing 执行一次模型记录操作图，动态 if/for 只会记录当前路径。Scripting 分析 Python 代码转为 TorchScript IR，支持控制流。"
        },
        {
            id: "ml-w9-1-q2",
            question: "ONNX 的主要价值是什么？",
            options: [
                "加速训练",
                "提供跨框架的标准模型格式，支持在不同推理引擎上运行",
                "减少模型参数",
                "只能用于 PyTorch"
            ],
            answer: 1,
            rationale: "ONNX 定义统一的算子和格式，PyTorch/TensorFlow 模型导出为 ONNX 后，可在 TensorRT、OpenVINO、CoreML 等引擎运行。"
        },
        {
            id: "ml-w9-1-q3",
            question: "模型量化将 FP32 转为 INT8 有什么好处？",
            options: [
                "提高精度",
                "模型大小减少约 4 倍，推理速度提升 2-4 倍",
                "增加模型容量",
                "只影响训练速度"
            ],
            answer: 1,
            rationale: "INT8 是 1 字节 vs FP32 的 4 字节，模型大小减少 4 倍。INT8 计算更快且更适合 CPU/边缘设备，通常加速 2-4 倍。"
        },
        {
            id: "ml-w9-1-q4",
            question: "动态量化和静态量化的区别是什么？",
            options: [
                "动态量化更慢",
                "动态量化在推理时量化激活，静态量化需要校准数据预先确定量化范围",
                "静态量化精度更低",
                "两者完全相同"
            ],
            answer: 1,
            rationale: "动态量化权重预先量化，激活在推理时动态量化（有一定开销）。静态量化用校准数据确定激活的量化范围，无运行时开销。"
        },
        {
            id: "ml-w9-1-q5",
            question: "结构化剪枝和非结构化剪枝的区别是什么？",
            options: [
                "结构化剪枝精度更高",
                "结构化剪枝移除整个通道/层，更容易加速；非结构化剪枝稀疏个别权重，加速困难",
                "非结构化剪枝更快",
                "两者效果相同"
            ],
            answer: 1,
            rationale: "非结构化剪枝产生稀疏矩阵，需要特殊硬件/库支持才能加速。结构化剪枝直接移除神经元或通道，标准硬件即可加速。"
        },
        {
            id: "ml-w9-1-q6",
            question: "PyTorch 2.0 的 torch.compile 的作用是什么？",
            options: [
                "编译训练代码",
                "通过 TorchDynamo 捕获计算图，进行自动优化加速推理和训练",
                "只能用于量化",
                "转换为 C++ 代码"
            ],
            answer: 1,
            rationale: "torch.compile 使用 TorchDynamo 捕获 Python 计算图，通过 TorchInductor 等后端生成优化内核。一行代码可获得显著加速。"
        }
    ],
    "ml-w9-2": [
        {
            id: "ml-w9-2-q1",
            question: "FastAPI 相比 Flask 在 ML 服务中的优势是什么？",
            options: [
                "Flask 不能处理 JSON",
                "FastAPI 性能更高、自动生成文档、类型检查、原生 async 支持",
                "FastAPI 只能用于图像",
                "Flask 不能部署到云端"
            ],
            answer: 1,
            rationale: "FastAPI 基于 Starlette（异步）和 Pydantic（类型验证），性能接近 Go，自动生成 OpenAPI 文档，类型提示增强代码质量。"
        },
        {
            id: "ml-w9-2-q2",
            question: "模型服务中批处理（Batching）的作用是什么？",
            options: [
                "减少代码复杂度",
                "收集多个请求合并推理，提高 GPU 利用率和吞吐量",
                "降低延迟",
                "减少内存使用"
            ],
            answer: 1,
            rationale: "GPU 擅长并行计算，单请求无法充分利用。批处理将多个请求合并为一个 batch，GPU 一次处理多个样本，提高吞吐量。"
        },
        {
            id: "ml-w9-2-q3",
            question: "模型服务中，模型应该在什么时候加载？",
            options: [
                "每个请求都重新加载",
                "应用启动时加载到内存/GPU，请求时直接推理",
                "随机时间加载",
                "只在 GPU 空闲时加载"
            ],
            answer: 1,
            rationale: "模型加载耗时（读取文件、传到 GPU），每次请求加载不可接受。启动时加载一次，后续请求直接使用内存中的模型。"
        },
        {
            id: "ml-w9-2-q4",
            question: "训练和推理预处理不一致会导致什么问题？",
            options: [
                "运行速度变慢",
                "模型输出错误，预测结果不可靠",
                "内存溢出",
                "只影响训练"
            ],
            answer: 1,
            rationale: "模型期望特定分布的输入（如 ImageNet 标准化）。不一致的预处理改变输入分布，模型无法正确预测。这是常见的隐蔽 bug。"
        },
        {
            id: "ml-w9-2-q5",
            question: "BentoML 的主要功能是什么？",
            options: [
                "数据清洗",
                "将模型、依赖、服务代码打包为可部署的 artifact",
                "模型训练",
                "数据标注"
            ],
            answer: 1,
            rationale: "BentoML 将模型、预处理代码、依赖版本、API 定义打包为 Bento，可直接部署或 containerize 为 Docker 镜像。简化部署流程。"
        },
        {
            id: "ml-w9-2-q6",
            question: "如何测试模型服务的性能瓶颈？",
            options: [
                "手动发送请求",
                "使用 locust/wrk 等工具进行压力测试，分析吞吐量和延迟分布",
                "只看 GPU 利用率",
                "检查代码行数"
            ],
            answer: 1,
            rationale: "压力测试模拟高并发请求，测量吞吐量（QPS）、延迟（P50/P95/P99）。结合 profiling 定位瓶颈（IO、预处理、推理、后处理）。"
        }
    ],
    "ml-w9-3": [
        {
            id: "ml-w9-3-q1",
            question: "Docker 容器化 ML 应用的主要价值是什么？",
            options: [
                "加速训练",
                "确保开发/测试/生产环境一致，解决'在我机器上能跑'的问题",
                "减少模型大小",
                "提高模型精度"
            ],
            answer: 1,
            rationale: "ML 依赖复杂（CUDA、cuDNN、框架版本），Docker 打包所有依赖，确保任何环境都能复现相同的运行时，消除环境差异。"
        },
        {
            id: "ml-w9-3-q2",
            question: "如何减小 ML 应用的 Docker 镜像大小？",
            options: [
                "只使用 CPU",
                "多阶段构建、精简依赖、使用轻量基础镜像、模型外置",
                "不安装框架",
                "压缩代码"
            ],
            answer: 1,
            rationale: "多阶段构建分离构建和运行时依赖，只复制必要文件。移除未使用的包。使用 slim 镜像。大模型存储在外部，运行时下载。"
        },
        {
            id: "ml-w9-3-q3",
            question: "Kubernetes 的 Deployment 和 Service 分别是什么？",
            options: [
                "Deployment 处理网络，Service 管理容器",
                "Deployment 管理 Pod 副本和更新策略，Service 提供稳定的网络端点",
                "两者功能相同",
                "Deployment 只用于存储"
            ],
            answer: 1,
            rationale: "Deployment 确保指定数量的 Pod 副本运行，处理滚动更新。Service 为动态变化的 Pod 提供稳定的 DNS 和负载均衡。"
        },
        {
            id: "ml-w9-3-q4",
            question: "KServe 相比原生 Kubernetes 部署 ML 模型有什么优势？",
            options: [
                "更便宜",
                "自动扩缩容、金丝雀发布、请求日志、模型解释等 ML 专属功能",
                "更快的网络",
                "只支持 TensorFlow"
            ],
            answer: 1,
            rationale: "KServe 为 ML 场景优化：根据请求量自动扩缩容（包括缩到 0）、流量拆分（金丝雀）、Transformer 预/后处理、模型解释器等。"
        },
        {
            id: "ml-w9-3-q5",
            question: "GPU 容器需要什么额外配置？",
            options: [
                "更大的内存",
                "安装 NVIDIA Container Toolkit，运行时添加 --gpus 参数",
                "特殊的网络配置",
                "只能用于训练"
            ],
            answer: 1,
            rationale: "NVIDIA Container Toolkit 使 Docker 能访问 GPU。需要主机安装驱动和 toolkit，运行时用 --gpus all 或指定 GPU ID。"
        },
        {
            id: "ml-w9-3-q6",
            question: "Kubernetes 中 ML 模型的冷启动问题是什么？",
            options: [
                "GPU 温度太低",
                "模型加载耗时长，新 Pod 启动后无法立即服务请求",
                "网络延迟",
                "存储速度慢"
            ],
            answer: 1,
            rationale: "大模型加载可能需要数分钟。自动扩缩容时新 Pod 需要时间加载模型才能处理请求。解决方案包括预热、保持最小副本、模型缓存。"
        }
    ],
    "ml-w9-4": [
        {
            id: "ml-w9-4-q1",
            question: "TensorRT 通过哪些技术加速推理？",
            options: [
                "增加参数量",
                "算子融合、内核自动调优、FP16/INT8 量化、内存优化",
                "使用更多 GPU",
                "减少批量大小"
            ],
            answer: 1,
            rationale: "TensorRT 融合多个算子减少内存访问，针对特定 GPU 自动调优 kernel，支持低精度加速，优化内存分配和数据布局。"
        },
        {
            id: "ml-w9-4-q2",
            question: "Triton Inference Server 的动态批处理如何工作？",
            options: [
                "固定批量大小",
                "收集短时间内到达的请求合并为一个 batch，平衡延迟和吞吐",
                "只处理单个请求",
                "批量大小由客户端决定"
            ],
            answer: 1,
            rationale: "动态批处理设置最大等待时间和最大批量大小。在时间窗口内收集请求合并推理，同时限制延迟增加。适合不稳定流量。"
        },
        {
            id: "ml-w9-4-q3",
            question: "LLM 推理中 KV Cache 的作用是什么？",
            options: [
                "减少模型大小",
                "缓存已生成 token 的 Key 和 Value，避免重复计算",
                "加速训练",
                "压缩输入"
            ],
            answer: 1,
            rationale: "自回归生成每步都要对所有前文计算注意力。KV Cache 保存历史 token 的 K、V，新 token 只需计算自己的 K、V 并与缓存拼接。"
        },
        {
            id: "ml-w9-4-q4",
            question: "vLLM 的 PagedAttention 解决什么问题？",
            options: [
                "减少参数量",
                "高效管理 KV Cache 内存，减少碎片化，提高批处理效率",
                "加速训练",
                "改善模型精度"
            ],
            answer: 1,
            rationale: "传统 KV Cache 为最大长度预分配连续内存，浪费空间。PagedAttention 像操作系统分页一样动态分配，减少碎片，支持更大批量。"
        },
        {
            id: "ml-w9-4-q5",
            question: "TensorRT 引擎为什么与 GPU 型号绑定？",
            options: [
                "授权限制",
                "自动调优针对特定 GPU 优化 kernel，不同 GPU 需要重新优化",
                "只是软件限制",
                "内存大小不同"
            ],
            answer: 1,
            rationale: "TensorRT 构建时会针对目标 GPU 的 SM 数量、内存带宽等特性自动调优 kernel 参数。不同 GPU 最优参数不同，需要重新构建。"
        },
        {
            id: "ml-w9-4-q6",
            question: "边缘部署 ML 模型的主要挑战是什么？",
            options: [
                "网络速度",
                "计算资源有限、内存受限、需要极致压缩和硬件特定优化",
                "数据太多",
                "模型太简单"
            ],
            answer: 1,
            rationale: "边缘设备（手机、IoT）CPU/GPU 弱、内存小、电池有限。需要量化、剪枝、蒸馏等极致压缩，并使用硬件特定框架（CoreML、TFLite）优化。"
        }
    ]
}
