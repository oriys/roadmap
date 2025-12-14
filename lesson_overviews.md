# Kubernetes 路线图：每课综述

说明：
- 课程结构与每课资源链接来自 `src/App.tsx`。
- 每课综述尽量回答：学什么、为什么、做到什么程度（可落地到实操/排障/交付）。

## 第一阶段：基石与容器化（第 1-3 周）

### 第 1 周：Linux 内核与网络基础

- w1-1 Linux 进程隔离原理：理解 PID/Network/Mount 等 namespaces 如何改变进程看到的“世界”，以及隔离的边界与陷阱。完成后能用最小实验验证隔离效果，并能解释 hostNetwork/hostPID 等配置对隔离与排障的影响。
- w1-2 资源限制与调度：掌握 cgroups v1/v2 的层级模型与 CPU/内存限制/统计机制，理解 throttling 与 OOM 行为。完成后能把容器的资源约束与 K8s requests/limits 联系起来，并在压测下解释性能与失败现象。
- w1-3 联合文件系统（UnionFS）：弄清 OverlayFS/overlay2 的分层、合并视图与 Copy-on-Write 触发条件，理解写放大与磁盘占用。完成后能读懂镜像分层、定位容器磁盘异常，并据此优化镜像构建与运行时存储。
- w1-4 容器网络基础：梳理容器网络的典型数据路径（veth pair → bridge → iptables/NAT），理解端口映射与容器互通的实现。完成后能选择正确的抓包/排查点位，并解释常见网络不通与端口映射问题。

### 第 2 周：容器技术进阶

- w2-1 Docker 架构解剖：从职责分层理解 Docker（CLI/Daemon/containerd/runc）各自负责什么。完成后能按层定位报错（构建/拉取/运行/网络），并理解 K8s 运行时链路。
- w2-2 Dockerfile 最佳实践：把 Dockerfile 当工程化构建脚本：多阶段构建、最小基座、缓存命中与构建上下文瘦身。完成后能写出更小、更快、更可审计的镜像，并规避常见安全与可维护性坑。
- w2-3 容器运行时演变：理解 dockershim 移除的背景：Kubelet 通过 CRI 直接对接 containerd/CRI-O，标准化运行时接口。完成后能区分 containerd 与 CRI-O 的定位，并知道迁移/排障时该看哪一层。
- w2-4 OCI 标准：理解 OCI（Image/Runtime/Distribution）把镜像格式、运行时接口与分发协议标准化带来的互操作性。完成后能解释镜像“可移植”的来源，并理解 registry/签名/扫描等生态如何挂接。

### 第 3 周：Kubernetes 架构与部署

- w3-1 K8s 核心架构：补齐入门概念与核心术语，建立 Kubernetes 组件全景：API Server/etcd/scheduler/controller/kubelet/kube-proxy 的职责与边界，并了解常见替代方案的取舍。完成后能用这张图解释集群行为、调和循环以及常见故障域。
- w3-2 集群搭建实战：动手搭建集群（kubeadm/minikube/kind），部署第一个应用验证链路，掌握 kubeconfig/context、网络插件与节点健康检查，并理解自建 vs 托管的基本选择。完成后拥有可反复销毁重建的练习环境，为后续实验打底。
- w3-3 声明式 API 与 YAML：掌握声明式对象管理：用 YAML 表达期望状态，通过调和循环持续收敛；理解 `apply` 与 `patch` 的差异。完成后能避免“手改被覆盖”，并用声明式方式管理对象演进。
- w3-4 Pod 生命周期：系统理解 Pod 生命周期：Init、就绪/存活/启动探针、重启策略与 BackOff。完成后能基于事件/日志/探针把 CrashLoopBackOff 等问题拆解到根因。

## 第二阶段：K8s 核心编排（第 4-7 周）

### 第 4 周：工作负载管理

