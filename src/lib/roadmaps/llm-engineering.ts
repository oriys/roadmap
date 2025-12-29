import type { KnowledgeCard, QuizQuestion, RoadmapDefinition, Stage } from "../types"

export const llmEngineeringStages: Stage[] = [
  {
    id: "llm-foundation",
    title: "阶段一：大模型基础与提示工程",
    duration: "第 1-2 周",
    goal: "理解 LLM 工作机制、能力边界，掌握高质量提示构建与评估。",
    weeks: [
      {
        id: "llm-w1",
        title: "第 1 周：模型原理与基础概念",
        summary: "从 Transformer 架构到采样策略，掌握影响输出质量的关键因素。",
        lessons: [
          {
            id: "llm-w1-1",
            title: "Transformer 与预训练",
            detail: "理解自注意力、位置编码、预训练与指令微调的核心思路。",
            keyPoints: [
              "LLM 基于自回归方式预测下一个 token，依赖上下文窗口限制。",
              "预训练学习通用分布，指令微调/对齐提升可控性。",
              "温度、Top-p、Top-k 等采样策略影响生成多样性。",
            ],
            resources: [
              { title: "Attention Is All You Need", url: "https://arxiv.org/abs/1706.03762" },
              { title: "OpenAI: GPT-4 Technical Report", url: "https://arxiv.org/abs/2303.08774" },
              { title: "Anthropic: Prompt Caching", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching" },
            ],
          },
          {
            id: "llm-w1-2",
            title: "能力边界与安全对齐",
            detail: "识别幻觉、知识截止和指令对齐风险，学会设置防护栏。",
            keyPoints: [
              "知识截止导致模型无法知道训练后事件，可用检索或工具弥补。",
              "幻觉源于过度自信生成，需要事实性校验与引用。",
              "对齐技术（RLHF/RLAIF）与系统提示在安全性中的作用。",
            ],
            resources: [
              { title: "Hallucination in LLMs", url: "https://arxiv.org/abs/2311.05232" },
              { title: "Anthropic Safety", url: "https://www.anthropic.com/safety" },
              { title: "Prompt Injection Mitigations", url: "https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/prompt-injection" },
            ],
          },
        ],
      },
      {
        id: "llm-w2",
        title: "第 2 周：提示工程与评估",
        summary: "设计稳健提示模板，并用自动化指标评估质量与稳健性。",
        lessons: [
          {
            id: "llm-w2-1",
            title: "高质量提示模式",
            detail: "掌握角色设定、分步推理、少样本示例、约束输出等常见模式。",
            keyPoints: [
              "用明确的角色/目标/约束减少歧义，必要时加入失败示例。",
              "Chain-of-Thought 与 Self-Consistency 提升推理质量。",
              "输出格式约束：JSON schema、正则、工具调用。",
            ],
            resources: [
              { title: "OpenAI Prompting Guide", url: "https://platform.openai.com/docs/guides/prompt-engineering" },
              { title: "Anthropic Prompt Library", url: "https://docs.anthropic.com/en/prompt-library" },
              { title: "Google: Prompt Best Practices", url: "https://ai.google.dev/gemini-api/docs/prompting" },
            ],
          },
          {
            id: "llm-w2-2",
            title: "评估与对比实验",
            detail: "使用自动化评估指标与对照实验追踪提示改动效果。",
            keyPoints: [
              "离线评估：自动评分、模型评分、人审结合。",
              "在线评估：A/B 实验、用户反馈闭环。",
              "覆盖率与鲁棒性：包含越狱提示、噪声输入和长上下文。",
            ],
            resources: [
              { title: "HELM Benchmark", url: "https://crfm.stanford.edu/helm/latest/" },
              { title: "Promptfoo", url: "https://promptfoo.dev/" },
              { title: "OpenAI Evals", url: "https://github.com/openai/evals" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "llm-inference",
    title: "阶段二：推理服务与性能优化",
    duration: "第 3-4 周",
    goal: "搭建可观测、可扩展的推理服务，掌握吞吐与成本优化技巧。",
    weeks: [
      {
        id: "llm-w3",
        title: "第 3 周：服务化与路由",
        summary: "理解多模型路由、缓存与降级策略，设计高可用推理接口。",
        lessons: [
          {
            id: "llm-w3-1",
            title: "推理服务架构",
            detail: "设计多租户、限流、重试与观测管道，兼顾可靠性与成本。",
            keyPoints: [
              "选择直连云 API、私有化部署或混合模式。",
              "实现请求级重试、幂等与超时保护。",
              "Prompt 缓存与向量缓存结合减少重复调用。",
            ],
            resources: [
              { title: "vLLM", url: "https://github.com/vllm-project/vllm" },
              { title: "OpenAI Batch API", url: "https://platform.openai.com/docs/guides/batch" },
              { title: "Anthropic Rate Limits", url: "https://docs.anthropic.com/en/docs/build-with-claude/rate-limits" },
            ],
          },
          {
            id: "llm-w3-2",
            title: "模型路由与成本控制",
            detail: "根据任务、延迟与成本选择模型，加入回退与配额保护。",
            keyPoints: [
              "基于延迟/成本/质量的多模型路由策略。",
              "分层模型：快速小模型预筛 + 大模型确认。",
              "预算/配额管理与告警。",
            ],
            resources: [
              { title: "LLM Routing", url: "https://docs.latitudefinancial.com/blog/llm-routing" },
              { title: "AWS Bedrock Guardrails", url: "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html" },
              { title: "LangSmith Tracing", url: "https://docs.smith.langchain.com/" },
            ],
          },
        ],
      },
      {
        id: "llm-w4",
        title: "第 4 周：性能调优",
        summary: "掌握吞吐、延迟与内存优化技巧，熟悉常见推理加速方案。",
        lessons: [
          {
            id: "llm-w4-1",
            title: "批处理与流水线",
            detail: "利用批处理、连续批处理与流式输出平衡延迟与吞吐。",
            keyPoints: [
              "Prefill 与 Decode 阶段特性不同，应分阶段优化。",
              "Continuous Batching 提升 GPU 利用率。",
              "流式输出改善用户体验并缩短首 token 时间。",
            ],
            resources: [
              { title: "vLLM Continuous Batching", url: "https://docs.vllm.ai/en/latest/serving/production.html#continuous-batching" },
              { title: "Speculative Decoding", url: "https://arxiv.org/abs/2302.01318" },
              { title: "OpenAI Streaming", url: "https://platform.openai.com/docs/guides/streaming" },
            ],
          },
          {
            id: "llm-w4-2",
            title: "量化与 KV Cache 管理",
            detail: "通过量化、分片与 KV Cache 优化降低显存占用和成本。",
            keyPoints: [
              "常见量化方案：INT8、GPTQ、AWQ，兼顾速度与精度。",
              "PagedAttention 动态分配 KV Cache，避免碎片。",
              "冷热分层：KV Cache 与 Embedding 缓存结合。",
            ],
            resources: [
              { title: "PagedAttention", url: "https://arxiv.org/abs/2309.06180" },
              { title: "AWS Neuron Quantization", url: "https://awsdocs-neuron.readthedocs-hosted.com/en/latest/general/quantization/index.html" },
              { title: "LLM Inference Challenges", url: "https://huggingface.co/blog/llm-inference-challenges" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "llm-application",
    title: "阶段三：RAG 与安全治理",
    duration: "第 5-6 周",
    goal: "构建检索增强、工具调用与安全治理闭环，确保可上线。",
    weeks: [
      {
        id: "llm-w5",
        title: "第 5 周：RAG 与知识集成",
        summary: "把企业私有知识引入模型，兼顾相关性、时效性与可维护性。",
        lessons: [
          {
            id: "llm-w5-1",
            title: "检索链路与数据准备",
            detail: "设计分块、嵌入、索引与检索策略，避免碎片化上下文。",
            keyPoints: [
              "文本分块需兼顾语义边界，避免截断关键信息。",
              "选择向量索引（HNSW/IVF）与 BM25 混合检索提升精准度。",
              "加入引用与来源，便于事实性验证。",
            ],
            resources: [
              { title: "Vector DB: Weaviate", url: "https://weaviate.io/developers" },
              { title: "LangChain RAG Patterns", url: "https://python.langchain.com/docs/use_cases/question_answering/" },
              { title: "Cohere Rerank", url: "https://docs.cohere.com/docs/rerank-reference" },
            ],
          },
          {
            id: "llm-w5-2",
            title: "工具调用与代理",
            detail: "结合函数调用或 MCP/Serverless 工具，让模型具备行动能力。",
            keyPoints: [
              "明确工具契约：输入参数、幂等性与错误返回。",
              "短期内优先选择少量高价值工具，降低规划复杂度。",
              "可观测性：记录调用链路与成本，方便调试与审计。",
            ],
            resources: [
              { title: "Model Context Protocol", url: "https://github.com/modelcontextprotocol" },
              { title: "ReAct Paper", url: "https://arxiv.org/abs/2210.03629" },
              { title: "AWS Step Functions for AI", url: "https://aws.amazon.com/step-functions/" },
            ],
          },
        ],
      },
      {
        id: "llm-w6",
        title: "第 6 周：安全、监控与上线",
        summary: "覆盖安全防护、灰度发布与可观测性，做好生产就绪。",
        lessons: [
          {
            id: "llm-w6-1",
            title: "安全防护与隐私",
            detail: "防御提示注入、越权输出与敏感数据泄露，制定审批流程。",
            keyPoints: [
              "输入输出过滤：正则/规则 + 模型审核双层防线。",
              "PII 脱敏与最小化收集，避免向外部模型上传敏感数据。",
              "设定安全策略：数据保留、审计日志与权限控制。",
            ],
            resources: [
              { title: "OWASP LLM Top 10", url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/" },
              { title: "Azure AI Safety", url: "https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/ai-safety" },
              { title: "Google AIAL", url: "https://ai.google.dev/gemini-api/docs/safety" },
            ],
          },
          {
            id: "llm-w6-2",
            title: "观测与上线验证",
            detail: "建立端到端监控、日志与灰度策略，持续迭代模型效果。",
            keyPoints: [
              "链路追踪：记录提示、上下文、模型版本与成本。",
              "离线回放与事后分析：复现问题对话并快速修复。",
              "灰度与回滚：按用户/流量比例分流，异常时快速切换。",
            ],
            resources: [
              { title: "LLM Observability", url: "https://docs.datadoghq.com/llm_observability/" },
              { title: "LangSmith Production Guide", url: "https://docs.smith.langchain.com/how_to_guides/rag/production" },
              { title: "Honeycomb Tracing", url: "https://www.honeycomb.io/use-case/distributed-tracing" },
            ],
          },
        ],
      },
    ],
  },
]

export const llmEngineeringKnowledgeCards: KnowledgeCard[] = [
  {
    id: "llm-concepts",
    title: "核心概念速记",
    summary: "用 5 分钟回顾大模型必备概念与常见陷阱。",
    points: [
      "LLM = 预训练 + 对齐，输出受上下文窗口、采样策略与系统提示影响。",
      "幻觉不可避免，需用检索、引用与事实性评估控制。",
      "工具调用提升实时性与可操作性，但需要明确契约与安全边界。",
    ],
    practice: "用 100 字解释什么是上下文窗口、温度与幻觉，并说明各自的缓解策略。",
  },
  {
    id: "llm-eval",
    title: "评估清单",
    summary: "上线前的提示与模型改动评估清单。",
    points: [
      "覆盖主流程、越狱、长上下文、噪声输入四类用例。",
      "自动化指标（准确率/相关性/格式） + 人审样本。",
      "记录基线版本、Diff 与实验结论，避免回归。",
    ],
    practice: "选一个业务用例，编写 5 条评估样本并用 promptfoo 跑一次。",
  },
  {
    id: "llm-ops",
    title: "上线与运维",
    summary: "从接口到监控，确保生产稳定性。",
    points: [
      "限流、重试、超时、幂等是接口防线。",
      "记录模型版本、提示、上下文与成本，便于回溯。",
      "灰度/回滚策略必须提前演练。",
    ],
    practice: "为当前应用写一份“异常回放”流程，包含日志字段与回放步骤。",
  },
]

export const llmEngineeringExam: QuizQuestion[] = [
  {
    id: "llm-q1",
    question: "为什么温度设置过高容易导致幻觉增加？",
    options: [
      "高温度会让模型更偏向最高概率的 token",
      "高温度增加采样随机性，可能偏离真实分布",
      "温度只影响输出速度，不影响内容",
      "温度与幻觉无关",
    ],
    answer: 1,
    rationale: "高温度让分布更均匀，采样更随机，模型更可能生成低概率但不真实的内容。",
  },
  {
    id: "llm-q2",
    question: "Continuous Batching 的主要收益是什么？",
    options: [
      "减少 Prompt 字符数",
      "在推理过程中动态合并请求提高 GPU 利用率",
      "避免使用 KV Cache",
      "提升模型准确率",
    ],
    answer: 1,
    rationale: "连续批处理能在解码阶段不断填充新请求，提升吞吐与显存利用率。",
  },
  {
    id: "llm-q3",
    question: "RAG 中为什么需要混合检索（向量 + 关键词）？",
    options: [
      "因为向量检索成本更低",
      "因为关键词检索能消除幻觉",
      "两者互补：语义相似度与精确匹配结合提升召回与精度",
      "混合检索只为提升缓存命中率",
    ],
    answer: 2,
    rationale: "语义检索捕获相似含义，关键词检索确保精确匹配与稀有实体覆盖，组合可提升效果。",
  },
  {
    id: "llm-q4",
    question: "在多模型路由中，最重要的治理措施是哪项？",
    options: [
      "禁用所有重试",
      "记录模型选择依据与成本，加入回退与超时",
      "只使用单一模型避免复杂性",
      "取消监控以降低延迟",
    ],
    answer: 1,
    rationale: "需要可观测性与回退策略，保证路由决策可解释且在异常时能快速切换。",
  },
  {
    id: "llm-q5",
    question: "提示注入的常见防护手段不包括哪一项？",
    options: [
      "对用户输入做黑名单匹配",
      "加入越狱样本到评估集中提前发现问题",
      "在系统提示中声明安全边界并结合模型审核",
      "允许模型自主修改系统提示",
    ],
    answer: 3,
    rationale: "允许模型修改系统提示会削弱防护，正确做法是固定系统提示并增加审核与评估。",
  },
]

export const llmEngineeringRoadmap: RoadmapDefinition = {
  id: "llm-engineering",
  label: "LLM 工程实战",
  title: "LLM 工程与应用上线路线图",
  durationLabel: "6 周强化",
  description: "从模型原理、提示工程到推理服务、RAG 与安全治理，帮助团队落地可上线的大模型应用。",
  heroBadge: "LLM · Prompt · RAG · 推理优化",
  stages: llmEngineeringStages,
  knowledgeCards: llmEngineeringKnowledgeCards,
  examQuestions: llmEngineeringExam,
  suggestion: percent => {
    if (percent === 0) return "从模型基础与提示工程开始，先跑通可靠的对话体验。"
    if (percent < 40) return "补齐提示评估与安全对齐，再进入推理服务化。"
    if (percent < 70) return "开始优化推理成本与性能，加入多模型路由与缓存。"
    if (percent < 100) return "完善 RAG、工具调用与上线观测，准备安全评估与灰度发布。"
    return "恭喜完成 LLM 工程路线，保持评估与观测闭环，持续迭代！"
  },
  resourceGuide: {
    environment: "建议使用支持 GPU 的云环境（如 A10/A100）或托管推理服务，结合日志/监控平台。",
    fallbackKeyPoints: [
      "输出必须包含引用或来源，优先可验证信息。",
      "任何外部调用都要有超时/重试/降级，记录模型版本与提示。",
      "评估集需包含越狱与噪声输入，避免仅凭主流程样本。",
    ],
    handsOnSteps: [
      "创建最小聊天接口：系统提示 + 用户输入 + 结构化输出。",
      "为常见业务流程设计提示模板并配置自动评估基线。",
      "部署推理服务，开启日志、Tracing 与成本监控，设置速率与配额。",
      "实现向量检索或缓存，添加引用输出并验证事实性。",
      "灰度发布新提示/模型，记录对比结果并能一键回滚。",
    ],
    selfChecks: [
      "是否能解释当前提示/模型选择的依据与评估结果？",
      "遇到幻觉或安全问题时，能否复现、定位并修复？",
      "推理服务是否具备监控、告警、限流与回滚能力？",
    ],
    extensions: [
      "尝试 LoRA/QLoRA 微调领域模型，并对比 RAG 效果。",
      "引入 MCP 或函数调用丰富工具链，尝试多工具规划。",
      "将评估流程接入 CI/CD，让提示改动必跑基线。",
    ],
    lessonQuizAdvice: "每周完成小测验，结合自动评估样本验证模型表现。",
  },
}
