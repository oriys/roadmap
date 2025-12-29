import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week2Guides: Record<string, LessonGuide> = {
    "w2-1": {
        lessonId: "w2-1",
        background: [
            "【框架定位】Next.js 官方定义：'Next.js is a React framework for building full-stack web applications'——一个用于构建全栈 Web 应用的 React 框架，内置优化配置。",
            "【双路由系统】Next.js 提供两套路由：App Router（推荐，支持 React Server Components）和 Pages Router（传统方式，向后兼容）。App Router 位于 /app 目录，Pages Router 位于 /pages 目录。",
            "【渲染模式】Next.js 支持四种渲染模式：SSR（服务端渲染，每次请求动态生成）、SSG（静态生成，构建时预渲染）、ISR（增量静态再生，按需更新静态页面）、CSR（客户端渲染）。",
            "【电商模板】Next.js Commerce 是 'a high-performance, server-rendered Next.js App Router ecommerce application'——高性能的服务端渲染电商应用，使用 React Server Components 和 Server Actions。",
            "【Headless 架构】Next.js Commerce 采用 Headless Commerce 模式，前端与后端分离，支持 Shopify、BigCommerce、Medusa 等多个电商平台作为后端。"
        ],
        keyDifficulties: [
            "【App Router vs Pages Router】App Router 是 Next.js 13+ 推荐的新路由系统，支持 Server Components、并行路由、拦截路由等高级特性，但学习曲线更陡峭。",
            "【渲染策略选择】不同页面需要不同渲染策略：商品详情页适合 ISR（SEO + 定期更新），购物车页面需要 CSR（实时性），首页可用 SSG + 客户端数据获取。",
            "【Server Components】React Server Components 在服务器执行，不发送 JavaScript 到客户端，减少 bundle 大小。但不能使用 useState、useEffect 等客户端 Hooks。",
            "【数据获取变化】App Router 使用 fetch() 配合自动缓存和重验证，而 Pages Router 使用 getServerSideProps/getStaticProps。两种模式的数据获取范式差异显著。"
        ],
        handsOnPath: [
            "使用 create-next-app 创建新项目：npx create-next-app@latest --typescript --tailwind --app",
            "理解 App Router 的文件约定：page.tsx（路由页面）、layout.tsx（布局）、loading.tsx（加载状态）、error.tsx（错误处理）。",
            "实现商品列表页面，使用 Server Component 直接获取数据库数据。",
            "实现商品详情页，使用 generateStaticParams 和 ISR 策略（revalidate: 3600）。",
            "集成 Next.js Image 组件优化商品图片加载。",
            "克隆 Next.js Commerce 模板，理解其项目结构和电商功能实现。"
        ],
        selfCheck: [
            "App Router 和 Pages Router 的主要区别是什么？",
            "什么是 React Server Components？它与传统 React 组件有何不同？",
            "ISR 适合什么场景？revalidate 参数如何工作？",
            "Next.js Image 组件提供了哪些优化？",
            "Server Actions 是什么？如何在电商场景中使用？",
            "Headless Commerce 架构的优势是什么？"
        ],
        extensions: [
            "深入学习 React Server Components 的工作原理和限制。",
            "探索 Next.js 的 Middleware 功能，实现基于地区的商品定价。",
            "研究 Vercel Edge Functions 在电商场景的应用。",
            "了解 Streaming 和 Suspense 在 Next.js 中的使用，优化首屏加载体验。"
        ],
        sourceUrls: [
            "https://nextjs.org/docs",
            "https://vercel.com/templates/next.js/nextjs-commerce",
            "https://nextjs.org/learn"
        ]
    },
    "w2-2": {
        lessonId: "w2-2",
        background: [
            "【路由定义】Express 官方定义：'Routing refers to how an application's endpoints (URIs) respond to client requests'——路由定义应用端点如何响应客户端请求。",
            "【HTTP 方法】Express 支持所有 HTTP 方法：app.get()、app.post()、app.put()、app.delete() 等，以及 app.all() 处理所有方法。",
            "【路由参数】使用 :paramName 语法捕获 URL 参数，存储在 req.params 对象中。例如 /users/:userId/books/:bookId 可捕获用户 ID 和书籍 ID。",
            "【组件化架构】Node.js Best Practices 推荐 'Component-Based Structure'——按业务组件（订单、用户、支付）组织代码，而非技术层（controller、service、model）。",
            "【三层架构】每个组件内部分离关注点：entry-points（API 控制器）、domain logic（业务逻辑）、data-access（数据访问层），保持基础设施与业务逻辑隔离。"
        ],
        keyDifficulties: [
            "【async/await 错误处理】Node.js Best Practices 强调：'Replace callback-style error handling with Promises and async-await for cleaner, more maintainable code'——使用 async-await 替代回调风格。",
            "【中间件链】Express 中间件按顺序执行，必须调用 next() 传递控制权。多个回调函数可以处理同一路由，实现认证、日志等横切关注点。",
            "【模块化路由】使用 express.Router() 创建模块化路由，将不同业务域的路由分离到独立文件，然后通过 app.use('/path', router) 挂载。",
            "【RESTful 设计】避免在端点中使用动词（/getWorkouts 错误），HTTP 方法已表明操作意图。使用复数名词（/workouts）表示资源集合。"
        ],
        handsOnPath: [
            "初始化 Express 项目：npm init -y && npm install express typescript @types/express ts-node",
            "创建组件化目录结构：src/components/{users,products,orders}/，每个包含 routes.ts、controller.ts、service.ts。",
            "实现 RESTful API 端点：GET /api/v1/products、POST /api/v1/products、GET /api/v1/products/:id 等。",
            "实现全局错误处理中间件，捕获所有未处理的错误并返回统一格式的响应。",
            "使用 express.Router() 将商品、用户、订单路由模块化。",
            "添加请求验证中间件（使用 Zod 或 Joi），确保请求体符合预期格式。"
        ],
        selfCheck: [
            "Express 中间件的执行顺序是什么？next() 函数的作用？",
            "如何使用 express.Router() 实现模块化路由？",
            "RESTful API 设计中，为什么不应该在 URL 中使用动词？",
            "如何实现全局错误处理中间件？",
            "组件化架构与传统分层架构的区别是什么？",
            "async-await 相比回调的优势有哪些？"
        ],
        extensions: [
            "学习 NestJS 框架，了解其依赖注入和装饰器模式。",
            "探索 Fastify 框架，比较其与 Express 的性能差异。",
            "研究 GraphQL 与 REST 的对比，了解 Apollo Server 的使用。",
            "学习 OpenAPI/Swagger 规范，实现 API 文档自动生成。"
        ],
        sourceUrls: [
            "https://expressjs.com/en/guide/routing.html",
            "https://github.com/goldbergyoni/nodebestpractices",
            "https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/"
        ]
    },
    "w2-3": {
        lessonId: "w2-3",
        background: [
            "【架构对比】microservices.io 对比两种架构：'Monolithic architecture - architect an application as a single deployable unit' vs 微服务——独立部署、松耦合的服务集合。",
            "【服务拆分策略】两种主要拆分方式：按业务能力（Business Capability）拆分，围绕独立业务功能组织服务；按 DDD 子域（Subdomain）拆分，基于领域驱动设计。",
            "【通信模式】服务间通信方式：RPI（远程过程调用，同步）、异步消息传递（解耦）、API Gateway 提供统一客户端接口。Google 电商示例使用 gRPC 进行跨服务通信。",
            "【Google 电商微服务】Google 示例包含 11 个独立微服务：'使用微服务架构，应用程序被部署为多个小服务，每个处理特定的方面和任务。'——购物车服务(C#)、支付服务(Node.js)、推荐服务(Python)等。",
            "【部署策略】Google 方案采用三集群架构：两个区域集群承载完整栈，一个配置集群负责跨区域负载均衡，使用 Google Cloud Load Balancer 分配请求。"
        ],
        keyDifficulties: [
            "【数据管理挑战】分布式数据管理模式：每服务独立数据库（防止紧耦合）、Saga 模式协调跨服务操作、CQRS 维护物化视图、事件溯源持久化数据为事件序列。",
            "【服务发现】服务实例动态变化，需要服务发现机制：客户端发现、服务端发现、服务注册表。microservices.io 详细描述了各种模式的权衡。",
            "【熔断器模式】Circuit Breaker 防止级联故障——当下游服务失败率超过阈值时，熔断器打开，直接返回降级响应而非继续请求。",
            "【技术栈多样性】不同服务可使用不同技术栈（Google 示例中 C#、Node.js、Python 共存），带来灵活性但增加运维复杂度。"
        ],
        handsOnPath: [
            "使用 Docker Compose 定义多服务开发环境：user-service、product-service、order-service、api-gateway。",
            "实现 API Gateway 路由配置，将 /api/users/* 路由到 user-service，/api/products/* 路由到 product-service。",
            "使用 HTTP 实现服务间同步通信，处理超时和错误重试。",
            "引入消息队列（Redis Pub/Sub 或 RabbitMQ），实现订单创建后异步通知库存服务。",
            "实现服务健康检查端点（/health），配置 Docker 健康检查。",
            "克隆 Google microservices-demo 项目，本地运行并理解其架构。"
        ],
        selfCheck: [
            "微服务架构相比单体架构的优势和劣势是什么？",
            "什么是 Saga 模式？如何处理跨服务事务？",
            "API Gateway 在微服务架构中的作用是什么？",
            "服务发现解决什么问题？有哪些实现方式？",
            "gRPC 相比 REST 的优势是什么？适合什么场景？",
            "熔断器模式如何防止级联故障？"
        ],
        extensions: [
            "深入学习 Kubernetes 的 Service 和 Ingress 资源，理解云原生服务发现。",
            "探索 Service Mesh（Istio、Linkerd），了解流量管理和可观测性。",
            "研究 gRPC 的 Protocol Buffers 和流式通信。",
            "学习 Dapr（分布式应用运行时），简化微服务开发。"
        ],
        sourceUrls: [
            "https://microservices.io/patterns/index.html",
            "https://www.scnsoft.com/ecommerce/microservices",
            "https://developers.google.com/learn/pathways/solution-ecommerce-microservices-kubernetes"
        ]
    },
    "w2-4": {
        lessonId: "w2-4",
        background: [
            "【Turborepo 定位】Turborepo 官方定义：'a high-performance build system for JavaScript and TypeScript codebases'——高性能构建系统，优化 Monorepo 工作流。",
            "【Monorepo 问题】传统 Monorepo 面临挑战：每个工作区有独立的测试、lint、构建任务，单个仓库可能包含数千个顺序执行的任务，造成性能瓶颈。",
            "【远程缓存】Turborepo 的核心特性：存储任务结果，使 CI 系统避免重复工作，显著减少构建时间。配合 Vercel 可实现跨团队的远程缓存共享。",
            "【ESLint 配置】ESLint 官方强调：'ESLint is designed to be flexible and configurable for your use case'——高度可配置，支持规则调整、插件集成、自定义解析器。",
            "【Git Flow 工作流】Atlassian 定义：'Gitflow is an alternative Git branching model that involves the use of feature branches and multiple primary branches'——使用功能分支和多主分支的分支模型。"
        ],
        keyDifficulties: [
            "【任务编排】Turborepo 智能调度：当任务有依赖关系时（build → test → lint），按正确顺序执行；无依赖时并行执行，充分利用 CPU 核心。",
            "【增量采用】Turborepo 与现有 package.json scripts 兼容，只需添加 turbo.json 配置文件，支持 npm、yarn、pnpm 包管理器。",
            "【Git Flow 局限】Atlassian 指出：'Gitflow has fallen in popularity in favor of trunk-based workflows, which are now considered best practices for modern continuous software development'——现代 CI/CD 更推荐主干开发。",
            "【配置一致性】在 Monorepo 中，ESLint 配置需要在根目录定义共享规则，各包可通过 extends 继承并覆盖特定规则。"
        ],
        handsOnPath: [
            "使用 Turborepo 初始化 Monorepo：npx create-turbo@latest",
            "理解 Turborepo 目录结构：apps/（应用）、packages/（共享库）、turbo.json（任务配置）。",
            "配置 turbo.json 定义任务依赖：build 依赖上游包的 build，test 依赖本包的 build。",
            "在根目录创建共享 ESLint 配置（packages/eslint-config/），被其他包 extends。",
            "配置 Prettier 统一代码格式化，集成 husky 和 lint-staged 实现提交前检查。",
            "选择分支策略：功能开发使用 feature/* 分支，发布使用 release/* 分支，紧急修复使用 hotfix/* 分支。"
        ],
        selfCheck: [
            "Turborepo 如何解决 Monorepo 的性能问题？",
            "turbo.json 中的 dependsOn 配置如何工作？",
            "远程缓存的工作原理是什么？",
            "Git Flow 中的 develop 和 main 分支各有什么用途？",
            "ESLint 和 Prettier 的分工是什么？",
            "lint-staged 如何优化提交前检查？"
        ],
        extensions: [
            "比较 Turborepo 和 Nx 的差异，了解各自适用场景。",
            "探索 Changesets 工具，实现 Monorepo 中的版本管理和发布。",
            "学习 Trunk-based Development，理解其与 Git Flow 的对比。",
            "研究 Conventional Commits 规范，配合 commitlint 强制执行。"
        ],
        sourceUrls: [
            "https://turborepo.com/repo/docs",
            "https://eslint.org/docs/latest/use/configure/",
            "https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow"
        ]
    }
}