- w4-1 控制器模式：掌握 Deployment/ReplicaSet 以及 Job/CronJob 的控制器模式与发布策略（滚动升级、回滚与批处理/定时任务）。完成后能做一次可验证的升级/回滚，并理解它与探针/就绪门控的配合。
- w4-2 服务发现：理解 Service 的服务发现与负载均衡：ClusterIP/NodePort/LoadBalancer 的流量路径，以及 kube-proxy iptables/IPVS 差异。完成后能解释常见访问异常（不通/指到旧 Pod/会话丢失）。
- w4-3 流量入口：从“Ingress 只是规则，Controller 才是数据面”出发理解入口流量：Host/Path 路由、TLS、后端 Service 关系。完成后能定位 404/503、证书问题与路径匹配坑。
- w4-4 资源治理与配额：用 requests/limits 与 QoS 做资源治理，用 Namespace、ResourceQuota/LimitRange 做隔离边界与默认值约束。完成后能为团队/环境设计配额方案，避免资源争抢与成本失控。

### 第 5 周：存储与配置管理

- w5-1 配置解耦：把配置与密钥从镜像解耦：ConfigMap/Secret 通过 env/volume 注入，理解更新传播与安全边界。完成后能按环境切换配置，并避免敏感信息泄露。
- w5-2 持久化存储基础：掌握 PV/PVC 的声明、绑定与回收生命周期，理解访问模式与容量规划。完成后能排查 Pending、权限不匹配与回收策略带来的数据风险。
- w5-3 动态供给：理解 StorageClass + CSI 的动态供给：按需创建、扩容、快照等能力如何工作。完成后能按负载选存储类，并读懂 provisioning 事件与故障。
- w5-4 有状态应用：掌握 StatefulSet 的稳定身份与有序特性，理解 Headless Service 与 volumeClaimTemplates 的配合。完成后能在集群中更可靠地部署数据库/队列等有状态组件。

### 第 6 周：调度与高级网络

- w6-1 高级调度策略：用 node/pod 亲和与拓扑分布约束把工作负载放到正确位置（跨 AZ、隔离、反共置），并理解 PriorityClass/抢占与自定义调度扩展点。完成后能设计更稳健的副本分布并避免热点。
- w6-2 污点与容忍：用 taints/tolerations 实现专用节点、驱逐策略与环境隔离，结合 PDB 理解中断保护与 NoExecute 行为。完成后能解释“为什么不调度/为什么被驱逐”，并写出可维护策略。
- w6-3 网络策略：理解 NetworkPolicy 的显式允许模型：从默认全通到默认拒绝，按 label/端口/namespace 切边界。完成后能为典型三层应用写 ingress/egress 白名单并验证生效（前提是 CNI 支持）。
- w6-4 CNI 插件解析：理解 CNI 插件在网络模型与策略能力上的差异：Overlay（Flannel）vs 路由/BGP（Calico），以及性能与运维成本权衡。完成后能在选型/排障时说清数据路径与策略生效条件。

### 第 7 周：权限与包管理

- w7-1 RBAC 鉴权：掌握 RBAC 的最小权限设计：Role/ClusterRole 与 Binding 的作用域、继承与常见陷阱。完成后能为应用/团队授权并用 `kubectl auth can-i` 自测。
- w7-2 Service Account：把 ServiceAccount 视为 Pod 的身份：token 投射、automount、与 API Server 的访问控制；区分镜像拉取凭据与 API 访问凭据。完成后能安全给工作负载授权并避免默认 SA 滥用。
- w7-3 Helm 基础：掌握 Helm 的发布闭环：Chart 结构、values、install/upgrade/rollback 与 release 管理。完成后能把一套 YAML 模板化并在多环境复用。
- w7-4 Helm 进阶：深入 Helm 模板：函数、条件/循环、helpers、values 覆盖与 lint。完成后能写出可维护 chart，并减少升级时的渲染差异与回滚风险。

## 第三阶段：自动化与交付（第 8-10 周）

### 第 8 周：基础设施即代码（IaC）

