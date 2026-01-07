import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week3Guides: Record<string, LessonGuide> = {
    "pulsar-w3-1": {
        lessonId: "pulsar-w3-1",
        background: [
            "【Standalone 模式】官方文档：Standalone 模式在单个 JVM 进程中运行所有 Pulsar 组件（Broker、BookKeeper、ZooKeeper），非常适合开发和测试环境。",
            "【系统要求】官方文档：'Pulsar is available for 64-bit macOS and Linux'。Java 版本要求：Pulsar 4.0+ 需要 Java 21，Pulsar 2.11+ 需要 Java 17，Pulsar 2.8-2.10 需要 Java 11。",
            "【Docker 部署】官方建议 Docker 20.10+ 版本，至少 4GB RAM 和 5GB 磁盘空间。通过 -p 6650:6650 -p 8080:8080 暴露 Pulsar 协议端口和 HTTP 管理端口。",
            "【默认命名空间】Standalone 模式启动时自动创建 public/default 命名空间供开发使用，可以立即开始发送和接收消息。",
            "【后台运行】使用 bin/pulsar-daemon start standalone 可以在后台运行 Pulsar，适合长时间运行的开发环境。"
        ],
        keyDifficulties: [
            "【元数据存储选择】Docker 部署默认使用 RocksDB 作为元数据存储。若需要使用 ZooKeeper，需添加环境变量 PULSAR_STANDALONE_USE_ZOOKEEPER=1。",
            "【容器权限问题】官方文档警告：容器默认以 UID 10000 运行，挂载卷需要向其或 GID 0 提供写权限，否则可能导致数据写入失败。",
            "【Windows 兼容性】官方文档建议 Windows 用户采用 Docker 容器化方案而非直接部署，避免路径和脚本兼容性问题。",
            "【Helm Chart 生产部署】生产环境推荐使用 Kubernetes Helm Chart 部署，提供高可用性、自动扩缩容和运维便利性。"
        ],
        handsOnPath: [
            "下载并解压 Pulsar：wget https://archive.apache.org/dist/pulsar/pulsar-4.1.2/apache-pulsar-4.1.2-bin.tar.gz && tar xvfz apache-pulsar-4.1.2-bin.tar.gz",
            "启动 Standalone 集群：cd apache-pulsar-4.1.2 && bin/pulsar standalone",
            "或者使用 Docker：docker run -it -p 6650:6650 -p 8080:8080 apachepulsar/pulsar:4.1.2 bin/pulsar standalone",
            "验证服务状态：curl http://localhost:8080/admin/v2/persistent/public/default"
        ],
        selfCheck: [
            "Standalone 模式的特点是什么？它包含哪些组件？",
            "不同 Pulsar 版本对 Java 版本的要求是什么？",
            "Docker 部署 Pulsar 需要暴露哪两个端口？各自的作用是什么？",
            "如何让 Pulsar 在后台运行？如何停止？",
            "生产环境应该使用什么部署方式？为什么？"
        ],
        extensions: [
            "研究 Pulsar Helm Chart 的配置选项，了解生产级部署的最佳实践。",
            "探索 Pulsar 的配置文件 conf/standalone.conf，了解可调整的参数。",
            "学习使用 Docker Compose 部署多节点 Pulsar 集群的方法。",
            "研究 Kubernetes Operator 部署 Pulsar 的方案，对比 Helm Chart 的优缺点。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/getting-started-standalone/",
            "https://pulsar.apache.org/docs/getting-started-docker/",
            "https://pulsar.apache.org/docs/helm-overview/"
        ]
    },
    "pulsar-w3-2": {
        lessonId: "pulsar-w3-2",
        background: [
            "【三种管理方式】官方文档：'Pulsar admin APIs enable you to administer clusters programmatically'——可通过 pulsar-admin CLI、REST API 和 Java Admin API 三种方式管理集群。",
            "【租户管理命令】列出租户：pulsar-admin tenants list；创建租户：pulsar-admin tenants create my-tenant；获取配置：pulsar-admin tenants get my-tenant。",
            "【命名空间管理】创建命名空间：pulsar-admin namespaces create my-tenant/my-namespace；列出命名空间：pulsar-admin namespaces list my-tenant；获取策略：pulsar-admin namespaces policies my-tenant/my-namespace。",
            "【Topic 管理】创建 Topic：pulsar-admin topics create persistent://my-tenant/my-namespace/my-topic；列出 Topic：pulsar-admin topics list my-tenant/my-namespace；查看统计：pulsar-admin topics stats persistent://my-tenant/my-namespace/my-topic。",
            "【权限管理】授权：pulsar-admin topics grant-permission --actions produce,consume --role app1 persistent://tenant/ns/topic；查看权限：pulsar-admin topics permissions。"
        ],
        keyDifficulties: [
            "【删除 Topic 约束】官方文档：'You cannot delete a topic if any active subscription or producer is connected'——有活跃连接时无法删除 Topic，需要先断开连接。",
            "【分区 Topic 创建】分区 Topic 必须使用专门命令：pulsar-admin topics create-partitioned-topic persistent://tenant/ns/topic --partitions 4，不能使用普通 create 命令。",
            "【游标重置】pulsar-admin topics reset-cursor --subscription sub --time 10 可以将订阅的消费位置重置到指定时间点，用于消息回溯。",
            "【消息查看】pulsar-admin topics peek-messages --count 10 --subscription sub 可以查看指定订阅的待消费消息，但不会移动消费位置。"
        ],
        handsOnPath: [
            "列出所有租户：pulsar-admin tenants list",
            "创建新租户：pulsar-admin tenants create my-tenant",
            "创建命名空间：pulsar-admin namespaces create my-tenant/my-namespace",
            "创建 Topic：pulsar-admin topics create persistent://my-tenant/my-namespace/my-topic",
            "查看 Topic 统计：pulsar-admin topics stats persistent://my-tenant/my-namespace/my-topic",
            "使用 REST API：curl http://localhost:8080/admin/v2/tenants"
        ],
        selfCheck: [
            "pulsar-admin 提供哪三种管理 Pulsar 的方式？",
            "如何创建一个新的租户和命名空间？",
            "如何创建分区 Topic？与普通 Topic 的创建有什么区别？",
            "什么情况下无法删除 Topic？如何解决？",
            "如何查看 Topic 的统计信息和权限配置？"
        ],
        extensions: [
            "研究 pulsar-admin 的所有子命令，了解完整的管理能力。",
            "探索 REST API 文档，尝试使用 curl 完成各种管理操作。",
            "学习 Java Admin API，编写程序化管理 Pulsar 的代码。",
            "研究 pulsar-admin 的认证配置，了解如何在生产环境安全地使用管理工具。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/admin-api-overview/",
            "https://pulsar.apache.org/docs/admin-api-tenants/",
            "https://pulsar.apache.org/docs/admin-api-topics/"
        ]
    },
    "pulsar-w3-3": {
        lessonId: "pulsar-w3-3",
        background: [
            "【客户端包】官方文档：Java 客户端提供两个主要包：org.apache.pulsar.client.api（核心消息操作）和 org.apache.pulsar.client.admin（管理任务）。",
            "【线程安全】官方文档强调：'All the methods in Java clients are thread-safe'——所有方法都是线程安全的，适合并发应用。",
            "【三种客户端类型】可以创建三种客户端：Producer（发送消息）、Consumer（接收处理消息）、Reader（从指定位置读取消息）。",
            "【Maven 依赖】最新 Java 客户端版本是 4.1.2，通过 Maven Central Repository 获取：org.apache.pulsar:pulsar-client:4.1.2。",
            "【Python 客户端】Python 客户端通过 pip install pulsar-client 安装，API 风格与 Java 类似，支持同步和异步操作。"
        ],
        keyDifficulties: [
            "【内存溢出风险】官方文档提醒：高吞吐场景需要关注性能调优，防止 java.lang.OutOfMemoryError: Direct buffer memory 错误。",
            "【客户端配置】PulsarClient 是客户端入口，需要配置服务地址：PulsarClient.builder().serviceUrl(\"pulsar://localhost:6650\").build()。",
            "【Producer 配置】Producer 可配置：producerName、sendTimeout、batchingEnabled、compressionType、messageRoutingMode 等。",
            "【Consumer 配置】Consumer 可配置：subscriptionName、subscriptionType、receiverQueueSize、ackTimeout 等。"
        ],
        handsOnPath: [
            "添加 Maven 依赖：<dependency><groupId>org.apache.pulsar</groupId><artifactId>pulsar-client</artifactId><version>4.1.2</version></dependency>",
            "创建 PulsarClient：PulsarClient client = PulsarClient.builder().serviceUrl(\"pulsar://localhost:6650\").build();",
            "创建 Producer 并发送消息：Producer<String> producer = client.newProducer(Schema.STRING).topic(\"my-topic\").create(); producer.send(\"Hello Pulsar\");",
            "创建 Consumer 并接收消息：Consumer<String> consumer = client.newConsumer(Schema.STRING).topic(\"my-topic\").subscriptionName(\"my-sub\").subscribe(); Message<String> msg = consumer.receive();",
            "使用 Python 客户端：import pulsar; client = pulsar.Client('pulsar://localhost:6650')"
        ],
        selfCheck: [
            "Java 客户端提供哪两个主要包？各自的用途是什么？",
            "如何创建 PulsarClient 实例？需要指定什么参数？",
            "Producer 和 Consumer 创建时可以配置哪些参数？",
            "为什么官方强调所有方法都是线程安全的？这对应用开发有什么意义？",
            "高吞吐场景需要注意什么问题？如何避免？"
        ],
        extensions: [
            "研究 Producer 的异步发送模式，了解如何提高发送吞吐量。",
            "探索 Consumer 的批量接收 API，优化消费性能。",
            "学习 Reader API，了解与 Consumer 的区别和使用场景。",
            "研究 Go 和 C++ 客户端，对比不同语言客户端的特性。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/client-libraries-java/",
            "https://pulsar.apache.org/docs/client-libraries-python/",
            "https://pulsar.apache.org/docs/client-libraries-go/"
        ]
    }
}

