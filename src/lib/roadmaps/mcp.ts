import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const mcpStages: Stage[] = [
  // ═══════════════════════════════════════════════════════════════
  // 阶段一：大模型与 MCP 基础（第 1-3 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "mcp-foundation",
    title: "阶段一：大模型与 MCP 基础",
    duration: "第 1-3 周",
    goal: "理解大语言模型原理、MCP 协议架构与核心概念。",
    weeks: [
      {
        id: "mcp-w1",
        title: "第 1 周：大语言模型基础",
        summary: "理解 LLM 的工作原理与能力边界。",
        overview: "本周聚焦大语言模型的核心原理，从 Transformer 架构到工具使用，帮助你理解 AI 能做什么、不能做什么，以及为什么需要 MCP 这样的协议来扩展模型能力。",
        keyPoints: [
          "LLM 基于 Transformer 架构，通过预测下一个 token 工作。",
          "上下文窗口限制了模型能处理的信息量。",
          "模型本身无法访问实时数据或执行外部操作。",
        ],
        lessons: [
          {
            id: "mcp-w1-1",
            title: "LLM 工作原理",
            detail: "深入理解大语言模型的核心工作机制，包括 Transformer 架构、预训练流程与自回归推理生成过程。",
            keyPoints: [
              "Transformer 架构：自注意力机制、位置编码。",
              "预训练与微调：海量数据预训练，任务特定微调。",
              "Token 化：文本转换为 token 序列。",
              "推理过程：自回归生成，温度与采样策略。",
            ],
            resources: [
              { title: "Attention Is All You Need", url: "https://arxiv.org/abs/1706.03762" },
              { title: "OpenAI: GPT-4 Technical Report", url: "https://arxiv.org/abs/2303.08774" },
              { title: "Anthropic: Claude Documentation", url: "https://docs.anthropic.com/" },
            ],
          },
          {
            id: "mcp-w1-2",
            title: "LLM 能力与局限",
            detail: "全面了解大语言模型的能力边界与固有局限，包括知识截止、幻觉问题与上下文长度限制等关键挑战。",
            keyPoints: [
              "知识截止：训练数据有时间截止点。",
              "幻觉问题：可能生成看似合理但错误的信息。",
              "无法执行动作：模型本身不能访问网络、文件或 API。",
              "上下文限制：有最大 token 数限制。",
            ],
            resources: [
              { title: "Claude Model Card", url: "https://www.anthropic.com/claude" },
              { title: "Hallucination in LLMs", url: "https://arxiv.org/abs/2311.05232" },
              { title: "Context Window Explained", url: "https://www.anthropic.com/news/claude-2-1" },
            ],
          },
          {
            id: "mcp-w1-3",
            title: "工具使用与 Agent",
            detail: "理解如何通过工具调用和 Agent 架构扩展大语言模型的能力边界，实现与外部系统的实时交互。",
            keyPoints: [
              "Function Calling：让模型决定调用哪个函数。",
              "ReAct 模式：推理 + 行动的循环。",
              "Agent 架构：自主决策、规划、执行。",
              "工具使用的价值：实时数据、外部操作、专业计算。",
            ],
            resources: [
              { title: "Anthropic: Tool Use", url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use" },
              { title: "ReAct Paper", url: "https://arxiv.org/abs/2210.03629" },
              { title: "Building Agents", url: "https://www.anthropic.com/research/building-effective-agents" },
            ],
          },
        ],
      },
      {
        id: "mcp-w2",
        title: "第 2 周：MCP 协议概述",
        summary: "理解 Model Context Protocol 的设计理念与架构。",
        overview: "本周深入 MCP 协议本身，理解它的设计动机、客户端-服务器架构和三种核心能力（Tools、Resources、Prompts），为后续开发打下坚实的概念基础。",
        keyPoints: [
          "MCP 是连接 AI 模型与外部系统的开放标准。",
          "采用客户端-服务器架构，通过 JSON-RPC 通信。",
          "提供 Tools、Resources、Prompts 三种核心能力。",
        ],
        lessons: [
          {
            id: "mcp-w2-1",
            title: "MCP 设计理念",
            detail: "深入理解 MCP 协议的设计理念，了解它如何通过统一标准解决 AI 工具集成碎片化的核心问题。",
            keyPoints: [
              "问题：每个 AI 应用都要重新实现工具集成。",
              "解决方案：统一的协议标准，一次构建到处使用。",
              "类比：MCP 之于 AI 工具，如同 USB 之于外设。",
              "开放标准：Anthropic 开源，社区驱动。",
            ],
            resources: [
              { title: "MCP Official Site", url: "https://modelcontextprotocol.io/" },
              { title: "MCP Introduction", url: "https://modelcontextprotocol.io/introduction" },
              { title: "Anthropic MCP Announcement", url: "https://www.anthropic.com/news/model-context-protocol" },
            ],
          },
          {
            id: "mcp-w2-2",
            title: "MCP 架构",
            detail: "全面理解 MCP 的客户端-服务器架构、各核心组件的职责及其交互关系，掌握协议的通信机制。",
            keyPoints: [
              "Host：托管 AI 模型的应用（如 Claude Desktop）。",
              "Client：MCP 客户端，连接服务器。",
              "Server：提供工具、资源、提示词的服务端。",
              "传输层：stdio、HTTP+SSE 等通信方式。",
            ],
            resources: [
              { title: "MCP Architecture", url: "https://modelcontextprotocol.io/docs/concepts/architecture" },
              { title: "MCP Specification", url: "https://spec.modelcontextprotocol.io/" },
              { title: "MCP GitHub", url: "https://github.com/modelcontextprotocol" },
            ],
          },
          {
            id: "mcp-w2-3",
            title: "MCP 核心概念",
            detail: "系统掌握 MCP 提供的三种核心能力：工具调用、资源访问和提示词模板的基本概念与使用场景。",
            keyPoints: [
              "Tools：可执行的函数，模型决定何时调用。",
              "Resources：可读取的数据源，如文件、数据库记录。",
              "Prompts：预定义的提示词模板，可带参数。",
              "能力协商：客户端与服务器协商支持的功能。",
            ],
            resources: [
              { title: "MCP Tools", url: "https://modelcontextprotocol.io/docs/concepts/tools" },
              { title: "MCP Resources", url: "https://modelcontextprotocol.io/docs/concepts/resources" },
              { title: "MCP Prompts", url: "https://modelcontextprotocol.io/docs/concepts/prompts" },
            ],
          },
        ],
      },
      {
        id: "mcp-w3",
        title: "第 3 周：开发环境搭建",
        summary: "搭建 MCP 开发环境，运行第一个 MCP 服务器。",
        overview: "本周从动手实践开始，安装开发工具链、配置 MCP 宿主应用，并从零创建你的第一个 MCP 服务器，完成从理论到实践的第一步。",
        keyPoints: [
          "MCP SDK 支持 TypeScript/Python 等多种语言。",
          "Claude Desktop 是最常用的 MCP Host。",
          "Inspector 工具帮助调试 MCP 服务器。",
        ],
        lessons: [
          {
            id: "mcp-w3-1",
            title: "SDK 与工具链",
            detail: "了解并搭建 MCP 开发环境，安装官方 SDK、调试工具和命令行检查器等必备开发工具链。",
            keyPoints: [
              "TypeScript SDK：@modelcontextprotocol/sdk。",
              "Python SDK：mcp 包。",
              "create-mcp-server：快速创建项目模板。",
              "MCP Inspector：可视化调试工具。",
            ],
            resources: [
              { title: "MCP TypeScript SDK", url: "https://github.com/modelcontextprotocol/typescript-sdk" },
              { title: "MCP Python SDK", url: "https://github.com/modelcontextprotocol/python-sdk" },
              { title: "MCP Inspector", url: "https://modelcontextprotocol.io/docs/tools/inspector" },
            ],
          },
          {
            id: "mcp-w3-2",
            title: "配置 Claude Desktop",
            detail: "在 Claude Desktop 等主流宿主应用中配置和管理 MCP 服务器连接，验证工具调用功能是否正常运行。",
            keyPoints: [
              "配置文件：claude_desktop_config.json。",
              "服务器配置：command、args、env。",
              "多服务器：可同时连接多个 MCP 服务器。",
              "调试日志：启用日志排查问题。",
            ],
            resources: [
              { title: "Claude Desktop MCP", url: "https://modelcontextprotocol.io/quickstart/user" },
              { title: "Configuration Guide", url: "https://modelcontextprotocol.io/docs/tools/claude-desktop" },
              { title: "Troubleshooting", url: "https://modelcontextprotocol.io/docs/tools/debugging" },
            ],
          },
          {
            id: "mcp-w3-3",
            title: "Hello World 服务器",
            detail: "从零开始创建、编写并运行第一个 MCP 服务器，实现基础的工具注册与请求响应完整流程。",
            keyPoints: [
              "项目初始化：使用 create-mcp-server 或手动创建。",
              "基本结构：Server 实例、工具注册、启动逻辑。",
              "本地测试：使用 Inspector 测试。",
              "集成测试：在 Claude Desktop 中验证。",
            ],
            resources: [
              { title: "Quickstart", url: "https://modelcontextprotocol.io/quickstart" },
              { title: "Your First Server", url: "https://modelcontextprotocol.io/docs/first-server" },
              { title: "Example Servers", url: "https://github.com/modelcontextprotocol/servers" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段二：MCP 服务器开发（第 4-6 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "mcp-server-dev",
    title: "阶段二：MCP 服务器开发",
    duration: "第 4-6 周",
    goal: "掌握 MCP 服务器开发，实现 Tools、Resources、Prompts。",
    weeks: [
      {
        id: "mcp-w4",
        title: "第 4 周：Tools 开发",
        summary: "开发 MCP Tools，让 AI 能够执行操作。",
        overview: "本周专注于 MCP 最核心的能力——工具开发，学习如何定义、注册和实现各类工具，掌握参数设计、错误处理与安全性方面的最佳实践。",
        keyPoints: [
          "Tools 是 MCP 最强大的能力，让 AI 能执行动作。",
          "工具定义包括名称、描述、输入 Schema。",
          "好的工具描述帮助模型正确使用工具。",
        ],
        lessons: [
          {
            id: "mcp-w4-1",
            title: "Tool 定义与注册",
            detail: "学习如何使用 TypeScript SDK 定义和注册 MCP 工具，掌握输入参数校验与返回值结构设计。",
            keyPoints: [
              "工具元数据：name、description、inputSchema。",
              "JSON Schema：定义输入参数结构。",
              "工具注册：server.tool() 方法。",
              "返回值：content 数组，支持文本、图片等。",
            ],
            resources: [
              { title: "Tools Specification", url: "https://spec.modelcontextprotocol.io/specification/server/tools/" },
              { title: "Tool Examples", url: "https://modelcontextprotocol.io/docs/concepts/tools#examples" },
              { title: "JSON Schema", url: "https://json-schema.org/" },
            ],
          },
          {
            id: "mcp-w4-2",
            title: "工具实现模式",
            detail: "掌握常见的 MCP 工具实现模式，包括查询类、操作类和计算类工具的参数设计与错误处理策略。",
            keyPoints: [
              "API 调用工具：封装外部 API 调用。",
              "文件操作工具：读写本地文件。",
              "数据查询工具：查询数据库或搜索引擎。",
              "系统命令工具：执行 shell 命令（需谨慎）。",
            ],
            resources: [
              { title: "Filesystem Server", url: "https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem" },
              { title: "Fetch Server", url: "https://github.com/modelcontextprotocol/servers/tree/main/src/fetch" },
              { title: "Database Patterns", url: "https://modelcontextprotocol.io/tutorials/building-a-database-mcp" },
            ],
          },
          {
            id: "mcp-w4-3",
            title: "工具设计最佳实践",
            detail: "学习设计易用、安全且高效的 MCP 工具，掌握命名规范、权限控制与文档编写的最佳实践。",
            keyPoints: [
              "清晰的描述：帮助模型理解何时使用工具。",
              "参数验证：使用 JSON Schema 严格验证输入。",
              "错误处理：返回有意义的错误信息。",
              "幂等性：相同输入应产生相同结果。",
            ],
            resources: [
              { title: "Tool Design Guidelines", url: "https://modelcontextprotocol.io/docs/concepts/tools#best-practices" },
              { title: "Error Handling", url: "https://spec.modelcontextprotocol.io/specification/server/tools/#error-handling" },
              { title: "Security Considerations", url: "https://modelcontextprotocol.io/docs/concepts/tools#security" },
            ],
          },
        ],
      },
      {
        id: "mcp-w5",
        title: "第 5 周：Resources 开发",
        summary: "开发 MCP Resources，为 AI 提供数据访问。",
        overview: "本周学习 MCP 的资源能力，掌握如何定义静态和动态资源、使用 URI 模板，并将数据库、文件系统等数据源封装为可供 AI 读取的标准化资源。",
        keyPoints: [
          "Resources 让 AI 能读取外部数据源。",
          "使用 URI 标识资源，支持多种格式。",
          "资源可以是静态的或动态的。",
        ],
        lessons: [
          {
            id: "mcp-w5-1",
            title: "Resource 定义与暴露",
            detail: "学习如何在 MCP 服务器中定义和暴露资源，掌握静态资源声明、内容类型设置与元数据管理。",
            keyPoints: [
              "资源 URI：唯一标识资源的路径。",
              "资源元数据：name、description、mimeType。",
              "列表资源：resources/list 返回可用资源。",
              "读取资源：resources/read 返回资源内容。",
            ],
            resources: [
              { title: "Resources Specification", url: "https://spec.modelcontextprotocol.io/specification/server/resources/" },
              { title: "Resource Examples", url: "https://modelcontextprotocol.io/docs/concepts/resources#examples" },
              { title: "URI Templates", url: "https://modelcontextprotocol.io/docs/concepts/resources#uri-templates" },
            ],
          },
          {
            id: "mcp-w5-2",
            title: "动态资源与模板",
            detail: "实现基于 URI 模板的动态资源访问，支持参数化路径匹配与运行时资源内容的动态生成。",
            keyPoints: [
              "URI 模板：file:///{path} 支持参数化。",
              "动态列表：根据条件返回不同资源列表。",
              "资源订阅：通知客户端资源变化。",
              "分页：大量资源的分页处理。",
            ],
            resources: [
              { title: "Dynamic Resources", url: "https://modelcontextprotocol.io/docs/concepts/resources#dynamic-resources" },
              { title: "Resource Templates", url: "https://spec.modelcontextprotocol.io/specification/server/resources/#resource-templates" },
              { title: "Subscriptions", url: "https://spec.modelcontextprotocol.io/specification/server/resources/#subscriptions" },
            ],
          },
          {
            id: "mcp-w5-3",
            title: "常见资源类型",
            detail: "实现各类数据源的资源访问，将数据库查询结果、文件内容和远程接口数据封装为标准化 MCP 资源。",
            keyPoints: [
              "文件资源：本地文件系统访问。",
              "数据库资源：表、记录、查询结果。",
              "API 资源：REST API 数据。",
              "内容格式：text/plain、application/json、image/*。",
            ],
            resources: [
              { title: "File Resources", url: "https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem" },
              { title: "Database Resources", url: "https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite" },
              { title: "MIME Types", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types" },
            ],
          },
        ],
      },
      {
        id: "mcp-w6",
        title: "第 6 周：Prompts 与高级功能",
        summary: "开发 Prompts 和其他高级服务器功能。",
        overview: "本周探索 MCP 的提示词模板、采样和日志通知等高级功能，学习如何构建功能完善、可观测的生产级 MCP 服务器。",
        keyPoints: [
          "Prompts 提供可复用的提示词模板。",
          "Sampling 让服务器请求模型生成。",
          "日志和进度报告提升用户体验。",
        ],
        lessons: [
          {
            id: "mcp-w6-1",
            title: "Prompts 开发",
            detail: "创建可复用的 MCP 提示词模板，学习参数化模板设计、多步骤提示组合与上下文注入技巧。",
            keyPoints: [
              "Prompt 定义：name、description、arguments。",
              "参数化提示：动态生成提示词内容。",
              "多消息提示：包含 user/assistant 角色。",
              "嵌入资源：在提示中引用 MCP 资源。",
            ],
            resources: [
              { title: "Prompts Specification", url: "https://spec.modelcontextprotocol.io/specification/server/prompts/" },
              { title: "Prompt Examples", url: "https://modelcontextprotocol.io/docs/concepts/prompts#examples" },
              { title: "Prompt Arguments", url: "https://modelcontextprotocol.io/docs/concepts/prompts#arguments" },
            ],
          },
          {
            id: "mcp-w6-2",
            title: "Sampling 能力",
            detail: "通过 MCP 采样功能让服务器端主动请求 AI 模型生成内容，实现服务器驱动的智能处理流程。",
            keyPoints: [
              "Sampling：服务器请求客户端的 AI 模型生成。",
              "使用场景：Agentic 工作流、内容生成。",
              "人机交互：可配置是否需要用户确认。",
              "嵌套调用：AI 调用工具，工具再调用 AI。",
            ],
            resources: [
              { title: "Sampling", url: "https://modelcontextprotocol.io/docs/concepts/sampling" },
              { title: "Sampling Spec", url: "https://spec.modelcontextprotocol.io/specification/client/sampling/" },
              { title: "Agentic Patterns", url: "https://modelcontextprotocol.io/docs/concepts/sampling#agentic-patterns" },
            ],
          },
          {
            id: "mcp-w6-3",
            title: "日志与进度",
            detail: "实现 MCP 服务器的结构化日志输出和任务进度报告，帮助客户端实时追踪长时间运行操作的状态。",
            keyPoints: [
              "日志级别：debug、info、warning、error。",
              "notifications/message：发送日志到客户端。",
              "进度报告：长时间操作的进度更新。",
              "结构化日志：便于调试和监控。",
            ],
            resources: [
              { title: "Logging", url: "https://spec.modelcontextprotocol.io/specification/server/utilities/logging/" },
              { title: "Progress", url: "https://spec.modelcontextprotocol.io/specification/basic/utilities/" },
              { title: "Notifications", url: "https://spec.modelcontextprotocol.io/specification/basic/notifications/" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段三：MCP 客户端与集成（第 7-9 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "mcp-client-integration",
    title: "阶段三：MCP 客户端与集成",
    duration: "第 7-9 周",
    goal: "掌握 MCP 客户端开发与系统集成。",
    weeks: [
      {
        id: "mcp-w7",
        title: "第 7 周：MCP 客户端开发",
        summary: "开发 MCP 客户端，连接和使用 MCP 服务器。",
        overview: "本周从消费者视角学习 MCP，开发自己的客户端程序，理解连接管理、能力协商和多服务器路由等关键机制。",
        keyPoints: [
          "客户端负责连接服务器、调用工具、读取资源。",
          "需要实现连接管理、能力协商、请求处理。",
          "客户端可以集成到各种 AI 应用中。",
        ],
        lessons: [
          {
            id: "mcp-w7-1",
            title: "客户端基础",
            detail: "深入理解 MCP 客户端的核心职责，学习如何实现连接管理、能力协商和工具调用结果处理。",
            keyPoints: [
              "连接管理：建立、维护、断开连接。",
              "能力协商：initialize 阶段交换能力信息。",
              "请求/响应：JSON-RPC 消息处理。",
              "错误处理：处理各类错误情况。",
            ],
            resources: [
              { title: "Client Specification", url: "https://spec.modelcontextprotocol.io/specification/basic/lifecycle/" },
              { title: "TypeScript Client", url: "https://github.com/modelcontextprotocol/typescript-sdk/tree/main/src/client" },
              { title: "Python Client", url: "https://github.com/modelcontextprotocol/python-sdk/tree/main/src/mcp/client" },
            ],
          },
          {
            id: "mcp-w7-2",
            title: "传输层实现",
            detail: "实现 MCP 协议支持的多种传输方式，包括标准输入输出和可流式传输的 HTTP 等通信通道的配置与切换。",
            keyPoints: [
              "stdio：标准输入输出，本地进程通信。",
              "HTTP + SSE：服务器发送事件，远程通信。",
              "自定义传输：实现 Transport 接口。",
              "传输选择：本地用 stdio，远程用 HTTP。",
            ],
            resources: [
              { title: "Transports", url: "https://modelcontextprotocol.io/docs/concepts/transports" },
              { title: "stdio Transport", url: "https://spec.modelcontextprotocol.io/specification/basic/transports/#stdio" },
              { title: "HTTP Transport", url: "https://spec.modelcontextprotocol.io/specification/basic/transports/#http-with-sse" },
            ],
          },
          {
            id: "mcp-w7-3",
            title: "多服务器管理",
            detail: "实现同时管理多个 MCP 服务器连接的客户端，处理服务发现、连接池化与跨服务器的工具路由分发。",
            keyPoints: [
              "服务器发现：配置或动态发现服务器。",
              "并发连接：同时连接多个服务器。",
              "工具路由：根据工具名称路由到正确服务器。",
              "故障处理：服务器断开的重连策略。",
            ],
            resources: [
              { title: "Multi-Server", url: "https://modelcontextprotocol.io/docs/concepts/architecture#multiple-servers" },
              { title: "Connection Management", url: "https://spec.modelcontextprotocol.io/specification/basic/lifecycle/#connection" },
              { title: "Error Handling", url: "https://spec.modelcontextprotocol.io/specification/basic/errors/" },
            ],
          },
        ],
      },
      {
        id: "mcp-w8",
        title: "第 8 周：与 AI 框架集成",
        summary: "将 MCP 集成到 AI 应用框架中。",
        overview: "本周学习将 MCP 与 LangChain、Anthropic SDK 等主流 AI 框架集成，让现有应用无缝接入 MCP 工具生态，实现功能增强。",
        keyPoints: [
          "MCP 可以集成到各种 AI 开发框架。",
          "需要将 MCP 工具转换为框架的工具格式。",
          "处理工具调用结果并返回给模型。",
        ],
        lessons: [
          {
            id: "mcp-w8-1",
            title: "LangChain 集成",
            detail: "在 LangChain 框架中集成和使用 MCP 工具，实现工具自动发现、链式调用与对话上下文管理。",
            keyPoints: [
              "工具适配：将 MCP Tool 转为 LangChain Tool。",
              "Agent 集成：在 Agent 中使用 MCP 工具。",
              "Chain 组合：MCP 工具与其他组件配合。",
              "错误处理：处理 MCP 调用失败。",
            ],
            resources: [
              { title: "LangChain Tools", url: "https://python.langchain.com/docs/modules/tools/" },
              { title: "LangChain MCP", url: "https://github.com/langchain-ai/langchain/tree/master/libs/partners/mcp" },
              { title: "Custom Tools", url: "https://python.langchain.com/docs/modules/tools/custom_tools" },
            ],
          },
          {
            id: "mcp-w8-2",
            title: "Anthropic SDK 集成",
            detail: "直接使用 Anthropic SDK 与 MCP 服务器交互，实现原生工具调用、流式响应处理与会话状态管理。",
            keyPoints: [
              "Tool Use：Claude API 的原生工具使用。",
              "工具定义转换：MCP Schema 到 Claude 格式。",
              "流式响应：处理流式工具调用。",
              "多轮对话：维护工具调用上下文。",
            ],
            resources: [
              { title: "Anthropic Tool Use", url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use" },
              { title: "Anthropic SDK", url: "https://github.com/anthropics/anthropic-sdk-python" },
              { title: "Streaming", url: "https://docs.anthropic.com/en/api/streaming" },
            ],
          },
          {
            id: "mcp-w8-3",
            title: "其他框架集成",
            detail: "探索与更多主流 AI 框架的集成方案，包括 LlamaIndex 和 AutoGen 等框架的适配器开发与调用模式。",
            keyPoints: [
              "Vercel AI SDK：Next.js 应用中使用 MCP。",
              "Semantic Kernel：.NET 生态的 AI 框架。",
              "Haystack：文档处理和 RAG 框架。",
              "通用模式：工具转换、调用代理、结果处理。",
            ],
            resources: [
              { title: "Vercel AI SDK", url: "https://sdk.vercel.ai/docs" },
              { title: "Semantic Kernel", url: "https://learn.microsoft.com/en-us/semantic-kernel/" },
              { title: "Haystack", url: "https://haystack.deepset.ai/" },
            ],
          },
        ],
      },
      {
        id: "mcp-w9",
        title: "第 9 周：数据源集成",
        summary: "将各类数据源通过 MCP 暴露给 AI。",
        overview: "本周聚焦真实数据集成场景，学习通过 MCP 连接数据库、文件系统和外部 API，构建实用的数据访问服务。",
        keyPoints: [
          "数据库、文件系统、API 都可以通过 MCP 访问。",
          "需要考虑数据安全和访问控制。",
          "缓存和性能优化对大数据源很重要。",
        ],
        lessons: [
          {
            id: "mcp-w9-1",
            title: "数据库集成",
            detail: "通过 MCP 服务器安全地访问和操作数据库，实现查询构建、结果格式化与连接池等核心数据层功能。",
            keyPoints: [
              "SQL 数据库：PostgreSQL、MySQL、SQLite。",
              "查询工具：执行 SQL 查询。",
              "Schema 资源：暴露表结构信息。",
              "安全考虑：只读访问、SQL 注入防护。",
            ],
            resources: [
              { title: "SQLite Server", url: "https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite" },
              { title: "PostgreSQL Server", url: "https://github.com/modelcontextprotocol/servers/tree/main/src/postgres" },
              { title: "Database Security", url: "https://modelcontextprotocol.io/docs/concepts/tools#security" },
            ],
          },
          {
            id: "mcp-w9-2",
            title: "文件与文档",
            detail: "通过 MCP 服务器访问本地文件和文档，支持文件读写、目录遍历、内容搜索与格式转换等操作。",
            keyPoints: [
              "文件系统：读取、搜索、监控文件。",
              "文档格式：PDF、Word、Markdown 解析。",
              "向量存储：语义搜索集成。",
              "权限控制：限制可访问的目录。",
            ],
            resources: [
              { title: "Filesystem Server", url: "https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem" },
              { title: "Memory Server", url: "https://github.com/modelcontextprotocol/servers/tree/main/src/memory" },
              { title: "Document Processing", url: "https://modelcontextprotocol.io/tutorials" },
            ],
          },
          {
            id: "mcp-w9-3",
            title: "外部 API 集成",
            detail: "将外部 REST 和 GraphQL 接口封装为标准 MCP 服务，处理认证、速率限制、数据转换与错误映射。",
            keyPoints: [
              "REST API：HTTP 请求封装。",
              "GraphQL：查询和变更操作。",
              "认证处理：API Key、OAuth Token。",
              "速率限制：遵守 API 调用限制。",
            ],
            resources: [
              { title: "Fetch Server", url: "https://github.com/modelcontextprotocol/servers/tree/main/src/fetch" },
              { title: "GitHub Server", url: "https://github.com/modelcontextprotocol/servers/tree/main/src/github" },
              { title: "Slack Server", url: "https://github.com/modelcontextprotocol/servers/tree/main/src/slack" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段四：高级模式与安全（第 10-12 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "mcp-advanced",
    title: "阶段四：高级模式与安全",
    duration: "第 10-12 周",
    goal: "掌握高级开发模式和安全最佳实践。",
    weeks: [
      {
        id: "mcp-w10",
        title: "第 10 周：Agentic 工作流",
        summary: "构建复杂的 AI Agent 工作流。",
        overview: "本周进入高级应用层面，学习基于 MCP 设计和实现智能 Agent 工作流，包括多 Agent 协作与人机协作模式。",
        keyPoints: [
          "Agent 可以自主决策、规划和执行任务。",
          "复杂任务需要多步骤、多工具协作。",
          "人机协作确保关键操作的安全性。",
        ],
        lessons: [
          {
            id: "mcp-w10-1",
            title: "Agent 架构模式",
            detail: "设计基于 MCP 的智能 Agent 工作流架构，规划任务分解、工具选择策略与执行流程编排方案。",
            keyPoints: [
              "ReAct 模式：推理-行动循环。",
              "计划-执行：先规划再执行。",
              "工具链：多工具顺序调用。",
              "状态管理：维护 Agent 执行状态。",
            ],
            resources: [
              { title: "Building Agents", url: "https://www.anthropic.com/research/building-effective-agents" },
              { title: "ReAct Pattern", url: "https://arxiv.org/abs/2210.03629" },
              { title: "Agent Patterns", url: "https://modelcontextprotocol.io/docs/concepts/sampling#agentic-patterns" },
            ],
          },
          {
            id: "mcp-w10-2",
            title: "多 Agent 协作",
            detail: "实现多个智能 Agent 之间的协作通信，设计任务分配、结果汇聚与冲突解决的协调机制。",
            keyPoints: [
              "Agent 通信：Agent 间消息传递。",
              "任务分解：将复杂任务分配给专业 Agent。",
              "结果聚合：整合多个 Agent 的输出。",
              "冲突解决：处理 Agent 决策冲突。",
            ],
            resources: [
              { title: "Multi-Agent Systems", url: "https://arxiv.org/abs/2308.08155" },
              { title: "Agent Communication", url: "https://modelcontextprotocol.io/docs/concepts/sampling" },
              { title: "Orchestration", url: "https://www.anthropic.com/research/building-effective-agents#orchestration" },
            ],
          },
          {
            id: "mcp-w10-3",
            title: "人机协作",
            detail: "实现人在回路的 Agent 工作流，在关键决策点引入人工审批与干预机制确保操作安全可控。",
            keyPoints: [
              "确认机制：关键操作需用户确认。",
              "审批流程：敏感操作的多级审批。",
              "中断恢复：用户可暂停和恢复执行。",
              "反馈循环：用户反馈改进 Agent 行为。",
            ],
            resources: [
              { title: "Human in the Loop", url: "https://modelcontextprotocol.io/docs/concepts/sampling#human-in-the-loop" },
              { title: "Approval Flows", url: "https://www.anthropic.com/research/building-effective-agents#guardrails" },
              { title: "User Feedback", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching" },
            ],
          },
        ],
      },
      {
        id: "mcp-w11",
        title: "第 11 周：安全与权限",
        summary: "实现 MCP 应用的安全控制。",
        keyPoints: [
          "安全是 MCP 应用的首要考虑。",
          "需要认证、授权和输入验证。",
          "敏感操作需要额外保护。",
        ],
        lessons: [
          {
            id: "mcp-w11-1",
            title: "认证与授权",
            detail: "实现 MCP 服务器的身份验证和细粒度权限控制，集成 OAuth 认证协议并设计基于角色的访问策略。",
            keyPoints: [
              "服务器认证：验证客户端身份。",
              "工具权限：基于角色的工具访问控制。",
              "资源权限：限制可访问的资源范围。",
              "Token 管理：安全存储和传递凭证。",
            ],
            resources: [
              { title: "Security Specification", url: "https://spec.modelcontextprotocol.io/specification/basic/security/" },
              { title: "Authentication", url: "https://modelcontextprotocol.io/docs/concepts/transports#authentication" },
              { title: "Authorization Patterns", url: "https://modelcontextprotocol.io/docs/concepts/tools#authorization" },
            ],
          },
          {
            id: "mcp-w11-2",
            title: "输入验证与净化",
            detail: "防止针对 MCP 工具的恶意输入和注入攻击，实现严格的参数校验、输入净化与提示词注入防御机制。",
            keyPoints: [
              "Schema 验证：严格验证工具输入。",
              "路径遍历：防止访问非授权文件。",
              "SQL 注入：参数化查询。",
              "命令注入：避免直接执行用户输入。",
            ],
            resources: [
              { title: "Input Validation", url: "https://modelcontextprotocol.io/docs/concepts/tools#input-validation" },
              { title: "OWASP Injection", url: "https://owasp.org/www-community/Injection_Flaws" },
              { title: "Path Traversal", url: "https://owasp.org/www-community/attacks/Path_Traversal" },
            ],
          },
          {
            id: "mcp-w11-3",
            title: "敏感操作保护",
            detail: "为 MCP 服务器中的高风险操作建立安全防护，实现操作沙箱隔离、资源访问限制与审计日志记录。",
            keyPoints: [
              "操作分级：根据风险级别分类操作。",
              "双重确认：敏感操作需二次确认。",
              "审计日志：记录所有敏感操作。",
              "撤销机制：支持操作回滚。",
            ],
            resources: [
              { title: "Sensitive Operations", url: "https://modelcontextprotocol.io/docs/concepts/tools#sensitive-operations" },
              { title: "Audit Logging", url: "https://spec.modelcontextprotocol.io/specification/server/utilities/logging/" },
              { title: "Security Best Practices", url: "https://modelcontextprotocol.io/docs/concepts/tools#security-best-practices" },
            ],
          },
        ],
      },
      {
        id: "mcp-w12",
        title: "第 12 周：性能与可靠性",
        summary: "优化 MCP 应用的性能和可靠性。",
        keyPoints: [
          "性能对用户体验至关重要。",
          "需要考虑并发、缓存和错误恢复。",
          "监控帮助发现和解决问题。",
        ],
        lessons: [
          {
            id: "mcp-w12-1",
            title: "性能优化",
            detail: "全面优化 MCP 服务器的运行性能，实现请求缓存、连接复用、异步处理与资源懒加载等关键策略。",
            keyPoints: [
              "连接池：复用数据库和 HTTP 连接。",
              "缓存策略：缓存频繁访问的数据。",
              "异步处理：非阻塞 I/O 操作。",
              "批量操作：合并多个请求。",
            ],
            resources: [
              { title: "Performance", url: "https://modelcontextprotocol.io/docs/concepts/transports#performance" },
              { title: "Caching Patterns", url: "https://aws.amazon.com/caching/" },
              { title: "Async Patterns", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous" },
            ],
          },
          {
            id: "mcp-w12-2",
            title: "错误处理与恢复",
            detail: "实现 MCP 服务器健壮的错误处理机制，包括异常分类、优雅降级、自动重试与客户端友好的错误消息。",
            keyPoints: [
              "错误分类：可恢复 vs 不可恢复错误。",
              "重试策略：指数退避重试。",
              "熔断器：防止级联失败。",
              "优雅降级：部分功能不可用时的处理。",
            ],
            resources: [
              { title: "Error Handling", url: "https://spec.modelcontextprotocol.io/specification/basic/errors/" },
              { title: "Retry Patterns", url: "https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/" },
              { title: "Circuit Breaker", url: "https://martinfowler.com/bliki/CircuitBreaker.html" },
            ],
          },
          {
            id: "mcp-w12-3",
            title: "监控与可观测性",
            detail: "建立完善的 MCP 应用监控和可观测性体系，集成指标采集、分布式追踪与告警通知等运维能力。",
            keyPoints: [
              "指标收集：请求量、延迟、错误率。",
              "分布式追踪：跨服务请求追踪。",
              "告警设置：异常情况及时通知。",
              "仪表板：可视化系统状态。",
            ],
            resources: [
              { title: "Observability", url: "https://opentelemetry.io/" },
              { title: "Metrics", url: "https://prometheus.io/docs/concepts/metric_types/" },
              { title: "Tracing", url: "https://www.jaegertracing.io/" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段五：生产部署（第 13-15 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "mcp-production",
    title: "阶段五：生产部署",
    duration: "第 13-15 周",
    goal: "掌握 MCP 应用的生产部署和运维。",
    weeks: [
      {
        id: "mcp-w13",
        title: "第 13 周：容器化部署",
        summary: "使用容器技术部署 MCP 服务。",
        keyPoints: [
          "容器化简化部署和环境一致性。",
          "Docker 是最常用的容器运行时。",
          "多阶段构建优化镜像大小。",
        ],
        lessons: [
          {
            id: "mcp-w13-1",
            title: "Docker 化 MCP 服务",
            detail: "将 MCP 服务打包为高效精简的 Docker 镜像，优化多阶段构建流程并配置健康检查与资源限制。",
            keyPoints: [
              "Dockerfile：多阶段构建，最小化镜像。",
              "基础镜像：Node.js/Python 官方镜像。",
              "环境变量：配置管理。",
              "健康检查：容器健康状态监测。",
            ],
            resources: [
              { title: "Docker Best Practices", url: "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/" },
              { title: "Node.js Docker", url: "https://nodejs.org/en/docs/guides/nodejs-docker-webapp" },
              { title: "Python Docker", url: "https://docs.docker.com/language/python/" },
            ],
          },
          {
            id: "mcp-w13-2",
            title: "Docker Compose 编排",
            detail: "使用 Docker Compose 编排和管理多个关联的 MCP 服务容器，配置网络、存储卷与依赖启动顺序。",
            keyPoints: [
              "服务定义：MCP 服务器、数据库、缓存。",
              "网络配置：服务间通信。",
              "卷挂载：持久化数据。",
              "开发环境：本地开发的 Compose 配置。",
            ],
            resources: [
              { title: "Docker Compose", url: "https://docs.docker.com/compose/" },
              { title: "Compose File", url: "https://docs.docker.com/compose/compose-file/" },
              { title: "Networking", url: "https://docs.docker.com/compose/networking/" },
            ],
          },
          {
            id: "mcp-w13-3",
            title: "远程 MCP 服务",
            detail: "部署可远程访问的 MCP 服务到云端环境，配置安全传输通道、域名解析与负载均衡等基础设施。",
            keyPoints: [
              "HTTP 传输：使用 HTTP + SSE。",
              "TLS 加密：HTTPS 保护通信。",
              "反向代理：Nginx/Traefik 前置。",
              "CORS 配置：跨域访问控制。",
            ],
            resources: [
              { title: "HTTP Transport", url: "https://spec.modelcontextprotocol.io/specification/basic/transports/#http-with-sse" },
              { title: "Nginx Reverse Proxy", url: "https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/" },
              { title: "TLS Configuration", url: "https://ssl-config.mozilla.org/" },
            ],
          },
        ],
      },
      {
        id: "mcp-w14",
        title: "第 14 周：Kubernetes 部署",
        summary: "在 Kubernetes 上运行 MCP 服务。",
        keyPoints: [
          "Kubernetes 提供生产级的容器编排。",
          "支持自动扩缩、滚动更新、服务发现。",
          "需要考虑有状态和无状态服务。",
        ],
        lessons: [
          {
            id: "mcp-w14-1",
            title: "K8s 资源定义",
            detail: "为 MCP 服务定义 Kubernetes 部署清单，编写标准化的工作负载、服务发现与配置管理资源声明。",
            keyPoints: [
              "Deployment：无状态服务部署。",
              "Service：服务发现和负载均衡。",
              "ConfigMap/Secret：配置和密钥管理。",
              "Ingress：外部访问入口。",
            ],
            resources: [
              { title: "Kubernetes Basics", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/" },
              { title: "Deployments", url: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/" },
              { title: "Services", url: "https://kubernetes.io/docs/concepts/services-networking/service/" },
            ],
          },
          {
            id: "mcp-w14-2",
            title: "扩缩与高可用",
            detail: "实现 MCP 服务在 Kubernetes 上的弹性扩缩容策略，配置水平自动伸缩、资源配额与健康探针。",
            keyPoints: [
              "HPA：基于指标的自动扩缩。",
              "副本数：多副本保证高可用。",
              "反亲和性：分散部署到不同节点。",
              "PDB：维护期间的可用性保证。",
            ],
            resources: [
              { title: "HPA", url: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/" },
              { title: "Pod Disruption Budget", url: "https://kubernetes.io/docs/concepts/workloads/pods/disruptions/" },
              { title: "High Availability", url: "https://kubernetes.io/docs/setup/production-environment/" },
            ],
          },
          {
            id: "mcp-w14-3",
            title: "Helm Charts",
            detail: "使用 Helm Charts 模板化管理 MCP 服务的 Kubernetes 部署配置，支持多环境参数化与版本化发布。",
            keyPoints: [
              "Chart 结构：templates、values、Chart.yaml。",
              "Values 覆盖：环境特定配置。",
              "依赖管理：Chart 依赖。",
              "发布管理：版本控制和回滚。",
            ],
            resources: [
              { title: "Helm", url: "https://helm.sh/docs/" },
              { title: "Chart Development", url: "https://helm.sh/docs/chart_template_guide/" },
              { title: "Best Practices", url: "https://helm.sh/docs/chart_best_practices/" },
            ],
          },
        ],
      },
      {
        id: "mcp-w15",
        title: "第 15 周：CI/CD 与运维",
        summary: "建立 MCP 应用的持续交付流程。",
        keyPoints: [
          "CI/CD 自动化构建、测试和部署。",
          "GitOps 实现声明式部署管理。",
          "运维自动化减少人工干预。",
        ],
        lessons: [
          {
            id: "mcp-w15-1",
            title: "CI/CD 流水线",
            detail: "构建 MCP 应用的完整持续集成和持续部署流水线，自动化测试、构建、镜像推送与环境部署流程。",
            keyPoints: [
              "代码检查：lint、类型检查、安全扫描。",
              "自动化测试：单元测试、集成测试。",
              "镜像构建：构建并推送 Docker 镜像。",
              "部署触发：自动或手动部署。",
            ],
            resources: [
              { title: "GitHub Actions", url: "https://docs.github.com/en/actions" },
              { title: "GitLab CI", url: "https://docs.gitlab.com/ee/ci/" },
              { title: "Container Registry", url: "https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry" },
            ],
          },
          {
            id: "mcp-w15-2",
            title: "GitOps 部署",
            detail: "使用 GitOps 模式管理 MCP 服务的声明式部署，通过代码仓库驱动基础设施变更与自动化同步。",
            keyPoints: [
              "声明式配置：Git 仓库作为唯一真相来源。",
              "ArgoCD/Flux：GitOps 工具。",
              "自动同步：检测变更自动部署。",
              "回滚：Git 回滚即部署回滚。",
            ],
            resources: [
              { title: "ArgoCD", url: "https://argo-cd.readthedocs.io/" },
              { title: "Flux", url: "https://fluxcd.io/docs/" },
              { title: "GitOps Principles", url: "https://opengitops.dev/" },
            ],
          },
          {
            id: "mcp-w15-3",
            title: "运维最佳实践",
            detail: "掌握 MCP 服务在生产环境中的日常运维操作，包括版本升级、配置变更、故障排查与容量规划。",
            keyPoints: [
              "日志聚合：集中收集和分析日志。",
              "告警响应：定义告警规则和响应流程。",
              "容量规划：基于使用趋势规划资源。",
              "灾难恢复：备份和恢复策略。",
            ],
            resources: [
              { title: "Logging Stack", url: "https://www.elastic.co/elastic-stack" },
              { title: "Alerting", url: "https://prometheus.io/docs/alerting/latest/overview/" },
              { title: "Disaster Recovery", url: "https://kubernetes.io/docs/tasks/administer-cluster/" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段六：生态与实战（第 16-18 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "mcp-ecosystem",
    title: "阶段六：生态与实战",
    duration: "第 16-18 周",
    goal: "了解 MCP 生态系统，完成综合实战项目。",
    weeks: [
      {
        id: "mcp-w16",
        title: "第 16 周：MCP 生态系统",
        summary: "了解 MCP 社区和生态资源。",
        keyPoints: [
          "社区贡献了大量开源 MCP 服务器。",
          "各类工具覆盖常见使用场景。",
          "可以学习和复用社区成果。",
        ],
        lessons: [
          {
            id: "mcp-w16-1",
            title: "官方服务器",
            detail: "深入了解 Anthropic 官方提供的各类 MCP 参考服务器，学习其设计模式、功能实现与最佳实践。",
            keyPoints: [
              "Filesystem：文件系统访问。",
              "GitHub：仓库、Issue、PR 操作。",
              "Slack：消息发送和频道管理。",
              "Google Drive：文档访问和搜索。",
            ],
            resources: [
              { title: "Official Servers", url: "https://github.com/modelcontextprotocol/servers" },
              { title: "Server List", url: "https://modelcontextprotocol.io/docs/servers" },
              { title: "Examples", url: "https://github.com/modelcontextprotocol/servers/tree/main/src" },
            ],
          },
          {
            id: "mcp-w16-2",
            title: "社区服务器",
            detail: "探索社区开发者贡献的各类 MCP 服务器资源，了解热门项目的功能特色、集成方式与使用技巧。",
            keyPoints: [
              "数据库：各类数据库连接器。",
              "云服务：AWS、GCP、Azure 集成。",
              "开发工具：IDE、终端、Git 集成。",
              "生产力：日历、邮件、笔记应用。",
            ],
            resources: [
              { title: "Awesome MCP", url: "https://github.com/punkpeye/awesome-mcp-servers" },
              { title: "MCP Hub", url: "https://mcphub.io/" },
              { title: "Community Showcase", url: "https://modelcontextprotocol.io/docs/community" },
            ],
          },
          {
            id: "mcp-w16-3",
            title: "贡献与参与",
            detail: "积极参与 MCP 开源社区的贡献活动，学习提交高质量代码、撰写文档与参与协议标准讨论的流程。",
            keyPoints: [
              "贡献代码：提交 PR 到官方仓库。",
              "报告问题：发现 Bug 或提出建议。",
              "分享服务器：发布自己的 MCP 服务器。",
              "文档改进：完善文档和示例。",
            ],
            resources: [
              { title: "Contributing", url: "https://github.com/modelcontextprotocol/servers/blob/main/CONTRIBUTING.md" },
              { title: "MCP Discord", url: "https://discord.gg/anthropic" },
              { title: "Publishing Servers", url: "https://modelcontextprotocol.io/docs/publishing" },
            ],
          },
        ],
      },
      {
        id: "mcp-w17",
        title: "第 17 周：综合实战项目",
        summary: "完成一个完整的 MCP 应用项目。",
        keyPoints: [
          "综合运用所学知识构建实际应用。",
          "从需求分析到部署的完整流程。",
          "关注代码质量和用户体验。",
        ],
        lessons: [
          {
            id: "mcp-w17-1",
            title: "项目规划",
            detail: "系统规划综合实战项目的架构设计与功能模块，明确技术选型、开发里程碑与交付标准。",
            keyPoints: [
              "需求分析：明确要解决的问题。",
              "功能设计：工具、资源、提示词清单。",
              "架构设计：组件划分和交互流程。",
              "技术选型：语言、框架、部署方式。",
            ],
            resources: [
              { title: "Project Planning", url: "https://modelcontextprotocol.io/tutorials" },
              { title: "Architecture Patterns", url: "https://modelcontextprotocol.io/docs/concepts/architecture" },
              { title: "Best Practices", url: "https://modelcontextprotocol.io/docs/concepts/tools#best-practices" },
            ],
          },
          {
            id: "mcp-w17-2",
            title: "开发实现",
            detail: "动手实现综合实战项目的核心功能模块，完成主要工具开发、资源集成与端到端业务流程验证。",
            keyPoints: [
              "服务器开发：实现 Tools、Resources、Prompts。",
              "测试覆盖：单元测试和集成测试。",
              "文档编写：API 文档和使用说明。",
              "代码审查：确保代码质量。",
            ],
            resources: [
              { title: "TypeScript SDK", url: "https://github.com/modelcontextprotocol/typescript-sdk" },
              { title: "Testing", url: "https://modelcontextprotocol.io/docs/tools/inspector" },
              { title: "Documentation", url: "https://modelcontextprotocol.io/docs/publishing#documentation" },
            ],
          },
          {
            id: "mcp-w17-3",
            title: "部署上线",
            detail: "将完成的综合实战项目部署到生产环境，完成最终测试、性能调优、文档编写与上线发布流程。",
            keyPoints: [
              "容器化：构建 Docker 镜像。",
              "部署配置：环境变量、密钥管理。",
              "监控设置：日志、指标、告警。",
              "用户测试：收集反馈和迭代。",
            ],
            resources: [
              { title: "Deployment Guide", url: "https://modelcontextprotocol.io/docs/deployment" },
              { title: "Monitoring", url: "https://prometheus.io/" },
              { title: "User Feedback", url: "https://modelcontextprotocol.io/docs/community" },
            ],
          },
        ],
      },
      {
        id: "mcp-w18",
        title: "第 18 周：未来展望",
        summary: "了解 MCP 的发展方向和未来趋势。",
        keyPoints: [
          "MCP 协议仍在快速演进。",
          "AI Agent 生态正在形成。",
          "更多标准化工作正在进行。",
        ],
        lessons: [
          {
            id: "mcp-w18-1",
            title: "协议演进",
            detail: "持续关注 MCP 协议的最新发展动态与版本演进，了解新增特性、规范变更与未来技术路线规划。",
            keyPoints: [
              "版本迭代：协议新特性和改进。",
              "向后兼容：保持兼容性的策略。",
              "RFC 流程：新特性的提案流程。",
              "路线图：官方发展计划。",
            ],
            resources: [
              { title: "MCP Changelog", url: "https://spec.modelcontextprotocol.io/specification/changelog/" },
              { title: "RFC Process", url: "https://github.com/modelcontextprotocol/specification" },
              { title: "Roadmap", url: "https://modelcontextprotocol.io/docs/roadmap" },
            ],
          },
          {
            id: "mcp-w18-2",
            title: "AI Agent 生态",
            detail: "了解更广泛的 AI Agent 技术生态与行业格局，对比分析主流框架的架构差异与应用前景。",
            keyPoints: [
              "Agent 框架：AutoGPT、CrewAI、LangGraph。",
              "工具生态：各类工具和集成。",
              "多模态：图像、语音、视频处理。",
              "企业应用：AI Agent 在企业的落地。",
            ],
            resources: [
              { title: "AutoGPT", url: "https://github.com/Significant-Gravitas/AutoGPT" },
              { title: "CrewAI", url: "https://www.crewai.com/" },
              { title: "LangGraph", url: "https://langchain-ai.github.io/langgraph/" },
            ],
          },
          {
            id: "mcp-w18-3",
            title: "标准化与互操作",
            detail: "了解 AI 工具协议标准化的最新趋势，分析行业联盟推动的互操作性规范与生态融合方向。",
            keyPoints: [
              "互操作性：不同系统间的兼容。",
              "行业标准：AI 工具的标准化努力。",
              "安全规范：AI 应用安全标准。",
              "最佳实践：行业最佳实践的沉淀。",
            ],
            resources: [
              { title: "AI Standards", url: "https://www.nist.gov/artificial-intelligence" },
              { title: "OpenAI Function Calling", url: "https://platform.openai.com/docs/guides/function-calling" },
              { title: "AI Safety", url: "https://www.anthropic.com/research" },
            ],
          },
        ],
      },
    ],
  },
]

// ═══════════════════════════════════════════════════════════════
// 知识卡片
// ═══════════════════════════════════════════════════════════════
export const mcpKnowledgeCards: KnowledgeCard[] = [
  {
    id: "mcp-kc-1",
    title: "MCP 架构三层模型",
    summary: "Host → Client → Server 的三层架构。",
    points: [
      "Host：托管 AI 模型的应用（如 Claude Desktop）",
      "Client：MCP 客户端，管理服务器连接",
      "Server：提供 Tools、Resources、Prompts",
      "传输层：stdio（本地）或 HTTP+SSE（远程）",
    ],
    practice: "绘制一个 MCP 应用的架构图，标注各组件的职责。",
  },
  {
    id: "mcp-kc-2",
    title: "MCP 三种核心能力",
    summary: "Tools、Resources、Prompts 是 MCP 的三种核心能力。",
    points: [
      "Tools：可执行的函数，AI 决定何时调用",
      "Resources：可读取的数据源，URI 标识",
      "Prompts：预定义的提示词模板",
      "能力协商：客户端和服务器协商支持的功能",
    ],
    practice: "设计一个 MCP 服务器，分别使用三种能力。",
  },
  {
    id: "mcp-kc-3",
    title: "Tool 设计最佳实践",
    summary: "好的工具设计让 AI 更容易正确使用。",
    points: [
      "清晰的描述：帮助 AI 理解何时使用",
      "严格的 Schema：JSON Schema 验证输入",
      "有意义的错误：返回可理解的错误信息",
      "幂等性：相同输入产生相同结果",
    ],
    practice: "重构一个工具，改进其描述和错误处理。",
  },
  {
    id: "mcp-kc-4",
    title: "MCP 安全三原则",
    summary: "安全是 MCP 应用的首要考虑。",
    points: [
      "最小权限：只授予必要的访问权限",
      "输入验证：验证和净化所有输入",
      "审计日志：记录所有敏感操作",
      "敏感操作确认：高风险操作需用户确认",
    ],
    practice: "审查一个 MCP 服务器的安全实践。",
  },
  {
    id: "mcp-kc-5",
    title: "Sampling 能力",
    summary: "Sampling 让服务器可以请求 AI 生成内容。",
    points: [
      "服务器向客户端请求 AI 生成",
      "支持 Agentic 工作流",
      "可配置人机交互",
      "实现复杂的多步骤任务",
    ],
    practice: "实现一个使用 Sampling 的 Agent 工作流。",
  },
  {
    id: "mcp-kc-6",
    title: "传输层选择",
    summary: "根据场景选择合适的传输方式。",
    points: [
      "stdio：本地进程，简单高效",
      "HTTP + SSE：远程服务，支持网络访问",
      "自定义传输：实现 Transport 接口",
      "安全考虑：远程使用 HTTPS",
    ],
    practice: "将一个 stdio 服务器改造为支持 HTTP。",
  },
  {
    id: "mcp-kc-7",
    title: "生产部署检查清单",
    summary: "MCP 服务上线前的检查要点。",
    points: [
      "安全：认证、授权、输入验证",
      "性能：连接池、缓存、异步",
      "可靠性：错误处理、重试、熔断",
      "可观测：日志、指标、追踪",
    ],
    practice: "为你的 MCP 服务器创建部署检查清单。",
  },
  {
    id: "mcp-kc-8",
    title: "Agent 设计模式",
    summary: "常见的 AI Agent 架构模式。",
    points: [
      "ReAct：推理-行动循环",
      "计划-执行：先规划再执行",
      "人在回路：关键决策需用户确认",
      "多 Agent：专业 Agent 协作",
    ],
    practice: "设计一个多步骤的 Agent 工作流。",
  },
]

// ═══════════════════════════════════════════════════════════════
// 考试题目
// ═══════════════════════════════════════════════════════════════
export const mcpExamQuestions: QuizQuestion[] = [
  {
    id: "mcp-q1",
    question: "MCP 的全称是什么？",
    options: ["Model Communication Protocol", "Model Context Protocol", "Machine Control Protocol", "Model Connection Protocol"],
    answer: 1,
    rationale: "MCP 是 Model Context Protocol（模型上下文协议）的缩写，由 Anthropic 开源。",
  },
  {
    id: "mcp-q2",
    question: "MCP 架构中，Claude Desktop 属于哪个角色？",
    options: ["Server", "Client", "Host", "Transport"],
    answer: 2,
    rationale: "Claude Desktop 是 Host，它托管 AI 模型并包含 MCP Client 来连接 Server。",
  },
  {
    id: "mcp-q3",
    question: "MCP 的三种核心能力不包括哪个？",
    options: ["Tools", "Resources", "Prompts", "Models"],
    answer: 3,
    rationale: "MCP 的三种核心能力是 Tools（工具）、Resources（资源）、Prompts（提示词），不包括 Models。",
  },
  {
    id: "mcp-q4",
    question: "MCP 本地通信推荐使用哪种传输方式？",
    options: ["HTTP", "WebSocket", "stdio", "gRPC"],
    answer: 2,
    rationale: "本地进程通信推荐使用 stdio（标准输入输出），简单高效。远程通信使用 HTTP + SSE。",
  },
  {
    id: "mcp-q5",
    question: "MCP Tool 的输入参数使用什么格式定义？",
    options: ["XML Schema", "JSON Schema", "YAML", "Protocol Buffers"],
    answer: 1,
    rationale: "MCP Tool 使用 JSON Schema 定义输入参数的结构和验证规则。",
  },
  {
    id: "mcp-q6",
    question: "MCP Resource 使用什么来唯一标识？",
    options: ["ID", "Name", "URI", "Path"],
    answer: 2,
    rationale: "MCP Resource 使用 URI（统一资源标识符）来唯一标识，如 file:///path/to/file。",
  },
  {
    id: "mcp-q7",
    question: "MCP Sampling 能力的作用是什么？",
    options: ["采样数据", "服务器请求 AI 生成内容", "随机选择工具", "性能采样"],
    answer: 1,
    rationale: "Sampling 让 MCP 服务器可以请求客户端的 AI 模型生成内容，用于实现 Agentic 工作流。",
  },
  {
    id: "mcp-q8",
    question: "Claude Desktop 的 MCP 配置文件名是什么？",
    options: ["mcp.json", "claude_config.json", "claude_desktop_config.json", "settings.json"],
    answer: 2,
    rationale: "Claude Desktop 的 MCP 配置文件名是 claude_desktop_config.json。",
  },
  {
    id: "mcp-q9",
    question: "MCP 使用什么协议进行消息通信？",
    options: ["REST", "GraphQL", "JSON-RPC", "SOAP"],
    answer: 2,
    rationale: "MCP 使用 JSON-RPC 2.0 协议进行客户端和服务器之间的消息通信。",
  },
  {
    id: "mcp-q10",
    question: "MCP Inspector 的主要用途是什么？",
    options: ["代码检查", "调试 MCP 服务器", "性能分析", "安全扫描"],
    answer: 1,
    rationale: "MCP Inspector 是一个可视化工具，用于调试和测试 MCP 服务器。",
  },
  {
    id: "mcp-q11",
    question: "好的 MCP Tool 设计应该具备什么特性？",
    options: ["复杂的功能", "幂等性", "最大权限", "模糊的描述"],
    answer: 1,
    rationale: "好的 Tool 应该具备幂等性（相同输入产生相同结果），以及清晰的描述和严格的输入验证。",
  },
  {
    id: "mcp-q12",
    question: "MCP 远程通信推荐使用什么传输方式？",
    options: ["stdio", "HTTP + SSE", "UDP", "FTP"],
    answer: 1,
    rationale: "远程通信推荐使用 HTTP + SSE（Server-Sent Events），支持双向通信。",
  },
  {
    id: "mcp-q13",
    question: "MCP 服务器的能力协商发生在什么阶段？",
    options: ["连接后", "initialize 阶段", "工具调用时", "断开前"],
    answer: 1,
    rationale: "能力协商发生在 initialize 阶段，客户端和服务器交换各自支持的功能。",
  },
  {
    id: "mcp-q14",
    question: "ReAct 模式是什么？",
    options: ["React 框架", "推理-行动循环", "响应式编程", "实时通信"],
    answer: 1,
    rationale: "ReAct（Reasoning + Acting）是一种 Agent 模式，AI 交替进行推理和执行动作。",
  },
  {
    id: "mcp-q15",
    question: "MCP 官方 SDK 支持哪些语言？",
    options: ["只有 Python", "只有 TypeScript", "TypeScript 和 Python", "Java 和 Go"],
    answer: 2,
    rationale: "MCP 官方提供 TypeScript SDK 和 Python SDK。",
  },
  {
    id: "mcp-q16",
    question: "MCP 中的 Host 是什么？",
    options: ["服务器", "托管 AI 模型的应用", "网络主机", "数据库"],
    answer: 1,
    rationale: "Host 是托管 AI 模型的应用，如 Claude Desktop，它包含 MCP Client 来连接 Server。",
  },
  {
    id: "mcp-q17",
    question: "MCP Prompts 的作用是什么？",
    options: ["执行命令", "提供数据", "预定义的提示词模板", "用户认证"],
    answer: 2,
    rationale: "Prompts 提供预定义的、可参数化的提示词模板，便于复用。",
  },
  {
    id: "mcp-q18",
    question: "MCP 安全最佳实践不包括哪项？",
    options: ["输入验证", "最小权限", "审计日志", "明文存储密钥"],
    answer: 3,
    rationale: "明文存储密钥是安全反模式。MCP 安全最佳实践包括输入验证、最小权限和审计日志。",
  },
  {
    id: "mcp-q19",
    question: "LLM 的知识截止是什么意思？",
    options: ["模型停止学习", "训练数据有时间截止点", "推理时间限制", "上下文窗口限制"],
    answer: 1,
    rationale: "知识截止指 LLM 的训练数据有时间截止点，模型不知道之后发生的事。",
  },
  {
    id: "mcp-q20",
    question: "MCP 解决的核心问题是什么？",
    options: ["模型训练", "统一的 AI 工具集成标准", "数据存储", "网络通信"],
    answer: 1,
    rationale: "MCP 解决的核心问题是提供统一的协议标准，让 AI 应用可以一次构建、到处使用工具集成。",
  },
]

// ═══════════════════════════════════════════════════════════════
// 主题定义
// ═══════════════════════════════════════════════════════════════
export const mcpRoadmap: RoadmapDefinition = {
  id: "mcp",
  label: "大模型 MCP",
  title: "大模型 MCP",
  durationLabel: "18 个主题",
  description:
    "从大语言模型基础出发，深入 Model Context Protocol 协议架构，掌握 MCP Server 开发（Tools、Resources、Prompts），学习 Client 开发与系统集成，掌握 Agentic 工作流、安全最佳实践，实现生产级部署，了解 MCP 生态与未来发展。",
  heroBadge: "LLM · MCP · Agent · Tools · 协议开发",
  stages: mcpStages,
  knowledgeCards: mcpKnowledgeCards,
  examQuestions: mcpExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "开始 MCP 学习之旅！先从 LLM 基础和 MCP 协议概述开始。"
    if (percent < 25) return "继续深入 MCP 服务器开发，掌握 Tools、Resources、Prompts。"
    if (percent < 50) return "客户端开发和系统集成是关键，学会连接各类数据源。"
    if (percent < 75) return "高级模式和安全是生产必备，重点掌握 Agent 工作流。"
    if (percent < 100) return "即将完成！生产部署和生态了解让你成为 MCP 专家。"
    return "恭喜完成！你已掌握 MCP 的完整知识体系。"
  },
  resourceGuide: {
    environment:
      "推荐使用 Claude Desktop 作为 MCP Host 进行开发测试。TypeScript 或 Python 作为开发语言，使用官方 SDK。",
    fallbackKeyPoints: [
      "MCP 架构：Host → Client → Server 三层模型",
      "三种能力：Tools（执行）、Resources（数据）、Prompts（模板）",
      "传输方式：stdio（本地）、HTTP+SSE（远程）",
      "安全原则：最小权限、输入验证、审计日志",
      "Agent 模式：ReAct、计划-执行、人在回路",
    ],
    handsOnSteps: [
      "配置 Claude Desktop 并连接官方示例服务器",
      "使用 create-mcp-server 创建第一个服务器",
      "实现一个数据库查询 Tool",
      "开发文件系统 Resources",
      "部署远程 MCP 服务并在 Claude 中使用",
    ],
    selfChecks: [
      "能否解释 MCP 的三层架构？",
      "能否实现一个带输入验证的 Tool？",
      "能否设计安全的数据库访问服务？",
      "能否实现 Agent 工作流？",
      "能否将 MCP 服务部署到生产环境？",
    ],
    extensions: [
      "深入学习 AI Agent 架构设计",
      "研究 LangChain/LangGraph 框架",
      "探索多模态 AI 应用开发",
      "学习企业级 AI 应用安全",
    ],
    lessonQuizAdvice: "每周完成后测验，重点关注 MCP 架构、Tool 开发和安全最佳实践。",
  },
}
