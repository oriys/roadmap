import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const backendPerformanceStages: Stage[] = [
  {
    id: "bp-foundation",
    title: "阶段一：观测与基线",
    duration: "第 1-2 周",
    goal: "建立可测量的性能基线，并用可观察性工具找出瓶颈。",
    weeks: [
      {
        id: "bp-w1",
        title: "第 1 周：性能目标与基准",
        summary: "确定以用户体验和业务指标为导向的性能目标，建立基线。",
        keyPoints: [
          "以 SLO/SLI 描述性能（如 P95 延迟、错误率、吞吐）。",
          "选择代表真实负载的基准（如对关键 API 的冷/热路径压测）。",
          "把性能目标和回归检测纳入发布流程。",
        ],
        lessons: [
          {
            id: "bp-w1-1",
            title: "性能预算与 SLO 设计",
            detail: "通过性能预算约束新功能的复杂度，使用 SLO/SLI 衡量后端接口体验。",
            keyPoints: [
              "把 P95/P99 延迟和错误率作为验收线，而非平均值。",
              "区分冷启动与热路径，针对高峰流量留出余量。",
              "在设计阶段就记录性能假设并验证。",
            ],
            resources: [
              { title: "Google SRE Workbook - SLO", url: "https://sre.google/workbook/implementing-slos/" },
              { title: "MDN: Performance Budgets", url: "https://developer.mozilla.org/en-US/docs/Web/Performance/Performance_budgets" },
              { title: "roadmap.sh: Backend Performance", url: "https://roadmap.sh/backend-performance-best-practices" },
            ],
          },
          {
            id: "bp-w1-2",
            title: "可观察性与追踪基础",
            detail: "为关键请求埋点，确保日志、指标、链路追踪可以串联定位瓶颈。",
            keyPoints: [
              "采用结构化日志并附带 Trace/Span ID 便于串联。",
              "RED/USE 指标帮助监控服务负载与错误。",
              "采样策略：对高流量接口使用百分比采样，关键路径全量。",
            ],
            resources: [
              { title: "OpenTelemetry: Getting Started", url: "https://opentelemetry.io/docs/concepts/what-is-opentelemetry/" },
              { title: "Grafana RED Method", url: "https://grafana.com/blog/2018/08/02/the-red-method-how-to-instrument-your-services/" },
              { title: "OpenTelemetry: Sampling", url: "https://opentelemetry.io/docs/concepts/sampling/" },
            ],
          },
        ],
      },
      {
        id: "bp-w2",
        title: "第 2 周：性能画像与瓶颈定位",
        summary: "用分析工具抓热点，找出 CPU、I/O、数据库或网络层面的主要瓶颈。",
        overview: "结合剖析器、数据库慢查询日志与 APM，建立端到端性能画像。",
        lessons: [
          {
            id: "bp-w2-1",
            title: "应用与数据库剖析",
            detail: "定位热点函数与慢 SQL，优先解决最高占比的耗时与锁等待。",
            resources: [
              { title: "Flame Graphs", url: "http://www.brendangregg.com/flamegraphs.html" },
              { title: "PostgreSQL EXPLAIN", url: "https://www.postgresql.org/docs/current/using-explain.html" },
              { title: "MySQL Slow Query Log", url: "https://dev.mysql.com/doc/refman/8.0/en/slow-query-log.html" },
            ],
          },
          {
            id: "bp-w2-2",
            title: "容量与负载模式分析",
            detail: "识别突刺流量和长尾请求，规划水平扩展与队列削峰方案。",
            resources: [
              { title: "AWS Builders' Library: Timeouts", url: "https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/" },
              { title: "Nginx Rate Limiting", url: "https://blog.nginx.org/blog/rate-limiting-nginx" },
              { title: "Little's Law in Performance Testing", url: "https://www.perfmatrix.com/littles-law-in-performance-testing/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "bp-optimization",
    title: "阶段二：后端热点优化",
    duration: "第 3-4 周",
    goal: "围绕数据访问、缓存与并发模型进行优化，减少延迟与资源占用。",
    weeks: [
      {
        id: "bp-w3",
        title: "第 3 周：缓存与数据访问",
        summary: "为读取/写入路径设计合适的缓存层，减少跨网络与磁盘开销。",
        lessons: [
          {
            id: "bp-w3-1",
            title: "多级缓存策略",
            detail: "区分本地缓存、分布式缓存与 CDN，设计失效、填充与一致性方案。",
            keyPoints: [
              "优先选择幂等或可重试的填充流程，避免缓存击穿。",
              "对写多读少的场景慎用缓存，考虑直写/延迟双删。",
              "监控缓存命中率、TTL 以及 Key 分布，避免热点 Key。",
            ],
            resources: [
              { title: "Facebook Memcache Breakdown", url: "https://newsletter.systemdesigncodex.com/p/facebook-memcache-breakdown" },
              { title: "AWS ElastiCache Caching Strategies", url: "https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/Strategies.html" },
              { title: "Redis Key Eviction", url: "https://redis.io/docs/latest/develop/reference/eviction/" },
            ],
          },
          {
            id: "bp-w3-2",
            title: "数据库性能与索引",
            detail: "通过索引、分页与批量操作减少查询成本，避免 N+1 与大事务。",
            resources: [
              { title: "Use the Index, Luke!", url: "https://use-the-index-luke.com/" },
              { title: "Hibernate Batch Fetching", url: "https://thorben-janssen.com/hibernate-tips-how-to-fetch-associations-in-batches/" },
              { title: "PostgreSQL VACUUM", url: "https://www.postgresql.org/docs/current/sql-vacuum.html" },
            ],
          },
        ],
      },
      {
        id: "bp-w4",
        title: "第 4 周：并发与高效 I/O",
        summary: "针对阻塞点选择合适的并发模型与连接池配置，减少上下文切换。",
        lessons: [
          {
            id: "bp-w4-1",
            title: "异步与背压",
            detail: "在高并发场景下使用异步 I/O、连接池和背压机制保护下游。",
            resources: [
              { title: "Backpressure Explained", url: "https://reactivemanifesto.org/glossary#Back-Pressure" },
              { title: "Go net/http Tuning", url: "https://pkg.go.dev/net/http#Server" },
              { title: "Node.js Event Loop Guides", url: "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick" },
            ],
          },
          {
            id: "bp-w4-2",
            title: "序列化与传输优化",
            detail: "选择高效的协议与序列化格式，控制负载大小与压缩策略。",
            resources: [
              { title: "gRPC Performance Best Practices", url: "https://grpc.io/docs/guides/performance/" },
              { title: "HTTP/2 vs HTTP/3", url: "https://developer.fastly.com/learning/concepts/http2-http3/" },
              { title: "Protocol Buffers: Optimization", url: "https://developers.google.com/protocol-buffers/docs/techniques" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "bp-hardening",
    title: "阶段三：韧性与容量演练",
    duration: "第 5-6 周",
    goal: "通过降级、熔断、容量演练确保在故障与高峰下保持可用与可预期。",
    weeks: [
      {
        id: "bp-w5",
        title: "第 5 周：降级与弹性模式",
        summary: "为核心路径设计降级与熔断，确保在下游故障时快速恢复。",
        lessons: [
          {
            id: "bp-w5-1",
            title: "超时、重试与熔断配置",
            detail: "配置合理的超时、指数退避重试与熔断，避免放大故障。",
            resources: [
              { title: "Istio: Outlier Detection", url: "https://istio.io/latest/docs/tasks/traffic-management/istio-handbook/fault-injection/" },
              { title: "Netflix Hystrix Patterns", url: "https://martinfowler.com/bliki/CircuitBreaker.html" },
              { title: "AWS Jitter Backoff", url: "https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/" },
            ],
          },
          {
            id: "bp-w5-2",
            title: "服务降级与缓存兜底",
            detail: "设计灰度降级、只读模式或静态缓存兜底，优先保障核心路径。",
            resources: [
              { title: "Serving Stale Cache", url: "https://cloudflare.com/learning/cdn/glossary/what-is-serve-stale/" },
              { title: "Feature Flags", url: "https://martinfowler.com/articles/feature-toggles.html" },
              { title: "roadmap.sh: API Hardening", url: "https://roadmap.sh/guides/api-security-best-practices" },
            ],
          },
        ],
      },
      {
        id: "bp-w6",
        title: "第 6 周：容量规划与回归防护",
        summary: "演练扩容与降级预案，把性能回归检测自动化。",
        lessons: [
          {
            id: "bp-w6-1",
            title: "容量评估与压测",
            detail: "设计逐步升压的压测场景，结合监控评估安全容量与扩容阈值。",
            resources: [
              { title: "k6 Load Testing", url: "https://k6.io/docs/" },
              { title: "Locust Patterns", url: "https://docs.locust.io/en/stable/writing-a-locustfile.html" },
              { title: "Target Tracking Autoscaling", url: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html" },
            ],
          },
          {
            id: "bp-w6-2",
            title: "性能回归与发布守护",
            detail: "在 CI/CD 中加入性能基线测试与错误预算守护，避免回归上线。",
            resources: [
              { title: "GitHub Actions + k6", url: "https://github.com/grafana/k6-action" },
              { title: "Canary Releases", url: "https://sre.google/sre-book/handling-overload/" },
              { title: "Error Budgets", url: "https://sre.google/sre-book/embracing-risk/#chap-8" },
            ],
          },
          {
            id: "bp-w6-3",
            title: "FinOps 基础与成本意识",
            detail: "建立单位成本指标，将性能优化与云成本节省关联，理解 Right-Sizing 与 Spot 实例策略。",
            resources: [
              { title: "FinOps Framework", url: "https://www.finops.org/framework/" },
              { title: "AWS Cost Explorer", url: "https://aws.amazon.com/aws-cost-management/aws-cost-explorer/" },
              { title: "Kubecost", url: "https://www.kubecost.com/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "bp-os-runtime",
    title: "阶段四：操作系统与运行时深度",
    duration: "第 7-8 周",
    goal: "深入操作系统内核与语言运行时，掌握底层性能调优技术。",
    weeks: [
      {
        id: "bp-w7",
        title: "第 7 周：操作系统与内核调优",
        summary: "理解 Linux 内核参数、中断处理与零拷贝技术，突破操作系统层面的性能瓶颈。",
        lessons: [
          {
            id: "bp-w7-1",
            title: "Linux 内核参数调优",
            detail: "掌握 sysctl 调优 TCP 缓冲区、文件描述符限制、SOMAXCONN 等关键参数。",
            keyPoints: [
              "理解 net.core.somaxconn 对高并发连接的影响。",
              "调整 TCP 缓冲区大小以适应高带宽延迟积场景。",
              "配置文件描述符限制支持大量并发连接。",
            ],
            resources: [
              { title: "Linux Kernel net.txt", url: "https://www.kernel.org/doc/Documentation/sysctl/net.txt" },
              { title: "Red Hat Performance Tuning", url: "https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/monitoring_and_managing_system_status_and_performance/index" },
            ],
          },
          {
            id: "bp-w7-2",
            title: "中断处理与 CPU 亲和性",
            detail: "理解软中断瓶颈，配置 RSS/RPS 分散网络负载，优化 NUMA 架构下的性能。",
            keyPoints: [
              "使用 mpstat 观察软中断分布，识别单核瓶颈。",
              "配置网卡多队列和 RPS 实现多核并行处理。",
              "在 NUMA 架构下合理绑定中断和应用到同一节点。",
            ],
            resources: [
              { title: "Linux Networking Scaling", url: "https://www.kernel.org/doc/Documentation/networking/scaling.txt" },
              { title: "NAPI Documentation", url: "https://www.kernel.org/doc/html/latest/networking/napi.html" },
            ],
          },
          {
            id: "bp-w7-3",
            title: "零拷贝技术",
            detail: "掌握 sendfile、mmap、splice 等零拷贝技术，理解 Kafka 等高性能组件的底层原理。",
            keyPoints: [
              "理解传统 I/O 的 4 次拷贝问题及零拷贝如何解决。",
              "sendfile 配合 DMA scatter-gather 实现真正的零 CPU 拷贝。",
              "kTLS 解决 HTTPS 场景下的零拷贝挑战。",
            ],
            resources: [
              { title: "sendfile(2) man page", url: "https://man7.org/linux/man-pages/man2/sendfile.2.html" },
              { title: "Kafka Zero-Copy", url: "https://kafka.apache.org/documentation/#maximizingefficiency" },
              { title: "Kernel TLS", url: "https://www.kernel.org/doc/html/latest/networking/tls.html" },
            ],
          },
        ],
      },
      {
        id: "bp-w8",
        title: "第 8 周：运行时与语言深度特性",
        summary: "深入 GC 调优、内存管理与 JIT/AOT 编译，掌握语言运行时的性能天花板。",
        lessons: [
          {
            id: "bp-w8-1",
            title: "垃圾回收深度调优",
            detail: "理解 Java G1/ZGC、Go GC 的工作原理，通过调优减少 STW 对 P99 延迟的影响。",
            keyPoints: [
              "长尾延迟（P999）往往由 GC 停顿引起。",
              "ZGC 目标将暂停控制在 10ms 以内，与堆大小无关。",
              "Go 的 GOGC 和 GOMEMLIMIT 平衡内存占用与 GC 频率。",
            ],
            resources: [
              { title: "Java GC Tuning Guide", url: "https://docs.oracle.com/en/java/javase/17/gctuning/" },
              { title: "ZGC Wiki", url: "https://wiki.openjdk.org/display/zgc" },
              { title: "Go GC Guide", url: "https://go.dev/doc/gc-guide" },
            ],
          },
          {
            id: "bp-w8-2",
            title: "内存管理与对象池",
            detail: "使用对象池减少分配开销，理解逃逸分析和伪共享对性能的影响。",
            keyPoints: [
              "sync.Pool 适合临时对象，不适合连接池。",
              "伪共享（False Sharing）导致多核性能下降，需 padding 隔离。",
              "逃逸分析决定变量分配在栈还是堆。",
            ],
            resources: [
              { title: "Go sync.Pool", url: "https://pkg.go.dev/sync#Pool" },
              { title: "HikariCP Pool Sizing", url: "https://github.com/brettwooldridge/HikariCP/wiki/About-Pool-Sizing" },
              { title: "False Sharing", url: "https://mechanical-sympathy.blogspot.com/2011/07/false-sharing.html" },
            ],
          },
          {
            id: "bp-w8-3",
            title: "JIT 编译与 AOT",
            detail: "理解热点代码预热问题，使用 AOT 编译消除冷启动延迟。",
            keyPoints: [
              "JVM 分层编译：C1 快速编译，C2 深度优化。",
              "应用启动需要预热才能达到最佳性能。",
              "GraalVM Native Image 实现毫秒级启动，但牺牲运行时优化。",
            ],
            resources: [
              { title: "HotSpot Tiered Compilation", url: "https://wiki.openjdk.org/display/HotSpot/Tiered+Compilation" },
              { title: "GraalVM Native Image", url: "https://www.graalvm.org/reference-manual/native-image/" },
              { title: "JVM Anatomy Quarks", url: "https://shipilev.net/jvm/anatomy-quarks/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "bp-network-data",
    title: "阶段五：网络与数据架构进阶",
    duration: "第 9-10 周",
    goal: "掌握网络协议优化与大规模数据架构演进策略。",
    weeks: [
      {
        id: "bp-w9",
        title: "第 9 周：网络协议与传输层",
        summary: "深入连接池管理、TLS 优化与 QUIC/HTTP3，突破网络层性能瓶颈。",
        lessons: [
          {
            id: "bp-w9-1",
            title: "连接池精细管理",
            detail: "理解连接数并非越多越好，根据下游承载能力计算最佳连接数。",
            keyPoints: [
              "PostgreSQL 建议 connections = ((core_count × 2) + spindle_count)。",
              "连接泄漏检测与预热策略。",
              "minimumIdle = maximumPoolSize 实现固定大小池。",
            ],
            resources: [
              { title: "HikariCP Pool Sizing", url: "https://github.com/brettwooldridge/HikariCP/wiki/About-Pool-Sizing" },
              { title: "PostgreSQL Connections", url: "https://wiki.postgresql.org/wiki/Number_Of_Database_Connections" },
            ],
          },
          {
            id: "bp-w9-2",
            title: "TLS 握手优化",
            detail: "掌握 TLS 1.3、Session Resumption、OCSP Stapling 等技术减少握手开销。",
            keyPoints: [
              "TLS 1.3 将握手减少到 1 RTT，支持 0-RTT 恢复。",
              "Session Ticket 需要定期轮换密钥。",
              "ECDHE 比 RSA 更快且提供前向保密。",
            ],
            resources: [
              { title: "TLS 1.3 RFC 8446", url: "https://www.rfc-editor.org/rfc/rfc8446" },
              { title: "SSL Labs Test", url: "https://www.ssllabs.com/ssltest/" },
              { title: "Mozilla SSL Config", url: "https://wiki.mozilla.org/Security/Server_Side_TLS" },
            ],
          },
          {
            id: "bp-w9-3",
            title: "QUIC 与 HTTP/3",
            detail: "理解 QUIC 如何解决 TCP 队头阻塞，在弱网环境下显著提升性能。",
            keyPoints: [
              "QUIC 基于 UDP 实现独立流，各流独立处理丢包。",
              "0-RTT 连接恢复适合移动网络频繁重连场景。",
              "连接迁移允许网络切换时无缝继续。",
            ],
            resources: [
              { title: "QUIC RFC 9000", url: "https://www.rfc-editor.org/rfc/rfc9000" },
              { title: "HTTP/3 Explained", url: "https://http3-explained.haxx.se/" },
              { title: "Cloudflare QUIC", url: "https://blog.cloudflare.com/the-road-to-quic/" },
            ],
          },
        ],
      },
      {
        id: "bp-w10",
        title: "第 10 周：数据架构进阶演进",
        summary: "掌握读写分离、CQRS、流处理等大规模数据架构模式。",
        lessons: [
          {
            id: "bp-w10-1",
            title: "读写分离与分库分表",
            detail: "当单机数据库达到 I/O 极限时的扩展方案，理解复制延迟与分片策略。",
            keyPoints: [
              "主从复制存在延迟，写后读需要特殊处理。",
              "分片键选择影响数据分布均匀性和查询效率。",
              "跨分片查询性能差，应设计 API 包含分片键。",
            ],
            resources: [
              { title: "MySQL Replication", url: "https://dev.mysql.com/doc/refman/8.0/en/replication.html" },
              { title: "ShardingSphere", url: "https://shardingsphere.apache.org/document/current/en/overview/" },
              { title: "Vitess", url: "https://github.com/vitessio/vitess" },
            ],
          },
          {
            id: "bp-w10-2",
            title: "CQRS 模式",
            detail: "将命令与查询分离到不同数据源，使用不同技术栈独立优化。",
            keyPoints: [
              "写入用 MySQL 保证事务，查询用 Elasticsearch 提供灵活搜索。",
              "Event Sourcing 存储状态变更事件而非当前状态。",
              "读模型是最终一致的，UI 需要处理同步延迟。",
            ],
            resources: [
              { title: "Martin Fowler: CQRS", url: "https://martinfowler.com/bliki/CQRS.html" },
              { title: "Debezium CDC", url: "https://debezium.io/documentation/" },
              { title: "EventStoreDB", url: "https://www.eventstore.com/" },
            ],
          },
          {
            id: "bp-w10-3",
            title: "流处理性能",
            detail: "掌握 Flink 背压机制、Watermark 与窗口优化，处理实时数据流。",
            keyPoints: [
              "背压自动向上游传递压力，避免缓冲区溢出。",
              "Watermark 处理乱序事件，允许配置延迟容忍。",
              "使用 AggregateFunction 增量聚合减少内存占用。",
            ],
            resources: [
              { title: "Flink Documentation", url: "https://nightlies.apache.org/flink/flink-docs-stable/" },
              { title: "Flink Time Concepts", url: "https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/time/" },
              { title: "Kafka Streams", url: "https://kafka.apache.org/documentation/streams/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "bp-security-finops",
    title: "阶段六：安全、成本与工程化",
    duration: "第 11-12 周",
    goal: "平衡安全与性能，掌握 FinOps 实践，建立性能工程化体系。",
    weeks: [
      {
        id: "bp-w11",
        title: "第 11 周：安全与性能的权衡",
        summary: "理解加密开销、WAF 影响与认证优化，在安全与性能间找到平衡。",
        lessons: [
          {
            id: "bp-w11-1",
            title: "加密开销优化",
            detail: "理解不同加密算法的性能差异，利用硬件加速和算法选择优化加密性能。",
            keyPoints: [
              "AES-NI 硬件加速提升 10-100 倍性能。",
              "ECDSA 比 RSA 更快且密钥更短。",
              "bcrypt 故意设计慢速，高并发需要限流。",
            ],
            resources: [
              { title: "Intel AES-NI", url: "https://www.intel.com/content/www/us/en/developer/articles/technical/advanced-encryption-standard-instructions-aes-ni.html" },
              { title: "Cloudflare ChaCha20", url: "https://blog.cloudflare.com/it-takes-two-to-chacha-poly/" },
              { title: "OWASP Password Storage", url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html" },
            ],
          },
          {
            id: "bp-w11-2",
            title: "WAF 与防火墙优化",
            detail: "优化 WAF 规则减少延迟，分层防护平衡安全与吞吐量。",
            keyPoints: [
              "规则越多匹配时间越长，高频规则放前面。",
              "避免复杂正则导致 ReDoS 攻击。",
              "分层防护：边缘过滤流量洪泛，应用层处理复杂攻击。",
            ],
            resources: [
              { title: "OWASP Testing Guide", url: "https://owasp.org/www-project-web-security-testing-guide/" },
              { title: "ModSecurity CRS", url: "https://coreruleset.org/" },
              { title: "AWS WAF Testing", url: "https://docs.aws.amazon.com/waf/latest/developerguide/web-acl-testing.html" },
            ],
          },
          {
            id: "bp-w11-3",
            title: "认证与授权性能",
            detail: "优化 JWT 验证、Token 缓存与权限检查，减少认证对请求延迟的影响。",
            keyPoints: [
              "RS256 验证约 0.1-0.5ms，HS256 更快但密钥需保密。",
              "短期 Access Token + Refresh Token 平衡安全与体验。",
              "RBAC 权限检查可使用缓存加速。",
            ],
            resources: [
              { title: "Auth0 JWT", url: "https://auth0.com/docs/security/tokens/json-web-tokens" },
              { title: "JWT RFC 7519", url: "https://datatracker.ietf.org/doc/html/rfc7519" },
              { title: "OWASP Session Management", url: "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html" },
            ],
          },
        ],
      },
      {
        id: "bp-w12",
        title: "第 12 周：FinOps 与性能工程化",
        summary: "将性能优化与成本效益结合，建立可持续的性能工程实践。",
        lessons: [
          {
            id: "bp-w12-1",
            title: "弹性伸缩效率",
            detail: "优化扩容延迟，使用预测性伸缩应对流量突刺，平衡响应速度与成本。",
            keyPoints: [
              "扩容延迟 = 指标采集 + 实例启动 + 应用预热，可能 5-10 分钟。",
              "预测性伸缩基于历史模式提前扩容。",
              "混合策略：预留实例 + Spot + 反应式伸缩。",
            ],
            resources: [
              { title: "AWS Auto Scaling", url: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html" },
              { title: "Kubernetes HPA", url: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/" },
              { title: "KEDA", url: "https://keda.sh/" },
            ],
          },
          {
            id: "bp-w12-2",
            title: "冷启动问题解决",
            detail: "优化容器镜像、预置并发与应用预热，减少冷启动对延迟的影响。",
            keyPoints: [
              "Provisioned Concurrency 消除 Lambda 冷启动但需持续付费。",
              "小镜像 + 多阶段构建减少拉取时间。",
              "渐进式流量引入给新实例预热时间。",
            ],
            resources: [
              { title: "Lambda Provisioned Concurrency", url: "https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html" },
              { title: "Docker Multi-stage Builds", url: "https://docs.docker.com/build/building/multi-stage/" },
              { title: "Lambda SnapStart", url: "https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html" },
            ],
          },
          {
            id: "bp-w12-3",
            title: "性能的商业价值",
            detail: "量化性能优化的 ROI，建立单位成本指标，考虑碳足迹与可持续性。",
            keyPoints: [
              "Amazon: 每 100ms 延迟降低销售额 1%。",
              "Cost per Request = 月度云成本 / 月度请求数。",
              "SCI 公式量化软件碳排放。",
            ],
            resources: [
              { title: "FinOps Framework", url: "https://www.finops.org/framework/" },
              { title: "Green Software Foundation", url: "https://greensoftware.foundation/" },
              { title: "Cloud Carbon Footprint", url: "https://www.cloudcarbonfootprint.org/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "bp-deep-observability",
    title: "阶段七：深度可观测与服务网格",
    duration: "第 13-14 周",
    goal: "掌握 eBPF 内核级可观测性与服务网格性能优化，深入理解数据库内核与低延迟系统。",
    weeks: [
      {
        id: "bp-w13",
        title: "第 13 周：eBPF 与服务网格性能",
        summary: "使用 eBPF 实现内核级追踪，优化服务网格的延迟和资源开销。",
        lessons: [
          {
            id: "bp-w13-1",
            title: "eBPF 内核级可观测",
            detail: "掌握 bpftrace、BCC 工具进行系统调用追踪和性能分析，构建内核级可观测性。",
            resources: [
              { title: "eBPF.io", url: "https://ebpf.io/" },
              { title: "bpftrace", url: "https://github.com/iovisor/bpftrace" },
            ],
          },
          {
            id: "bp-w13-2",
            title: "XDP 网络加速",
            detail: "使用 XDP 在网卡驱动层处理数据包，实现高速 DDoS 防护和负载均衡。",
            resources: [
              { title: "XDP Tutorial", url: "https://github.com/xdp-project/xdp-tutorial" },
              { title: "Katran", url: "https://github.com/facebookincubator/katran" },
            ],
          },
          {
            id: "bp-w13-3",
            title: "服务网格性能优化",
            detail: "理解 Sidecar 开销，优化 Istio/Envoy 配置，探索 Sidecar-less 模式。",
            resources: [
              { title: "Istio Performance", url: "https://istio.io/latest/docs/ops/deployment/performance-and-scalability/" },
              { title: "Cilium Service Mesh", url: "https://cilium.io/blog/2021/12/01/cilium-service-mesh-beta/" },
            ],
          },
        ],
      },
      {
        id: "bp-w14",
        title: "第 14 周：数据库内核与低延迟系统",
        summary: "深入数据库存储引擎与查询优化，掌握实时低延迟系统设计。",
        lessons: [
          {
            id: "bp-w14-1",
            title: "数据库存储引擎",
            detail: "理解 B-tree vs LSM-tree、Buffer Pool、MVCC，掌握写放大优化。",
            resources: [
              { title: "Use The Index, Luke!", url: "https://use-the-index-luke.com/" },
              { title: "RocksDB Compaction", url: "https://github.com/facebook/rocksdb/wiki/Compaction" },
            ],
          },
          {
            id: "bp-w14-2",
            title: "查询优化深度",
            detail: "精通 EXPLAIN ANALYZE 解读、执行计划优化、分区表与统计信息调优。",
            resources: [
              { title: "PostgreSQL EXPLAIN", url: "https://www.postgresql.org/docs/current/using-explain.html" },
              { title: "MySQL Optimizer", url: "https://dev.mysql.com/doc/refman/8.0/en/execution-plan-information.html" },
            ],
          },
          {
            id: "bp-w14-3",
            title: "实时低延迟系统",
            detail: "掌握内核旁路、DPDK、Busy Polling、CPU 隔离等极致低延迟技术。",
            resources: [
              { title: "DPDK", url: "https://www.dpdk.org/" },
              { title: "Real-Time Linux", url: "https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux_for_real_time/8/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "bp-chaos-global",
    title: "阶段八：混沌工程与全球化架构",
    duration: "第 15-16 周",
    goal: "通过混沌工程验证系统韧性，掌握边缘计算与 Kubernetes 性能优化。",
    weeks: [
      {
        id: "bp-w15",
        title: "第 15 周：混沌工程与分布式追踪",
        summary: "建立混沌工程实践，优化大规模分布式追踪的采样与存储策略。",
        lessons: [
          {
            id: "bp-w15-1",
            title: "混沌工程基础",
            detail: "理解混沌工程原则，设计稳态假设，控制实验爆炸半径。",
            resources: [
              { title: "Principles of Chaos", url: "https://principlesofchaos.org/" },
              { title: "Chaos Mesh", url: "https://chaos-mesh.org/docs/" },
            ],
          },
          {
            id: "bp-w15-2",
            title: "故障注入实践",
            detail: "使用 Chaos Mesh、LitmusChaos 进行网络、资源、进程故障注入。",
            resources: [
              { title: "LitmusChaos", url: "https://litmuschaos.io/" },
              { title: "AWS FIS", url: "https://aws.amazon.com/fis/" },
            ],
          },
          {
            id: "bp-w15-3",
            title: "分布式追踪采样策略",
            detail: "掌握头部采样、尾部采样、自适应采样，优化追踪存储成本。",
            resources: [
              { title: "OpenTelemetry Sampling", url: "https://opentelemetry.io/docs/concepts/sampling/" },
              { title: "Grafana Tempo", url: "https://grafana.com/docs/tempo/latest/" },
            ],
          },
        ],
      },
      {
        id: "bp-w16",
        title: "第 16 周：边缘计算与 Kubernetes 性能",
        summary: "在边缘节点部署计算能力，优化 Kubernetes 集群的调度与网络性能。",
        lessons: [
          {
            id: "bp-w16-1",
            title: "边缘计算与 CDN 优化",
            detail: "使用边缘函数减少延迟，优化缓存策略和地理路由。",
            resources: [
              { title: "Cloudflare Workers", url: "https://developers.cloudflare.com/workers/" },
              { title: "Lambda@Edge", url: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-at-the-edge.html" },
            ],
          },
          {
            id: "bp-w16-2",
            title: "全球负载均衡",
            detail: "掌握 GeoDNS、Anycast、多区域架构设计与故障转移。",
            resources: [
              { title: "Route 53 Routing", url: "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html" },
              { title: "Global Accelerator", url: "https://aws.amazon.com/global-accelerator/" },
            ],
          },
          {
            id: "bp-w16-3",
            title: "Kubernetes 性能调优",
            detail: "优化 Pod 启动时间、资源配额、CNI 网络性能与 HPA 响应速度。",
            resources: [
              { title: "K8s Scheduling", url: "https://kubernetes.io/docs/concepts/scheduling-eviction/" },
              { title: "Cilium CNI Benchmark", url: "https://cilium.io/blog/2021/05/11/cni-benchmark/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "bp-advanced-engineering",
    title: "阶段九：性能建模与工程化",
    duration: "第 17-18 周",
    goal: "掌握性能建模理论与全栈优化，建立可持续的性能工程文化。",
    weeks: [
      {
        id: "bp-w17",
        title: "第 17 周：性能建模与全栈优化",
        summary: "运用排队论与 USL 模型进行容量规划，实现端到端性能优化。",
        lessons: [
          {
            id: "bp-w17-1",
            title: "性能建模理论",
            detail: "掌握 Little's Law、USL、Amdahl 定律，预测系统扩展性。",
            resources: [
              { title: "USL Scalability", url: "http://www.perfdynamics.com/Manifesto/USLscalability.html" },
              { title: "USE Method", url: "https://www.brendangregg.com/usemethod.html" },
            ],
          },
          {
            id: "bp-w17-2",
            title: "容量规划实践",
            detail: "基于历史数据和业务预测进行资源规划，设置安全余量。",
            resources: [
              { title: "SRE Capacity Planning", url: "https://sre.google/sre-book/software-engineering-in-sre/" },
              { title: "Prophet", url: "https://facebook.github.io/prophet/" },
            ],
          },
          {
            id: "bp-w17-3",
            title: "全栈性能优化",
            detail: "优化 Core Web Vitals，实现从前端到后端的端到端性能监控。",
            resources: [
              { title: "Web Vitals", url: "https://web.dev/vitals/" },
              { title: "Lighthouse", url: "https://developer.chrome.com/docs/lighthouse/overview/" },
            ],
          },
        ],
      },
      {
        id: "bp-w18",
        title: "第 18 周：前沿技术与工程文化",
        summary: "探索 AI 推理优化与 WebAssembly，建立持续的性能工程文化。",
        lessons: [
          {
            id: "bp-w18-1",
            title: "AI/ML 推理性能",
            detail: "掌握 GPU 优化、批处理策略、模型量化与推理服务部署。",
            resources: [
              { title: "Triton Server", url: "https://github.com/triton-inference-server/server" },
              { title: "vLLM", url: "https://github.com/vllm-project/vllm" },
            ],
          },
          {
            id: "bp-w18-2",
            title: "WebAssembly 性能",
            detail: "使用 Wasm 实现接近原生的性能，在边缘和浏览器高效运行。",
            resources: [
              { title: "WebAssembly", url: "https://webassembly.org/" },
              { title: "Rust Wasm", url: "https://rustwasm.github.io/docs/book/" },
            ],
          },
          {
            id: "bp-w18-3",
            title: "性能工程文化",
            detail: "建立性能左移、回归防护、SLO 驱动的持续性能工程实践。",
            resources: [
              { title: "SRE Book", url: "https://sre.google/sre-book/table-of-contents/" },
              { title: "Performance Methodology", url: "https://www.brendangregg.com/methodology.html" },
            ],
          },
        ],
      },
    ],
  },
]

export const backendPerformanceKnowledgeCards: KnowledgeCard[] = [
  {
    id: "bp-observability",
    title: "观测优先",
    summary: "没有数据就无法优化：先让请求能被追踪，再讨论优化。",
    points: [
      "为所有入口请求生成 Trace ID，并在日志、指标、链路中串联。",
      "关注 P95/P99，而非均值；区分热路径与冷启动。",
      "监控变更：为每次发布打标，关联性能波动。",
    ],
    practice: "为最慢的 3 个接口补齐 Trace + 指标，生成火焰图并记录前 3 个热点函数。",
  },
  {
    id: "bp-cache",
    title: "缓存策略",
    summary: "命中率、TTL、填充策略与一致性，共同决定缓存收益。",
    points: [
      "对读多写少的接口使用多级缓存；为写路径设计失效/双删。",
      "设置预算：缓存命中率 < 80% 或 TTL 过短需复盘。",
      "监控热点 Key 与缓存击穿，必要时引入互斥填充或随机 TTL。",
    ],
    practice: "为一个接口设计本地 + Redis 双层缓存，写出命中率与回源率的监控指标。",
  },
  {
    id: "bp-resilience",
    title: "韧性与降级",
    summary: "假设下游一定会出故障，预先设计隔离、熔断与降级。",
    points: [
      "给每个下游调用设置超时、重试与背压，默认不上线无保护的调用。",
      "定义降级矩阵：核心路径兜底方案、可关闭的非核心功能。",
      "定期演练：故障注入、扩容/缩容回归和灰度策略。",
    ],
    practice: "为下游依赖添加熔断 + 退避重试，并在预发布环境注入故障验证。",
  },
]

export const backendPerformanceExamQuestions: QuizQuestion[] = [
  {
    id: "bp-q1",
    question: "在设计 API 性能目标时，以下哪项最合适？",
    options: [
      "以平均延迟 <= 100ms 作为唯一目标",
      "以 P95 延迟、错误率和吞吐量作为 SLI，并与业务 SLO 对齐",
      "只要 CPU 占用不超过 70% 就算达标",
      "以每次发布的代码行数作为性能指标",
    ],
    answer: 1,
    rationale: "SLO/SLI 应体现用户体验，常用 P95/P99 延迟、错误率和吞吐量等可观测指标。",
  },
  {
    id: "bp-q2",
    question: "下列哪种策略最能减少缓存击穿导致的雪崩？",
    options: [
      "让所有请求同时回源重新填充缓存",
      "取消缓存，全部直连数据库",
      "对同一 Key 使用互斥锁/单飞机制，配合随机 TTL",
      "把 TTL 设为 1 秒频繁刷新",
    ],
    answer: 2,
    rationale: "互斥填充能避免大量并发请求同时穿透缓存，随机 TTL 避免同一时间批量失效。",
  },
  {
    id: "bp-q3",
    question: "关于超时与重试，哪项做法更安全？",
    options: [
      "重试次数越多越好，直到成功",
      "超时设置为无限大，只依赖客户端取消",
      "为每个下游设置合理的超时，并使用带抖动的指数退避重试",
      "服务端不需要设置超时，交给网关",
    ],
    answer: 2,
    rationale: "超时与带抖动的指数退避重试可减少放大效应，保护下游并避免同步雪崩。",
  },
  {
    id: "bp-q4",
    question: "在高并发接口中发现数据库连接池耗尽，首要行动是什么？",
    options: [
      "把连接池大小无限增大",
      "立即增加实例数量而不看指标",
      "分析请求模式与慢查询，减少连接持有时间并优化查询",
      "关闭监控避免噪音",
    ],
    answer: 2,
    rationale: "先找出连接被占用的原因（慢查询、未释放、长事务），优化后再调整池大小或扩容。",
  },
  {
    id: "bp-q5",
    question: "关于容量演练，哪项描述正确？",
    options: [
      "只在生产流量下做一次压测即可",
      "压测应从低到高分阶段升压，并与监控/告警联动评估安全容量",
      "压测与发布无关，不需要纳入 CI/CD",
      "压测越快越好，不必等待系统稳定",
    ],
    answer: 1,
    rationale: "分阶段升压结合监控观察瓶颈与安全容量，结果应回馈到扩容与发布流程中。",
  },
]

export const backendPerformanceRoadmap: RoadmapDefinition = {
  id: "backend-performance-best-practices",
  label: "后端性能最佳实践",
  title: "性能优化",
  durationLabel: "18 个主题",
  description:
    "以业务 SLO 为导向，从观测、热点优化、韧性演练，到操作系统内核、运行时深度、网络协议、数据架构、安全权衡、FinOps，再到 eBPF、混沌工程、边缘计算、性能建模与 AI 推理，系统化打造顶尖性能专家能力。",
  heroBadge: "性能诊断",
  stages: backendPerformanceStages,
  knowledgeCards: backendPerformanceKnowledgeCards,
  examQuestions: backendPerformanceExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "从 SLO 与观测起步，先让性能可见再讨论优化。"
    if (percent < 25) return "优先补齐观测和缓存策略，选一条核心链路做端到端画像。"
    if (percent < 50) return "开始演练超时/熔断与压测，把优化成果纳入发布基线。"
    if (percent < 75) return "深入操作系统与运行时调优，掌握网络协议与数据架构进阶。"
    return "在安全与性能间找到平衡，用 FinOps 思维量化优化价值，成为顶尖性能专家。"
  },
  resourceGuide: {
    environment: "准备可观测性栈（日志、指标、链路）与压测环境，确保可以重放真实流量。",
    fallbackKeyPoints: [
      "P95/P99 而非均值；区分冷/热路径。",
      "超时、重试、熔断默认开启，参数随环境调整。",
      "缓存命中率与回源率可观测，并有兜底策略。",
    ],
    handsOnSteps: [
      "为关键接口打通 Trace + 指标链路，生成火焰图。",
      "跑一次压测，记录瓶颈与容量；制定优化清单。",
      "为下游调用配置超时/退避重试 + 熔断，并演练降级。",
    ],
    selfChecks: [
      "是否有明确的 SLO/SLI 以及性能预算？",
      "缓存、数据库与队列是否有命中率/延迟/错误监控？",
      "是否定期做容量演练并把结果纳入发布守护？",
    ],
    extensions: [
      "研究 eBPF/系统层剖析，优化内核与网络栈。",
      "引入自动化回归压测，在 CI 中对关键接口打分。",
      "对多租户或多区域部署做跨区域延迟优化。",
    ],
    lessonQuizAdvice: "遇到不熟悉的题目时，先回顾课程里的关键指标与最佳实践，必要时结合压测/监控再确认答案。",
  },
}
