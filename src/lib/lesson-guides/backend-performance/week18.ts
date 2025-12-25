import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week18Guides: Record<string, LessonGuide> = {
    "bp-w18-1": {
        lessonId: "bp-w18-1",
        background: [
            "【ML 推理性能挑战】模型推理延迟和吞吐量是生产部署的关键。大模型（如 LLM）单次推理可能需要秒级时间，成本高昂。",
            "【GPU 优化基础】GPU 并行处理适合矩阵运算。利用 GPU 需要批处理、内存管理、避免 CPU-GPU 数据传输瓶颈。",
            "【批处理策略】将多个推理请求批量处理可以提高 GPU 利用率。但增加延迟，需要权衡吞吐量和延迟。动态批处理根据队列自适应。",
            "【模型优化技术】量化（INT8/INT4）、剪枝、蒸馏可以减小模型大小和计算量。TensorRT、ONNX Runtime 提供优化后端。",
            "【推理服务框架】Triton Inference Server、TorchServe、TensorFlow Serving 提供模型服务能力：版本管理、A/B 测试、自动扩缩容。",
            "【LLM 推理特点】大语言模型推理包括 Prefill（处理输入）和 Decode（生成输出）两个阶段，特征不同需要分别优化。"
        ],
        keyDifficulties: [
            "【延迟与吞吐量权衡】批处理提高吞吐量但增加延迟。实时场景需要小批量甚至单条推理，批量场景可以用大批量。",
            "【内存管理】大模型可能超出 GPU 内存。需要模型并行、张量并行、或使用 CPU offload。vLLM 的 PagedAttention 优化 KV Cache。",
            "【冷启动问题】模型加载到 GPU 需要时间。保持 warm 实例或使用模型缓存减少冷启动影响。",
            "【多模型部署】多个模型共享 GPU 需要资源隔离。MIG（Multi-Instance GPU）或时间片轮换方式。",
            "【成本优化】GPU 实例昂贵。使用 Spot 实例、优化利用率、选择合适的实例类型（如 Inferentia）降低成本。"
        ],
        handsOnPath: [
            "部署 Triton Server：使用 Docker 部署 Triton，配置模型仓库，测试推理端点。",
            "测量推理延迟：使用 Triton 的性能分析工具 perf_analyzer 测量延迟和吞吐量。",
            "配置动态批处理：在 Triton 配置 dynamic_batching，设置最大批大小和等待时间。",
            "模型量化：使用 TensorRT 将 FP32 模型量化为 INT8，对比精度和性能。",
            "部署 vLLM：使用 vLLM 部署 LLM，启用 PagedAttention 优化内存使用。",
            "监控 GPU 指标：使用 DCGM 采集 GPU 利用率、内存、功耗，集成到 Prometheus。",
            "优化模型加载：使用模型预加载、内存映射、TensorRT 引擎缓存加速启动。"
        ],
        selfCheck: [
            "批处理如何影响推理的延迟和吞吐量？",
            "常用的模型优化技术有哪些？",
            "Triton Inference Server 提供哪些功能？",
            "LLM 推理的 Prefill 和 Decode 阶段有什么区别？",
            "如何处理大模型超出 GPU 内存的问题？",
            "推理服务的成本优化有哪些方法？"
        ],
        extensions: [
            "学习 vLLM 的 PagedAttention 和 Continuous Batching 原理。",
            "研究 Speculative Decoding 加速 LLM 推理。",
            "探索 AWS Inferentia/Trainium 专用芯片的优化。",
            "学习模型蒸馏（Knowledge Distillation）减小模型大小。"
        ],
        sourceUrls: [
            "https://github.com/triton-inference-server/server",
            "https://github.com/vllm-project/vllm",
            "https://developer.nvidia.com/tensorrt",
            "https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/"
        ]
    },
    "bp-w18-2": {
        lessonId: "bp-w18-2",
        background: [
            "【WebAssembly 定义】WebAssembly (Wasm) 是一种二进制指令格式，设计为可移植、高效的编译目标，接近原生性能。",
            "【Wasm 应用场景】浏览器中的高性能计算（如游戏、编解码）、服务端的安全沙箱（如插件系统）、边缘计算（如 Cloudflare Workers）。",
            "【Wasm 性能特点】比 JavaScript 快（通常 10-20%，计算密集型可能 10x）；启动快（毫秒级）；内存安全的沙箱执行。",
            "【WASI 标准】WebAssembly System Interface 定义了 Wasm 访问操作系统的标准接口，使 Wasm 可以在服务端运行。",
            "【Wasm 运行时】浏览器 V8/SpiderMonkey 内置支持；服务端有 Wasmtime、Wasmer、WasmEdge 等运行时。",
            "【编译到 Wasm】C/C++（Emscripten）、Rust（wasm-pack）、Go（TinyGo）、AssemblyScript 等语言可编译为 Wasm。"
        ],
        keyDifficulties: [
            "【与 JavaScript 互操作】Wasm 与 JS 的数据传递有开销。应该减少跨边界调用，批量传递数据。",
            "【调试困难】Wasm 是二进制格式，调试需要 source map。浏览器 DevTools 支持有限。",
            "【内存管理】Wasm 使用线性内存，需要手动管理（除非语言自带 GC）。内存增长有开销。",
            "【生态系统成熟度】Wasm 生态仍在发展。某些功能（如线程、GC、异常处理）支持有限或需要特性门控。",
            "【代码大小】Wasm 模块可能较大（尤其包含 GC 运行时时）。需要优化体积，考虑懒加载。"
        ],
        handsOnPath: [
            "编译 Rust 到 Wasm：使用 wasm-pack 将 Rust 代码编译为 Wasm，在浏览器中调用。",
            "测量 Wasm 性能：对比 Wasm 和 JavaScript 执行同样计算任务的性能差异。",
            "部署边缘 Wasm：在 Cloudflare Workers 或 Fastly Compute@Edge 部署 Wasm 模块。",
            "使用 WASI：用 Wasmtime 运行使用 WASI 接口的 Wasm 模块，访问文件系统。",
            "优化 Wasm 体积：使用 wasm-opt 优化、移除未使用代码、压缩模块大小。",
            "实现 JS-Wasm 高效通信：使用 SharedArrayBuffer 或批量传递减少跨边界开销。",
            "集成 Wasm 插件系统：设计支持 Wasm 插件的应用架构，提供安全的沙箱扩展能力。"
        ],
        selfCheck: [
            "WebAssembly 相比 JavaScript 有什么性能优势？",
            "WASI 是什么？解决什么问题？",
            "Wasm 与 JavaScript 互操作有什么性能考虑？",
            "常用的 Wasm 运行时有哪些？",
            "哪些语言可以编译到 WebAssembly？",
            "Wasm 在边缘计算中有什么应用？"
        ],
        extensions: [
            "学习 WebAssembly Component Model 的模块组合能力。",
            "研究 Wasm GC 提案对高级语言支持的影响。",
            "探索 Wasm 在区块链智能合约中的应用。",
            "学习 Fermyon Spin 等 Wasm 微服务框架。"
        ],
        sourceUrls: [
            "https://webassembly.org/",
            "https://wasi.dev/",
            "https://rustwasm.github.io/docs/book/",
            "https://wasmtime.dev/"
        ]
    },
    "bp-w18-3": {
        lessonId: "bp-w18-3",
        background: [
            "【性能工程文化】高性能不是一次性工作，而是持续的实践。需要建立性能意识、测量习惯、优化能力的团队文化。",
            "【性能左移】在开发早期就考虑性能，而不是上线后才发现问题。设计评审、代码审查都应该包含性能考量。",
            "【性能可观测性】完善的监控和追踪是性能工程的基础。无法测量就无法优化。建立从客户端到数据库的全链路可观测性。",
            "【性能回归防护】每次变更都可能引入性能回归。CI/CD 集成性能测试、性能预算、自动化比对防止回归。",
            "【性能 SLO/SLI】明确定义性能目标（SLO）和测量指标（SLI）。与业务 KPI 对齐，让性能有明确的验收标准。",
            "【知识沉淀】将性能优化经验沉淀为文档、培训、最佳实践。避免重复踩坑，提升团队整体水平。"
        ],
        keyDifficulties: [
            "【跨团队协作】性能问题往往跨越多个团队。需要建立协作机制，明确归属，避免推诿。",
            "【优先级平衡】功能开发和性能优化争夺资源。需要量化性能问题的业务影响，获得资源支持。",
            "【技术债务管理】性能技术债务容易累积。需要定期审计、规划还债、避免雪崩。",
            "【工具链建设】需要投资建设性能测试、分析、监控的工具链。初期投入大但长期收益高。",
            "【人才培养】性能工程需要专业技能。通过培训、实践、导师制培养团队能力。"
        ],
        handsOnPath: [
            "定义性能 SLO：与业务团队一起定义关键接口的 P99 延迟、错误率目标。",
            "建立性能基线：记录当前系统的性能基线，作为后续对比和回归检测的基准。",
            "集成性能测试：在 CI/CD 中加入性能测试阶段，设置阈值阻止回归。",
            "创建性能仪表板：建立实时性能仪表板，展示关键指标趋势和 SLO 达成情况。",
            "组织性能评审：在技术方案评审中加入性能评估环节，提前发现潜在问题。",
            "建立性能知识库：记录性能问题案例、优化经验、最佳实践，便于团队学习。",
            "规划性能改进路线：识别主要性能瓶颈，制定优先级排序的改进计划。"
        ],
        selfCheck: [
            "什么是性能左移？为什么重要？",
            "如何在 CI/CD 中防止性能回归？",
            "性能 SLO 应该如何定义？",
            "跨团队的性能问题如何协调解决？",
            "性能技术债务如何管理？",
            "如何培养团队的性能工程能力？"
        ],
        extensions: [
            "学习 Google SRE 的性能工程实践。",
            "研究 Facebook 的性能回归检测系统。",
            "探索 Chaos Engineering 与性能测试的结合。",
            "学习建立性能 COE（Center of Excellence）的方法。"
        ],
        sourceUrls: [
            "https://sre.google/sre-book/table-of-contents/",
            "https://www.brendangregg.com/methodology.html",
            "https://engineering.fb.com/2021/04/05/developer-tools/reverse-debugging/",
            "https://www.infoq.com/articles/performance-engineering-practices/"
        ]
    }
}

