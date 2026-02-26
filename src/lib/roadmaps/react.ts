import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const reactStages: Stage[] = [
  {
    id: "react-s1",
    title: "阶段一：基础概念与组件模型",
    duration: "第 1-3 周",
    goal: "理解 React 核心思想，掌握 JSX 语法、组件拆分、Props/State 与事件处理，建立声明式 UI 开发思维。",
    weeks: [
      {
        id: "react-w1",
        title: "第 1 周：JSX 与组件基础",
        summary: "理解 JSX 本质、函数组件定义与 React 渲染机制。",
        overview: "React 以组件为核心构建 UI。本周从 JSX 语法入手，理解声明式编程范式与虚拟 DOM 的工作原理，学会创建和组合函数组件。",
        keyPoints: [
          "JSX 是语法糖，编译后调用 React.createElement 生成虚拟 DOM 对象",
          "函数组件是接收 Props 返回 JSX 的纯函数，推荐作为默认组件形式",
          "React 通过虚拟 DOM diff 算法最小化真实 DOM 操作",
        ],
        lessons: [
          {
            id: "react-w1-1",
            title: "React 概述与开发环境",
            detail: "了解 React 的核心理念（声明式、组件化、单向数据流），搭建基于 Vite 的 React 开发环境。",
            keyPoints: [
              "React 采用声明式编程范式，描述 UI 应该是什么样而非如何操作 DOM。",
              "Vite 基于 ESM 原生模块实现毫秒级热更新，是现代 React 项目首选。",
              "create-react-app 已不再推荐，官方建议使用框架或 Vite 初始化项目。",
            ],
            resources: [
              { title: "React 快速入门", url: "https://react.dev/learn" },
              { title: "Vite 创建 React 项目", url: "https://vite.dev/guide/#scaffolding-your-first-vite-project" },
              { title: "React 设计理念", url: "https://react.dev/learn/thinking-in-react" },
            ],
          },
          {
            id: "react-w1-2",
            title: "JSX 语法与表达式",
            detail: "掌握 JSX 中嵌入表达式、条件渲染片段与属性传递的核心语法规则。",
            keyPoints: [
              "JSX 中使用花括号 {} 嵌入 JavaScript 表达式，但不能写语句。",
              "class 写作 className，for 写作 htmlFor，属性使用 camelCase。",
              "JSX 必须有单一根元素，可使用 Fragment (<>...</>) 避免多余 DOM 节点。",
            ],
            resources: [
              { title: "编写 JSX 标记", url: "https://react.dev/learn/writing-markup-with-jsx" },
              { title: "在 JSX 中使用 JavaScript", url: "https://react.dev/learn/javascript-in-jsx-with-curly-braces" },
            ],
          },
          {
            id: "react-w1-3",
            title: "函数组件与组合",
            detail: "定义函数组件，理解组件树的构建方式与组件拆分原则，掌握 children 的用法。",
            keyPoints: [
              "组件名必须大写开头，React 据此区分 HTML 元素与自定义组件。",
              "组件组合优于继承，通过 children 和插槽模式实现灵活的布局复用。",
              "保持组件单一职责，按功能而非技术类型拆分组件。",
            ],
            resources: [
              { title: "你的第一个组件", url: "https://react.dev/learn/your-first-component" },
              { title: "组件的导入与导出", url: "https://react.dev/learn/importing-and-exporting-components" },
              { title: "将 JSX 作为子元素传递", url: "https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children" },
            ],
          },
        ],
      },
      {
        id: "react-w2",
        title: "第 2 周：Props、State 与事件处理",
        summary: "掌握组件间数据流与交互逻辑的核心模式。",
        overview: "Props 和 State 是 React 数据流的两大支柱。本周学习 Props 的单向传递规则、useState 的使用方式，以及事件处理与状态更新的最佳实践。",
        keyPoints: [
          "Props 是只读的，父组件通过 Props 向子组件传递数据和回调",
          "State 是组件内部的可变数据，通过 setState 触发重新渲染",
          "React 事件采用合成事件系统，统一了跨浏览器行为",
        ],
        lessons: [
          {
            id: "react-w2-1",
            title: "Props 传递与类型约束",
            detail: "使用 Props 实现父子组件通信，结合 TypeScript 定义 Props 接口保证类型安全。",
            keyPoints: [
              "Props 是不可变的，子组件不应修改接收到的 Props。",
              "使用 TypeScript interface 或 type 定义 Props 类型，编译期发现错误。",
              "defaultProps 已弃用，推荐使用 ES6 参数默认值设置 Props 默认值。",
            ],
            resources: [
              { title: "向组件传递 Props", url: "https://react.dev/learn/passing-props-to-a-component" },
              { title: "TypeScript 与 React", url: "https://react.dev/learn/typescript" },
            ],
          },
          {
            id: "react-w2-2",
            title: "State 与状态更新",
            detail: "理解 useState 的工作原理，掌握状态不可变更新与批量更新机制。",
            keyPoints: [
              "useState 返回状态值和更新函数，更新函数触发组件重新渲染。",
              "状态更新是异步批量的，同一事件中多次 setState 只触发一次渲染。",
              "更新对象/数组状态时必须创建新引用，不能直接修改原对象。",
            ],
            resources: [
              { title: "State：组件的记忆", url: "https://react.dev/learn/state-a-components-memory" },
              { title: "更新 State 中的对象", url: "https://react.dev/learn/updating-objects-in-state" },
              { title: "更新 State 中的数组", url: "https://react.dev/learn/updating-arrays-in-state" },
            ],
          },
          {
            id: "react-w2-3",
            title: "事件处理与表单交互",
            detail: "掌握 React 合成事件系统，实现受控组件和表单数据收集。",
            keyPoints: [
              "事件处理函数通过 Props 传递，命名惯例为 onXxx/handleXxx。",
              "受控组件将表单值绑定到 State，每次输入都触发 onChange 更新。",
              "使用 e.preventDefault() 阻止表单默认提交，手动处理数据。",
            ],
            resources: [
              { title: "响应事件", url: "https://react.dev/learn/responding-to-events" },
              { title: "State 如何响应输入", url: "https://react.dev/learn/reacting-to-input-with-state" },
            ],
          },
        ],
      },
      {
        id: "react-w3",
        title: "第 3 周：条件渲染、列表与开发工具",
        summary: "掌握动态 UI 渲染技巧与 React 开发者工具的使用。",
        overview: "真实应用需要根据数据动态渲染不同 UI。本周学习条件渲染与列表渲染的多种模式，理解 key 的作用，并熟练使用 React DevTools 调试。",
        keyPoints: [
          "条件渲染可使用三元表达式、&& 短路或提前返回实现",
          "列表渲染必须为每个元素提供稳定唯一的 key，帮助 React 追踪变化",
          "React DevTools 可检查组件树、Props/State 和渲染性能",
        ],
        lessons: [
          {
            id: "react-w3-1",
            title: "条件渲染模式",
            detail: "使用三元表达式、逻辑与运算符和 if 提前返回实现复杂条件渲染逻辑。",
            keyPoints: [
              "简单二选一用三元表达式，显示/隐藏用 && 短路运算符。",
              "复杂分支逻辑推荐提前 return 或抽取为独立组件。",
              "返回 null 不渲染任何内容，但组件仍会执行生命周期。",
            ],
            resources: [
              { title: "条件渲染", url: "https://react.dev/learn/conditional-rendering" },
              { title: "保持组件纯粹", url: "https://react.dev/learn/keeping-components-pure" },
            ],
          },
          {
            id: "react-w3-2",
            title: "列表渲染与 Key",
            detail: "使用 map 渲染动态列表，理解 key 在 React 协调算法中的关键作用。",
            keyPoints: [
              "使用 Array.map() 将数据数组转换为 JSX 元素数组。",
              "key 必须在兄弟元素中唯一，推荐使用数据 ID 而非索引。",
              "错误的 key 会导致状态混乱和不必要的 DOM 重建。",
            ],
            resources: [
              { title: "渲染列表", url: "https://react.dev/learn/rendering-lists" },
              { title: "为什么需要 Key", url: "https://react.dev/learn/rendering-lists#why-does-react-need-keys" },
            ],
          },
          {
            id: "react-w3-3",
            title: "React DevTools 与调试",
            detail: "使用 React DevTools 检查组件树、分析渲染性能、调试 Props 和 State 变化。",
            keyPoints: [
              "Components 面板查看组件层级、Props/State 和 Hooks 值。",
              "Profiler 面板录制渲染过程，定位不必要的重渲染。",
              "StrictMode 在开发环境下双重渲染组件，帮助发现副作用问题。",
            ],
            resources: [
              { title: "React DevTools", url: "https://react.dev/learn/react-developer-tools" },
              { title: "Chrome 扩展安装", url: "https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "react-s2",
    title: "阶段二：Hooks 与状态管理",
    duration: "第 4-6 周",
    goal: "深入掌握 React Hooks 体系，理解副作用管理与性能优化 Hook，学习全局状态管理方案。",
    weeks: [
      {
        id: "react-w4",
        title: "第 4 周：核心 Hooks 深入",
        summary: "深入理解 useEffect、useRef、useMemo 和 useCallback 的使用场景与原理。",
        overview: "Hooks 是 React 函数组件的核心能力。本周深入学习 useEffect 的生命周期模型、useRef 的引用机制，以及 useMemo/useCallback 的性能优化策略。",
        keyPoints: [
          "useEffect 用于处理副作用，依赖数组控制执行时机",
          "useRef 创建跨渲染持久的可变引用，修改不触发重渲染",
          "useMemo/useCallback 缓存计算结果和函数引用，避免不必要的重新计算",
        ],
        lessons: [
          {
            id: "react-w4-1",
            title: "useEffect 与副作用管理",
            detail: "掌握 useEffect 的执行时机、依赖数组规则与清理函数，正确处理数据获取和订阅。",
            keyPoints: [
              "useEffect 在渲染后异步执行，依赖数组为空时仅在挂载时运行。",
              "清理函数在组件卸载或下次 effect 执行前调用，用于取消订阅。",
              "避免在 useEffect 中直接设置状态形成无限循环，正确声明依赖项。",
            ],
            resources: [
              { title: "使用 Effect 同步", url: "https://react.dev/learn/synchronizing-with-effects" },
              { title: "你可能不需要 Effect", url: "https://react.dev/learn/you-might-not-need-an-effect" },
              { title: "Effect 的生命周期", url: "https://react.dev/learn/lifecycle-of-reactive-effects" },
            ],
          },
          {
            id: "react-w4-2",
            title: "useRef 与 DOM 操作",
            detail: "使用 useRef 访问 DOM 元素和存储跨渲染的可变值，理解 ref 与 state 的区别。",
            keyPoints: [
              "useRef 返回的 current 属性在组件整个生命周期内保持不变。",
              "ref 用于访问 DOM 节点（聚焦输入框、滚动、测量尺寸）。",
              "修改 ref.current 不会触发重渲染，适合存储计时器 ID 等非渲染数据。",
            ],
            resources: [
              { title: "使用 Ref 引用值", url: "https://react.dev/learn/referencing-values-with-refs" },
              { title: "使用 Ref 操作 DOM", url: "https://react.dev/learn/manipulating-the-dom-with-refs" },
            ],
          },
          {
            id: "react-w4-3",
            title: "useMemo 与 useCallback",
            detail: "使用 useMemo 缓存昂贵计算结果、useCallback 缓存回调函数引用，避免子组件不必要的重渲染。",
            keyPoints: [
              "useMemo 仅在依赖项变化时重新计算，适合过滤/排序等大数据量操作。",
              "useCallback 缓存函数引用，配合 React.memo 减少子组件渲染。",
              "不要过度优化，只在性能分析确认瓶颈后才使用 memo 系列 Hook。",
            ],
            resources: [
              { title: "useMemo 参考", url: "https://react.dev/reference/react/useMemo" },
              { title: "useCallback 参考", url: "https://react.dev/reference/react/useCallback" },
            ],
          },
        ],
      },
      {
        id: "react-w5",
        title: "第 5 周：自定义 Hooks 与 Context",
        summary: "封装自定义 Hooks 实现逻辑复用，使用 Context API 传递跨组件数据。",
        overview: "自定义 Hooks 是 React 逻辑复用的核心机制。本周学习如何提取和组合自定义 Hooks，并使用 Context API 解决多层级组件的数据传递问题。",
        keyPoints: [
          "自定义 Hook 以 use 开头命名，封装可复用的有状态逻辑",
          "Context 提供跨组件层级的数据传递，避免 Props 逐层透传",
          "Context 适合低频更新的全局数据（主题、用户信息），高频数据考虑其他方案",
        ],
        lessons: [
          {
            id: "react-w5-1",
            title: "自定义 Hooks 设计",
            detail: "提取通用逻辑为自定义 Hooks，掌握 Hooks 的组合模式与最佳设计原则。",
            keyPoints: [
              "自定义 Hook 必须以 use 开头，内部可调用其他 Hooks。",
              "常见模式：useLocalStorage、useFetch、useDebounce、useMediaQuery。",
              "自定义 Hook 每次调用产生独立的状态副本，互不干扰。",
            ],
            resources: [
              { title: "使用自定义 Hook 复用逻辑", url: "https://react.dev/learn/reusing-logic-with-custom-hooks" },
              { title: "useHooks 社区集合", url: "https://usehooks.com/" },
            ],
          },
          {
            id: "react-w5-2",
            title: "Context API 与跨层通信",
            detail: "使用 createContext 和 useContext 实现主题切换、用户认证等跨层级状态共享。",
            keyPoints: [
              "createContext 创建上下文对象，Provider 包裹子树提供值。",
              "useContext 读取最近的 Provider 提供的值，Provider 缺失时使用默认值。",
              "Context 值变化会导致所有消费组件重渲染，需注意性能影响。",
            ],
            resources: [
              { title: "使用 Context 深层传递数据", url: "https://react.dev/learn/passing-data-deeply-with-context" },
              { title: "useContext 参考", url: "https://react.dev/reference/react/useContext" },
            ],
          },
          {
            id: "react-w5-3",
            title: "useReducer 与复杂状态",
            detail: "使用 useReducer 管理复杂状态逻辑，结合 Context 实现轻量级全局状态方案。",
            keyPoints: [
              "useReducer 适合多字段关联更新或状态转换逻辑复杂的场景。",
              "Reducer 是纯函数：接收当前 state 和 action，返回新 state。",
              "Context + useReducer 是小型应用全局状态管理的轻量替代方案。",
            ],
            resources: [
              { title: "使用 Reducer 提取状态逻辑", url: "https://react.dev/learn/extracting-state-logic-into-a-reducer" },
              { title: "useReducer 参考", url: "https://react.dev/reference/react/useReducer" },
              { title: "Context 与 Reducer 结合", url: "https://react.dev/learn/scaling-up-with-reducer-and-context" },
            ],
          },
        ],
      },
      {
        id: "react-w6",
        title: "第 6 周：外部状态管理与数据获取",
        summary: "掌握 Zustand/Redux Toolkit 状态管理和 TanStack Query 数据获取方案。",
        overview: "大型应用需要专业的状态管理和服务端数据缓存方案。本周学习 Zustand 的轻量状态管理、Redux Toolkit 的标准化模式，以及 TanStack Query 的服务端状态管理。",
        keyPoints: [
          "Zustand 是轻量级状态管理库，API 简洁无 Provider 包裹",
          "Redux Toolkit 提供标准化的 Redux 开发模式，减少样板代码",
          "TanStack Query 专注服务端状态，自动处理缓存、重试和后台刷新",
        ],
        lessons: [
          {
            id: "react-w6-1",
            title: "Zustand 状态管理",
            detail: "使用 Zustand 创建轻量级全局 Store，掌握 Slice 模式与中间件扩展。",
            keyPoints: [
              "Zustand 使用 create 函数创建 Store，组件通过选择器订阅部分状态。",
              "选择器只订阅需要的状态片段，避免无关状态变化触发重渲染。",
              "支持 persist 中间件持久化状态、devtools 中间件集成调试工具。",
            ],
            resources: [
              { title: "Zustand 文档", url: "https://zustand.docs.pmnd.rs/getting-started/introduction" },
              { title: "Zustand GitHub", url: "https://github.com/pmndrs/zustand" },
            ],
          },
          {
            id: "react-w6-2",
            title: "Redux Toolkit 基础",
            detail: "使用 Redux Toolkit 的 createSlice 和 configureStore 构建可预测的状态管理架构。",
            keyPoints: [
              "createSlice 自动生成 action creators 和 reducer，内置 Immer 简化不可变更新。",
              "configureStore 默认集成 Redux DevTools 和常用中间件。",
              "createAsyncThunk 处理异步操作，自动派发 pending/fulfilled/rejected action。",
            ],
            resources: [
              { title: "Redux Toolkit 快速入门", url: "https://redux-toolkit.js.org/tutorials/quick-start" },
              { title: "Redux 风格指南", url: "https://redux.js.org/style-guide/" },
            ],
          },
          {
            id: "react-w6-3",
            title: "TanStack Query 数据获取",
            detail: "使用 TanStack Query（React Query）管理服务端状态，实现自动缓存、后台刷新与乐观更新。",
            keyPoints: [
              "useQuery 自动管理 loading/error/success 状态，无需手动 useEffect。",
              "staleTime 和 gcTime 控制缓存新鲜度与回收策略。",
              "useMutation 处理写操作，支持乐观更新和失败自动回滚。",
            ],
            resources: [
              { title: "TanStack Query 文档", url: "https://tanstack.com/query/latest/docs/framework/react/overview" },
              { title: "TanStack Query 快速入门", url: "https://tanstack.com/query/latest/docs/framework/react/quick-start" },
              { title: "SWR 替代方案", url: "https://swr.vercel.app/zh-CN" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "react-s3",
    title: "阶段三：路由与工程化",
    duration: "第 7-9 周",
    goal: "掌握 React Router 路由系统、TypeScript 集成、表单处理与测试体系，构建工程化的 React 应用。",
    weeks: [
      {
        id: "react-w7",
        title: "第 7 周：React Router 与导航",
        summary: "掌握 React Router v6 的声明式路由、嵌套路由与数据加载模式。",
        overview: "单页应用需要客户端路由管理页面导航。本周学习 React Router v6 的核心概念，包括路由配置、参数传递、嵌套布局与路由守卫。",
        keyPoints: [
          "React Router v6 使用声明式 Route 配置和 Outlet 嵌套布局",
          "useParams/useSearchParams/useNavigate 是路由交互的核心 Hooks",
          "loader 和 action 实现路由级数据预加载与表单提交",
        ],
        lessons: [
          {
            id: "react-w7-1",
            title: "路由配置与嵌套路由",
            detail: "使用 createBrowserRouter 配置路由表，通过 Outlet 实现嵌套布局与共享导航。",
            keyPoints: [
              "createBrowserRouter 替代 BrowserRouter，支持 loader/action 数据 API。",
              "嵌套路由通过 Outlet 组件渲染子路由，实现布局复用。",
              "index 路由是父路由的默认子路由，path 为空时匹配父路径。",
            ],
            resources: [
              { title: "React Router 入门教程", url: "https://reactrouter.com/start/library/installation" },
              { title: "路由配置", url: "https://reactrouter.com/start/library/routing" },
            ],
          },
          {
            id: "react-w7-2",
            title: "路由参数与导航",
            detail: "使用动态路由参数、查询参数和编程式导航实现灵活的页面跳转与数据传递。",
            keyPoints: [
              "useParams 获取 URL 中的动态参数（如 /users/:id）。",
              "useSearchParams 读写 URL 查询参数，适合筛选和分页状态。",
              "useNavigate 实现编程式导航，支持 replace 和 state 传递。",
            ],
            resources: [
              { title: "URL 参数", url: "https://reactrouter.com/start/library/url-params" },
              { title: "useNavigate", url: "https://reactrouter.com/api/hooks/useNavigate" },
            ],
          },
          {
            id: "react-w7-3",
            title: "路由守卫与权限控制",
            detail: "实现路由级别的认证检查与权限控制，使用 loader 进行数据预加载。",
            keyPoints: [
              "通过布局路由包裹实现认证守卫，未登录时重定向到登录页。",
              "loader 在路由渲染前加载数据，避免先渲染再请求的瀑布流。",
              "使用 errorElement 处理路由级错误，提供降级 UI。",
            ],
            resources: [
              { title: "数据加载", url: "https://reactrouter.com/start/library/data-loading" },
              { title: "错误处理", url: "https://reactrouter.com/start/library/error-handling" },
              { title: "路由 Actions", url: "https://reactrouter.com/start/library/actions" },
            ],
          },
        ],
      },
      {
        id: "react-w8",
        title: "第 8 周：TypeScript 与表单处理",
        summary: "掌握 TypeScript 在 React 中的最佳实践与 React Hook Form 表单方案。",
        overview: "TypeScript 提供类型安全保障，表单是用户交互的核心场景。本周学习 React + TypeScript 的类型定义模式，以及 React Hook Form 的高效表单管理方案。",
        keyPoints: [
          "TypeScript 为 Props、State、事件、Ref 提供完整的类型定义",
          "React Hook Form 基于非受控组件，性能优于传统受控表单",
          "Zod/Yup schema 验证与 React Hook Form 集成实现声明式表单校验",
        ],
        lessons: [
          {
            id: "react-w8-1",
            title: "TypeScript + React 类型实践",
            detail: "为组件 Props、事件处理、Hooks 和 Context 编写正确的 TypeScript 类型定义。",
            keyPoints: [
              "使用 React.FC 或直接类型标注 Props 参数，推荐后者更灵活。",
              "事件类型：React.ChangeEvent<HTMLInputElement>、React.FormEvent 等。",
              "泛型 Hook：useState<User | null>(null)、useRef<HTMLDivElement>(null)。",
            ],
            resources: [
              { title: "React TypeScript 指南", url: "https://react.dev/learn/typescript" },
              { title: "React TypeScript Cheatsheet", url: "https://react-typescript-cheatsheet.netlify.app/" },
            ],
          },
          {
            id: "react-w8-2",
            title: "React Hook Form 表单管理",
            detail: "使用 React Hook Form 构建高性能表单，掌握注册、验证、错误处理与提交流程。",
            keyPoints: [
              "register 将表单字段注册到 Hook Form，使用非受控模式减少重渲染。",
              "handleSubmit 包裹提交函数，自动执行验证并收集数据。",
              "formState.errors 提供字段级错误信息，支持多种验证规则。",
            ],
            resources: [
              { title: "React Hook Form 文档", url: "https://react-hook-form.com/get-started" },
              { title: "React Hook Form API", url: "https://react-hook-form.com/docs" },
            ],
          },
          {
            id: "react-w8-3",
            title: "Schema 验证与复杂表单",
            detail: "使用 Zod 定义表单 Schema，结合 React Hook Form 的 resolver 实现声明式验证和动态表单。",
            keyPoints: [
              "Zod schema 同时定义数据结构和验证规则，可自动推导 TypeScript 类型。",
              "@hookform/resolvers 将 Zod/Yup schema 集成到 React Hook Form。",
              "useFieldArray 处理动态列表表单（如可增删的联系人列表）。",
            ],
            resources: [
              { title: "Zod 文档", url: "https://zod.dev/" },
              { title: "HookForm Schema 验证", url: "https://react-hook-form.com/get-started#SchemaValidation" },
              { title: "useFieldArray", url: "https://react-hook-form.com/docs/usefieldarray" },
            ],
          },
        ],
      },
      {
        id: "react-w9",
        title: "第 9 周：代码分割与测试",
        summary: "掌握懒加载优化与 React 组件测试体系。",
        overview: "生产应用需要优化加载性能和保证代码质量。本周学习 React.lazy 和 Suspense 的代码分割方案，以及 Vitest + Testing Library 的组件测试最佳实践。",
        keyPoints: [
          "React.lazy 和 Suspense 实现按需加载，减小首屏 bundle 体积",
          "Testing Library 以用户视角测试组件行为而非实现细节",
          "Vitest 兼容 Jest API，基于 Vite 实现快速的测试执行",
        ],
        lessons: [
          {
            id: "react-w9-1",
            title: "代码分割与懒加载",
            detail: "使用 React.lazy 和 Suspense 按路由/组件级别实现代码分割，优化首屏加载时间。",
            keyPoints: [
              "React.lazy(() => import('./Component')) 创建动态加载的组件。",
              "Suspense 包裹懒加载组件，显示 fallback UI 直到加载完成。",
              "路由级代码分割效果最明显，每个页面独立打包按需加载。",
            ],
            resources: [
              { title: "lazy 参考", url: "https://react.dev/reference/react/lazy" },
              { title: "Suspense 参考", url: "https://react.dev/reference/react/Suspense" },
            ],
          },
          {
            id: "react-w9-2",
            title: "Vitest 与组件测试",
            detail: "使用 Vitest 和 React Testing Library 编写组件单元测试，覆盖渲染、交互和异步场景。",
            keyPoints: [
              "Testing Library 通过 screen.getByRole/getByText 以用户视角查询元素。",
              "userEvent 模拟真实用户交互（点击、输入、键盘操作）。",
              "测试异步行为使用 waitFor 或 findBy 查询等待状态变化。",
            ],
            resources: [
              { title: "Vitest 文档", url: "https://vitest.dev/guide/" },
              { title: "Testing Library React", url: "https://testing-library.com/docs/react-testing-library/intro" },
              { title: "Testing Library 查询", url: "https://testing-library.com/docs/queries/about" },
            ],
          },
          {
            id: "react-w9-3",
            title: "Mock 与集成测试",
            detail: "使用 MSW 拦截网络请求进行集成测试，掌握组件间协作和路由场景的测试策略。",
            keyPoints: [
              "MSW（Mock Service Worker）在网络层拦截请求，测试更接近真实环境。",
              "集成测试验证多个组件协作的完整流程，覆盖用户操作路径。",
              "测试覆盖率是参考指标，关注关键路径的行为覆盖而非行数覆盖。",
            ],
            resources: [
              { title: "MSW 文档", url: "https://mswjs.io/docs/" },
              { title: "Testing Library 最佳实践", url: "https://testing-library.com/docs/guiding-principles" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "react-s4",
    title: "阶段四：高级实践与生产部署",
    duration: "第 10-12 周",
    goal: "掌握 React 性能优化、Server Components 与 Next.js 框架、设计系统搭建与 SSR/SSG 渲染策略。",
    weeks: [
      {
        id: "react-w10",
        title: "第 10 周：性能优化",
        summary: "掌握 React 渲染优化、大列表虚拟化与并发特性。",
        overview: "性能是用户体验的核心指标。本周学习 React.memo 减少重渲染、虚拟化长列表、以及 React 18 并发特性的实际应用。",
        keyPoints: [
          "React.memo 对 Props 做浅比较，跳过不必要的子组件重渲染",
          "虚拟化只渲染可视区域内的列表项，大幅降低 DOM 节点数量",
          "useTransition 和 useDeferredValue 将低优先级更新标记为可中断",
        ],
        lessons: [
          {
            id: "react-w10-1",
            title: "渲染优化与 React.memo",
            detail: "使用 React.memo、useMemo、useCallback 组合减少不必要的组件重渲染和昂贵计算。",
            keyPoints: [
              "React.memo 包裹子组件，当 Props 未变化时跳过渲染。",
              "配合 useCallback 稳定回调引用，否则 memo 无法生效。",
              "使用 React DevTools Profiler 定位渲染瓶颈再做针对性优化。",
            ],
            resources: [
              { title: "memo 参考", url: "https://react.dev/reference/react/memo" },
              { title: "优化渲染性能", url: "https://react.dev/learn/render-and-commit" },
            ],
          },
          {
            id: "react-w10-2",
            title: "虚拟化与大列表优化",
            detail: "使用 TanStack Virtual 或 react-window 实现长列表虚拟化，只渲染可视区域内的元素。",
            keyPoints: [
              "虚拟化核心原理：只渲染视口可见的行，滚动时动态替换 DOM 节点。",
              "TanStack Virtual 支持固定行高和动态行高两种模式。",
              "结合 Intersection Observer 实现无限滚动加载更多数据。",
            ],
            resources: [
              { title: "TanStack Virtual", url: "https://tanstack.com/virtual/latest" },
              { title: "react-window", url: "https://github.com/bvaughn/react-window" },
            ],
          },
          {
            id: "react-w10-3",
            title: "并发特性与 Transition",
            detail: "使用 useTransition 和 useDeferredValue 实现可中断的低优先级渲染，保持 UI 响应。",
            keyPoints: [
              "useTransition 将状态更新标记为非紧急，React 可中断并优先处理用户输入。",
              "useDeferredValue 延迟更新衍生值，在高频输入时保持输入框流畅。",
              "Suspense 配合并发特性实现流式渲染和渐进式内容加载。",
            ],
            resources: [
              { title: "useTransition 参考", url: "https://react.dev/reference/react/useTransition" },
              { title: "useDeferredValue 参考", url: "https://react.dev/reference/react/useDeferredValue" },
              { title: "React 并发概述", url: "https://react.dev/blog/2022/03/29/react-v18#what-is-concurrent-react" },
            ],
          },
        ],
      },
      {
        id: "react-w11",
        title: "第 11 周：Server Components 与 Next.js",
        summary: "理解 React Server Components 架构与 Next.js App Router 的全栈开发模式。",
        overview: "React Server Components 是 React 架构的重大演进。本周学习 RSC 的原理与优势，以及 Next.js App Router 的文件系统路由、数据获取和渲染策略。",
        keyPoints: [
          "Server Components 在服务端渲染，零客户端 JS 开销，直接访问后端资源",
          "Next.js App Router 基于文件系统约定路由，默认使用 Server Components",
          "SSR/SSG/ISR 三种渲染策略覆盖不同的性能和数据时效性需求",
        ],
        lessons: [
          {
            id: "react-w11-1",
            title: "React Server Components 原理",
            detail: "理解 Server Components 与 Client Components 的边界划分、数据流模型和序列化约束。",
            keyPoints: [
              "Server Components 标记为默认，需要交互/浏览器 API 时用 'use client' 标记。",
              "Server Components 可以 async/await 直接获取数据，无需 useEffect。",
              "Server Components 不能使用 useState/useEffect 等客户端 Hooks。",
            ],
            resources: [
              { title: "Server Components 介绍", url: "https://react.dev/reference/rsc/server-components" },
              { title: "use client 指令", url: "https://react.dev/reference/rsc/use-client" },
            ],
          },
          {
            id: "react-w11-2",
            title: "Next.js App Router 开发",
            detail: "使用 Next.js App Router 构建全栈应用，掌握文件系统路由、布局嵌套和数据获取模式。",
            keyPoints: [
              "app/ 目录下 page.tsx 定义页面，layout.tsx 定义共享布局。",
              "loading.tsx 和 error.tsx 提供流式加载和错误边界的文件约定。",
              "Server Actions 使用 'use server' 标记函数直接在服务端执行变更操作。",
            ],
            resources: [
              { title: "Next.js 快速开始", url: "https://nextjs.org/docs/getting-started/installation" },
              { title: "App Router 路由", url: "https://nextjs.org/docs/app/building-your-application/routing" },
              { title: "Server Actions", url: "https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations" },
            ],
          },
          {
            id: "react-w11-3",
            title: "渲染策略：SSR、SSG 与 ISR",
            detail: "理解服务端渲染、静态生成与增量静态再生的原理，根据场景选择合适的渲染策略。",
            keyPoints: [
              "SSR 每次请求在服务端渲染 HTML，适合个性化和实时数据页面。",
              "SSG 在构建时生成静态 HTML，适合博客、文档等内容不常变化的页面。",
              "ISR 在 SSG 基础上设定 revalidate 时间，定期重新生成页面兼顾性能与时效性。",
            ],
            resources: [
              { title: "Next.js 渲染策略", url: "https://nextjs.org/docs/app/building-your-application/rendering" },
              { title: "静态与动态渲染", url: "https://nextjs.org/docs/app/building-your-application/rendering/server-components#static-rendering-default" },
            ],
          },
        ],
      },
      {
        id: "react-w12",
        title: "第 12 周：设计系统与组件库",
        summary: "构建可复用的设计系统与组件库，掌握样式方案与无障碍访问。",
        overview: "成熟的 React 项目需要统一的设计系统。本周学习使用 Tailwind CSS 和 Radix UI 构建可访问的组件库，以及 Storybook 驱动的组件开发流程。",
        keyPoints: [
          "设计系统统一颜色、字体、间距等设计令牌，保证 UI 一致性",
          "Radix UI 提供无样式的无障碍原语组件，可自由定制外观",
          "Storybook 提供组件独立开发、文档化和视觉测试环境",
        ],
        lessons: [
          {
            id: "react-w12-1",
            title: "Tailwind CSS 与样式方案",
            detail: "使用 Tailwind CSS 实现原子化样式，结合 CSS 变量和设计令牌构建主题系统。",
            keyPoints: [
              "Tailwind 通过原子类组合样式，避免自定义 CSS 文件膨胀。",
              "使用 tailwind.config.js 定义设计令牌（颜色、间距、断点）。",
              "CSS-in-JS（Styled Components）和 CSS Modules 是其他可选方案。",
            ],
            resources: [
              { title: "Tailwind CSS 文档", url: "https://tailwindcss.com/docs/installation/using-vite" },
              { title: "Tailwind 与 React", url: "https://tailwindcss.com/docs/guides/vite" },
            ],
          },
          {
            id: "react-w12-2",
            title: "无障碍组件与 Radix UI",
            detail: "使用 Radix UI 原语构建符合 WAI-ARIA 标准的无障碍组件，确保键盘和屏幕阅读器可用。",
            keyPoints: [
              "Radix Primitives 提供无样式的对话框、菜单、弹出框等组件。",
              "内置键盘导航、焦点管理和 ARIA 属性，开箱即用的无障碍支持。",
              "shadcn/ui 基于 Radix + Tailwind 提供可复制粘贴的组件代码。",
            ],
            resources: [
              { title: "Radix UI 文档", url: "https://www.radix-ui.com/primitives/docs/overview/introduction" },
              { title: "shadcn/ui", url: "https://ui.shadcn.com/" },
              { title: "WAI-ARIA 实践", url: "https://www.w3.org/WAI/ARIA/apg/" },
            ],
          },
          {
            id: "react-w12-3",
            title: "Storybook 与组件文档",
            detail: "使用 Storybook 搭建组件开发环境，编写 Stories 进行隔离开发、文档化和视觉回归测试。",
            keyPoints: [
              "每个组件编写 Story 展示不同状态和变体，形成活文档。",
              "Controls 面板动态调整 Props，Interactions 面板记录用户操作。",
              "集成 Chromatic 实现组件视觉回归测试，PR 中自动检测 UI 变化。",
            ],
            resources: [
              { title: "Storybook React 教程", url: "https://storybook.js.org/docs/get-started/frameworks/react-vite" },
              { title: "编写 Stories", url: "https://storybook.js.org/docs/writing-stories" },
            ],
          },
        ],
      },
    ],
  },
]

export const reactKnowledgeCards: KnowledgeCard[] = [
  {
    id: "react-card-jsx",
    title: "JSX 与虚拟 DOM",
    summary: "JSX 是 React 声明式 UI 的核心语法扩展。",
    points: [
      "JSX 编译为 React.createElement 调用，生成虚拟 DOM 对象描述 UI 结构。",
      "虚拟 DOM diff 算法对比前后两棵树的差异，最小化真实 DOM 操作。",
      "key 帮助 React 在列表 diff 时正确匹配和复用已有节点。",
    ],
    practice: "创建一个可增删项的 Todo 列表，观察不同 key 策略对 DOM 更新的影响。",
  },
  {
    id: "react-card-hooks",
    title: "Hooks 心智模型",
    summary: "Hooks 让函数组件拥有状态和生命周期能力。",
    points: [
      "useState 管理组件状态，useEffect 处理副作用，useRef 保持跨渲染引用。",
      "Hooks 调用顺序必须稳定，不能在条件语句或循环中调用。",
      "自定义 Hook 封装可复用的有状态逻辑，每次调用产生独立状态。",
    ],
    practice: "实现 useLocalStorage 自定义 Hook，将状态自动同步到 localStorage。",
  },
  {
    id: "react-card-state-management",
    title: "状态管理选型",
    summary: "根据应用规模和数据特征选择合适的状态管理方案。",
    points: [
      "组件内状态用 useState，跨层级用 Context，复杂逻辑用 useReducer。",
      "Zustand 适合中小型应用，API 简洁；Redux Toolkit 适合大型规范化项目。",
      "服务端状态（API 数据）使用 TanStack Query/SWR，与客户端状态分离管理。",
    ],
    practice: "用 Zustand 替换一个使用 Context + useReducer 的全局状态模块，对比代码量。",
  },
  {
    id: "react-card-routing",
    title: "客户端路由",
    summary: "React Router v6 提供声明式路由和数据加载能力。",
    points: [
      "createBrowserRouter 支持 loader/action 数据 API，实现路由级预加载。",
      "嵌套路由 + Outlet 复用共享布局，减少重复代码。",
      "路由守卫通过布局路由组件包裹实现，检查认证状态后决定渲染或重定向。",
    ],
    practice: "使用 React Router v6 实现一个带认证守卫的管理后台，包含嵌套路由和 404 处理。",
  },
  {
    id: "react-card-performance",
    title: "渲染性能优化",
    summary: "理解 React 渲染机制是优化的前提。",
    points: [
      "React.memo + useCallback + useMemo 三件套减少不必要的子组件重渲染。",
      "虚拟化长列表只渲染视口可见元素，DOM 节点数从数千降到几十。",
      "useTransition 将低优先级更新标记为可中断，保持用户输入流畅。",
    ],
    practice: "对一个包含 10000 条数据的列表组件分别应用虚拟化和 React.memo 优化，对比 FPS。",
  },
  {
    id: "react-card-testing",
    title: "组件测试策略",
    summary: "以用户视角测试组件行为，而非测试实现细节。",
    points: [
      "Testing Library 通过角色、文本、标签查询元素，模拟用户交互方式。",
      "MSW 在网络层 Mock API 请求，使集成测试更接近真实环境。",
      "关注用户可感知的行为覆盖，而非追求 100% 代码行覆盖率。",
    ],
    practice: "为一个带搜索和过滤的列表组件编写 Testing Library 测试，覆盖输入、筛选和空状态。",
  },
  {
    id: "react-card-rsc",
    title: "Server Components",
    summary: "React Server Components 将组件渲染移到服务端，减少客户端 JS 体积。",
    points: [
      "Server Components 默认在服务端运行，不发送组件代码到客户端。",
      "需要交互（事件、Hooks）的组件使用 'use client' 标记为 Client Components。",
      "Next.js App Router 完整实现了 RSC 架构，是目前最成熟的落地方案。",
    ],
    practice: "使用 Next.js App Router 创建一个博客应用，区分 Server 和 Client Components。",
  },
  {
    id: "react-card-design-system",
    title: "设计系统与组件库",
    summary: "统一的设计系统是大型应用 UI 一致性的保障。",
    points: [
      "设计令牌（颜色、字体、间距）通过 CSS 变量或 Tailwind 配置统一管理。",
      "Radix Primitives 提供无障碍原语，shadcn/ui 提供可定制的完整组件。",
      "Storybook 驱动组件独立开发和文档化，Chromatic 实现视觉回归测试。",
    ],
    practice: "使用 Radix + Tailwind 搭建 Button/Dialog/Dropdown 三个基础组件并编写 Storybook Stories。",
  },
]

export const reactExamQuestions: QuizQuestion[] = [
  { id: "react-q1", question: "JSX 表达式最终被编译成什么？", options: ["HTML 字符串", "React.createElement 调用", "DOM API 调用", "Web Component"], answer: 1, rationale: "JSX 是语法糖，Babel/SWC 将其编译为 React.createElement（或 jsx 运行时）调用，返回虚拟 DOM 对象。" },
  { id: "react-q2", question: "React 函数组件中，以下哪项不是 Hook 的使用规则？", options: ["只在函数组件或自定义 Hook 中调用", "不能在条件语句中调用", "必须以 use 开头命名", "必须在 useEffect 内调用"], answer: 3, rationale: "Hooks 必须在组件顶层调用，不能嵌套在条件/循环中，但不需要在 useEffect 内调用。" },
  { id: "react-q3", question: "useState 返回的更新函数在同一事件中被多次调用时，React 的行为是？", options: ["每次调用都触发一次渲染", "批量合并后只触发一次渲染", "只执行最后一次调用", "抛出错误"], answer: 1, rationale: "React 18 默认对所有事件中的状态更新进行自动批处理，多次 setState 合并为一次渲染。" },
  { id: "react-q4", question: "列表渲染时使用数组索引作为 key 的主要问题是？", options: ["性能会下降", "列表增删时可能导致状态混乱和错误复用", "React 会报错", "无法使用 TypeScript"], answer: 1, rationale: "索引 key 在列表项增删、排序时会导致 React 错误复用组件状态，应使用稳定唯一的业务 ID。" },
  { id: "react-q5", question: "useEffect 的清理函数在什么时候执行？", options: ["组件首次挂载时", "每次渲染前", "组件卸载时以及下次 effect 执行前", "只在组件报错时"], answer: 2, rationale: "清理函数在组件卸载和每次依赖变化导致 effect 重新执行前调用，用于取消订阅和清理资源。" },
  { id: "react-q6", question: "useRef 与 useState 的主要区别是？", options: ["useRef 更快", "修改 useRef.current 不会触发重新渲染", "useRef 不能存储对象", "useState 不能存储数字"], answer: 1, rationale: "useRef 创建的 ref 对象在组件整个生命周期内保持不变，修改 current 不触发重渲染。" },
  { id: "react-q7", question: "React Context 最适合用于传递什么类型的数据？", options: ["高频更新的表单数据", "大量的列表数据", "低频变化的全局数据（主题、语言、用户信息）", "组件的样式属性"], answer: 2, rationale: "Context 值变化会导致所有消费组件重渲染，适合主题/语言等低频更新的全局数据。" },
  { id: "react-q8", question: "TanStack Query 的 useQuery 相比手动 useEffect 获取数据的优势是？", options: ["不需要后端 API", "自动处理缓存、去重、后台刷新和错误重试", "可以替代数据库", "不需要网络请求"], answer: 1, rationale: "TanStack Query 自动管理服务端状态的缓存、去重、stale-while-revalidate 和错误重试。" },
  { id: "react-q9", question: "React Router v6 中 Outlet 组件的作用是？", options: ["定义路由出口，渲染匹配的子路由组件", "创建新的路由", "替代 Link 组件", "处理 404 页面"], answer: 0, rationale: "Outlet 在父路由的布局组件中充当占位符，渲染当前匹配的子路由组件。" },
  { id: "react-q10", question: "React Hook Form 相比传统受控表单的核心优势是？", options: ["代码更多", "基于非受控组件，减少不必要的重渲染", "不需要验证", "只支持简单表单"], answer: 1, rationale: "React Hook Form 使用非受控模式通过 ref 收集表单值，避免了受控组件每次输入都触发重渲染。" },
  { id: "react-q11", question: "React.memo 的作用是什么？", options: ["缓存计算结果", "当 Props 未变化时跳过组件的重新渲染", "缓存 API 响应", "记录组件日志"], answer: 1, rationale: "React.memo 对组件的 Props 做浅比较，如果 Props 没有变化则跳过渲染，返回上次的结果。" },
  { id: "react-q12", question: "useTransition 的典型使用场景是？", options: ["替代 useState", "将低优先级状态更新标记为可中断，保持 UI 响应", "处理网络请求", "管理表单验证"], answer: 1, rationale: "useTransition 将状态更新标记为 transition（非紧急），React 可中断其渲染以优先处理用户输入。" },
  { id: "react-q13", question: "React Server Components 不能使用以下哪个特性？", options: ["async/await", "数据库查询", "useState 和 useEffect", "读取文件系统"], answer: 2, rationale: "Server Components 在服务端运行，不能使用客户端 Hooks（useState/useEffect）和浏览器 API。" },
  { id: "react-q14", question: "Next.js App Router 中，默认的组件类型是？", options: ["Client Component", "Server Component", "Shared Component", "Static Component"], answer: 1, rationale: "Next.js App Router 中组件默认是 Server Component，需要客户端交互时使用 'use client' 指令。" },
  { id: "react-q15", question: "ISR（增量静态再生）的工作方式是？", options: ["每次请求都服务端渲染", "构建后永不更新", "在 SSG 基础上按 revalidate 间隔重新生成页面", "只在开发模式下可用"], answer: 2, rationale: "ISR 在静态生成的基础上设定 revalidate 时间，到期后在后台重新生成页面，兼顾性能与时效。" },
  { id: "react-q16", question: "Testing Library 推荐的元素查询优先级最高的是？", options: ["getByTestId", "getByRole", "getByClassName", "querySelector"], answer: 1, rationale: "Testing Library 推荐按可访问性角色查询（getByRole），更接近用户和辅助技术感知元素的方式。" },
  { id: "react-q17", question: "Zustand 相比 Redux Toolkit 的主要特点是？", options: ["状态不可预测", "无 Provider 包裹，API 更简洁轻量", "不支持中间件", "必须使用 class 组件"], answer: 1, rationale: "Zustand 不需要 Provider 包裹组件树，API 设计极简，适合中小型应用的状态管理。" },
  { id: "react-q18", question: "React.lazy 配合 Suspense 实现的核心能力是？", options: ["服务端渲染", "组件级代码分割与按需加载", "状态管理", "CSS 动画"], answer: 1, rationale: "React.lazy 动态导入组件代码，Suspense 在组件加载完成前显示 fallback UI，实现按需加载。" },
  { id: "react-q19", question: "Radix UI Primitives 的核心设计理念是？", options: ["提供完整的样式主题", "提供无样式但完全无障碍的组件原语", "替代 React DOM", "只支持 Next.js"], answer: 1, rationale: "Radix Primitives 提供功能完整且符合 WAI-ARIA 标准的无样式组件，开发者可自由定制外观。" },
  { id: "react-q20", question: "在 React 中更新对象状态时为什么不能直接修改原对象？", options: ["JavaScript 不允许修改对象", "直接修改不会改变引用，React 无法检测到变化触发重渲染", "会导致内存泄漏", "TypeScript 不允许"], answer: 1, rationale: "React 通过引用比较检测状态变化，直接修改对象不改变引用地址，setState 比较后认为无变化。" },
]

export const reactRoadmap: RoadmapDefinition = {
  id: "react",
  label: "React 前端",
  title: "React 前端开发学习路线",
  durationLabel: "12 周·36 课时",
  description: "从 JSX 基础到生产实践，系统掌握 React 组件模型、Hooks 体系、状态管理、路由工程化、性能优化与 Server Components，构建现代前端开发能力。",
  heroBadge: "组件模型 · Hooks 体系 · 状态管理 · 性能优化",
  stages: reactStages,
  knowledgeCards: reactKnowledgeCards,
  examQuestions: reactExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "开始 React 之旅，先理解 JSX 语法与组件模型。"
    if (percent < 25) return "继续掌握 Props/State 和事件处理的核心模式。"
    if (percent < 50) return "深入 Hooks 体系和状态管理方案，提升组件开发能力。"
    if (percent < 75) return "学习路由、TypeScript 集成与测试体系，构建工程化能力。"
    if (percent < 100) return "完善性能优化、Server Components 与设计系统实践。"
    return "恭喜完成！你已具备现代 React 全栈开发能力，继续探索 Next.js 生态！"
  },
  resourceGuide: {
    environment: "安装 Node.js 20+，使用 pnpm create vite 创建 React + TypeScript 项目，准备 VS Code + ESLint + Prettier。",
    fallbackKeyPoints: [
      "JSX 是语法糖，编译为 React.createElement 生成虚拟 DOM",
      "Props 只读单向传递，State 通过 setState 触发重渲染",
      "useEffect 处理副作用，依赖数组控制执行时机",
      "React.memo + useCallback + useMemo 减少不必要的重渲染",
      "Server Components 在服务端运行，零客户端 JS 开销",
    ],
    handsOnSteps: [
      "使用 Vite 创建 React + TypeScript 项目，实现一个 Todo 应用",
      "用自定义 Hooks 封装 useLocalStorage 和 useFetch 逻辑复用",
      "集成 React Router v6 实现多页面导航与嵌套布局",
      "使用 TanStack Query 管理 API 数据获取与缓存",
      "用 Next.js App Router 构建一个包含 SSR/SSG 页面的博客项目",
    ],
    selfChecks: [
      "能否解释 React 渲染流程和虚拟 DOM diff 算法？",
      "是否理解 useEffect 的依赖数组和清理函数的执行时机？",
      "能否区分客户端状态与服务端状态的管理方案？",
      "是否掌握 React.memo/useCallback/useMemo 的正确使用场景？",
      "能否说明 Server Components 与 Client Components 的边界划分？",
    ],
    extensions: [
      "深入学习 Next.js 全栈开发，掌握 Server Actions 和中间件",
      "探索 React Native 跨平台移动端开发",
      "学习 Framer Motion/React Spring 实现复杂动画效果",
      "研究 Remix 框架的 Web 标准优先路由方案",
    ],
    lessonQuizAdvice: "每周完成实操项目后做测验，关注理解组件模型和 Hooks 原理而非仅会使用 API。",
  },
}
