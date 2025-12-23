import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week14Guides: Record<string, LessonGuide> = {
    "w14-1": {
        lessonId: "w14-1",
        background: [
            "【4C 安全模型】官方文档：云原生安全采用纵深防御的 4C 模型——Cloud（基础设施提供商安全）、Cluster（集群组件安全配置）、Container（容器安全性，包括镜像、运行时）、Code（应用代码安全）。外层安全是内层的基础，但'You cannot safeguard against poor security standards in the base layers by addressing security at a higher level'——不能用高层安全弥补底层缺陷。",
            "【Cluster 安全层】官方文档：Cluster 层安全关注两大领域——'Components that make up the cluster'（集群组件如 API Server、etcd 的安全配置）和'Applications which run in the cluster'（运行在集群中的工作负载安全）。API Server 访问控制通过'Authentication → Authorization → Admission Control'三阶段实现。",
            "【API 访问控制链】官方文档：请求到达 API Server 后经过三阶段——Authentication（'determines the identity of the client'确认身份）→ Authorization（'determines if the request is allowed'检查权限）→ Admission Control（验证和变更请求）。任何阶段失败都会拒绝请求。",
            "【Pod Security Standards 三级别】官方文档定义三种安全策略级别——Privileged（'completely unrestricted policy, providing the widest possible level of permissions'无限制）；Baseline（'minimally restrictive policy which prevents known privilege escalations'阻止已知提权）；Restricted（'heavily restricted policy, following current Pod hardening best practices'遵循加固最佳实践）。",
            "【命名空间级别执行】官方文档：通过标签在命名空间级别执行 PSS——'pod-security.kubernetes.io/<MODE>: <LEVEL>'。三种模式：enforce（违反时拒绝 Pod）、audit（记录审计事件）、warn（触发用户警告）。建议从 warn 模式开始逐步过渡到 enforce。"
        ],
        keyDifficulties: [
            "【纵深防御原则】官方文档核心观点：'You cannot safeguard against poor security standards in the base layers by addressing security at a higher level'——高层安全无法弥补底层缺陷。每层都需独立的安全控制，攻击者可能通过应用漏洞绕过外层进入容器，此时内层加固是最后防线。",
            "【Baseline 级别控制项】官方文档：Baseline 级别禁止——hostNetwork/hostPID/hostIPC、hostPath 挂载、hostPorts、特权容器（privileged: true）、新增 capabilities、/proc 挂载类型。这些控制阻止已知的特权提升途径。",
            "【Restricted 级别额外要求】官方文档：在 Baseline 基础上，Restricted 还要求——'must run as non-root'（runAsNonRoot: true）、'must drop ALL capabilities'（capabilities.drop: [ALL]）、'must not allow privilege escalation'、Seccomp profile 必须为 RuntimeDefault 或 Localhost。",
            "【SecurityContext 配置要点】官方文档：Pod 和 Container 级别都可设置 securityContext。关键字段包括 runAsUser/runAsGroup（指定运行身份）、fsGroup（文件系统组）、allowPrivilegeEscalation（禁止 setuid 提权）、readOnlyRootFilesystem（只读根文件系统）、seccompProfile（系统调用过滤）。",
            "【PSS 与 PSP 迁移】官方文档：Pod Security Standards 通过内置准入控制器实现，替代已废弃的 PodSecurityPolicy（v1.25 移除）。PSS 更简单，三个预定义级别覆盖常见场景，不需要编写自定义策略。建议从 warn 模式开始评估影响后再 enforce。"
        ],
        handsOnPath: [
            "评估当前集群安全状态：使用 kube-bench 检查 CIS Kubernetes Benchmark 合规性。分析报告，识别关键风险项。制定修复计划和优先级。",
            "配置 Pod Security Standards：为命名空间设置 pod-security.kubernetes.io/enforce: restricted 标签。部署测试 Pod，验证不合规的 Pod 被拒绝。查看拒绝原因，理解各项安全要求。",
            "加固 API Server：审计当前认证方式（证书、Token、OIDC）；检查 RBAC 配置，遵循最小权限原则；启用审计日志，配置合适的审计策略。",
            "容器安全加固实践：选择一个业务 Pod，应用 Restricted 级别的 securityContext；使用 Trivy 扫描镜像漏洞；建立漏洞修复 SLA。",
            "建立安全基线文档：整理适用于团队的安全检查清单（checklist）；配置自动化检查工具（如 kubescape、Polaris）；将安全检查集成到 CI/CD 流水线。"
        ],
        selfCheck: [
            "4C 安全模型的每一层分别关注什么？为什么说外层安全不能替代内层安全？",
            "Pod Security Standards 的三个级别（Privileged/Baseline/Restricted）有什么区别？生产环境应该使用哪个级别？",
            "Kubernetes 的认证、授权、准入控制分别做什么？它们的执行顺序是什么？",
            "为什么容器应该以非 root 用户运行？readOnlyRootFilesystem 有什么安全价值？",
            "如何评估和持续监控集群的安全状态？有哪些常用的工具和框架？"
        ],
        extensions: [
            "研究 CIS Kubernetes Benchmark，了解业界公认的 Kubernetes 安全配置基线，学习如何使用 kube-bench 进行合规性检查。",
            "探索 Kubernetes Hardening Guidance（NSA/CISA），了解美国国家安全局和网络安全局发布的 Kubernetes 加固指南。",
            "学习 RBAC 最佳实践，包括最小权限原则、避免使用 cluster-admin、定期审计权限等。",
            "研究 Secret 管理最佳实践，了解 External Secrets Operator、Vault 集成等企业级 Secret 管理方案。"
        ],
        sourceUrls: [
            "https://kubernetes.io/docs/concepts/security/overview/",
            "https://kubernetes.io/docs/concepts/security/pod-security-standards/",
            "https://www.cisecurity.org/benchmark/kubernetes"
        ]
    },
    "w14-2": {
        lessonId: "w14-2",
        background: [
            "【Cosign 定义】Sigstore 官方文档：Cosign 是'a command line utility that is used to sign software artifacts and verify signatures using Sigstore'——用于签名软件制品和验证签名的命令行工具。支持对容器镜像和 Blob 文件进行签名验证。",
            "【Keyless 签名架构】官方文档：Keyless 模式利用 Fulcio（证书颁发机构）和 Rekor（透明日志）实现无密钥签名。流程：Fulcio 在 OIDC 身份验证后颁发短期证书 → 证书绑定到公钥，证明身份 → Rekor 不可篡改地记录签名活动。消除传统密钥存储漏洞。",
            "【准入控制器机制】K8s 官方文档：Admission controllers 是'pieces of code that intercept requests to the Kubernetes API server after authentication and authorization, but before persistence'——在认证授权之后、持久化之前拦截请求。分两阶段：Mutating（修改请求）→ Validating（验证数据）。任一阶段拒绝则整个请求被拒绝。",
            "【Policy Controller 功能】Sigstore 官方文档：Policy Controller 是'Kubernetes admission controller that enforces supply-chain security by validating container image signatures and attestations before deployment'——在部署前验证镜像签名和证明。通过 ClusterImagePolicy 定义镜像模式、信任机构和验证规则。",
            "【策略执行逻辑】官方文档：策略执行遵循 AND/OR 原则——多个匹配策略必须全部满足（AND），每个策略内至少一个 authority 验证通过（OR）。未通过所有适用策略的镜像将被拒绝，管理员可配置 warn 模式允许不合规镜像但发出警告。"
        ],
        keyDifficulties: [
            "【Keyless 签名流程】官方文档：开发者通过 OIDC 认证（Google、GitHub、Microsoft）→ Fulcio 颁发短期时间戳证书（验证身份后）→ 证书绑定公钥证明身份 → Rekor 不可篡改记录签名活动。验证时需验证时间戳、证书临时公钥和透明日志包含性。密钥从未持久化存储。",
            "【准入控制两阶段】官方文档：准入控制分两阶段执行——Phase 1 Mutating Controllers（修改请求数据）→ Phase 2 Validating Controllers（验证修改后数据，不可再修改）。任一阶段任一控制器拒绝，整个请求立即被拒绝。ValidatingAdmissionWebhook 在验证阶段执行外部 HTTP 调用。",
            "【Authority 类型】官方文档：Policy Controller 支持三种 Authority 类型——Key-based（使用公钥验证，可内联、存 Secret 或 KMS）；Keyless（使用 OIDC token 和 Fulcio 证书建立签名者身份）；Static（基于简单规则允许/拒绝，用于未签名镜像）。",
            "【镜像验证流程】官方文档：Policy Controller 自动解析镜像 tag 到 SHA digest，确保部署镜像与验证版本匹配。验证包括签名、证书透明日志验证、时间戳机构支持。支持基于资源类型和标签的策略匹配。",
            "【渐进式推广策略】官方文档：可配置 warn 模式允许不合规镜像但发出警告，便于渐进式推广。生产策略应包括：定义镜像模式（glob 匹配）、指定信任机构、配置必需的 attestation 及其验证规则、处理验证失败的回退方案。"
        ],
        handsOnPath: [
            "安装 Cosign 并生成密钥对：下载 cosign 二进制；生成密钥对 cosign generate-key-pair；理解公钥和私钥的用途。或者体验 Keyless 签名（需要 OIDC 账户）。",
            "签名并验证镜像：构建一个测试镜像并推送到仓库；使用 cosign sign 签名镜像；使用 cosign verify 验证签名。观察签名存储在镜像仓库的方式。",
            "部署 Policy Controller：使用 Helm 安装 Sigstore Policy Controller；创建 ClusterImagePolicy 配置信任的公钥；部署测试 Pod，验证未签名镜像被拒绝。",
            "生成和附加 SBOM：使用 syft 或 trivy 生成镜像的 SBOM；使用 cosign attach sbom 将 SBOM 附加到镜像；验证 SBOM 可以被检索。",
            "集成到 CI/CD：在 GitHub Actions 或其他 CI 中添加签名步骤；配置 Keyless 签名使用 OIDC token；在 CD 阶段验证镜像签名后再部署。"
        ],
        selfCheck: [
            "Cosign 的 Keyless 签名模式是如何工作的？与传统密钥对签名相比有什么优势和劣势？",
            "透明日志（Rekor）的作用是什么？为什么说它增加了供应链安全？",
            "如何在 Kubernetes 中强制执行镜像签名验证？有哪些可选的工具？",
            "SBOM 是什么？为什么供应链安全需要 SBOM？如何将 SBOM 与镜像关联？",
            "如何设计一个渐进式的签名验证策略，从警告模式过渡到强制模式？"
        ],
        extensions: [
            "研究 SLSA（Supply-chain Levels for Software Artifacts）框架，了解不同级别的供应链安全要求和如何逐步提升。",
            "探索 in-toto 框架，了解如何定义和验证软件供应链的每个步骤。",
            "学习 Notary v2 和 OCI 签名规范，了解容器镜像签名的标准化进展。",
            "研究 VEX（Vulnerability Exploitability eXchange）格式，了解如何表达漏洞影响分析结果。"
        ],
        sourceUrls: [
            "https://www.sigstore.dev/",
            "https://docs.sigstore.dev/cosign/overview/",
            "https://slsa.dev/"
        ]
    },
    "w14-3": {
        lessonId: "w14-3",
        background: [
            "【Gatekeeper 定义】官方文档：Gatekeeper 是'a validating and mutating webhook that enforces CRD-based policies executed by Open Policy Agent'——通过 CRD 执行 OPA 策略的验证和变更 webhook。OPA 是 CNCF 毕业项目，Rego 语言驱动策略评估引擎。",
            "【ConstraintTemplate 与 Constraint】官方文档：ConstraintTemplate 是'extensible policy definitions'（可扩展策略定义，原生 K8s CRD）；Constraint 是'instantiations of those templates, parameterized for specific use cases'——模板实例化。分离设计允许复用策略模式，团队可适配而无需修改核心定义。",
            "【Kyverno 定义】官方文档：Kyverno 是 Kubernetes 策略引擎，支持六种策略机制——Validate（验证合规）、Mutate（自动修改）、Generate（自动创建）、Verify Images（镜像验证）、Cleanup Policy（资源清理）、Deleting Policy（删除管理）。通过 ClusterPolicy 资源配置。",
            "【策略执行机制】官方文档：Gatekeeper 通过准入控制 webhook 拦截资源操作，在创建、更新、删除时执行策略。除准入执行外，其 audit 功能可揭示现有资源的策略违规情况。Kyverno 支持后台扫描和合规报告。",
            "【策略库与测试】Gatekeeper Library 官方文档：提供验证和变更策略示例，使用 suite.yaml 定义测试用例，通过 gator CLI 工具验证。Kyverno 提供 CLI 工具用于集群外策略测试和应用。"
        ],
        keyDifficulties: [
            "【Template/Constraint 分离设计】官方文档：ConstraintTemplate 定义策略逻辑和参数 schema（可扩展策略定义）；Constraint 实例化模板，指定具体参数值和作用范围。这种分离允许'reusable policy patterns that teams can adapt without modifying core definitions'——复用策略模式无需修改核心定义。",
            "【Kyverno 策略配置】官方文档：策略通过 ClusterPolicy 资源配置，支持 resource selection via matching and exclusion rules（资源选择）、variables and external data source integration（变量和外部数据）、JMESPath expressions for complex logic、preconditions for conditional policy application。",
            "【Gatekeeper 相比 OPA 的优势】官方文档：提供'an extensible, parameterized policy library'（可扩展参数化策略库）、native Kubernetes CRD support（原生 CRD 支持）、built-in mutation capabilities（内置变更能力）、audit and external data integration（审计和外部数据集成）。",
            "【策略测试机制】官方文档：Gatekeeper Library 使用 suite.yaml 定义测试用例，包含 sample allowed and disallowed resource examples。gator CLI 工具验证策略。Kyverno 提供 CLI tooling for policy testing and application outside clusters——集群外测试应用。",
            "【策略例外管理】官方文档：Kyverno 支持 policy exceptions for targeted exemptions（针对性豁免）。策略应区分模式：Gatekeeper 的 audit 功能揭示现有违规，Kyverno 支持 background scanning and compliance reporting——后台扫描和合规报告。"
        ],
        handsOnPath: [
            "部署 Gatekeeper：使用 Helm 或 manifests 安装 Gatekeeper；验证 controller-manager 和 audit 组件运行；理解 CRD（ConstraintTemplate、Constraint、Config）。",
            "创建第一个策略（Gatekeeper）：使用 Gatekeeper Library 中的模板，如 K8sRequiredLabels；创建 Constraint 要求所有 Pod 必须有 app 标签；部署不合规 Pod 验证被拒绝；检查审计结果发现已存在的违规资源。",
            "部署 Kyverno：使用 Helm 安装 Kyverno；创建 ClusterPolicy 禁止特权容器；测试策略生效。体验 Kyverno 的 YAML 原生语法。",
            "策略测试和审计：使用 gator（Gatekeeper CLI）测试策略；检查 Gatekeeper 审计结果（kubectl get constraints -o yaml）；配置 Prometheus 监控策略违规指标。",
            "建立策略 GitOps 工作流：将策略存储在 Git 仓库；使用 ArgoCD 部署策略；在 PR 中运行策略测试；建立策略变更审批流程。"
        ],
        selfCheck: [
            "Gatekeeper 和 Kyverno 各有什么优势？什么场景下应该选择哪个？",
            "ConstraintTemplate 和 Constraint 的关系是什么？为什么要这样设计？",
            "Kyverno 支持哪些策略类型（validate/mutate/generate/cleanup）？各自的用途是什么？",
            "如何处理策略例外？有哪些最佳实践？",
            "如何测试策略？如何监控策略违规情况？"
        ],
        extensions: [
            "研究 Rego 语言深入特性，了解 comprehensions、negation、partial evaluation 等高级用法。",
            "探索 Gatekeeper 的 Mutation 功能，了解如何在准入阶段自动修改资源。",
            "学习 ValidatingAdmissionPolicy（Kubernetes 原生），了解 CEL 表达式和与 Gatekeeper/Kyverno 的对比。",
            "研究策略库（Gatekeeper Library、Kyverno Policies），了解常见策略模式和最佳实践。"
        ],
        sourceUrls: [
            "https://open-policy-agent.github.io/gatekeeper/website/docs/",
            "https://kyverno.io/docs/introduction/",
            "https://github.com/open-policy-agent/gatekeeper-library"
        ]
    },
    "w14-4": {
        lessonId: "w14-4",
        background: [
            "运行时安全是容器安全的最后一道防线。即使有准入控制，攻击者仍可能通过应用漏洞进入容器。运行时安全监控容器内的行为，检测异常活动（如反向 Shell、敏感文件访问、特权提升尝试）并告警。",
            "Falco 是 CNCF 的运行时安全项目。它通过 eBPF 探针（或内核模块）监控系统调用，使用规则引擎分析事件并生成告警。Falco 可以检测容器逃逸、加密矿工、Webshell 等常见攻击模式。",
            "Falco 规则使用 YAML 编写，包含条件（condition）和输出（output）。条件使用 Falco 的过滤语法，可以匹配进程、文件、网络等事件。规则可以通过 list 和 macro 复用。",
            "Falco 告警可以输出到多个渠道：stdout、文件、syslog、HTTP webhook、gRPC。生产环境通常集成 Falcosidekick 将告警发送到 Slack、PagerDuty、Elasticsearch、Prometheus 等。",
            "运行时安全的挑战包括：性能影响（eBPF 探针开销）、告警疲劳（规则太宽泛导致误报）、规则维护（需要根据应用行为定制）。需要在检测能力和运维成本之间平衡。"
        ],
        keyDifficulties: [
            "Falco 规则语法：rule 定义检测逻辑；condition 是过滤表达式（如 spawned_process and container）；output 定义告警内容（可使用字段变量如 %proc.name）。priority 设置告警级别（emergency/alert/critical/error/warning/notice/info/debug）。",
            "规则调优和降噪：使用 enabled: false 禁用不需要的规则；通过 exceptions 定义例外条件（如允许某些进程访问敏感文件）；调整 priority 控制告警级别；使用 falcoctl 管理规则集。",
            "与 Kubernetes 集成：Falco 通过 K8s Audit 插件接收 API Server 审计事件（补充系统调用监控）；使用 K8s 元数据丰富告警（Pod 名称、命名空间、标签）；支持 DaemonSet 部署模式。",
            "告警响应流程：告警分级和路由（按 priority/namespace）；告警去重和聚合；与 SIEM/SOAR 集成；建立响应 Runbook；定期审计和规则更新。"
        ],
        handsOnPath: [
            "部署 Falco：使用 Helm 安装 Falco（eBPF 驱动）；验证 Falco Pod 运行正常；查看 Falco 日志确认规则加载成功。",
            "触发测试告警：在容器中运行敏感命令（如 cat /etc/shadow）；创建反向 Shell（nc -e /bin/bash）；观察 Falco 告警输出。",
            "自定义规则：编写规则检测特定应用行为（如禁止访问某目录）；添加 exceptions 排除已知安全行为；使用 falco -r 测试规则语法。",
            "部署 Falcosidekick：安装 Falcosidekick；配置输出到 Slack 或 Webhook；触发测试告警，验证通知到达。",
            "集成 K8s Audit：配置 API Server 将审计日志发送到 Falco；启用 K8s Audit 规则集；检测敏感 API 操作（如 exec 进入 Pod）。"
        ],
        selfCheck: [
            "运行时安全在整体安全策略中的位置是什么？为什么准入控制不足以替代运行时监控？",
            "Falco 的工作原理是什么？它如何监控容器内的活动？",
            "Falco 规则的组成部分是什么？如何编写一个自定义规则？",
            "如何处理 Falco 告警噪音？有哪些降噪策略？",
            "如何将 Falco 集成到现有的安全运维流程中？告警应该发送到哪里？"
        ],
        extensions: [
            "研究 eBPF 技术，了解它如何实现高性能的系统调用监控，以及 Falco 的 eBPF 探针实现。",
            "探索 Sysdig（Falco 的商业版本），了解企业级运行时安全功能。",
            "学习 Tetragon（Cilium 的运行时安全组件），了解基于 eBPF 的运行时策略执行。",
            "研究 MITRE ATT&CK 框架与 Falco 规则的映射，了解如何使用 Falco 检测已知攻击技术。"
        ],
        sourceUrls: [
            "https://falco.org/docs/",
            "https://falco.org/docs/rules/",
            "https://github.com/falcosecurity/falcosidekick"
        ]
    }
}

