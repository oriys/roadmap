import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const systemDesignStages: Stage[] = [
    {
        id: "phase1",
        title: "第一阶段：分布式系统核心理论",
        duration: "第 1-4 周",
        goal: "建立分布式系统的理论基础，理解核心权衡与设计原则。",
        weeks: [
            {
                id: "w1",
                title: "第 1 周：系统设计方法论与权衡思维",
                summary: "掌握系统设计的思维框架，学会在性能、可扩展性、一致性之间做权衡。",
                overview: "系统设计不是记忆模板，而是理解权衡。本周建立从需求分析到架构决策的完整思维链路，学会用「约束驱动设计」和「信封背面估算」量化系统边界。",
                keyPoints: [
                    "系统设计四步法：需求澄清 → 高层设计 → 深入组件 → 扩展优化，每一步都要明确输入输出。",
                    "性能 vs 可扩展性：单机优化（垂直扩展）与分布式拆分（水平扩展）的适用场景与成本。",
                    "延迟 vs 吞吐量：P99 延迟与 QPS 的关系，如何通过批处理/异步化在两者间取舍。",
                ],
                lessons: [
                    {
                        id: "w1-1",
                        title: "系统设计四步法：从需求到架构的结构化思维",
                        detail: "掌握系统设计面试和实际架构设计的标准流程：需求澄清、高层设计、组件深入、扩展优化。",
                        resources: [
                            { title: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" },
                            { title: "Grokking System Design（概览）", url: "https://www.designgurus.io/course/grokking-the-system-design-interview" },
                            { title: "ByteByteGo 系统设计指南", url: "https://bytebytego.com/" },
                        ],
                    },
                    {
                        id: "w1-2",
                        title: "性能 vs 可扩展性：理解增长的代价",
                        detail: "区分性能优化（单请求更快）与可扩展性设计（处理更多请求），理解 Amdahl 定律与扩展瓶颈。",
                        resources: [
                            { title: "Scalable Web Applications: Best Practices", url: "https://42works.net/scalable-web-applications-from-basics-to-best-practices/" },
                            { title: "High Scalability Blog", url: "http://highscalability.com/" },
                            { title: "Amdahl's Law（维基百科）", url: "https://en.wikipedia.org/wiki/Amdahl%27s_law" },
                        ],
                    },
                    {
                        id: "w1-3",
                        title: "延迟 vs 吞吐量：量化系统边界",
                        detail: "理解延迟分布（P50/P99/P999）、吞吐量计算，以及 Little's Law 在容量规划中的应用。",
                        resources: [
                            { title: "Latency Numbers Every Programmer Should Know", url: "https://gist.github.com/jboner/2841832" },
                            { title: "Little's Law（维基百科）", url: "https://en.wikipedia.org/wiki/Little%27s_law" },
                            { title: "Google SRE Book - Service Level Objectives", url: "https://sre.google/sre-book/service-level-objectives/" },
                        ],
                    },
                    {
                        id: "w1-4",
                        title: "信封背面估算：快速量化系统需求",
                        detail: "掌握容量估算技巧：DAU/MAU 转化、存储/带宽计算、QPS 峰值估算，建立数量级直觉。",
                        resources: [
                            { title: "Back-of-the-envelope Estimation", url: "https://github.com/donnemartin/system-design-primer#back-of-the-envelope-calculations" },
                            { title: "Numbers Everyone Should Know（Jeff Dean）", url: "https://static.googleusercontent.com/media/research.google.com/en//people/jeff/stanford-295-talk.pdf" },
                            { title: "Capacity Planning Guide", url: "https://blog.bytebytego.com/p/back-of-the-envelope-estimation-cheat" },
                        ],
                    },
                ],
            },
            {
                id: "w2",
                title: "第 2 周：CAP/PACELC 定理与一致性模型",
                summary: "深入理解分布式系统的核心约束，掌握不同一致性级别的权衡。",
                overview: "CAP 定理是分布式系统的「不可能三角」，但真正的挑战在于理解 PACELC 的延迟-一致性权衡。本周从理论到实践，建立对一致性模型的直觉。",
                keyPoints: [
                    "CAP 定理本质：网络分区（P）不可避免时，必须在一致性（C）和可用性（A）之间选择。",
                    "PACELC 扩展：正常情况下也要在延迟（L）和一致性（C）之间权衡，这才是日常设计的核心。",
                    "一致性光谱：从线性一致性到最终一致性，理解每个级别的语义保证与实现成本。",
                ],
                lessons: [
                    {
                        id: "w2-1",
                        title: "CAP 定理：不可能三角的真正含义",
                        detail: "深入理解 CAP 定理的证明、常见误解，以及为什么CP 和 AP是简化模型。",
                        resources: [
                            { title: "CAP Theorem（Martin Kleppmann）", url: "https://martin.kleppmann.com/2015/05/11/please-stop-calling-databases-cp-or-ap.html" },
                            { title: "Brewer's Conjecture（原始论文）", url: "https://users.ece.cmu.edu/~adrian/731-sp04/readings/GL-cap.pdf" },
                            { title: "CAP FAQ", url: "https://www.the-paper-trail.org/page/cap-faq/" },
                        ],
                    },
                    {
                        id: "w2-2",
                        title: "PACELC：延迟与一致性的日常权衡",
                        detail: "理解 PACELC 模型：即使没有分区，也要在延迟和一致性之间取舍，这是大多数系统的真实挑战。",
                        resources: [
                            { title: "PACELC 论文", url: "https://www.cs.umd.edu/~abadi/papers/abadi-pacelc.pdf" },
                            { title: "Consistency Tradeoffs in Modern Distributed Database System Design", url: "https://www.cs.umd.edu/~abadi/papers/abadi-pacelc.pdf" },
                            { title: "PACELC 解释（Jepsen）", url: "https://jepsen.io/consistency" },
                        ],
                    },
                    {
                        id: "w2-3",
                        title: "一致性模型光谱：从强到弱的语义保证",
                        detail: "掌握线性一致性、顺序一致性、因果一致性、最终一致性的定义与应用场景。",
                        resources: [
                            { title: "Jepsen Consistency Models", url: "https://jepsen.io/consistency" },
                            { title: "Consistency Models（分布式系统概念）", url: "https://www.allthingsdistributed.com/2008/12/eventually_consistent.html" },
                            { title: "Consistency Models in Distributed System", url: "https://xzhu0027.gitbook.io/blog/misc/index/consistency-models-in-distributed-system" },
                        ],
                    },
                    {
                        id: "w2-4",
                        title: "实战：主流数据库的一致性配置",
                        detail: "分析 MySQL、PostgreSQL、MongoDB、Cassandra 等数据库的一致性级别配置与权衡。",
                        resources: [
                            { title: "MySQL Replication（官方文档）", url: "https://dev.mysql.com/doc/refman/8.0/en/replication.html" },
                            { title: "MongoDB Read/Write Concern", url: "https://www.mongodb.com/docs/manual/reference/read-concern/" },
                            { title: "Cassandra Consistency Levels", url: "https://cassandra.apache.org/doc/latest/cassandra/architecture/dynamo.html" },
                        ],
                    },
                ],
            },
            {
                id: "w3",
                title: "第 3 周：可用性设计与故障容错",
                summary: "从 SLA/SLO 到故障转移，构建高可用系统的设计直觉。",
                overview: "可用性是系统的生命线。本周从定义可用性目标（SLA）到实现故障转移（Failover），掌握冗余、复制、健康检查的工程实践。",
                keyPoints: [
                    "可用性量化：99.9%（8.76h/年停机）vs 99.99%（52.6min/年），理解9 的成本曲线。",
                    "故障转移模式：主从切换（Active-Passive）vs 多活（Active-Active），各自的复杂度与适用场景。",
                    "故障检测：心跳、租约、Phi Accrual 故障检测器，避免误判与脑裂。",
                ],
                lessons: [
                    {
                        id: "w3-1",
                        title: "SLA/SLO/SLI：定义与度量可用性",
                        detail: "理解服务级别协议（SLA）、目标（SLO）、指标（SLI）的关系，以及如何设定合理的可用性目标。",
                        resources: [
                            { title: "Google SRE Book - SLOs", url: "https://sre.google/sre-book/service-level-objectives/" },
                            { title: "The Art of SLOs（Google）", url: "https://sre.google/workbook/implementing-slos/" },
                            { title: "Availability Calculator", url: "https://availability.sre.xyz/" },
                        ],
                    },
                    {
                        id: "w3-2",
                        title: "故障转移：Active-Passive vs Active-Active",
                        detail: "深入理解主从切换和多活架构的实现原理、故障检测机制与数据同步挑战。",
                        resources: [
                            { title: "High Availability Patterns", url: "https://docs.microsoft.com/en-us/azure/architecture/patterns/category/availability" },
                            { title: "Failover Strategies", url: "https://aws.amazon.com/blogs/architecture/disaster-recovery-dr-architecture-on-aws-part-i-strategies-for-recovery-in-the-cloud/" },
                            { title: "MySQL High Availability", url: "https://dev.mysql.com/doc/mysql-ha-scalability/en/" },
                        ],
                    },
                    {
                        id: "w3-3",
                        title: "复制策略：同步、异步与半同步",
                        detail: "比较不同复制模式的延迟、一致性、可用性权衡，以及 RPO/RTO 的影响。",
                        resources: [
                            { title: "Replication（Designing Data-Intensive Applications）", url: "https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/" },
                            { title: "PostgreSQL Streaming Replication", url: "https://www.postgresql.org/docs/current/warm-standby.html" },
                            { title: "MySQL Semi-Synchronous Replication", url: "https://dev.mysql.com/doc/refman/8.0/en/replication-semisync.html" },
                        ],
                    },
                    {
                        id: "w3-4",
                        title: "故障检测与避免脑裂",
                        detail: "理解心跳检测、租约机制、Quorum 投票，以及如何避免网络分区导致的脑裂问题。",
                        resources: [
                            { title: "Phi Accrual Failure Detector", url: "https://www.researchgate.net/publication/29682135_The_ph_accrual_failure_detector" },
                            { title: "Raft Leader Election", url: "https://raft.github.io/" },
                            { title: "Split-Brain Problem（维基百科）", url: "https://en.wikipedia.org/wiki/Split-brain_(computing)" },
                        ],
                    },
                ],
            },
            {
                id: "w4",
                title: "第 4 周：分布式时钟与共识算法",
                summary: "理解分布式系统中「时间」的挑战，掌握 Paxos/Raft 等共识算法的核心原理。",
                overview: "分布式系统没有全局时钟，这是一切复杂性的根源。本周从逻辑时钟到共识算法，理解如何在不可靠网络上达成一致。",
                keyPoints: [
                    "物理时钟局限：时钟漂移、NTP 误差、闰秒，为什么不能依赖物理时间排序事件。",
                    "逻辑时钟：Lamport 时钟、向量时钟，如何建立因果顺序而非绝对顺序。",
                    "共识算法：Paxos、Raft、ZAB 的核心思想与工程实现，理解 Leader 选举与日志复制。",
                ],
                lessons: [
                    {
                        id: "w4-1",
                        title: "分布式时间：为什么物理时钟不可靠",
                        detail: "理解时钟漂移、NTP 同步误差、Google TrueTime 的设计思路，以及 Spanner 如何利用时间不确定性。",
                        resources: [
                            { title: "Time, Clocks, and the Ordering of Events（Lamport 论文）", url: "https://lamport.azurewebsites.net/pubs/time-clocks.pdf" },
                            { title: "Spanner: Google's Globally-Distributed Database", url: "https://research.google/pubs/pub39966/" },
                            { title: "NTP 原理与误差", url: "https://www.ntp.org/documentation/4.2.8-series/ntp/" },
                        ],
                    },
                    {
                        id: "w4-2",
                        title: "逻辑时钟：Lamport 时钟与向量时钟",
                        detail: "掌握逻辑时钟的实现原理，理解如何通过因果顺序而非物理时间排序分布式事件。",
                        resources: [
                            { title: "Lamport Timestamps", url: "https://en.wikipedia.org/wiki/Lamport_timestamp" },
                            { title: "Vector Clocks", url: "https://en.wikipedia.org/wiki/Vector_clock" },
                            { title: "Dynamo Paper（Amazon）", url: "https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf" },
                        ],
                    },
                    {
                        id: "w4-3",
                        title: "Paxos 与 Raft：共识算法核心原理",
                        detail: "深入理解 Paxos 的 Prepare/Accept 两阶段和 Raft 的 Leader Election/Log Replication 机制。",
                        resources: [
                            { title: "Raft 官方可视化", url: "https://raft.github.io/" },
                            { title: "In Search of an Understandable Consensus Algorithm（Raft 论文）", url: "https://raft.github.io/raft.pdf" },
                            { title: "Paxos Made Simple（Lamport）", url: "https://lamport.azurewebsites.net/pubs/paxos-simple.pdf" },
                        ],
                    },
                    {
                        id: "w4-4",
                        title: "工程实践：etcd/ZooKeeper 的共识实现",
                        detail: "分析 etcd（Raft）和 ZooKeeper（ZAB）的工程实现，理解共识算法在生产系统中的应用。",
                        resources: [
                            { title: "etcd Raft 实现", url: "https://etcd.io/docs/v3.5/learning/design-learner/" },
                            { title: "ZooKeeper Internals", url: "https://zookeeper.apache.org/doc/current/zookeeperInternals.html" },
                            { title: "Raft vs Paxos vs ZAB 对比", url: "https://www.designgurus.io/answers/detail/explain-raft-vs-paxos-vs-zab" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase2",
        title: "第二阶段：网络与负载均衡",
        duration: "第 5-8 周",
        goal: "掌握从 DNS 到应用层的完整网络链路，理解流量调度与代理技术。",
        weeks: [
            {
                id: "w5",
                title: "第 5 周：DNS 架构与解析优化",
                summary: "理解 DNS 作为互联网基础设施的核心角色，掌握解析优化与故障应对。",
                overview: "DNS 是用户访问服务的第一跳，也是最容易被忽视的性能瓶颈和故障点。本周从 DNS 原理到 GeoDNS、GSLB，建立对流量入口的全面理解。",
                keyPoints: [
                    "DNS 解析链路：递归/迭代查询、各级缓存（浏览器/OS/ISP）、TTL 策略对切换速度的影响。",
                    "DNS 负载均衡：轮询、权重、地理位置（GeoDNS），以及与应用层 LB 的配合。",
                    "DNS 安全与可靠性：DNSSEC、DNS over HTTPS/TLS，以及 DNS 故障的影响范围。",
                ],
                lessons: [
                    {
                        id: "w5-1",
                        title: "DNS 解析原理：从输入 URL 到获取 IP",
                        detail: "深入理解 DNS 递归/迭代查询、各级缓存机制、记录类型（A/AAAA/CNAME/MX）的作用。",
                        resources: [
                            { title: "How DNS Works（Cloudflare）", url: "https://www.cloudflare.com/learning/dns/what-is-dns/" },
                            { title: "DNS RFC 1035", url: "https://datatracker.ietf.org/doc/html/rfc1035" },
                            { title: "DNS 可视化工具", url: "https://messwithdns.net/" },
                        ],
                    },
                    {
                        id: "w5-2",
                        title: "DNS 负载均衡与流量调度",
                        detail: "掌握 DNS 轮询、权重分配、GeoDNS、GSLB 的实现原理与适用场景。",
                        resources: [
                            { title: "Route 53 Routing Policies", url: "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html" },
                            { title: "Cloudflare Load Balancing", url: "https://developers.cloudflare.com/load-balancing/" },
                            { title: "GeoDNS 原理", url: "https://gcore.com/learning/what-is-geo-dns" },
                        ],
                    },
                    {
                        id: "w5-3",
                        title: "DNS 缓存与 TTL 策略",
                        detail: "理解 TTL 对解析性能和故障切换的影响，如何在稳定性和灵活性之间取舍。",
                        resources: [
                            { title: "DNS TTL Best Practices", url: "https://www.cloudflare.com/learning/dns/dns-cache-poisoning/" },
                            { title: "负缓存与 Negative TTL", url: "https://datatracker.ietf.org/doc/html/rfc2308" },
                            { title: "DNS 预取与预连接", url: "https://developer.mozilla.org/en-US/docs/Web/Performance/dns-prefetch" },
                        ],
                    },
                    {
                        id: "w5-4",
                        title: "DNS 安全：DNSSEC、DoH 与故障应对",
                        detail: "了解 DNS 劫持、缓存投毒等攻击，以及 DNSSEC、DNS over HTTPS/TLS 的防护机制。",
                        resources: [
                            { title: "DNSSEC 原理", url: "https://www.cloudflare.com/dns/dnssec/how-dnssec-works/" },
                            { title: "DNS over HTTPS（DoH）", url: "https://developers.cloudflare.com/1.1.1.1/encryption/dns-over-https/" },
                            { title: "DNS 故障案例分析", url: "https://blog.cloudflare.com/october-2021-facebook-outage/" },
                        ],
                    },
                ],
            },
            {
                id: "w6",
                title: "第 6 周：CDN 与边缘计算",
                summary: "掌握内容分发网络的架构原理，理解边缘节点如何加速用户体验。",
                overview: "CDN 将内容推送到离用户最近的边缘节点，是现代互联网的血管系统。本周从缓存策略到边缘计算，理解如何在全球范围内优化延迟。",
                keyPoints: [
                    "CDN 架构：边缘节点、源站回源、缓存层级（L1/L2），以及 Anycast 路由原理。",
                    "缓存策略：Push vs Pull 模式、Cache-Control 头、缓存失效（Purge）的最佳实践。",
                    "边缘计算：从静态缓存到边缘执行（Cloudflare Workers、Lambda@Edge），扩展 CDN 的能力边界。",
                ],
                lessons: [
                    {
                        id: "w6-1",
                        title: "CDN 架构原理：边缘节点与回源机制",
                        detail: "理解 CDN 的分层架构、边缘 PoP 分布、回源策略，以及 Anycast 如何实现就近接入。",
                        resources: [
                            { title: "What is a CDN（Cloudflare）", url: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/" },
                            { title: "Akamai Architecture Overview", url: "https://www.akamai.com/why-akamai" },
                            { title: "Anycast Routing", url: "https://www.cloudflare.com/learning/cdn/glossary/anycast-network/" },
                        ],
                    },
                    {
                        id: "w6-2",
                        title: "缓存策略：Push vs Pull 与 Cache-Control",
                        detail: "掌握 CDN 的 Push（预热）和 Pull（按需）缓存模式，理解 HTTP 缓存头的配置与权衡。",
                        resources: [
                            { title: "HTTP Caching（MDN）", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching" },
                            { title: "Cache-Control 详解", url: "https://www.keycdn.com/blog/http-cache-headers" },
                            { title: "CDN Cache Invalidation", url: "https://developers.cloudflare.com/cache/how-to/purge-cache/" },
                        ],
                    },
                    {
                        id: "w6-3",
                        title: "动态内容加速：从 DSA 到边缘计算",
                        detail: "理解动态站点加速（DSA）、TCP 优化、边缘计算（Edge Computing）如何处理非缓存内容。",
                        resources: [
                            { title: "Dynamic Site Acceleration", url: "https://www.cloudflare.com/application-services/products/argo-smart-routing/" },
                            { title: "Cloudflare Workers", url: "https://developers.cloudflare.com/workers/" },
                            { title: "AWS Lambda@Edge", url: "https://aws.amazon.com/lambda/edge/" },
                        ],
                    },
                    {
                        id: "w6-4",
                        title: "CDN 选型与多 CDN 架构",
                        detail: "比较主流 CDN 厂商的特点，理解多 CDN 架构的实现方式与故障切换策略。",
                        resources: [
                            { title: "CDN 对比（CDN Planet）", url: "https://www.cdnplanet.com/compare/" },
                            { title: "Multi-CDN Strategy", url: "https://www.cedexis.com/multi-cdn/" },
                            { title: "CDN 性能监控", url: "https://www.webpagetest.org/" },
                        ],
                    },
                ],
            },
            {
                id: "w7",
                title: "第 7 周：负载均衡深度解析",
                summary: "从四层到七层，掌握负载均衡的核心算法与高可用架构。",
                overview: "负载均衡是分布式系统的交通枢纽，决定了请求如何被分发到后端服务器。本周深入 L4/L7 负载均衡的原理、算法选择与高可用部署。",
                keyPoints: [
                    "L4 vs L7：传输层（IP+Port）与应用层（HTTP Header/Cookie）负载均衡的适用场景与性能差异。",
                    "负载均衡算法：轮询、加权、最少连接、一致性哈希、随机两选择（Power of Two Random Choices）。",
                    "高可用部署：主备（VRRP/Keepalived）、集群（ECMP）、云原生（K8s Service/Ingress）。",
                ],
                lessons: [
                    {
                        id: "w7-1",
                        title: "L4 vs L7 负载均衡：原理与性能权衡",
                        detail: "理解四层（TCP/UDP）和七层（HTTP）负载均衡的工作原理、性能特点与适用场景。",
                        resources: [
                            { title: "Load Balancing 101（F5）", url: "https://www.f5.com/glossary/load-balancer" },
                            { title: "HAProxy L4 vs L7", url: "https://www.haproxy.com/blog/layer-4-vs-layer-7-load-balancing" },
                            { title: "NGINX Load Balancing", url: "https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/" },
                        ],
                    },
                    {
                        id: "w7-2",
                        title: "负载均衡算法深度对比",
                        detail: "掌握各类负载均衡算法的原理与适用场景，特别是一致性哈希在有状态服务中的应用。",
                        resources: [
                            { title: "Consistent Hashing", url: "https://www.toptal.com/big-data/consistent-hashing" },
                            { title: "Power of Two Random Choices", url: "https://www.nginx.com/blog/nginx-power-of-two-choices-load-balancing-algorithm/" },
                            { title: "负载均衡算法对比", url: "https://samwho.dev/load-balancing/" },
                        ],
                    },
                    {
                        id: "w7-3",
                        title: "健康检查与优雅下线",
                        detail: "理解主动/被动健康检查、优雅关闭（Graceful Shutdown）、连接排空（Connection Draining）的实现。",
                        resources: [
                            { title: "HAProxy Health Checks", url: "https://www.haproxy.com/documentation/haproxy-configuration-tutorials/health-checks/" },
                            { title: "AWS ELB Health Checks", url: "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/target-group-health-checks.html" },
                            { title: "Graceful Shutdown Patterns", url: "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-termination" },
                        ],
                    },
                    {
                        id: "w7-4",
                        title: "负载均衡高可用：从 VRRP 到云原生",
                        detail: "掌握负载均衡器自身的高可用方案：Keepalived/VRRP、ECMP、云原生 NLB/ALB。",
                        resources: [
                            { title: "Keepalived 文档", url: "https://www.keepalived.org/manpage.html" },
                            { title: "AWS NLB vs ALB", url: "https://aws.amazon.com/elasticloadbalancing/features/" },
                            { title: "Kubernetes Service 类型", url: "https://kubernetes.io/docs/concepts/services-networking/service/" },
                        ],
                    },
                ],
            },
            {
                id: "w8",
                title: "第 8 周：反向代理与 API 网关",
                summary: "理解反向代理的核心功能，掌握 API 网关在微服务架构中的作用。",
                overview: "反向代理是服务器端的门卫，而 API 网关是微服务架构的统一入口。本周从 NGINX 到 Kong，理解请求路由、限流、认证等横切关注点的处理。",
                keyPoints: [
                    "反向代理核心功能：请求转发、SSL 终止、压缩、缓存，与正向代理的区别。",
                    "API 网关职责：路由、限流、认证、熔断、日志聚合，避免在每个服务中重复实现。",
                    "选型考量：NGINX/HAProxy（通用代理）vs Kong/APISIX（API 网关）vs Envoy（服务网格）。",
                ],
                lessons: [
                    {
                        id: "w8-1",
                        title: "反向代理原理：请求转发与 SSL 终止",
                        detail: "理解反向代理的工作原理、与正向代理的区别，以及 SSL/TLS 终止的性能影响。",
                        resources: [
                            { title: "Reverse Proxy（Cloudflare）", url: "https://www.cloudflare.com/learning/cdn/glossary/reverse-proxy/" },
                            { title: "NGINX Reverse Proxy", url: "https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/" },
                            { title: "SSL Termination", url: "https://www.nginx.com/blog/nginx-ssl-termination/" },
                        ],
                    },
                    {
                        id: "w8-2",
                        title: "API 网关：微服务的统一入口",
                        detail: "掌握 API 网关的核心职责：路由、限流、认证、协议转换，以及与 BFF（Backend For Frontend）的关系。",
                        resources: [
                            { title: "API Gateway Pattern", url: "https://microservices.io/patterns/apigateway.html" },
                            { title: "Kong Gateway 文档", url: "https://docs.konghq.com/gateway/latest/" },
                            { title: "AWS API Gateway", url: "https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html" },
                        ],
                    },
                    {
                        id: "w8-3",
                        title: "限流与熔断：保护后端服务",
                        detail: "理解令牌桶、漏桶、滑动窗口等限流算法，以及熔断器模式的状态机实现。",
                        resources: [
                            { title: "Rate Limiting Algorithms", url: "https://blog.bytebytego.com/p/rate-limiting-fundamentals" },
                            { title: "Circuit Breaker Pattern", url: "https://martinfowler.com/bliki/CircuitBreaker.html" },
                            { title: "Resilience4j 熔断器", url: "https://resilience4j.readme.io/docs/circuitbreaker" },
                        ],
                    },
                    {
                        id: "w8-4",
                        title: "服务发现与动态配置",
                        detail: "理解 API 网关如何与服务发现（Consul/etcd）集成，实现动态上下线与配置热更新。",
                        resources: [
                            { title: "Consul Service Discovery", url: "https://developer.hashicorp.com/consul/docs/concepts/service-discovery" },
                            { title: "Kong with Consul", url: "https://docs.konghq.com/gateway/latest/reference/configuration/#dns-based-service-discovery" },
                            { title: "APISIX 服务发现", url: "https://apisix.apache.org/docs/apisix/discovery/" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase3",
        title: "第三阶段：数据存储与扩展",
        duration: "第 9-12 周",
        goal: "深入理解数据库选型、分片复制、分布式事务，构建可扩展的数据层。",
        weeks: [
            {
                id: "w9",
                title: "第 9 周：关系型数据库优化与扩展",
                summary: "从索引优化到读写分离，掌握 RDBMS 的性能调优与水平扩展。",
                overview: "关系型数据库仍是大多数系统的核心。本周从查询优化、索引设计到读写分离、垂直拆分，建立 RDBMS 性能调优的系统方法论。",
                keyPoints: [
                    "查询优化：EXPLAIN 分析、索引选择性、覆盖索引、避免全表扫描的常见陷阱。",
                    "读写分离：主从复制延迟的影响、读写分离中间件、会话一致性的实现。",
                    "垂直拆分：按业务拆分数据库、跨库 JOIN 的替代方案、数据同步挑战。",
                ],
                lessons: [
                    {
                        id: "w9-1",
                        title: "查询优化：从 EXPLAIN 到索引设计",
                        detail: "掌握 EXPLAIN 执行计划分析、索引类型选择、复合索引设计原则，以及常见的查询反模式。",
                        resources: [
                            { title: "MySQL EXPLAIN 详解", url: "https://dev.mysql.com/doc/refman/8.0/en/explain-output.html" },
                            { title: "Use The Index, Luke", url: "https://use-the-index-luke.com/" },
                            { title: "PostgreSQL Query Tuning", url: "https://www.postgresql.org/docs/current/performance-tips.html" },
                        ],
                    },
                    {
                        id: "w9-2",
                        title: "连接池与事务优化",
                        detail: "理解连接池配置（HikariCP）、事务隔离级别、死锁检测与长事务的影响。",
                        resources: [
                            { title: "HikariCP 配置指南", url: "https://github.com/brettwooldridge/HikariCP/wiki" },
                            { title: "MySQL Transaction Isolation", url: "https://dev.mysql.com/doc/refman/8.0/en/innodb-transaction-isolation-levels.html" },
                            { title: "Deadlock 检测与预防", url: "https://dev.mysql.com/doc/refman/8.0/en/innodb-deadlocks.html" },
                        ],
                    },
                    {
                        id: "w9-3",
                        title: "读写分离：架构设计与一致性保证",
                        detail: "掌握主从复制架构、读写分离中间件（ProxySQL/ShardingSphere）、解决复制延迟导致的读不一致。",
                        resources: [
                            { title: "MySQL Replication", url: "https://dev.mysql.com/doc/refman/8.0/en/replication.html" },
                            { title: "ProxySQL 文档", url: "https://proxysql.com/documentation/" },
                            { title: "ShardingSphere 读写分离", url: "https://shardingsphere.apache.org/document/current/en/features/readwrite-splitting/" },
                        ],
                    },
                    {
                        id: "w9-4",
                        title: "垂直拆分与分布式查询",
                        detail: "理解按业务领域拆分数据库的策略、跨库查询的替代方案（冗余、异步同步）。",
                        resources: [
                            { title: "Database Sharding（Vitess）", url: "https://vitess.io/docs/concepts/shard/" },
                            { title: "垂直拆分 vs 水平拆分", url: "https://www.citusdata.com/blog/2018/01/10/sharding-in-plain-english/" },
                            { title: "跨库事务处理", url: "https://microservices.io/patterns/data/saga.html" },
                        ],
                    },
                ],
            },
            {
                id: "w10",
                title: "第 10 周：NoSQL 数据库选型",
                summary: "理解 NoSQL 数据库的分类与适用场景，建立多模型数据库的选型框架。",
                overview: "NoSQL 不是万能药，而是针对特定场景的最优解。本周从文档、键值、列族、图数据库的特点出发，建立「用正确的工具解决正确的问题」的选型思维。",
                keyPoints: [
                    "NoSQL 分类：键值（Redis）、文档（MongoDB）、列族（Cassandra）、图（Neo4j）的数据模型与查询能力。",
                    "选型因素：数据模型匹配度、一致性需求、扩展性、运维复杂度、团队熟悉度。",
                    "多模型混用：RDBMS + NoSQL 的混合架构，CQRS 模式下的读写分离存储。",
                ],
                lessons: [
                    {
                        id: "w10-1",
                        title: "键值存储：Redis 的数据结构与应用场景",
                        detail: "深入 Redis 的核心数据结构（String/Hash/List/Set/ZSet）、持久化策略、集群模式。",
                        resources: [
                            { title: "Redis Data Types", url: "https://redis.io/docs/latest/develop/data-types/" },
                            { title: "Redis Persistence", url: "https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/" },
                            { title: "Redis Cluster", url: "https://redis.io/docs/latest/operate/oss_and_stack/management/scaling/" },
                        ],
                    },
                    {
                        id: "w10-2",
                        title: "文档数据库：MongoDB 的设计模式",
                        detail: "掌握 MongoDB 的文档模型设计、嵌套 vs 引用、索引策略、分片与复制。",
                        resources: [
                            { title: "MongoDB Schema Design", url: "https://www.mongodb.com/docs/manual/core/data-modeling-introduction/" },
                            { title: "MongoDB Indexes", url: "https://www.mongodb.com/docs/manual/indexes/" },
                            { title: "MongoDB Sharding", url: "https://www.mongodb.com/docs/manual/sharding/" },
                        ],
                    },
                    {
                        id: "w10-3",
                        title: "列族存储：Cassandra 的分布式架构",
                        detail: "理解 Cassandra 的分区键设计、一致性级别配置、反规范化的数据建模。",
                        resources: [
                            { title: "Cassandra Architecture", url: "https://cassandra.apache.org/doc/latest/cassandra/architecture/overview.html" },
                            { title: "Cassandra Data Modeling", url: "https://cassandra.apache.org/doc/latest/cassandra/data_modeling/intro.html" },
                            { title: "Cassandra Consistency", url: "https://cassandra.apache.org/doc/latest/cassandra/architecture/dynamo.html" },
                        ],
                    },
                    {
                        id: "w10-4",
                        title: "图数据库与时序数据库：特定场景的最优解",
                        detail: "了解 Neo4j（图数据库）和 InfluxDB/TimescaleDB（时序数据库）的适用场景与查询模式。",
                        resources: [
                            { title: "Neo4j 图数据库", url: "https://neo4j.com/docs/getting-started/" },
                            { title: "InfluxDB 时序数据库", url: "https://docs.influxdata.com/influxdb/v2/" },
                            { title: "TimescaleDB", url: "https://docs.timescale.com/" },
                        ],
                    },
                ],
            },
            {
                id: "w11",
                title: "第 11 周：数据分片与复制策略",
                summary: "掌握数据水平扩展的核心技术：分片键设计、复制拓扑、再平衡策略。",
                overview: "当单机无法承载数据量或请求量时，分片（Sharding）是必经之路。本周从分片策略到复制拓扑，理解数据分布的权衡与挑战。",
                keyPoints: [
                    "分片策略：范围分片、哈希分片、目录分片的适用场景与热点问题。",
                    "分片键设计：高基数、均匀分布、查询亲和性，避免跨分片查询。",
                    "复制拓扑：单主、多主、无主复制的一致性与可用性权衡。",
                ],
                lessons: [
                    {
                        id: "w11-1",
                        title: "分片策略：范围、哈希与目录分片",
                        detail: "理解三种基础分片策略的原理、优缺点，以及如何选择合适的分片方式。",
                        resources: [
                            { title: "Sharding Patterns", url: "https://docs.microsoft.com/en-us/azure/architecture/patterns/sharding" },
                            { title: "MongoDB Sharding Strategies", url: "https://www.mongodb.com/docs/manual/core/sharding-shard-key/" },
                            { title: "Vitess Sharding", url: "https://vitess.io/docs/concepts/shard/" },
                        ],
                    },
                    {
                        id: "w11-2",
                        title: "分片键设计与热点避免",
                        detail: "掌握分片键的选择原则、组合分片键设计、热点数据的分散策略。",
                        resources: [
                            { title: "Shard Key Selection", url: "https://www.mongodb.com/docs/manual/core/sharding-choose-a-shard-key/" },
                            { title: "避免热点分片", url: "https://cloud.google.com/spanner/docs/schema-design#choosing_a_primary_key_to_prevent_hotspots" },
                            { title: "Cassandra Partition Key", url: "https://cassandra.apache.org/doc/latest/cassandra/data_modeling/data_modeling_physical.html" },
                        ],
                    },
                    {
                        id: "w11-3",
                        title: "复制拓扑：单主、多主与无主",
                        detail: "深入理解不同复制拓扑的一致性保证、冲突解决机制、适用场景。",
                        resources: [
                            { title: "Replication（DDIA）", url: "https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/" },
                            { title: "MySQL Group Replication", url: "https://dev.mysql.com/doc/refman/8.0/en/group-replication.html" },
                            { title: "CockroachDB Replication", url: "https://www.cockroachlabs.com/docs/stable/architecture/replication-layer.html" },
                        ],
                    },
                    {
                        id: "w11-4",
                        title: "再平衡与在线迁移",
                        detail: "掌握分片再平衡的触发条件、在线迁移的实现方式、数据一致性保证。",
                        resources: [
                            { title: "Consistent Hashing", url: "https://www.toptal.com/big-data/consistent-hashing" },
                            { title: "Vitess Resharding", url: "https://vitess.io/docs/user-guides/migration/move-tables/" },
                            { title: "Online Schema Migration", url: "https://github.com/github/gh-ost" },
                        ],
                    },
                ],
            },
            {
                id: "w12",
                title: "第 12 周：分布式事务与一致性方案",
                summary: "从两阶段提交到 Saga 模式，掌握跨服务数据一致性的实现方案。",
                overview: "微服务架构下，单体事务变成了分布式事务难题。本周从 2PC 的局限到 Saga/TCC 的实践，建立「最终一致性」的设计思维。",
                keyPoints: [
                    "2PC/3PC：两阶段提交的原理、阻塞问题、协调者单点故障。",
                    "Saga 模式：编排式 vs 协同式 Saga，补偿事务的设计原则。",
                    "TCC 模式：Try-Confirm-Cancel 的实现要点与适用场景。",
                ],
                lessons: [
                    {
                        id: "w12-1",
                        title: "两阶段提交：原理与局限",
                        detail: "深入理解 2PC 的 Prepare/Commit 流程、阻塞问题、协调者故障的影响。",
                        resources: [
                            { title: "Two-Phase Commit", url: "https://martinfowler.com/articles/patterns-of-distributed-systems/two-phase-commit.html" },
                            { title: "XA Transactions", url: "https://dev.mysql.com/doc/refman/8.0/en/xa.html" },
                            { title: "2PC 的问题", url: "https://www.the-paper-trail.org/post/2008-11-27-consensus-protocols-two-phase-commit/" },
                        ],
                    },
                    {
                        id: "w12-2",
                        title: "Saga 模式：长事务的补偿机制",
                        detail: "掌握 Saga 模式的两种实现方式（编排/协同），补偿事务的设计原则与失败处理。",
                        resources: [
                            { title: "Saga Pattern", url: "https://microservices.io/patterns/data/saga.html" },
                            { title: "Saga 论文", url: "https://www.cs.cornell.edu/andru/cs711/2002fa/reading/sagas.pdf" },
                            { title: "Temporal 工作流", url: "https://docs.temporal.io/workflows" },
                        ],
                    },
                    {
                        id: "w12-3",
                        title: "TCC 模式：柔性事务的实现",
                        detail: "理解 Try-Confirm-Cancel 的三阶段设计、空回滚/悬挂问题、幂等性保证。",
                        resources: [
                            { title: "TCC 模式详解", url: "https://seata.io/en-us/docs/dev/mode/tcc-mode" },
                            { title: "Seata 分布式事务", url: "https://seata.io/en-us/docs/overview/what-is-seata" },
                            { title: "TCC vs Saga 对比", url: "https://developers.redhat.com/blog/2018/10/01/patterns-for-distributed-transactions-within-a-microservices-architecture" },
                        ],
                    },
                    {
                        id: "w12-4",
                        title: "事件溯源与 Outbox 模式",
                        detail: "掌握事件溯源（Event Sourcing）的思想，以及 Transactional Outbox 解决消息与数据库一致性的方法。",
                        resources: [
                            { title: "Event Sourcing", url: "https://martinfowler.com/eaaDev/EventSourcing.html" },
                            { title: "Transactional Outbox", url: "https://microservices.io/patterns/data/transactional-outbox.html" },
                            { title: "Debezium CDC", url: "https://debezium.io/documentation/reference/stable/tutorial.html" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase4",
        title: "第四阶段：缓存与异步处理",
        duration: "第 13-16 周",
        goal: "掌握缓存架构与消息队列设计，构建高性能、高可用的异步处理系统。",
        weeks: [
            {
                id: "w13",
                title: "第 13 周：缓存架构与策略",
                summary: "从缓存模式到一致性问题，建立系统化的缓存设计思维。",
                overview: "缓存是性能优化的利器，但也是一致性问题的根源。本周从缓存模式到失效策略，理解「缓存是权衡的艺术」。",
                keyPoints: [
                    "缓存模式：Cache-Aside、Read-Through、Write-Through、Write-Behind 的适用场景。",
                    "缓存问题三剑客：缓存穿透、缓存击穿、缓存雪崩的成因与解决方案。",
                    "缓存一致性：延迟双删、订阅 Binlog、最终一致性的工程实践。",
                ],
                lessons: [
                    {
                        id: "w13-1",
                        title: "缓存模式：四种基础模式详解",
                        detail: "深入理解 Cache-Aside、Read-Through、Write-Through、Write-Behind 模式的实现与权衡。",
                        resources: [
                            { title: "Caching Patterns", url: "https://docs.microsoft.com/en-us/azure/architecture/patterns/cache-aside" },
                            { title: "Caching Strategies", url: "https://codeahoy.com/2017/08/11/caching-strategies-and-how-to-choose-the-right-one/" },
                            { title: "Redis Caching Patterns", url: "https://redis.io/docs/latest/develop/use/patterns/" },
                        ],
                    },
                    {
                        id: "w13-2",
                        title: "缓存穿透、击穿与雪崩",
                        detail: "掌握缓存三大问题的成因、识别方法与解决方案（布隆过滤器、互斥锁、随机 TTL）。",
                        resources: [
                            { title: "缓存问题详解", url: "https://blog.bytebytego.com/p/a-crash-course-in-caching-part-1" },
                            { title: "Bloom Filter", url: "https://en.wikipedia.org/wiki/Bloom_filter" },
                            { title: "Redis 分布式锁", url: "https://redis.io/docs/latest/develop/use/patterns/distributed-locks/" },
                        ],
                    },
                    {
                        id: "w13-3",
                        title: "缓存与数据库一致性",
                        detail: "理解缓存更新策略、延迟双删、基于 Binlog 的缓存更新，以及最终一致性的权衡。",
                        resources: [
                            { title: "Cache Invalidation", url: "https://martinfowler.com/bliki/TwoHardThings.html" },
                            { title: "延迟双删策略", url: "https://zhuanlan.zhihu.com/p/91058967" },
                            { title: "Canal 数据同步", url: "https://github.com/alibaba/canal" },
                        ],
                    },
                    {
                        id: "w13-4",
                        title: "缓存预热与淘汰策略",
                        detail: "掌握缓存预热的时机与方法、LRU/LFU/ARC 等淘汰算法、内存规划与监控。",
                        resources: [
                            { title: "Redis Eviction Policies", url: "https://redis.io/docs/latest/develop/reference/eviction/" },
                            { title: "LRU Cache 实现", url: "https://leetcode.com/problems/lru-cache/" },
                            { title: "Caffeine 缓存", url: "https://github.com/ben-manes/caffeine/wiki" },
                        ],
                    },
                ],
            },
            {
                id: "w14",
                title: "第 14 周：分布式缓存实战",
                summary: "从 Redis 集群到多级缓存，掌握大规模缓存系统的设计与运维。",
                overview: "当单机 Redis 无法满足需求时，如何构建分布式缓存系统？本周从 Redis 集群到本地+远程多级缓存，理解大规模缓存的架构演进。",
                keyPoints: [
                    "Redis 集群：Cluster 模式的数据分片、故障转移、客户端路由。",
                    "多级缓存：L1（本地）+ L2（分布式）的架构设计、一致性问题、失效广播。",
                    "缓存运维：热点 Key 检测、大 Key 优化、内存碎片整理、监控告警。",
                ],
                lessons: [
                    {
                        id: "w14-1",
                        title: "Redis Cluster：分片与故障转移",
                        detail: "深入理解 Redis Cluster 的 16384 槽位分片、Gossip 协议、主从切换机制。",
                        resources: [
                            { title: "Redis Cluster 规范", url: "https://redis.io/docs/latest/operate/oss_and_stack/reference/cluster-spec/" },
                            { title: "Redis Cluster 教程", url: "https://redis.io/docs/latest/operate/oss_and_stack/management/scaling/" },
                            { title: "Redis Sentinel vs Cluster", url: "https://redis.io/docs/latest/operate/oss_and_stack/management/sentinel/" },
                        ],
                    },
                    {
                        id: "w14-2",
                        title: "多级缓存架构设计",
                        detail: "掌握本地缓存（Caffeine）+ 分布式缓存（Redis）的多级架构、失效广播、一致性方案。",
                        resources: [
                            { title: "Multi-Level Caching", url: "https://engineering.fb.com/2013/06/25/core-data/tao-the-power-of-the-graph/" },
                            { title: "Caffeine + Redis 集成", url: "https://github.com/ben-manes/caffeine/wiki/Guava" },
                            { title: "JetCache 多级缓存", url: "https://github.com/alibaba/jetcache" },
                        ],
                    },
                    {
                        id: "w14-3",
                        title: "热点 Key 与大 Key 优化",
                        detail: "理解热点 Key 的识别与打散策略、大 Key 的拆分方法、异步删除优化。",
                        resources: [
                            { title: "Redis 热点 Key", url: "https://redis.io/docs/latest/operate/oss_and_stack/management/optimization/memory-optimization/" },
                            { title: "大 Key 优化", url: "https://redis.io/docs/latest/develop/use/memory-management/" },
                            { title: "Redis Memory Analysis", url: "https://redis.io/docs/latest/commands/memory-doctor/" },
                        ],
                    },
                    {
                        id: "w14-4",
                        title: "缓存监控与容量规划",
                        detail: "掌握 Redis 监控指标（命中率、内存、连接数）、慢查询分析、容量预估方法。",
                        resources: [
                            { title: "Redis INFO 命令", url: "https://redis.io/docs/latest/commands/info/" },
                            { title: "Redis SLOWLOG", url: "https://redis.io/docs/latest/commands/slowlog/" },
                            { title: "Redis 监控最佳实践", url: "https://redis.io/docs/latest/operate/oss_and_stack/management/optimization/latency/" },
                        ],
                    },
                ],
            },
            {
                id: "w15",
                title: "第 15 周：消息队列设计",
                summary: "从消息模型到投递语义，掌握消息队列的核心设计原则。",
                overview: "消息队列是分布式系统的解耦神器，但也带来了顺序性、幂等性、可靠性的挑战。本周从消息模型到投递语义，建立消息系统的设计框架。",
                keyPoints: [
                    "消息模型：点对点（Queue）vs 发布订阅（Topic）、Consumer Group 的作用。",
                    "投递语义：At-Most-Once、At-Least-Once、Exactly-Once 的实现与权衡。",
                    "顺序保证：全局有序 vs 分区有序、顺序消息的实现成本。",
                ],
                lessons: [
                    {
                        id: "w15-1",
                        title: "消息模型：Queue vs Topic",
                        detail: "理解点对点和发布订阅两种基础模型、Consumer Group 的负载均衡与消息分发机制。",
                        resources: [
                            { title: "Kafka 消息模型", url: "https://kafka.apache.org/documentation/#intro_concepts_and_terms" },
                            { title: "RabbitMQ 消息模型", url: "https://www.rabbitmq.com/tutorials#queue-tutorials" },
                            { title: "消息队列对比", url: "https://blog.bytebytego.com/p/kafka-vs-rabbitmq-vs-activemq-vs" },
                        ],
                    },
                    {
                        id: "w15-2",
                        title: "投递语义与幂等性设计",
                        detail: "掌握三种投递语义的实现原理、生产者/消费者幂等性设计、Exactly-Once 的代价。",
                        resources: [
                            { title: "Kafka Exactly-Once Semantics", url: "https://kafka.apache.org/documentation/#semantics" },
                            { title: "幂等性设计模式", url: "https://microservices.io/patterns/communication-style/idempotent-consumer.html" },
                            { title: "RocketMQ 事务消息", url: "https://rocketmq.apache.org/docs/featureBehavior/04transactionmessage/" },
                        ],
                    },
                    {
                        id: "w15-3",
                        title: "消息顺序性与分区策略",
                        detail: "理解全局有序与分区有序的权衡、分区策略设计、顺序消息的消费者实现。",
                        resources: [
                            { title: "Kafka Partitioning", url: "https://kafka.apache.org/documentation/#intro_topics" },
                            { title: "顺序消息实现", url: "https://rocketmq.apache.org/docs/featureBehavior/03fifomessage/" },
                            { title: "分区策略选择", url: "https://kafka.apache.org/documentation/#producerconfigs_partitioner.class" },
                        ],
                    },
                    {
                        id: "w15-4",
                        title: "消息积压与死信处理",
                        detail: "掌握消息积压的监控与处理、死信队列（DLQ）设计、消息重试策略。",
                        resources: [
                            { title: "Kafka Consumer Lag", url: "https://kafka.apache.org/documentation/#basic_ops_consumer_lag" },
                            { title: "RabbitMQ DLX", url: "https://www.rabbitmq.com/docs/dlx" },
                            { title: "消息重试策略", url: "https://rocketmq.apache.org/docs/featureBehavior/10consumerretrypolicy/" },
                        ],
                    },
                ],
            },
            {
                id: "w16",
                title: "第 16 周：事件驱动与流处理",
                summary: "从事件驱动架构到流处理引擎，掌握实时数据处理的设计模式。",
                overview: "事件驱动架构（EDA）是现代分布式系统的核心模式。本周从 EDA 原理到 Kafka Streams/Flink，理解实时数据流的处理范式。",
                keyPoints: [
                    "事件驱动架构：事件 vs 命令、事件溯源、CQRS 模式的适用场景。",
                    "流处理概念：有界 vs 无界流、时间窗口、水印与乱序处理。",
                    "流处理引擎：Kafka Streams vs Flink 的架构差异与选型考量。",
                ],
                lessons: [
                    {
                        id: "w16-1",
                        title: "事件驱动架构：解耦与响应式设计",
                        detail: "理解事件驱动架构的核心思想、事件 vs 命令的区别、EDA 与微服务的结合。",
                        resources: [
                            { title: "Event-Driven Architecture", url: "https://martinfowler.com/articles/201701-event-driven.html" },
                            { title: "CloudEvents 规范", url: "https://cloudevents.io/" },
                            { title: "EDA Patterns", url: "https://www.enterpriseintegrationpatterns.com/patterns/messaging/" },
                        ],
                    },
                    {
                        id: "w16-2",
                        title: "CQRS 与事件溯源",
                        detail: "掌握 CQRS（命令查询职责分离）的设计原则、事件溯源的实现方式与权衡。",
                        resources: [
                            { title: "CQRS Pattern", url: "https://martinfowler.com/bliki/CQRS.html" },
                            { title: "Event Sourcing", url: "https://martinfowler.com/eaaDev/EventSourcing.html" },
                            { title: "Axon Framework", url: "https://docs.axoniq.io/reference-guide/" },
                        ],
                    },
                    {
                        id: "w16-3",
                        title: "流处理基础：窗口与时间语义",
                        detail: "理解流处理的核心概念：事件时间 vs 处理时间、滚动/滑动/会话窗口、水印机制。",
                        resources: [
                            { title: "Kafka Streams 概念", url: "https://kafka.apache.org/documentation/streams/core-concepts" },
                            { title: "Flink 时间与窗口", url: "https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/time/" },
                            { title: "Watermarks 详解", url: "https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/time/#event-time-and-watermarks" },
                        ],
                    },
                    {
                        id: "w16-4",
                        title: "流处理引擎：Kafka Streams vs Flink",
                        detail: "对比 Kafka Streams 和 Apache Flink 的架构、API、适用场景与运维复杂度。",
                        resources: [
                            { title: "Kafka Streams 架构", url: "https://kafka.apache.org/documentation/streams/architecture" },
                            { title: "Apache Flink 架构", url: "https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/flink-architecture/" },
                            { title: "Kafka Streams vs Flink", url: "https://www.confluent.io/blog/apache-flink-vs-kafka-streams/" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase5",
        title: "第五阶段：API 设计与通信",
        duration: "第 17-20 周",
        goal: "掌握 API 设计最佳实践，理解不同通信协议的适用场景与权衡。",
        weeks: [
            {
                id: "w17",
                title: "第 17 周：RESTful API 设计",
                summary: "从 REST 原则到 API 版本管理，构建优雅、一致的 HTTP API。",
                overview: "REST 是 Web API 的事实标准，但RESTful并非简单的 URL 设计。本周从 REST 约束到实践准则，建立 API 设计的系统方法论。",
                keyPoints: [
                    "REST 约束：统一接口、无状态、可缓存、分层系统，理解 HATEOAS 的价值与成本。",
                    "资源设计：URL 命名、HTTP 方法语义、状态码选择、分页与过滤。",
                    "版本管理：URL vs Header vs Query，向后兼容与废弃策略。",
                ],
                lessons: [
                    {
                        id: "w17-1",
                        title: "REST 原则：约束与成熟度模型",
                        detail: "深入理解 REST 的六大约束、Richardson 成熟度模型、HATEOAS 的实际应用。",
                        resources: [
                            { title: "REST 论文（Fielding）", url: "https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm" },
                            { title: "Richardson Maturity Model", url: "https://martinfowler.com/articles/richardsonMaturityModel.html" },
                            { title: "RESTful Web Services", url: "https://restfulapi.net/" },
                        ],
                    },
                    {
                        id: "w17-2",
                        title: "资源建模与 URL 设计",
                        detail: "掌握资源导向的 URL 设计、集合与单个资源的表示、嵌套资源的权衡。",
                        resources: [
                            { title: "Google API Design Guide", url: "https://cloud.google.com/apis/design" },
                            { title: "Microsoft REST API Guidelines", url: "https://github.com/microsoft/api-guidelines/blob/vNext/Guidelines.md" },
                            { title: "Zalando RESTful API Guidelines", url: "https://opensource.zalando.com/restful-api-guidelines/" },
                        ],
                    },
                    {
                        id: "w17-3",
                        title: "HTTP 语义：方法、状态码与头部",
                        detail: "理解 HTTP 方法的幂等性与安全性、状态码选择、自定义头部的最佳实践。",
                        resources: [
                            { title: "HTTP Semantics（RFC 9110）", url: "https://www.rfc-editor.org/rfc/rfc9110" },
                            { title: "HTTP Status Codes", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status" },
                            { title: "HTTP Headers", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers" },
                        ],
                    },
                    {
                        id: "w17-4",
                        title: "API 版本管理与演进",
                        detail: "掌握 API 版本策略（URL/Header/Query）、向后兼容设计、废弃与迁移指南。",
                        resources: [
                            { title: "API Versioning", url: "https://www.postman.com/api-platform/api-versioning/" },
                            { title: "Stripe API Versioning", url: "https://stripe.com/docs/api/versioning" },
                            { title: "API Deprecation", url: "https://cloud.google.com/apis/design/design_patterns#versioning" },
                        ],
                    },
                ],
            },
            {
                id: "w18",
                title: "第 18 周：RPC 与 gRPC",
                summary: "理解 RPC 的设计哲学，掌握 gRPC 在微服务通信中的应用。",
                overview: "RPC 让远程调用像本地函数一样简单，但也隐藏了网络的复杂性。本周从 RPC 原理到 gRPC 实践，理解高性能服务间通信的设计。",
                keyPoints: [
                    "RPC vs REST：调用风格、强类型契约、性能差异，以及各自的适用场景。",
                    "gRPC 核心：Protocol Buffers、HTTP/2 多路复用、四种通信模式（Unary/Server/Client/Bidirectional Streaming）。",
                    "gRPC 实践：服务定义、错误处理、超时与重试、负载均衡。",
                ],
                lessons: [
                    {
                        id: "w18-1",
                        title: "RPC 原理：从本地调用到远程调用",
                        detail: "理解 RPC 的抽象目标、序列化/反序列化、存根生成、网络透明性的代价。",
                        resources: [
                            { title: "A Note on Distributed Computing", url: "https://scholar.harvard.edu/files/waldo/files/waldo-94.pdf" },
                            { title: "RPC vs REST", url: "https://blog.bytebytego.com/p/ep57-rest-api-vs-graphql-vs-grpc" },
                            { title: "Thrift Protocol", url: "https://thrift.apache.org/docs/" },
                        ],
                    },
                    {
                        id: "w18-2",
                        title: "gRPC 核心：Protocol Buffers 与 HTTP/2",
                        detail: "深入 gRPC 的技术栈：Protocol Buffers 编码、HTTP/2 多路复用与流控、gRPC 元数据。",
                        resources: [
                            { title: "gRPC 核心概念", url: "https://grpc.io/docs/what-is-grpc/core-concepts/" },
                            { title: "Protocol Buffers", url: "https://protobuf.dev/programming-guides/" },
                            { title: "HTTP/2 与 gRPC", url: "https://grpc.io/blog/grpc-load-balancing/#http2-with-grpc" },
                        ],
                    },
                    {
                        id: "w18-3",
                        title: "gRPC 四种通信模式",
                        detail: "掌握 Unary、Server Streaming、Client Streaming、Bidirectional Streaming 的使用场景与实现。",
                        resources: [
                            { title: "gRPC Streaming", url: "https://grpc.io/docs/what-is-grpc/core-concepts/#rpc-life-cycle" },
                            { title: "gRPC 官方示例", url: "https://github.com/grpc/grpc/tree/master/examples" },
                            { title: "Streaming Best Practices", url: "https://grpc.io/docs/guides/performance/" },
                        ],
                    },
                    {
                        id: "w18-4",
                        title: "gRPC 生产实践：错误处理与负载均衡",
                        detail: "理解 gRPC 状态码、Deadline/Timeout 设置、客户端负载均衡、健康检查集成。",
                        resources: [
                            { title: "gRPC Error Handling", url: "https://grpc.io/docs/guides/error/" },
                            { title: "gRPC Load Balancing", url: "https://grpc.io/blog/grpc-load-balancing/" },
                            { title: "gRPC Health Checking", url: "https://grpc.io/docs/guides/health-checking/" },
                        ],
                    },
                ],
            },
            {
                id: "w19",
                title: "第 19 周：GraphQL 与实时通信",
                summary: "掌握 GraphQL 的查询语言与类型系统，理解 WebSocket 实时通信的设计。",
                overview: "GraphQL 解决了 REST 的过度/不足获取问题，WebSocket 提供了全双工实时通信。本周从 GraphQL 到 WebSocket/SSE，扩展 API 设计的工具箱。",
                keyPoints: [
                    "GraphQL 核心：Schema/Query/Mutation/Subscription、类型系统、解析器架构。",
                    "GraphQL 挑战：N+1 查询问题（DataLoader）、安全性（深度限制、复杂度分析）。",
                    "实时通信：WebSocket vs SSE vs Long Polling 的适用场景与实现。",
                ],
                lessons: [
                    {
                        id: "w19-1",
                        title: "GraphQL 基础：Schema 与类型系统",
                        detail: "掌握 GraphQL 的 Schema Definition Language、Query/Mutation/Subscription 操作、类型系统设计。",
                        resources: [
                            { title: "GraphQL 官方文档", url: "https://graphql.org/learn/" },
                            { title: "GraphQL Schema Design", url: "https://graphql.org/learn/schema/" },
                            { title: "GraphQL 最佳实践", url: "https://graphql.org/learn/best-practices/" },
                        ],
                    },
                    {
                        id: "w19-2",
                        title: "GraphQL 性能优化与安全",
                        detail: "理解 N+1 问题与 DataLoader、查询复杂度分析、深度限制、Persisted Queries。",
                        resources: [
                            { title: "DataLoader", url: "https://github.com/graphql/dataloader" },
                            { title: "GraphQL Security", url: "https://graphql.org/learn/security/" },
                            { title: "Persisted Queries", url: "https://www.apollographql.com/docs/apollo-server/performance/apq/" },
                        ],
                    },
                    {
                        id: "w19-3",
                        title: "WebSocket：全双工实时通信",
                        detail: "理解 WebSocket 协议、连接管理、心跳保活、与 HTTP 长轮询/SSE 的对比。",
                        resources: [
                            { title: "WebSocket RFC 6455", url: "https://datatracker.ietf.org/doc/html/rfc6455" },
                            { title: "WebSocket vs SSE", url: "https://ably.com/blog/websockets-vs-sse" },
                            { title: "Socket.IO", url: "https://socket.io/docs/v4/" },
                        ],
                    },
                    {
                        id: "w19-4",
                        title: "实时系统设计：聊天、通知与协作",
                        detail: "从设计角度分析实时聊天、推送通知、协作编辑等场景的技术选型与架构。",
                        resources: [
                            { title: "设计实时聊天系统", url: "https://blog.bytebytego.com/p/design-a-chat-system" },
                            { title: "Push Notification Architecture", url: "https://firebase.google.com/docs/cloud-messaging/concept-options" },
                            { title: "Operational Transformation", url: "https://en.wikipedia.org/wiki/Operational_transformation" },
                        ],
                    },
                ],
            },
            {
                id: "w20",
                title: "第 20 周：API 安全与限流",
                summary: "从认证授权到限流熔断，构建安全、稳定的 API 服务。",
                overview: "API 是系统的门户，也是攻击的入口。本周从身份认证到限流保护，建立 API 安全防护的完整体系。",
                keyPoints: [
                    "认证授权：OAuth 2.0、JWT、API Key 的适用场景与安全考量。",
                    "限流算法：令牌桶、漏桶、滑动窗口、分布式限流的实现。",
                    "API 安全：OWASP API Security Top 10、输入验证、CORS、HTTPS。",
                ],
                lessons: [
                    {
                        id: "w20-1",
                        title: "API 认证：OAuth 2.0 与 JWT",
                        detail: "深入理解 OAuth 2.0 授权流程、JWT 结构与验证、刷新令牌策略、无状态认证的权衡。",
                        resources: [
                            { title: "OAuth 2.0 RFC 6749", url: "https://datatracker.ietf.org/doc/html/rfc6749" },
                            { title: "JWT.io", url: "https://jwt.io/introduction" },
                            { title: "OAuth 2.0 最佳实践", url: "https://oauth.net/2/oauth-best-practice/" },
                        ],
                    },
                    {
                        id: "w20-2",
                        title: "限流算法：令牌桶、漏桶与滑动窗口",
                        detail: "掌握主流限流算法的原理与实现、分布式限流的挑战与方案（Redis + Lua）。",
                        resources: [
                            { title: "Rate Limiting Algorithms", url: "https://blog.bytebytego.com/p/rate-limiting-fundamentals" },
                            { title: "Redis Rate Limiting", url: "https://redis.io/glossary/rate-limiting/" },
                            { title: "Envoy Rate Limiting", url: "https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/other_features/global_rate_limiting" },
                        ],
                    },
                    {
                        id: "w20-3",
                        title: "OWASP API Security Top 10",
                        detail: "了解 API 安全的常见漏洞（BOLA、注入、配置错误）及防护措施。",
                        resources: [
                            { title: "OWASP API Security Top 10", url: "https://owasp.org/API-Security/editions/2023/en/0x00-header/" },
                            { title: "API Security Best Practices", url: "https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html" },
                            { title: "CORS 配置", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" },
                        ],
                    },
                    {
                        id: "w20-4",
                        title: "API 网关安全：WAF、Bot 防护与审计",
                        detail: "理解 API 网关的安全能力：Web 应用防火墙、Bot 检测、请求签名、审计日志。",
                        resources: [
                            { title: "AWS WAF", url: "https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html" },
                            { title: "Cloudflare Bot Management", url: "https://developers.cloudflare.com/bots/" },
                            { title: "API Audit Logging", url: "https://cloud.google.com/api-gateway/docs/audit-logging" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase6",
        title: "第六阶段：可观测性与案例实战",
        duration: "第 21-24 周",
        goal: "掌握可观测性体系设计，通过经典案例巩固系统设计能力。",
        weeks: [
            {
                id: "w21",
                title: "第 21 周：监控系统设计",
                summary: "从指标采集到告警治理，构建完整的监控体系。",
                overview: "监控是系统的眼睛，没有监控的系统是在盲飞。本周从指标体系到告警设计，建立生产级监控的完整视角。",
                keyPoints: [
                    "指标类型：Counter、Gauge、Histogram、Summary 的语义与使用场景。",
                    "监控架构：Pull vs Push、时序数据库、指标聚合与降采样。",
                    "告警设计：告警规则、分级与路由、On-Call 轮转、避免告警疲劳。",
                ],
                lessons: [
                    {
                        id: "w21-1",
                        title: "指标体系：四种基础指标类型",
                        detail: "深入理解 Counter、Gauge、Histogram、Summary 的语义、使用场景与实现差异。",
                        resources: [
                            { title: "Prometheus Metric Types", url: "https://prometheus.io/docs/concepts/metric_types/" },
                            { title: "Histogram vs Summary", url: "https://prometheus.io/docs/practices/histograms/" },
                            { title: "RED/USE 方法", url: "https://grafana.com/blog/2018/08/02/the-red-method-how-to-instrument-your-services/" },
                        ],
                    },
                    {
                        id: "w21-2",
                        title: "监控架构：采集、存储与查询",
                        detail: "理解 Prometheus 架构、远程存储（Thanos/Cortex）、PromQL 查询优化。",
                        resources: [
                            { title: "Prometheus Architecture", url: "https://prometheus.io/docs/introduction/overview/#architecture" },
                            { title: "Thanos 架构", url: "https://thanos.io/tip/thanos/design.md/" },
                            { title: "PromQL 性能优化", url: "https://prometheus.io/docs/practices/rules/" },
                        ],
                    },
                    {
                        id: "w21-3",
                        title: "告警设计：规则、路由与降噪",
                        detail: "掌握告警规则设计、Alertmanager 路由与分组、告警抑制与静默、On-Call 最佳实践。",
                        resources: [
                            { title: "Alertmanager 配置", url: "https://prometheus.io/docs/alerting/latest/configuration/" },
                            { title: "告警最佳实践", url: "https://sre.google/sre-book/practical-alerting/" },
                            { title: "PagerDuty On-Call", url: "https://www.pagerduty.com/resources/learn/call-rotations-schedules/" },
                        ],
                    },
                    {
                        id: "w21-4",
                        title: "可视化与 Dashboard 设计",
                        detail: "理解 Grafana Dashboard 设计原则、变量与模板、告警集成与 SLO 仪表盘。",
                        resources: [
                            { title: "Grafana Dashboard 最佳实践", url: "https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/best-practices/" },
                            { title: "SLO Dashboard", url: "https://sre.google/workbook/alerting-on-slos/" },
                            { title: "Grafana 变量", url: "https://grafana.com/docs/grafana/latest/dashboards/variables/" },
                        ],
                    },
                ],
            },
            {
                id: "w22",
                title: "第 22 周：日志与分布式追踪",
                summary: "从结构化日志到端到端追踪，补齐可观测性的最后两块拼图。",
                overview: "指标告诉你有问题，日志和追踪告诉你问题在哪。本周从日志采集到分布式追踪，构建完整的故障定位能力。",
                keyPoints: [
                    "日志设计：结构化日志、日志级别、采样策略、敏感信息脱敏。",
                    "日志架构：ELK/PLG（Promtail-Loki-Grafana）栈的架构与选型。",
                    "分布式追踪：Trace/Span 模型、Context Propagation、采样策略与性能影响。",
                ],
                lessons: [
                    {
                        id: "w22-1",
                        title: "结构化日志：从文本到可查询",
                        detail: "掌握结构化日志（JSON）的设计、日志级别使用、Correlation ID 关联、敏感信息处理。",
                        resources: [
                            { title: "Structured Logging", url: "https://www.honeycomb.io/blog/structured-logging-vs-unstructured-logging" },
                            { title: "Log Levels Best Practices", url: "https://sematext.com/blog/logging-levels/" },
                            { title: "日志脱敏", url: "https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html" },
                        ],
                    },
                    {
                        id: "w22-2",
                        title: "日志架构：ELK vs PLG 选型",
                        detail: "对比 Elasticsearch/Logstash/Kibana 与 Promtail/Loki/Grafana 的架构、成本与适用场景。",
                        resources: [
                            { title: "Loki Architecture", url: "https://grafana.com/docs/loki/latest/get-started/architecture/" },
                            { title: "Elasticsearch 架构", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/scalability.html" },
                            { title: "ELK vs PLG 对比", url: "https://grafana.com/blog/2020/05/15/how-loki-compares-to-the-elasticsearch-elastic-ecs-stack/" },
                        ],
                    },
                    {
                        id: "w22-3",
                        title: "分布式追踪：OpenTelemetry 与 Jaeger",
                        detail: "理解分布式追踪的 Trace/Span 模型、OpenTelemetry SDK 集成、Jaeger 部署与查询。",
                        resources: [
                            { title: "OpenTelemetry 概念", url: "https://opentelemetry.io/docs/concepts/signals/traces/" },
                            { title: "Jaeger Architecture", url: "https://www.jaegertracing.io/docs/latest/architecture/" },
                            { title: "Trace Context Propagation", url: "https://www.w3.org/TR/trace-context/" },
                        ],
                    },
                    {
                        id: "w22-4",
                        title: "可观测性关联：Metrics-Logs-Traces 统一",
                        detail: "掌握三大信号的关联方法、Exemplars、统一查询界面（Grafana）的配置。",
                        resources: [
                            { title: "Correlating Signals", url: "https://grafana.com/docs/grafana/latest/explore/correlations/" },
                            { title: "Prometheus Exemplars", url: "https://prometheus.io/docs/prometheus/latest/feature_flags/#exemplars-storage" },
                            { title: "Grafana Tempo", url: "https://grafana.com/docs/tempo/latest/" },
                        ],
                    },
                ],
            },
            {
                id: "w23",
                title: "第 23 周：经典系统设计案例（上）",
                summary: "通过 URL 缩短、Pastebin、限流器等经典案例，练习系统设计方法论。",
                overview: "理论需要实践检验。本周通过经典系统设计题目，练习从需求分析到架构设计的完整流程，建立设计直觉。",
                keyPoints: [
                    "设计 URL 缩短服务：哈希/自增 ID、短链冲突处理、统计分析、缓存策略。",
                    "设计 Pastebin：存储设计、过期清理、访问控制、匿名 vs 用户内容。",
                    "设计分布式限流器：限流算法选择、分布式协调、降级策略、监控告警。",
                ],
                lessons: [
                    {
                        id: "w23-1",
                        title: "设计 URL 缩短服务（TinyURL）",
                        detail: "从需求分析到架构设计，覆盖短链生成、存储选型、缓存策略、统计分析。",
                        resources: [
                            { title: "Design TinyURL", url: "https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/pastebin/README.md" },
                            { title: "短链服务设计", url: "https://blog.bytebytego.com/p/design-a-url-shortener" },
                            { title: "Base62 编码", url: "https://en.wikipedia.org/wiki/Base62" },
                        ],
                    },
                    {
                        id: "w23-2",
                        title: "设计 Pastebin",
                        detail: "分析 Pastebin 的功能需求，设计存储方案、过期清理、访问控制。",
                        resources: [
                            { title: "Design Pastebin", url: "https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/pastebin/README.md" },
                            { title: "对象存储设计", url: "https://aws.amazon.com/s3/storage-classes/" },
                            { title: "TTL 过期清理", url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-expire-general-considerations.html" },
                        ],
                    },
                    {
                        id: "w23-3",
                        title: "设计分布式限流器",
                        detail: "设计支持多租户、多维度的分布式限流系统，考虑算法选择、存储方案、降级策略。",
                        resources: [
                            { title: "Design Rate Limiter", url: "https://blog.bytebytego.com/p/design-a-rate-limiter" },
                            { title: "Stripe Rate Limiting", url: "https://stripe.com/blog/rate-limiters" },
                            { title: "Cloudflare Rate Limiting", url: "https://blog.cloudflare.com/counting-things-a-lot-of-different-things/" },
                        ],
                    },
                    {
                        id: "w23-4",
                        title: "设计 Key-Value 存储",
                        detail: "设计分布式 KV 存储系统，覆盖数据分片、复制、一致性、故障恢复。",
                        resources: [
                            { title: "Design Key-Value Store", url: "https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/query_cache/README.md" },
                            { title: "Dynamo Paper", url: "https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf" },
                            { title: "Bitcask 存储模型", url: "https://riak.com/assets/bitcask-intro.pdf" },
                        ],
                    },
                ],
            },
            {
                id: "w24",
                title: "第 24 周：系统设计面试与综合演练",
                summary: "通过复杂系统设计案例和面试模拟，检验和巩固所学知识。",
                overview: "最后一周，通过 Twitter Feed、Instagram、分布式消息队列等复杂案例，综合运用所学知识，并进行面试模拟与回顾。",
                keyPoints: [
                    "复杂案例：Twitter 时间线、Instagram、视频流媒体的架构设计。",
                    "面试技巧：时间管理、沟通技巧、处理模糊需求、展示权衡思维。",
                    "知识回顾：查漏补缺、建立个人知识图谱、持续学习路径。",
                ],
                lessons: [
                    {
                        id: "w24-1",
                        title: "设计 Twitter 时间线",
                        detail: "设计推送/拉取混合的 Feed 系统，覆盖关注关系、Fanout、缓存、排序。",
                        resources: [
                            { title: "Design Twitter", url: "https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/twitter/README.md" },
                            { title: "Twitter 时间线设计", url: "https://blog.bytebytego.com/p/design-a-news-feed-system" },
                            { title: "Fanout 策略", url: "https://instagram-engineering.com/what-powers-instagram-hundreds-of-instances-dozens-of-technologies-adf2e22da2ad" },
                        ],
                    },
                    {
                        id: "w24-2",
                        title: "设计 Instagram/图片分享服务",
                        detail: "设计大规模图片上传、存储、CDN 分发、Feed 生成的完整架构。",
                        resources: [
                            { title: "Design Instagram", url: "https://www.educative.io/courses/grokking-modern-system-design-interview-for-engineers-managers/design-instagram" },
                            { title: "Instagram Engineering Blog", url: "https://instagram-engineering.com/" },
                            { title: "图片处理流水线", url: "https://netflixtechblog.com/high-quality-video-encoding-at-scale-d159db052746" },
                        ],
                    },
                    {
                        id: "w24-3",
                        title: "设计分布式消息队列",
                        detail: "设计类 Kafka 的分布式消息系统，覆盖分区、复制、消费者组、Exactly-Once 语义。",
                        resources: [
                            { title: "Design Message Queue", url: "https://blog.bytebytego.com/p/design-a-message-queue-like-kafka" },
                            { title: "Kafka 架构深度解析", url: "https://kafka.apache.org/documentation/#design" },
                            { title: "Pulsar vs Kafka", url: "https://streamnative.io/blog/pulsar-vs-kafka-comparison" },
                        ],
                    },
                    {
                        id: "w24-4",
                        title: "系统设计面试技巧与职业发展",
                        detail: "总结系统设计面试的框架、常见陷阱、沟通技巧，以及持续学习的路径。",
                        resources: [
                            { title: "System Design Interview Tips", url: "https://www.tryexponent.com/blog/system-design-interview-tips" },
                            { title: "System Design Template", url: "https://leetcode.com/discuss/career/229177/My-System-Design-Template" },
                            { title: "Engineering Blogs 合集", url: "https://github.com/kilimchoi/engineering-blogs" },
                        ],
                    },
                ],
            },
        ],
    },
]

export const systemDesignKnowledgeCards: KnowledgeCard[] = [
    {
        id: "card1",
        title: "CAP 定理的真正含义",
        summary: "CAP 不是让你三选二，而是在网络分区发生时，必须在一致性和可用性之间选择。",
        points: [
            "网络分区（P）不是可选项，在分布式系统中必然会发生。",
            "CA 系统只存在于单机或永不分区的网络中，实际分布式系统都是 CP 或 AP。",
            "PACELC 更实用：正常情况下要在延迟（L）和一致性（C）之间权衡。",
        ],
        practice: "分析你使用的数据库（如 MySQL、MongoDB、Cassandra）在 CAP/PACELC 中的定位，以及它们的配置如何影响这一定位。",
    },
    {
        id: "card2",
        title: "一致性模型光谱",
        summary: "从线性一致性到最终一致性，每个级别都有明确的语义保证和性能代价。",
        points: [
            "线性一致性：最强保证，所有操作看起来像在单一时间点发生，但延迟高。",
            "顺序一致性：所有进程看到相同的操作顺序，但不一定是实时的。",
            "最终一致性：给足够时间，所有副本最终收敛，适合高可用场景。",
        ],
        practice: "用 Jepsen 的一致性模型图理解不同数据库的保证级别，并思考你的业务对一致性的真实需求。",
    },
    {
        id: "card3",
        title: "负载均衡核心算法",
        summary: "选择正确的负载均衡算法取决于后端服务的特性和请求的特点。",
        points: [
            "轮询/加权轮询：简单高效，适合无状态服务。",
            "最少连接：适合请求处理时间差异大的场景。",
            "一致性哈希：适合有状态服务或缓存场景，减少节点变更的影响。",
        ],
        practice: "在本地搭建 HAProxy 或 NGINX，配置不同负载均衡算法，用压测工具观察流量分布。",
    },
    {
        id: "card4",
        title: "缓存的权衡艺术",
        summary: "缓存提升性能的同时引入一致性问题，关键在于理解缓存穿透/击穿/雪崩三剑客。",
        points: [
            "缓存穿透：查询不存在的数据，解决方案是布隆过滤器或缓存空值。",
            "缓存击穿：热点 Key 过期瞬间大量请求打到 DB，解决方案是互斥锁或永不过期。",
            "缓存雪崩：大量 Key 同时过期，解决方案是随机化 TTL 或预热。",
        ],
        practice: "在 Redis 中模拟缓存击穿场景，实现基于 SETNX 的分布式锁解决方案。",
    },
    {
        id: "card5",
        title: "消息队列投递语义",
        summary: "At-Most-Once、At-Least-Once、Exactly-Once 代表三种不同的可靠性保证。",
        points: [
            "At-Most-Once：可能丢消息，但不会重复，适合日志等可丢失场景。",
            "At-Least-Once：不丢消息但可能重复，需要消费者幂等设计。",
            "Exactly-Once：最难实现，通常需要生产者+消费者+存储三方协调。",
        ],
        practice: "在 Kafka 中配置不同的 acks 和 enable.idempotence，观察消息投递行为的变化。",
    },
    {
        id: "card6",
        title: "分片策略选择",
        summary: "数据分片是水平扩展的关键，分片键设计决定了系统的性能上限。",
        points: [
            "范围分片：支持范围查询，但易产生热点（如按时间分片）。",
            "哈希分片：数据分布均匀，但不支持范围查询。",
            "分片键原则：高基数、均匀分布、查询亲和性，避免跨分片查询。",
        ],
        practice: "设计一个订单系统的分片方案，考虑按用户 ID 还是订单 ID 分片的权衡。",
    },
    {
        id: "card7",
        title: "分布式事务模式",
        summary: "微服务架构下，分布式事务有多种实现模式，各有适用场景。",
        points: [
            "2PC：强一致但阻塞，适合对一致性要求极高的场景。",
            "Saga：通过补偿实现最终一致，适合长事务和微服务场景。",
            "TCC：Try-Confirm-Cancel 三阶段，适合金融等需要明确预留资源的场景。",
        ],
        practice: "用 Saga 模式设计一个电商下单流程，包含库存扣减、订单创建、支付扣款三个步骤的补偿逻辑。",
    },
    {
        id: "card8",
        title: "API 设计原则",
        summary: "好的 API 设计是可预测的、一致的、自描述的。",
        points: [
            "资源导向：URL 表示资源，HTTP 方法表示操作（GET 读、POST 创建、PUT 替换、PATCH 更新、DELETE 删除）。",
            "版本管理：URL 路径版本（/v1/）vs Header 版本，各有优劣。",
            "错误处理：使用标准 HTTP 状态码，错误响应包含 code、message、details。",
        ],
        practice: "审查你项目中的 API 设计，对照 Google/Microsoft API 设计指南找出改进点。",
    },
    {
        id: "card9",
        title: "可观测性三支柱",
        summary: "Metrics 看趋势，Logs 查细节，Traces 找瓶颈——三者缺一不可。",
        points: [
            "Metrics：回答「系统现在怎么样」，用于告警和趋势分析。",
            "Logs：回答「发生了什么」，用于调试和审计。",
            "Traces：回答「请求经过了哪里」，用于定位分布式系统的性能瓶颈。",
        ],
        practice: "给一个微服务应用添加完整的可观测性：Prometheus 指标、结构化日志、OpenTelemetry 追踪。",
    },
    {
        id: "card10",
        title: "系统设计面试框架",
        summary: "系统设计面试不是背诵答案，而是展示结构化思维和权衡能力。",
        points: [
            "需求澄清：问清楚功能需求、非功能需求、约束条件，量化系统规模。",
            "高层设计：画出核心组件和数据流，不要过早陷入细节。",
            "深入设计：选择 1-2 个关键组件深入，展示技术深度和权衡思维。",
            "扩展讨论：主动讨论可扩展性、可用性、监控、安全等横切关注点。",
        ],
        practice: "找一个系统设计题目，用 40 分钟模拟面试，录音回放找改进点。",
    },
]

export const systemDesignExamQuestions: QuizQuestion[] = [
    {
        id: "q1",
        question: "在 CAP 定理中，当网络分区发生时，系统必须在哪两者之间选择？",
        options: ["一致性与分区容错性", "可用性与分区容错性", "一致性与可用性", "性能与可用性"],
        answer: 2,
        rationale: "CAP 定理指出，当网络分区（P）发生时，系统必须在一致性（C）和可用性（A）之间选择。",
    },
    {
        id: "q2",
        question: "以下哪个一致性级别提供最强的保证？",
        options: ["最终一致性", "因果一致性", "线性一致性", "顺序一致性"],
        answer: 2,
        rationale: "线性一致性（Linearizability）是最强的一致性保证，所有操作看起来像在单一时间点原子执行。",
    },
    {
        id: "q3",
        question: "Raft 共识算法中，一个集群需要多少节点才能容忍 2 个节点故障？",
        options: ["3 个", "4 个", "5 个", "6 个"],
        answer: 2,
        rationale: "Raft 需要多数派（Quorum）才能工作。要容忍 2 个故障，需要 2*2+1=5 个节点。",
    },
    {
        id: "q4",
        question: "以下哪种负载均衡算法最适合有状态的会话场景？",
        options: ["轮询", "最少连接", "一致性哈希", "随机"],
        answer: 2,
        rationale: "一致性哈希可以将同一用户的请求路由到同一后端，适合有状态服务。",
    },
    {
        id: "q5",
        question: "CDN 的 Pull 模式是指？",
        options: ["边缘节点主动从源站拉取内容", "首次请求时从源站拉取并缓存", "定时从源站同步内容", "用户主动请求源站"],
        answer: 1,
        rationale: "Pull 模式下，CDN 在首次收到用户请求时从源站拉取内容并缓存。",
    },
    {
        id: "q6",
        question: "缓存穿透的最佳解决方案是？",
        options: ["增加缓存过期时间", "使用布隆过滤器或缓存空值", "使用分布式锁", "随机化 TTL"],
        answer: 1,
        rationale: "缓存穿透是查询不存在的数据，布隆过滤器可以快速判断数据是否存在，缓存空值可以阻止重复查询。",
    },
    {
        id: "q7",
        question: "Redis Cluster 使用多少个槽位进行数据分片？",
        options: ["1024", "4096", "16384", "65536"],
        answer: 2,
        rationale: "Redis Cluster 使用 16384 个槽位（slot）进行数据分片。",
    },
    {
        id: "q8",
        question: "Saga 模式与 2PC 的主要区别是？",
        options: ["Saga 是同步的，2PC 是异步的", "Saga 通过补偿实现最终一致，2PC 通过锁实现强一致", "Saga 需要协调者，2PC 不需要", "Saga 只能用于单机，2PC 用于分布式"],
        answer: 1,
        rationale: "2PC 通过锁实现强一致性但会阻塞，Saga 通过补偿事务实现最终一致性，更适合微服务场景。",
    },
    {
        id: "q9",
        question: "Kafka 的 At-Least-Once 语义需要消费者如何处理？",
        options: ["忽略重复消息", "实现幂等消费", "使用事务", "启用压缩"],
        answer: 1,
        rationale: "At-Least-Once 可能重复投递消息，消费者需要实现幂等性来处理重复消息。",
    },
    {
        id: "q10",
        question: "以下哪个不是 gRPC 支持的通信模式？",
        options: ["Unary RPC", "Server Streaming", "Client Streaming", "Publish-Subscribe"],
        answer: 3,
        rationale: "gRPC 支持四种模式：Unary、Server Streaming、Client Streaming、Bidirectional Streaming，不支持 Pub/Sub。",
    },
    {
        id: "q11",
        question: "OAuth 2.0 中，Access Token 过期后应该怎么做？",
        options: ["重新登录", "使用 Refresh Token 获取新的 Access Token", "延长 Access Token 有效期", "缓存 Access Token"],
        answer: 1,
        rationale: "OAuth 2.0 使用 Refresh Token 来获取新的 Access Token，避免用户频繁登录。",
    },
    {
        id: "q12",
        question: "令牌桶算法与漏桶算法的主要区别是？",
        options: ["令牌桶允许突发流量，漏桶输出恒定速率", "漏桶允许突发流量，令牌桶输出恒定速率", "两者完全相同", "令牌桶用于限流，漏桶用于整形"],
        answer: 0,
        rationale: "令牌桶允许一定程度的突发流量（桶中有令牌时），漏桶以恒定速率输出，更适合流量整形。",
    },
    {
        id: "q13",
        question: "数据库读写分离架构中，如何解决复制延迟导致的读不一致？",
        options: ["增加从库数量", "使用会话一致性（读自己的写）", "只使用主库", "缩短 TTL"],
        answer: 1,
        rationale: "会话一致性确保同一用户的写操作后的读请求路由到主库或已同步的从库。",
    },
    {
        id: "q14",
        question: "以下哪种数据库最适合存储社交关系（关注/粉丝）数据？",
        options: ["MySQL", "MongoDB", "Redis", "Neo4j"],
        answer: 3,
        rationale: "Neo4j 是图数据库，天然适合存储和查询社交关系等图结构数据。",
    },
    {
        id: "q15",
        question: "Prometheus 的指标采集模型是？",
        options: ["Push 模型", "Pull 模型", "Pub/Sub 模型", "Request/Response 模型"],
        answer: 1,
        rationale: "Prometheus 使用 Pull 模型，主动抓取目标的 /metrics 端点。",
    },
    {
        id: "q16",
        question: "分布式追踪中，Span 代表什么？",
        options: ["整个请求链路", "单个服务的处理过程", "网络延迟", "错误信息"],
        answer: 1,
        rationale: "Span 代表一个工作单元，通常是单个服务的处理过程。多个 Span 组成一个 Trace。",
    },
    {
        id: "q17",
        question: "设计 URL 缩短服务时，以下哪种方案可以避免短链冲突？",
        options: ["纯随机生成", "使用自增 ID + Base62 编码", "MD5 哈希截断", "用户自定义"],
        answer: 1,
        rationale: "自增 ID + Base62 编码可以保证唯一性，纯随机和哈希截断都可能冲突。",
    },
    {
        id: "q18",
        question: "Twitter 时间线的 Fanout-on-Write 策略适合？",
        options: ["粉丝数少的普通用户", "粉丝数百万的大 V", "所有用户", "只读用户"],
        answer: 0,
        rationale: "Fanout-on-Write 在发推时写入所有粉丝的时间线，适合粉丝数少的用户。大 V 应该用 Fanout-on-Read。",
    },
    {
        id: "q19",
        question: "CQRS 模式的核心思想是？",
        options: ["读写使用相同的数据模型", "命令和查询分离，可以使用不同的数据存储", "所有操作都是命令", "所有操作都是查询"],
        answer: 1,
        rationale: "CQRS 将命令（写）和查询（读）分离，允许针对不同需求使用不同的数据模型和存储。",
    },
    {
        id: "q20",
        question: "以下哪个是 HTTP/2 相比 HTTP/1.1 的主要改进？",
        options: ["支持 HTTPS", "多路复用", "支持 POST 请求", "支持 Cookie"],
        answer: 1,
        rationale: "HTTP/2 的多路复用允许在单一 TCP 连接上并行发送多个请求/响应，解决了队头阻塞问题。",
    },
    {
        id: "q21",
        question: "API 网关的主要职责不包括？",
        options: ["请求路由", "身份认证", "数据持久化", "限流熔断"],
        answer: 2,
        rationale: "API 网关负责路由、认证、限流等横切关注点，数据持久化是后端服务的职责。",
    },
    {
        id: "q22",
        question: "SLO（服务级别目标）通常如何定义？",
        options: ["系统架构图", "可量化的可用性目标，如 99.9% 可用性", "代码行数", "团队人数"],
        answer: 1,
        rationale: "SLO 是可量化的目标，如「99.9% 的请求在 200ms 内响应」。",
    },
    {
        id: "q23",
        question: "Transactional Outbox 模式解决什么问题？",
        options: ["缓存一致性", "数据库与消息队列的一致性", "负载均衡", "身份认证"],
        answer: 1,
        rationale: "Transactional Outbox 通过将消息写入本地表，再由后台任务投递，解决数据库事务与消息发送的一致性。",
    },
    {
        id: "q24",
        question: "流处理中，Watermark 的作用是？",
        options: ["标记数据来源", "处理乱序事件，定义何时触发窗口计算", "加密数据", "压缩数据"],
        answer: 1,
        rationale: "Watermark 用于标记事件时间进度，帮助系统判断何时可以安全地触发窗口计算。",
    },
    {
        id: "q25",
        question: "GraphQL 相比 REST 的主要优势是？",
        options: ["更安全", "客户端可以精确指定需要的数据，避免过度获取", "性能更高", "更容易缓存"],
        answer: 1,
        rationale: "GraphQL 允许客户端精确指定需要的字段，解决了 REST 的过度获取（over-fetching）问题。",
    },
]

export const systemDesignRoadmap: RoadmapDefinition = {
    id: "system-design",
    label: "系统设计",
    title: "系统设计大师课",
    durationLabel: "24 个主题",
    description:
        "分布式系统理论 → 网络与负载均衡 → 数据存储与扩展 → 缓存与异步处理 → API 设计与通信 → 可观测性与案例实战，共 24 个主题，覆盖从 CAP 定理到 Twitter 时间线设计的完整知识体系。按阶段拆解，保持稳定节奏。",
    heroBadge: "多阶段 · 96 主题 · 面向资深后端",
    stages: systemDesignStages,
    knowledgeCards: systemDesignKnowledgeCards,
    examQuestions: systemDesignExamQuestions,
    suggestion: (percent: number) => {
        if (percent < 25) {
            return "建议先完成第一阶段的分布式系统理论，重点理解 CAP 定理和一致性模型。"
        }
        if (percent < 50) {
            return "继续学习网络层和数据存储，理解负载均衡、缓存和分片的设计权衡。"
        }
        if (percent < 75) {
            return "深入消息队列和 API 设计，掌握异步处理和服务间通信的最佳实践。"
        }
        return "通过经典案例巩固所学知识，准备系统设计面试，建立完整的知识图谱。"
    },
    resourceGuide: {
        environment: "准备白板或绘图工具（Excalidraw/draw.io），用于练习系统架构图。",
        fallbackKeyPoints: [
            "系统设计的核心是权衡：没有完美方案，只有最适合当前约束的方案。",
            "从需求出发：先量化（QPS、存储、延迟要求），再设计。",
            "分层思考：网络 → 负载均衡 → 应用 → 缓存 → 数据库，逐层分析瓶颈。",
        ],
        handsOnSteps: [
            "阅读原文，理解核心概念和设计原则。",
            "画出系统架构图，标注关键组件和数据流。",
            "分析设计中的权衡点，思考在不同约束下的替代方案。",
        ],
        selfChecks: [
            "能否用自己的话解释这个设计的核心权衡？",
            "如果规模扩大 10 倍，哪里会成为瓶颈？如何解决？",
            "这个设计如何处理故障？单点故障在哪里？",
        ],
        extensions: [
            "阅读知名公司的技术博客，了解实际系统的设计演进。",
            "找一个系统设计题目，用 40 分钟完整设计，然后对照参考方案。",
            "在工作中找机会应用所学知识，记录设计决策和权衡。",
        ],
        lessonQuizAdvice: "错题通常反映对核心概念的理解偏差，建议回到原文重新梳理。",
    },
}
