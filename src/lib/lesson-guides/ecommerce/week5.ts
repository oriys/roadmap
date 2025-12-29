import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week5Guides: Record<string, LessonGuide> = {
    "w5-1": {
        lessonId: "w5-1",
        background: [
            "【ltree 数据类型】PostgreSQL 官方文档：'ltree stores a label path, a sequence of zero or more labels separated by dots'——ltree 存储由点分隔的标签路径序列（如 Top.Science.Astronomy），最多支持 65535 个标签，是处理分层数据的原生解决方案。",
            "【四种存储方案】树形结构常见存储方案：邻接表（Adjacency List，每行存储 parent_id）、嵌套集（Nested Set，左右值表示位置）、闭包表（Closure Table，存储所有祖先-后代关系）、物化路径（Materialized Path/ltree，存储完整路径字符串）。",
            "【递归 CTE 查询】PostgreSQL 官方文档：WITH RECURSIVE 语法支持递归查询，由非递归项 UNION ALL 递归项组成，通过迭代评估实现树遍历，是邻接表查询子树的利器。",
            "【ltree 操作符】核心操作符包括：@>（祖先包含）、<@（后代属于）、~（lquery 模式匹配）、@（ltxtquery 全文匹配），支持 GiST 索引加速查询。",
            "【方案对比原则】邻接表简单但递归慢，嵌套集读快但写复杂，闭包表空间换时间，物化路径/ltree 平衡读写性能。选型需权衡读写比例、树深度、修改频率。"
        ],
        keyDifficulties: [
            "【ltree 索引选择】官方文档：B-tree 索引支持比较操作，GiST 索引支持所有 ltree 操作（推荐），可通过 siglen 参数调整签名长度（如 gist_ltree_ops(siglen=100)）平衡索引大小与精度。",
            "【递归查询深度控制】WITH RECURSIVE 可能导致无限循环，需通过 CYCLE 子句或手动维护访问路径（ARRAY[id]）检测循环，限制最大深度防止性能问题。",
            "【路径更新代价】物化路径方案的最大缺点：移动节点需更新所有子节点的路径字符串。对于频繁调整结构的分类树，需评估更新成本或考虑混合方案。",
            "【分类树缓存策略】分类树通常变更不频繁但读取频繁，适合整棵树缓存到 Redis，使用 JSON 或 Hash 结构存储，通过发布订阅或手动清理实现缓存更新。"
        ],
        handsOnPath: [
            "安装 PostgreSQL ltree 扩展：CREATE EXTENSION ltree; 创建包含 path ltree 列的分类表，插入示例分类数据。",
            "使用 ltree 操作符查询：path @> 'Electronics' 查找所有电子产品子分类，path ~ '*.Phone.*' 模式匹配包含 Phone 的路径。",
            "创建邻接表版本的分类表（id, parent_id, name），使用 WITH RECURSIVE CTE 查询某分类的所有子分类和所有祖先分类。",
            "对比两种方案：用 EXPLAIN ANALYZE 比较 ltree 的 GiST 索引查询和邻接表的递归 CTE 查询性能，记录执行时间和扫描行数。",
            "实现分类移动功能：编写更新分类路径的 SQL（ltree 方案需更新所有子节点 path），测试移动包含多层子分类的节点。",
            "构建 REST API：实现获取分类树、获取子分类、添加/移动/删除分类的接口，返回嵌套 JSON 结构。"
        ],
        selfCheck: [
            "ltree 的 @>、<@、~ 操作符分别代表什么含义？何时需要使用 lquery 模式匹配？",
            "邻接表、嵌套集、闭包表、物化路径四种方案各有什么优缺点？如何根据业务特点选型？",
            "WITH RECURSIVE 查询的执行流程是什么？如何防止无限循环？如何实现深度优先和广度优先遍历？",
            "为什么推荐为 ltree 列创建 GiST 索引而非 B-tree 索引？",
            "如果分类树需要频繁调整结构（如促销活动临时分类），物化路径方案的缺点会更明显，有什么改进方案？",
            "如何设计分类树的缓存策略？缓存整棵树还是按需查询？如何处理缓存一致性？"
        ],
        extensions: [
            "研究 PostgreSQL 的 nested set 实现（如 django-mptt 的 lft/rght 字段），了解左右值的维护算法。",
            "探索闭包表（Closure Table）在复杂权限系统中的应用，如组织架构和资源继承。",
            "学习 MongoDB 的树形数据存储模式（Materialized Paths、Child References、Parent References），对比关系型和文档型数据库的方案差异。",
            "研究大型电商平台（如淘宝、京东）的商品分类实现，了解多租户、多站点场景下的分类隔离策略。"
        ],
        sourceUrls: [
            "https://www.postgresql.org/docs/current/ltree.html",
            "https://www.postgresql.org/docs/current/queries-with.html"
        ]
    },
    "w5-2": {
        lessonId: "w5-2",
        background: [
            "【SPU/SKU 定义】SPU（Standard Product Unit）是商品的抽象概念，如「iPhone 15 Pro」；SKU（Stock Keeping Unit）是具体的库存单元，如「iPhone 15 Pro 256GB 黑色」。一个 SPU 对应多个 SKU，SKU 是实际销售和库存管理的最小单位。",
            "【SKU 编码规范】Shopify 指南：SKU 应具有唯一性和可读性，通常由品牌代码、类目、属性值、序列号组成，如 APL-IPH15P-256-BLK。好的 SKU 编码便于仓库拣货、数据分析和系统集成。",
            "【变体属性模型】Spree Commerce 的设计：Product 对应 SPU，Variant 对应 SKU。Option Types（选项类型，如颜色、尺寸）定义可变属性维度，Option Values（选项值，如红色、XL）是具体取值。",
            "【笛卡尔积生成】MDN 文档：Array.reduce() 可实现多维属性的笛卡尔积组合。如 [颜色, 尺寸] 两个规格各有 3 个值，则生成 3x3=9 个 SKU 组合。",
            "【EAV vs JSONB】动态属性存储方案：EAV（Entity-Attribute-Value）模型灵活但查询复杂，PostgreSQL JSONB 支持索引和丰富的操作符，是现代电商首选的动态属性方案。"
        ],
        keyDifficulties: [
            "【SKU 组合爆炸】多规格商品的 SKU 数量是各规格值数量的乘积，5 个规格各 10 个值就是 10^5=10 万 SKU。需控制规格数量或采用延迟生成策略（用户选择后动态生成）。",
            "【库存与 SKU 关联】每个 SKU 独立管理库存，需设计 stock_items 表关联 sku_id 和 warehouse_id，支持多仓库库存。库存字段包括 count_on_hand（在库）、count_reserved（预留）。",
            "【价格继承与覆盖】SKU 可继承 SPU 的基础价格，也可单独设置价格。需设计价格优先级：SKU 价格 > SPU 价格，同时支持多币种和会员价。",
            "【规格值唯一性约束】同一 SPU 下的 SKU 组合必须唯一，可通过数据库唯一索引（spu_id + option_values_hash）或应用层校验保证。",
            "【属性搜索优化】JSONB 属性需创建 GIN 索引支持高效查询：CREATE INDEX ON products USING GIN (attributes jsonb_path_ops)。"
        ],
        handsOnPath: [
            "设计数据模型：创建 products（SPU）、variants（SKU）、option_types、option_values、product_option_types 表，定义表关系和外键。",
            "实现 SKU 笛卡尔积生成：编写 JavaScript 函数，输入规格数组 [[red,blue],[S,M,L]]，输出所有组合 [[red,S],[red,M],[red,L],[blue,S]...]。",
            "创建商品和变体 API：POST /products 创建 SPU，POST /products/:id/variants 批量创建 SKU，支持传入规格组合自动生成。",
            "实现库存关联：为每个 SKU 创建库存记录，实现库存查询、扣减、预留 API，使用数据库事务保证原子性。",
            "测试 JSONB 属性存储：将商品自定义属性存入 JSONB 字段，测试 @>、?、?& 操作符查询，比较有无 GIN 索引的性能差异。",
            "构建商品详情页 API：返回 SPU 信息、所有 SKU 列表、规格矩阵（用于前端选择器展示）、当前选择 SKU 的库存和价格。"
        ],
        selfCheck: [
            "SPU 和 SKU 的区别是什么？为什么电商系统需要这两层抽象？",
            "如何设计 SKU 编码规则？好的编码规则应具备哪些特点？",
            "如果一个商品有 5 个规格维度，每个维度有 10 个值，会产生多少 SKU？如何避免 SKU 爆炸？",
            "Variant 和 Option Value 的关系是什么？如何通过中间表关联？",
            "PostgreSQL JSONB 相比 EAV 模型有什么优势？如何为 JSONB 字段创建索引？",
            "如何保证同一 SPU 下 SKU 的规格组合唯一性？数据库层和应用层各如何校验？"
        ],
        extensions: [
            "研究 Shopify、Magento、WooCommerce 等电商平台的商品变体模型设计，对比不同实现的优劣。",
            "探索虚拟 SKU 概念：有些平台不预生成所有 SKU，而是根据用户选择动态组合，了解其实现方式。",
            "学习商品属性的类目模板机制：不同类目（服装、电子、食品）有不同的必填和可选属性。",
            "研究 B2B 电商的 SKU 管理特点：大宗商品的批量单位、最小起订量、阶梯价格等复杂场景。"
        ],
        sourceUrls: [
            "https://www.shopify.com/blog/what-is-a-sku",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce",
            "https://spreecommerce.org/docs"
        ]
    },
    "w5-3": {
        lessonId: "w5-3",
        background: [
            "【S3 核心概念】AWS 文档：S3 是对象存储服务，Bucket（桶）是顶级容器，Object（对象）是存储的基本单位，由 Key（路径名）和 Value（文件内容）组成，单个对象最大 5TB。",
            "【Sharp 图片处理】Sharp 官网：'Resizing an image is typically 4x-5x faster than ImageMagick'。Sharp 基于 libvips，支持 JPEG、PNG、WebP、AVIF 格式的读写、缩放、裁剪、旋转、格式转换，是 Node.js 高性能图片处理首选。",
            "【Cloudflare Images】Cloudflare 文档：提供图片上传、存储、动态变换和全球 CDN 分发一体化服务，支持最多 100 个变体（不同尺寸/格式），签名 URL 控制访问权限。",
            "【CDN 加速原理】CDN 将内容缓存到全球边缘节点，用户请求就近获取，减少延迟和源站带宽压力。电商图片通过 CDN 分发可显著提升页面加载速度。",
            "【图片格式选择】WebP 相比 JPEG 减少 25-34% 体积，AVIF 更进一步但兼容性较差。现代实践是根据浏览器 Accept 头返回最优格式。"
        ],
        keyDifficulties: [
            "【多尺寸图片生成】商品图片需要多种尺寸：缩略图（200x200）、列表图（400x400）、详情图（800x800）、原图。上传时批量生成或首次访问时动态生成（懒加载）。",
            "【上传安全校验】必须校验文件类型（Magic Number 而非扩展名）、文件大小、图片尺寸，防止恶意文件上传。服务端使用 file-type 库检测真实类型。",
            "【预签名 URL 机制】AWS S3 支持生成临时预签名 URL，允许用户直接上传到 S3，减少服务器带宽压力。URL 包含签名和过期时间，如 s3.getSignedUrl('putObject', {Expires: 3600})。",
            "【图片命名与组织】推荐使用 UUID 或哈希命名防止冲突和猜测，按日期或商品 ID 分目录组织，如 products/2024/01/uuid.jpg。",
            "【CDN 缓存控制】通过 Cache-Control 头控制缓存时间，图片内容不变可设置长期缓存（max-age=31536000），更新图片时使用新 URL 或版本参数强制刷新。"
        ],
        handsOnPath: [
            "搭建本地 MinIO 作为 S3 兼容存储，配置 Bucket 和访问凭证，测试 AWS SDK 的上传下载操作。",
            "实现图片上传 API：接收 multipart/form-data，使用 Sharp 校验图片、压缩、生成多尺寸版本，上传到 S3 并返回 URL。",
            "实现预签名上传：后端生成预签名 URL 返回给前端，前端直接 PUT 到 S3，上传完成后回调通知后端。",
            "集成 Sharp 图片处理：实现缩放（resize）、裁剪（extract）、格式转换（toFormat('webp')）、质量调整（quality(80)）。",
            "配置 CDN：使用 Cloudflare 或 AWS CloudFront 作为 S3 的 CDN 前置，配置缓存规则和 HTTPS。",
            "实现图片服务 API：支持通过 URL 参数动态调整尺寸，如 /images/uuid.jpg?w=400&h=400&format=webp。"
        ],
        selfCheck: [
            "S3 的 Bucket 和 Object 分别是什么概念？Object Key 的命名有什么限制？",
            "为什么推荐使用 Sharp 而非 ImageMagick 进行 Node.js 图片处理？",
            "预签名 URL 的工作原理是什么？相比服务端中转上传有什么优势？",
            "如何校验上传文件的真实类型？为什么不能只看文件扩展名？",
            "商品图片应该生成哪些尺寸？各尺寸的使用场景是什么？",
            "CDN 缓存图片后，如果需要更新图片内容，有哪些方案？各有什么优缺点？"
        ],
        extensions: [
            "研究图片懒加载实现：占位符（blur、LQIP）、Intersection Observer API、原生 loading='lazy' 属性。",
            "探索智能裁剪服务：AWS Rekognition、Cloudflare Image Resizing 的智能焦点裁剪，自动识别主体区域。",
            "学习图片防盗链机制：Referer 校验、签名 URL、Cookie 验证等方案的实现和绕过风险。",
            "研究 HEIF/AVIF 等新一代图片格式的编解码和兼容性处理策略。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/s3/index.html",
            "https://sharp.pixelplumbing.com/",
            "https://developers.cloudflare.com/images/"
        ]
    },
    "w5-4": {
        lessonId: "w5-4",
        background: [
            "【PostgreSQL 全文搜索】官方文档：PostgreSQL 内置全文搜索支持 tsvector（文档向量）和 tsquery（查询向量）数据类型，通过 @@ 操作符匹配，支持 GIN/GiST 索引加速。",
            "【分页性能问题】Use The Index Luke：'OFFSET makes the database count and skip rows'——大 offset 会导致扫描大量行，性能随页数线性下降。",
            "【Keyset 分页】Use The Index Luke：使用 WHERE 子句基于上次结果的最后一条记录继续查询，如 WHERE id < last_seen_id ORDER BY id DESC，性能恒定且避免数据漂移问题。",
            "【GraphQL 分页规范】GraphQL 官方推荐 Cursor-Based Pagination，遵循 Relay Connection 规范：使用 edges/nodes 包装数据，cursor 是不透明的游标字符串，pageInfo 提供分页元数据。",
            "【筛选条件设计】电商商品筛选通常包括：分类、品牌、价格区间、属性（颜色、尺寸）、库存状态、上架状态。前端展示为 Facet Navigation（分面导航）。"
        ],
        keyDifficulties: [
            "【全文搜索配置】PostgreSQL 需配置文本搜索配置（text search configuration），中文需安装 zhparser 或 jieba 分词扩展，或使用 pg_bigm 支持模糊匹配。",
            "【复合排序优化】多条件排序（如 ORDER BY is_featured DESC, created_at DESC）需要复合索引匹配排序顺序，否则会 filesort 降低性能。",
            "【筛选条件索引】多条件筛选需要评估索引策略：单列索引组合、复合索引、部分索引（WHERE is_active = true）。使用 EXPLAIN 分析实际查询计划。",
            "【COUNT 性能问题】大数据量下 COUNT(*) 开销大，可用估算（pg_class.reltuples）、缓存计数、或只返回「是否有更多」而非精确总数。",
            "【搜索结果排序】搜索结果排序需平衡相关性和商业因素（销量、利润、推广）。可使用加权公式：score = text_relevance * 0.5 + sales_rank * 0.3 + boost * 0.2。"
        ],
        handsOnPath: [
            "为商品表添加全文搜索：创建 tsvector 列存储文档向量，创建 GIN 索引，实现 to_tsvector('chinese', name || description) @@ to_tsquery(:query) 查询。",
            "实现 Keyset 分页：改造商品列表 API，支持 cursor 参数（Base64 编码的 id），返回 pageInfo 包含 hasNextPage、endCursor。",
            "构建筛选接口：实现 GET /products?category=1&brand=2&price_min=100&price_max=500&sort=price_asc 多条件筛选。",
            "优化查询性能：使用 EXPLAIN ANALYZE 分析查询计划，创建合适的索引，目标是避免 Seq Scan 和 Sort。",
            "实现搜索建议：基于商品名称前缀匹配（name LIKE :query%）或历史搜索词，返回自动补全建议列表。",
            "集成 Elasticsearch 预研：将商品数据同步到 ES，对比 PostgreSQL 全文搜索和 ES 在功能和性能上的差异。"
        ],
        selfCheck: [
            "PostgreSQL 全文搜索的 tsvector 和 tsquery 分别代表什么？如何为中文内容配置分词？",
            "OFFSET 分页为什么随页数增加性能下降？Keyset 分页如何解决这个问题？",
            "Relay Connection 规范中 edges、node、cursor、pageInfo 各是什么？",
            "如何为多条件筛选设计索引策略？什么情况下需要复合索引？",
            "商品搜索结果的排序应该考虑哪些因素？如何平衡相关性和商业目标？",
            "为什么说 PostgreSQL 全文搜索是「为后续 Elasticsearch 集成做准备」？两者各有什么适用场景？"
        ],
        extensions: [
            "研究 Elasticsearch 的电商搜索最佳实践：索引设计、同义词词典、拼写纠错、相关性调优。",
            "探索搜索词分析：热门搜索、搜索转化率、无结果搜索词，用于优化搜索体验和商品运营。",
            "学习 GraphQL 的过滤和排序规范（如 Hasura、PostGraphile 的设计），了解类型安全的查询构建。",
            "研究向量搜索（Vector Search）在电商的应用：以图搜图、语义搜索、相似商品推荐。"
        ],
        sourceUrls: [
            "https://www.postgresql.org/docs/current/textsearch.html",
            "https://use-the-index-luke.com/no-offset",
            "https://graphql.org/learn/pagination/"
        ]
    }
}