export const week14Quizzes: Record<string, QuizQuestion[]> = {
    "w14-1": [
        {
            id: "w14-1-q1",
            question: "官方文档对 4C 安全模型的核心观点是什么？",
            options: [
                "高层安全可以弥补底层缺陷",
                "只需要关注最外层的 Cloud 安全",
                "'You cannot safeguard against poor security standards in the base layers by addressing security at a higher level'——高层无法弥补底层缺陷",
                "四层安全可以选择性实施"
            ],
            answer: 2,
            rationale: "官方文档明确：'You cannot safeguard against poor security standards in the base layers by addressing security at a higher level'——必须每层都有适当的安全控制。"
        },
        {
            id: "w14-1-q2",
            question: "官方文档定义的 Pod Security Standards 三个级别是什么？",
            options: [
                "Privileged（无限制）、Baseline（阻止已知提权）、Restricted（加固最佳实践）",
                "Low、Medium、High",
                "None、Basic、Advanced",
                "Open、Standard、Strict"
            ],
            answer: 0,
            rationale: "官方文档定义三级别：Privileged（'completely unrestricted'）、Baseline（'prevents known privilege escalations'）、Restricted（'following current Pod hardening best practices'）。"
        },
        {
            id: "w14-1-q3",
            question: "官方文档描述的 Kubernetes API 访问控制链顺序是什么？",
            options: [
                "授权 → 认证 → 准入控制",
                "准入控制 → 认证 → 授权",
                "认证 → 准入控制 → 授权",
                "认证（Authentication）→ 授权（Authorization）→ 准入控制（Admission Control）"
            ],
            answer: 3,
            rationale: "官方文档：请求经过 Authentication（确认身份）→ Authorization（检查权限）→ Admission Control（验证和变更）三阶段。"
        },
        {
            id: "w14-1-q4",
            question: "官方文档对 Privileged 级别 PSS 的描述是什么？",
            options: [
                "最安全的策略级别",
                "阻止已知的特权提升",
                "遵循 Pod 加固最佳实践",
                "'completely unrestricted policy, providing the widest possible level of permissions'——完全无限制"
            ],
            answer: 3,
            rationale: "官方文档：Privileged 是'completely unrestricted policy, providing the widest possible level of permissions'，仅适用于系统和基础设施级别的工作负载。"
        },
        {
            id: "w14-1-q5",
            question: "官方文档对 Baseline 级别禁止的内容不包括哪个？",
            options: [
                "hostNetwork/hostPID/hostIPC",
                "hostPath 挂载",
                "使用 ConfigMap 和 Secret",
                "特权容器（privileged: true）"
            ],
            answer: 2,
            rationale: "Baseline 禁止 hostNetwork/hostPID/hostIPC、hostPath、hostPorts、privileged 容器等。ConfigMap 和 Secret 是正常功能，不被禁止。"
        },
        {
            id: "w14-1-q6",
            question: "如何在命名空间级别启用 PSS 的 enforce 模式？",
            options: [
                "修改 Pod 的 YAML 配置",
                "kubectl label namespace <name> pod-security.kubernetes.io/enforce=<level>",
                "配置 API Server 参数",
                "安装第三方策略引擎"
            ],
            answer: 1,
            rationale: "官方文档：通过标签'pod-security.kubernetes.io/<MODE>: <LEVEL>'在命名空间级别执行 PSS。"
        },
        {
            id: "w14-1-q7",
            question: "官方文档对 Restricted 级别相比 Baseline 的额外要求不包括哪个？",
            options: [
                "必须以非 root 运行（runAsNonRoot: true）",
                "必须放弃所有 capabilities（drop: [ALL]）",
                "必须使用特定的镜像仓库",
                "必须禁止特权提升（allowPrivilegeEscalation: false）"
            ],
            answer: 2,
            rationale: "Restricted 要求 runAsNonRoot、drop ALL capabilities、禁止 privilege escalation、Seccomp profile。镜像仓库限制不是 PSS 的要求。"
        },
        {
            id: "w14-1-q8",
            question: "官方文档对 PSS 三种执行模式的描述是什么？",
            options: [
                "enforce（拒绝违规 Pod）、audit（记录审计事件）、warn（触发用户警告）",
                "block、log、ignore",
                "strict、moderate、permissive",
                "deny、allow、neutral"
            ],
            answer: 0,
            rationale: "官方文档：三种模式——enforce（违反时拒绝 Pod）、audit（记录审计事件但不阻止）、warn（触发用户警告但不阻止）。"
        },
        {
            id: "w14-1-q9",
            question: "4C 安全模型中 Cluster 层安全关注的两大领域是什么？",
            options: [
                "网络和存储",
                "CPU 和内存",
                "'Components that make up the cluster' 和 'Applications which run in the cluster'",
                "用户认证和日志记录"
            ],
            answer: 2,
            rationale: "官方文档：Cluster 层关注'Components that make up the cluster'（集群组件）和'Applications which run in the cluster'（运行的工作负载）。"
        },
        {
            id: "w14-1-q10",
            question: "securityContext 中 allowPrivilegeEscalation: false 的作用是什么？",
            options: [
                "禁止容器使用网络",
                "禁止进程通过 setuid 等机制获得更高权限",
                "禁止容器写入文件",
                "禁止容器使用 CPU"
            ],
            answer: 1,
            rationale: "allowPrivilegeEscalation: false 禁止容器内进程获得比父进程更高的权限，防止通过 setuid 二进制文件提权。"
        },
        {
            id: "w14-1-q11",
            question: "Pod Security Standards 替代了哪个已废弃的功能？",
            options: [
                "NetworkPolicy",
                "ResourceQuota",
                "PodSecurityPolicy（PSP，v1.25 移除）",
                "LimitRange"
            ],
            answer: 2,
            rationale: "官方文档：PSS 通过内置准入控制器实现，替代已废弃的 PodSecurityPolicy（v1.25 移除）。PSS 更简单，三个预定义级别覆盖常见场景。"
        },
        {
            id: "w14-1-q12",
            question: "官方文档建议如何推广 Pod Security Standards？",
            options: [
                "直接在所有命名空间启用 enforce 模式",
                "只在开发环境使用",
                "从 warn 模式开始评估影响，逐步过渡到 enforce",
                "不需要 PSS，使用第三方工具即可"
            ],
            answer: 2,
            rationale: "官方文档建议：从 warn 模式开始评估影响，确认工作负载合规后再切换到 enforce 模式，实现渐进式推广。"
        }
    ],
    "w14-2": [
        {
            id: "w14-2-q1",
            question: "官方文档对 Cosign 的定义是什么？",
            options: [
                "容器编排工具",
                "网络代理组件",
                "'a command line utility that is used to sign software artifacts and verify signatures using Sigstore'",
                "日志收集代理"
            ],
            answer: 2,
            rationale: "Sigstore 官方文档定义 Cosign 为'a command line utility that is used to sign software artifacts and verify signatures using Sigstore'——用于签名和验证软件制品。"
        },
        {
            id: "w14-2-q2",
            question: "官方文档对 Kubernetes Admission Controllers 执行位置的描述是什么？",
            options: [
                "'intercept requests after authentication and authorization, but before persistence'——在认证授权之后、持久化之前",
                "在认证之前执行",
                "在持久化之后执行",
                "只在 Pod 创建时执行"
            ],
            answer: 0,
            rationale: "K8s 官方文档：Admission controllers 'intercept requests to the Kubernetes API server after authentication and authorization, but before persistence of the resource'。"
        },
        {
            id: "w14-2-q3",
            question: "Keyless 签名架构中 Fulcio 的角色是什么？",
            options: [
                "存储签名记录",
                "提供 OIDC 认证服务",
                "管理容器镜像",
                "在 OIDC 身份验证后颁发短期时间戳证书"
            ],
            answer: 3,
            rationale: "官方文档：Fulcio 在 OIDC 身份验证后颁发短期时间戳证书（short-lived, time-stamped certificates），证书绑定到公钥证明身份。"
        },
        {
            id: "w14-2-q4",
            question: "官方文档描述的准入控制两阶段顺序是什么？",
            options: [
                "Validating → Mutating",
                "都是并行执行",
                "Mutating Controllers（修改请求）→ Validating Controllers（验证数据）",
                "只有一个阶段"
            ],
            answer: 2,
            rationale: "官方文档：准入控制分两阶段——Phase 1: Mutating Controllers（可修改资源）→ Phase 2: Validating Controllers（验证修改后数据，不可再修改）。"
        },
        {
            id: "w14-2-q5",
            question: "官方文档对 Policy Controller 的定义是什么？",
            options: [
                "容器运行时安全工具",
                "'Kubernetes admission controller that enforces supply-chain security by validating container image signatures'",
                "日志聚合组件",
                "网络策略控制器"
            ],
            answer: 1,
            rationale: "Sigstore 官方文档：Policy Controller 是'Kubernetes admission controller that enforces supply-chain security by validating container image signatures and attestations before deployment'。"
        },
        {
            id: "w14-2-q6",
            question: "官方文档描述的策略执行 AND/OR 逻辑是什么？",
            options: [
                "所有策略使用 OR 逻辑",
                "所有策略使用 AND 逻辑",
                "多个匹配策略全部满足（AND），每个策略内至少一个 authority 验证通过（OR）",
                "由管理员自定义逻辑"
            ],
            answer: 2,
            rationale: "官方文档：多个匹配策略必须全部满足（AND），每个策略内至少一个 authority 验证通过（OR）。"
        },
        {
            id: "w14-2-q7",
            question: "Rekor 透明日志在 Keyless 签名中的作用是什么？",
            options: [
                "不可篡改地记录签名活动，验证时检查透明日志包含性",
                "存储容器镜像",
                "提供 OIDC 认证",
                "管理密钥轮转"
            ],
            answer: 0,
            rationale: "官方文档：Rekor 不可篡改地记录签名活动（records this activity immutably）。验证时需验证透明日志包含性（confirms transparency log inclusion）。"
        },
        {
            id: "w14-2-q8",
            question: "官方文档列出的 Policy Controller Authority 类型不包括哪个？",
            options: [
                "Key-based（公钥验证）",
                "Keyless（OIDC 身份）",
                "Static（简单规则）",
                "Dynamic（动态生成）"
            ],
            answer: 3,
            rationale: "官方文档列出三种 Authority 类型：Key-based（公钥验证）、Keyless（OIDC token 和 Fulcio 证书）、Static（简单规则允许/拒绝）。不包括 Dynamic。"
        },
        {
            id: "w14-2-q9",
            question: "当准入控制任一阶段任一控制器拒绝请求时会发生什么？",
            options: [
                "继续执行其他控制器",
                "记录警告但允许请求",
                "整个请求立即被拒绝",
                "自动重试请求"
            ],
            answer: 2,
            rationale: "官方文档：'If any controller in either phase rejects the request, the entire request is rejected immediately'——任一控制器拒绝则整个请求立即被拒绝。"
        },
        {
            id: "w14-2-q10",
            question: "Policy Controller 如何确保部署镜像与验证版本匹配？",
            options: [
                "比较镜像名称",
                "比较镜像大小",
                "自动解析镜像 tag 到 SHA digest",
                "检查镜像创建时间"
            ],
            answer: 2,
            rationale: "官方文档：Policy Controller 自动解析镜像 tag 到 SHA digest（resolves image tags to SHA digests），确保部署镜像与验证版本匹配。"
        },
        {
            id: "w14-2-q11",
            question: "官方文档对 warn 模式的描述是什么？",
            options: [
                "完全阻止不合规镜像",
                "允许不合规镜像但发出警告，便于渐进式推广",
                "只记录日志不做任何操作",
                "只用于开发环境"
            ],
            answer: 1,
            rationale: "官方文档：管理员可配置 warn 模式'allowing non-compliant images while alerting users'——允许不合规镜像但发出警告，便于渐进式推广。"
        },
        {
            id: "w14-2-q12",
            question: "Keyless 签名相比传统密钥签名的核心优势是什么？",
            options: [
                "签名速度更快",
                "不需要网络连接",
                "消除传统密钥存储漏洞，通过 OIDC 身份和短期证书实现",
                "支持更多镜像格式"
            ],
            answer: 2,
            rationale: "官方文档：Keyless 模式'eliminates traditional key storage vulnerabilities while maintaining cryptographic integrity through temporal validity windows'——消除传统密钥存储漏洞。"
        }
    ],
    "w14-3": [
        {
            id: "w14-3-q1",
            question: "官方文档对 Gatekeeper 的定义是什么？",
            options: [
                "Kubernetes 原生策略机制",
                "日志收集代理",
                "'a validating and mutating webhook that enforces CRD-based policies executed by Open Policy Agent'——执行 OPA 策略的 webhook",
                "容器运行时安全工具"
            ],
            answer: 2,
            rationale: "官方文档定义 Gatekeeper 为'a validating and mutating webhook that enforces CRD-based policies executed by Open Policy Agent'——通过 CRD 执行 OPA 策略。"
        },
        {
            id: "w14-3-q2",
            question: "官方文档对 ConstraintTemplate 的定义是什么？",
            options: [
                "'extensible policy definitions'——可扩展的策略定义，原生 K8s CRD",
                "策略实例化配置",
                "审计日志模板",
                "变更操作定义"
            ],
            answer: 0,
            rationale: "官方文档：ConstraintTemplate 是'extensible policy definitions'（可扩展策略定义），是原生 Kubernetes CRD。"
        },
        {
            id: "w14-3-q3",
            question: "官方文档对 Constraint 的定义是什么？",
            options: [
                "策略逻辑的定义",
                "审计功能配置",
                "'instantiations of those templates, parameterized for specific use cases'——模板实例化",
                "全局策略配置"
            ],
            answer: 2,
            rationale: "官方文档：Constraint 是'instantiations of those templates, parameterized for specific use cases'——ConstraintTemplate 的实例化。"
        },
        {
            id: "w14-3-q4",
            question: "官方文档描述 Kyverno 支持哪些策略机制？",
            options: [
                "只支持 Validate 和 Mutate",
                "只支持验证功能",
                "只支持 Generate 和 Cleanup",
                "Validate、Mutate、Generate、Verify Images、Cleanup Policy、Deleting Policy——六种机制"
            ],
            answer: 3,
            rationale: "官方文档：Kyverno 支持六种策略机制——Validate、Mutate、Generate、Verify Images、Cleanup Policy、Deleting Policy。"
        },
        {
            id: "w14-3-q5",
            question: "官方文档对 Template/Constraint 分离设计优势的描述是什么？",
            options: [
                "'reusable policy patterns that teams can adapt without modifying core definitions'——复用策略模式无需修改核心定义",
                "提高执行性能",
                "减少存储空间",
                "简化 Rego 语法"
            ],
            answer: 0,
            rationale: "官方文档：分离设计允许'reusable policy patterns that teams can adapt without modifying core definitions'——团队可适配而无需修改核心定义。"
        },
        {
            id: "w14-3-q6",
            question: "官方文档描述 Gatekeeper 相比 OPA 的优势不包括哪个？",
            options: [
                "'an extensible, parameterized policy library'（可扩展参数化策略库）",
                "'native Kubernetes CRD support'（原生 CRD 支持）",
                "自动生成 Rego 代码",
                "'built-in mutation capabilities'（内置变更能力）"
            ],
            answer: 2,
            rationale: "官方文档列出优势：可扩展参数化策略库、原生 CRD 支持、内置变更能力、审计和外部数据集成。不包括自动生成 Rego 代码。"
        },
        {
            id: "w14-3-q7",
            question: "官方文档描述 Gatekeeper 的 audit 功能作用是什么？",
            options: [
                "只审计新创建的资源",
                "记录用户登录行为",
                "监控网络流量",
                "揭示现有资源的策略违规情况"
            ],
            answer: 3,
            rationale: "官方文档：Gatekeeper 的 audit 功能可'揭示现有资源的策略违规情况'——除准入执行外的重要补充。"
        },
        {
            id: "w14-3-q8",
            question: "官方文档描述 Kyverno 策略配置支持哪些功能？",
            options: [
                "只支持简单标签匹配",
                "'resource selection via matching and exclusion rules'、'variables and external data source integration'、JMESPath expressions、preconditions",
                "只支持命名空间过滤",
                "不支持外部数据源"
            ],
            answer: 1,
            rationale: "官方文档：Kyverno 策略支持 resource selection、variables、external data integration、JMESPath expressions、preconditions 等。"
        },
        {
            id: "w14-3-q9",
            question: "官方文档描述 Gatekeeper Library 使用什么定义测试用例？",
            options: [
                "使用 suite.yaml 定义测试用例，包含 sample allowed and disallowed resource examples",
                "使用 JSON Schema 文件",
                "使用 Go 测试代码",
                "不支持测试功能"
            ],
            answer: 0,
            rationale: "官方文档：Gatekeeper Library 使用 suite.yaml 定义测试用例，包含'sample allowed and disallowed resource examples'。"
        },
        {
            id: "w14-3-q10",
            question: "官方文档对 gator CLI 工具的描述是什么？",
            options: [
                "用于部署 Gatekeeper",
                "用于监控集群健康",
                "用于验证策略——'gator CLI 工具验证策略'",
                "用于管理 Git 仓库"
            ],
            answer: 2,
            rationale: "官方文档：gator CLI 工具用于验证策略，Gatekeeper Library 使用它进行策略测试。"
        },
        {
            id: "w14-3-q11",
            question: "官方文档对 Kyverno 后台扫描功能的描述是什么？",
            options: [
                "不支持后台扫描",
                "'background scanning and compliance reporting'——后台扫描和合规报告",
                "只在启动时扫描一次",
                "需要额外购买许可"
            ],
            answer: 1,
            rationale: "官方文档：Kyverno 支持'background scanning and compliance reporting'——后台扫描和合规报告功能。"
        },
        {
            id: "w14-3-q12",
            question: "官方文档对 Kyverno 策略例外功能的描述是什么？",
            options: [
                "不支持策略例外",
                "只能通过修改策略实现",
                "必须重新部署 Kyverno",
                "'policy exceptions for targeted exemptions'——针对性豁免"
            ],
            answer: 3,
            rationale: "官方文档：Kyverno 支持'policy exceptions for targeted exemptions'（针对性豁免），允许为特定资源定义例外。"
        }
    ],
    "w14-4": [
        {
            id: "w14-4-q1",
            question: "Falco 的主要用途是什么？",
            options: [
                "容器编排",
                "运行时安全监控，检测容器内异常行为",
                "网络代理",
                "日志聚合"
            ],
            answer: 1,
            rationale: "Falco 是运行时安全工具，通过监控系统调用检测容器内的异常行为，如反向 Shell、敏感文件访问等。"
        },
        {
            id: "w14-4-q2",
            question: "Falco 如何监控容器行为？",
            options: [
                "通过网络代理",
                "通过 eBPF 探针或内核模块监控系统调用",
                "通过日志分析",
                "通过镜像扫描"
            ],
            answer: 1,
            rationale: "Falco 使用 eBPF 探针（推荐）或内核模块捕获系统调用，然后通过规则引擎分析并生成告警。"
        },
        {
            id: "w14-4-q3",
            question: "Falco 规则的核心组成部分是什么？",
            options: [
                "只有规则名称",
                "rule、condition、output、priority 等",
                "只有输出格式",
                "只有优先级"
            ],
            answer: 1,
            rationale: "Falco 规则包含 rule（名称）、condition（过滤条件）、output（告警输出）、priority（告警级别）等字段。"
        },
        {
            id: "w14-4-q4",
            question: "以下哪个不是 Falco 可以检测的行为？",
            options: [
                "容器内打开反向 Shell",
                "访问 /etc/shadow 文件",
                "Pod 副本数变化",
                "特权容器启动"
            ],
            answer: 2,
            rationale: "Pod 副本数变化是 Kubernetes 资源层面的变化，不是系统调用层面的行为。Falco 监控的是系统调用级别的活动。"
        },
        {
            id: "w14-4-q5",
            question: "Falcosidekick 的作用是什么？",
            options: [
                "替代 Falco",
                "将 Falco 告警转发到多种输出渠道（Slack、PagerDuty 等）",
                "生成 Falco 规则",
                "管理 Falco 部署"
            ],
            answer: 1,
            rationale: "Falcosidekick 是 Falco 的告警路由器，可以将告警发送到 Slack、PagerDuty、Elasticsearch、Prometheus 等多种渠道。"
        },
        {
            id: "w14-4-q6",
            question: "如何降低 Falco 告警噪音？",
            options: [
                "禁用 Falco",
                "使用 exceptions 定义例外、禁用不需要的规则、调整 priority",
                "只看高优先级告警",
                "减少监控的容器数量"
            ],
            answer: 1,
            rationale: "可以通过 exceptions 定义例外条件、禁用不适用的规则、调整告警 priority 来降低误报和噪音。"
        },
        {
            id: "w14-4-q7",
            question: "Falco 支持哪些事件源？",
            options: [
                "只支持系统调用",
                "系统调用、Kubernetes Audit 日志、CloudTrail 等（通过插件）",
                "只支持网络事件",
                "只支持文件事件"
            ],
            answer: 1,
            rationale: "Falco 除了监控系统调用，还可以通过插件接收 Kubernetes Audit 日志、CloudTrail 等事件源。"
        },
        {
            id: "w14-4-q8",
            question: "Falco 规则中 priority 字段的作用是什么？",
            options: [
                "定义规则执行顺序",
                "定义告警严重级别（emergency、alert、critical 等）",
                "定义输出格式",
                "定义过滤条件"
            ],
            answer: 1,
            rationale: "priority 定义告警严重级别，从 emergency（最高）到 debug（最低），用于告警分级和路由。"
        },
        {
            id: "w14-4-q9",
            question: "运行时安全在整体安全策略中的位置是什么？",
            options: [
                "可以替代所有其他安全措施",
                "是最后一道防线，监控已经进入容器的攻击行为",
                "只在开发环境需要",
                "与其他安全措施无关"
            ],
            answer: 1,
            rationale: "运行时安全是纵深防御的最后一道防线，即使有准入控制，攻击者仍可能通过应用漏洞进入容器，此时需要运行时监控。"
        },
        {
            id: "w14-4-q10",
            question: "Falco 如何与 Kubernetes 集成？",
            options: [
                "替代 kubelet",
                "以 DaemonSet 部署，使用 K8s 元数据丰富告警",
                "作为 Service 运行",
                "修改 API Server"
            ],
            answer: 1,
            rationale: "Falco 通常以 DaemonSet 部署在每个节点，并使用 Kubernetes 元数据（Pod 名称、命名空间等）丰富告警信息。"
        },
        {
            id: "w14-4-q11",
            question: "eBPF 相比内核模块有什么优势？",
            options: [
                "功能更多",
                "更安全稳定，不会导致内核崩溃，无需重新编译",
                "性能更差",
                "更难使用"
            ],
            answer: 1,
            rationale: "eBPF 在内核沙箱中运行，更安全稳定，不会导致内核崩溃，且无需为每个内核版本重新编译。"
        },
        {
            id: "w14-4-q12",
            question: "Falco 规则中 macro 的作用是什么？",
            options: [
                "定义输出格式",
                "定义可复用的条件片段",
                "定义告警级别",
                "定义事件源"
            ],
            answer: 1,
            rationale: "macro 定义可复用的条件片段，可以在多个规则中引用，减少重复代码并提高可维护性。"
        },
        {
            id: "w14-4-q13",
            question: "Falco K8s Audit 插件的作用是什么？",
            options: [
                "替代 API Server",
                "接收 API Server 审计日志，检测敏感 API 操作",
                "管理 Pod",
                "网络代理"
            ],
            answer: 1,
            rationale: "K8s Audit 插件让 Falco 接收 API Server 审计日志，可以检测敏感 API 操作如 exec 进入 Pod、创建特权容器等。"
        },
        {
            id: "w14-4-q14",
            question: "Falco 默认规则集可以检测什么？",
            options: [
                "只能检测网络攻击",
                "特权提升、敏感目录修改、反向 Shell、可疑进程执行等",
                "只能检测文件变化",
                "只能检测登录行为"
            ],
            answer: 1,
            rationale: "Falco 默认规则集覆盖常见攻击模式，包括特权提升、敏感目录（/etc、/usr/bin）修改、Shell 执行等。"
        },
        {
            id: "w14-4-q15",
            question: "如何测试 Falco 规则是否生效？",
            options: [
                "只能等待真实攻击",
                "在容器中执行触发规则的操作（如 cat /etc/shadow），观察告警",
                "修改 Falco 代码",
                "重启集群"
            ],
            answer: 1,
            rationale: "可以故意触发规则条件（如读取敏感文件、运行 Shell）来测试规则是否正确生成告警。"
        }
    ]
}
