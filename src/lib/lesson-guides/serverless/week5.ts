import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week5Guides: Record<string, LessonGuide> = {
    "w5-1": {
        lessonId: "w5-1",
        background: [
            "【Step Functions 概念】AWS Step Functions 是全托管的工作流编排服务，使用状态机模型将多个 AWS 服务组合成可视化的业务流程。",
            "【ASL 语言】Amazon States Language（ASL）是定义状态机的 JSON 格式语言，描述状态、转换、输入输出处理和错误处理。",
            "【状态机组成】状态机由 StartAt（起始状态）、States（状态定义集合）和可选的 Comment、TimeoutSeconds 组成。",
            "【核心优势】相比在代码中编排：Step Functions 提供可视化流程图、内置重试/错误处理、执行历史审计、状态持久化。",
            "【Workflow Studio】AWS 控制台提供拖拽式 Workflow Studio，可视化设计状态机流程，自动生成 ASL 定义。"
        ],
        keyDifficulties: [
            "【ASL 语法】ASL 的 JSON 格式比代码编排更冗长，InputPath/OutputPath/ResultPath 的数据流转逻辑需要仔细理解。",
            "【输入输出处理】每个状态可以使用 InputPath（过滤输入）、Parameters（构造输入）、ResultSelector（选择结果）、ResultPath（合并结果）、OutputPath（过滤输出）。",
            "【调试方式】Step Functions 的调试不如代码直观，需要通过执行历史的每个步骤查看输入输出，定位数据转换问题。",
            "【成本计算】Standard 工作流按状态转换次数计费（$0.025/1000 次），复杂流程的状态转换次数可能很多。"
        ],
        handsOnPath: [
            "使用 Workflow Studio 创建一个简单的两步 Lambda 编排：第一步获取数据，第二步处理数据。",
            "手写 ASL JSON 定义同样的状态机，理解 StartAt、States、Next、End 的结构。",
            "执行状态机，通过执行历史查看每一步的输入和输出数据。",
            "使用 ResultPath 将 Lambda 结果合并到原始输入中传递给下一步。"
        ],
        selfCheck: [
            "Step Functions 相比在代码中手动编排 Lambda 有什么优势？",
            "ASL 定义中 StartAt 和 States 的作用分别是什么？",
            "InputPath、ResultPath、OutputPath 各自控制数据流的哪个环节？",
            "Step Functions 的计费模型是什么？"
        ],
        extensions: [
            "研究 Step Functions 与 AWS SDK 集成，直接调用 200+ AWS 服务无需 Lambda。",
            "了解 Step Functions 的执行事件历史 API 和 CloudWatch Events 集成。",
            "探索 Step Functions Local 在本地开发和测试状态机。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html",
            "https://aws.amazon.com/step-functions/getting-started/",
            "https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html"
        ]
    },
    "w5-2": {
        lessonId: "w5-2",
        background: [
            "【Task 状态】执行实际工作的状态：调用 Lambda 函数、AWS SDK API、或其他 Step Functions 状态机。是最常用的状态类型。",
            "【Choice 状态】基于条件分支：根据输入数据的值选择不同的下一个状态，支持数值比较、字符串匹配、布尔判断等。",
            "【Parallel 状态】并行执行多个分支：所有分支同时启动，全部完成后合并结果。任一分支失败导致整个 Parallel 状态失败。",
            "【Map 状态】对数组中的每个元素执行相同的操作：Inline 模式直接嵌套，Distributed 模式可处理数百万条记录的大规模并行。",
            "【Wait 状态】暂停执行指定时间或等待到指定时间戳，适合实现延迟处理、定时触发等场景。"
        ],
        keyDifficulties: [
            "【Choice 表达式】Choice 使用比较运算符（StringEquals、NumericGreaterThan、IsPresent 等），不支持复杂逻辑表达式，复杂条件需要用 And/Or/Not 组合。",
            "【Parallel 数据合并】Parallel 状态的输出是各分支结果的数组。需要在后续步骤中解构这个数组获取各分支的数据。",
            "【Map 并发控制】Map 状态的 MaxConcurrency 参数控制并行度。默认为 0（无限制），在访问限流服务时需要限制并发。",
            "【状态组合】复杂工作流需要嵌套组合多种状态类型：如 Map 内包含 Choice 和 Parallel，需要仔细设计数据流转。"
        ],
        handsOnPath: [
            "创建包含 Choice 状态的工作流：根据订单金额走不同处理分支。",
            "实现 Parallel 状态并行调用两个 Lambda（如同时查询库存和价格）。",
            "使用 Map 状态对订单列表中的每个订单调用处理函数。",
            "组合 Task、Choice、Wait 实现一个审批工作流。"
        ],
        selfCheck: [
            "Choice 状态支持哪些比较运算符？如何表达复杂条件？",
            "Parallel 状态的输出格式是什么？如何处理？",
            "Map 状态的 Inline 模式和 Distributed 模式有什么区别？",
            "Wait 状态有哪些等待方式？"
        ],
        extensions: [
            "研究 Step Functions Distributed Map 处理百万级数据的能力。",
            "了解 Step Functions 的 Intrinsic Functions 进行数据转换。",
            "探索使用 Pass 状态和 Result 字段注入静态数据。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/step-functions/latest/dg/concepts-states.html",
            "https://docs.aws.amazon.com/step-functions/latest/dg/sample-lambda-orchestration.html",
            "https://docs.aws.amazon.com/step-functions/latest/dg/workflow-studio.html"
        ]
    },
    "w5-3": {
        lessonId: "w5-3",
        background: [
            "【Retry 配置】每个 Task/Parallel/Map 状态可配置 Retry：指定错误类型、最大重试次数（MaxAttempts）、退避间隔（IntervalSeconds）、退避倍数（BackoffRate）。",
            "【Catch 配置】Catch 捕获未被 Retry 处理的错误，将执行路由到指定的回退状态。支持按错误类型分别捕获。",
            "【错误类型】内置错误类型：States.ALL（所有错误）、States.Timeout（超时）、States.TaskFailed（任务失败）、States.Permissions（权限错误）。",
            "【Saga 模式】分布式事务的补偿模式：每个步骤有对应的回滚操作。如果后续步骤失败，按逆序执行前面步骤的补偿操作。",
            "【最佳实践】Retry 适合瞬态错误（网络超时、限流），Catch 适合业务错误（验证失败、资源不存在）。两者配合使用。"
        ],
        keyDifficulties: [
            "【退避策略】指数退避（BackoffRate > 1）避免重试风暴：初始间隔 1s，BackoffRate 2.0 时依次等待 1s、2s、4s。MaxAttempts 不宜过大。",
            "【Saga 实现】Saga 的补偿操作必须是幂等的，因为补偿本身也可能失败需要重试。需要仔细设计补偿逻辑的原子性。",
            "【错误传播】Catch 捕获错误后，可以选择继续执行（路由到恢复状态）或标记为失败（路由到 Fail 状态）。需要根据业务语义决定。",
            "【超时处理】Task 状态的 TimeoutSeconds 和 HeartbeatSeconds 用于检测任务是否卡住。超时后触发 States.Timeout 错误。"
        ],
        handsOnPath: [
            "为 Task 状态配置 Retry：MaxAttempts=3、IntervalSeconds=1、BackoffRate=2.0。",
            "配置 Catch 将错误路由到通知管理员的 Lambda 函数。",
            "实现一个简单的 Saga 模式：创建订单 → 扣减库存 → 支付。支付失败时回滚库存和订单。",
            "设置 TimeoutSeconds 模拟超时，观察错误处理行为。"
        ],
        selfCheck: [
            "Retry 的 BackoffRate 参数如何影响重试间隔？",
            "Retry 和 Catch 各自适合处理什么类型的错误？",
            "Saga 模式的补偿操作为什么必须是幂等的？",
            "States.ALL 和 States.TaskFailed 的区别是什么？"
        ],
        extensions: [
            "研究 Step Functions 的 ResultSelector 在错误处理中转换错误信息。",
            "了解 Step Functions Activity 支持人工审批流程。",
            "探索 EventBridge + Step Functions 实现事件驱动的工作流触发。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/step-functions/latest/dg/concepts-error-handling.html",
            "https://docs.aws.amazon.com/step-functions/latest/dg/sample-saga-pattern.html",
            "https://docs.aws.amazon.com/step-functions/latest/dg/sfn-best-practices.html"
        ]
    },
    "w5-4": {
        lessonId: "w5-4",
        background: [
            "【Standard 工作流】长时间运行的工作流：最长执行 1 年，保存完整执行历史，支持异步调用。按状态转换次数计费。",
            "【Express 工作流】高吞吐短时间工作流：最长执行 5 分钟，不保存执行历史（发送到 CloudWatch Logs），支持同步和异步调用。按执行次数和时长计费。",
            "【性能差异】Standard 最大启动速率 2000/秒；Express 最大启动速率 100000/秒。Express 适合高吞吐的流数据处理。",
            "【执行语义】Standard 保证 exactly-once 执行语义；Express 为 at-least-once（异步）或 at-most-once（同步），需要幂等设计。",
            "【成本对比】Standard：$0.025/1000 次状态转换；Express：$1.00/百万次请求 + $0.00001667/GB-秒。短流程用 Express 通常更便宜。"
        ],
        keyDifficulties: [
            "【选型标准】执行时间 > 5 分钟必须用 Standard；需要 exactly-once 用 Standard；高吞吐短流程用 Express；需要执行历史审计用 Standard。",
            "【Express 限制】Express 不保存执行历史到 Step Functions 控制台，需通过 CloudWatch Logs 查看。调试体验不如 Standard。",
            "【嵌套工作流】Standard 工作流可以调用 Express 子工作流，实现高层编排 + 高吞吐处理的组合架构。",
            "【同步 Express】同步 Express 工作流等待完成后返回结果，适合 API Gateway 集成。最长等待 29 秒（API Gateway 超时限制）。"
        ],
        handsOnPath: [
            "分别创建 Standard 和 Express 工作流执行相同的两步 Lambda 编排。",
            "查看 Standard 工作流的执行历史详情，对比 Express 的 CloudWatch Logs 输出。",
            "使用同步 Express 工作流集成 API Gateway，测试端到端响应。",
            "估算一个具体场景下两种工作流的月成本差异。"
        ],
        selfCheck: [
            "Standard 和 Express 工作流的最大执行时间分别是多少？",
            "什么场景下必须选择 Standard 工作流？",
            "Express 工作流的执行语义为什么是 at-least-once？有什么影响？",
            "如何组合使用 Standard 和 Express 工作流？"
        ],
        extensions: [
            "研究 Step Functions 的 SDK 集成直接调用 AWS 服务替代 Lambda。",
            "了解 Step Functions 的执行配额和速率限制。",
            "探索 CDK 或 SAM 定义 Step Functions 状态机。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/step-functions/latest/dg/concepts-standard-vs-express.html",
            "https://docs.aws.amazon.com/step-functions/latest/dg/concepts-express-synchronous.html",
            "https://aws.amazon.com/step-functions/pricing/"
        ]
    }
}

