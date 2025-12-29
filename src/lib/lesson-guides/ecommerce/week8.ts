import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week8Guides: Record<string, LessonGuide> = {
    "w8-1": {
        lessonId: "w8-1",
        background: [
            "【Elasticsearch 定义】官方文档：Elasticsearch 是'an open source search, analytics, and AI platform'——开源搜索、分析和 AI 平台，提供近实时搜索和数据分析能力，是电商搜索的行业标配。",
            "【Elastic Stack 组成】官方文档：完整技术栈包括 Elasticsearch（核心搜索引擎）、Kibana（可视化界面）、Beats（数据采集器）、Logstash（数据处理管道），统称为 ELK Stack。",
            "【索引映射设计】Elastic Labs 博客：电商索引设计中，'Fields for full-text search like name and description use text mapping, while category and brand employ keyword mapping'——文本字段用 text 类型支持分词，分类/品牌用 keyword 类型支持精确匹配和聚合。",
            "【混合搜索策略】Elastic Labs 博客：现代电商搜索采用'hybrid search combining keyword search and vector search'——关键词搜索使用 multi_match 查询，向量搜索使用 KNN 查询理解语义，通过 RRF 算法融合结果提升准确性。",
            "【IK 中文分词】GitHub 文档：IK 分词器提供两种分析器——'ik_max_word'（最细粒度分词，适合精确搜索）和 'ik_smart'（最粗粒度分词，适合短语查询），是中文电商搜索的必备插件。",
            "【数据同步机制】最佳实践：商品索引数据同步分为全量同步（定时任务重建索引）和增量同步（监听数据库变更实时更新），需考虑数据一致性和延迟问题。"
        ],
        keyDifficulties: [
            "【Mapping 设计陷阱】官方文档警告：Mapping 一旦创建'字段类型不可修改'——如果需要变更字段类型，必须创建新索引并重新索引数据（reindex）。建议使用索引别名（alias）实现无缝切换。",
            "【IK 分词器配置】GitHub 文档：IK 支持远程词典热加载'在不重启 ES 实例的前提下更新词库'——需配置服务器返回 Last-Modified 和 ETag 响应头，每行一个词汇。适合动态更新商品名称、品牌等专有名词。",
            "【嵌套对象 vs 扁平化】当商品有多个 SKU 变体时，需决定使用 nested 类型（保持关联但查询复杂）还是扁平化索引（查询简单但数据冗余）。nested 查询性能开销较大，应评估数据规模。",
            "【相关性调优】Elastic Labs 博客：通过 boost 参数调整字段权重'商品名称匹配权重高于描述'——使用 function_score 可以结合销量、评分等业务因素动态调整排序。",
            "【索引分片策略】官方文档：分片数量影响查询性能和扩展能力。单个分片建议 10-50GB，分片过多增加协调开销，分片过少影响并行查询。商品索引通常 3-5 个主分片起步。"
        ],
        handsOnPath: [
            "使用 Docker 启动 Elasticsearch 和 Kibana：docker run -d --name es -p 9200:9200 -e 'discovery.type=single-node' elasticsearch:8.x，验证集群状态。",
            "安装 IK 中文分词插件：进入容器执行 bin/elasticsearch-plugin install analysis-ik，配置自定义词典（品牌名、商品类目专有名词）。",
            "设计商品索引 Mapping：定义 name（text + ik_max_word）、description（text）、brand（keyword）、category（keyword）、price（float）、sales（integer）字段，创建索引。",
            "实现商品数据同步：编写脚本从数据库读取商品数据，使用 Bulk API 批量写入 Elasticsearch，记录同步时间戳支持增量更新。",
            "使用 Kibana Dev Tools 测试索引：执行 _analyze API 验证分词效果，使用 _search API 测试基本查询，调整 Mapping 优化分词结果。",
            "配置索引别名实现无缝切换：创建 products_v1 索引，设置 products 别名指向它，后续版本升级时创建 products_v2 并原子切换别名。"
        ],
        selfCheck: [
            "text 类型和 keyword 类型的区别是什么？商品的哪些字段适合用 keyword？",
            "ik_max_word 和 ik_smart 分词器的区别是什么？搜索时应该用哪种？",
            "为什么 Elasticsearch 的 Mapping 不支持字段类型修改？如何安全地变更索引结构？",
            "什么是索引别名（alias）？它在生产环境有什么作用？",
            "Bulk API 批量写入相比单条写入有什么优势？批量大小如何选择？",
            "混合搜索（Hybrid Search）是什么？它如何提升电商搜索的准确性？",
            "如何处理商品数据库和 Elasticsearch 之间的数据同步延迟问题？"
        ],
        extensions: [
            "研究 Elasticsearch 的向量搜索（Dense Vector）功能，了解如何使用 Embedding 模型实现语义搜索。",
            "探索 Elasticsearch 的 Index Lifecycle Management（ILM），了解如何自动管理索引生命周期。",
            "学习 Elasticsearch 的跨集群搜索（Cross-Cluster Search），了解多数据中心部署方案。",
            "研究 OpenSearch（Elasticsearch 的开源分支），对比两者的功能差异和社区生态。"
        ],
        sourceUrls: [
            "https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html",
            "https://www.elastic.co/search-labs/blog/hybrid-search-ecommerce",
            "https://github.com/medcl/elasticsearch-analysis-ik"
        ]
    },
    "w8-2": {
        lessonId: "w8-2",
        background: [
            "【Query DSL 概述】官方文档：Query DSL 是'a full-featured JSON-style query language that enables complex searching, filtering, and aggregations'——全功能的 JSON 风格查询语言，支持复杂搜索、过滤和聚合。",
            "【查询上下文 vs 过滤上下文】官方文档：Query Context 回答'How well does this document match?'计算相关性评分；Filter Context 提供二元匹配'无评分但更快，支持自动缓存'——电商筛选条件应使用 filter 提升性能。",
            "【聚合类型】官方文档：Elasticsearch 提供三类聚合——Metric（计算 sum/avg 等指标）、Bucket（按字段值/范围分组）、Pipeline（处理其他聚合结果）。电商分面导航主要使用 Bucket 聚合。",
            "【Terms 聚合】官方文档：Terms aggregation'groups documents by unique field values'——按字段唯一值分组，是实现品牌、分类筛选的核心。返回每个值的文档数量，支持 size 参数限制返回桶数。",
            "【Range 聚合】官方文档：Range aggregation 实现'price range filtering and other numeric-based categorization'——价格区间筛选的基础，支持自定义区间边界。"
        ],
        keyDifficulties: [
            "【Bool 查询组合】官方文档：Bool 查询支持 must（必须匹配，参与评分）、filter（必须匹配，不评分）、should（可选匹配，提升评分）、must_not（必须不匹配）——电商搜索通常 must 放关键词查询，filter 放筛选条件。",
            "【聚合与查询的关系】官方文档：'Use the query parameter to restrict aggregations to specific document subsets'——聚合默认在全量数据上计算，需配合 query 限定范围。注意全局聚合 global 会忽略查询条件。",
            "【分面导航的双向关系】电商分面导航需处理'选中某筛选项后，其他筛选项的计数更新'——通常使用 post_filter + 多个独立聚合实现，确保选中品牌后价格区间计数仍基于完整结果。",
            "【高亮显示】官方文档：使用 highlight 参数标记匹配词，支持 pre_tags/post_tags 自定义标签。大量高亮计算会影响性能，建议限制 fragment_size 和 number_of_fragments。",
            "【聚合性能优化】官方文档：'Set size: 0 to return only aggregation results'——仅需聚合数据时设置 size=0 跳过文档返回。高基数字段（如商品 ID）的 Terms 聚合会消耗大量内存，应避免。"
        ],
        handsOnPath: [
            "实现基础商品搜索：使用 multi_match 查询搜索 name 和 description 字段，配置 best_fields 或 cross_fields 策略，测试不同搜索词的结果。",
            "添加筛选条件：在 bool 查询的 filter 中添加 term（品牌）、range（价格区间）、terms（多选分类）过滤，验证过滤不影响相关性评分。",
            "实现分面导航聚合：添加 aggs 返回品牌 Terms 聚合、价格 Range 聚合（0-100、100-500、500+），在搜索结果页展示筛选项和计数。",
            "处理筛选项计数：使用 post_filter 替代 filter 实现'选中某品牌后，其他品牌计数仍显示'——配合 global 聚合或多个 filter 聚合实现。",
            "添加搜索高亮：配置 highlight 参数为 name 和 description 字段添加高亮，前端解析 <em> 标签展示匹配词。",
            "实现排序功能：支持按相关性（_score）、价格升序/降序、销量降序排序，使用 sort 数组配置多级排序规则。"
        ],
        selfCheck: [
            "bool 查询的 must 和 filter 有什么区别？电商筛选条件应该放在哪里？",
            "Terms 聚合和 Range 聚合分别适合什么场景？",
            "什么是分面导航（Faceted Navigation）？它如何提升用户筛选体验？",
            "为什么使用 post_filter 而不是 filter 实现分面导航的筛选项计数？",
            "如何优化大量聚合计算的性能？高基数字段聚合有什么风险？",
            "multi_match 查询的 best_fields 和 cross_fields 策略有什么区别？",
            "如何实现'搜索结果按价格筛选后，品牌计数仍基于原始搜索结果'？"
        ],
        extensions: [
            "研究 Elasticsearch 的 Search Template 功能，了解如何将复杂查询封装为可复用模板。",
            "探索 Elasticsearch 的 Percolate Query，了解如何实现'反向搜索'（商品匹配用户保存的搜索条件）。",
            "学习 Elasticsearch 的 Scroll API 和 Search After，了解大数据量分页的最佳实践。",
            "研究 Elasticsearch 的 Significant Terms 聚合，了解如何发现搜索结果中的异常热门词。"
        ],
        sourceUrls: [
            "https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html",
            "https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations.html",
            "https://www.elastic.co/docs/current/search-ui/solutions/ecommerce"
        ]
    },
    "w8-3": {
        lessonId: "w8-3",
        background: [
            "【Suggesters 概述】官方文档：Elasticsearch Suggesters 提供多种搜索建议功能，集成在搜索查询框架中，用于'typo correction, autocomplete, and query refinement'——拼写纠错、自动补全和查询优化。",
            "【Term Suggester】官方文档：Term Suggester 提供'simple term-based suggestions with edit distance corrections'——基于编辑距离的拼写纠正，适合处理用户输入错误。",
            "【Phrase Suggester】官方文档：Phrase Suggester 提供'phrase-level suggestions considering word combinations'——短语级别建议，考虑词组搭配和上下文关系，比 Term Suggester 更智能。",
            "【Completion Suggester】官方文档：Completion Suggester 提供'real-time, fast autocomplete suggestions using specialized indexing'——使用特殊索引结构实现毫秒级自动补全，是电商搜索框的核心功能。",
            "【Analyzer 组成】官方文档：分析器由三部分组成——Tokenizer（分词器）、Token Filters（词元过滤器）、Character Filters（字符过滤器）。自定义分析器可组合不同组件满足特定需求。"
        ],
        keyDifficulties: [
            "【Completion 字段类型】官方文档：使用 Completion Suggester 需要定义 completion 类型字段，该字段使用'FST（Finite State Transducer）数据结构'存储在内存中，支持前缀匹配和模糊匹配。",
            "【权重与去重】Completion Suggester 支持 weight 参数设置建议权重（如热门搜索词权重更高），支持 skip_duplicates 去重。权重可基于搜索热度、商品销量动态计算。",
            "【中文自动补全挑战】中文没有空格分隔，需要配置拼音分析器实现'输入拼音匹配中文商品名'。可组合使用 ik_max_word + pinyin analyzer 支持中文和拼音混合输入。",
            "【Context Suggester】官方文档：Context Suggester 扩展 Completion Suggester，支持'category 和 geo 上下文过滤'——可以限制只返回特定分类或地理位置的建议，如'只显示当前分类下的搜索建议'。",
            "【搜索词分析与热门搜索】最佳实践：记录用户实际搜索词，定期聚合生成热门搜索词列表。使用 Elasticsearch 的 Significant Terms 聚合发现趋势词，动态更新 Completion 字段数据。"
        ],
        handsOnPath: [
            "创建支持自动补全的索引：定义 suggest 字段为 completion 类型，配置 analyzer 使用 ik_max_word，导入商品名称和热门搜索词。",
            "实现基础自动补全：使用 _search API 的 suggest 参数调用 Completion Suggester，根据用户输入前缀返回匹配建议，前端实时展示。",
            "添加权重排序：为热门商品和热门搜索词设置更高 weight，确保高频词优先展示。可基于搜索日志定期更新权重值。",
            "实现拼写纠正：使用 Term Suggester 检测拼写错误，在'没有找到结果'时提示'您是否想搜索 xxx'，支持点击直接搜索纠正词。",
            "记录搜索历史：使用 Redis 或数据库记录用户搜索历史，在搜索框获取焦点时优先展示用户最近搜索词。",
            "聚合热门搜索：定期统计搜索日志中的高频词，使用 Elasticsearch 的 Terms 聚合生成热门搜索榜单，展示在搜索框下方。",
            "实现搜索词高亮：在自动补全结果中高亮匹配的前缀部分，使用 highlight 参数或前端字符串处理实现。"
        ],
        selfCheck: [
            "Term Suggester、Phrase Suggester 和 Completion Suggester 分别适合什么场景？",
            "为什么 Completion Suggester 能实现毫秒级响应？它使用了什么数据结构？",
            "如何实现'输入拼音匹配中文商品名'的自动补全功能？",
            "Completion Suggester 的 weight 参数如何使用？权重值应该基于什么计算？",
            "什么是 Context Suggester？它如何实现分类级别的搜索建议？",
            "如何实现用户搜索历史功能？历史记录应该存储在哪里？",
            "热门搜索词榜单如何生成？更新频率应该是多少？"
        ],
        extensions: [
            "研究 Elasticsearch 的 Search-as-you-type 字段类型，了解另一种自动补全实现方案。",
            "探索 Elasticsearch 的拼音分析器插件（elasticsearch-analysis-pinyin），了解中文拼音搜索的完整配置。",
            "学习 Elasticsearch 的 More Like This Query，了解如何实现'相关搜索'推荐。",
            "研究搜索词分析和用户意图识别，了解如何使用 NLP 技术优化搜索体验。"
        ],
        sourceUrls: [
            "https://www.elastic.co/guide/en/elasticsearch/reference/current/search-suggesters.html",
            "https://www.elastic.co/guide/en/elasticsearch/reference/current/search-suggesters.html#completion-suggester",
            "https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-analyzers.html"
        ]
    },
    "w8-4": {
        lessonId: "w8-4",
        background: [
            "【推荐系统架构】Google ML 课程：推荐系统包含三个核心阶段——'candidate generation'（从海量商品中筛选候选集）、'scoring'（对候选商品评分排序）、're-ranking'（根据业务规则调整最终排序）。",
            "【内容推荐（Content-Based）】Google ML 课程：Content-Based Filtering'recommends items by matching item characteristics with user preferences'——基于用户历史行为分析偏好，推荐具有相似特征的商品。",
            "【协同过滤（Collaborative Filtering）】Google ML 课程：Collaborative Filtering'leverages user behavior patterns and item similarities across the user base'——利用用户群体行为模式发现相似用户或相似商品，实现'购买此商品的人还买了'。",
            "【矩阵分解】Google ML 课程：Matrix Factorization'decomposes the user-item interaction matrix into lower-dimensional representations'——将用户-商品交互矩阵分解为低维向量，Netflix 推荐系统的核心算法。",
            "【基于物品的协同过滤】Amazon 推荐系统论文：Item-to-Item Collaborative Filtering 计算商品之间的相似度，当用户浏览/购买某商品时，推荐最相似的其他商品。比基于用户的方法更稳定、更易于扩展。"
        ],
        keyDifficulties: [
            "【冷启动问题】新用户没有行为数据无法进行个性化推荐，新商品没有交互数据无法计算相似度。解决方案：新用户使用热门推荐，新商品使用内容相似度推荐。",
            "【相似度计算】协同过滤常用相似度算法——余弦相似度（Cosine Similarity）适合评分数据、Jaccard 系数适合隐式反馈（点击/购买）、Pearson 相关系数考虑评分偏差。选择取决于数据类型。",
            "【稀疏性问题】用户-商品交互矩阵通常非常稀疏（99%+ 为空），直接计算相似度效果差。矩阵分解将高维稀疏矩阵压缩为低维稠密向量，有效解决稀疏性问题。",
            "【实时性与离线计算】商品相似度可以离线批量计算（每天更新），用户推荐结果需要结合实时行为动态生成。通常使用预计算商品关系 + 实时召回策略的混合架构。",
            "【推荐多样性】纯协同过滤容易产生'信息茧房'——只推荐用户熟悉类型的商品。需要在相关性和多样性之间权衡，可使用 MMR（Maximal Marginal Relevance）算法平衡。"
        ],
        handsOnPath: [
            "收集用户行为数据：记录用户浏览、加购、购买、收藏行为，存储为 (user_id, item_id, action_type, timestamp) 格式，作为推荐算法的输入。",
            "实现热门推荐：统计商品销量/浏览量，按热度排序展示'热门商品'榜单。这是最简单但有效的推荐策略，适合新用户和首页展示。",
            "实现'看了又看'：使用 Redis 存储商品共现关系（用户在同一会话浏览的商品对），计算共现频次作为相似度，展示'浏览此商品的人还浏览了'。",
            "实现'买了又买'：统计订单中商品共同出现的频次，使用 Jaccard 系数计算相似度。为每个商品维护 Top-N 相似商品列表，定期离线更新。",
            "实现基于内容的推荐：使用商品分类、品牌、价格区间等特征计算相似度，为新商品提供推荐（解决冷启动）。可结合 Elasticsearch 的 More Like This Query。",
            "设计推荐 API：创建 /api/recommendations 端点，支持不同场景——首页（热门+个性化）、商品详情页（相似商品）、购物车（搭配推荐）、订单完成页（复购推荐）。"
        ],
        selfCheck: [
            "推荐系统的三个核心阶段（候选生成、评分、重排序）分别做什么？",
            "内容推荐和协同过滤的区别是什么？各自的优缺点？",
            "基于用户的协同过滤和基于物品的协同过滤有什么区别？为什么电商更常用基于物品？",
            "什么是推荐系统的冷启动问题？如何解决新用户和新商品的推荐？",
            "余弦相似度和 Jaccard 系数分别适合什么类型的数据？",
            "为什么需要离线计算商品相似度而不是实时计算？",
            "如何避免推荐系统的'信息茧房'问题？"
        ],
        extensions: [
            "研究深度学习推荐算法（NCF、DeepFM），了解如何使用神经网络提升推荐效果。",
            "探索 TensorFlow Recommenders 库，了解如何快速构建推荐模型。",
            "学习 A/B 测试在推荐系统中的应用，了解如何评估推荐效果（CTR、转化率、多样性指标）。",
            "研究实时推荐架构（Flink + Feature Store），了解如何结合实时特征进行动态推荐。",
            "探索知识图谱在推荐系统中的应用，了解如何利用商品关系增强推荐效果。"
        ],
        sourceUrls: [
            "https://developers.google.com/machine-learning/recommendation",
            "https://en.wikipedia.org/wiki/Collaborative_filtering",
            "https://www.cs.umd.edu/~samir/498/Amazon-Recommendations.pdf"
        ]
    }
}