export const week2Quizzes: Record<string, QuizQuestion[]> = {
    "w2-1": [
        {
            id: "w2-1-q1",
            question: "Next.js 官方对其框架的定位是什么？",
            options: ["一个静态网站生成器", "一个用于构建全栈 Web 应用的 React 框架", "一个纯客户端渲染框架", "一个移动应用开发框架"],
            answer: 1,
            rationale: "Next.js 官方定义为 'a React framework for building full-stack web applications'——用于构建全栈 Web 应用的 React 框架。"
        },
        {
            id: "w2-1-q2",
            question: "Next.js 的 App Router 和 Pages Router 分别位于哪个目录？",
            options: ["/app 和 /src", "/pages 和 /app", "/app 和 /pages", "/routes 和 /pages"],
            answer: 2,
            rationale: "App Router 位于 /app 目录，Pages Router 位于 /pages 目录。App Router 是 Next.js 13+ 推荐的新路由系统。"
        },
        {
            id: "w2-1-q3",
            question: "ISR（Incremental Static Regeneration）的作用是什么？",
            options: ["完全动态渲染页面", "构建时一次性生成所有静态页面", "按需更新静态内容而无需完全重建", "仅在客户端渲染页面"],
            answer: 2,
            rationale: "ISR（增量静态再生）允许按需更新（revalidate）静态内容，无需完全重建站点，适合需要 SEO 又需要定期更新的页面。"
        },
        {
            id: "w2-1-q4",
            question: "React Server Components 的主要特点是什么？",
            options: ["在浏览器中执行，支持所有 Hooks", "在服务器执行，不发送 JavaScript 到客户端", "只能用于静态页面", "必须配合 Redux 使用"],
            answer: 1,
            rationale: "React Server Components 在服务器执行，不发送 JavaScript 到客户端，减少 bundle 大小。但不能使用 useState、useEffect 等客户端 Hooks。"
        },
        {
            id: "w2-1-q5",
            question: "Next.js Commerce 模板采用什么架构模式？",
            options: ["单体架构", "Headless Commerce", "传统 MVC", "纯静态站点"],
            answer: 1,
            rationale: "Next.js Commerce 采用 Headless Commerce 模式，前端与后端分离，支持 Shopify、BigCommerce 等多个电商平台作为后端。"
        },
        {
            id: "w2-1-q6",
            question: "Next.js 官方学习课程包含多少个章节？",
            options: ["8 个章节", "12 个章节", "16 个章节", "20 个章节"],
            answer: 2,
            rationale: "Next.js 官方 Foundations Course 包含 16 个章节，从 React 基础到构建完整的全栈应用。"
        },
        {
            id: "w2-1-q7",
            question: "在 App Router 中，loading.tsx 文件的作用是什么？",
            options: ["定义页面布局", "处理页面错误", "显示加载状态", "定义 API 路由"],
            answer: 2,
            rationale: "loading.tsx 是 App Router 的文件约定之一，用于定义路由的加载状态，配合 React Suspense 工作。"
        },
        {
            id: "w2-1-q8",
            question: "Next.js Commerce 使用什么技术进行样式设计？",
            options: ["Styled Components", "CSS Modules only", "Tailwind CSS", "SASS"],
            answer: 2,
            rationale: "Next.js Commerce 使用 Tailwind CSS 进行样式设计，这是现代 Next.js 项目的常见选择。"
        },
        {
            id: "w2-1-q9",
            question: "App Router 相比 Pages Router 的新特性不包括以下哪项？",
            options: ["Server Components", "并行路由（Parallel Routes）", "拦截路由（Intercepting Routes）", "API Routes"],
            answer: 3,
            rationale: "API Routes 是 Pages Router 的特性。App Router 引入了 Server Components、并行路由、拦截路由等新特性，API 端点使用 Route Handlers 替代。"
        },
        {
            id: "w2-1-q10",
            question: "Next.js 的 generateStaticParams 函数用于什么场景？",
            options: ["处理表单提交", "为动态路由生成静态参数", "创建 API 端点", "管理客户端状态"],
            answer: 1,
            rationale: "generateStaticParams 用于为动态路由预生成静态参数，配合 SSG/ISR 在构建时生成静态页面。"
        },
        {
            id: "w2-1-q11",
            question: "Next.js Learn 课程使用什么数据库技术？",
            options: ["MongoDB", "MySQL", "PostgreSQL（推荐）", "SQLite"],
            answer: 2,
            rationale: "Next.js Learn 课程推荐使用 PostgreSQL 作为数据库，课程中有专门的章节讲解数据库配置和数据获取。"
        },
        {
            id: "w2-1-q12",
            question: "Next.js Commerce 官方维护的主要电商平台集成是？",
            options: ["WooCommerce", "Magento", "Shopify", "PrestaShop"],
            answer: 2,
            rationale: "Vercel 官方维护 Shopify 集成作为主要支持版本。其他平台（BigCommerce、Medusa 等）由社区维护独立仓库。"
        }
    ],
    "w2-2": [
        {
            id: "w2-2-q1",
            question: "Express 官方对路由（Routing）的定义是什么？",
            options: ["处理数据库查询", "定义应用端点如何响应客户端请求", "管理服务器内存", "处理文件上传"],
            answer: 1,
            rationale: "Express 官方定义：'Routing refers to how an application's endpoints (URIs) respond to client requests'——路由定义端点如何响应请求。"
        },
        {
            id: "w2-2-q2",
            question: "Express 中用于处理所有 HTTP 方法的特殊方法是？",
            options: ["app.any()", "app.all()", "app.every()", "app.universal()"],
            answer: 1,
            rationale: "app.all() 是 Express 中用于处理所有 HTTP 方法的特殊方法，常用于中间件处理。"
        },
        {
            id: "w2-2-q3",
            question: "Express 路由参数存储在哪个对象中？",
            options: ["req.body", "req.query", "req.params", "req.headers"],
            answer: 2,
            rationale: "使用 :paramName 语法捕获的 URL 参数存储在 req.params 对象中，如 /users/:userId 的 userId 值。"
        },
        {
            id: "w2-2-q4",
            question: "Node.js Best Practices 推荐什么样的代码组织结构？",
            options: ["按技术层分层（MVC）", "按业务组件组织", "单文件架构", "按字母顺序组织"],
            answer: 1,
            rationale: "Node.js Best Practices 推荐 'Component-Based Structure'——按业务组件（订单、用户、支付）组织代码，而非技术层。"
        },
        {
            id: "w2-2-q5",
            question: "在 Express 中间件中，next() 函数的作用是什么？",
            options: ["终止请求", "返回响应", "传递控制权给下一个中间件", "重定向请求"],
            answer: 2,
            rationale: "next() 函数用于将控制权传递给下一个中间件或路由处理程序。不调用 next() 会导致请求挂起。"
        },
        {
            id: "w2-2-q6",
            question: "根据 RESTful 设计原则，为什么不应该在 URL 中使用动词？",
            options: ["会导致安全问题", "HTTP 方法已表明操作意图", "会降低性能", "浏览器不支持"],
            answer: 1,
            rationale: "RESTful 设计原则：HTTP 方法（GET、POST、PUT、DELETE）已表明操作意图，因此 /workouts 优于 /getWorkouts。"
        },
        {
            id: "w2-2-q7",
            question: "Node.js Best Practices 推荐使用什么替代回调风格的错误处理？",
            options: ["try-catch only", "Event Emitter", "Promises 和 async-await", "全局错误变量"],
            answer: 2,
            rationale: "Node.js Best Practices 强调：使用 Promises 和 async-await 替代回调风格，代码更简洁、可维护。"
        },
        {
            id: "w2-2-q8",
            question: "express.Router() 的主要用途是什么？",
            options: ["处理数据库连接", "创建模块化路由", "管理会话", "处理文件上传"],
            answer: 1,
            rationale: "express.Router() 用于创建模块化路由，将不同业务域的路由分离到独立文件，通过 app.use() 挂载。"
        },
        {
            id: "w2-2-q9",
            question: "RESTful API 中，资源名称应该使用什么形式？",
            options: ["单数名词", "复数名词", "动词", "形容词"],
            answer: 1,
            rationale: "RESTful 设计推荐使用复数名词（/workouts 而非 /workout）表示资源集合，更清晰地表明端点代表集合。"
        },
        {
            id: "w2-2-q10",
            question: "Node.js Best Practices 建议每个组件内部采用什么架构？",
            options: ["单层架构", "三层架构（entry-points、domain logic、data-access）", "五层架构", "无结构"],
            answer: 1,
            rationale: "Node.js Best Practices 推荐三层架构：entry-points（API 控制器）、domain logic（业务逻辑）、data-access（数据访问层）。"
        },
        {
            id: "w2-2-q11",
            question: "API 版本控制的推荐做法是什么？",
            options: ["在请求头中指定版本", "在 URL 路径中包含版本（如 /api/v1/）", "使用查询参数", "不进行版本控制"],
            answer: 1,
            rationale: "REST API 最佳实践推荐在 URL 路径中包含版本，如 /api/v1/workouts，便于并行开发而不破坏现有客户端。"
        },
        {
            id: "w2-2-q12",
            question: "Express 中 app.route() 方法的优势是什么？",
            options: ["提高性能", "支持链式定义同一路径的多个 HTTP 方法", "自动生成文档", "支持 WebSocket"],
            answer: 1,
            rationale: "app.route() 允许链式定义同一路径的多个 HTTP 方法处理程序（.get().post().put()），减少重复代码。"
        }
    ],
    "w2-3": [
        {
            id: "w2-3-q1",
            question: "microservices.io 对单体架构的定义是什么？",
            options: ["多个独立服务的集合", "作为单个可部署单元构建的应用", "仅使用一种编程语言", "只有一个数据库"],
            answer: 1,
            rationale: "microservices.io 定义单体架构为 'architect an application as a single deployable unit'——作为单个可部署单元构建。"
        },
        {
            id: "w2-3-q2",
            question: "Google 电商微服务示例包含多少个独立微服务？",
            options: ["5 个", "8 个", "11 个", "15 个"],
            answer: 2,
            rationale: "Google 电商微服务示例包含 11 个独立微服务，包括购物车服务、支付服务、推荐服务等。"
        },
        {
            id: "w2-3-q3",
            question: "Google 电商示例中，各微服务之间使用什么进行通信？",
            options: ["REST API", "GraphQL", "gRPC", "SOAP"],
            answer: 2,
            rationale: "Google 电商示例中，各服务通过 gRPC 绑定进行跨服务通信，gRPC 提供高效的二进制序列化和流式支持。"
        },
        {
            id: "w2-3-q4",
            question: "microservices.io 列出的两种主要服务拆分策略是什么？",
            options: ["按技术栈和按数据库", "按业务能力和按 DDD 子域", "按团队规模和按代码量", "按性能要求和按安全级别"],
            answer: 1,
            rationale: "microservices.io 描述两种拆分策略：按业务能力（Business Capability）和按 DDD 子域（Subdomain）拆分。"
        },
        {
            id: "w2-3-q5",
            question: "Saga 模式在微服务中的作用是什么？",
            options: ["管理服务发现", "协调跨服务的分布式事务", "处理服务监控", "实现负载均衡"],
            answer: 1,
            rationale: "Saga 模式用于协调跨多个服务的操作，通过一系列本地事务和补偿操作实现最终一致性。"
        },
        {
            id: "w2-3-q6",
            question: "Google 电商示例采用什么部署架构？",
            options: ["单集群部署", "双集群部署", "三集群架构", "无集群部署"],
            answer: 2,
            rationale: "Google 方案采用三集群架构：两个区域集群承载完整栈，一个配置集群负责跨区域负载均衡。"
        },
        {
            id: "w2-3-q7",
            question: "Circuit Breaker（熔断器）模式的作用是什么？",
            options: ["提高网络速度", "防止级联故障", "管理数据库连接", "处理用户认证"],
            answer: 1,
            rationale: "熔断器模式防止级联故障——当下游服务失败率超过阈值时，直接返回降级响应而非继续请求失败的服务。"
        },
        {
            id: "w2-3-q8",
            question: "微服务架构中，为什么每个服务应该有独立的数据库？",
            options: ["节省成本", "防止紧耦合", "提高查询速度", "简化备份"],
            answer: 1,
            rationale: "microservices.io 强调每服务独立数据库是为了防止紧耦合，确保服务可以独立开发、部署和扩展。"
        },
        {
            id: "w2-3-q9",
            question: "CQRS 模式在微服务数据管理中的作用是什么？",
            options: ["处理用户认证", "维护物化视图用于高效查询", "管理服务配置", "实现服务发现"],
            answer: 1,
            rationale: "CQRS（命令查询职责分离）在微服务中用于维护物化视图，支持高效的跨服务数据查询。"
        },
        {
            id: "w2-3-q10",
            question: "Google 电商示例中的购物车服务使用什么编程语言？",
            options: ["Java", "Python", "C#", "Go"],
            answer: 2,
            rationale: "Google 电商示例中，购物车服务采用 C# 和 .NET 开发，支付服务使用 Node.js，推荐服务使用 Python。"
        },
        {
            id: "w2-3-q11",
            question: "API Gateway 在微服务架构中的主要职责是什么？",
            options: ["存储用户数据", "提供统一客户端接口", "管理数据库事务", "执行后台任务"],
            answer: 1,
            rationale: "API Gateway 提供统一客户端接口，处理请求路由、认证、限流等横切关注点，屏蔽后端服务复杂性。"
        },
        {
            id: "w2-3-q12",
            question: "事件溯源（Event Sourcing）的核心思想是什么？",
            options: ["只存储最新状态", "持久化数据为事件序列", "使用关系数据库", "删除历史数据"],
            answer: 1,
            rationale: "事件溯源将状态变更持久化为事件序列，通过重放事件可以重建任意时刻的状态，支持审计和时间旅行调试。"
        }
    ],
    "w2-4": [
        {
            id: "w2-4-q1",
            question: "Turborepo 官方对其定位是什么？",
            options: ["一个 CSS 框架", "一个高性能 JavaScript/TypeScript 构建系统", "一个数据库工具", "一个测试框架"],
            answer: 1,
            rationale: "Turborepo 官方定义为 'a high-performance build system for JavaScript and TypeScript codebases'——高性能构建系统。"
        },
        {
            id: "w2-4-q2",
            question: "Turborepo 解决 Monorepo 什么核心问题？",
            options: ["代码冲突", "任务顺序执行导致的性能瓶颈", "版本管理", "代码审查"],
            answer: 1,
            rationale: "传统 Monorepo 中数千个任务顺序执行造成性能瓶颈，Turborepo 通过并行执行和缓存解决这一问题。"
        },
        {
            id: "w2-4-q3",
            question: "Turborepo 的远程缓存功能有什么作用？",
            options: ["存储用户数据", "避免 CI 系统重复执行相同任务", "管理数据库", "处理用户认证"],
            answer: 1,
            rationale: "远程缓存存储任务结果，使 CI 系统避免重复工作，显著减少构建时间，支持跨团队共享。"
        },
        {
            id: "w2-4-q4",
            question: "ESLint 官方强调的设计理念是什么？",
            options: ["固定不可配置", "高度灵活和可配置", "只支持 JavaScript", "只检查语法错误"],
            answer: 1,
            rationale: "ESLint 官方强调 'designed to be flexible and configurable for your use case'——高度灵活可配置。"
        },
        {
            id: "w2-4-q5",
            question: "Git Flow 中的 develop 分支的用途是什么？",
            options: ["存储正式发布版本", "集成功能分支", "处理紧急修复", "存储配置文件"],
            answer: 1,
            rationale: "Git Flow 中 develop 是集成分支，用于集成完成的功能分支。main 分支存储正式发布版本。"
        },
        {
            id: "w2-4-q6",
            question: "Atlassian 对 Git Flow 在现代开发中的评价是什么？",
            options: ["仍是最佳实践", "已被主干开发取代为最佳实践", "只适合小团队", "只适合开源项目"],
            answer: 1,
            rationale: "Atlassian 指出 'Gitflow has fallen in popularity in favor of trunk-based workflows'——现代 CI/CD 更推荐主干开发。"
        },
        {
            id: "w2-4-q7",
            question: "Turborepo 支持哪些包管理器？",
            options: ["仅 npm", "仅 yarn", "npm、yarn、pnpm", "仅 pnpm"],
            answer: 2,
            rationale: "Turborepo 支持增量采用，与现有 package.json scripts 兼容，支持 npm、yarn、pnpm 包管理器。"
        },
        {
            id: "w2-4-q8",
            question: "在 Turborepo 项目结构中，共享库通常放在哪个目录？",
            options: ["/apps", "/packages", "/lib", "/shared"],
            answer: 1,
            rationale: "Turborepo 标准目录结构：apps/（应用）、packages/（共享库）、turbo.json（任务配置）。"
        },
        {
            id: "w2-4-q9",
            question: "ESLint 配置中可以调整哪些元素？",
            options: ["只有规则", "只有插件", "Globals、Rules、Plugins", "只有解析器"],
            answer: 2,
            rationale: "ESLint 配置可调整 Globals（全局变量）、Rules（规则）、Plugins（插件）等多种元素。"
        },
        {
            id: "w2-4-q10",
            question: "Git Flow 中的 hotfix 分支从哪个分支创建？",
            options: ["develop", "main", "feature", "release"],
            answer: 1,
            rationale: "Git Flow 中 hotfix 分支从 main 创建，用于紧急修复生产问题，完成后合并回 main 和 develop。"
        },
        {
            id: "w2-4-q11",
            question: "Turborepo 如何处理有依赖关系的任务？",
            options: ["全部并行执行", "全部顺序执行", "按正确顺序执行，无依赖时并行", "随机执行"],
            answer: 2,
            rationale: "Turborepo 智能调度：有依赖关系时（build → test）按正确顺序执行，无依赖时并行执行以利用 CPU。"
        },
        {
            id: "w2-4-q12",
            question: "在 Monorepo 中共享 ESLint 配置的推荐方式是什么？",
            options: ["每个包复制配置", "在根目录定义共享规则，各包通过 extends 继承", "不使用 ESLint", "使用全局安装"],
            answer: 1,
            rationale: "在 Monorepo 中，推荐在根目录或 packages/eslint-config 定义共享规则，各包通过 extends 继承并可覆盖特定规则。"
        }
    ]
}