export const week18Quizzes: Record<string, QuizQuestion[]> = {
    "bp-w18-1": [
        {
            id: "bp-w18-1-q1",
            question: "批处理如何影响 ML 推理的延迟和吞吐量？",
            options: [
                "无影响",
                "增加吞吐量但也增加单请求延迟，需要权衡",
                "减少延迟",
                "减少吞吐量"
            ],
            answer: 1,
            rationale: "批处理提高 GPU 利用率增加吞吐量，但请求需要等待凑批，增加延迟。需要根据场景权衡。"
        },
        {
            id: "bp-w18-1-q2",
            question: "常用的模型优化技术有哪些？",
            options: [
                "只有量化",
                "量化（INT8/INT4）、剪枝、蒸馏、算子融合",
                "只有剪枝",
                "只有蒸馏"
            ],
            answer: 1,
            rationale: "模型优化技术包括：量化减少精度、剪枝移除不重要权重、蒸馏用小模型学大模型、算子融合减少内存访问。"
        },
        {
            id: "bp-w18-1-q3",
            question: "Triton Inference Server 提供哪些功能？",
            options: [
                "只有模型服务",
                "模型版本管理、动态批处理、多模型多框架支持、A/B 测试",
                "只有训练",
                "只有监控"
            ],
            answer: 1,
            rationale: "Triton 是 NVIDIA 的推理服务框架，支持多框架、动态批处理、模型版本、指标监控等。"
        },
        {
            id: "bp-w18-1-q4",
            question: "LLM 推理的 Prefill 和 Decode 有什么区别？",
            options: [
                "没有区别",
                "Prefill 处理输入上下文计算密集，Decode 逐 token 生成内存带宽密集",
                "Decode 更快",
                "Prefill 更简单"
            ],
            answer: 1,
            rationale: "Prefill 一次性处理所有输入 token，计算密集；Decode 逐个生成输出 token，受内存带宽限制。"
        },
        {
            id: "bp-w18-1-q5",
            question: "如何处理大模型超出 GPU 内存的问题？",
            options: [
                "无法处理",
                "模型并行、张量并行、CPU offload、PagedAttention 优化",
                "只能换更大 GPU",
                "减少批大小"
            ],
            answer: 1,
            rationale: "可以使用模型并行分布到多 GPU、张量并行切分层、CPU offload 部分参数、PagedAttention 优化 KV Cache。"
        },
        {
            id: "bp-w18-1-q6",
            question: "vLLM 的主要优化是什么？",
            options: [
                "更快的训练",
                "PagedAttention 优化 KV Cache 内存管理，Continuous Batching",
                "更好的精度",
                "更小的模型"
            ],
            answer: 1,
            rationale: "vLLM 使用 PagedAttention 动态管理 KV Cache 内存，支持 Continuous Batching 提高吞吐量。"
        },
        {
            id: "bp-w18-1-q7",
            question: "推理服务的成本优化有哪些方法？",
            options: [
                "只能增加预算",
                "使用 Spot 实例、提高利用率、选择合适实例类型、模型优化",
                "减少请求",
                "降低精度"
            ],
            answer: 1,
            rationale: "成本优化：Spot 实例降低单价、提高 GPU 利用率、选择性价比高的实例（如 Inferentia）、量化减少资源需求。"
        },
        {
            id: "bp-w18-1-q8",
            question: "TensorRT 的作用是什么？",
            options: [
                "训练框架",
                "NVIDIA 的推理优化器，提供量化、算子融合、内核优化",
                "数据处理",
                "模型存储"
            ],
            answer: 1,
            rationale: "TensorRT 是 NVIDIA 的推理优化库，提供 FP16/INT8 量化、层融合、内核自动调优等功能。"
        },
        {
            id: "bp-w18-1-q9",
            question: "动态批处理（Dynamic Batching）如何工作？",
            options: [
                "固定批大小",
                "根据队列中的请求动态凑批，设置最大等待时间和批大小",
                "不使用批处理",
                "随机批大小"
            ],
            answer: 1,
            rationale: "动态批处理在配置的最大等待时间内收集请求，凑够批大小或超时后一起推理。"
        },
        {
            id: "bp-w18-1-q10",
            question: "DCGM 是什么？",
            options: [
                "深度学习框架",
                "NVIDIA 的 GPU 监控和管理工具，采集利用率、内存、功耗等指标",
                "数据库",
                "编译器"
            ],
            answer: 1,
            rationale: "DCGM (Data Center GPU Manager) 是 NVIDIA 的 GPU 监控工具，可以导出指标到 Prometheus。"
        },
        {
            id: "bp-w18-1-q11",
            question: "Speculative Decoding 如何加速 LLM 推理？",
            options: [
                "增加 GPU",
                "用小模型草拟多个 token，大模型并行验证，减少生成步数",
                "减少精度",
                "增加批大小"
            ],
            answer: 1,
            rationale: "Speculative Decoding 用快速小模型预测多个 token，大模型并行验证，接受正确的部分。"
        },
        {
            id: "bp-w18-1-q12",
            question: "MIG (Multi-Instance GPU) 的作用是什么？",
            options: [
                "增加 GPU 数量",
                "将单个 GPU 划分为多个独立实例，隔离部署多个模型",
                "加速训练",
                "减少内存"
            ],
            answer: 1,
            rationale: "MIG 可以将 A100 等 GPU 划分为多个独立实例，每个实例有隔离的内存和计算资源。"
        }
    ],
    "bp-w18-2": [
        {
            id: "bp-w18-2-q1",
            question: "WebAssembly 相比 JavaScript 有什么性能优势？",
            options: [
                "无优势",
                "接近原生性能、可预测的执行时间、更高效的内存使用",
                "更容易编写",
                "更好的调试"
            ],
            answer: 1,
            rationale: "Wasm 是预编译的二进制格式，执行效率接近原生代码，比 JS 更快更可预测。"
        },
        {
            id: "bp-w18-2-q2",
            question: "WASI 是什么？",
            options: [
                "编程语言",
                "WebAssembly System Interface，定义 Wasm 访问操作系统的标准接口",
                "运行时",
                "编译器"
            ],
            answer: 1,
            rationale: "WASI 定义了 Wasm 模块访问文件系统、网络、时钟等系统资源的标准接口。"
        },
        {
            id: "bp-w18-2-q3",
            question: "Wasm 与 JavaScript 互操作有什么性能考虑？",
            options: [
                "无开销",
                "跨边界调用有开销，应减少调用次数，批量传递数据",
                "Wasm 调用 JS 更快",
                "应该频繁调用"
            ],
            answer: 1,
            rationale: "Wasm 与 JS 的数据传递需要序列化/反序列化，应该减少调用次数，批量传递数据。"
        },
        {
            id: "bp-w18-2-q4",
            question: "常用的 Wasm 运行时有哪些？",
            options: [
                "只有浏览器",
                "Wasmtime、Wasmer、WasmEdge、V8、SpiderMonkey",
                "只有 Node.js",
                "只有 Wasmtime"
            ],
            answer: 1,
            rationale: "服务端运行时：Wasmtime（Bytecode Alliance）、Wasmer、WasmEdge；浏览器：V8、SpiderMonkey 内置支持。"
        },
        {
            id: "bp-w18-2-q5",
            question: "哪些语言可以编译到 WebAssembly？",
            options: [
                "只有 C",
                "C/C++（Emscripten）、Rust、Go（TinyGo）、AssemblyScript 等",
                "只有 Rust",
                "只有 JavaScript"
            ],
            answer: 1,
            rationale: "多种语言支持编译到 Wasm：C/C++、Rust、Go、Kotlin、Swift、AssemblyScript 等。"
        },
        {
            id: "bp-w18-2-q6",
            question: "Wasm 在边缘计算中有什么应用？",
            options: [
                "无应用",
                "Cloudflare Workers、Fastly Compute@Edge 等使用 Wasm 实现快速启动的边缘函数",
                "只用于浏览器",
                "只用于服务器"
            ],
            answer: 1,
            rationale: "边缘平台使用 Wasm 实现毫秒级启动、安全隔离的边缘函数，比容器更轻量。"
        },
        {
            id: "bp-w18-2-q7",
            question: "wasm-pack 的作用是什么？",
            options: [
                "压缩工具",
                "将 Rust 代码编译为 Wasm 并生成 npm 包",
                "运行时",
                "调试工具"
            ],
            answer: 1,
            rationale: "wasm-pack 是 Rust 的 Wasm 工具链，编译代码、生成绑定、打包为 npm 包方便使用。"
        },
        {
            id: "bp-w18-2-q8",
            question: "Wasm 的内存模型是什么？",
            options: [
                "自动垃圾回收",
                "线性内存，需要手动管理（除非语言自带 GC）",
                "无限内存",
                "共享内存"
            ],
            answer: 1,
            rationale: "Wasm 使用连续的线性内存，没有内置 GC。使用 C/Rust 时需要手动管理内存。"
        },
        {
            id: "bp-w18-2-q9",
            question: "如何优化 Wasm 模块大小？",
            options: [
                "无法优化",
                "使用 wasm-opt 优化、移除未使用代码、压缩、代码分割",
                "增加代码",
                "禁用优化"
            ],
            answer: 1,
            rationale: "优化体积：wasm-opt 优化器、LTO 移除死代码、gzip/brotli 压缩、懒加载分割模块。"
        },
        {
            id: "bp-w18-2-q10",
            question: "Wasm 的启动时间通常是多少？",
            options: [
                "秒级",
                "毫秒级，比容器快得多",
                "分钟级",
                "与容器相同"
            ],
            answer: 1,
            rationale: "Wasm 模块启动时间通常在毫秒级，远快于容器的秒级启动，适合边缘计算场景。"
        },
        {
            id: "bp-w18-2-q11",
            question: "AssemblyScript 是什么？",
            options: [
                "汇编语言",
                "TypeScript 语法的语言，专门编译到 WebAssembly",
                "JavaScript 框架",
                "编译器"
            ],
            answer: 1,
            rationale: "AssemblyScript 使用 TypeScript 语法但编译为 Wasm，对前端开发者友好。"
        },
        {
            id: "bp-w18-2-q12",
            question: "Wasm 的安全模型是什么？",
            options: [
                "无安全限制",
                "沙箱执行，内存隔离，显式能力授权",
                "完全访问系统",
                "与原生代码相同"
            ],
            answer: 1,
            rationale: "Wasm 在沙箱中执行，内存隔离无法访问宿主内存，需要显式授权才能访问系统资源。"
        }
    ],
    "bp-w18-3": [
        {
            id: "bp-w18-3-q1",
            question: "什么是性能左移？",
            options: [
                "优化左边的代码",
                "在开发早期就考虑性能，而不是上线后才发现问题",
                "向左滚动",
                "性能下降"
            ],
            answer: 1,
            rationale: "性能左移指将性能考虑提前到设计和开发阶段，尽早发现和解决问题，降低修复成本。"
        },
        {
            id: "bp-w18-3-q2",
            question: "如何在 CI/CD 中防止性能回归？",
            options: [
                "手动检查",
                "集成性能测试、设置阈值、自动比对基线、超标阻止合并",
                "不测性能",
                "只看功能"
            ],
            answer: 1,
            rationale: "在 CI 中运行性能测试，与基线比对，超过阈值（如延迟增加 10%）阻止 PR 合并。"
        },
        {
            id: "bp-w18-3-q3",
            question: "性能 SLO 应该如何定义？",
            options: [
                "随意定义",
                "与业务 KPI 对齐，可测量，有明确数值如 P99 < 200ms",
                "越高越好",
                "不需要定义"
            ],
            answer: 1,
            rationale: "SLO 应该与用户体验和业务目标对齐，使用可测量的 SLI 指标，有明确的目标值。"
        },
        {
            id: "bp-w18-3-q4",
            question: "跨团队的性能问题如何协调解决？",
            options: [
                "各自负责",
                "建立协作机制、明确归属、端到端追踪、定期性能评审",
                "推给其他团队",
                "忽略问题"
            ],
            answer: 1,
            rationale: "通过端到端追踪定位问题归属，建立跨团队协作机制，定期性能评审共同改进。"
        },
        {
            id: "bp-w18-3-q5",
            question: "性能技术债务如何管理？",
            options: [
                "忽略",
                "定期审计、量化影响、规划还债、设置红线防止累积",
                "推迟处理",
                "一次性解决"
            ],
            answer: 1,
            rationale: "性能技术债务需要定期审计识别、量化业务影响、规划改进、设置阈值防止恶化。"
        },
        {
            id: "bp-w18-3-q6",
            question: "如何培养团队的性能工程能力？",
            options: [
                "只招专家",
                "培训、实践、导师制、知识沉淀、案例分享",
                "外包",
                "不需要培养"
            ],
            answer: 1,
            rationale: "通过培训建立基础、实践项目锻炼、导师指导、沉淀最佳实践、分享案例提升团队能力。"
        },
        {
            id: "bp-w18-3-q7",
            question: "性能可观测性包括什么？",
            options: [
                "只有日志",
                "指标监控、分布式追踪、日志分析、实时告警",
                "只有监控",
                "只有追踪"
            ],
            answer: 1,
            rationale: "完善的性能可观测性包括：指标监控（延迟、吞吐）、分布式追踪、日志、告警体系。"
        },
        {
            id: "bp-w18-3-q8",
            question: "如何量化性能问题的业务影响？",
            options: [
                "无法量化",
                "关联延迟与转化率、收入、用户流失等业务指标",
                "只看技术指标",
                "猜测"
            ],
            answer: 1,
            rationale: "通过 A/B 测试或历史数据分析延迟与业务指标的关系，如每 100ms 延迟降低 X% 转化率。"
        },
        {
            id: "bp-w18-3-q9",
            question: "性能评审应该在什么阶段进行？",
            options: [
                "上线后",
                "技术方案设计、代码审查、上线前都应该包含性能评审",
                "只在出问题时",
                "不需要评审"
            ],
            answer: 1,
            rationale: "性能评审应该贯穿整个开发周期：方案设计时评估、代码审查检查、上线前压测验证。"
        },
        {
            id: "bp-w18-3-q10",
            question: "性能知识库应该包含什么？",
            options: [
                "只有代码",
                "性能问题案例、优化经验、最佳实践、工具使用指南",
                "只有文档",
                "只有指标"
            ],
            answer: 1,
            rationale: "知识库记录：历史问题和解决方案、优化经验、最佳实践规范、工具使用方法、培训材料。"
        },
        {
            id: "bp-w18-3-q11",
            question: "性能基线的作用是什么？",
            options: [
                "无作用",
                "作为对比基准检测回归，评估优化效果",
                "只是记录",
                "只用于报告"
            ],
            answer: 1,
            rationale: "基线是系统性能的参考点，用于检测变更是否导致回归、评估优化措施的效果。"
        },
        {
            id: "bp-w18-3-q12",
            question: "建立性能文化最重要的是什么？",
            options: [
                "工具",
                "领导重视、明确目标、持续测量、全员参与",
                "招聘专家",
                "购买服务"
            ],
            answer: 1,
            rationale: "性能文化需要：领导层支持和重视、明确的性能目标、持续测量的习惯、全员参与的意识。"
        }
    ]
}