export const week8Quizzes: Record<string, QuizQuestion[]> = {
    "w8-1": [
        {
            id: "w8-1-q1",
            question: "官方文档对 Elasticsearch 的定义是什么？",
            options: [
                "'an open source search, analytics, and AI platform'——开源搜索、分析和 AI 平台",
                "容器编排平台",
                "消息队列系统",
                "关系型数据库"
            ],
            answer: 0,
            rationale: "官方文档定义 Elasticsearch 为'an open source search, analytics, and AI platform'——提供近实时搜索和数据分析能力。"
        },
        {
            id: "w8-1-q2",
            question: "电商索引设计中，商品品牌（brand）应该使用什么字段类型？",
            options: [
                "text——支持分词搜索",
                "integer——数值类型",
                "nested——嵌套对象",
                "keyword——支持精确匹配和聚合"
            ],
            answer: 3,
            rationale: "Elastic Labs 博客：'category and brand employ keyword mapping'——品牌用于精确筛选和聚合，应使用 keyword 类型。"
        },
        {
            id: "w8-1-q3",
            question: "IK 分词器提供的两种分析器分别是什么？",
            options: [
                "ik_standard 和 ik_simple",
                "ik_chinese 和 ik_english",
                "ik_max_word（最细粒度）和 ik_smart（最粗粒度）",
                "ik_full 和 ik_partial"
            ],
            answer: 2,
            rationale: "GitHub 文档：IK 提供 ik_max_word（最细粒度分词，适合精确搜索）和 ik_smart（最粗粒度分词，适合短语查询）。"
        },
        {
            id: "w8-1-q4",
            question: "混合搜索（Hybrid Search）结合了哪两种搜索方式？",
            options: [
                "全文搜索和正则搜索",
                "关键词搜索和向量搜索",
                "结构化搜索和非结构化搜索",
                "本地搜索和远程搜索"
            ],
            answer: 1,
            rationale: "Elastic Labs 博客：现代电商搜索采用'hybrid search combining keyword search and vector search'——关键词搜索结合向量语义搜索。"
        },
        {
            id: "w8-1-q5",
            question: "Elasticsearch 的 Mapping 创建后有什么限制？",
            options: [
                "可以随时修改任何字段",
                "完全不可更改",
                "只能删除字段",
                "只能添加新字段，不能修改已有字段类型"
            ],
            answer: 3,
            rationale: "官方文档警告：Mapping 一旦创建'字段类型不可修改'——需要变更类型时必须创建新索引并 reindex 数据。"
        },
        {
            id: "w8-1-q6",
            question: "IK 分词器如何实现词典热更新？",
            options: [
                "必须重启 Elasticsearch",
                "使用 API 实时推送",
                "配置远程 URL，服务器返回 Last-Modified 和 ETag 响应头",
                "只能使用本地文件"
            ],
            answer: 2,
            rationale: "GitHub 文档：IK 支持远程词典热加载'在不重启 ES 实例的前提下更新词库'，需配置服务器返回正确的 HTTP 响应头。"
        },
        {
            id: "w8-1-q7",
            question: "Elasticsearch 索引别名（alias）的主要作用是什么？",
            options: [
                "实现索引版本无缝切换",
                "提高查询性能",
                "减少存储空间",
                "加密敏感数据"
            ],
            answer: 0,
            rationale: "最佳实践：使用索引别名可以在索引重建时实现无缝切换，应用程序通过别名访问，后台原子切换实际索引。"
        },
        {
            id: "w8-1-q8",
            question: "单个 Elasticsearch 分片的推荐大小是多少？",
            options: [
                "1-5 GB",
                "10-50 GB",
                "100-500 GB",
                "不限制大小"
            ],
            answer: 1,
            rationale: "官方文档建议：单个分片推荐 10-50GB，分片过多增加协调开销，分片过少影响并行查询能力。"
        },
        {
            id: "w8-1-q9",
            question: "Elastic Stack 包含哪些组件？",
            options: [
                "只有 Elasticsearch",
                "Elasticsearch、MySQL、Redis",
                "Elasticsearch、Kafka、Spark",
                "Elasticsearch、Kibana、Beats、Logstash"
            ],
            answer: 3,
            rationale: "官方文档：完整技术栈包括 Elasticsearch（搜索引擎）、Kibana（可视化）、Beats（数据采集）、Logstash（数据处理管道）。"
        },
        {
            id: "w8-1-q10",
            question: "使用 Bulk API 批量写入相比单条写入的主要优势是什么？",
            options: [
                "减少网络往返，显著提升写入性能",
                "数据更准确",
                "支持事务",
                "自动分词更智能"
            ],
            answer: 0,
            rationale: "Bulk API 将多个文档合并为一个请求发送，减少网络往返开销和索引刷新次数，是大规模数据导入的标准方式。"
        },
        {
            id: "w8-1-q11",
            question: "text 类型字段和 keyword 类型字段的主要区别是什么？",
            options: [
                "text 区分大小写，keyword 不区分",
                "text 只支持中文，keyword 只支持英文",
                "text 会被分词分析，keyword 保持原值不分词",
                "text 用于排序，keyword 用于搜索"
            ],
            answer: 2,
            rationale: "text 类型会经过分析器分词处理，适合全文搜索；keyword 类型保持原值不变，适合精确匹配、排序和聚合。"
        },
        {
            id: "w8-1-q12",
            question: "混合搜索使用什么算法融合关键词搜索和向量搜索的结果？",
            options: [
                "PageRank",
                "TF-IDF",
                "BM25",
                "Reciprocal Rank Fusion (RRF)"
            ],
            answer: 3,
            rationale: "Elastic Labs 博客：混合搜索使用'Reciprocal Rank Fusion (RRF) algorithm'融合两种搜索结果，'reduces noise and increases accuracy'。"
        }
    ],
    "w8-2": [
        {
            id: "w8-2-q1",
            question: "官方文档对 Query DSL 的定义是什么？",
            options: [
                "SQL 查询语言",
                "图形化查询界面",
                "'a full-featured JSON-style query language'——全功能的 JSON 风格查询语言",
                "命令行查询工具"
            ],
            answer: 2,
            rationale: "官方文档：Query DSL 是'a full-featured JSON-style query language that enables complex searching, filtering, and aggregations'。"
        },
        {
            id: "w8-2-q2",
            question: "Query Context 和 Filter Context 的主要区别是什么？",
            options: [
                "Query 计算相关性评分，Filter 仅返回是否匹配且支持缓存",
                "Query 更快，Filter 更慢",
                "Query 用于聚合，Filter 用于搜索",
                "没有区别"
            ],
            answer: 0,
            rationale: "官方文档：Query Context 回答'How well does this document match?'计算评分；Filter Context 提供二元匹配'无评分但更快，支持自动缓存'。"
        },
        {
            id: "w8-2-q3",
            question: "Elasticsearch 提供哪三类聚合？",
            options: [
                "Simple、Complex、Nested",
                "Terms、Range、Histogram",
                "Sum、Count、Average",
                "Metric、Bucket、Pipeline"
            ],
            answer: 3,
            rationale: "官方文档：Elasticsearch 提供 Metric（计算指标）、Bucket（分组）、Pipeline（处理其他聚合结果）三类聚合。"
        },
        {
            id: "w8-2-q4",
            question: "实现电商品牌筛选应该使用什么聚合？",
            options: [
                "Terms Aggregation",
                "Metric Aggregation",
                "Pipeline Aggregation",
                "Cardinality Aggregation"
            ],
            answer: 0,
            rationale: "官方文档：Terms aggregation'groups documents by unique field values'——按字段唯一值分组，是实现品牌筛选的核心聚合类型。"
        },
        {
            id: "w8-2-q5",
            question: "bool 查询中，筛选条件应该放在哪个子句？",
            options: [
                "must——必须匹配且参与评分",
                "should——可选匹配",
                "must_not——必须不匹配",
                "filter——必须匹配但不参与评分"
            ],
            answer: 3,
            rationale: "官方文档：电商筛选条件（品牌、价格区间等）应放在 filter 子句，不影响相关性评分且支持缓存，性能更好。"
        },
        {
            id: "w8-2-q6",
            question: "如何优化仅需要聚合数据不需要文档的查询？",
            options: [
                "使用 _source: false",
                "设置 size: 0",
                "使用 filter 代替 query",
                "禁用高亮"
            ],
            answer: 1,
            rationale: "官方文档：'Set size: 0 to return only aggregation results'——跳过文档返回，只返回聚合结果，显著提升性能。"
        },
        {
            id: "w8-2-q7",
            question: "什么是分面导航（Faceted Navigation）？",
            options: [
                "分页查询技术",
                "全文搜索算法",
                "用户通过多维度筛选项逐步缩小搜索范围的交互方式",
                "索引分片策略"
            ],
            answer: 2,
            rationale: "分面导航允许用户通过品牌、价格、属性等多维度筛选项逐步缩小范围，同时展示各筛选项的结果数量。"
        },
        {
            id: "w8-2-q8",
            question: "为什么使用 post_filter 而不是 filter 实现分面导航？",
            options: [
                "post_filter 在聚合计算后再过滤，保持筛选项计数基于完整结果",
                "post_filter 性能更好",
                "post_filter 支持更多查询类型",
                "没有区别"
            ],
            answer: 0,
            rationale: "使用 post_filter 实现'选中某品牌后，其他品牌计数仍显示'——post_filter 在聚合计算后应用，不影响聚合结果。"
        },
        {
            id: "w8-2-q9",
            question: "multi_match 查询的 best_fields 策略是什么意思？",
            options: [
                "只搜索第一个字段",
                "合并所有字段的分数",
                "随机选择一个字段",
                "使用匹配得分最高的单个字段的分数"
            ],
            answer: 3,
            rationale: "best_fields 策略使用匹配得分最高的单个字段的分数作为文档分数，适合搜索词完整出现在某一个字段的场景。"
        },
        {
            id: "w8-2-q10",
            question: "Range 聚合适合什么场景？",
            options: [
                "统计品牌分布",
                "计算平均值",
                "实现价格区间筛选",
                "文本分词"
            ],
            answer: 2,
            rationale: "官方文档：Range aggregation 实现'price range filtering and other numeric-based categorization'——按数值区间分组，是价格筛选的基础。"
        },
        {
            id: "w8-2-q11",
            question: "高基数字段（如商品 ID）的 Terms 聚合有什么风险？",
            options: [
                "查询结果不准确",
                "响应时间变长",
                "消耗大量内存，可能导致 OOM",
                "没有风险"
            ],
            answer: 2,
            rationale: "高基数字段的 Terms 聚合需要在内存中维护大量桶，可能导致内存溢出。应避免对 ID 类字段进行 Terms 聚合。"
        },
        {
            id: "w8-2-q12",
            question: "highlight 参数的作用是什么？",
            options: [
                "标记搜索结果中的匹配词",
                "突出显示重要字段",
                "高亮显示错误信息",
                "强调聚合结果"
            ],
            answer: 0,
            rationale: "highlight 参数为搜索结果中的匹配词添加标记（如 <em> 标签），帮助用户快速定位匹配内容。"
        }
    ],
    "w8-3": [
        {
            id: "w8-3-q1",
            question: "Elasticsearch Suggesters 的主要功能是什么？",
            options: [
                "数据分析",
                "索引管理",
                "权限控制",
                "'typo correction, autocomplete, and query refinement'——拼写纠错、自动补全和查询优化"
            ],
            answer: 3,
            rationale: "官方文档：Suggesters 用于'typo correction, autocomplete, and query refinement'——提升搜索体验的核心功能。"
        },
        {
            id: "w8-3-q2",
            question: "Term Suggester 的工作原理是什么？",
            options: [
                "基于编辑距离的拼写纠正",
                "语义理解",
                "前缀匹配",
                "正则表达式匹配"
            ],
            answer: 0,
            rationale: "官方文档：Term Suggester 提供'simple term-based suggestions with edit distance corrections'——基于编辑距离纠正拼写错误。"
        },
        {
            id: "w8-3-q3",
            question: "Completion Suggester 为什么能实现毫秒级响应？",
            options: [
                "使用更快的 CPU",
                "减少网络请求",
                "使用 FST 数据结构存储在内存中",
                "压缩数据"
            ],
            answer: 2,
            rationale: "官方文档：Completion Suggester 使用'FST（Finite State Transducer）数据结构'存储在内存中，支持超快速的前缀查找。"
        },
        {
            id: "w8-3-q4",
            question: "使用 Completion Suggester 需要定义什么类型的字段？",
            options: [
                "text",
                "keyword",
                "completion",
                "suggest"
            ],
            answer: 2,
            rationale: "官方文档：使用 Completion Suggester 需要定义 completion 类型字段，该字段使用特殊的数据结构支持自动补全。"
        },
        {
            id: "w8-3-q5",
            question: "Completion Suggester 的 weight 参数作用是什么？",
            options: [
                "设置建议的优先级权重",
                "控制字段大小",
                "限制返回数量",
                "配置分词器"
            ],
            answer: 0,
            rationale: "weight 参数设置建议的优先级权重，权重高的建议优先展示。可基于搜索热度、商品销量动态计算。"
        },
        {
            id: "w8-3-q6",
            question: "如何实现'输入拼音匹配中文商品名'？",
            options: [
                "使用正则表达式",
                "手动维护拼音映射表",
                "使用 Term Suggester",
                "配置拼音分析器插件"
            ],
            answer: 3,
            rationale: "需要安装并配置拼音分析器插件（如 elasticsearch-analysis-pinyin），支持中文和拼音混合输入的自动补全。"
        },
        {
            id: "w8-3-q7",
            question: "Phrase Suggester 相比 Term Suggester 的优势是什么？",
            options: [
                "考虑词组搭配和上下文关系",
                "性能更好",
                "支持更多语言",
                "使用更少内存"
            ],
            answer: 0,
            rationale: "官方文档：Phrase Suggester 提供'phrase-level suggestions considering word combinations'——考虑词组搭配，比单词级别更智能。"
        },
        {
            id: "w8-3-q8",
            question: "Context Suggester 的作用是什么？",
            options: [
                "提供上下文帮助",
                "分析用户上下文",
                "支持分类和地理位置过滤的搜索建议",
                "记录搜索历史"
            ],
            answer: 2,
            rationale: "官方文档：Context Suggester 扩展 Completion Suggester，支持'category 和 geo 上下文过滤'——如只返回特定分类下的建议。"
        },
        {
            id: "w8-3-q9",
            question: "用户搜索历史应该存储在哪里？",
            options: [
                "只存储在 Elasticsearch",
                "Redis 或数据库（需关联用户 ID）",
                "只存储在前端 LocalStorage",
                "存储在日志文件"
            ],
            answer: 1,
            rationale: "用户搜索历史需要持久化存储并关联用户 ID，通常使用 Redis（快速读取）或数据库（持久化），支持跨设备同步。"
        },
        {
            id: "w8-3-q10",
            question: "热门搜索词榜单如何生成？",
            options: [
                "人工维护",
                "使用机器学习预测",
                "定期统计搜索日志中的高频词",
                "从外部数据源导入"
            ],
            answer: 2,
            rationale: "热门搜索词通过定期统计搜索日志中的高频词生成，可使用 Elasticsearch 的 Terms 聚合按搜索词分组并排序。"
        },
        {
            id: "w8-3-q11",
            question: "Analyzer 的三个组成部分是什么？",
            options: [
                "Tokenizer、Token Filters、Character Filters",
                "Input、Process、Output",
                "Parser、Lexer、Compiler",
                "Reader、Writer、Buffer"
            ],
            answer: 0,
            rationale: "官方文档：分析器由 Tokenizer（分词器）、Token Filters（词元过滤器）、Character Filters（字符过滤器）组成。"
        },
        {
            id: "w8-3-q12",
            question: "skip_duplicates 参数在 Completion Suggester 中的作用是什么？",
            options: [
                "跳过空值",
                "跳过错误数据",
                "忽略已删除文档",
                "去除重复的建议结果"
            ],
            answer: 3,
            rationale: "skip_duplicates 参数去除 Completion Suggester 返回结果中的重复建议，确保每个建议只出现一次。"
        }
    ],
    "w8-4": [
        {
            id: "w8-4-q1",
            question: "推荐系统的三个核心阶段是什么？",
            options: [
                "候选生成、评分、重排序",
                "收集、处理、展示",
                "训练、验证、测试",
                "输入、计算、输出"
            ],
            answer: 0,
            rationale: "Google ML 课程：推荐系统包含'candidate generation'（候选生成）、'scoring'（评分）、're-ranking'（重排序）三个核心阶段。"
        },
        {
            id: "w8-4-q2",
            question: "内容推荐（Content-Based Filtering）的工作原理是什么？",
            options: [
                "推荐热门商品",
                "推荐相似用户喜欢的商品",
                "基于商品特征匹配用户偏好",
                "随机推荐"
            ],
            answer: 2,
            rationale: "Google ML 课程：Content-Based Filtering'recommends items by matching item characteristics with user preferences'——基于商品特征匹配用户偏好。"
        },
        {
            id: "w8-4-q3",
            question: "协同过滤（Collaborative Filtering）的核心思想是什么？",
            options: [
                "分析商品属性",
                "使用规则引擎",
                "利用用户群体行为模式发现相似性",
                "人工标注推荐"
            ],
            answer: 2,
            rationale: "Google ML 课程：Collaborative Filtering'leverages user behavior patterns and item similarities across the user base'——利用群体行为模式。"
        },
        {
            id: "w8-4-q4",
            question: "矩阵分解（Matrix Factorization）解决了什么问题？",
            options: [
                "计算速度慢",
                "数据存储问题",
                "用户-商品交互矩阵的稀疏性问题",
                "实时性问题"
            ],
            answer: 2,
            rationale: "Google ML 课程：Matrix Factorization 将高维稀疏矩阵分解为低维稠密向量，有效解决用户-商品交互矩阵的稀疏性问题。"
        },
        {
            id: "w8-4-q5",
            question: "为什么电商更常用基于物品的协同过滤而非基于用户？",
            options: [
                "物品相似度更稳定，计算量更小，更易扩展",
                "用户数据更难获取",
                "物品数量更少",
                "用户行为不可预测"
            ],
            answer: 0,
            rationale: "Amazon 推荐系统论文：Item-to-Item CF 物品相似度更稳定、可预计算，比基于用户的方法更易于扩展到大规模商品库。"
        },
        {
            id: "w8-4-q6",
            question: "推荐系统的'冷启动问题'是指什么？",
            options: [
                "系统启动慢",
                "服务器性能不足",
                "网络延迟高",
                "新用户/新商品没有足够数据进行个性化推荐"
            ],
            answer: 3,
            rationale: "冷启动问题是指新用户没有行为数据无法个性化推荐，新商品没有交互数据无法计算相似度。"
        },
        {
            id: "w8-4-q7",
            question: "如何解决新用户的冷启动问题？",
            options: [
                "拒绝提供推荐",
                "随机推荐",
                "使用热门推荐或引导用户填写兴趣偏好",
                "等待用户产生行为"
            ],
            answer: 2,
            rationale: "新用户可使用热门推荐、基于人口属性的推荐，或通过新手引导收集用户偏好信息快速建立画像。"
        },
        {
            id: "w8-4-q8",
            question: "余弦相似度适合什么类型的推荐数据？",
            options: [
                "显式反馈（评分）",
                "隐式反馈（点击/购买）",
                "文本数据",
                "图片数据"
            ],
            answer: 0,
            rationale: "余弦相似度考虑向量方向而非大小，适合评分数据；Jaccard 系数更适合隐式反馈（二元的点击/购买行为）。"
        },
        {
            id: "w8-4-q9",
            question: "为什么商品相似度通常采用离线预计算？",
            options: [
                "商品关系相对稳定，实时计算成本高",
                "结果更准确",
                "法规要求",
                "减少存储空间"
            ],
            answer: 0,
            rationale: "商品相似度相对稳定，可以每天批量更新；实时计算大规模商品相似度成本过高，无法满足毫秒级响应要求。"
        },
        {
            id: "w8-4-q10",
            question: "什么是推荐系统的'信息茧房'问题？",
            options: [
                "推荐结果太少",
                "推荐系统被攻击",
                "只推荐用户熟悉类型的商品，缺乏多样性",
                "用户隐私泄露"
            ],
            answer: 2,
            rationale: "纯协同过滤容易产生'信息茧房'——只推荐与用户历史相似的商品，限制了用户发现新品类的机会。"
        },
        {
            id: "w8-4-q11",
            question: "'看了又看'推荐功能的实现原理是什么？",
            options: [
                "统计用户在同一会话浏览的商品共现关系",
                "分析商品属性相似度",
                "使用深度学习模型",
                "人工配置关联商品"
            ],
            answer: 0,
            rationale: "'看了又看'通过统计用户在同一会话中浏览的商品对的共现频次，计算商品之间的关联度进行推荐。"
        },
        {
            id: "w8-4-q12",
            question: "MMR（Maximal Marginal Relevance）算法的作用是什么？",
            options: [
                "提高推荐准确性",
                "在相关性和多样性之间取得平衡",
                "加快推荐速度",
                "减少存储空间"
            ],
            answer: 1,
            rationale: "MMR 算法在选择推荐结果时同时考虑相关性和多样性，避免推荐过于相似的商品，提升用户发现新商品的机会。"
        }
    ]
}