export const week5Quizzes: Record<string, QuizQuestion[]> = {
    "w5-1": [
        {
            id: "w5-1-q1",
            question: "PostgreSQL ltree 数据类型的主要用途是什么？",
            options: [
                "存储 JSON 格式的配置数据",
                "存储分层树状结构中的标签路径（如 Top.Science.Astronomy）",
                "存储二进制大对象（BLOB）",
                "存储地理位置坐标"
            ],
            answer: 1,
            rationale: "ltree 模块专门用于存储由点分隔的标签路径序列，非常适合处理商品分类、组织架构等分层数据。"
        },
        {
            id: "w5-1-q2",
            question: "ltree 操作符 @> 的含义是什么？",
            options: [
                "模式匹配",
                "全文搜索",
                "左边是右边的祖先（或相等）",
                "左边是右边的后代（或相等）"
            ],
            answer: 2,
            rationale: "ltree @> ltree 表示左边的路径是右边的祖先（包含关系），例如 'Top.Science' @> 'Top.Science.Astronomy' 为 true。"
        },
        {
            id: "w5-1-q3",
            question: "WITH RECURSIVE CTE 递归查询的执行流程是什么？",
            options: [
                "同时执行递归项和非递归项",
                "先执行递归项，再执行非递归项",
                "先执行非递归项作为初始结果，然后迭代执行递归项直到工作表为空",
                "随机选择执行顺序"
            ],
            answer: 2,
            rationale: "PostgreSQL 递归 CTE 先评估非递归项产生初始结果，然后循环执行递归项（用工作表替代自引用），直到工作表为空。"
        },
        {
            id: "w5-1-q4",
            question: "为 ltree 列创建索引时，推荐使用哪种索引类型？",
            options: [
                "B-tree 索引，因为它是默认类型",
                "Hash 索引，因为支持等值查询",
                "GiST 索引，因为它支持所有 ltree 操作",
                "BRIN 索引，因为空间效率高"
            ],
            answer: 2,
            rationale: "官方文档推荐使用 GiST 索引，因为它支持所有 ltree 操作符（@>、<@、~、@ 等），而 B-tree 只支持比较操作。"
        },
        {
            id: "w5-1-q5",
            question: "邻接表（Adjacency List）存储树形结构的主要缺点是什么？",
            options: [
                "占用存储空间大",
                "不支持深层嵌套",
                "查询子树需要递归，深层树查询性能差",
                "不支持修改操作"
            ],
            answer: 2,
            rationale: "邻接表每行只存储 parent_id，查询整个子树需要递归查询，随着树深度增加性能显著下降。"
        },
        {
            id: "w5-1-q6",
            question: "lquery 模式 '*.Astronomy.*' 的含义是什么？",
            options: [
                "精确匹配 Astronomy",
                "以 Astronomy 开头的路径",
                "以 Astronomy 结尾的路径",
                "任何包含 Astronomy 标签的路径"
            ],
            answer: 3,
            rationale: "lquery 中 * 表示任意数量的标签，'*.Astronomy.*' 匹配路径中任何位置包含 Astronomy 的所有记录。"
        },
        {
            id: "w5-1-q7",
            question: "物化路径（Materialized Path）方案移动节点时的主要挑战是什么？",
            options: [
                "无法查找祖先节点",
                "需要更新所有子节点的路径字符串",
                "不支持多个根节点",
                "索引必须重建"
            ],
            answer: 1,
            rationale: "物化路径将完整路径存储在字段中，移动节点时需要更新该节点及所有子孙节点的路径，可能涉及大量更新操作。"
        },
        {
            id: "w5-1-q8",
            question: "PostgreSQL 递归 CTE 如何防止无限循环？",
            options: [
                "自动检测并停止",
                "设置最大递归深度参数",
                "使用 CYCLE 子句或手动维护访问路径检测循环",
                "只支持有向无环图"
            ],
            answer: 2,
            rationale: "PostgreSQL 提供 CYCLE 子句自动检测循环，也可以手动维护访问过的节点数组，在递归项中检查是否已访问。"
        },
        {
            id: "w5-1-q9",
            question: "闭包表（Closure Table）的特点是什么？",
            options: [
                "存储每个节点的父节点 ID",
                "存储每个节点的左右值",
                "单独表存储所有祖先-后代关系对",
                "存储从根到节点的完整路径"
            ],
            answer: 2,
            rationale: "闭包表使用独立的关系表存储所有祖先-后代对，包括节点与自身的关系，空间换时间，查询效率高。"
        },
        {
            id: "w5-1-q10",
            question: "PostgreSQL nlevel(ltree) 函数的作用是什么？",
            options: [
                "返回路径的深度（标签数量）",
                "返回子节点数量",
                "返回最长公共祖先",
                "返回路径的字节长度"
            ],
            answer: 0,
            rationale: "nlevel() 函数返回 ltree 路径中的标签数量，例如 nlevel('Top.Science.Astronomy') 返回 3。"
        },
        {
            id: "w5-1-q11",
            question: "嵌套集（Nested Set）模型中左右值的含义是什么？",
            options: [
                "节点的 X/Y 坐标位置",
                "遍历树时进入和离开节点的序号",
                "父节点和子节点的 ID",
                "兄弟节点的排序顺序"
            ],
            answer: 1,
            rationale: "嵌套集模型用左值（lft）和右值（rght）记录深度优先遍历时进入和离开节点的顺序号，子节点的值域包含在父节点内。"
        },
        {
            id: "w5-1-q12",
            question: "如何使用 ltree 查询某分类的所有直接子分类？",
            options: [
                "使用 @> 操作符",
                "使用 subpath 函数提取父路径后匹配",
                "使用 ~ 配合 lquery 模式 'parent.*{1}'",
                "ltree 不支持只查直接子节点"
            ],
            answer: 2,
            rationale: "lquery 的 *{1} 表示恰好一个标签，'parent.*{1}' 匹配 parent 下一级的直接子分类。"
        }
    ],
    "w5-2": [
        {
            id: "w5-2-q1",
            question: "SPU 和 SKU 的关系是什么？",
            options: [
                "一对一，每个 SPU 只有一个 SKU",
                "多对一，多个 SPU 对应一个 SKU",
                "一对多，一个 SPU 对应多个 SKU",
                "多对多，SPU 和 SKU 任意关联"
            ],
            answer: 2,
            rationale: "SPU 是商品的抽象概念，SKU 是具体的库存单元。一个 SPU（如 iPhone 15）对应多个 SKU（不同颜色、容量组合）。"
        },
        {
            id: "w5-2-q2",
            question: "如果商品有颜色（3种）和尺寸（4种）两个规格，会产生多少个 SKU？",
            options: [
                "7 个（3+4）",
                "12 个（3x4）",
                "1 个（只有一种组合）",
                "由用户自行决定"
            ],
            answer: 1,
            rationale: "SKU 是规格值的笛卡尔积，3 种颜色 x 4 种尺寸 = 12 种组合，即 12 个 SKU。"
        },
        {
            id: "w5-2-q3",
            question: "SKU 编码的最佳实践是什么？",
            options: [
                "使用自增 ID 即可",
                "使用随机字符串保证唯一性",
                "包含有意义的标识符（品牌、类目、属性值），具有唯一性和可读性",
                "直接使用商品名称作为编码"
            ],
            answer: 2,
            rationale: "好的 SKU 编码应包含品牌代码、类目、属性值等标识，如 APL-IPH15P-256-BLK，便于仓库拣货和数据分析。"
        },
        {
            id: "w5-2-q4",
            question: "Spree Commerce 中 Option Types 和 Option Values 的关系是什么？",
            options: [
                "Option Types 是具体的值，Option Values 是类型定义",
                "两者相同，只是名称不同",
                "Option Types 定义规格维度（如颜色），Option Values 是具体取值（如红色）",
                "Option Values 包含多个 Option Types"
            ],
            answer: 2,
            rationale: "Option Types 定义可变属性维度（颜色、尺寸），Option Values 是该维度下的具体取值（红色、XL）。"
        },
        {
            id: "w5-2-q5",
            question: "如何使用 JavaScript 生成规格的笛卡尔积？",
            options: [
                "使用 Array.filter() 方法",
                "使用 Array.map() 方法",
                "使用 Array.reduce() 嵌套展开组合",
                "使用 Array.sort() 方法"
            ],
            answer: 2,
            rationale: "Array.reduce() 可以实现笛卡尔积：通过累加器展开每个规格维度的所有组合。"
        },
        {
            id: "w5-2-q6",
            question: "如何保证同一 SPU 下 SKU 规格组合的唯一性？",
            options: [
                "前端校验即可",
                "数据库唯一索引（spu_id + option_values_hash）或应用层校验",
                "依赖用户不会重复输入",
                "无法保证，允许重复"
            ],
            answer: 1,
            rationale: "应通过数据库唯一索引（如 spu_id + 规格组合哈希）和应用层校验双重保证 SKU 组合的唯一性。"
        },
        {
            id: "w5-2-q7",
            question: "PostgreSQL JSONB 相比 EAV 模型的优势是什么？",
            options: [
                "EAV 更适合动态属性",
                "JSONB 支持索引、丰富操作符，查询更简单高效",
                "两者性能完全相同",
                "JSONB 不支持动态属性"
            ],
            answer: 1,
            rationale: "JSONB 支持 GIN 索引和丰富的查询操作符（@>、?、?&），比 EAV 的多表 JOIN 查询更简单高效。"
        },
        {
            id: "w5-2-q8",
            question: "为 JSONB 字段创建高效查询索引应使用什么类型？",
            options: [
                "B-tree 索引",
                "GIN 索引配合 jsonb_path_ops",
                "Hash 索引",
                "BRIN 索引"
            ],
            answer: 1,
            rationale: "JSONB 查询推荐使用 GIN 索引：CREATE INDEX ON products USING GIN (attributes jsonb_path_ops)。"
        },
        {
            id: "w5-2-q9",
            question: "SKU 组合爆炸问题如何缓解？",
            options: [
                "无法缓解，只能接受",
                "控制规格数量或采用延迟生成策略",
                "增加服务器配置",
                "使用 NoSQL 数据库"
            ],
            answer: 1,
            rationale: "可通过限制规格维度数量（如最多 3 个）或延迟生成（用户选择后动态组合）来避免 SKU 爆炸。"
        },
        {
            id: "w5-2-q10",
            question: "多仓库库存管理中，stock_items 表应关联哪些字段？",
            options: [
                "只关联 product_id",
                "关联 sku_id 和 warehouse_id",
                "只关联 warehouse_id",
                "关联 user_id 和 order_id"
            ],
            answer: 1,
            rationale: "每个 SKU 在每个仓库有独立库存记录，stock_items 表需要 sku_id 和 warehouse_id 的组合关联。"
        },
        {
            id: "w5-2-q11",
            question: "SKU 价格与 SPU 价格的关系应该如何设计？",
            options: [
                "只使用 SPU 价格",
                "只使用 SKU 价格",
                "SKU 可继承 SPU 价格，也可单独设置，SKU 价格优先",
                "价格与商品模型无关"
            ],
            answer: 2,
            rationale: "设计价格优先级：SKU 价格 > SPU 价格，SKU 可覆盖 SPU 的基础价格，也可继承。"
        },
        {
            id: "w5-2-q12",
            question: "虚拟 SKU 的概念是什么？",
            options: [
                "不存在的 SKU",
                "不预生成所有组合，根据用户选择动态计算",
                "没有库存的 SKU",
                "只在测试环境使用的 SKU"
            ],
            answer: 1,
            rationale: "虚拟 SKU 不预先生成所有组合，而是在用户选择规格后动态组合计算价格和库存，减少数据量。"
        }
    ],
    "w5-3": [
        {
            id: "w5-3-q1",
            question: "AWS S3 中 Bucket 和 Object 的关系是什么？",
            options: [
                "Object 包含多个 Bucket",
                "Bucket 是顶级容器，Object 是存储的基本单位",
                "两者是同一概念",
                "Bucket 存储元数据，Object 存储实际文件"
            ],
            answer: 1,
            rationale: "S3 中 Bucket 是顶级容器（命名全局唯一），Object 是存储在 Bucket 中的基本单位，由 Key（路径）和 Value（内容）组成。"
        },
        {
            id: "w5-3-q2",
            question: "Sharp 图片处理库相比 ImageMagick 的主要优势是什么？",
            options: [
                "支持更多图片格式",
                "缩放图片速度快 4-5 倍",
                "免费开源",
                "内存占用更大"
            ],
            answer: 1,
            rationale: "Sharp 官网声称：'Resizing an image is typically 4x-5x faster than ImageMagick'，基于 libvips 实现高性能。"
        },
        {
            id: "w5-3-q3",
            question: "S3 预签名 URL 的主要用途是什么？",
            options: [
                "永久公开访问文件",
                "允许客户端直接上传到 S3，减少服务器带宽压力",
                "加密文件内容",
                "压缩文件体积"
            ],
            answer: 1,
            rationale: "预签名 URL 允许用户直接上传/下载 S3 对象，无需经过应用服务器，包含签名和过期时间保证安全。"
        },
        {
            id: "w5-3-q4",
            question: "如何正确校验上传文件的真实类型？",
            options: [
                "检查文件扩展名",
                "检查 Content-Type 请求头",
                "检查文件的 Magic Number（魔数）",
                "检查文件大小"
            ],
            answer: 2,
            rationale: "文件扩展名和 Content-Type 可以伪造，应使用 file-type 库检查文件头部的 Magic Number 确定真实类型。"
        },
        {
            id: "w5-3-q5",
            question: "商品图片通常需要生成哪些尺寸？",
            options: [
                "只需原图",
                "缩略图、列表图、详情图、原图多种尺寸",
                "只需最小尺寸节省空间",
                "由用户手动裁剪"
            ],
            answer: 1,
            rationale: "电商图片需要多种尺寸：缩略图（200x200）用于列表、中图用于商品卡片、大图用于详情页、原图用于放大查看。"
        },
        {
            id: "w5-3-q6",
            question: "WebP 格式相比 JPEG 的主要优势是什么？",
            options: [
                "兼容性更好",
                "在相同质量下体积减少 25-34%",
                "支持更大尺寸",
                "编码速度更快"
            ],
            answer: 1,
            rationale: "WebP 是 Google 开发的现代图片格式，相同视觉质量下比 JPEG 减少约 25-34% 的体积。"
        },
        {
            id: "w5-3-q7",
            question: "CDN 加速图片访问的原理是什么？",
            options: [
                "压缩图片体积",
                "将内容缓存到全球边缘节点，用户就近获取",
                "加快服务器处理速度",
                "减少图片尺寸"
            ],
            answer: 1,
            rationale: "CDN 将静态资源缓存到全球分布的边缘节点，用户从最近的节点获取内容，减少延迟和源站压力。"
        },
        {
            id: "w5-3-q8",
            question: "Cloudflare Images 支持最多多少个变体？",
            options: [
                "10 个",
                "50 个",
                "100 个",
                "无限制"
            ],
            answer: 2,
            rationale: "Cloudflare Images 文档：支持'最多 100 个变体'来指定不同使用场景下的图片尺寸和格式。"
        },
        {
            id: "w5-3-q9",
            question: "图片命名推荐使用什么策略防止冲突和猜测？",
            options: [
                "使用原始文件名",
                "使用自增 ID",
                "使用 UUID 或文件哈希",
                "使用时间戳"
            ],
            answer: 2,
            rationale: "推荐使用 UUID 或内容哈希命名，既能避免文件名冲突，又能防止 URL 被猜测遍历。"
        },
        {
            id: "w5-3-q10",
            question: "CDN 缓存图片后如何强制更新？",
            options: [
                "等待缓存自然过期",
                "使用新 URL 或添加版本参数",
                "直接删除 CDN 上的文件",
                "CDN 图片无法更新"
            ],
            answer: 1,
            rationale: "可通过使用新的文件名/URL 或添加版本参数（如 ?v=2）让 CDN 请求新版本，或使用 CDN 的缓存清除 API。"
        },
        {
            id: "w5-3-q11",
            question: "S3 单个对象的最大大小限制是多少？",
            options: [
                "100 MB",
                "1 GB",
                "5 TB",
                "无限制"
            ],
            answer: 2,
            rationale: "AWS S3 单个对象最大支持 5TB，超过 5GB 的文件需要使用分段上传（Multipart Upload）。"
        },
        {
            id: "w5-3-q12",
            question: "使用 Sharp 进行图片格式转换的方法是什么？",
            options: [
                "sharp.convert('webp')",
                "sharp.format('webp')",
                "sharp.toFormat('webp')",
                "sharp.changeFormat('webp')"
            ],
            answer: 2,
            rationale: "Sharp 使用 .toFormat('webp') 方法进行格式转换，可链式调用如 sharp(input).resize(400).toFormat('webp').toBuffer()。"
        }
    ],
    "w5-4": [
        {
            id: "w5-4-q1",
            question: "PostgreSQL 全文搜索中 tsvector 的作用是什么？",
            options: [
                "存储原始文本",
                "存储查询条件",
                "存储经过分词处理的文档向量",
                "存储搜索结果排名"
            ],
            answer: 2,
            rationale: "tsvector 是文档向量类型，存储经过分词、去停用词、词干提取后的词项及其位置信息。"
        },
        {
            id: "w5-4-q2",
            question: "OFFSET 分页的主要问题是什么？",
            options: [
                "无法获取总数",
                "不支持排序",
                "大 offset 会导致扫描大量行，性能随页数下降",
                "不支持筛选条件"
            ],
            answer: 2,
            rationale: "Use The Index Luke：'OFFSET makes the database count and skip rows'，即使跳过的行不返回，数据库也必须扫描它们。"
        },
        {
            id: "w5-4-q3",
            question: "Keyset 分页相比 OFFSET 分页的优势是什么？",
            options: [
                "支持跳转到任意页",
                "性能恒定，不受页数影响",
                "实现更简单",
                "不需要排序"
            ],
            answer: 1,
            rationale: "Keyset 分页使用 WHERE id < last_seen_id 定位，直接利用索引跳过已读记录，性能恒定。"
        },
        {
            id: "w5-4-q4",
            question: "GraphQL Relay Connection 规范中 cursor 的特点是什么？",
            options: [
                "cursor 必须是数字 ID",
                "cursor 应该是不透明的（建议 Base64 编码）",
                "cursor 直接暴露数据库主键",
                "cursor 是可选的"
            ],
            answer: 1,
            rationale: "GraphQL 官方推荐 cursor 是不透明的字符串（通常 Base64 编码），给后端实现变更留有灵活性。"
        },
        {
            id: "w5-4-q5",
            question: "PostgreSQL 全文搜索的匹配操作符是什么？",
            options: [
                "LIKE",
                "=",
                "@@",
                "MATCH"
            ],
            answer: 2,
            rationale: "PostgreSQL 使用 @@ 操作符进行全文搜索匹配：tsvector @@ tsquery 或 tsquery @@ tsvector。"
        },
        {
            id: "w5-4-q6",
            question: "为什么大数据量下 COUNT(*) 性能差？",
            options: [
                "COUNT 语法错误",
                "需要扫描整个表或索引来计数",
                "COUNT 不支持大表",
                "需要连接多个表"
            ],
            answer: 1,
            rationale: "COUNT(*) 需要扫描所有符合条件的行进行计数，数据量大时开销显著，可用估算或缓存优化。"
        },
        {
            id: "w5-4-q7",
            question: "Relay Connection 规范中 pageInfo 包含哪些字段？",
            options: [
                "totalCount, pageSize",
                "hasNextPage, hasPreviousPage, startCursor, endCursor",
                "offset, limit",
                "currentPage, totalPages"
            ],
            answer: 1,
            rationale: "pageInfo 包含分页元数据：hasNextPage、hasPreviousPage、startCursor、endCursor。"
        },
        {
            id: "w5-4-q8",
            question: "商品搜索结果排序应考虑哪些因素？",
            options: [
                "只考虑文本相关性",
                "只考虑价格",
                "文本相关性、销量、利润、推广权重等综合因素",
                "只考虑上架时间"
            ],
            answer: 2,
            rationale: "搜索排序需平衡相关性和商业因素，可使用加权公式综合计算得分。"
        },
        {
            id: "w5-4-q9",
            question: "PostgreSQL 中文全文搜索需要什么额外配置？",
            options: [
                "无需配置，默认支持",
                "安装 zhparser 或 jieba 等中文分词扩展",
                "使用 LIKE 替代",
                "只能使用正则表达式"
            ],
            answer: 1,
            rationale: "PostgreSQL 默认不支持中文分词，需要安装 zhparser、jieba 等中文分词扩展或使用 pg_bigm。"
        },
        {
            id: "w5-4-q10",
            question: "复合排序 ORDER BY is_featured DESC, created_at DESC 需要什么优化？",
            options: [
                "只创建 is_featured 索引",
                "只创建 created_at 索引",
                "创建 (is_featured DESC, created_at DESC) 复合索引",
                "不需要索引"
            ],
            answer: 2,
            rationale: "多列排序需要复合索引且列顺序和排序方向必须匹配，否则会使用 filesort 降低性能。"
        },
        {
            id: "w5-4-q11",
            question: "如何优化大量 PVC 的 COUNT 查询？",
            options: [
                "增加数据库内存",
                "使用 pg_class.reltuples 估算或缓存计数",
                "使用 COUNT(id) 替代 COUNT(*)",
                "无法优化"
            ],
            answer: 1,
            rationale: "可使用 pg_class.reltuples 获取估算行数，或维护缓存计数器，或只返回「是否有更多」避免精确计数。"
        },
        {
            id: "w5-4-q12",
            question: "PostgreSQL 全文搜索与 Elasticsearch 相比的定位是什么？",
            options: [
                "完全相同，可互相替代",
                "PostgreSQL 适合简单场景，ES 适合复杂搜索和大规模数据",
                "ES 只能用于日志搜索",
                "PostgreSQL 全文搜索性能更好"
            ],
            answer: 1,
            rationale: "PostgreSQL 全文搜索适合简单场景和小规模数据，Elasticsearch 提供更强大的分词、聚合、分布式能力，适合复杂电商搜索。"
        }
    ]
}
