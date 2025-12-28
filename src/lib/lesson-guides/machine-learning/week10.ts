import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week10Guides: Record<string, LessonGuide> = {
    "ml-w10-1": {
        lessonId: "ml-w10-1",
        background: [
            "【实验管理的必要性】ML 开发充满试错：不同模型、超参数、数据版本、预处理方式。没有系统化记录，难以复现结果，无法比较实验，团队协作混乱。",
            "【MLflow 核心概念】Tracking：记录参数、指标、产物（模型、图表）。Projects：打包可复现的代码。Models：统一的模型格式。Model Registry：模型版本管理和阶段标记（Staging/Production）。",
            "【Weights & Biases】云端实验管理平台。自动记录系统指标（GPU 利用率）、丰富的可视化、团队协作功能。Sweeps 实现超参数自动搜索。与主流框架深度集成。",
            "【数据版本控制 DVC】Git for Data。像管理代码一样管理数据集和模型文件。.dvc 文件存储在 Git 中，实际数据存储在远程存储（S3、GCS）。支持数据流水线。",
            "【可复现性三要素】代码版本（Git commit）、数据版本（DVC 或哈希）、环境版本（Docker 或 conda/pip 锁文件）。缺少任何一个都无法完全复现实验。"
        ],
        keyDifficulties: [
            "【记录粒度】记录太少无法复现，记录太多噪声过多。最佳实践：自动记录超参数和指标，手动记录关键决策和观察。",
            "【大文件存储】模型 checkpoint 和数据集通常很大（GB 级），不适合存 Git。MLflow 使用 artifact store（S3/HDFS），DVC 使用远程存储。",
            "【团队协作】个人实验记录 vs 团队共享。需要统一的命名规范、tag 体系、权限管理。W&B 的团队功能较好，MLflow 需要自建服务器。",
            "【与训练代码集成】最小化对现有代码的侵入。MLflow 的 autolog 可以自动记录 sklearn/PyTorch 训练过程。"
        ],
        handsOnPath: [
            "MLflow 基础：mlflow.start_run() 开启实验，mlflow.log_param/log_metric 记录，mlflow ui 启动界面查看。",
            "PyTorch 集成：mlflow.pytorch.autolog() 自动记录损失、梯度、模型结构。对比有无 autolog 的记录差异。",
            "DVC 入门：dvc init 初始化，dvc add 添加大文件，dvc push 上传到远程，dvc pull 下载。",
            "Model Registry：mlflow.register_model() 注册模型，在 UI 中管理版本和阶段转换。"
        ],
        selfCheck: [
            "实验管理需要记录哪些信息？为什么这些信息对复现很重要？",
            "MLflow 的四个核心组件分别是什么？",
            "DVC 如何处理大文件？与 Git LFS 有什么区别？",
            "如何在团队中建立统一的实验管理规范？"
        ],
        extensions: [
            "学习 Neptune.ai 作为 W&B 的替代方案。",
            "探索 ClearML 开源的端到端 MLOps 平台。",
            "研究 LakeFS 进行数据版本控制（Git-like 操作 data lake）。",
            "了解 ModelDB 和其他模型版本管理方案。"
        ],
        sourceUrls: [
            "https://mlflow.org/docs/latest/index.html",
            "https://docs.wandb.ai/",
            "https://dvc.org/doc"
        ]
    },
    "ml-w10-2": {
        lessonId: "ml-w10-2",
        background: [
            "【特征工程瓶颈】数据科学家大量时间花在特征工程上，而这些工作常常重复（不同项目用相同特征）。特征逻辑分散在 Notebook 中，训练和推理不一致。",
            "【Feature Store 定义】集中管理特征的数据库。存储特征定义（计算逻辑）和特征值。提供一致的训练和推理特征获取接口。支持特征发现、复用和治理。",
            "【Feast 架构】开源特征存储。离线存储（训练用，批量历史特征）和在线存储（推理用，低延迟最新特征）。Feature View 定义特征，Entity 定义主键。",
            "【训练-推理一致性】Training-Serving Skew 是常见问题。训练时用 Pandas 计算特征，推理时用 SQL，逻辑细微差异导致模型效果下降。Feature Store 统一两端。",
            "【时间旅行】训练需要'穿越'到过去某时间点的特征值（point-in-time correct）。否则用未来数据构造特征是数据泄露。Feature Store 支持时间戳查询。"
        ],
        keyDifficulties: [
            "【在线服务延迟】推理时特征查询必须毫秒级。在线存储用 Redis 等高速存储。复杂特征需要预计算。",
            "【特征新鲜度】实时特征 vs 批量特征。实时特征用流处理（Kafka + Flink），批量特征定期更新。新鲜度要求决定架构复杂度。",
            "【特征依赖管理】特征可能依赖其他特征。更新基础特征需要重新计算下游特征。DAG 管理特征依赖。",
            "【引入成本】Feature Store 是基础设施，引入成本高。小团队可能直接用数据库。但随着规模增长，Feature Store 价值凸显。"
        ],
        handsOnPath: [
            "Feast 本地安装：feast init 创建项目，定义 Entity 和 Feature View，feast apply 应用配置。",
            "离线获取：feast get-historical-features 获取训练数据，理解 point-in-time join。",
            "在线获取：feast materialize 物化到在线存储，feast get-online-features 获取实时特征。",
            "特征定义：编写 FeatureView 定义特征计算逻辑（从 Parquet/BigQuery 读取并转换）。"
        ],
        selfCheck: [
            "Feature Store 解决什么问题？为什么特征管理很重要？",
            "什么是训练-推理偏差（Training-Serving Skew）？如何避免？",
            "Feast 的离线存储和在线存储分别用于什么场景？",
            "什么是 point-in-time correct 特征？为什么需要时间旅行？"
        ],
        extensions: [
            "学习 Tecton 企业级特征平台。",
            "探索 Hopsworks 开源特征存储。",
            "研究实时特征计算架构（Flink + Kafka）。",
            "了解特征监控和质量检查。"
        ],
        sourceUrls: [
            "https://docs.feast.dev/",
            "https://www.featurestore.org/",
            "https://www.tecton.ai/blog/what-is-a-feature-store/"
        ]
    },
    "ml-w10-3": {
        lessonId: "ml-w10-3",
        background: [
            "【ML Pipeline 动机】模型训练不是一次性任务：数据更新、模型重训、评估、部署需要周期性自动执行。手动执行费时且易出错。Pipeline 实现自动化和可复现。",
            "【Pipeline 组成】典型步骤：数据获取 → 数据验证 → 预处理 → 训练 → 评估 → 模型注册 → 部署。每步有输入输出，形成 DAG。步骤可以并行、条件执行、失败重试。",
            "【Kubeflow Pipelines】Kubernetes 原生的 ML Pipeline。用 Python SDK 定义 Pipeline，编译为 Argo Workflow。支持缓存、可视化、实验管理。与 KServe 集成。",
            "【Apache Airflow】通用的工作流编排平台，也常用于 ML。DAG 用 Python 定义，丰富的调度选项，大量 operator 集成。比 Kubeflow 更通用但 ML 专属功能少。",
            "【Continuous Training】自动触发重训练：定时（每周）、数据量达到阈值、模型性能下降。CT 确保模型不过时，适应数据分布变化。"
        ],
        keyDifficulties: [
            "【Pipeline 设计】步骤粒度选择：太粗无法复用和调试，太细管理复杂。通常按逻辑功能划分（数据处理、训练、评估各一步）。",
            "【数据传递】步骤间如何传递数据？小数据用参数，大数据用中间存储（S3）。Kubeflow 的 Artifact 机制自动处理。",
            "【容器化步骤】每个步骤在独立容器运行，环境隔离但增加开销。镜像构建和管理是额外负担。",
            "【调试困难】Pipeline 执行环境与本地不同。失败时需要查看日志、检查中间产物。本地调试可以用 Kubeflow 的 local mode。"
        ],
        handsOnPath: [
            "Kubeflow Pipeline 入门：用 @component 装饰器定义组件，@pipeline 装饰器组合流水线，kfp.compiler.Compiler 编译。",
            "Airflow DAG：定义 DAG、Task 和依赖关系，使用 PythonOperator 执行训练脚本，配置调度 schedule_interval。",
            "端到端 Pipeline：数据下载 → 预处理 → 训练 → 评估 → 条件部署（评估通过才部署）。",
            "Prefect 替代方案：用 @task 和 @flow 定义流程，更 Pythonic 的 API，本地调试更方便。"
        ],
        selfCheck: [
            "ML Pipeline 自动化哪些步骤？为什么需要自动化？",
            "Kubeflow Pipelines 和 Airflow 有什么区别？各自适合什么场景？",
            "Continuous Training 的触发条件有哪些？如何实现？",
            "Pipeline 步骤间如何传递大数据（如处理后的训练集）？"
        ],
        extensions: [
            "学习 ZenML 简化 ML Pipeline 开发。",
            "探索 Metaflow 由 Netflix 开源的 ML 工作流。",
            "研究 Flyte 云原生的 ML 编排平台。",
            "了解 CI/CD for ML（ML Model 的持续集成和部署）。"
        ],
        sourceUrls: [
            "https://www.kubeflow.org/docs/components/pipelines/",
            "https://airflow.apache.org/docs/",
            "https://docs.prefect.io/"
        ]
    },
    "ml-w10-4": {
        lessonId: "ml-w10-4",
        background: [
            "【模型监控必要性】模型上线不是终点。真实世界数据分布变化（Drift）、用户行为改变、季节性因素都会导致模型性能退化。没有监控就是盲人开车。",
            "【数据漂移类型】Covariate Shift：输入分布变化（如新客户群体）。Concept Drift：输入-输出关系变化（如用户偏好改变）。Label Shift：标签分布变化。不同类型需要不同检测方法。",
            "【检测方法】统计检验（KS 检验、卡方检验）检测分布变化。规则告警（特征缺失率、取值范围）。模型性能监控（需要真实标签，通常延迟获取）。",
            "【Evidently AI】开源 ML 监控库。生成数据质量、漂移、模型性能报告。支持批量分析和实时监控。可视化 dashboard 直观展示。",
            "【告警与响应】检测到问题后的响应流程：告警通知 → 问题确认 → 根因分析 → 采取措施（回滚、重训练、调整阈值）。需要 oncall 机制和 runbook。"
        ],
        keyDifficulties: [
            "【真实标签延迟】模型性能监控需要真实标签，但标签可能延迟数天甚至数周才能获取（如贷款是否违约）。无标签期间只能监控输入分布。",
            "【漂移 vs 噪声】正常的随机波动可能被误报为漂移。需要设置合适的阈值和窗口大小。连续多次触发再告警。",
            "【高维数据】特征很多时，逐一检测效率低且有多重检验问题。可以用 PCA 降维后监控，或只监控重要特征。",
            "【根因分析】知道有漂移，但哪个特征变了？为什么变了？需要 drill-down 能力和业务理解。"
        ],
        handsOnPath: [
            "Evidently 报告：用 Report 生成数据漂移报告，可视化 reference 和 current 数据的分布对比。",
            "批量监控：定期（每天）运行监控脚本，检测新数据与训练数据的漂移，结果写入数据库。",
            "Prometheus + Grafana：导出模型指标（预测延迟、预测分布），用 Prometheus 采集，Grafana 可视化和告警。",
            "自动化响应：检测到漂移后触发 Airflow DAG 重训练模型，评估通过后自动部署。"
        ],
        selfCheck: [
            "为什么需要监控已部署的模型？模型性能会如何退化？",
            "Covariate Shift 和 Concept Drift 的区别是什么？如何检测？",
            "如何在没有真实标签的情况下监控模型？",
            "检测到数据漂移后应该采取什么措施？"
        ],
        extensions: [
            "学习 Whylabs 云端监控平台。",
            "探索 Alibi Detect 提供更多漂移检测算法。",
            "研究 NannyML 无标签情况下估计模型性能。",
            "了解 A/B 测试在模型更新中的应用。"
        ],
        sourceUrls: [
            "https://docs.evidentlyai.com/",
            "https://whylogs.readthedocs.io/en/latest/",
            "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning"
        ]
    }
}