- w8-1 Terraform 基础：理解 Terraform 的 IaC 工作流：HCL、provider、依赖图、state/lock 与后端。完成后能模块化管理基础设施并支持多人协作。
- w8-2 Terraform 实战：用 Terraform 实战创建云上 K8s（EKS/GKE）：关注网络/IAM/节点组与输出编排。目标是能反复“一键建/一键销毁”，并形成可审计的集群基座。
- w8-3 Ansible 基础：掌握 Ansible 的配置管理模型：inventory、playbook、幂等与无 agent。完成后能把节点初始化/组件安装脚本化并可重复执行。
- w8-4 IaC 工具组合：组合 Terraform + Ansible：Terraform 管资源与状态，Ansible 管系统配置与软件安装，串成可复现交付链路。完成后能清晰划分责任边界并避免重复管理。

### 第 9 周：CI/CD 流水线

- w9-1 CI/CD 理论：理解云原生 CI/CD 的难点与原则：制品不可变、版本/标签策略、环境一致性、凭据与审计。完成后能设计从代码到镜像再到部署的闭环流程。
- w9-2 流水线实战（上）：落地构建与发布：用 Jenkins/GitHub Actions 构建镜像、打标签、推送 Registry，并处理缓存与 secrets。完成后能产出可复现的 pipeline/workflow。
- w9-3 流水线实战（下）：把安全与质量左移：集成 Trivy 扫描与测试门禁，阻断高风险制品进入仓库。完成后能解读扫描报告、制定修复优先级并让流水线可视化。
- w9-4 GitOps 导论：掌握 GitOps 的核心：以 Git 为唯一真相，CD 控制器拉取并持续对齐；对比 push 模式的审计与回滚差异。完成后能解释 ArgoCD/Flux 的控制回路与落地边界。

### 第 10 周：GitOps 实战（ArgoCD）

- w10-1 ArgoCD 架构：理解 ArgoCD 的组件与数据流：API/UI、repo-server、application-controller 与 Application/Project 模型。完成后能安装并跑通一个应用的声明式同步。
- w10-2 同步策略：掌握同步策略：auto-sync、prune、self-heal，以及 hooks/waves 的发布编排。完成后能实现自动对齐与漂移自愈，同时理解误删与发布顺序风险。
- w10-3 多环境管理：多环境差异管理：用 Kustomize overlays 或 Helm values 管 dev/prod 漂移与晋级。完成后能做到一套源码多环境、可审计可回滚。
- w10-4 App of Apps 模式：理解 App of Apps：用引导应用管理大量子应用/目录结构，配合多集群管理与渐进式发布（canary/blue-green），实现集群级 bootstrap。完成后能给大规模微服务设计目录、权限与编排策略。

## 第四阶段：可观测性与服务网格（第 11-13 周）

### 第 11 周：监控与指标

- w11-1 Prometheus 架构：理解 Prometheus 采集链路：pull 模型、服务发现、exporter、relabel，以及 TSDB 存储与保留，并了解 metrics-server/kube-state-metrics 让集群资源健康可观测。完成后能让一个服务从暴露 metrics 到被采集全链路打通。
- w11-2 PromQL 查询语言：掌握 PromQL 的核心用法：rate/聚合、label 维度、直方图分位数等。完成后能写出“请求量/错误率/延迟”的关键查询并避免常见误用。
- w11-3 Grafana 可视化：用 Grafana 把指标可视化：配置数据源，导入/自定义 dashboard，参数化筛选。完成后能产出一套可复用的观测面板。
- w11-4 告警管理：告警管理与降噪：Alertmanager 的分组、路由、抑制与静默。完成后能设计不刷屏、可值班的告警策略与通知链路。

### 第 12 周：日志与链路追踪

- w12-1 日志收集架构：对比日志采集架构：DaemonSet（节点采集）与 Sidecar（应用旁路），理解隔离、开销与治理方式。完成后能为集群选型并落地采集配置。
- w12-2 轻量级日志栈（PLG）：理解 Loki/PLG 的“标签索引”模型：用 label 控范围，LogQL 做过滤与聚合，并关注成本与保留策略。完成后能写高效查询并避免 label 爆炸。
- w12-3 分布式链路追踪：理解 tracing 的基本模型：trace/span/上下文传播与采样，知道埋点位置与跨进程关联方式。完成后能解释一次请求如何被串成调用链。
- w12-4 OpenTelemetry & Jaeger：把 OpenTelemetry 与 Jaeger 跑起来：Collector 管线收集/处理/导出，Jaeger UI 定位慢点与错误链路。完成后能搭一个端到端可追踪的 demo。