export const week3Quizzes: Record<string, QuizQuestion[]> = {
    "pulsar-w3-1": [
        {
            id: "pulsar-w3-1-q1",
            question: "Standalone 模式的特点是什么？",
            options: [
                "需要多台服务器部署",
                "在单个 JVM 进程中运行所有 Pulsar 组件",
                "只能运行 Broker",
                "需要外部 ZooKeeper"
            ],
            answer: 1,
            rationale: "官方文档：Standalone 模式在单个 JVM 进程中运行所有 Pulsar 组件（Broker、BookKeeper、ZooKeeper）。"
        },
        {
            id: "pulsar-w3-1-q2",
            question: "Pulsar 4.0+ 版本需要什么 Java 版本？",
            options: [
                "Java 8",
                "Java 11",
                "Java 17",
                "Java 21"
            ],
            answer: 3,
            rationale: "官方文档：Pulsar 4.0+ 需要 Java 21，Pulsar 2.11+ 需要 Java 17。"
        },
        {
            id: "pulsar-w3-1-q3",
            question: "Docker 部署 Pulsar 的最低内存要求是多少？",
            options: [
                "1GB",
                "2GB",
                "4GB",
                "8GB"
            ],
            answer: 2,
            rationale: "官方文档：Docker 部署 Pulsar 至少需要 4GB RAM 和 5GB 磁盘空间。"
        },
        {
            id: "pulsar-w3-1-q4",
            question: "Pulsar 服务默认使用哪两个端口？",
            options: [
                "9092 和 2181",
                "6650 和 8080",
                "8088 和 9090",
                "5672 和 15672"
            ],
            answer: 1,
            rationale: "Pulsar 使用 6650 端口提供 Pulsar 协议服务，8080 端口提供 HTTP 管理接口。"
        },
        {
            id: "pulsar-w3-1-q5",
            question: "Standalone 模式启动时自动创建什么命名空间？",
            options: [
                "system/default",
                "public/default",
                "admin/default",
                "test/default"
            ],
            answer: 1,
            rationale: "官方文档：Standalone 模式启动时自动创建 public/default 命名空间供开发使用。"
        },
        {
            id: "pulsar-w3-1-q6",
            question: "如何在后台运行 Pulsar Standalone？",
            options: [
                "bin/pulsar standalone &",
                "bin/pulsar-daemon start standalone",
                "nohup bin/pulsar standalone",
                "bin/pulsar standalone --daemon"
            ],
            answer: 1,
            rationale: "官方文档：使用 bin/pulsar-daemon start standalone 可以在后台运行 Pulsar。"
        },
        {
            id: "pulsar-w3-1-q7",
            question: "Docker 部署时如何使用 ZooKeeper 作为元数据存储？",
            options: [
                "默认使用 ZooKeeper",
                "添加环境变量 PULSAR_STANDALONE_USE_ZOOKEEPER=1",
                "修改配置文件",
                "使用专门的镜像"
            ],
            answer: 1,
            rationale: "官方文档：Docker 默认使用 RocksDB，若需使用 ZooKeeper 需添加环境变量 PULSAR_STANDALONE_USE_ZOOKEEPER=1。"
        },
        {
            id: "pulsar-w3-1-q8",
            question: "Docker 容器默认以什么用户运行？",
            options: [
                "root (UID 0)",
                "nobody",
                "UID 10000",
                "pulsar"
            ],
            answer: 2,
            rationale: "官方文档：容器默认以 UID 10000 运行，挂载卷需要向其或 GID 0 提供写权限。"
        },
        {
            id: "pulsar-w3-1-q9",
            question: "官方对 Windows 用户的部署建议是什么？",
            options: [
                "直接安装运行",
                "使用 WSL",
                "采用 Docker 容器化方案",
                "不支持 Windows"
            ],
            answer: 2,
            rationale: "官方文档建议 Windows 用户采用 Docker 容器化方案而非直接部署。"
        },
        {
            id: "pulsar-w3-1-q10",
            question: "生产环境推荐使用什么方式部署 Pulsar？",
            options: [
                "Standalone 模式",
                "Docker 单容器",
                "Kubernetes Helm Chart",
                "手动安装"
            ],
            answer: 2,
            rationale: "生产环境推荐使用 Kubernetes Helm Chart 部署，提供高可用性、自动扩缩容和运维便利性。"
        },
        {
            id: "pulsar-w3-1-q11",
            question: "如何验证 Pulsar 服务已正常启动？",
            options: [
                "检查进程是否存在",
                "curl http://localhost:8080/admin/v2/persistent/public/default",
                "查看日志文件",
                "运行 pulsar-admin status"
            ],
            answer: 1,
            rationale: "可以通过 curl 访问 REST API 验证服务状态，例如 curl http://localhost:8080/admin/v2/persistent/public/default。"
        },
        {
            id: "pulsar-w3-1-q12",
            question: "如何通过环境变量自定义 Pulsar 配置？",
            options: [
                "直接设置配置名",
                "使用 PULSAR_PREFIX_ 前缀",
                "使用 CONF_ 前缀",
                "不支持环境变量配置"
            ],
            answer: 1,
            rationale: "官方文档：通过 PULSAR_PREFIX_ 前缀传递环境变量来自定义配置。"
        }
    ],
    "pulsar-w3-2": [
        {
            id: "pulsar-w3-2-q1",
            question: "pulsar-admin 支持哪些管理方式？",
            options: [
                "只有 CLI",
                "CLI 和 REST API",
                "pulsar-admin CLI、REST API、Java Admin API",
                "只有 REST API"
            ],
            answer: 2,
            rationale: "官方文档：可通过 pulsar-admin CLI、REST API 和 Java Admin API 三种方式管理集群。"
        },
        {
            id: "pulsar-w3-2-q2",
            question: "如何列出所有租户？",
            options: [
                "pulsar-admin list tenants",
                "pulsar-admin tenants list",
                "pulsar-admin show tenants",
                "pulsar-admin get tenants"
            ],
            answer: 1,
            rationale: "正确命令是 pulsar-admin tenants list。"
        },
        {
            id: "pulsar-w3-2-q3",
            question: "如何创建一个分区 Topic？",
            options: [
                "pulsar-admin topics create topic --partitions 4",
                "pulsar-admin topics create-partitioned-topic topic --partitions 4",
                "pulsar-admin topics partition topic 4",
                "pulsar-admin partitions create topic 4"
            ],
            answer: 1,
            rationale: "分区 Topic 必须使用专门命令：pulsar-admin topics create-partitioned-topic topic --partitions 4。"
        },
        {
            id: "pulsar-w3-2-q4",
            question: "什么情况下无法删除 Topic？",
            options: [
                "Topic 为空",
                "有活跃的订阅或生产者连接",
                "Topic 太大",
                "任何时候都可以删除"
            ],
            answer: 1,
            rationale: "官方文档：'You cannot delete a topic if any active subscription or producer is connected'。"
        },
        {
            id: "pulsar-w3-2-q5",
            question: "如何查看 Topic 的统计信息？",
            options: [
                "pulsar-admin topics info topic",
                "pulsar-admin topics stats topic",
                "pulsar-admin topics describe topic",
                "pulsar-admin topics show topic"
            ],
            answer: 1,
            rationale: "使用 pulsar-admin topics stats <topic-name> 查看 Topic 统计信息。"
        },
        {
            id: "pulsar-w3-2-q6",
            question: "如何为 Topic 授予权限？",
            options: [
                "pulsar-admin topics add-permission",
                "pulsar-admin topics grant-permission --actions produce,consume --role app1 topic",
                "pulsar-admin acl add",
                "pulsar-admin permissions grant"
            ],
            answer: 1,
            rationale: "正确命令：pulsar-admin topics grant-permission --actions produce,consume --role app1 topic。"
        },
        {
            id: "pulsar-w3-2-q7",
            question: "如何重置订阅的消费位置到指定时间？",
            options: [
                "pulsar-admin topics seek",
                "pulsar-admin topics reset-cursor --subscription sub --time 10 topic",
                "pulsar-admin subscriptions reset",
                "pulsar-admin cursor reset"
            ],
            answer: 1,
            rationale: "使用 pulsar-admin topics reset-cursor --subscription sub --time <minutes> topic 重置游标。"
        },
        {
            id: "pulsar-w3-2-q8",
            question: "peek-messages 命令的作用是什么？",
            options: [
                "删除消息",
                "查看待消费消息但不移动消费位置",
                "发送消息",
                "压缩消息"
            ],
            answer: 1,
            rationale: "peek-messages 可以查看指定订阅的待消费消息，但不会移动消费位置。"
        },
        {
            id: "pulsar-w3-2-q9",
            question: "租户可以配置哪些属性？",
            options: [
                "只有名称",
                "adminRoles 和 allowedClusters",
                "只有 allowedClusters",
                "只有 adminRoles"
            ],
            answer: 1,
            rationale: "租户支持配置 adminRoles（管理员角色）和 allowedClusters（允许的集群）。"
        },
        {
            id: "pulsar-w3-2-q10",
            question: "如何通过 REST API 列出租户？",
            options: [
                "POST /admin/v2/tenants",
                "GET /admin/v2/tenants",
                "PUT /admin/v2/tenants",
                "DELETE /admin/v2/tenants"
            ],
            answer: 1,
            rationale: "GET /admin/v2/tenants 用于列出所有租户。"
        },
        {
            id: "pulsar-w3-2-q11",
            question: "如何删除订阅？",
            options: [
                "pulsar-admin topics delete-subscription",
                "pulsar-admin topics unsubscribe --subscription sub topic",
                "pulsar-admin subscriptions delete",
                "pulsar-admin remove subscription"
            ],
            answer: 1,
            rationale: "使用 pulsar-admin topics unsubscribe --subscription sub topic 删除订阅。"
        },
        {
            id: "pulsar-w3-2-q12",
            question: "如何 unload 一个 Topic（释放所有权）？",
            options: [
                "pulsar-admin topics delete topic",
                "pulsar-admin topics unload topic",
                "pulsar-admin topics release topic",
                "pulsar-admin topics free topic"
            ],
            answer: 1,
            rationale: "使用 pulsar-admin topics unload topic 可以释放 Topic 的所有权。"
        }
    ],
    "pulsar-w3-3": [
        {
            id: "pulsar-w3-3-q1",
            question: "Java 客户端提供哪两个主要包？",
            options: [
                "client.core 和 client.admin",
                "org.apache.pulsar.client.api 和 org.apache.pulsar.client.admin",
                "pulsar.producer 和 pulsar.consumer",
                "messaging 和 management"
            ],
            answer: 1,
            rationale: "官方文档：Java 客户端提供 org.apache.pulsar.client.api（核心消息操作）和 org.apache.pulsar.client.admin（管理任务）。"
        },
        {
            id: "pulsar-w3-3-q2",
            question: "官方对 Java 客户端线程安全性的描述是什么？",
            options: [
                "非线程安全，需要同步",
                "All the methods in Java clients are thread-safe",
                "部分方法线程安全",
                "未提及线程安全"
            ],
            answer: 1,
            rationale: "官方文档强调：'All the methods in Java clients are thread-safe'——所有方法都是线程安全的。"
        },
        {
            id: "pulsar-w3-3-q3",
            question: "Java 客户端可以创建哪三种客户端类型？",
            options: [
                "Producer、Consumer、Admin",
                "Producer、Consumer、Reader",
                "Sender、Receiver、Viewer",
                "Publisher、Subscriber、Browser"
            ],
            answer: 1,
            rationale: "可以创建三种客户端：Producer（发送消息）、Consumer（接收处理消息）、Reader（从指定位置读取消息）。"
        },
        {
            id: "pulsar-w3-3-q4",
            question: "最新 Java 客户端版本是多少？",
            options: [
                "3.0.0",
                "4.0.0",
                "4.1.2",
                "5.0.0"
            ],
            answer: 2,
            rationale: "官方文档：最新 Java 客户端版本是 4.1.2。"
        },
        {
            id: "pulsar-w3-3-q5",
            question: "高吞吐场景需要防止什么错误？",
            options: [
                "NullPointerException",
                "java.lang.OutOfMemoryError: Direct buffer memory",
                "IOException",
                "TimeoutException"
            ],
            answer: 1,
            rationale: "官方文档提醒：高吞吐场景需要关注性能调优，防止 java.lang.OutOfMemoryError: Direct buffer memory 错误。"
        },
        {
            id: "pulsar-w3-3-q6",
            question: "如何创建 PulsarClient 实例？",
            options: [
                "new PulsarClient(url)",
                "PulsarClient.builder().serviceUrl(\"pulsar://localhost:6650\").build()",
                "PulsarClient.create(url)",
                "PulsarClientFactory.newClient(url)"
            ],
            answer: 1,
            rationale: "使用 Builder 模式创建：PulsarClient.builder().serviceUrl(\"pulsar://localhost:6650\").build()。"
        },
        {
            id: "pulsar-w3-3-q7",
            question: "如何安装 Python 客户端？",
            options: [
                "pip install apache-pulsar",
                "pip install pulsar-client",
                "pip install pulsar",
                "pip install py-pulsar"
            ],
            answer: 1,
            rationale: "Python 客户端通过 pip install pulsar-client 安装。"
        },
        {
            id: "pulsar-w3-3-q8",
            question: "Producer 可以配置哪些参数？",
            options: [
                "只有 topic",
                "producerName、sendTimeout、batchingEnabled、compressionType 等",
                "只有 producerName",
                "只有 batchingEnabled"
            ],
            answer: 1,
            rationale: "Producer 可配置：producerName、sendTimeout、batchingEnabled、compressionType、messageRoutingMode 等。"
        },
        {
            id: "pulsar-w3-3-q9",
            question: "Consumer 创建时必须指定什么？",
            options: [
                "只有 topic",
                "topic 和 subscriptionName",
                "只有 subscriptionName",
                "consumerId"
            ],
            answer: 1,
            rationale: "Consumer 创建时必须指定 topic 和 subscriptionName（订阅名称）。"
        },
        {
            id: "pulsar-w3-3-q10",
            question: "Reader 与 Consumer 的主要区别是什么？",
            options: [
                "Reader 更快",
                "Reader 从指定位置读取消息，不创建订阅",
                "Reader 只能读取新消息",
                "没有区别"
            ],
            answer: 1,
            rationale: "Reader 从指定位置读取消息且不创建订阅，适合消息回放、审计等场景。"
        },
        {
            id: "pulsar-w3-3-q11",
            question: "如何发送带 Schema 的消息？",
            options: [
                "producer.send(message)",
                "client.newProducer(Schema.STRING).topic(topic).create()",
                "producer.sendWithSchema(message)",
                "Schema.send(producer, message)"
            ],
            answer: 1,
            rationale: "创建 Producer 时指定 Schema：client.newProducer(Schema.STRING).topic(topic).create()。"
        },
        {
            id: "pulsar-w3-3-q12",
            question: "Pulsar 协议的默认端口是什么？",
            options: [
                "8080",
                "6650",
                "9092",
                "5672"
            ],
            answer: 1,
            rationale: "Pulsar 协议服务使用 6650 端口，HTTP 管理接口使用 8080 端口。"
        }
    ]
}