export const week10Quizzes: Record<string, QuizQuestion[]> = {
    "ml-w10-1": [
        {
            id: "ml-w10-1-q1",
            question: "实验管理需要记录哪些关键信息？",
            options: [
                "只需要记录最终结果",
                "代码版本、数据版本、超参数、指标、环境配置",
                "只需要记录模型权重",
                "只需要记录训练时间"
            ],
            answer: 1,
            rationale: "完整的实验记录需要：代码版本（Git commit）、数据版本（哈希或 DVC）、超参数、评估指标、环境配置。缺少任何一项都可能无法复现。"
        },
        {
            id: "ml-w10-1-q2",
            question: "MLflow 的 Model Registry 的作用是什么？",
            options: [
                "训练模型",
                "管理模型版本和阶段（Staging/Production）",
                "数据预处理",
                "超参数搜索"
            ],
            answer: 1,
            rationale: "Model Registry 集中管理所有注册的模型，跟踪版本，标记阶段（Staging、Production）。支持模型审批流程和版本回滚。"
        },
        {
            id: "ml-w10-1-q3",
            question: "DVC 解决什么问题？",
            options: [
                "加速训练",
                "像 Git 管理代码一样管理大文件（数据集和模型）",
                "模型部署",
                "数据清洗"
            ],
            answer: 1,
            rationale: "DVC（Data Version Control）对大文件进行版本控制。.dvc 文件存储在 Git，实际数据存储在远程。支持数据版本切换和流水线。"
        },
        {
            id: "ml-w10-1-q4",
            question: "mlflow.autolog() 的作用是什么？",
            options: [
                "自动训练模型",
                "自动记录框架（sklearn/PyTorch）的训练过程（参数、指标、模型）",
                "自动部署模型",
                "自动清理数据"
            ],
            answer: 1,
            rationale: "autolog 自动集成框架的训练循环，无需手动调用 log_param/log_metric。一行代码启用，最小化代码修改。"
        },
        {
            id: "ml-w10-1-q5",
            question: "Weights & Biases 相比 MLflow 的主要优势是什么？",
            options: [
                "完全免费",
                "云端服务、丰富的可视化、团队协作功能更强",
                "只能用于 PyTorch",
                "更快的训练速度"
            ],
            answer: 1,
            rationale: "W&B 提供托管服务（无需自建基础设施）、自动系统监控、交互式可视化、团队协作功能。MLflow 更适合自托管场景。"
        },
        {
            id: "ml-w10-1-q6",
            question: "实验可复现性的三个要素是什么？",
            options: [
                "速度、精度、大小",
                "代码版本、数据版本、环境版本",
                "训练集、验证集、测试集",
                "CPU、GPU、内存"
            ],
            answer: 1,
            rationale: "完全复现需要：相同的代码（Git commit）、相同的数据（DVC 或哈希校验）、相同的环境（Docker 或依赖锁文件）。"
        }
    ],
    "ml-w10-2": [
        {
            id: "ml-w10-2-q1",
            question: "Feature Store 主要解决什么问题？",
            options: [
                "加速模型训练",
                "集中管理特征，确保训练和推理特征一致，减少重复工作",
                "减少数据存储成本",
                "自动生成特征"
            ],
            answer: 1,
            rationale: "Feature Store 集中存储特征定义和值，提供训练和推理统一的接口。避免特征逻辑分散和训练-推理不一致。"
        },
        {
            id: "ml-w10-2-q2",
            question: "什么是 Training-Serving Skew？",
            options: [
                "训练太慢",
                "训练时和推理时特征计算方式不同导致的模型性能下降",
                "服务器负载不均衡",
                "数据分布变化"
            ],
            answer: 1,
            rationale: "训练用 Pandas、推理用 SQL，细微差异（空值处理、精度、边界条件）导致模型输入分布不同，性能下降。Feature Store 统一两端逻辑。"
        },
        {
            id: "ml-w10-2-q3",
            question: "Feast 的离线存储和在线存储分别用于什么？",
            options: [
                "离线用于推理，在线用于训练",
                "离线用于批量训练特征，在线用于低延迟实时推理特征",
                "离线更贵，在线更便宜",
                "没有区别"
            ],
            answer: 1,
            rationale: "离线存储（如 BigQuery、Parquet）用于批量获取历史特征训练模型。在线存储（如 Redis）用于推理时毫秒级获取最新特征。"
        },
        {
            id: "ml-w10-2-q4",
            question: "为什么特征获取需要'时间旅行'（point-in-time correct）？",
            options: [
                "节省存储空间",
                "训练时需要获取某时间点的特征值，避免用未来数据造成数据泄露",
                "加速查询",
                "便于调试"
            ],
            answer: 1,
            rationale: "训练样本有时间戳，特征值应该是该时间点之前的值。用未来数据（模型预测时不可得）是数据泄露，模型上线后效果下降。"
        },
        {
            id: "ml-w10-2-q5",
            question: "实时特征与批量特征的主要区别是什么？",
            options: [
                "实时特征更准确",
                "实时特征用流处理计算（低延迟），批量特征定期更新（可接受延迟）",
                "批量特征只能用于训练",
                "实时特征更便宜"
            ],
            answer: 1,
            rationale: "实时特征需要流处理（Flink/Kafka）秒级更新，架构复杂。批量特征每小时/天更新即可，用普通 ETL 即可。根据业务需求选择。"
        },
        {
            id: "ml-w10-2-q6",
            question: "Feature Store 的特征发现功能解决什么问题？",
            options: [
                "自动生成特征",
                "让团队成员发现和复用已有特征，减少重复开发",
                "加速特征计算",
                "验证特征质量"
            ],
            answer: 1,
            rationale: "大团队中特征分散在各处，重复开发常见。Feature Store 提供特征目录，描述每个特征的含义、计算逻辑、数据源，便于发现和复用。"
        }
    ],
    "ml-w10-3": [
        {
            id: "ml-w10-3-q1",
            question: "ML Pipeline 自动化的主要价值是什么？",
            options: [
                "减少代码量",
                "周期性自动执行训练流程，确保可复现，减少人工错误",
                "提高模型精度",
                "减少数据量"
            ],
            answer: 1,
            rationale: "数据更新、模型重训需要周期性执行。Pipeline 自动化这个过程，确保每次执行一致，记录完整，减少人工干预错误。"
        },
        {
            id: "ml-w10-3-q2",
            question: "Kubeflow Pipelines 和 Airflow 的主要区别是什么？",
            options: [
                "Kubeflow 更快",
                "Kubeflow 是 ML 专属（Kubernetes 原生），Airflow 是通用工作流（更成熟但 ML 功能少）",
                "Airflow 只能用于 Python",
                "两者功能相同"
            ],
            answer: 1,
            rationale: "Kubeflow 专为 ML 设计，与 Kubernetes 生态集成（KServe、Katib）。Airflow 更通用成熟，适合已有 Airflow 基础设施的团队。"
        },
        {
            id: "ml-w10-3-q3",
            question: "Continuous Training (CT) 的触发条件有哪些？",
            options: [
                "只有手动触发",
                "定时、新数据到达、模型性能下降",
                "只有模型性能下降",
                "只有新数据到达"
            ],
            answer: 1,
            rationale: "CT 可以定时触发（每周重训）、数据驱动触发（新数据量达到阈值）、性能驱动触发（监控发现漂移或性能下降）。"
        },
        {
            id: "ml-w10-3-q4",
            question: "Pipeline 步骤间如何传递大数据？",
            options: [
                "作为函数参数",
                "写入中间存储（S3/GCS），下一步从存储读取",
                "写入日志",
                "存入数据库"
            ],
            answer: 1,
            rationale: "小数据（超参数、指标）作为参数传递。大数据（处理后的数据集、模型 checkpoint）写入对象存储，通过路径传递。Kubeflow Artifact 自动处理。"
        },
        {
            id: "ml-w10-3-q5",
            question: "为什么 Pipeline 中每个步骤在独立容器运行？",
            options: [
                "运行更快",
                "环境隔离，每步可以有不同依赖，失败不影响其他步骤",
                "节省内存",
                "只是 Kubeflow 的限制"
            ],
            answer: 1,
            rationale: "容器隔离确保步骤间不相互影响，每步可以用不同镜像（不同依赖）。步骤可以分布在不同节点，方便并行和扩展。"
        },
        {
            id: "ml-w10-3-q6",
            question: "Prefect 相比 Airflow 的优势是什么？",
            options: [
                "更老更成熟",
                "更 Pythonic 的 API，本地调试更方便，动态工作流更灵活",
                "只能在云端运行",
                "不支持调度"
            ],
            answer: 1,
            rationale: "Prefect 用装饰器定义任务，本地和生产环境代码一致，方便调试。支持动态生成任务，更灵活。是 Airflow 的现代替代。"
        }
    ],
    "ml-w10-4": [
        {
            id: "ml-w10-4-q1",
            question: "为什么需要监控已部署的模型？",
            options: [
                "只是合规要求",
                "真实世界数据分布会变化，模型性能会退化",
                "模型会自动改进",
                "只是为了日志记录"
            ],
            answer: 1,
            rationale: "数据分布变化（新用户群体、季节性）、概念漂移（用户行为变化）会导致模型性能下降。没有监控无法及时发现问题。"
        },
        {
            id: "ml-w10-4-q2",
            question: "Covariate Shift 和 Concept Drift 的区别是什么？",
            options: [
                "没有区别",
                "Covariate Shift 是输入分布变化，Concept Drift 是输入-输出关系变化",
                "Covariate Shift 更严重",
                "Concept Drift 只影响分类模型"
            ],
            answer: 1,
            rationale: "Covariate Shift：P(X) 变化但 P(Y|X) 不变（如用户年龄分布变化）。Concept Drift：P(Y|X) 变化（如用户对同类商品偏好变化）。"
        },
        {
            id: "ml-w10-4-q3",
            question: "如何在没有真实标签的情况下监控模型？",
            options: [
                "无法监控",
                "监控输入特征分布、预测分布、预测置信度等代理指标",
                "只能等待标签",
                "使用历史数据"
            ],
            answer: 1,
            rationale: "标签延迟期间可以监控：输入特征分布是否与训练数据一致、预测分布是否异常、低置信度预测比例等。间接反映问题。"
        },
        {
            id: "ml-w10-4-q4",
            question: "Evidently AI 的主要功能是什么？",
            options: [
                "模型训练",
                "生成数据质量、漂移、模型性能报告和可视化",
                "模型部署",
                "超参数调优"
            ],
            answer: 1,
            rationale: "Evidently 对比 reference 和 current 数据，生成漂移报告（统计检验）、数据质量报告（缺失值、范围）、模型性能报告。"
        },
        {
            id: "ml-w10-4-q5",
            question: "检测到数据漂移后应该采取什么措施？",
            options: [
                "忽略",
                "确认问题 → 根因分析 → 采取措施（重训练、回滚、调整阈值）",
                "立即停止服务",
                "只发送邮件"
            ],
            answer: 1,
            rationale: "检测到漂移不等于模型失效。需要确认是否影响性能、分析原因（业务变化还是数据问题）、决定响应（重训练、用更多数据、回滚等）。"
        },
        {
            id: "ml-w10-4-q6",
            question: "为什么漂移检测需要设置合适的窗口大小？",
            options: [
                "节省计算资源",
                "窗口太小容易误报（正常波动），窗口太大检测延迟（问题已经严重）",
                "只是为了美观",
                "窗口大小不影响结果"
            ],
            answer: 1,
            rationale: "小窗口对噪声敏感，正常随机波动可能触发告警。大窗口平滑了短期变化，但漂移严重时才能检测到。需要根据业务容忍度选择。"
        }
    ]
}
