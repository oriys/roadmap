import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const domainDrivenDesignStages: Stage[] = [
    {
        id: "phase1",
        title: "第一阶段：DDD 核心理念与战略设计",
        duration: "第 1-4 周",
        goal: "理解 DDD 的核心思想，掌握战略设计的关键概念：领域、子域、限界上下文与统一语言。",
        weeks: [
            {
                id: "w1",
                title: "第 1 周：DDD 概述与核心理念",
                summary: "理解 DDD 的起源、核心思想与价值主张，建立以领域为中心的设计思维。",
                overview: "领域驱动设计（DDD）是 Eric Evans 在 2003 年提出的软件设计方法论，强调将业务领域知识置于软件设计的核心。本周从 DDD 的本质出发，理解为什么复杂业务系统需要 DDD。",
                keyPoints: [
                    "DDD 的核心是应对软件复杂性：通过深入理解业务领域，构建能够准确反映业务的软件模型。",
                    "战略设计 vs 战术设计：战略设计关注宏观的领域划分，战术设计关注具体的代码实现模式。",
                    "DDD 不是银弹：适合复杂业务逻辑的系统，简单 CRUD 应用不需要 DDD 的全部概念。",
                ],
                lessons: [
                    {
                        id: "w1-1",
                        title: "什么是领域驱动设计",
                        detail: "理解 DDD 的定义、起源与核心价值，以及它与其他设计方法的区别。",
                        resources: [
                            { title: "Domain-Driven Design Reference（Eric Evans）", url: "https://www.domainlanguage.com/ddd/reference/" },
                            { title: "What is Domain-Driven Design", url: "https://martinfowler.com/bliki/DomainDrivenDesign.html" },
                            { title: "DDD 入门概述", url: "https://www.infoq.com/articles/ddd-in-practice/" },
                        ],
                    },
                    {
                        id: "w1-2",
                        title: "软件复杂性与 DDD 的应对之道",
                        detail: "分析软件复杂性的来源，理解 DDD 如何通过领域建模降低认知负担。",
                        resources: [
                            { title: "Tackling Complexity in the Heart of Software", url: "https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215" },
                            { title: "复杂性与软件设计", url: "https://www.infoq.cn/article/complexity-domain-driven-design" },
                            { title: "No Silver Bullet - Essence and Accident", url: "https://blog.acolyer.org/2016/09/06/no-silver-bullet-essence-and-accident-in-software-engineering/" },
                        ],
                    },
                    {
                        id: "w1-3",
                        title: "DDD 的适用场景与前提条件",
                        detail: "判断何时应该使用 DDD，以及成功实施 DDD 需要的团队条件和组织支持。",
                        resources: [
                            { title: "DDD and Microservices - Microsoft", url: "https://learn.microsoft.com/en-us/azure/architecture/microservices/model/tactical-ddd" },
                            { title: "DDD 的适用性分析", url: "https://blog.cleancoder.com/uncle-bob/2016/01/04/ALittleArchitecture.html" },
                            { title: "DDD Starter Modelling Process", url: "https://github.com/ddd-crew/ddd-starter-modelling-process" },
                        ],
                    },
                    {
                        id: "w1-4",
                        title: "战略设计与战术设计概览",
                        detail: "建立 DDD 的整体知识地图，理解战略设计和战术设计的关系与分工。",
                        resources: [
                            { title: "Strategic vs Tactical DDD", url: "https://learn.microsoft.com/en-us/azure/architecture/microservices/model/domain-analysis" },
                            { title: "DDD 知识体系", url: "https://github.com/ddd-crew/free-ddd-learning-resources" },
                            { title: "DDD Patterns Overview", url: "https://www.domainlanguage.com/ddd/" },
                        ],
                    },
                ],
            },
            {
                id: "w2",
                title: "第 2 周：领域、子域与问题空间",
                summary: "学习如何识别和划分领域，理解核心域、支撑域、通用域的区别与战略重要性。",
                overview: "在开始建模之前，必须先理解业务的问题空间。本周学习如何识别业务领域，将大领域拆分为可管理的子域，并识别哪些子域是核心竞争力。",
                keyPoints: [
                    "领域（Domain）：软件要解决的业务问题空间，是业务知识和规则的集合。",
                    "子域划分：核心域（Core Domain）是竞争优势，支撑域（Supporting）支持核心业务，通用域（Generic）可外包或购买。",
                    "战略投资：在核心域上投入最多资源，支撑域和通用域尽量复用成熟方案。",
                ],
                lessons: [
                    {
                        id: "w2-1",
                        title: "领域与问题空间分析",
                        detail: "理解领域的定义，学习如何与领域专家协作探索问题空间。",
                        resources: [
                            { title: "Understanding the Domain", url: "https://www.domainlanguage.com/ddd/reference/" },
                            { title: "Problem Space vs Solution Space", url: "https://thedomaindrivendesign.io/problem-space-and-solution-space/" },
                            { title: "领域探索方法", url: "https://www.eventstorming.com/" },
                        ],
                    },
                    {
                        id: "w2-2",
                        title: "核心域、支撑域与通用域",
                        detail: "掌握子域分类方法，学会识别业务中的核心竞争力。",
                        resources: [
                            { title: "Core Domain Patterns", url: "https://www.domainlanguage.com/ddd/reference/" },
                            { title: "Identifying Core Domains", url: "https://medium.com/nick-tune-tech-strategy-blog/core-domain-patterns-941f89446af5" },
                            { title: "子域战略分析", url: "https://www.infoq.com/articles/ddd-core-domain/" },
                        ],
                    },
                    {
                        id: "w2-3",
                        title: "子域划分的实践方法",
                        detail: "学习子域划分的具体技术和工具，包括领域故事讲述和事件风暴。",
                        resources: [
                            { title: "Domain Storytelling", url: "https://domainstorytelling.org/" },
                            { title: "EventStorming for Subdomain Discovery", url: "https://www.eventstorming.com/" },
                            { title: "Wardley Mapping for Domain Analysis", url: "https://learnwardleymapping.com/" },
                        ],
                    },
                    {
                        id: "w2-4",
                        title: "案例：电商系统的子域划分",
                        detail: "通过电商系统案例，实践子域识别与分类的完整过程。",
                        resources: [
                            { title: "E-commerce DDD Example", url: "https://github.com/ddd-by-examples/library" },
                            { title: "电商领域建模实例", url: "https://www.infoq.cn/article/ddd-ecommerce-domain-model" },
                            { title: "Real-world DDD Examples", url: "https://github.com/zkavtaskin/Domain-Driven-Design-Example" },
                        ],
                    },
                ],
            },
            {
                id: "w3",
                title: "第 3 周：限界上下文与解决方案空间",
                summary: "理解限界上下文的核心概念，学会从问题空间过渡到解决方案空间。",
                overview: "限界上下文（Bounded Context）是 DDD 最重要的战略设计概念。它定义了模型的边界，确保概念在边界内的一致性。本周深入理解限界上下文的本质与划分方法。",
                keyPoints: [
                    "限界上下文定义了模型的语义边界：同一个词在不同上下文中可能有不同含义。",
                    "限界上下文 ≠ 微服务：一个限界上下文可能包含多个服务，也可能多个上下文在一个服务中。",
                    "上下文划分原则：高内聚、低耦合，按业务能力而非技术分层划分。",
                ],
                lessons: [
                    {
                        id: "w3-1",
                        title: "限界上下文的本质",
                        detail: "深入理解限界上下文的定义、作用，以及它如何解决大型系统中的概念混淆问题。",
                        resources: [
                            { title: "Bounded Context（Martin Fowler）", url: "https://martinfowler.com/bliki/BoundedContext.html" },
                            { title: "限界上下文详解", url: "https://www.domainlanguage.com/ddd/reference/" },
                            { title: "Context is King", url: "https://www.infoq.com/presentations/ddd-microservices-2016/" },
                        ],
                    },
                    {
                        id: "w3-2",
                        title: "如何识别与划分限界上下文",
                        detail: "学习识别限界上下文的信号和划分方法，避免常见的划分误区。",
                        resources: [
                            { title: "Identifying Bounded Contexts", url: "https://medium.com/nick-tune-tech-strategy-blog/bounded-context-design-heuristics-f1ae7faf7aa5" },
                            { title: "Context Mapping Patterns", url: "https://www.infoq.com/articles/ddd-contextmapping/" },
                            { title: "限界上下文划分启发式规则", url: "https://github.com/ddd-crew/bounded-context-canvas" },
                        ],
                    },
                    {
                        id: "w3-3",
                        title: "限界上下文画布",
                        detail: "使用限界上下文画布工具，系统化地描述和设计限界上下文。",
                        resources: [
                            { title: "Bounded Context Canvas", url: "https://github.com/ddd-crew/bounded-context-canvas" },
                            { title: "Canvas 使用指南", url: "https://medium.com/nick-tune-tech-strategy-blog/bounded-context-canvas-v2-simplifications-and-டextensions-f4c7f3cc5e4d" },
                            { title: "团队拓扑与限界上下文", url: "https://teamtopologies.com/" },
                        ],
                    },
                    {
                        id: "w3-4",
                        title: "限界上下文与微服务的关系",
                        detail: "理解限界上下文与微服务的联系和区别，避免机械地将上下文映射为服务。",
                        resources: [
                            { title: "Bounded Context vs Microservice", url: "https://www.infoq.com/articles/microservices-bounded-context-domain-driven-design/" },
                            { title: "DDD and Microservices", url: "https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/" },
                            { title: "从限界上下文到微服务", url: "https://microservices.io/patterns/decomposition/decompose-by-subdomain.html" },
                        ],
                    },
                ],
            },
            {
                id: "w4",
                title: "第 4 周：统一语言与领域建模基础",
                summary: "掌握统一语言的构建方法，学习领域模型的基本概念与建模原则。",
                overview: "统一语言（Ubiquitous Language）是 DDD 的基石，它确保开发团队与业务专家使用相同的术语。本周学习如何建立和维护统一语言，以及领域模型的基本概念。",
                keyPoints: [
                    "统一语言是业务与技术的桥梁：代码中的命名必须反映领域术语，而非技术术语。",
                    "统一语言是演进的：随着对领域理解的深入，语言会不断精化和调整。",
                    "领域模型是统一语言的载体：模型中的实体、值对象、服务都应使用统一语言命名。",
                ],
                lessons: [
                    {
                        id: "w4-1",
                        title: "统一语言的重要性",
                        detail: "理解为什么统一语言是 DDD 成功的关键，以及语言不一致带来的问题。",
                        resources: [
                            { title: "Ubiquitous Language（Martin Fowler）", url: "https://martinfowler.com/bliki/UbiquitousLanguage.html" },
                            { title: "The Power of Ubiquitous Language", url: "https://www.domainlanguage.com/ddd/reference/" },
                            { title: "语言的力量", url: "https://www.infoq.cn/article/ubiquitous-language-in-ddd" },
                        ],
                    },
                    {
                        id: "w4-2",
                        title: "如何建立统一语言",
                        detail: "学习与领域专家协作建立统一语言的方法和工具，包括词汇表、模型和代码。",
                        resources: [
                            { title: "Building Ubiquitous Language", url: "https://www.infoq.com/articles/ddd-ubiquitous-language/" },
                            { title: "Domain Glossary", url: "https://github.com/ddd-crew/ddd-glossary" },
                            { title: "从对话到代码的语言一致性", url: "https://www.domainlanguage.com/ddd/" },
                        ],
                    },
                    {
                        id: "w4-3",
                        title: "领域模型概述",
                        detail: "理解领域模型的定义、作用，以及贫血模型与充血模型的区别。",
                        resources: [
                            { title: "Domain Model（Martin Fowler）", url: "https://martinfowler.com/eaaCatalog/domainModel.html" },
                            { title: "Anemic Domain Model", url: "https://martinfowler.com/bliki/AnemicDomainModel.html" },
                            { title: "Rich Domain Model", url: "https://www.infoq.com/articles/domain-model-anemic-rich/" },
                        ],
                    },
                    {
                        id: "w4-4",
                        title: "领域建模的基本原则",
                        detail: "掌握领域建模的核心原则，包括模型的简洁性、可理解性和可演进性。",
                        resources: [
                            { title: "Domain Modeling Principles", url: "https://www.domainlanguage.com/ddd/reference/" },
                            { title: "Effective Domain Modeling", url: "https://www.infoq.com/presentations/effective-domain-modelling/" },
                            { title: "Model Exploration Whirlpool", url: "https://www.domainlanguage.com/ddd/whirlpool/" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase2",
        title: "第二阶段：战术设计模式",
        duration: "第 5-8 周",
        goal: "掌握 DDD 的战术设计模式：实体、值对象、聚合、仓储、领域服务与领域事件。",
        weeks: [
            {
                id: "w5",
                title: "第 5 周：实体与值对象",
                summary: "深入理解实体与值对象的区别，掌握它们的设计原则与实现方法。",
                overview: "实体（Entity）和值对象（Value Object）是 DDD 中最基础的构建块。理解它们的本质区别和设计原则，是掌握战术设计的第一步。",
                keyPoints: [
                    "实体由标识定义：即使所有属性相同，不同 ID 代表不同实体（如两个同名用户）。",
                    "值对象由属性定义：没有标识，完全由属性值决定相等性（如货币金额、地址）。",
                    "值对象应该不可变：通过替换而非修改来改变值，简化并发和状态管理。",
                ],
                lessons: [
                    {
                        id: "w5-1",
                        title: "实体：标识与生命周期",
                        detail: "理解实体的定义、标识策略（UUID、序列号、自然键）以及实体的生命周期管理。",
                        resources: [
                            { title: "Entity（DDD Reference）", url: "https://www.domainlanguage.com/ddd/reference/" },
                            { title: "Entity Identity Strategies", url: "https://www.infoq.com/articles/entity-identity-strategies/" },
                            { title: "实体设计最佳实践", url: "https://enterprisecraftsmanship.com/posts/entity-identity-vs-value-object/" },
                        ],
                    },
                    {
                        id: "w5-2",
                        title: "值对象：不可变性与相等性",
                        detail: "掌握值对象的设计原则，理解不可变性带来的好处，学习值对象的实现技巧。",
                        resources: [
                            { title: "Value Object（Martin Fowler）", url: "https://martinfowler.com/bliki/ValueObject.html" },
                            { title: "Implementing Value Objects", url: "https://enterprisecraftsmanship.com/posts/value-objects-explained/" },
                            { title: "值对象与原始类型痴迷", url: "https://www.infoq.com/articles/primitive-obsession/" },
                        ],
                    },
                    {
                        id: "w5-3",
                        title: "实体 vs 值对象的选择",
                        detail: "学习判断某个概念应该建模为实体还是值对象的方法和启发式规则。",
                        resources: [
                            { title: "Entity vs Value Object", url: "https://enterprisecraftsmanship.com/posts/entity-vs-value-object-the-ultimate-list-of-differences/" },
                            { title: "选择指南", url: "https://www.infoq.cn/article/entity-vs-value-object-ddd" },
                            { title: "When to Use Value Objects", url: "https://www.domainlanguage.com/ddd/reference/" },
                        ],
                    },
                    {
                        id: "w5-4",
                        title: "实体与值对象的代码实现",
                        detail: "通过代码示例学习实体和值对象的实现模式，包括相等性比较、哈希码、工厂方法。",
                        resources: [
                            { title: "DDD 代码实现（Java）", url: "https://github.com/ddd-by-examples/library" },
                            { title: "DDD 代码实现（.NET）", url: "https://github.com/dotnet-architecture/eShopOnContainers" },
                            { title: "Value Object 实现模式", url: "https://enterprisecraftsmanship.com/posts/value-object-implementation/" },
                        ],
                    },
                ],
            },
            {
                id: "w6",
                title: "第 6 周：聚合与聚合根",
                summary: "掌握聚合设计的核心原则，理解聚合根如何维护业务不变量。",
                overview: "聚合（Aggregate）是 DDD 中确保数据一致性的关键模式。它定义了一组必须作为整体保持一致的对象边界。本周深入理解聚合设计的原则和技巧。",
                keyPoints: [
                    "聚合是一致性边界：聚合内的所有对象必须满足业务不变量，跨聚合只能最终一致。",
                    "聚合根是唯一入口：外部只能通过聚合根访问聚合内的对象，保护内部一致性。",
                    "聚合应该尽量小：小聚合减少锁冲突，提高并发性能，但要确保业务规则完整性。",
                ],
                lessons: [
                    {
                        id: "w6-1",
                        title: "聚合的本质：一致性边界",
                        detail: "理解聚合作为事务一致性边界的含义，以及为什么需要聚合来保护业务不变量。",
                        resources: [
                            { title: "Aggregate（DDD Reference）", url: "https://www.domainlanguage.com/ddd/reference/" },
                            { title: "Effective Aggregate Design（Vaughn Vernon）", url: "https://www.dddcommunity.org/library/vernon_2011/" },
                            { title: "聚合设计详解", url: "https://www.infoq.cn/article/aggregate-design-in-ddd" },
                        ],
                    },
                    {
                        id: "w6-2",
                        title: "聚合根与边界设计",
                        detail: "学习如何识别聚合根，以及如何划定聚合边界以保护业务不变量。",
                        resources: [
                            { title: "Aggregate Root", url: "https://martinfowler.com/bliki/AggregateRoot.html" },
                            { title: "聚合边界划分", url: "https://www.infoq.com/articles/ddd-aggregate-boundaries/" },
                            { title: "Aggregate Design Rules", url: "https://www.dddcommunity.org/library/vernon_2011/" },
                        ],
                    },
                    {
                        id: "w6-3",
                        title: "聚合设计的四条规则",
                        detail: "掌握 Vaughn Vernon 提出的聚合设计四条规则，以及违反规则的后果。",
                        resources: [
                            { title: "Four Rules of Aggregate Design", url: "https://www.dddcommunity.org/library/vernon_2011/" },
                            { title: "Aggregate Design Heuristics", url: "https://www.infoq.com/presentations/aggregate-design-heuristics/" },
                            { title: "聚合设计原则实践", url: "https://enterprisecraftsmanship.com/posts/aggregate-design-rules/" },
                        ],
                    },
                    {
                        id: "w6-4",
                        title: "跨聚合引用与最终一致性",
                        detail: "理解聚合之间如何通过 ID 引用而非对象引用，以及跨聚合操作的最终一致性实现。",
                        resources: [
                            { title: "Inter-Aggregate Communication", url: "https://www.infoq.com/articles/ddd-aggregates/" },
                            { title: "跨聚合一致性方案", url: "https://microservices.io/patterns/data/saga.html" },
                            { title: "Aggregate References by ID", url: "https://www.dddcommunity.org/library/vernon_2011/" },
                        ],
                    },
                ],
            },
            {
                id: "w7",
                title: "第 7 周：仓储与工厂",
                summary: "掌握仓储模式和工厂模式，学习如何管理聚合的持久化与创建。",
                overview: "仓储（Repository）封装了聚合的持久化逻辑，工厂（Factory）封装了聚合的创建逻辑。本周学习这两种模式如何保持领域模型的纯净。",
                keyPoints: [
                    "仓储是聚合的集合抽象：提供类似集合的接口，隐藏底层持久化细节。",
                    "每个聚合根一个仓储：只有聚合根有仓储，内部对象通过聚合根访问。",
                    "工厂封装复杂创建逻辑：当对象创建涉及复杂规则或多步骤时使用工厂。",
                ],
                lessons: [
                    {
                        id: "w7-1",
                        title: "仓储模式：持久化的抽象",
                        detail: "理解仓储模式的定义和作用，学习仓储接口的设计原则。",
                        resources: [
                            { title: "Repository（Martin Fowler）", url: "https://martinfowler.com/eaaCatalog/repository.html" },
                            { title: "Repository Pattern in DDD", url: "https://www.domainlanguage.com/ddd/reference/" },
                            { title: "仓储模式详解", url: "https://enterprisecraftsmanship.com/posts/repository-pattern-implementation/" },
                        ],
                    },
                    {
                        id: "w7-2",
                        title: "仓储的实现策略",
                        detail: "学习仓储的不同实现方式，包括内存实现、ORM 集成、以及查询优化。",
                        resources: [
                            { title: "Repository Implementation", url: "https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-design" },
                            { title: "仓储与 ORM", url: "https://www.infoq.com/articles/repository-orm-ddd/" },
                            { title: "Repository vs DAO", url: "https://enterprisecraftsmanship.com/posts/repository-vs-dao/" },
                        ],
                    },
                    {
                        id: "w7-3",
                        title: "工厂模式：复杂对象的创建",
                        detail: "理解何时需要工厂，学习工厂方法和抽象工厂在 DDD 中的应用。",
                        resources: [
                            { title: "Factory（DDD Reference）", url: "https://www.domainlanguage.com/ddd/reference/" },
                            { title: "Factory Pattern in DDD", url: "https://www.infoq.com/articles/ddd-factory-pattern/" },
                            { title: "工厂 vs 构造函数", url: "https://enterprisecraftsmanship.com/posts/when-to-use-factory/" },
                        ],
                    },
                    {
                        id: "w7-4",
                        title: "仓储与工厂的协作",
                        detail: "理解仓储和工厂如何协作管理聚合的完整生命周期。",
                        resources: [
                            { title: "Object Lifecycle in DDD", url: "https://www.domainlanguage.com/ddd/reference/" },
                            { title: "Aggregate Lifecycle Management", url: "https://www.infoq.com/articles/ddd-lifecycle/" },
                            { title: "实践：订单系统的仓储与工厂", url: "https://github.com/ddd-by-examples/library" },
                        ],
                    },
                ],
            },
            {
                id: "w8",
                title: "第 8 周：领域服务与领域事件",
                summary: "掌握领域服务的使用场景，理解领域事件如何实现限界上下文间的解耦。",
                overview: "领域服务处理不属于任何实体的领域逻辑，领域事件记录领域中发生的重要事情。本周学习这两种模式的设计与实现。",
                keyPoints: [
                    "领域服务是无状态的操作：当领域逻辑不属于任何实体或值对象时使用领域服务。",
                    "领域事件记录已发生的事实：命名使用过去时态，代表领域中的重要事件。",
                    "事件驱动实现解耦：通过发布/订阅模式，实现限界上下文间的松耦合集成。",
                ],
                lessons: [
                    {
                        id: "w8-1",
                        title: "领域服务：跨实体的业务逻辑",
                        detail: "理解领域服务的定义和使用场景，区分领域服务与应用服务。",
                        resources: [
                            { title: "Domain Service（DDD Reference）", url: "https://www.domainlanguage.com/ddd/reference/" },
                            { title: "Domain Service vs Application Service", url: "https://enterprisecraftsmanship.com/posts/domain-vs-application-services/" },
                            { title: "领域服务设计原则", url: "https://www.infoq.cn/article/domain-service-in-ddd" },
                        ],
                    },
                    {
                        id: "w8-2",
                        title: "领域事件：记录领域中的重要事件",
                        detail: "学习领域事件的定义、命名规范、以及事件的结构设计。",
                        resources: [
                            { title: "Domain Events（Martin Fowler）", url: "https://martinfowler.com/eaaDev/DomainEvent.html" },
                            { title: "Implementing Domain Events", url: "https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/domain-events-design-implementation" },
                            { title: "领域事件设计", url: "https://www.infoq.com/articles/domain-events/" },
                        ],
                    },
                    {
                        id: "w8-3",
                        title: "事件的发布与订阅",
                        detail: "学习领域事件的发布机制，以及同步和异步订阅的实现方式。",
                        resources: [
                            { title: "Event Publishing Patterns", url: "https://microservices.io/patterns/data/event-sourcing.html" },
                            { title: "事件发布策略", url: "https://www.infoq.com/articles/event-publishing/" },
                            { title: "Transactional Outbox", url: "https://microservices.io/patterns/data/transactional-outbox.html" },
                        ],
                    },
                    {
                        id: "w8-4",
                        title: "事件驱动的限界上下文集成",
                        detail: "理解如何使用领域事件实现限界上下文之间的异步集成。",
                        resources: [
                            { title: "Event-Driven Integration", url: "https://martinfowler.com/articles/201701-event-driven.html" },
                            { title: "Bounded Context Integration", url: "https://www.infoq.com/articles/ddd-contextmapping/" },
                            { title: "事件驱动架构与 DDD", url: "https://www.infoq.cn/article/event-driven-ddd" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase3",
        title: "第三阶段：架构模式与 CQRS",
        duration: "第 9-12 周",
        goal: "掌握支持 DDD 的架构模式，深入理解 CQRS 和事件溯源。",
        weeks: [
            {
                id: "w9",
                title: "第 9 周：分层架构与整洁架构",
                summary: "理解分层架构的演进，掌握整洁架构的核心原则与实现。",
                overview: "架构是 DDD 战术模式的载体。本周从传统分层架构出发，理解依赖倒置原则如何催生整洁架构，以及如何用架构保护领域模型。",
                keyPoints: [
                    "传统分层架构：表现层 → 业务层 → 数据访问层，依赖方向向下。",
                    "依赖倒置：领域层不依赖基础设施，通过接口定义依赖，实现反向依赖。",
                    "整洁架构：领域模型在最内层，应用层、基础设施层在外层，依赖向内。",
                ],
                lessons: [
                    {
                        id: "w9-1",
                        title: "传统分层架构的问题",
                        detail: "分析传统三层/四层架构的局限性，理解为什么领域模型容易被污染。",
                        resources: [
                            { title: "Layered Architecture", url: "https://martinfowler.com/bliki/PresentationDomainDataLayering.html" },
                            { title: "传统分层的问题", url: "https://www.infoq.cn/article/layer-architecture-problems" },
                            { title: "From Layers to Onion", url: "https://www.infoq.com/articles/from-layers-to-onion/" },
                        ],
                    },
                    {
                        id: "w9-2",
                        title: "整洁架构原则",
                        detail: "深入理解整洁架构的核心原则，学习如何组织代码使领域逻辑独立于框架和基础设施。",
                        resources: [
                            { title: "Clean Architecture（Robert C. Martin）", url: "https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html" },
                            { title: "整洁架构详解", url: "https://www.infoq.cn/article/clean-architecture-explained" },
                            { title: "Dependency Rule", url: "https://khalilstemmler.com/articles/software-design-architecture/organizing-app-logic/" },
                        ],
                    },
                    {
                        id: "w9-3",
                        title: "整洁架构的代码组织",
                        detail: "学习整洁架构中各层的职责和代码组织方式，包括实体、用例、接口适配器。",
                        resources: [
                            { title: "Clean Architecture Code Structure", url: "https://github.com/jasontaylordev/CleanArchitecture" },
                            { title: "代码组织最佳实践", url: "https://khalilstemmler.com/articles/software-design-architecture/organizing-app-logic/" },
                            { title: "整洁架构实现示例", url: "https://github.com/ardalis/CleanArchitecture" },
                        ],
                    },
                    {
                        id: "w9-4",
                        title: "整洁架构与 DDD 的结合",
                        detail: "理解整洁架构如何与 DDD 战术模式配合，实现真正以领域为中心的设计。",
                        resources: [
                            { title: "DDD and Clean Architecture", url: "https://www.infoq.com/articles/ddd-clean-architecture/" },
                            { title: "整洁架构中的 DDD 模式", url: "https://khalilstemmler.com/articles/domain-driven-design-intro/" },
                            { title: "实践案例", url: "https://github.com/dotnet-architecture/eShopOnContainers" },
                        ],
                    },
                ],
            },
            {
                id: "w10",
                title: "第 10 周：六边形架构（端口与适配器）",
                summary: "掌握六边形架构的设计原则，理解端口与适配器如何实现技术无关性。",
                overview: "六边形架构（Hexagonal Architecture）通过端口和适配器将应用核心与外部世界隔离。本周深入理解这一架构模式的本质和实现方法。",
                keyPoints: [
                    "应用核心是六边形中心：包含领域模型和应用服务，不依赖任何外部技术。",
                    "端口是接口：定义应用核心与外部世界的交互契约（驱动端口和被驱动端口）。",
                    "适配器是实现：实现端口接口，处理具体的技术细节（HTTP、数据库、消息队列）。",
                ],
                lessons: [
                    {
                        id: "w10-1",
                        title: "六边形架构的核心思想",
                        detail: "理解 Alistair Cockburn 提出的六边形架构的核心理念和目标。",
                        resources: [
                            { title: "Hexagonal Architecture（Alistair Cockburn）", url: "https://alistair.cockburn.us/hexagonal-architecture/" },
                            { title: "六边形架构详解", url: "https://www.infoq.cn/article/hexagonal-architecture-explained" },
                            { title: "Ports and Adapters", url: "https://herbertograca.com/2017/09/14/ports-adapters-architecture/" },
                        ],
                    },
                    {
                        id: "w10-2",
                        title: "驱动端口与被驱动端口",
                        detail: "学习区分驱动端口（入站）和被驱动端口（出站），以及各自的设计原则。",
                        resources: [
                            { title: "Primary and Secondary Ports", url: "https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/" },
                            { title: "Port Design Patterns", url: "https://www.infoq.com/articles/hexagonal-architecture-ports/" },
                            { title: "端口设计实践", url: "https://blog.octo.com/en/hexagonal-architecture-three-principles-and-an-implementation-example/" },
                        ],
                    },
                    {
                        id: "w10-3",
                        title: "适配器的实现策略",
                        detail: "学习不同类型适配器的实现方式，包括 REST 适配器、数据库适配器、消息适配器。",
                        resources: [
                            { title: "Adapter Implementation", url: "https://www.infoq.com/articles/hexagonal-architecture-adapters/" },
                            { title: "适配器模式在六边形架构中", url: "https://herbertograca.com/2017/09/14/ports-adapters-architecture/" },
                            { title: "实现示例", url: "https://github.com/thombergs/buckpal" },
                        ],
                    },
                    {
                        id: "w10-4",
                        title: "六边形架构的测试策略",
                        detail: "理解六边形架构如何简化测试，学习使用假适配器进行单元测试和集成测试。",
                        resources: [
                            { title: "Testing in Hexagonal Architecture", url: "https://www.infoq.com/articles/hexagonal-architecture-testing/" },
                            { title: "Mock vs Fake Adapters", url: "https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/" },
                            { title: "测试金字塔与六边形", url: "https://blog.octo.com/en/hexagonal-architecture-three-principles-and-an-implementation-example/" },
                        ],
                    },
                ],
            },
            {
                id: "w11",
                title: "第 11 周：CQRS 模式",
                summary: "深入理解命令查询职责分离，掌握 CQRS 的设计原则与实现方式。",
                overview: "CQRS（Command Query Responsibility Segregation）将读写模型分离，允许针对不同需求独立优化。本周深入学习 CQRS 的原理和实践。",
                keyPoints: [
                    "读写分离：命令（写）和查询（读）使用不同的模型，可以独立扩展和优化。",
                    "最终一致性：写模型和读模型之间通常是最终一致的，需要处理数据同步。",
                    "CQRS 不是必须的：简单系统不需要 CQRS，它增加了复杂性但解决了特定问题。",
                ],
                lessons: [
                    {
                        id: "w11-1",
                        title: "CQRS 的核心思想",
                        detail: "理解 CQRS 的定义、起源，以及它解决的问题。",
                        resources: [
                            { title: "CQRS（Martin Fowler）", url: "https://martinfowler.com/bliki/CQRS.html" },
                            { title: "CQRS Pattern（Greg Young）", url: "https://cqrs.files.wordpress.com/2010/11/cqrs_documents.pdf" },
                            { title: "CQRS 详解", url: "https://www.infoq.cn/article/cqrs-explained" },
                        ],
                    },
                    {
                        id: "w11-2",
                        title: "命令模型设计",
                        detail: "学习命令模型的设计原则，包括命令对象、命令处理器和聚合的协作。",
                        resources: [
                            { title: "Command Model Design", url: "https://docs.microsoft.com/en-us/azure/architecture/patterns/cqrs" },
                            { title: "命令模式在 CQRS 中", url: "https://www.infoq.com/articles/cqrs-command-model/" },
                            { title: "Command Handlers", url: "https://enterprisecraftsmanship.com/posts/cqrs-commands-part-3/" },
                        ],
                    },
                    {
                        id: "w11-3",
                        title: "查询模型设计",
                        detail: "学习查询模型的设计原则，包括查询优化、物化视图和读模型同步。",
                        resources: [
                            { title: "Query Model Design", url: "https://docs.microsoft.com/en-us/azure/architecture/patterns/cqrs" },
                            { title: "Read Model Projections", url: "https://www.infoq.com/articles/cqrs-read-model/" },
                            { title: "查询优化策略", url: "https://enterprisecraftsmanship.com/posts/cqrs-read-models/" },
                        ],
                    },
                    {
                        id: "w11-4",
                        title: "CQRS 的适用场景与权衡",
                        detail: "分析 CQRS 的适用场景，理解引入 CQRS 的成本和收益。",
                        resources: [
                            { title: "When to Use CQRS", url: "https://martinfowler.com/bliki/CQRS.html" },
                            { title: "CQRS 的权衡", url: "https://www.infoq.com/articles/cqrs-tradeoffs/" },
                            { title: "CQRS 反模式", url: "https://enterprisecraftsmanship.com/posts/cqrs-commands-part-1/" },
                        ],
                    },
                ],
            },
            {
                id: "w12",
                title: "第 12 周：事件溯源",
                summary: "掌握事件溯源的核心原理，理解它与 CQRS 的结合使用。",
                overview: "事件溯源（Event Sourcing）将状态变更作为事件序列存储，而非只存储当前状态。本周学习事件溯源的原理和实现方法。",
                keyPoints: [
                    "事件即真相：不存储当前状态，而是存储导致状态变化的所有事件。",
                    "状态重建：通过重放事件序列，可以重建任意时间点的状态。",
                    "事件溯源 + CQRS：事件溯源作为写模型，通过事件投影构建读模型。",
                ],
                lessons: [
                    {
                        id: "w12-1",
                        title: "事件溯源的核心原理",
                        detail: "理解事件溯源的定义、与传统 CRUD 的区别，以及它解决的问题。",
                        resources: [
                            { title: "Event Sourcing（Martin Fowler）", url: "https://martinfowler.com/eaaDev/EventSourcing.html" },
                            { title: "Event Sourcing Explained", url: "https://www.eventstore.com/event-sourcing" },
                            { title: "事件溯源详解", url: "https://www.infoq.cn/article/event-sourcing-explained" },
                        ],
                    },
                    {
                        id: "w12-2",
                        title: "事件存储与事件流",
                        detail: "学习事件存储的设计，包括事件结构、事件流、版本控制和并发处理。",
                        resources: [
                            { title: "Event Store Design", url: "https://www.eventstore.com/docs" },
                            { title: "Event Stream Patterns", url: "https://www.infoq.com/articles/event-store-design/" },
                            { title: "Optimistic Concurrency", url: "https://www.eventstore.com/blog/event-sourcing-and-cqrs" },
                        ],
                    },
                    {
                        id: "w12-3",
                        title: "快照与性能优化",
                        detail: "学习使用快照优化事件重放性能，以及快照策略的设计。",
                        resources: [
                            { title: "Snapshot Pattern", url: "https://docs.microsoft.com/en-us/azure/architecture/patterns/event-sourcing" },
                            { title: "快照策略设计", url: "https://www.infoq.com/articles/event-sourcing-snapshots/" },
                            { title: "Performance Optimization", url: "https://www.eventstore.com/blog/event-sourcing-and-cqrs" },
                        ],
                    },
                    {
                        id: "w12-4",
                        title: "事件演化与版本管理",
                        detail: "学习如何处理事件结构的演化，包括事件升级和向后兼容。",
                        resources: [
                            { title: "Event Versioning", url: "https://www.eventstore.com/blog/event-versioning" },
                            { title: "事件演化策略", url: "https://www.infoq.com/articles/event-versioning/" },
                            { title: "Schema Evolution", url: "https://blog.confluent.io/2016/07/27/apache-avro-schema-evolution-and-compatibility/" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase4",
        title: "第四阶段：上下文映射与集成",
        duration: "第 13-16 周",
        goal: "掌握限界上下文之间的集成模式，学习反腐层、发布语言等协作模式。",
        weeks: [
            {
                id: "w13",
                title: "第 13 周：上下文映射概述",
                summary: "理解上下文映射的作用，掌握识别和记录上下文关系的方法。",
                overview: "上下文映射（Context Mapping）描述了限界上下文之间的关系。本周学习如何识别、分类和记录这些关系，为集成设计奠定基础。",
                keyPoints: [
                    "上下文映射是组织层面的：它不仅描述技术集成，更反映团队之间的协作关系。",
                    "九种映射模式：从合作关系到分离方式，每种模式适用于不同的组织和技术场景。",
                    "上下文映射图：可视化工具，帮助团队理解系统的宏观结构和依赖关系。",
                ],
                lessons: [
                    {
                        id: "w13-1",
                        title: "上下文映射的意义",
                        detail: "理解为什么需要上下文映射，以及它如何帮助管理分布式系统的复杂性。",
                        resources: [
                            { title: "Context Mapping（DDD Reference）", url: "https://www.domainlanguage.com/ddd/reference/" },
                            { title: "上下文映射详解", url: "https://www.infoq.com/articles/ddd-contextmapping/" },
                            { title: "Strategic Domain Driven Design", url: "https://www.infoq.com/presentations/strategic-ddd/" },
                        ],
                    },
                    {
                        id: "w13-2",
                        title: "上下文关系的分类",
                        detail: "学习九种上下文映射模式的定义和特点。",
                        resources: [
                            { title: "Context Mapping Patterns", url: "https://github.com/ddd-crew/context-mapping" },
                            { title: "九种映射模式详解", url: "https://www.infoq.cn/article/context-mapping-patterns" },
                            { title: "Relationships Between Contexts", url: "https://www.domainlanguage.com/ddd/reference/" },
                        ],
                    },
                    {
                        id: "w13-3",
                        title: "绘制上下文映射图",
                        detail: "学习如何绘制上下文映射图，以及图中各种符号的含义。",
                        resources: [
                            { title: "Context Map Canvas", url: "https://github.com/ddd-crew/context-mapping" },
                            { title: "绘制上下文图", url: "https://www.infoq.com/articles/context-map-drawing/" },
                            { title: "可视化工具", url: "https://contextmapper.org/" },
                        ],
                    },
                    {
                        id: "w13-4",
                        title: "从映射到设计决策",
                        detail: "理解如何根据上下文映射结果做出架构和集成设计决策。",
                        resources: [
                            { title: "From Mapping to Design", url: "https://www.infoq.com/articles/context-mapping-design/" },
                            { title: "架构决策记录", url: "https://adr.github.io/" },
                            { title: "Strategic Design Decisions", url: "https://www.domainlanguage.com/ddd/" },
                        ],
                    },
                ],
            },
            {
                id: "w14",
                title: "第 14 周：协作型映射模式",
                summary: "掌握合作关系、共享内核、客户-供应商等协作型映射模式。",
                overview: "协作型映射模式适用于团队之间有良好沟通和协作意愿的场景。本周学习这些模式的定义、适用场景和实现方式。",
                keyPoints: [
                    "合作关系（Partnership）：两个上下文紧密协作，同步演进，适合同一团队或紧密合作的团队。",
                    "共享内核（Shared Kernel）：共享一部分模型代码，需要严格的协调机制。",
                    "客户-供应商（Customer-Supplier）：下游影响上游的优先级，但上游仍有最终决定权。",
                ],
                lessons: [
                    {
                        id: "w14-1",
                        title: "合作关系模式",
                        detail: "理解合作关系模式的定义、适用场景和实施要点。",
                        resources: [
                            { title: "Partnership Pattern", url: "https://www.domainlanguage.com/ddd/reference/" },
                            { title: "合作关系模式详解", url: "https://www.infoq.com/articles/partnership-pattern/" },
                            { title: "Team Collaboration", url: "https://teamtopologies.com/" },
                        ],
                    },
                    {
                        id: "w14-2",
                        title: "共享内核模式",
                        detail: "学习共享内核的设计原则，以及如何管理共享代码的变更。",
                        resources: [
                            { title: "Shared Kernel Pattern", url: "https://www.domainlanguage.com/ddd/reference/" },
                            { title: "共享内核的风险与收益", url: "https://www.infoq.com/articles/shared-kernel/" },
                            { title: "Managing Shared Code", url: "https://www.infoq.cn/article/shared-kernel-management" },
                        ],
                    },
                    {
                        id: "w14-3",
                        title: "客户-供应商模式",
                        detail: "理解客户-供应商关系的动态，学习如何建立有效的需求沟通机制。",
                        resources: [
                            { title: "Customer-Supplier Pattern", url: "https://www.domainlanguage.com/ddd/reference/" },
                            { title: "客户供应商关系管理", url: "https://www.infoq.com/articles/customer-supplier/" },
                            { title: "API Contract", url: "https://martinfowler.com/articles/consumerDrivenContracts.html" },
                        ],
                    },
                    {
                        id: "w14-4",
                        title: "遵奉者模式",
                        detail: "理解遵奉者（Conformist）模式，以及何时选择遵循上游模型。",
                        resources: [
                            { title: "Conformist Pattern", url: "https://www.domainlanguage.com/ddd/reference/" },
                            { title: "遵奉者模式详解", url: "https://www.infoq.com/articles/conformist-pattern/" },
                            { title: "When to Conform", url: "https://www.infoq.cn/article/when-to-conform" },
                        ],
                    },
                ],
            },
            {
                id: "w15",
                title: "第 15 周：防御型映射模式",
                summary: "掌握反腐层、开放主机服务、发布语言等防御型映射模式。",
                overview: "当团队之间缺乏协作或需要隔离外部系统影响时，需要使用防御型映射模式。本周学习如何保护自己的领域模型不被外部系统污染。",
                keyPoints: [
                    "反腐层（ACL）：在两个上下文之间建立翻译层，保护本地模型不受外部模型影响。",
                    "开放主机服务（OHS）：定义标准化的服务接口，供多个下游上下文使用。",
                    "发布语言（PL）：定义通用的交换格式，作为上下文间的通信协议。",
                ],
                lessons: [
                    {
                        id: "w15-1",
                        title: "反腐层模式",
                        detail: "深入理解反腐层的设计和实现，学习如何在边界处进行模型翻译。",
                        resources: [
                            { title: "Anti-Corruption Layer", url: "https://docs.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer" },
                            { title: "反腐层设计详解", url: "https://www.infoq.com/articles/anti-corruption-layer/" },
                            { title: "ACL Implementation", url: "https://www.infoq.cn/article/acl-implementation" },
                        ],
                    },
                    {
                        id: "w15-2",
                        title: "开放主机服务模式",
                        detail: "学习如何设计开放主机服务，以及版本管理和演进策略。",
                        resources: [
                            { title: "Open Host Service", url: "https://www.domainlanguage.com/ddd/reference/" },
                            { title: "开放主机服务设计", url: "https://www.infoq.com/articles/open-host-service/" },
                            { title: "API Design for OHS", url: "https://cloud.google.com/apis/design" },
                        ],
                    },
                    {
                        id: "w15-3",
                        title: "发布语言模式",
                        detail: "理解发布语言的作用，学习如何设计上下文间的通信协议。",
                        resources: [
                            { title: "Published Language", url: "https://www.domainlanguage.com/ddd/reference/" },
                            { title: "发布语言设计", url: "https://www.infoq.com/articles/published-language/" },
                            { title: "Schema Design", url: "https://json-schema.org/" },
                        ],
                    },
                    {
                        id: "w15-4",
                        title: "分离方式与大泥球",
                        detail: "理解何时选择分离方式（Separate Ways），以及如何识别和避免大泥球。",
                        resources: [
                            { title: "Separate Ways", url: "https://www.domainlanguage.com/ddd/reference/" },
                            { title: "Big Ball of Mud", url: "http://www.laputan.org/mud/" },
                            { title: "避免大泥球", url: "https://www.infoq.com/articles/avoiding-big-ball-of-mud/" },
                        ],
                    },
                ],
            },
            {
                id: "w16",
                title: "第 16 周：微服务与 DDD 集成",
                summary: "学习如何将 DDD 概念应用于微服务架构，实现服务间的有效集成。",
                overview: "微服务架构天然契合 DDD 的限界上下文概念。本周学习如何将 DDD 原则应用于微服务设计，以及服务间的集成模式。",
                keyPoints: [
                    "限界上下文到微服务：限界上下文是服务边界的自然候选，但不是一对一映射。",
                    "事件驱动集成：使用领域事件实现服务间的异步、松耦合集成。",
                    "Saga 模式：处理跨服务的业务流程，实现最终一致性。",
                ],
                lessons: [
                    {
                        id: "w16-1",
                        title: "从限界上下文到微服务",
                        detail: "学习如何将限界上下文映射为微服务，以及需要考虑的因素。",
                        resources: [
                            { title: "DDD and Microservices", url: "https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/" },
                            { title: "限界上下文与微服务", url: "https://www.infoq.com/articles/ddd-microservices-boundaries/" },
                            { title: "Decomposition Patterns", url: "https://microservices.io/patterns/decomposition/decompose-by-subdomain.html" },
                        ],
                    },
                    {
                        id: "w16-2",
                        title: "事件驱动的服务集成",
                        detail: "学习使用领域事件实现微服务之间的异步集成。",
                        resources: [
                            { title: "Event-Driven Microservices", url: "https://www.confluent.io/blog/build-services-backbone-events/" },
                            { title: "事件驱动集成", url: "https://microservices.io/patterns/data/event-driven-architecture.html" },
                            { title: "Domain Events in Microservices", url: "https://www.infoq.com/articles/domain-events-microservices/" },
                        ],
                    },
                    {
                        id: "w16-3",
                        title: "Saga 模式：分布式事务",
                        detail: "深入理解 Saga 模式，学习编排式和协同式 Saga 的实现。",
                        resources: [
                            { title: "Saga Pattern", url: "https://microservices.io/patterns/data/saga.html" },
                            { title: "Saga 模式详解", url: "https://www.infoq.com/articles/saga-pattern/" },
                            { title: "Saga vs 2PC", url: "https://www.infoq.cn/article/saga-vs-2pc" },
                        ],
                    },
                    {
                        id: "w16-4",
                        title: "API 网关与 BFF 模式",
                        detail: "学习 API 网关和 BFF（Backend For Frontend）在 DDD 微服务架构中的作用。",
                        resources: [
                            { title: "API Gateway Pattern", url: "https://microservices.io/patterns/apigateway.html" },
                            { title: "BFF Pattern", url: "https://samnewman.io/patterns/architectural/bff/" },
                            { title: "网关与限界上下文", url: "https://www.infoq.com/articles/api-gateway-ddd/" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase5",
        title: "第五阶段：实践与进阶",
        duration: "第 17-20 周",
        goal: "通过事件风暴等协作方法实践 DDD，学习最佳实践与常见反模式。",
        weeks: [
            {
                id: "w17",
                title: "第 17 周：事件风暴",
                summary: "掌握事件风暴方法，学习如何组织和主持领域探索工作坊。",
                overview: "事件风暴（EventStorming）是 Alberto Brandolini 发明的协作建模方法。本周学习如何使用事件风暴探索领域、发现限界上下文和设计聚合。",
                keyPoints: [
                    "事件风暴是协作工具：将开发者和领域专家聚集在一起，共同探索领域。",
                    "三种级别：大图（Big Picture）探索业务流程，流程建模细化流程，软件设计产出技术模型。",
                    "从事件出发：以领域事件为中心，逆向探索触发事件的命令和产生事件的聚合。",
                ],
                lessons: [
                    {
                        id: "w17-1",
                        title: "事件风暴概述",
                        detail: "理解事件风暴的起源、核心理念和价值主张。",
                        resources: [
                            { title: "EventStorming（Alberto Brandolini）", url: "https://www.eventstorming.com/" },
                            { title: "事件风暴介绍", url: "https://www.infoq.com/articles/event-storming-workshop/" },
                            { title: "EventStorming Book", url: "https://leanpub.com/introducing_eventstorming" },
                        ],
                    },
                    {
                        id: "w17-2",
                        title: "大图事件风暴",
                        detail: "学习如何组织大图事件风暴，探索业务流程和发现问题。",
                        resources: [
                            { title: "Big Picture EventStorming", url: "https://www.eventstorming.com/workshops/" },
                            { title: "大图事件风暴指南", url: "https://www.infoq.cn/article/big-picture-event-storming" },
                            { title: "Workshop Facilitation", url: "https://www.eventstorming.com/facilitation/" },
                        ],
                    },
                    {
                        id: "w17-3",
                        title: "流程建模事件风暴",
                        detail: "学习如何细化业务流程，识别政策、读模型和外部系统。",
                        resources: [
                            { title: "Process Modelling EventStorming", url: "https://www.eventstorming.com/workshops/" },
                            { title: "流程建模详解", url: "https://www.infoq.com/articles/process-modelling-event-storming/" },
                            { title: "识别限界上下文", url: "https://www.eventstorming.com/bounded-contexts/" },
                        ],
                    },
                    {
                        id: "w17-4",
                        title: "软件设计事件风暴",
                        detail: "学习如何从事件风暴产出转化为聚合、命令和领域事件的设计。",
                        resources: [
                            { title: "Design-Level EventStorming", url: "https://www.eventstorming.com/workshops/" },
                            { title: "从事件风暴到代码", url: "https://www.infoq.com/articles/event-storming-to-code/" },
                            { title: "聚合设计", url: "https://www.eventstorming.com/aggregates/" },
                        ],
                    },
                ],
            },
            {
                id: "w18",
                title: "第 18 周：领域建模实战",
                summary: "通过实际案例练习领域建模，从需求到代码的完整流程。",
                overview: "本周通过一个完整的案例，实践从业务需求分析到领域模型设计再到代码实现的全过程。",
                keyPoints: [
                    "从业务需求出发：与领域专家协作，理解业务问题和目标。",
                    "迭代式建模：模型不是一次性完成的，而是随着理解深入不断演进。",
                    "代码即模型：代码应该准确反映领域模型，而不是偏离模型的技术实现。",
                ],
                lessons: [
                    {
                        id: "w18-1",
                        title: "案例分析：需求理解",
                        detail: "学习如何与领域专家沟通，理解业务需求和领域知识。",
                        resources: [
                            { title: "Domain Expert Interviews", url: "https://www.infoq.com/articles/domain-expert-interviews/" },
                            { title: "需求分析方法", url: "https://www.infoq.cn/article/requirement-analysis-ddd" },
                            { title: "Knowledge Crunching", url: "https://www.domainlanguage.com/ddd/" },
                        ],
                    },
                    {
                        id: "w18-2",
                        title: "案例分析：战略设计",
                        detail: "实践子域划分和限界上下文识别。",
                        resources: [
                            { title: "Strategic Design Practice", url: "https://www.infoq.com/articles/strategic-design-practice/" },
                            { title: "战略设计实践", url: "https://github.com/ddd-crew/ddd-starter-modelling-process" },
                            { title: "Case Study", url: "https://github.com/ddd-by-examples/library" },
                        ],
                    },
                    {
                        id: "w18-3",
                        title: "案例分析：战术设计",
                        detail: "实践实体、值对象、聚合的设计。",
                        resources: [
                            { title: "Tactical Design Practice", url: "https://www.infoq.com/articles/tactical-design-practice/" },
                            { title: "战术设计实践", url: "https://github.com/ddd-by-examples/library" },
                            { title: "Aggregate Design Workshop", url: "https://github.com/ddd-crew/aggregate-design-canvas" },
                        ],
                    },
                    {
                        id: "w18-4",
                        title: "案例分析：代码实现",
                        detail: "将领域模型转化为可运行的代码。",
                        resources: [
                            { title: "DDD 代码实现", url: "https://github.com/ddd-by-examples/library" },
                            { title: "代码结构设计", url: "https://www.infoq.com/articles/ddd-code-structure/" },
                            { title: "测试驱动开发与 DDD", url: "https://enterprisecraftsmanship.com/posts/tdd-ddd/" },
                        ],
                    },
                ],
            },
            {
                id: "w19",
                title: "第 19 周：DDD 最佳实践",
                summary: "学习 DDD 实施的最佳实践，以及如何在团队中推广 DDD。",
                overview: "本周总结 DDD 实施的最佳实践，包括团队协作、技术选型和持续演进。",
                keyPoints: [
                    "领域优先：先理解领域，再考虑技术实现，避免技术驱动的设计。",
                    "持续学习：领域知识是不断演进的，团队需要持续学习和改进模型。",
                    "渐进式采用：不需要一次性应用所有 DDD 概念，可以从核心域开始逐步推广。",
                ],
                lessons: [
                    {
                        id: "w19-1",
                        title: "团队协作实践",
                        detail: "学习如何在团队中建立 DDD 文化，促进开发者与领域专家的协作。",
                        resources: [
                            { title: "DDD Team Collaboration", url: "https://www.infoq.com/articles/ddd-team-collaboration/" },
                            { title: "团队协作最佳实践", url: "https://www.infoq.cn/article/ddd-team-practices" },
                            { title: "Domain Experts Integration", url: "https://www.domainlanguage.com/ddd/" },
                        ],
                    },
                    {
                        id: "w19-2",
                        title: "技术选型与框架",
                        detail: "了解支持 DDD 的技术栈和框架选择。",
                        resources: [
                            { title: "DDD Frameworks Comparison", url: "https://www.infoq.com/articles/ddd-frameworks/" },
                            { title: "技术选型指南", url: "https://www.infoq.cn/article/ddd-tech-stack" },
                            { title: "Axon Framework", url: "https://docs.axoniq.io/reference-guide/" },
                        ],
                    },
                    {
                        id: "w19-3",
                        title: "模型演进与重构",
                        detail: "学习如何安全地演进和重构领域模型。",
                        resources: [
                            { title: "Model Evolution", url: "https://www.infoq.com/articles/model-evolution/" },
                            { title: "模型重构策略", url: "https://www.infoq.cn/article/model-refactoring" },
                            { title: "Refactoring Toward Deeper Insight", url: "https://www.domainlanguage.com/ddd/" },
                        ],
                    },
                    {
                        id: "w19-4",
                        title: "渐进式采用 DDD",
                        detail: "学习如何在现有项目中逐步引入 DDD 概念。",
                        resources: [
                            { title: "Incremental DDD Adoption", url: "https://www.infoq.com/articles/incremental-ddd/" },
                            { title: "渐进式 DDD", url: "https://www.infoq.cn/article/incremental-ddd-adoption" },
                            { title: "Starting with DDD", url: "https://www.domainlanguage.com/ddd/" },
                        ],
                    },
                ],
            },
            {
                id: "w20",
                title: "第 20 周：常见反模式与总结",
                summary: "识别和避免 DDD 实施中的常见反模式，总结学习成果。",
                overview: "本周回顾 DDD 实施中的常见陷阱和反模式，总结整个学习路径的关键知识点。",
                keyPoints: [
                    "贫血领域模型：最常见的反模式，领域对象只有数据没有行为。",
                    "过度设计：对简单问题使用复杂的 DDD 模式，增加不必要的复杂性。",
                    "忽略统一语言：代码命名与业务术语不一致，导致沟通障碍。",
                ],
                lessons: [
                    {
                        id: "w20-1",
                        title: "贫血模型反模式",
                        detail: "深入理解贫血模型的危害，学习如何重构为充血模型。",
                        resources: [
                            { title: "Anemic Domain Model", url: "https://martinfowler.com/bliki/AnemicDomainModel.html" },
                            { title: "贫血模型重构", url: "https://www.infoq.com/articles/anemic-domain-model-refactoring/" },
                            { title: "Rich vs Anemic", url: "https://enterprisecraftsmanship.com/posts/anemic-domain-model/" },
                        ],
                    },
                    {
                        id: "w20-2",
                        title: "其他常见反模式",
                        detail: "识别 CRUD 思维、过大聚合、忽略限界上下文等反模式。",
                        resources: [
                            { title: "DDD Anti-Patterns", url: "https://www.infoq.com/articles/ddd-anti-patterns/" },
                            { title: "常见反模式列表", url: "https://www.infoq.cn/article/ddd-anti-patterns" },
                            { title: "Avoiding Common Mistakes", url: "https://enterprisecraftsmanship.com/posts/ddd-pitfalls/" },
                        ],
                    },
                    {
                        id: "w20-3",
                        title: "DDD 学习路径总结",
                        detail: "回顾 DDD 的核心概念和学习要点，建立知识体系。",
                        resources: [
                            { title: "DDD Learning Path", url: "https://github.com/ddd-crew/free-ddd-learning-resources" },
                            { title: "DDD 知识图谱", url: "https://www.infoq.cn/article/ddd-knowledge-map" },
                            { title: "DDD Reference", url: "https://www.domainlanguage.com/ddd/reference/" },
                        ],
                    },
                    {
                        id: "w20-4",
                        title: "持续学习与社区资源",
                        detail: "了解 DDD 社区资源，规划持续学习路径。",
                        resources: [
                            { title: "DDD Community", url: "https://www.dddcommunity.org/" },
                            { title: "DDD Europe", url: "https://dddeurope.com/" },
                            { title: "DDD Crew Resources", url: "https://github.com/ddd-crew" },
                        ],
                    },
                ],
            },
        ],
    },
]

export const domainDrivenDesignKnowledgeCards: KnowledgeCard[] = [
    {
        id: "card1",
        title: "限界上下文的本质",
        summary: "限界上下文是 DDD 最重要的战略设计概念，它定义了模型的语义边界。",
        points: [
            "同一个词在不同上下文中可能有完全不同的含义（如「产品」在销售和库存上下文）。",
            "限界上下文 ≠ 微服务：这是逻辑边界，不一定对应物理部署单元。",
            "边界内保持统一语言一致，边界之间通过上下文映射协作。",
        ],
        practice: "分析你当前项目中的核心概念，识别它们在不同场景下的含义差异，尝试划分限界上下文。",
    },
    {
        id: "card2",
        title: "聚合设计四原则",
        summary: "Vaughn Vernon 提出的聚合设计四条规则是战术设计的核心指导。",
        points: [
            "在聚合边界内保护业务不变量：聚合是一致性边界。",
            "设计小聚合：减少锁冲突，提高并发性能。",
            "通过 ID 而非对象引用其他聚合：降低耦合，支持分布式。",
            "使用最终一致性更新其他聚合：跨聚合不强求事务一致性。",
        ],
        practice: "审查现有系统中的聚合设计，检查是否违反了这四条原则，特别关注聚合是否过大。",
    },
    {
        id: "card3",
        title: "实体 vs 值对象",
        summary: "区分实体和值对象的关键在于是否需要标识来区分不同实例。",
        points: [
            "实体由标识定义：即使属性完全相同，不同 ID 代表不同实体。",
            "值对象由属性定义：属性值相同则相等，应设计为不可变。",
            "优先使用值对象：值对象更简单、更容易测试、没有副作用。",
        ],
        practice: "识别项目中被错误建模为实体的值对象（如地址、金额），重构为不可变的值对象。",
    },
    {
        id: "card4",
        title: "统一语言的力量",
        summary: "统一语言是 DDD 成功的基石，它是业务与技术之间的桥梁。",
        points: [
            "代码命名必须使用领域术语，而非技术术语（如用 OrderPlaced 而非 OrderCreatedEvent）。",
            "统一语言是演进的：随着对领域理解加深，语言会不断精化。",
            "维护领域词汇表：记录术语定义，确保团队理解一致。",
        ],
        practice: "建立项目的领域词汇表，检查代码中的命名是否与领域术语一致。",
    },
    {
        id: "card5",
        title: "CQRS 的适用场景",
        summary: "CQRS 将读写模型分离，但它不是银弹，需要权衡复杂性收益。",
        points: [
            "读写负载差异大时适用：读多写少，可以独立扩展读模型。",
            "读写模型差异大时适用：写模型遵循 DDD，读模型针对查询优化。",
            "增加了复杂性：需要处理读写模型的数据同步，引入最终一致性。",
        ],
        practice: "分析项目的读写模式，判断是否适合引入 CQRS，如果不适合就不要强行使用。",
    },
    {
        id: "card6",
        title: "事件溯源的权衡",
        summary: "事件溯源将状态变更存储为事件序列，提供完整的审计能力，但也有挑战。",
        points: [
            "完整历史记录：可以重建任意时间点的状态，天然支持审计。",
            "事件不可变：需要仔细设计事件结构，演化时要向后兼容。",
            "查询复杂：需要配合 CQRS 构建读模型，增加系统复杂度。",
        ],
        practice: "评估项目是否真正需要事件溯源，还是简单的事件日志就足够。",
    },
    {
        id: "card7",
        title: "反腐层的作用",
        summary: "反腐层保护本地领域模型不被外部系统的模型污染。",
        points: [
            "翻译层：将外部模型转换为本地模型，隔离外部变化的影响。",
            "适用场景：集成遗留系统、第三方服务、或不受控制的上游系统。",
            "实现方式：可以是简单的适配器，也可以是完整的服务层。",
        ],
        practice: "识别项目中与外部系统集成的地方，检查是否需要引入反腐层保护领域模型。",
    },
    {
        id: "card8",
        title: "贫血模型反模式",
        summary: "贫血领域模型是最常见的 DDD 反模式，领域对象只有数据没有行为。",
        points: [
            "表现：实体只有 getter/setter，业务逻辑散落在服务层。",
            "危害：违反面向对象原则，导致代码重复和逻辑分散。",
            "解决：将行为移入领域对象，让实体负责自己的业务规则。",
        ],
        practice: "审查项目中的实体类，如果只有属性访问器，考虑将相关业务逻辑移入实体。",
    },
    {
        id: "card9",
        title: "事件风暴的价值",
        summary: "事件风暴是协作式领域探索的利器，让开发者和业务专家共同建模。",
        points: [
            "可视化业务流程：通过便利贴在墙上展现完整的业务流程。",
            "发现领域知识：在协作中挖掘隐藏的业务规则和边界。",
            "产出限界上下文：自然地识别出系统的边界和上下文。",
        ],
        practice: "组织一次事件风暴工作坊，与领域专家一起探索核心业务流程。",
    },
    {
        id: "card10",
        title: "DDD 不是银弹",
        summary: "DDD 适合复杂业务系统，简单系统使用 DDD 反而增加不必要的复杂性。",
        points: [
            "适用场景：复杂业务逻辑、长期演进的系统、需要与领域专家紧密协作的项目。",
            "不适用场景：简单 CRUD 应用、技术驱动的系统、一次性项目。",
            "渐进式采用：可以只应用战略设计，或只在核心域使用完整 DDD。",
        ],
        practice: "评估当前项目的复杂度，决定采用 DDD 的哪些部分，避免过度设计。",
    },
]

export const domainDrivenDesignExamQuestions: QuizQuestion[] = [
    {
        id: "q1",
        question: "DDD 中，限界上下文的主要作用是什么？",
        options: ["定义数据库表结构", "划分微服务边界", "定义模型的语义边界", "管理团队成员"],
        answer: 2,
        rationale: "限界上下文定义了模型的语义边界，确保概念在边界内的一致性，同一术语在不同上下文可能有不同含义。",
    },
    {
        id: "q2",
        question: "以下哪个不是 DDD 中子域的分类？",
        options: ["核心域", "支撑域", "通用域", "技术域"],
        answer: 3,
        rationale: "DDD 将子域分为核心域（Core）、支撑域（Supporting）和通用域（Generic），没有技术域的概念。",
    },
    {
        id: "q3",
        question: "实体和值对象的主要区别是什么？",
        options: ["实体更大，值对象更小", "实体有标识，值对象由属性定义", "实体是数据库表，值对象是字段", "实体可变，值对象不可变"],
        answer: 1,
        rationale: "实体通过标识（ID）来区分不同实例，而值对象通过属性值来判断相等性。虽然值对象通常设计为不可变，但这不是本质区别。",
    },
    {
        id: "q4",
        question: "聚合根的主要职责是什么？",
        options: ["连接数据库", "提供 RESTful API", "维护聚合内的业务不变量", "管理用户权限"],
        answer: 2,
        rationale: "聚合根是聚合的入口点，负责维护聚合边界内的业务不变量，外部只能通过聚合根访问聚合内的对象。",
    },
    {
        id: "q5",
        question: "以下哪个是 Vaughn Vernon 提出的聚合设计原则？",
        options: ["聚合应该尽量大以包含更多功能", "通过对象引用关联其他聚合", "在聚合边界内保护业务不变量", "所有聚合必须使用事件溯源"],
        answer: 2,
        rationale: "Vernon 提出的四条原则包括：保护业务不变量、设计小聚合、通过 ID 引用其他聚合、使用最终一致性。",
    },
    {
        id: "q6",
        question: "领域事件的命名应该使用什么时态？",
        options: ["将来时（如 OrderWillPlace）", "现在时（如 OrderPlacing）", "过去时（如 OrderPlaced）", "命令式（如 PlaceOrder）"],
        answer: 2,
        rationale: "领域事件表示已经发生的事实，应使用过去时命名，如 OrderPlaced、PaymentReceived。",
    },
    {
        id: "q7",
        question: "反腐层（ACL）的主要作用是什么？",
        options: ["防止 SQL 注入", "保护领域模型不被外部模型污染", "加密敏感数据", "限制 API 访问频率"],
        answer: 1,
        rationale: "反腐层作为翻译层，将外部系统的模型转换为本地领域模型，保护本地模型不受外部变化影响。",
    },
    {
        id: "q8",
        question: "CQRS 模式的核心思想是什么？",
        options: ["使用缓存加速查询", "将读写模型分离", "使用事件溯源存储数据", "实现分布式事务"],
        answer: 1,
        rationale: "CQRS（Command Query Responsibility Segregation）将命令（写）和查询（读）分离，允许针对不同需求独立优化。",
    },
    {
        id: "q9",
        question: "以下哪个不是上下文映射的协作模式？",
        options: ["合作关系（Partnership）", "共享内核（Shared Kernel）", "仓储模式（Repository）", "客户-供应商（Customer-Supplier）"],
        answer: 2,
        rationale: "仓储模式是战术设计模式，不是上下文映射模式。上下文映射模式包括合作关系、共享内核、客户-供应商等。",
    },
    {
        id: "q10",
        question: "统一语言（Ubiquitous Language）指的是什么？",
        options: ["所有团队使用同一种编程语言", "业务和技术团队使用相同的领域术语", "所有服务使用统一的 API 格式", "数据库使用统一的命名规范"],
        answer: 1,
        rationale: "统一语言是开发团队和领域专家共同使用的语言，确保代码中的命名反映领域术语，消除沟通障碍。",
    },
    {
        id: "q11",
        question: "贫血领域模型的主要问题是什么？",
        options: ["性能太低", "领域对象只有数据没有行为", "无法使用 ORM 框架", "不支持分布式部署"],
        answer: 1,
        rationale: "贫血模型中实体只有 getter/setter，业务逻辑散落在服务层，违反了面向对象的封装原则。",
    },
    {
        id: "q12",
        question: "事件溯源的核心理念是什么？",
        options: ["使用事件驱动架构", "存储状态变更的事件而非当前状态", "所有服务通过事件通信", "使用消息队列处理请求"],
        answer: 1,
        rationale: "事件溯源将状态变更存储为事件序列，通过重放事件可以重建任意时间点的状态。",
    },
    {
        id: "q13",
        question: "六边形架构中，端口（Port）指的是什么？",
        options: ["网络端口号", "应用核心与外部的交互接口", "数据库连接", "HTTP 端点"],
        answer: 1,
        rationale: "端口定义了应用核心与外部世界的交互契约，分为驱动端口（入站）和被驱动端口（出站）。",
    },
    {
        id: "q14",
        question: "在 DDD 中，仓储（Repository）的作用是什么？",
        options: ["存储代码的版本控制", "封装聚合的持久化逻辑", "缓存查询结果", "管理服务依赖"],
        answer: 1,
        rationale: "仓储提供类似集合的接口来访问聚合，封装底层持久化细节，每个聚合根应该有对应的仓储。",
    },
    {
        id: "q15",
        question: "以下哪个不是限界上下文划分的考虑因素？",
        options: ["业务能力边界", "统一语言的一致性", "数据库表数量", "团队组织结构"],
        answer: 2,
        rationale: "限界上下文按业务能力、语言边界和团队结构划分，数据库表数量不是划分依据。",
    },
    {
        id: "q16",
        question: "领域服务与应用服务的主要区别是什么？",
        options: ["领域服务处理业务逻辑，应用服务协调用例", "领域服务更快，应用服务更慢", "领域服务是公开的，应用服务是私有的", "领域服务使用数据库，应用服务使用缓存"],
        answer: 0,
        rationale: "领域服务封装不属于任何实体的领域逻辑，应用服务协调用例流程，调用领域对象完成业务。",
    },
    {
        id: "q17",
        question: "事件风暴中，橙色便利贴通常代表什么？",
        options: ["用户", "命令", "领域事件", "聚合"],
        answer: 2,
        rationale: "在事件风暴中，橙色便利贴代表领域事件，蓝色代表命令，黄色代表聚合，粉色代表问题/热点。",
    },
    {
        id: "q18",
        question: "整洁架构的依赖规则是什么？",
        options: ["外层依赖内层", "内层依赖外层", "所有层相互依赖", "没有依赖关系"],
        answer: 0,
        rationale: "整洁架构的依赖指向内层，外层（基础设施）依赖内层（领域），领域不依赖任何外部技术。",
    },
    {
        id: "q19",
        question: "以下哪种情况最适合使用 DDD？",
        options: ["简单的 CRUD 应用", "复杂业务逻辑的企业应用", "静态网站", "一次性数据迁移脚本"],
        answer: 1,
        rationale: "DDD 适合有复杂业务逻辑、需要与领域专家协作、长期演进的系统，简单应用使用 DDD 是过度设计。",
    },
    {
        id: "q20",
        question: "Saga 模式主要用于解决什么问题？",
        options: ["单机事务", "跨服务的分布式事务", "数据库索引优化", "API 版本管理"],
        answer: 1,
        rationale: "Saga 模式通过一系列本地事务和补偿操作，实现跨多个服务的业务流程的最终一致性。",
    },
]

export const domainDrivenDesignRoadmap: RoadmapDefinition = {
    id: "domain-driven-design",
    label: "领域驱动设计",
    title: "领域驱动设计（DDD）",
    durationLabel: "20 个主题",
    description:
        "从 DDD 核心理念到战略设计、战术模式、架构实践，再到事件风暴与领域建模实战。覆盖限界上下文、聚合设计、CQRS、事件溯源等核心概念，帮助你掌握应对复杂业务系统的设计方法论。",
    heroBadge: "5 阶段 · 80 主题 · 面向架构师",
    stages: domainDrivenDesignStages,
    knowledgeCards: domainDrivenDesignKnowledgeCards,
    examQuestions: domainDrivenDesignExamQuestions,
    suggestion: (percent: number) => {
        if (percent < 20) {
            return "建议先完成第一阶段的战略设计基础，重点理解限界上下文和统一语言的概念。"
        }
        if (percent < 40) {
            return "继续学习战术设计模式，掌握实体、值对象、聚合的设计原则。"
        }
        if (percent < 60) {
            return "深入架构模式，理解整洁架构、六边形架构与 CQRS 的应用场景。"
        }
        if (percent < 80) {
            return "学习上下文映射和集成模式，为微服务架构设计做好准备。"
        }
        return "通过事件风暴和实战案例巩固所学，将 DDD 方法论应用到实际项目中。"
    },
    resourceGuide: {
        environment: "准备白板或在线协作工具（Miro/FigJam），用于事件风暴和领域建模练习。",
        fallbackKeyPoints: [
            "DDD 的核心是理解业务领域，用领域模型准确反映业务规则。",
            "限界上下文定义模型边界，确保概念在边界内的一致性。",
            "聚合是一致性边界，设计小聚合，通过 ID 引用其他聚合。",
        ],
        handsOnSteps: [
            "阅读原文，理解核心概念和设计原则。",
            "尝试用学到的概念分析你正在开发的系统。",
            "实践代码实现，将领域模型转化为可运行的代码。",
        ],
        selfChecks: [
            "能否用自己的话解释限界上下文和聚合的区别？",
            "你的实体是充血模型还是贫血模型？",
            "项目中的核心域是什么？是否投入了足够的设计资源？",
        ],
        extensions: [
            "阅读《领域驱动设计》蓝皮书和《实现领域驱动设计》红皮书。",
            "组织一次事件风暴工作坊，与团队成员共同探索领域。",
            "在核心业务模块尝试应用 DDD 模式，观察效果。",
        ],
        lessonQuizAdvice: "错题通常反映对核心概念的理解偏差，建议回到原文重新梳理概念定义。",
    },
}