### 第 13 周：服务网格

- w13-1 Service Mesh 解决什么：明确 Service Mesh 的价值与成本：把重试/熔断/可观测性/安全从业务库下沉到 sidecar。完成后能判断“是否需要 mesh”与最小落地范围。
- w13-2 Istio 架构与安装：理解 Istio 控制面/数据面：istiod 下发 xDS，Envoy 执行路由与策略；掌握安装 profile 与 sidecar 注入。完成后能完成安装并确认流量接管。
- w13-3 流量治理实战：实战流量治理：金丝雀分流、超时重试、熔断与故障注入，掌握 VirtualService/DestinationRule 组合。完成后能在不改业务代码的情况下演练发布与容错。
- w13-4 网格安全：落地网格安全：mTLS 迁移、认证与授权策略，把“默认不信任”变成可执行配置。完成后能实现服务间加密与细粒度访问控制。

## 第五阶段：安全、进阶与认证（第 14-16 周）

### 第 14 周：云原生安全（DevSecOps）

- w14-1 4C 安全模型：用 4C 模型系统化安全：从云/集群到容器/代码，结合 Pod Security Standards 做基线。完成后能产出一份可执行的集群加固清单。
- w14-2 供应链安全：供应链安全闭环：用 Cosign 为镜像签名/验证，配合准入控制阻断未签名或不合规制品。完成后能跑通“构建→签名→验证→部署”链路。
- w14-3 策略即代码：策略即代码落地：用 Gatekeeper/Kyverno 把合规写成规则与例外流程，并支持审计。完成后能写一条策略并在 namespace 级别强制执行/观测效果。
- w14-4 运行时安全：运行时安全入门：Falco 基于系统调用检测异常行为并触发告警，关键在规则维护与降噪。完成后能检测一个典型高危场景并形成响应闭环。

### 第 15 周：Serverless 与自动扩缩容

- w15-1 自动扩缩容：掌握弹性链路：HPA/VPA（Pod 级）与 Cluster Autoscaler（节点级）的协同与限制，指标来源与稳定窗口调优。完成后能避免抖动并解释扩缩容为何不生效。
- w15-2 Knative Serving：理解 Knative Serving：revision/route、并发与 scale-to-zero，以及冷启动权衡。完成后能部署一个服务并做流量分配与回滚。
- w15-3 事件驱动架构：事件驱动架构：Knative Eventing + CloudEvents，把事件当一等公民（broker/trigger/source/sink）。完成后能搭一个事件→服务的最小闭环。
- w15-4 Operator 模式：理解 Operator 模式：CRD 定义期望状态，controller 调和复杂应用生命周期，并了解 API 扩展（Aggregation）等进阶能力。完成后能用 Operator SDK/Kubebuilder 搭出最小 operator，并判断何时该写 operator。

### 第 16 周：故障排查与认证冲刺

- w16-1 集群灾备：掌握 etcd 灾备：快照备份与恢复步骤、证书与端点配置注意事项。完成后能在实验环境演练一次控制面数据恢复。
- w16-2 高频故障排查：形成高频故障排查手册：从事件/describe 到日志，再到资源/探针/网络/镜像逐层定位 OOMKilled、CrashLoopBackOff、ImagePullBackOff。完成后能把排障流程固化为速查表。
- w16-3 认证体系解读：CKA/CKAD 冲刺：对齐考纲、常用 kubectl 技巧、文档检索与时间管理。完成后能制定短期训练计划并做模拟题复盘。
- w16-4 课程回顾与职业规划：课程回顾与规划：把 16 周知识串成技能树与作品集（项目、演练、开源贡献），明确下一步方向（平台工程/SRE/DevOps 等）。

补充：每课的“推荐阅读”链接已在 `src/App.tsx` 的 `resources` 字段中按课维护（官方文档/规范/项目文档）。