export const week5Quizzes: Record<string, QuizQuestion[]> = {
    "w5-1": [
        {
            id: "sl-w5-1-q1",
            question: "Step Functions 相比在代码中编排 Lambda 的核心优势是什么？",
            options: [
                "执行速度更快",
                "不需要编写任何代码",
                "提供可视化流程、内置重试/错误处理和执行历史审计",
                "免费使用"
            ],
            answer: 2,
            rationale: "Step Functions 提供可视化工作流设计、内置的 Retry/Catch 错误处理、完整的执行历史记录和状态持久化，这些在纯代码编排中需要大量额外工作。"
        },
        {
            id: "sl-w5-1-q2",
            question: "Amazon States Language（ASL）是什么？",
            options: [
                "一种编程语言",
                "定义 Step Functions 状态机的 JSON 格式语言",
                "AWS 的 SQL 方言",
                "Lambda 函数的运行时"
            ],
            answer: 1,
            rationale: "ASL 是用 JSON 格式定义状态机的声明式语言，描述状态、转换条件、输入输出处理和错误处理策略。"
        },
        {
            id: "sl-w5-1-q3",
            question: "Step Functions 的 ResultPath 参数的作用是什么？",
            options: [
                "过滤输入数据",
                "将任务结果合并到原始输入中，传递给下一个状态",
                "格式化输出数据",
                "设置执行超时时间"
            ],
            answer: 1,
            rationale: "ResultPath 指定将任务结果放到输入 JSON 的哪个路径下，实现将结果与原始输入合并后传递给下一个状态。"
        }
    ],
    "w5-2": [
        {
            id: "sl-w5-2-q1",
            question: "Step Functions 的 Parallel 状态的输出格式是什么？",
            options: [
                "最后完成的分支的结果",
                "各分支结果的数组",
                "第一个完成的分支的结果",
                "所有分支结果的合并对象"
            ],
            answer: 1,
            rationale: "Parallel 状态等待所有分支完成，输出是各分支结果组成的数组（按分支定义顺序排列）。需要在后续步骤中解构使用。"
        },
        {
            id: "sl-w5-2-q2",
            question: "Map 状态的 MaxConcurrency 参数的作用是什么？",
            options: [
                "设置最大重试次数",
                "控制并行处理数组元素的最大并发数",
                "设置最大数组长度",
                "控制执行超时时间"
            ],
            answer: 1,
            rationale: "MaxConcurrency 控制 Map 状态同时处理的最大元素数。默认为 0（无限制），在调用有限流的下游服务时应设置合理的并发上限。"
        },
        {
            id: "sl-w5-2-q3",
            question: "Choice 状态不支持以下哪种能力？",
            options: [
                "字符串相等比较",
                "数值大于比较",
                "直接编写复杂的 JavaScript 逻辑表达式",
                "布尔值判断"
            ],
            answer: 2,
            rationale: "Choice 使用预定义的比较运算符（StringEquals、NumericGreaterThan 等），不支持任意编程语言的表达式。复杂逻辑需要 And/Or/Not 组合。"
        }
    ],
    "w5-3": [
        {
            id: "sl-w5-3-q1",
            question: "Retry 的 BackoffRate 参数如何影响重试间隔？",
            options: [
                "每次重试间隔固定不变",
                "每次重试间隔 = 上次间隔 × BackoffRate，实现指数退避",
                "BackoffRate 控制最大重试次数",
                "BackoffRate 控制超时时间"
            ],
            answer: 1,
            rationale: "BackoffRate 是退避倍数：如 IntervalSeconds=1、BackoffRate=2.0，重试间隔依次为 1s、2s、4s。指数退避避免重试风暴。"
        },
        {
            id: "sl-w5-3-q2",
            question: "Saga 模式中补偿操作为什么必须是幂等的？",
            options: [
                "为了提高性能",
                "因为补偿操作本身也可能失败需要重试",
                "为了节省成本",
                "这不是必须的"
            ],
            answer: 1,
            rationale: "补偿操作也可能因网络等原因失败需要重试。如果补偿操作不是幂等的，重试时可能导致多次回滚，造成数据不一致。"
        },
        {
            id: "sl-w5-3-q3",
            question: "Retry 和 Catch 各自适合处理什么类型的错误？",
            options: [
                "两者功能相同",
                "Retry 适合瞬态错误（网络超时），Catch 适合业务错误（验证失败）",
                "Catch 用于重试，Retry 用于跳过",
                "Retry 只用于超时错误"
            ],
            answer: 1,
            rationale: "Retry 适合可恢复的瞬态错误（网络抖动、限流），通过重试可能成功。Catch 适合不可恢复的业务错误（输入无效、资源不存在），需要走回退逻辑。"
        }
    ],
    "w5-4": [
        {
            id: "sl-w5-4-q1",
            question: "Standard 和 Express 工作流的最大执行时间分别是多少？",
            options: [
                "1 小时 / 5 分钟",
                "1 年 / 5 分钟",
                "1 天 / 1 小时",
                "无限制 / 15 分钟"
            ],
            answer: 1,
            rationale: "Standard 工作流最长可执行 1 年，适合长时间运行的业务流程。Express 工作流最长 5 分钟，适合高吞吐短时处理。"
        },
        {
            id: "sl-w5-4-q2",
            question: "Express 工作流的执行语义是什么？",
            options: [
                "exactly-once，保证恰好执行一次",
                "at-least-once（异步）或 at-most-once（同步），需要幂等设计",
                "at-most-once，最多执行一次",
                "不保证任何执行语义"
            ],
            answer: 1,
            rationale: "Express 工作流异步调用为 at-least-once（可能重复执行），同步调用为 at-most-once（可能不执行）。Standard 保证 exactly-once。"
        },
        {
            id: "sl-w5-4-q3",
            question: "什么场景下必须选择 Standard 工作流？",
            options: [
                "高吞吐量处理",
                "执行时间超过 5 分钟或需要 exactly-once 语义",
                "简单的两步 Lambda 编排",
                "成本敏感的场景"
            ],
            answer: 1,
            rationale: "执行时间超过 5 分钟的流程必须用 Standard。需要 exactly-once 执行语义、需要执行历史审计的场景也应选择 Standard。"
        }
    ]
}
