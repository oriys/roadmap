import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const elasticsearchStages: Stage[] = [
  {
    id: "es-s1",
    title: "阶段一：基础概念与核心操作",
    duration: "第 1-3 周",
    goal: "理解全文检索原理与倒排索引，掌握 Elasticsearch 架构（Node/Index/Shard）、基础 CRUD 与 Mapping 设计。",
    weeks: [
      {
        id: "es-w1",
        title: "第 1 周：全文检索与倒排索引",
        summary: "理解搜索引擎的核心数据结构——倒排索引，以及 Elasticsearch 的基本概念。",
        overview: "全文检索是 Elasticsearch 的基石。本周从信息检索原理出发，理解倒排索引的构建过程、Term Dictionary 与 Posting List 的关系，以及 Elasticsearch 的基本术语。",
        keyPoints: [
          "倒排索引将文档内容分词后建立「词项 → 文档列表」的映射",
          "Term Dictionary 使用 FST 压缩存储，Posting List 使用 Roaring Bitmap 压缩",
          "Elasticsearch 基于 Apache Lucene 构建，每个 Shard 对应一个 Lucene 索引",
        ],
        lessons: [
          {
            id: "es-w1-1",
            title: "信息检索与全文搜索原理",
            detail: "从信息检索基础出发，理解全文搜索的核心流程：文档采集、分词、索引构建与查询匹配。",
            keyPoints: [
              "全文检索的核心是将非结构化文本转化为可高效查询的结构化索引。",
              "检索流程：文档 → 分词 → 建立倒排索引 → 查询词匹配 → 相关性排序。",
              "Elasticsearch 既是搜索引擎也是分析引擎，支持近实时（NRT）搜索。",
            ],
            resources: [
              { title: "Elasticsearch 是什么", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/elasticsearch-intro-what-is-es.html" },
              { title: "信息检索导论", url: "https://nlp.stanford.edu/IR-book/information-retrieval-book.html" },
            ],
          },
          {
            id: "es-w1-2",
            title: "倒排索引深入解析",
            detail: "深入理解倒排索引的内部结构，包括 Term Dictionary、Posting List 及其压缩编码方式。",
            keyPoints: [
              "倒排索引由 Term Dictionary 和 Posting List 两部分组成。",
              "Term Dictionary 通过 FST（有限状态转换器）实现前缀压缩与快速查找。",
              "Posting List 使用 Frame of Reference 和 Roaring Bitmap 压缩文档 ID 列表。",
            ],
            resources: [
              { title: "Elasticsearch 倒排索引", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/documents-indices.html" },
              { title: "Lucene 倒排索引原理", url: "https://lucene.apache.org/core/" },
              { title: "FST 数据结构", url: "https://blog.mikemccandless.com/2010/12/using-finite-state-transducers-in.html" },
            ],
          },
          {
            id: "es-w1-3",
            title: "Elasticsearch 基本概念",
            detail: "掌握 Index、Document、Field、Type 等核心概念，理解与关系型数据库的类比与区别。",
            keyPoints: [
              "Index 类似数据库，Document 类似行，Field 类似列，但 ES 是无模式（schema-free）的。",
              "每个 Document 是一个 JSON 对象，有唯一的 _id 标识。",
              "ES 7.x 移除了 Type 概念，每个 Index 只有一个隐含 Type。",
            ],
            resources: [
              { title: "ES 基本概念", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/documents-indices.html" },
              { title: "快速入门", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started.html" },
            ],
          },
        ],
      },
      {
        id: "es-w2",
        title: "第 2 周：集群架构与分片机制",
        summary: "理解 Elasticsearch 的分布式架构，掌握 Node 角色、Index 分片与副本的工作原理。",
        overview: "Elasticsearch 天然分布式。本周深入理解集群的节点发现、主节点选举、分片分配策略与数据写入流程。",
        keyPoints: [
          "集群由多个 Node 组成，Master 节点负责集群状态管理与分片分配",
          "Primary Shard 处理写入，Replica Shard 提供高可用和读扩展",
          "分片数在索引创建后不可更改，需要合理规划",
        ],
        lessons: [
          {
            id: "es-w2-1",
            title: "集群架构与节点角色",
            detail: "理解 Elasticsearch 集群的节点类型（Master、Data、Coordinating、Ingest）及其各自职责。",
            keyPoints: [
              "Master 节点管理集群元数据和分片分配，建议 3 个专用 Master。",
              "Data 节点存储数据和执行搜索/聚合操作，是资源消耗最大的角色。",
              "Coordinating 节点负责请求路由和结果合并，适合做负载均衡入口。",
            ],
            resources: [
              { title: "节点角色", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-node.html" },
              { title: "集群发现", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-discovery.html" },
            ],
          },
          {
            id: "es-w2-2",
            title: "分片与副本机制",
            detail: "理解 Primary Shard 和 Replica Shard 的分配策略、数据写入流程与故障恢复机制。",
            keyPoints: [
              "每个索引由多个 Primary Shard 组成，每个 Primary 可有零或多个 Replica。",
              "写入请求先到 Primary Shard，成功后同步到 Replica。",
              "分片数影响并行处理能力，单个分片建议 10-50GB。",
            ],
            resources: [
              { title: "分片与副本", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/scalability.html" },
              { title: "分片分配", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/index-modules-allocation.html" },
            ],
          },
          {
            id: "es-w2-3",
            title: "数据写入与近实时搜索",
            detail: "理解文档从写入到可搜索的完整流程：Refresh、Flush、Translog 与 Segment Merge。",
            keyPoints: [
              "文档写入先到 Index Buffer 和 Translog，Refresh 后才可搜索（默认 1 秒）。",
              "Flush 将内存中的 Segment 持久化到磁盘并清空 Translog。",
              "Segment Merge 合并小 Segment 以减少文件数量和提升查询性能。",
            ],
            resources: [
              { title: "近实时搜索", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/near-real-time.html" },
              { title: "Translog", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/index-modules-translog.html" },
            ],
          },
        ],
      },
      {
        id: "es-w3",
        title: "第 3 周：CRUD 操作与 Mapping",
        summary: "掌握文档的增删改查操作，理解 Mapping 类型系统与动态映射机制。",
        overview: "Mapping 定义了文档的字段结构和索引行为。本周学习文档 CRUD API、显式 Mapping 设计与动态模板配置。",
        keyPoints: [
          "Mapping 类似数据库 Schema，定义字段类型和索引/分析方式",
          "动态 Mapping 自动推断类型，但生产环境应使用显式 Mapping",
          "Bulk API 批量操作是高效数据导入的关键",
        ],
        lessons: [
          {
            id: "es-w3-1",
            title: "文档 CRUD 操作",
            detail: "掌握 Index、Get、Update、Delete 等文档操作 API 及批量操作（Bulk API）的使用。",
            keyPoints: [
              "PUT /<index>/_doc/<id> 创建/替换文档，POST /<index>/_doc 自动生成 ID。",
              "Update API 支持部分更新（doc）和脚本更新（script）。",
              "Bulk API 一次请求执行多个操作，显著减少网络往返开销。",
            ],
            resources: [
              { title: "文档 API", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/docs.html" },
              { title: "Bulk API", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-bulk.html" },
            ],
          },
          {
            id: "es-w3-2",
            title: "Mapping 与字段类型",
            detail: "理解 Mapping 定义、字段类型（text/keyword/数值/日期/对象/嵌套）与索引选项。",
            keyPoints: [
              "text 类型分词后建立倒排索引用于全文搜索，keyword 类型不分词用于精确匹配。",
              "数值类型选择影响存储效率：能用 byte 不用 long。",
              "nested 类型保持对象数组内部字段的关联关系，避免扁平化问题。",
            ],
            resources: [
              { title: "Mapping", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping.html" },
              { title: "字段类型", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-types.html" },
            ],
          },
          {
            id: "es-w3-3",
            title: "动态 Mapping 与模板",
            detail: "配置动态 Mapping 规则和 Index Template，实现自动化的索引结构管理。",
            keyPoints: [
              "动态 Mapping 自动推断字段类型，但字符串可能被同时映射为 text 和 keyword。",
              "Index Template 为匹配模式的索引自动应用 Settings 和 Mappings。",
              "Component Template 可组合复用，通过 composed_of 引用多个组件模板。",
            ],
            resources: [
              { title: "动态 Mapping", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/dynamic-mapping.html" },
              { title: "索引模板", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/index-templates.html" },
              { title: "组件模板", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-component-template.html" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "es-s2",
    title: "阶段二：搜索与分析",
    duration: "第 4-6 周",
    goal: "掌握 Query DSL 的各种查询方式、聚合分析能力、分词器配置与相关性评分调优。",
    weeks: [
      {
        id: "es-w4",
        title: "第 4 周：Query DSL 核心查询",
        summary: "掌握 match、term、bool、range 等核心查询类型与复合查询的使用。",
        overview: "Query DSL 是 Elasticsearch 查询的核心语言。本周学习全文查询、精确查询和复合查询的语法与适用场景。",
        keyPoints: [
          "match 查询对输入分词后匹配，term 查询精确匹配不分词",
          "bool 查询通过 must/should/must_not/filter 组合多条件",
          "filter 上下文不计算评分且可缓存，性能优于 query 上下文",
        ],
        lessons: [
          {
            id: "es-w4-1",
            title: "全文查询与精确查询",
            detail: "掌握 match、match_phrase、multi_match 等全文查询以及 term、terms、range 等精确查询的区别与用法。",
            keyPoints: [
              "match 对查询文本分词后与倒排索引匹配，适合全文搜索场景。",
              "term 不分词直接匹配 keyword 字段，适合状态码、ID 等精确匹配。",
              "match_phrase 要求词项按顺序出现且位置相邻，支持 slop 参数放宽距离。",
            ],
            resources: [
              { title: "全文查询", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/full-text-queries.html" },
              { title: "Term 级查询", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/term-level-queries.html" },
            ],
          },
          {
            id: "es-w4-2",
            title: "Bool 复合查询",
            detail: "使用 bool 查询组合多个查询条件，理解 must、should、must_not 和 filter 的评分行为。",
            keyPoints: [
              "must 和 should 参与评分计算，filter 和 must_not 不参与评分。",
              "filter 子句的结果会被缓存到 Node Query Cache 中，提升重复查询性能。",
              "minimum_should_match 控制 should 子句的最少匹配数量。",
            ],
            resources: [
              { title: "Bool 查询", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-bool-query.html" },
              { title: "复合查询", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/compound-queries.html" },
            ],
          },
          {
            id: "es-w4-3",
            title: "高亮、排序与分页",
            detail: "掌握搜索结果的高亮显示、自定义排序与深分页（Search After）方案。",
            keyPoints: [
              "highlight 为匹配词项添加 HTML 标签，支持 unified/plain/fvh 三种高亮器。",
              "from+size 简单分页有 10000 条限制，深分页使用 search_after + PIT。",
              "自定义排序使用 sort 参数，支持多字段排序和脚本排序。",
            ],
            resources: [
              { title: "高亮", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/highlighting.html" },
              { title: "分页搜索", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/paginate-search-results.html" },
              { title: "排序", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/sort-search-results.html" },
            ],
          },
        ],
      },
      {
        id: "es-w5",
        title: "第 5 周：聚合分析",
        summary: "掌握 Bucket、Metric、Pipeline 三类聚合，实现复杂数据分析需求。",
        overview: "聚合是 Elasticsearch 作为分析引擎的核心能力。本周学习桶聚合、指标聚合和管道聚合的用法与性能优化。",
        keyPoints: [
          "Bucket 聚合按条件分桶（terms/date_histogram/range 等）",
          "Metric 聚合计算数值指标（avg/sum/cardinality/percentiles 等）",
          "Pipeline 聚合基于其他聚合的输出做二次计算",
        ],
        lessons: [
          {
            id: "es-w5-1",
            title: "Bucket 聚合",
            detail: "掌握 terms、date_histogram、range、filters 等桶聚合类型，理解分桶逻辑与 doc_count 误差。",
            keyPoints: [
              "terms 聚合按字段值分桶，默认返回 top 10，使用 keyword 字段。",
              "date_histogram 按时间间隔分桶，支持 fixed_interval 和 calendar_interval。",
              "terms 聚合在分布式环境下存在 doc_count 误差，可通过 shard_size 调大缓解。",
            ],
            resources: [
              { title: "Bucket 聚合", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket.html" },
              { title: "Terms 聚合", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-terms-aggregation.html" },
            ],
          },
          {
            id: "es-w5-2",
            title: "Metric 与 Pipeline 聚合",
            detail: "使用 Metric 聚合计算统计指标，通过 Pipeline 聚合实现环比增长、移动平均等高级分析。",
            keyPoints: [
              "stats 聚合一次返回 count/min/max/avg/sum 五个指标。",
              "cardinality 使用 HyperLogLog++ 算法近似计算去重数。",
              "Pipeline 聚合如 derivative（求导）、moving_avg（移动平均）基于父聚合输出计算。",
            ],
            resources: [
              { title: "Metric 聚合", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-metrics.html" },
              { title: "Pipeline 聚合", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-pipeline.html" },
            ],
          },
          {
            id: "es-w5-3",
            title: "聚合性能优化",
            detail: "优化聚合查询性能，理解 Global Ordinals、Eager Loading 和聚合缓存机制。",
            keyPoints: [
              "keyword 字段的 terms 聚合使用 Global Ordinals 加速，首次查询需构建。",
              "设置 eager_global_ordinals: true 在 Refresh 时预构建 Ordinals。",
              "聚合结果可通过 Request Cache 缓存，适合不频繁变化的数据。",
            ],
            resources: [
              { title: "聚合缓存", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/shard-request-cache.html" },
              { title: "Global Ordinals", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/eager-global-ordinals.html" },
            ],
          },
        ],
      },
      {
        id: "es-w6",
        title: "第 6 周：分词器与相关性评分",
        summary: "掌握分词器的工作原理与自定义配置，理解 BM25 评分模型与相关性调优方法。",
        overview: "分词和评分决定了搜索质量。本周学习 Analyzer 的组成、中文分词方案，以及 BM25 评分模型与相关性调优技巧。",
        keyPoints: [
          "Analyzer 由 Character Filter + Tokenizer + Token Filter 三部分组成",
          "中文分词推荐使用 IK 分词器或 Jieba，支持自定义词典",
          "BM25 是默认评分模型，通过 boost/function_score 可调优排序",
        ],
        lessons: [
          {
            id: "es-w6-1",
            title: "分词器架构与内置分词器",
            detail: "理解 Analyzer 的三阶段处理流程，掌握 standard、whitespace、keyword 等内置分词器的特点。",
            keyPoints: [
              "Character Filter 预处理文本（如 HTML 去标签），Tokenizer 切分词项，Token Filter 后处理（如小写化）。",
              "standard 分词器按 Unicode 文本分割，适合大多数西文场景。",
              "使用 _analyze API 测试分词效果，调试自定义分词器。",
            ],
            resources: [
              { title: "分词器概念", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-overview.html" },
              { title: "内置分词器", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-analyzers.html" },
            ],
          },
          {
            id: "es-w6-2",
            title: "中文分词与自定义分词器",
            detail: "配置 IK 分词器实现中文分词，设计自定义分词器支持同义词、停用词与自定义词典。",
            keyPoints: [
              "IK 分词器提供 ik_smart（粗粒度）和 ik_max_word（细粒度）两种模式。",
              "自定义词典通过配置文件或远程热更新方式加载。",
              "同义词过滤器（synonym）支持在索引时或查询时扩展同义词。",
            ],
            resources: [
              { title: "自定义分词器", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-custom-analyzer.html" },
              { title: "IK 分词器", url: "https://github.com/infinilabs/analysis-ik" },
              { title: "同义词过滤器", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-synonym-tokenfilter.html" },
            ],
          },
          {
            id: "es-w6-3",
            title: "BM25 评分与相关性调优",
            detail: "理解 BM25 评分公式的参数含义，使用 function_score、boost 和 rescore 调优搜索排序。",
            keyPoints: [
              "BM25 基于词频（TF）、逆文档频率（IDF）和文档长度归一化计算评分。",
              "function_score 支持衰减函数、脚本评分和随机评分等自定义评分逻辑。",
              "使用 explain API 查看评分细节，定位相关性问题。",
            ],
            resources: [
              { title: "BM25 相似度", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/index-modules-similarity.html" },
              { title: "Function Score", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-function-score-query.html" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "es-s3",
    title: "阶段三：运维与调优",
    duration: "第 7-9 周",
    goal: "掌握集群架构设计、索引生命周期管理（ILM）、性能调优（JVM/Shard sizing）、监控与告警。",
    weeks: [
      {
        id: "es-w7",
        title: "第 7 周：集群架构设计",
        summary: "设计生产级 Elasticsearch 集群架构，规划节点角色、分片策略与容量模型。",
        overview: "集群架构直接决定了系统的可用性与扩展性。本周学习节点规划、分片策略制定与容量评估方法。",
        keyPoints: [
          "Master 节点与 Data 节点分离，专用 Master 保证集群稳定",
          "分片大小建议 10-50GB，每节点分片数不超过每 GB 堆内存 20 个",
          "Hot-Warm-Cold 架构分层存储不同时效性的数据",
        ],
        lessons: [
          {
            id: "es-w7-1",
            title: "节点规划与硬件选型",
            detail: "根据数据量和查询负载规划节点数量与角色分配，选择合适的硬件配置（CPU/内存/磁盘）。",
            keyPoints: [
              "Data 节点内存建议 32-64GB，堆内存不超过物理内存的 50% 且不超过 32GB。",
              "Hot 节点使用 SSD，Warm/Cold 节点可使用 HDD 降低成本。",
              "Coordinating 节点用于分担查询合并负载，适合大量并发查询场景。",
            ],
            resources: [
              { title: "集群规模规划", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/size-your-shards.html" },
              { title: "堆内存设置", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/advanced-configuration.html#set-jvm-heap-size" },
            ],
          },
          {
            id: "es-w7-2",
            title: "分片策略与容量规划",
            detail: "制定合理的分片数量和大小策略，评估索引容量增长与集群扩展方案。",
            keyPoints: [
              "过多分片导致集群状态膨胀和查询开销增大，过少分片限制并行性能。",
              "使用 Rollover API 按大小或时间自动滚动创建新索引。",
              "Shrink API 可减少已有索引的分片数，Reindex API 迁移数据。",
            ],
            resources: [
              { title: "分片策略", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/size-your-shards.html" },
              { title: "Rollover API", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-rollover-index.html" },
            ],
          },
          {
            id: "es-w7-3",
            title: "Hot-Warm-Cold 架构",
            detail: "实现数据分层存储架构，将热数据放在 SSD 节点，温/冷数据迁移到低成本存储。",
            keyPoints: [
              "通过 node.attr 标记节点角色（hot/warm/cold），使用 ILM 自动迁移。",
              "Frozen Tier 使用 Searchable Snapshot 实现最低成本的冷数据检索。",
              "数据分层显著降低存储成本，同时保证热数据的查询性能。",
            ],
            resources: [
              { title: "数据分层", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/data-tiers.html" },
              { title: "可搜索快照", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/searchable-snapshots.html" },
            ],
          },
        ],
      },
      {
        id: "es-w8",
        title: "第 8 周：索引生命周期管理",
        summary: "使用 ILM 自动化管理索引的创建、优化、迁移与删除全生命周期。",
        overview: "日志和时序数据随时间增长，需要自动化的生命周期管理。本周学习 ILM 策略配置、Data Stream 与快照备份。",
        keyPoints: [
          "ILM 定义 Hot → Warm → Cold → Delete 四阶段自动化策略",
          "Data Stream 简化时序数据的索引管理，自动 Rollover",
          "快照备份是数据恢复的最后保障",
        ],
        lessons: [
          {
            id: "es-w8-1",
            title: "ILM 策略配置",
            detail: "配置 Index Lifecycle Management 策略，定义各阶段的触发条件与执行动作。",
            keyPoints: [
              "Hot 阶段配置 Rollover 条件（max_size/max_age/max_docs）。",
              "Warm 阶段执行 Force Merge 减少 Segment 数量，Shrink 减少分片数。",
              "Cold 阶段可设置只读，Delete 阶段按保留天数自动清理。",
            ],
            resources: [
              { title: "ILM 概述", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/index-lifecycle-management.html" },
              { title: "ILM 策略", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/ilm-actions.html" },
            ],
          },
          {
            id: "es-w8-2",
            title: "Data Stream 与时序数据",
            detail: "使用 Data Stream 管理时序数据，简化日志、指标等追加写入场景的索引操作。",
            keyPoints: [
              "Data Stream 由多个后备索引组成，自动管理索引的创建和切换。",
              "写入请求自动路由到最新的后备索引，查询跨所有后备索引。",
              "Data Stream 要求使用 @timestamp 字段和匹配的 Index Template。",
            ],
            resources: [
              { title: "Data Stream", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/data-streams.html" },
              { title: "TSDS", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/tsds.html" },
            ],
          },
          {
            id: "es-w8-3",
            title: "快照与数据恢复",
            detail: "配置快照仓库，制定定期快照策略，掌握索引恢复与集群迁移操作。",
            keyPoints: [
              "快照仓库支持 S3、GCS、Azure Blob、HDFS 和共享文件系统。",
              "SLM（Snapshot Lifecycle Management）自动执行定期快照。",
              "恢复时可选择恢复特定索引，并可修改索引设置和重命名。",
            ],
            resources: [
              { title: "快照与恢复", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/snapshot-restore.html" },
              { title: "SLM", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/snapshot-lifecycle-management.html" },
            ],
          },
        ],
      },
      {
        id: "es-w9",
        title: "第 9 周：性能调优与监控",
        summary: "从 JVM 调优到查询优化，全面提升 Elasticsearch 集群性能，搭建监控体系。",
        overview: "性能调优需要从硬件、JVM、索引设计和查询四个层面综合考虑。本周学习关键调优参数与监控告警方案。",
        keyPoints: [
          "JVM 堆内存设为物理内存的 50%，不超过 32GB 以利用指针压缩",
          "慢查询日志和 Profile API 是定位查询瓶颈的关键工具",
          "使用 _cat API 和 Kibana Stack Monitoring 监控集群健康",
        ],
        lessons: [
          {
            id: "es-w9-1",
            title: "JVM 与系统调优",
            detail: "优化 JVM 堆内存、GC 策略和操作系统参数（文件描述符、虚拟内存），提升集群稳定性。",
            keyPoints: [
              "堆内存超过 32GB 会失去 Compressed OOPs 优化，性能反而下降。",
              "ES 8.x 默认使用 G1GC，避免手动调整 GC 参数除非有明确的性能问题。",
              "配置 vm.max_map_count=262144，设置 nofile 限制为 65535 以上。",
            ],
            resources: [
              { title: "JVM 配置", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/advanced-configuration.html" },
              { title: "系统配置", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/system-config.html" },
            ],
          },
          {
            id: "es-w9-2",
            title: "查询与索引性能优化",
            detail: "通过 Profile API 分析查询瓶颈，优化 Mapping 设计和查询写法提升搜索性能。",
            keyPoints: [
              "Profile API 展示查询各阶段耗时，定位慢查询的具体瓶颈。",
              "避免 wildcard 前缀匹配和大 terms 查询，它们会跳过倒排索引。",
              "合理使用 doc_values（列式存储）加速排序和聚合操作。",
            ],
            resources: [
              { title: "Profile API", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/search-profile.html" },
              { title: "搜索调优", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/tune-for-search-speed.html" },
            ],
          },
          {
            id: "es-w9-3",
            title: "集群监控与告警",
            detail: "使用 _cat API、Cluster Stats 和 Kibana Stack Monitoring 搭建集群监控与告警体系。",
            keyPoints: [
              "_cat/health 查看集群状态（green/yellow/red），_cat/nodes 查看节点资源。",
              "关键监控指标：JVM 堆使用率、索引速率、查询延迟、磁盘水位线。",
              "磁盘水位线：85% 停止分配新分片，90% 尝试迁移分片，95% 设为只读。",
            ],
            resources: [
              { title: "集群监控", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/monitor-elasticsearch-cluster.html" },
              { title: "Cluster Health API", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/cluster-health.html" },
              { title: "Cat API", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/cat.html" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "es-s4",
    title: "阶段四：高级实践",
    duration: "第 10-12 周",
    goal: "掌握 ELK Stack 日志分析、向量搜索（kNN）、跨集群搜索与复制、安全与权限管理。",
    weeks: [
      {
        id: "es-w10",
        title: "第 10 周：ELK Stack 日志分析",
        summary: "搭建 ELK（Elasticsearch + Logstash + Kibana）日志分析平台，实现日志的采集、处理与可视化。",
        overview: "ELK Stack 是业界最流行的日志分析方案。本周学习 Logstash 管道配置、Filebeat 日志采集与 Kibana 数据可视化。",
        keyPoints: [
          "Filebeat 轻量采集日志，Logstash 负责复杂的数据清洗与转换",
          "Logstash 管道由 Input → Filter → Output 三部分组成",
          "Kibana Discover 探索数据，Dashboard 构建可视化看板",
        ],
        lessons: [
          {
            id: "es-w10-1",
            title: "Logstash 管道与数据处理",
            detail: "配置 Logstash 的 Input、Filter、Output 管道，实现日志的解析、丰富与转发。",
            keyPoints: [
              "Grok 过滤器使用正则模式解析非结构化日志为结构化字段。",
              "Mutate 过滤器执行字段重命名、类型转换和删除操作。",
              "Dead Letter Queue（DLQ）处理解析失败的事件，避免数据丢失。",
            ],
            resources: [
              { title: "Logstash 入门", url: "https://www.elastic.co/guide/en/logstash/current/getting-started-with-logstash.html" },
              { title: "Grok 过滤器", url: "https://www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html" },
            ],
          },
          {
            id: "es-w10-2",
            title: "Filebeat 日志采集",
            detail: "使用 Filebeat 采集系统日志和应用日志，配置模块和处理器实现开箱即用的日志收集。",
            keyPoints: [
              "Filebeat 通过 Registry 文件记录读取位置，保证日志不丢失不重复。",
              "内置模块（Nginx/MySQL/System）提供预配置的采集和解析规则。",
              "Processor 可在 Filebeat 端完成简单的数据处理，减轻 Logstash 负载。",
            ],
            resources: [
              { title: "Filebeat 概览", url: "https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-overview.html" },
              { title: "Filebeat 模块", url: "https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-modules.html" },
            ],
          },
          {
            id: "es-w10-3",
            title: "Kibana 数据可视化",
            detail: "使用 Kibana Discover 探索数据，创建 Visualization 和 Dashboard 构建运维监控看板。",
            keyPoints: [
              "Data View 定义 Kibana 访问的索引模式，支持通配符匹配多个索引。",
              "Lens 是推荐的可视化编辑器，支持拖拽式图表创建。",
              "Dashboard 支持过滤器联动和时间范围选择，实现交互式数据探索。",
            ],
            resources: [
              { title: "Kibana 入门", url: "https://www.elastic.co/guide/en/kibana/current/get-started.html" },
              { title: "Dashboard 创建", url: "https://www.elastic.co/guide/en/kibana/current/dashboard.html" },
            ],
          },
        ],
      },
      {
        id: "es-w11",
        title: "第 11 周：向量搜索与语义检索",
        summary: "掌握 Elasticsearch 的向量搜索（kNN）能力，实现语义搜索和混合检索。",
        overview: "向量搜索是 AI 时代的搜索新范式。本周学习 dense_vector 字段类型、kNN 搜索和混合检索策略。",
        keyPoints: [
          "dense_vector 字段存储向量嵌入，支持 HNSW 索引加速近似最近邻搜索",
          "kNN 搜索通过向量相似度匹配语义相关的文档",
          "混合检索结合 BM25 文本搜索和 kNN 向量搜索，效果优于单一方式",
        ],
        lessons: [
          {
            id: "es-w11-1",
            title: "向量字段与 kNN 搜索",
            detail: "配置 dense_vector 字段类型，使用 kNN 搜索 API 实现近似最近邻向量检索。",
            keyPoints: [
              "dense_vector 支持 float、byte 和 bit 量化类型，影响精度与存储效率。",
              "HNSW（Hierarchical Navigable Small World）图索引加速近似 kNN 搜索。",
              "kNN 搜索参数 num_candidates 控制精度与性能的平衡。",
            ],
            resources: [
              { title: "kNN 搜索", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/knn-search.html" },
              { title: "dense_vector", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/dense-vector.html" },
            ],
          },
          {
            id: "es-w11-2",
            title: "语义搜索与推理 API",
            detail: "使用 Elasticsearch 的推理（Inference）API 集成机器学习模型，实现文本向量化和语义搜索。",
            keyPoints: [
              "Inference API 支持集成 ELSER、OpenAI、Hugging Face 等模型。",
              "ELSER 是 Elastic 的稀疏向量模型，针对英文检索优化。",
              "semantic_text 字段类型自动调用推理模型生成向量，简化使用流程。",
            ],
            resources: [
              { title: "语义搜索", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/semantic-search.html" },
              { title: "Inference API", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/inference-apis.html" },
            ],
          },
          {
            id: "es-w11-3",
            title: "混合检索与 RRF",
            detail: "结合 BM25 全文搜索和 kNN 向量搜索实现混合检索，使用 RRF 融合排序结果。",
            keyPoints: [
              "混合检索同时执行文本查询和向量查询，覆盖词汇匹配和语义匹配。",
              "RRF（Reciprocal Rank Fusion）通过排名融合合并多路搜索结果。",
              "混合检索在大多数场景下效果优于单纯的文本搜索或向量搜索。",
            ],
            resources: [
              { title: "混合搜索", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/rrf.html" },
              { title: "检索策略对比", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/knn-search.html#_combine_approximate_knn_with_other_features" },
            ],
          },
        ],
      },
      {
        id: "es-w12",
        title: "第 12 周：跨集群与安全管理",
        summary: "实现跨集群搜索与复制，配置 Elasticsearch 安全特性保护集群与数据。",
        overview: "企业级部署需要跨集群能力和完善的安全体系。本周学习 CCS/CCR 架构设计与安全认证、授权、审计配置。",
        keyPoints: [
          "CCS（跨集群搜索）在多集群间透明查询，CCR（跨集群复制）实现异地容灾",
          "安全特性包括 TLS 加密通信、用户认证和基于角色的访问控制",
          "审计日志记录关键操作，满足合规性要求",
        ],
        lessons: [
          {
            id: "es-w12-1",
            title: "跨集群搜索（CCS）",
            detail: "配置远程集群连接，实现跨多个 Elasticsearch 集群的统一搜索查询。",
            keyPoints: [
              "通过 cluster.remote 设置配置远程集群连接，支持 Sniff 和 Proxy 两种模式。",
              "查询语法使用 <remote_name>:<index_name> 格式指定远程索引。",
              "CCS 支持 minimize_roundtrips 参数优化跨集群查询的网络开销。",
            ],
            resources: [
              { title: "跨集群搜索", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-cross-cluster-search.html" },
              { title: "远程集群", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/remote-clusters.html" },
            ],
          },
          {
            id: "es-w12-2",
            title: "跨集群复制（CCR）与安全认证",
            detail: "配置 CCR 实现索引的异地复制，开启安全特性配置 TLS 通信和用户认证。",
            keyPoints: [
              "CCR 将 Leader 索引的变更实时复制到 Follower 索引，实现异地容灾。",
              "Auto-Follow Pattern 自动复制匹配模式的新索引。",
              "xpack.security 开启安全特性，配置传输层和 HTTP 层的 TLS 加密。",
            ],
            resources: [
              { title: "跨集群复制", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/xpack-ccr.html" },
              { title: "安全配置", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/security-minimal-setup.html" },
            ],
          },
          {
            id: "es-w12-3",
            title: "RBAC 权限与审计",
            detail: "配置基于角色的访问控制（RBAC），实现字段级和文档级安全，开启审计日志。",
            keyPoints: [
              "Role 定义索引权限（indices）和集群权限（cluster），支持字段级和文档级限制。",
              "内置角色如 superuser、kibana_system 提供预定义的权限集。",
              "审计日志记录认证、授权和数据访问事件，满足安全合规要求。",
            ],
            resources: [
              { title: "RBAC", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/authorization.html" },
              { title: "审计日志", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/enable-audit-logging.html" },
              { title: "文档级安全", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/document-level-security.html" },
            ],
          },
        ],
      },
    ],
  },
]

export const elasticsearchKnowledgeCards: KnowledgeCard[] = [
  {
    id: "es-card-inverted-index",
    title: "倒排索引原理",
    summary: "倒排索引是 Elasticsearch 高效全文检索的核心数据结构。",
    points: [
      "倒排索引将文档内容分词后建立「词项 → 文档 ID 列表」的映射。",
      "Term Dictionary 使用 FST 压缩实现 O(len) 级别的快速查找。",
      "Posting List 使用增量编码和 Roaring Bitmap 压缩存储文档 ID。",
    ],
    practice: "使用 _analyze API 测试不同分词器的分词结果，理解倒排索引的构建过程。",
  },
  {
    id: "es-card-query-dsl",
    title: "Query DSL 体系",
    summary: "Query DSL 是 Elasticsearch 查询的统一语言。",
    points: [
      "全文查询（match/match_phrase）分词后匹配，精确查询（term/range）直接匹配。",
      "bool 查询通过 must/should/must_not/filter 组合多条件，filter 不计算评分。",
      "function_score 和 rescore 可自定义评分逻辑调优搜索结果排序。",
    ],
    practice: "设计一个电商搜索场景，使用 bool 查询组合关键词搜索、价格过滤和品牌筛选。",
  },
  {
    id: "es-card-aggregation",
    title: "聚合分析框架",
    summary: "聚合是 Elasticsearch 数据分析的核心能力。",
    points: [
      "Bucket 聚合（terms/date_histogram）按条件分桶，嵌套 Metric 聚合计算统计指标。",
      "cardinality 聚合使用 HyperLogLog++ 近似计算去重数，存在约 1% 误差。",
      "Pipeline 聚合在其他聚合结果上做二次计算，如环比增长和移动平均。",
    ],
    practice: "对一组日志数据按小时分桶，统计每小时的请求数、平均响应时间和 P99 延迟。",
  },
  {
    id: "es-card-mapping",
    title: "Mapping 设计",
    summary: "合理的 Mapping 设计是搜索性能和功能的基础。",
    points: [
      "text 类型用于全文搜索，keyword 类型用于精确匹配、排序和聚合。",
      "nested 类型保持对象数组中字段的关联关系，但查询成本更高。",
      "生产环境应禁用动态 Mapping（dynamic: strict），显式定义字段类型。",
    ],
    practice: "为一个博客系统设计 Mapping，包含标题（text+keyword）、标签（keyword）和评论（nested）。",
  },
  {
    id: "es-card-cluster",
    title: "集群架构设计",
    summary: "合理的集群架构是高可用和高性能的保障。",
    points: [
      "Master 节点与 Data 节点分离，3 个专用 Master 保证集群高可用。",
      "分片大小建议 10-50GB，过大影响恢复速度，过小浪费资源。",
      "Hot-Warm-Cold 分层架构配合 ILM 实现自动化数据生命周期管理。",
    ],
    practice: "为日均 100GB 日志数据设计集群架构，规划节点数量、分片策略和保留周期。",
  },
  {
    id: "es-card-performance",
    title: "性能调优要点",
    summary: "性能调优需要从 JVM、索引设计和查询三个层面综合优化。",
    points: [
      "JVM 堆内存设为物理内存的 50% 且不超过 32GB，利用 Compressed OOPs。",
      "使用 filter 上下文替代 query 上下文，利用缓存提升重复查询性能。",
      "避免 wildcard 前缀匹配和深分页，使用 search_after 替代 from+size。",
    ],
    practice: "使用 Profile API 分析一个慢查询，找出瓶颈并优化查询写法。",
  },
  {
    id: "es-card-elk",
    title: "ELK 日志分析",
    summary: "ELK Stack 是业界最流行的日志分析方案。",
    points: [
      "Filebeat 轻量采集日志，Logstash 清洗转换，Elasticsearch 存储检索。",
      "Grok 过滤器将非结构化日志解析为结构化字段，支持自定义模式。",
      "Kibana Dashboard 构建交互式运维看板，支持过滤器联动和时间范围选择。",
    ],
    practice: "搭建 ELK 环境，采集 Nginx 访问日志并创建包含 QPS、状态码分布和响应时间的看板。",
  },
  {
    id: "es-card-vector-search",
    title: "向量搜索与混合检索",
    summary: "向量搜索是 AI 时代搜索的新范式。",
    points: [
      "dense_vector 字段存储向量嵌入，HNSW 索引加速近似最近邻搜索。",
      "混合检索结合 BM25 文本搜索和 kNN 向量搜索，覆盖词汇和语义两个维度。",
      "RRF 排名融合算法无需调参即可有效合并多路搜索结果。",
    ],
    practice: "使用 Sentence Transformers 生成文本向量，实现一个语义搜索 + 关键词搜索的混合检索系统。",
  },
]

export const elasticsearchExamQuestions: QuizQuestion[] = [
  { id: "es-q1", question: "Elasticsearch 倒排索引的核心结构由哪两部分组成？", options: ["B+ 树和哈希表", "Term Dictionary 和 Posting List", "行存储和列存储", "主键索引和二级索引"], answer: 1, rationale: "倒排索引由 Term Dictionary（词项字典，用 FST 压缩）和 Posting List（包含文档 ID 列表）两部分组成。" },
  { id: "es-q2", question: "Elasticsearch 中 Primary Shard 和 Replica Shard 的关系是？", options: ["Primary 只读，Replica 可写", "Primary 处理写入后同步到 Replica，Replica 提供高可用和读扩展", "两者完全独立", "Replica 是 Primary 的压缩版本"], answer: 1, rationale: "写入请求先到 Primary Shard 处理，成功后同步到 Replica Shard。Replica 提供故障恢复和读请求分担。" },
  { id: "es-q3", question: "text 和 keyword 字段类型的核心区别是？", options: ["text 更快", "text 分词后建立倒排索引用于全文搜索，keyword 不分词用于精确匹配", "keyword 不能搜索", "text 不能存储中文"], answer: 1, rationale: "text 类型的值会经过分词器处理后建立倒排索引，适合全文搜索；keyword 类型保持原值不分词，适合精确匹配、排序和聚合。" },
  { id: "es-q4", question: "Elasticsearch 文档写入后默认多久可被搜索到？", options: ["立即可搜索", "默认 1 秒（Refresh Interval）", "1 分钟", "需要手动刷新"], answer: 1, rationale: "Elasticsearch 是近实时（NRT）搜索引擎，默认 Refresh Interval 为 1 秒，文档写入后约 1 秒可被搜索到。" },
  { id: "es-q5", question: "Bool 查询中 filter 子句相比 must 子句的优势是？", options: ["匹配更精确", "不计算评分且结果可被缓存，性能更高", "支持更多查询类型", "可以嵌套更深"], answer: 1, rationale: "filter 子句不参与相关性评分计算，且结果会被缓存到 Node Query Cache 中，重复查询性能显著提升。" },
  { id: "es-q6", question: "terms 聚合在分布式环境下的 doc_count 可能不精确，原因是？", options: ["数据量太大", "每个分片独立计算 top N 后合并，低频项可能被遗漏", "聚合算法有 bug", "需要使用 keyword 字段"], answer: 1, rationale: "每个分片独立返回自己的 top N 结果，Coordinating 节点合并时可能遗漏某些分片上的低频项，导致 doc_count 不精确。" },
  { id: "es-q7", question: "IK 分词器的 ik_smart 和 ik_max_word 模式的区别是？", options: ["没有区别", "ik_smart 粗粒度分词做最少切分，ik_max_word 细粒度分词做最多切分", "ik_smart 更慢", "ik_max_word 只支持英文"], answer: 1, rationale: "ik_smart 做最粗粒度切分（如「中华人民共和国」整体），ik_max_word 做最细粒度切分（拆成「中华人民共和国/中华人民/中华/华人/人民共和国」等）。" },
  { id: "es-q8", question: "JVM 堆内存建议不超过 32GB 的原因是？", options: ["操作系统限制", "超过 32GB 会失去 Compressed OOPs（压缩对象指针）优化", "ES 不支持更大内存", "会导致 GC 频率降低"], answer: 1, rationale: "当堆内存不超过约 32GB 时，JVM 可以使用 Compressed OOPs 用 4 字节指针寻址 32GB 空间，超过后需用 8 字节指针，实际可用堆内存反而可能减少。" },
  { id: "es-q9", question: "Hot-Warm-Cold 架构的主要目的是？", options: ["提升搜索速度", "通过数据分层存储降低成本，热数据用 SSD，冷数据用低成本存储", "简化集群管理", "增加数据副本"], answer: 1, rationale: "Hot-Warm-Cold 架构将不同时效性的数据存储在不同成本的硬件上，热数据用 SSD 保证性能，冷数据迁移到 HDD 或对象存储降低成本。" },
  { id: "es-q10", question: "Data Stream 要求文档必须包含哪个字段？", options: ["_id", "@timestamp", "type", "index"], answer: 1, rationale: "Data Stream 专为时序数据设计，要求每个文档包含 @timestamp 字段，用于时间排序和 ILM 策略执行。" },
  { id: "es-q11", question: "Logstash 管道由哪三个阶段组成？", options: ["Read → Process → Write", "Input → Filter → Output", "Source → Transform → Sink", "Collect → Store → Query"], answer: 1, rationale: "Logstash 管道由 Input（数据输入）、Filter（数据处理/转换）和 Output（数据输出）三个阶段组成。" },
  { id: "es-q12", question: "kNN 搜索中 HNSW 索引的作用是？", options: ["精确匹配文档 ID", "构建层级化小世界图加速近似最近邻向量检索", "压缩向量存储", "分词向量化"], answer: 1, rationale: "HNSW（Hierarchical Navigable Small World）是一种近似最近邻搜索算法，通过构建多层导航图实现亚线性时间复杂度的向量检索。" },
  { id: "es-q13", question: "RRF（Reciprocal Rank Fusion）的核心作用是？", options: ["压缩搜索结果", "融合多路搜索结果的排名，无需归一化评分", "加密搜索请求", "缓存搜索结果"], answer: 1, rationale: "RRF 通过排名倒数加权融合多路搜索结果，无需对不同查询的评分进行归一化，简单有效地合并文本搜索和向量搜索结果。" },
  { id: "es-q14", question: "CCS（跨集群搜索）查询远程索引的语法格式是？", options: ["remote/index", "<remote_name>:<index_name>", "index@remote", "remote.index"], answer: 1, rationale: "CCS 使用 <remote_name>:<index_name> 格式指定远程集群的索引，如 cluster_b:logs-*。" },
  { id: "es-q15", question: "Elasticsearch 集群状态为 Yellow 表示？", options: ["集群正常", "所有主分片已分配但部分副本分片未分配", "集群不可用", "正在重启"], answer: 1, rationale: "Yellow 表示所有 Primary Shard 已正常分配（数据不丢失），但部分 Replica Shard 未分配（高可用性降低）。" },
  { id: "es-q16", question: "Bulk API 相比逐条写入的核心优势是？", options: ["数据更安全", "一次请求执行多个操作，大幅减少网络往返开销", "支持更多字段类型", "自动创建索引"], answer: 1, rationale: "Bulk API 将多个 index/update/delete 操作合并为一次 HTTP 请求，显著减少网络往返次数和连接开销。" },
  { id: "es-q17", question: "Force Merge 操作的主要目的是？", options: ["增加分片数", "合并 Segment 减少文件数量，释放已删除文档的磁盘空间", "创建索引备份", "重建倒排索引"], answer: 1, rationale: "Force Merge 将多个 Segment 合并为更少的 Segment，减少文件句柄和内存使用，并物理删除标记为删除的文档以释放空间。" },
  { id: "es-q18", question: "nested 类型相比 object 类型的核心区别是？", options: ["性能更高", "保持对象数组内部字段的关联关系，避免扁平化导致的错误匹配", "存储更少", "支持更多字段"], answer: 1, rationale: "object 类型会将对象数组扁平化，导致不同对象的字段值交叉匹配。nested 类型将每个对象作为独立的隐藏文档索引，保持字段间的关联。" },
  { id: "es-q19", question: "Elasticsearch 磁盘水位线达到 85% 时会发生什么？", options: ["集群关闭", "停止向该节点分配新的分片", "自动删除旧数据", "触发快照备份"], answer: 1, rationale: "当磁盘使用率达到低水位线（默认 85%）时，ES 不再向该节点分配新的分片，达到 90% 尝试迁移分片，达到 95% 设为只读。" },
  { id: "es-q20", question: "使用 search_after 替代 from+size 深分页的原因是？", options: ["语法更简单", "from+size 有 10000 条限制且深分页消耗大量堆内存，search_after 通过排序值游标分页无此限制", "search_after 更快", "from+size 不支持排序"], answer: 1, rationale: "from+size 需要在每个分片上取 from+size 条文档然后合并排序，深分页时内存消耗巨大。search_after 通过上一页最后一条的排序值作为游标，每次只取一页数据。" },
]

export const elasticsearchRoadmap: RoadmapDefinition = {
  id: "elasticsearch",
  label: "Elasticsearch 搜索引擎",
  title: "Elasticsearch 搜索引擎学习路线",
  durationLabel: "12 周·36 课时",
  description: "从全文检索原理到生产实践，系统掌握 Elasticsearch 倒排索引、Query DSL、聚合分析、集群运维、性能调优与向量搜索，构建企业级搜索与分析能力。",
  heroBadge: "全文检索 · 聚合分析 · 集群运维 · 向量搜索",
  stages: elasticsearchStages,
  knowledgeCards: elasticsearchKnowledgeCards,
  examQuestions: elasticsearchExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "开始 Elasticsearch 之旅，先理解倒排索引原理与核心概念。"
    if (percent < 25) return "继续掌握 Mapping 设计和文档 CRUD 操作。"
    if (percent < 50) return "深入 Query DSL 和聚合分析，提升搜索与数据分析能力。"
    if (percent < 75) return "学习集群架构设计、ILM 和性能调优，迈向运维实践。"
    if (percent < 100) return "完善 ELK 日志分析、向量搜索与安全管理。"
    return "恭喜完成！你已具备企业级 Elasticsearch 实践能力，继续探索 AI 搜索与可观测性！"
  },
  resourceGuide: {
    environment: "安装 Elasticsearch 和 Kibana（推荐 Docker 部署），准备 VS Code + Elasticsearch 扩展或使用 Kibana Dev Tools。",
    fallbackKeyPoints: [
      "倒排索引是全文检索的核心，理解 Term Dictionary 和 Posting List",
      "text 类型用于全文搜索，keyword 类型用于精确匹配和聚合",
      "bool 查询的 filter 上下文不计算评分且可缓存，优先使用",
      "分片大小建议 10-50GB，JVM 堆内存不超过 32GB",
      "生产环境使用显式 Mapping 和 ILM 自动化索引生命周期",
    ],
    handsOnSteps: [
      "使用 Docker 部署 Elasticsearch + Kibana，熟悉 Dev Tools 控制台",
      "创建索引并设计 Mapping，使用 Bulk API 导入测试数据",
      "编写 bool 查询组合全文搜索和过滤条件，测试高亮和分页",
      "使用 date_histogram + stats 聚合分析时序数据",
      "配置 ILM 策略实现索引的自动 Rollover 和生命周期管理",
    ],
    selfChecks: [
      "能否解释倒排索引的构建过程和查询匹配流程？",
      "是否掌握 match/term/bool 查询的区别与适用场景？",
      "聚合分析能否实现按时间分桶、计算指标和管道聚合？",
      "集群架构设计是否考虑了节点角色分离和分片策略？",
      "是否了解 kNN 向量搜索和混合检索的使用方式？",
    ],
    extensions: [
      "深入学习 Elastic Observability（APM/Metrics/Logs）构建可观测性平台",
      "探索 Elasticsearch 与大语言模型（LLM）结合的 RAG 架构",
      "学习 Elasticsearch Security 实现企业级安全合规",
      "研究 Elasticsearch 在推荐系统和个性化搜索中的应用",
    ],
    lessonQuizAdvice: "每周完成 Kibana Dev Tools 实操练习后做测验，确保理解搜索原理而非仅会编写查询。",
  },
}
