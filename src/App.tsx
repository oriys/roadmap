import React from "react"
import {
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  Brain,
  ClipboardList,
  GraduationCap,
  Layers,
  Lightbulb,
  ListChecks,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { docQuestionMap } from "@/lib/doc-questions"
import { lessonOverviewMap } from "@/lib/lesson-overviews"
import { customLessonQuizzes, type QuizQuestion } from "@/lib/lesson-quizzes"

type Resource = { title: string; url: string }
type Lesson = { id: string; title: string; detail: string; overview?: string; keyPoints?: string[]; resources: Resource[] }
type Week = { id: string; title: string; summary: string; overview?: string; keyPoints?: string[]; lessons: Lesson[] }
type Stage = { id: string; title: string; duration: string; goal: string; weeks: Week[] }
type KnowledgeCard = { id: string; title: string; summary: string; points: string[]; practice: string }
type QuizState = { answers: Record<string, number | undefined>; attempts: number; bestScore?: number; lastScore?: number }
type LessonQuizState = { answers: Record<string, number | undefined>; attempts: number; bestScore?: number; lastScore?: number }
type DocQuizProgress = Record<string, number[]>
type ResourceContext = { resource: Resource; lesson: Lesson; week: Week; stage: Stage }

type RoadmapId = "kubernetes" | "technical-writer" | "git-github"
type RoadmapDefinition = {
  id: RoadmapId
  label: string
  title: string
  durationLabel: string
  description: string
  heroBadge: string
  stages: Stage[]
  knowledgeCards: KnowledgeCard[]
  examQuestions: QuizQuestion[]
  suggestion: (percent: number) => string
  resourceGuide: {
    environment: string
    fallbackKeyPoints: string[]
    handsOnSteps: string[]
    selfChecks: string[]
    extensions: string[]
    lessonQuizAdvice: string
  }
}

function getLessonOverview(lesson: Lesson): string | undefined {
  return lesson.overview || lessonOverviewMap[lesson.id.toLowerCase()]
}

function hashToUint32(input: string): number {
  let hash = 2166136261
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i)
    hash = Math.imul(hash, 16777619)
  }
  return hash >>> 0
}

function mulberry32(seed: number) {
  let state = seed >>> 0
  return () => {
    state += 0x6d2b79f5
    let t = state
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function shuffledOrder(length: number, seed: number): number[] {
  const order = Array.from({ length }, (_, idx) => idx)
  const rand = mulberry32(seed)
  for (let i = order.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1))
    const tmp = order[i]
    order[i] = order[j]
    order[j] = tmp
  }
  return order
}

function shuffleQuizOptions(question: QuizQuestion): QuizQuestion {
  if (question.options.length <= 1) return question
  const order = shuffledOrder(question.options.length, hashToUint32(question.id))
  const options = order.map((idx) => question.options[idx])
  const answer = order.indexOf(question.answer)
  if (answer === -1) return question
  return { ...question, options, answer }
}

function createLessonQuiz(lesson: Lesson, week: Week, stage: Stage): QuizQuestion[] {
  const resTitle = lesson.resources[0]?.title || lesson.title
  const keyPoint =
    lesson.keyPoints?.[0] ||
    week.keyPoints?.[0] ||
    `如何将 ${lesson.title} 落地到 ${stage.goal.replace("目标：", "") || "业务场景"}`
  const verification = "按照官方/权威资料完成最小可行练习，并用输出/截图/测试/日志等证据验证结果"
  const baseline = lesson.detail
  const stageGoal = stage.goal
  const weekSummary = week.summary
  const practicePath = week.overview || week.summary || stage.goal
  const keyPointSecondary = lesson.keyPoints?.[1] || week.keyPoints?.[1] || stage.goal
  const successSignal = "输出/截图/测试结果与文档预期一致，且步骤可复现"
  return [
    {
      id: `${lesson.id}-what`,
      question: `官方文档聚焦的核心主题（What）是？`,
      options: [baseline, weekSummary, stageGoal, "与本节无关的内容"],
      answer: 0,
      rationale: `聚焦 ${lesson.title} 本身，来源：${resTitle}。`,
    },
    {
      id: `${lesson.id}-why`,
      question: `官方推荐在此阶段学习它的原因（Why）？`,
      options: [stageGoal, weekSummary, keyPoint, "仅为了演示，无生产价值"],
      answer: 0,
      rationale: `与阶段目标对齐，确保落地价值：${stageGoal}。`,
    },
    {
      id: `${lesson.id}-how`,
      question: `How：官方最小可行实践的正确验证方式？`,
      options: [verification, "只阅读不执行", "跳过验证直接上线", "等待他人验证"],
      answer: 0,
      rationale: "先跑通示例，再用可观察证据确认结果，形成可复制的闭环。",
    },
    {
      id: `${lesson.id}-risk`,
      question: `官方/生产常见风险如何排查？`,
      options: [
        "按层次检查前置条件/权限/配置/输入输出/边界条件，结合错误信息和示例定位",
        "先重启一切再说",
        "忽略告警，等待自愈",
        "只看局部现象，不回到文档与步骤复现",
      ],
      answer: 0,
      rationale: "按层次排查并回到文档/示例复现，是权威推荐的高效路径。",
    },
    {
      id: `${lesson.id}-resource`,
      question: `权威参考资料首选哪一个？`,
      options: [resTitle, "随机博客", "短视频碎片", "与主题无关的教程"],
      answer: 0,
      rationale: `优先使用官方/权威资料：${resTitle}。`,
    },
    {
      id: `${lesson.id}-ops`,
      question: `实操验收标准（How well）：哪种描述最符合官方示例？`,
      options: [
        "输出/截图/测试与官方示例一致，关键检查点通过",
        "未执行也算完成",
        "只要配置文件存在即可",
        "跳过验证",
      ],
      answer: 0,
      rationale: "以可观察证据为准，符合官方示例预期才算验收。",
    },
    {
      id: `${lesson.id}-path`,
      question: `动手实验的推荐路径或场景更接近哪段描述？`,
      options: [practicePath, stageGoal, "跳过实验只背诵概念", "只看第三方博客，不看官方示例"],
      answer: 0,
      rationale: `周概览/总结给出的实践路线最贴近官方建议：${practicePath}。`,
    },
    {
      id: `${lesson.id}-signal`,
      question: `完成实验后，什么信号最能证明配置/行为与文档一致？`,
      options: [
        successSignal,
        "只要界面显示 OK 就算成功，不看输出与验证步骤",
        "未验证直接删除资源",
        "只在本地记录命令，不关注实际输出",
      ],
      answer: 0,
      rationale: "需要用输出/截图/测试/日志等证据确认效果，而非仅凭状态值。",
    },
    {
      id: `${lesson.id}-key`,
      question: `下列哪条更能代表本节需要特别关注的关键点？`,
      options: [keyPoint, keyPointSecondary, weekSummary, "与主题无关的泛泛技巧"],
      answer: 0,
      rationale: `关键点来自周/节的重点提示：${keyPoint}。`,
    },
    {
      id: `${lesson.id}-handoff`,
      question: `本节成果如何与阶段目标衔接？`,
      options: [
        `把本节实践沉淀为模板/脚本，支撑“${stageGoal}”这一阶段目标`,
        "仅在本地做一次性尝试，与阶段目标无关",
        "跳过与后续周的关联",
        "只关注理论，不做落地",
      ],
      answer: 0,
      rationale: `阶段目标是学习顺序的依据，需将本节产出服务于：${stageGoal}。`,
    },
  ]
}

function buildLessonQuizCanonical(lesson: Lesson, week: Week, stage: Stage): QuizQuestion[] {
  const minQuestions = 10
  const maxQuestions = 30
  const base = createLessonQuiz(lesson, week, stage)
  const custom = customLessonQuizzes[lesson.id] || []
  if (!custom.length) return base
  if (custom.length >= minQuestions) return custom.slice(0, maxQuestions)
  const customIds = new Set(custom.map((q) => q.id))
  const merged = [...custom, ...base.filter((q) => !customIds.has(q.id))]
  return merged.slice(0, minQuestions)
}

function buildLessonQuiz(lesson: Lesson, week: Week, stage: Stage): QuizQuestion[] {
  return buildLessonQuizCanonical(lesson, week, stage).map(shuffleQuizOptions)
}

const kubernetesStages: Stage[] = [
  {
    id: "phase1",
    title: "第一阶段：基石与容器化",
    duration: "第 1-3 周",
    goal: "理解云原生的底层基石，掌握容器运行时与镜像构建。",
    weeks: [
      {
        id: "w1",
        title: "第 1 周：Linux 内核与网络基础",
        summary: "从 Namespaces 到 Cgroups，理解“容器只是被雕刻过的 Linux”。",
        overview: "掌握容器三板斧：隔离（namespaces）、限流（cgroups）、存储/网络虚拟化（overlayfs + veth/bridge），为后续容器与 K8s 行为打下内核直觉。",
        keyPoints: [
          "弄清每种 namespace 的作用域与可见性（PID/Net/Mount），结合 hostPID/hostNetwork 理解逃逸排查。",
          "cgroups v1 vs v2 的层级与统一层级差异，CPU/内存压力下的行为与 OOM 信号。",
          "OverlayFS COW 路径与写放大；veth+bridge+iptables 的数据路径与抓包位置。",
        ],
        lessons: [
          {
            id: "w1-1",
            title: "Linux 进程隔离：用 Namespaces 划定边界",
            detail: "深入理解 Namespaces（PID、Network、Mount）如何制造“隔离的假象”。",
            resources: [
              { title: "namespaces man7", url: "https://man7.org/linux/man-pages/man7/namespaces.7.html" },
              { title: "Linux namespaces 指南", url: "https://docs.kernel.org/admin-guide/namespaces/index.html" },
              { title: "Play with Docker（在线容器实验）", url: "https://labs.play-with-docker.com/" },
            ],
          },
          {
            id: "w1-2",
            title: "Cgroups 资源治理：CPU/内存限额与调度",
            detail: "详解 Cgroups（v1/v2）如何限制 CPU 和内存使用。",
            resources: [
              { title: "cgroup v2 内核文档", url: "https://www.kernel.org/doc/html/latest/admin-guide/cgroup-v2.html" },
              { title: "cgroups man7", url: "https://man7.org/linux/man-pages/man7/cgroups.7.html" },
              { title: "容器资源限制示例（Docker 官方）", url: "https://docs.docker.com/engine/containers/resource_constraints/" },
            ],
          },
          {
            id: "w1-3",
            title: "镜像分层与联合文件系统：OverlayFS 解剖",
            detail: "剖析 Overlay2 存储驱动与 Copy-on-Write 机制。",
            resources: [
              { title: "Docker OverlayFS 驱动", url: "https://docs.docker.com/engine/storage/drivers/overlayfs-driver/" },
              { title: "Linux overlayfs 内核文档", url: "https://docs.kernel.org/filesystems/overlayfs.html" },
              { title: "容器镜像与层演示（官方教程）", url: "https://docs.docker.com/get-started/docker-overview/#images" },
            ],
          },
          {
            id: "w1-4",
            title: "容器网络入门：veth/bridge/iptables 数据路径",
            detail: "虚拟网桥、Veth Pair 与 iptables 在容器通信中的作用。",
            resources: [
              { title: "Docker Bridge 网络", url: "https://docs.docker.com/engine/network/drivers/bridge/" },
              { title: "veth(4) man7", url: "https://man7.org/linux/man-pages/man4/veth.4.html" },
              { title: "Docker 端口发布与防火墙", url: "https://docs.docker.com/engine/network/packet-filtering-firewalls/" },
            ],
          },
        ],
      },
      {
        id: "w2",
        title: "第 2 周：容器技术进阶",
        summary: "从 Docker 架构到 OCI 标准，写出可维护、可移植的镜像。",
        overview: "区分 CLI/Daemon/Runtime 责任，理解镜像规范与多阶段构建，让镜像可移植、体积小、启动快。",
        keyPoints: [
          "Docker -> containerd -> runc 调用链与 shim 作用，Kubelet 通过 CRI 对接。",
          "多阶段构建、最小 base、layer 缓存命中策略；构建上下文瘦身。",
          "OCI Image/Runtime/Distribution 规范与 CRI-O/containerd 的兼容性。",
        ],
        lessons: [
          {
            id: "w2-1",
            title: "Docker 架构链路：CLI → Daemon → containerd → runc",
            detail: "Docker CLI、Daemon、Containerd 与 Runc 的关系。",
            resources: [
              { title: "Docker 官方概览", url: "https://docs.docker.com/get-started/overview/" },
              { title: "containerd 架构", url: "https://github.com/containerd/containerd/blob/main/docs/PLUGINS.md" },
              { title: "Docker CLI 与 Daemon 交互演示", url: "https://docs.docker.com/get-started/" },
            ],
          },
          {
            id: "w2-2",
            title: "Dockerfile 工程化：多阶段构建与镜像瘦身",
            detail: "多阶段构建、镜像瘦身与层缓存优化。",
            resources: [
              { title: "多阶段构建", url: "https://docs.docker.com/build/building/multi-stage/" },
              { title: "Dockerfile 工程化：多阶段构建与镜像瘦身", url: "https://docs.docker.com/build/building/best-practices/" },
              { title: "CI 中构建镜像（官方示例）", url: "https://docs.docker.com/build/ci/" },
            ],
          },
          {
            id: "w2-3",
            title: "容器运行时演进：从 dockershim 到 CRI 生态",
            detail: "为何 K8s 移除 Docker Shim？Containerd 与 CRI-O 的区别。",
            resources: [
              { title: "Dockershim FAQ（K8s 官方）", url: "https://kubernetes.io/blog/2020/12/02/dockershim-faq/" },
              { title: "CRI-O 官方文档", url: "https://cri-o.io/" },
              { title: "Kubelet CRI 说明", url: "https://kubernetes.io/docs/concepts/architecture/cri/" },
            ],
          },
          {
            id: "w2-4",
            title: "OCI 标准全景：Image/Runtime/Distribution 互操作",
            detail: "Image Spec & Runtime Spec 的意义与生态影响。",
            resources: [
              { title: "OCI Runtime Spec", url: "https://github.com/opencontainers/runtime-spec" },
              { title: "OCI Image Spec", url: "https://github.com/opencontainers/image-spec" },
              { title: "OCI Distribution 规范", url: "https://github.com/opencontainers/distribution-spec" },
            ],
          },
        ],
      },
      {
        id: "w3",
        title: "第 3 周：Kubernetes 架构与部署",
        summary: "迈入 K8s：入门概念、架构、声明式 API 与 Pod 生命周期。",
        overview:
          "补齐入门概念与术语（Why/What/核心对象），再动手用 kubeadm/minikube/kind 拉起集群，部署第一个应用并体验声明式 API 与调和循环。",
        keyPoints: [
          "为什么需要 Kubernetes：解决部署、伸缩与自愈问题；理解核心对象（Pod/Service/Deployment/Namespace）与常见术语。",
          "API Server + etcd + Scheduler + Controller Manager 的职责边界，kubelet/kube-proxy 的节点责任。",
          "声明式 vs 命令式：期望状态、调和循环、finalizer，kubectl apply/patch 的差异。",
          "Pod 生命周期：Init/Probes/重启策略，常见 CrashLoopBackOff 排查路径。",
        ],
        lessons: [
          {
            id: "w3-1",
            title: "K8s 核心架构：组件职责与调和循环",
            detail: "控制平面（API Server、Etcd、Scheduler）与工作节点（Kubelet、Kube-proxy）。",
            resources: [
              { title: "Kubernetes 组件概览", url: "https://kubernetes.io/docs/concepts/overview/components/" },
              { title: "What is Kubernetes?", url: "https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/" },
              { title: "Kubernetes Glossary", url: "https://kubernetes.io/docs/reference/glossary/" },
              { title: "Controller 模式", url: "https://kubernetes.io/docs/concepts/architecture/controller/" },
              { title: "Kubernetes Alternatives（Nomad）", url: "https://developer.hashicorp.com/nomad/docs" },
              { title: "Kubernetes Alternatives（Docker Swarm）", url: "https://docs.docker.com/engine/swarm/" },
            ],
          },
          {
            id: "w3-2",
            title: "集群搭建实战：kubeadm/minikube/kind 验证链路",
            detail: "Kubeadm 或 Minikube/Kind 的快速集群搭建，并部署第一个应用验证链路。",
            resources: [
              { title: "kubeadm 创建集群", url: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/" },
              { title: "minikube 快速开始", url: "https://minikube.sigs.k8s.io/docs/start/" },
              { title: "kind 快速开始", url: "https://kind.sigs.k8s.io/docs/user/quick-start/" },
              { title: "kubeadm HA 部署指南", url: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/ha-topology/" },
              { title: "部署第一个应用（Kubernetes Basics）", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/deploy-app/deploy-intro/" },
              { title: "暴露服务（Kubernetes Basics）", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/expose/expose-intro/" },
              { title: "生产环境方案（托管/发行版）", url: "https://kubernetes.io/docs/setup/production-environment/turnkey-solutions/" },
            ],
          },
          {
            id: "w3-3",
            title: "声明式 API 与 YAML：期望状态到调和的路径",
            detail: "期望状态 vs 实际状态，理解 Reconciliation Loop。",
            resources: [
              { title: "Kubernetes 对象", url: "https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/" },
              { title: "声明式配置", url: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/" },
              { title: "kubectl 应用/补丁示例", url: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/" },
            ],
          },
          {
            id: "w3-4",
            title: "Pod 生命周期：探针、重启策略与常见故障",
            detail: "Init Containers、Liveness/Readiness Probe 与 CrashLoopBackOff 排查。",
            resources: [
              { title: "Pod 生命周期：探针、重启策略与常见故障", url: "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/" },
              { title: "探针配置", url: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/" },
              { title: "调试 Pod 重启与探针", url: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "phase2",
    title: "第二阶段：K8s 核心编排",
    duration: "第 4-7 周",
    goal: "熟练使用工作负载、服务发现、存储与调度策略。",
    weeks: [
      {
        id: "w4",
        title: "第 4 周：工作负载管理",
        summary: "控制器模式与流量入口，掌握发布与路由。",
        overview: "掌握工作负载控制器（Deployment/Job/CronJob）与发布策略，理解 Service/Ingress 如何让应用被发现、负载均衡并对外暴露。",
        keyPoints: [
          "Deployment/ReplicaSet 与 Job/CronJob 的差异：长运行服务 vs 批处理任务；发布策略、探针配合与回滚。",
          "Service 类型（ClusterIP/NodePort/LB）与 kube-proxy iptables/IPVS 流量路径。",
          "Ingress Controller/Ingress 规则与 TLS、Host/Path 路由、常见 404/调试。",
        ],
        lessons: [
          {
            id: "w4-1",
            title: "控制器模式：Deployment/Job 的发布与回滚",
            detail: "Deployment/ReplicaSet 的滚动更新与回滚，以及 Job/CronJob 批处理控制器。",
            resources: [
              { title: "Deployment 官方文档", url: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/" },
              { title: "Job", url: "https://kubernetes.io/docs/concepts/workloads/controllers/job/" },
              { title: "CronJob", url: "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/" },
              { title: "滚动更新与回滚", url: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-update-deployment" },
              { title: "滚动更新动手实验", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/update/update-intro/" },
            ],
          },
          {
            id: "w4-2",
            title: "Service 服务发现：ClusterIP/NodePort/LoadBalancer 路径",
            detail: "ClusterIP、NodePort、LoadBalancer 的实现原理。",
            resources: [
              { title: "Service 类型", url: "https://kubernetes.io/docs/concepts/services-networking/service/" },
              { title: "kube-proxy 模式", url: "https://kubernetes.io/docs/concepts/services-networking/service/#kube-proxy-iptables-vs-ipvs" },
              { title: "Guestbook 示例（Service 实战）", url: "https://github.com/kubernetes/examples/tree/master/guestbook" },
            ],
          },
          {
            id: "w4-3",
            title: "Ingress 与入口控制器：路由、TLS 与常见 4xx/5xx",
            detail: "Nginx Ingress Controller 与域名路由规则。",
            resources: [
              { title: "Ingress 概念", url: "https://kubernetes.io/docs/concepts/services-networking/ingress/" },
              { title: "Ingress-NGINX 文档", url: "https://kubernetes.github.io/ingress-nginx/user-guide/basic-usage/" },
              { title: "Minikube Ingress 实践", url: "https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/" },
            ],
          },
          {
            id: "w4-4",
            title: "资源治理：requests/limits 与配额模型落地",
            detail: "Requests/Limits 与 QoS 资源治理，配合 Namespace/ResourceQuota/LimitRange 做多租户配额。",
            resources: [
              { title: "管理容器资源（Requests/Limits/QoS）", url: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/" },
              { title: "ResourceQuota / LimitRange", url: "https://kubernetes.io/docs/concepts/policy/resource-quotas/" },
              { title: "Namespaces", url: "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/" },
              { title: "资源配额示例", url: "https://kubernetes.io/docs/tasks/administer-cluster/manage-resources/quota-memory-cpu-namespace/" },
            ],
          },
        ],
      },
      {
        id: "w5",
        title: "第 5 周：存储与配置管理",
        summary: "ConfigMap/Secret 解耦配置，PV/PVC 与 CSI 动态供给。",
        overview: "把配置与状态从镜像里剥离，理解 PVC 绑定与回收策略，能选用合适的存储类与卷类型。",
        keyPoints: [
          "ConfigMap/Secret 挂载方式（env/volume）、更新生效行为、敏感信息防泄露。",
          "PV/PVC 生命周期、回收策略、访问模式（RWO/ROX/RWX）与容量规划。",
          "StorageClass + CSI 动态供给、快照与扩容支持，StatefulSet 绑定有序身份。",
        ],
        lessons: [
          {
            id: "w5-1",
            title: "配置解耦：ConfigMap/Secret 安全注入与滚动更新",
            detail: "ConfigMap & Secret 的注入方式（Env vs Volume）。",
            resources: [
              { title: "ConfigMap", url: "https://kubernetes.io/docs/concepts/configuration/configmap/" },
              { title: "Secret", url: "https://kubernetes.io/docs/concepts/configuration/secret/" },
              { title: "ConfigMap 注入示例", url: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/" },
            ],
          },
          {
            id: "w5-2",
            title: "持久化存储基础：PV/PVC 生命周期与权限",
            detail: "PV 与 PVC 的绑定生命周期。",
            resources: [
              { title: "Persistent Volumes", url: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/" },
              { title: "卷生命周期", url: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#claims-as-volumes" },
              { title: "PVC 动手示例", url: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-persistent-volume-storage/" },
            ],
          },
          {
            id: "w5-3",
            title: "动态供给：StorageClass + CSI 的按需扩容与快照",
            detail: "StorageClass 与 CSI 插件机制。",
            resources: [
              { title: "StorageClass", url: "https://kubernetes.io/docs/concepts/storage/storage-classes/" },
              { title: "CSI 卷", url: "https://kubernetes.io/docs/concepts/storage/volumes/#csi" },
              { title: "动态供给详解", url: "https://kubernetes.io/docs/concepts/storage/dynamic-provisioning/" },
            ],
          },
          {
            id: "w5-4",
            title: "有状态应用：StatefulSet 稳定身份与存储绑定",
            detail: "StatefulSet 特性与 Headless Service。",
            resources: [
              { title: "StatefulSet", url: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/" },
              { title: "Headless Service", url: "https://kubernetes.io/docs/concepts/services-networking/service/#headless-services" },
              { title: "StatefulSet 示例", url: "https://kubernetes.io/docs/tutorials/stateful-application/basic-stateful-set/" },
            ],
          },
        ],
      },
      {
        id: "w6",
        title: "第 6 周：调度与高级网络",
        summary: "把应用放到正确的节点上，并限制流量。",
        overview: "用亲和/反亲和、优先级、污点/容忍把工作负载放对位置，并理解驱逐/中断；再用 NetworkPolicy/CNI 控制网络可达性与隔离。",
        keyPoints: [
          "节点/Pod 亲和与反亲和适用场景，拓扑分布约束应对跨可用区的分布。",
          "Pod Priority/Preemption 与污点/容忍的匹配逻辑，常见专用节点/NoSchedule/NoExecute 场景。",
          "NetworkPolicy 默认允许→显式拒绝模型，CNI 插件差异（Overlay vs BGP）。",
        ],
        lessons: [
          {
            id: "w6-1",
            title: "高级调度：亲和/反亲和、拓扑分布与优先级",
            detail: "亲和/拓扑分布、PriorityClass/Preemption，以及自定义调度扩展点。",
            resources: [
              { title: "节点亲和/反亲和", url: "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/" },
              { title: "拓扑分布约束", url: "https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/" },
              { title: "Pod Priority & Preemption", url: "https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/" },
              { title: "Scheduling Framework", url: "https://kubernetes.io/docs/concepts/scheduling-eviction/scheduling-framework/" },
              { title: "配置多调度器", url: "https://kubernetes.io/docs/tasks/extend-kubernetes/configure-multiple-schedulers/" },
            ],
          },
          {
            id: "w6-2",
            title: "污点与容忍：专用节点、驱逐保护与 PDB 配合",
            detail: "Taints & Tolerations 以及驱逐/中断（PDB）相关机制。",
            resources: [
              { title: "Taints & Tolerations", url: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/" },
              { title: "污点容忍示例", url: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/#example-use-cases" },
              { title: "Pod Disruption Budget & Disruptions", url: "https://kubernetes.io/docs/concepts/workloads/pods/disruptions/" },
            ],
          },
          {
            id: "w6-3",
            title: "NetworkPolicy 实战：默认拒绝到精细白名单",
            detail: "NetworkPolicy 的默认拒绝与白名单模式。",
            resources: [
              { title: "NetworkPolicy", url: "https://kubernetes.io/docs/concepts/services-networking/network-policies/" },
              { title: "默认拒绝与白名单示例", url: "https://kubernetes.io/docs/tasks/administer-cluster/declare-network-policy/" },
            ],
          },
          {
            id: "w6-4",
            title: "CNI 选型解析：Overlay vs 路由/BGP 的取舍",
            detail: "Flannel（Overlay）vs Calico（BGP）。",
            resources: [
              { title: "CNI 规范", url: "https://www.cni.dev/docs/" },
              { title: "Flannel", url: "https://github.com/flannel-io/flannel#readme" },
              { title: "Calico", url: "https://docs.tigera.io/calico/latest/about/" },
              { title: "Calico 快速开始", url: "https://docs.tigera.io/calico/latest/getting-started/kubernetes/" },
            ],
          },
        ],
      },
      {
        id: "w7",
        title: "第 7 周：权限与包管理",
        summary: "RBAC、Service Account 与 Helm 发布。",
        overview: "构建多租户安全边界（RBAC + SA），并用 Helm 做模板化发布与回滚，掌握 chart 结构与 values 管理。",
        keyPoints: [
          "RBAC 角色/绑定的作用域设计，默认角色与最小权限原则。",
          "ServiceAccount 与 token 投射，镜像拉取/外部访问 API 的安全配置。",
          "Helm Chart 结构、values/模板函数、发布升级/回滚与 chart 测试。",
        ],
        lessons: [
          {
            id: "w7-1",
            title: "RBAC 最小权限：角色/绑定与自测",
            detail: "Role、ClusterRole、Binding 的多租户控制。",
            resources: [
              { title: "RBAC 授权", url: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/" },
              { title: "RBAC 示例（k8s 官方）", url: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#default-roles-and-role-bindings" },
            ],
          },
          {
            id: "w7-2",
            title: "ServiceAccount 身份：token 投射与权限分离",
            detail: "Pod 访问 API Server 的安全方式。",
            resources: [
              { title: "ServiceAccount", url: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/" },
              { title: "ServiceAccount Token 投射", url: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#use-an-imagepullsecret" },
            ],
          },
          {
            id: "w7-3",
            title: "Helm 基础发布：Chart 结构与 release 生命周期",
            detail: "Chart 结构与 Install / Upgrade / Rollback。",
            resources: [
              { title: "Helm 快速上手", url: "https://helm.sh/docs/intro/quickstart/" },
              { title: "Helm 基本命令", url: "https://helm.sh/docs/intro/using_helm/" },
              { title: "Helm Chart 示例（官方 repo）", url: "https://github.com/helm/examples" },
            ],
          },
          {
            id: "w7-4",
            title: "Helm 模板进阶：函数/条件与渲染差异控制",
            detail: "自定义 Chart、模板语法与 Values 最佳实践。",
            resources: [
              { title: "Chart 模板指南", url: "https://helm.sh/docs/chart_template_guide/" },
              { title: "Values 与模板函数", url: "https://helm.sh/docs/chart_template_guide/values_files/" },
              { title: "Helm 单元测试与 Lint", url: "https://helm.sh/docs/chart_template_guide/linting/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "phase3",
    title: "第三阶段：自动化与交付",
    duration: "第 8-10 周",
    goal: "用 IaC 和 GitOps 让交付可重复、可审计。",
    weeks: [
      {
        id: "w8",
        title: "第 8 周：基础设施即代码（IaC）",
        summary: "用代码描述基础设施，Terraform + Ansible 组合拳。",
        overview: "用 Terraform 申明云资源、模块化管理状态，再用 Ansible 配置节点，实现可重复、可审计的环境搭建。",
        keyPoints: [
          "Terraform Provider/State/Plan/Apply 基本流程与后端存储锁。",
          "模块化、变量与输出，工作区/环境隔离策略。",
          "Ansible Inventory/Playbook/Role 组织方式，幂等与可重复执行。",
        ],
        lessons: [
          {
            id: "w8-1",
            title: "Terraform 基础：HCL、依赖图与 state 管理",
            detail: "HCL 语法、Provider 配置与 State 管理。",
            resources: [
              { title: "Terraform 概览", url: "https://developer.hashicorp.com/terraform/intro" },
              { title: "Terraform 语言概览", url: "https://developer.hashicorp.com/terraform/language/overview" },
              { title: "Terraform CLI 快速开始", url: "https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli" },
            ],
          },
          {
            id: "w8-2",
            title: "Terraform 落地 EKS/GKE：一键建/销练习",
            detail: "代码化创建云端 K8s 集群（EKS/GKE）。",
            resources: [
              { title: "aws_eks_cluster 资源", url: "https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/eks_cluster" },
              { title: "google_container_cluster 资源", url: "https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/container_cluster" },
              { title: "EKS Terraform 教程", url: "https://developer.hashicorp.com/terraform/tutorials/aws-eks/eks-fargate" },
            ],
          },
          {
            id: "w8-3",
            title: "Ansible 基础：无代理配置与幂等 Playbook",
            detail: "Playbook 与无 Agent 架构优势。",
            resources: [
              { title: "Ansible Playbook 指南", url: "https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_intro.html" },
              { title: "Ansible 架构", url: "https://docs.ansible.com/ansible/latest/getting_started/get_started_ansible.html" },
              { title: "第一个 Playbook 示例", url: "https://docs.ansible.com/ansible/latest/getting_started/get_started_playbook.html" },
            ],
          },
          {
            id: "w8-4",
            title: "Terraform + Ansible 组合：职责拆分与串联",
            detail: "Terraform 建资源 + Ansible 配置节点。",
            resources: [
              { title: "Terraform 模块化", url: "https://developer.hashicorp.com/terraform/language/modules" },
              { title: "Ansible Roles 最佳实践", url: "https://docs.ansible.com/ansible/latest/tips_tricks/sample_setup.html" },
              { title: "Terraform + Ansible 流水线示例", url: "https://developer.hashicorp.com/terraform/tutorials/configuration-language/ansible" },
            ],
          },
        ],
      },
      {
        id: "w9",
        title: "第 9 周：CI/CD 流水线",
        summary: "从构建、扫描到发布的自动化流水线。",
        overview: "搭建从代码提交到镜像发布的自动化链路，涵盖构建、测试、漏洞扫描与推送，形成可追溯的制品流。",
        keyPoints: [
          "Pipeline 触发（push/pr）、分支保护与缓存策略，镜像标签/版本规则。",
          "CI 中的安全环节：Trivy 扫描、SAST/DAST、签名与制品溯源。",
          "GitOps 视角：流水线产出 Git 期望状态，由 CD 控制器拉取同步。",
        ],
        lessons: [
          {
            id: "w9-1",
            title: "CI/CD 原则：不可变制品、版本策略与审计",
            detail: "云原生环境下的持续集成与交付挑战。",
            resources: [
              { title: "GitHub Actions CI 概览", url: "https://docs.github.com/en/actions/automating-builds-and-tests/about-continuous-integration" },
              { title: "Jenkins Pipeline 概览", url: "https://www.jenkins.io/doc/book/pipeline/" },
              { title: "部署到 Kubernetes（GH Actions）", url: "https://docs.github.com/actions/deployment/deploying-to-your-cloud-provider/deploying-to-kubernetes" },
            ],
          },
          {
            id: "w9-2",
            title: "流水线实战（上）：镜像构建、打标签与推送",
            detail: "Jenkins/GitHub Actions 构建并推镜像。",
            resources: [
              { title: "Publishing Docker images (GH Actions)", url: "https://docs.github.com/en/actions/publishing-packages/publishing-docker-images" },
              { title: "Jenkins Pipeline + Docker", url: "https://www.jenkins.io/doc/book/pipeline/docker/" },
              { title: "GitHub Actions + Container Registry 模板", url: "https://github.com/actions/starter-workflows/blob/main/ci/docker-publish.yml" },
            ],
          },
          {
            id: "w9-3",
            title: "流水线实战（下）：安全扫描与质量门禁",
            detail: "集成 Trivy 扫描与自动化测试。",
            resources: [
              { title: "Trivy 使用指南", url: "https://aquasecurity.github.io/trivy/latest/" },
              { title: "Trivy GitHub Action", url: "https://github.com/aquasecurity/trivy-action" },
              { title: "CI 集成容器扫描示例", url: "https://aquasecurity.github.io/trivy/latest/integrations/github-action/" },
            ],
          },
          {
            id: "w9-4",
            title: "GitOps 导论：拉取式对齐与审计回滚优势",
            detail: "Push 模式 vs Pull 模式（ArgoCD）。",
            resources: [
              { title: "ArgoCD 概念", url: "https://argo-cd.readthedocs.io/en/stable/operator-manual/application-spec/" },
              { title: "Flux GitOps 概览", url: "https://fluxcd.io/docs/" },
              { title: "ArgoCD Webhook 集成", url: "https://argo-cd.readthedocs.io/en/stable/operator-manual/webhook/" },
            ],
          },
        ],
      },
      {
        id: "w10",
        title: "第 10 周：GitOps 实战（ArgoCD）",
        summary: "用 ArgoCD 自愈同步，管理多环境与 App of Apps。",
        overview: "深入 ArgoCD 控制回路，配置自动同步、自愈与清理，掌握 Helm/Kustomize 多环境管理和 App of Apps 编排。",
        keyPoints: [
          "Application CRD 关键字段（source/destination/syncPolicy）与健康/同步状态。",
          "Auto-Sync、Prune、Self-Heal 配置，Sync Wave/Hook 的发布编排。",
          "多环境（dev/stage/prod）差异管理：Kustomize overlays 或 Helm values；App of Apps + 多集群管理与渐进式发布。",
        ],
        lessons: [
          {
            id: "w10-1",
            title: "ArgoCD 架构：组件分工与 Application 模型",
            detail: "部署 ArgoCD 与 Application CRD。",
            resources: [
              { title: "ArgoCD 架构：组件分工与 Application 模型", url: "https://argo-cd.readthedocs.io/en/stable/operator-manual/architecture/" },
              { title: "Application CRD 规范", url: "https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/" },
              { title: "ArgoCD Getting Started", url: "https://argo-cd.readthedocs.io/en/stable/getting_started/" },
            ],
          },
          {
            id: "w10-2",
            title: "ArgoCD 同步策略：auto-sync/prune/self-heal 编排",
            detail: "Auto-Sync、Prune、Self-Heal 功能。",
            resources: [
              { title: "ArgoCD 自动同步", url: "https://argo-cd.readthedocs.io/en/stable/user-guide/auto_sync/" },
              { title: "Self Heal & Prune", url: "https://argo-cd.readthedocs.io/en/stable/user-guide/sync-options/" },
              { title: "Sync Waves / Hooks", url: "https://argo-cd.readthedocs.io/en/stable/user-guide/sync-waves/" },
            ],
          },
          {
            id: "w10-3",
            title: "多环境管理：Kustomize/Helm 管理漂移与晋级",
            detail: "Kustomize 或 Helm 管理 Dev/Prod 差异。",
            resources: [
              { title: "ArgoCD Kustomize 支持", url: "https://argo-cd.readthedocs.io/en/stable/user-guide/kustomize/" },
              { title: "ArgoCD Helm 支持", url: "https://argo-cd.readthedocs.io/en/stable/user-guide/helm/" },
              { title: "Kustomize 入门", url: "https://kubectl.docs.kubernetes.io/guides/introduction/kustomize/" },
            ],
          },
          {
            id: "w10-4",
            title: "App of Apps：多集群引导与渐进式发布",
            detail: "规模化引导（Bootstrap）、多集群管理与渐进式发布（Canary/Blue-Green）。",
            resources: [
              { title: "App of Apps/集群引导", url: "https://argo-cd.readthedocs.io/en/stable/operator-manual/cluster-bootstrapping/" },
              { title: "ArgoCD Cluster Management", url: "https://argo-cd.readthedocs.io/en/stable/operator-manual/cluster-management/" },
              { title: "Argo Rollouts（渐进式交付）", url: "https://argo-rollouts.readthedocs.io/en/stable/" },
              { title: "ArgoCD 示例仓库", url: "https://github.com/argoproj/argocd-example-apps/tree/master/apps" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "phase4",
    title: "第四阶段：可观测性与服务网格",
    duration: "第 11-13 周",
    goal: "点亮 Metrics / Logs / Traces，并掌握服务网格流量治理。",
    weeks: [
      {
        id: "w11",
        title: "第 11 周：监控与指标",
        summary: "Prometheus 拉取模型、PromQL、Grafana 可视化与告警。",
        overview: "搭建 Metrics 链路：Prometheus 拉取 → PromQL 计算 → Grafana 展示 → Alertmanager 告警，理解采样/聚合/告警抑制要点。",
        keyPoints: [
          "Prometheus 抓取目标发现、relabel、Exporter 选型与 TSDB 存储特性。",
          "Kubernetes 资源健康：metrics-server/kube-state-metrics 让容量、配额与控制器状态可观测。",
          "PromQL 常用函数（rate/sum by/histogram_quantile），区分瞬时值与区间向量。",
          "Grafana Dashboard 设计与告警路由、静默/抑制策略，防“告警风暴”。",
        ],
        lessons: [
          {
            id: "w11-1",
            title: "Prometheus 采集链路：发现、Relabel 与存储",
            detail: "Pull 模型、TSDB 存储与 Exporter。",
            resources: [
              { title: "Prometheus 概览", url: "https://prometheus.io/docs/introduction/overview/" },
              { title: "Kubernetes 资源指标链路（metrics-server）", url: "https://kubernetes.io/docs/tasks/debug/debug-cluster/resource-metrics-pipeline/" },
              { title: "kube-state-metrics", url: "https://github.com/kubernetes/kube-state-metrics" },
              { title: "Exporter 生态", url: "https://prometheus.io/docs/instrumenting/exporters/" },
              { title: "Prometheus 安装示例", url: "https://prometheus.io/docs/prometheus/latest/installation/" },
            ],
          },
          {
            id: "w11-2",
            title: "PromQL 核心用法：rate/聚合与直方图分位数",
            detail: "常用聚合、Rate 计算与 Histogram 分析。",
            resources: [
              { title: "PromQL 基础", url: "https://prometheus.io/docs/prometheus/latest/querying/basics/" },
              { title: "Range & rate", url: "https://prometheus.io/docs/prometheus/latest/querying/basics/#range-vector-selectors" },
              { title: "直方图/分位数实践", url: "https://prometheus.io/docs/practices/histograms/" },
            ],
          },
          {
            id: "w11-3",
            title: "Grafana 可视化：参数化仪表与复用面板",
            detail: "配置数据源、导入 Dashboard 与自定义面板。",
            resources: [
              { title: "Grafana 数据源", url: "https://grafana.com/docs/grafana/latest/datasources/" },
              { title: "Dashboard 入门", url: "https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/" },
              { title: "导入社区 Dashboard", url: "https://grafana.com/docs/grafana/latest/dashboards/export-import/#import-dashboard" },
            ],
          },
          {
            id: "w11-4",
            title: "告警管理：Alertmanager 路由、抑制与静默",
            detail: "Alertmanager 的分组、抑制与静默。",
            resources: [
              { title: "Alertmanager 文档", url: "https://prometheus.io/docs/alerting/latest/alertmanager/" },
              { title: "抑制与静默", url: "https://prometheus.io/docs/alerting/latest/alertmanager/#silences" },
              { title: "Alertmanager 配置示例", url: "https://prometheus.io/docs/alerting/latest/configuration/" },
            ],
          },
        ],
      },
      {
        id: "w12",
        title: "第 12 周：日志与链路追踪",
        summary: "日志收集、PLG（Loki）与 OpenTelemetry / Jaeger。",
        overview: "串起日志与 Trace：从节点日志收集到 Loki/ELK，再用 OpenTelemetry 统一埋点，Jaeger 查看端到端调用路径。",
        keyPoints: [
          "K8s 日志收集模式：DaemonSet vs Sidecar；多租户/多命名空间隔离思路。",
          "Loki 的标签索引与 LogQL 查询性能考量，采集/保留策略。",
          "Trace 三要素（TraceID/Span/Context Propagation），OTel SDK/Collector 管线配置。",
        ],
        lessons: [
          {
            id: "w12-1",
            title: "日志收集架构：DaemonSet vs Sidecar 权衡",
            detail: "DaemonSet vs Sidecar 模式对比。",
            resources: [
              { title: "Kubernetes 日志架构", url: "https://kubernetes.io/docs/concepts/cluster-administration/logging/" },
              { title: "Fluent Bit 在 Kubernetes 中部署", url: "https://docs.fluentbit.io/manual/installation/kubernetes" },
            ],
          },
          {
            id: "w12-2",
            title: "Loki/PLG：标签索引模型与高效 LogQL 查询",
            detail: "Loki 标签索引与 LogQL 语法。",
            resources: [
              { title: "Loki 官方文档", url: "https://grafana.com/docs/loki/latest/" },
              { title: "LogQL", url: "https://grafana.com/docs/loki/latest/logql/" },
              { title: "Loki Helm 安装", url: "https://grafana.com/docs/loki/latest/installation/helm/" },
            ],
          },
          {
            id: "w12-3",
            title: "分布式追踪基础：Trace/Span/采样与埋点",
            detail: "Span、Trace、Context Propagation。",
            resources: [
              { title: "OpenTelemetry Traces", url: "https://opentelemetry.io/docs/concepts/signals/traces/" },
              { title: "Context Propagation", url: "https://opentelemetry.io/docs/concepts/context-propagation/" },
            ],
          },
          {
            id: "w12-4",
            title: "OpenTelemetry + Jaeger：Collector 管线到可视化",
            detail: "统一观测标准与 Jaeger UI 实战。",
            resources: [
              { title: "OTel Collectors", url: "https://opentelemetry.io/docs/collector/" },
              { title: "Jaeger 快速开始", url: "https://www.jaegertracing.io/docs/latest/getting-started/" },
              { title: "OpenTelemetry Demo", url: "https://opentelemetry.io/docs/demo/" },
            ],
          },
        ],
      },
      {
        id: "w13",
        title: "第 13 周：服务网格",
        summary: "Istio 架构、流量治理与 mTLS 安全。",
        overview: "理解控制面与数据面的分工，实践流量治理（灰度、熔断、故障注入）与 mTLS 零信任防护，评估 Mesh 成本与收益。",
        keyPoints: [
          "Istiod（xDS）如何向 Envoy 下发配置，Sidecar 注入与流量劫持路径。",
          "VirtualService / DestinationRule 组合：路由、熔断、重试、超时、故障注入。",
          "PeerAuthentication/AuthorizationPolicy 落地 mTLS 与细粒度访问控制。",
        ],
        lessons: [
          {
            id: "w13-1",
            title: "Service Mesh 价值判断：下沉治理与适用场景",
            detail: "微服务通信挑战与 Sidecar 模式。",
            resources: [
              { title: "Istio 是什么", url: "https://istio.io/latest/docs/concepts/what-is-istio/" },
              { title: "Service Mesh Interface (SMI)", url: "https://smi-spec.io/" },
            ],
          },
          {
            id: "w13-2",
            title: "Istio 架构与安装：控制面/数据面与注入验证",
            detail: "Istiod 控制平面与 Envoy 数据平面。",
            resources: [
              { title: "Istio 架构", url: "https://istio.io/latest/docs/ops/deployment/architecture/" },
              { title: "Istio 快速安装", url: "https://istio.io/latest/docs/setup/getting-started/" },
              { title: "安装配置 Profiles", url: "https://istio.io/latest/docs/setup/additional-setup/config-profiles/" },
            ],
          },
          {
            id: "w13-3",
            title: "Istio 流量治理：金丝雀、熔断与故障注入",
            detail: "灰度发布、断路器、故障注入。",
            resources: [
              { title: "Istio 流量管理", url: "https://istio.io/latest/docs/concepts/traffic-management/" },
              { title: "故障注入示例", url: "https://istio.io/latest/docs/tasks/traffic-management/fault-injection/" },
              { title: "流量分流/金丝雀示例", url: "https://istio.io/latest/docs/tasks/traffic-management/traffic-shifting/" },
            ],
          },
          {
            id: "w13-4",
            title: "网格安全：mTLS、认证/授权策略与落地",
            detail: "零信任网络与 mTLS 的自动实施。",
            resources: [
              { title: "Istio 安全概念", url: "https://istio.io/latest/docs/concepts/security/" },
              { title: "PeerAuthentication mTLS", url: "https://istio.io/latest/docs/tasks/security/authentication/mtls-migration/" },
              { title: "授权策略示例", url: "https://istio.io/latest/docs/tasks/security/authorization/authz-http/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "phase5",
    title: "第五阶段：安全、进阶与认证",
    duration: "第 14-16 周",
    goal: "守护供应链安全，探索 Serverless，并为 CKA/CKAD 备考。",
    weeks: [
      {
        id: "w14",
        title: "第 14 周：云原生安全（DevSecOps）",
        summary: "4C 安全模型、供应链安全、策略即代码与运行时防护。",
        overview: "分层思考安全：云/集群/容器/代码，构建从镜像签名、准入策略到运行时检测的全链路防护。",
        keyPoints: [
          "4C 模型与 Pod Security 标准，最小权限 + 隔离（PSA/PSP 替代）。",
          "供应链安全：Cosign 签名、准入控制器验证、SLSA/签名策略。",
          "策略即代码与运行时：Gatekeeper/Kyverno 统一合规，Falco 监控异常系统调用。",
        ],
        lessons: [
          {
            id: "w14-1",
            title: "4C 安全基线：云/集群/容器/代码的加固清单",
            detail: "Cloud、Cluster、Container、Code 的分层防御。",
            resources: [
              { title: "Kubernetes Security 概览", url: "https://kubernetes.io/docs/concepts/security/" },
              { title: "Pod Security Standards", url: "https://kubernetes.io/docs/concepts/security/pod-security-standards/" },
              { title: "NSA/CISA Kubernetes 加固指南", url: "https://www.cisa.gov/sites/default/files/publications/CISA_NSA_Kubernetes_Hardening_Guidance_1.2_508C.pdf" },
            ],
          },
          {
            id: "w14-2",
            title: "供应链安全：Cosign 签名验证与准入控制",
            detail: "镜像签名（Cosign）与准入控制。",
            resources: [
              { title: "Cosign 概览", url: "https://docs.sigstore.dev/cosign/overview/" },
              { title: "Admission Controllers", url: "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/" },
              { title: "policy-controller（Sigstore）", url: "https://docs.sigstore.dev/policy-controller/overview/" },
            ],
          },
          {
            id: "w14-3",
            title: "策略即代码：Gatekeeper/Kyverno 规则与例外",
            detail: "OPA Gatekeeper 或 Kyverno 的合规策略。",
            resources: [
              { title: "OPA Gatekeeper", url: "https://open-policy-agent.github.io/gatekeeper/website/docs/" },
              { title: "Kyverno 文档", url: "https://kyverno.io/docs/" },
              { title: "Gatekeeper 策略库", url: "https://open-policy-agent.github.io/gatekeeper-library/website/" },
            ],
          },
          {
            id: "w14-4",
            title: "运行时安全：Falco 规则维护与降噪",
            detail: "Falco 监控异常系统调用。",
            resources: [
              { title: "Falco 文档", url: "https://falco.org/docs/" },
              { title: "Falco 规则", url: "https://falco.org/docs/rules/" },
              { title: "Falco 在 Kubernetes 部署", url: "https://falco.org/docs/getting-started/kubernetes/" },
            ],
          },
        ],
      },
      {
        id: "w15",
        title: "第 15 周：Serverless 与自动扩缩容",
        summary: "HPA/Cluster Autoscaler，Knative 与事件驱动架构。",
        overview: "掌握从 Pod 到集群的弹性链路，理解 Knative 的 scale-to-zero 与事件驱动模型，以及 Operator 模式的自动化扩展。",
        keyPoints: [
          "HPA/VPA 指标来源（metrics-server/自定义指标）与目标配置，抖动与冷却时间调优。",
          "Cluster Autoscaler 节点弹性与调度耦合；Knative Serving 冷启动、并发控制。",
          "Eventing + CloudEvents 的事件总线思路，Operator/CRD 让扩展点可编排。",
        ],
        lessons: [
          {
            id: "w15-1",
            title: "弹性策略：HPA/VPA 与 Cluster Autoscaler 协同",
            detail: "HPA/VPA 与 Cluster Autoscaler 的协同。",
            resources: [
              { title: "Horizontal Pod Autoscaler", url: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/" },
              { title: "Vertical Pod Autoscaler (VPA)", url: "https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler" },
              { title: "Cluster Autoscaler", url: "https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler" },
              { title: "HPA 自定义指标示例", url: "https://kubernetes.io/docs/tasks/run-application/hpa-walkthrough/" },
            ],
          },
          {
            id: "w15-2",
            title: "Knative Serving：revision/route 与并发调优",
            detail: "Scale-to-Zero 与冷启动机制。",
            resources: [
              { title: "Knative Serving：revision/route 与并发调优", url: "https://knative.dev/docs/serving/" },
              { title: "Scale to zero", url: "https://knative.dev/docs/serving/autoscaling/scale-to-zero/" },
              { title: "Knative Serving 快速安装", url: "https://knative.dev/docs/install/yaml-install/serving/install-serving-with-yaml" },
            ],
          },
          {
            id: "w15-3",
            title: "事件驱动：Knative Eventing + CloudEvents 最小闭环",
            detail: "Knative Eventing 与 CloudEvents。",
            resources: [
              { title: "Knative Eventing", url: "https://knative.dev/docs/eventing/" },
              { title: "CloudEvents 规范", url: "https://cloudevents.io/" },
              { title: "Eventing 入门示例", url: "https://knative.dev/docs/eventing/getting-started/" },
            ],
          },
          {
            id: "w15-4",
            title: "Operator 模式：CRD/Controller 调和复杂应用",
            detail: "用 Operator 管理复杂有状态应用。",
            resources: [
              { title: "Operator 模式：CRD/Controller 调和复杂应用", url: "https://kubernetes.io/docs/concepts/extend-kubernetes/operator/" },
              { title: "Custom Resources / CRD", url: "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/" },
              { title: "API Aggregation Layer", url: "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/apiserver-aggregation/" },
              { title: "Operator SDK", url: "https://sdk.operatorframework.io/docs/" },
              { title: "Kubebuilder 快速开始", url: "https://book.kubebuilder.io/quick-start.html" },
            ],
          },
        ],
      },
      {
        id: "w16",
        title: "第 16 周：故障排查与认证冲刺",
        summary: "灾备、常见故障与 CKA/CKAD 考点梳理。",
        overview: "集中演练备份恢复与高频故障排查，梳理 CKA/CKAD 考点与实战技巧，为考试与生产应急做最后冲刺。",
        keyPoints: [
          "etcd 备份/恢复流程、证书与 kubeadm 版本兼容性注意事项。",
          "常见故障：OOMKilled/CrashLoopBackOff/ImagePullBackOff 的分层排查手册与 kubectl 调试技巧。",
          "考试策略：kubectl 快捷命令、文档检索、时间管理；面试/实战可展示的演练清单。",
        ],
        lessons: [
          {
            id: "w16-1",
            title: "集群灾备：etcd 快照备份与恢复演练",
            detail: "Etcd 数据快照备份与恢复（CKA 考点）。",
            resources: [
              { title: "etcd 备份恢复（K8s 官方）", url: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/" },
              { title: "etcd snapshot 恢复", url: "https://etcd.io/docs/v3.5/op-guide/recovery/" },
              { title: "etcd 维护与备份", url: "https://etcd.io/docs/v3.5/op-guide/maintenance/" },
            ],
          },
          {
            id: "w16-2",
            title: "高频故障排查：从事件到网络的逐层定位",
            detail: "OOMKilled、CrashLoopBackOff、ImagePullBackOff 分析。",
            resources: [
              { title: "调试应用", url: "https://kubernetes.io/docs/tasks/debug/debug-application/" },
              { title: "镜像拉取问题", url: "https://kubernetes.io/docs/concepts/containers/images/#imagepullbackoff" },
              { title: "调试 Pod（官方任务）", url: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/" },
            ],
          },
          {
            id: "w16-3",
            title: "认证冲刺：CKA/CKAD 技巧与训练计划",
            detail: "CKA vs CKAD 考试策略与真题分析。",
            resources: [
              { title: "CKA 认证", url: "https://www.cncf.io/certification/cka/" },
              { title: "CKAD 认证", url: "https://www.cncf.io/certification/ckad/" },
              { title: "CNCF 考纲（curriculum）", url: "https://github.com/cncf/curriculum" },
            ],
          },
          {
            id: "w16-4",
            title: "课程回顾与下一步：技能树与职业路线",
            detail: "构建个人云原生技能树与面试准备。",
            resources: [
              { title: "Kubernetes 学习资源", url: "https://kubernetes.io/docs/home/" },
              { title: "Training & Certification", url: "https://kubernetes.io/training/" },
              { title: "社区活动 / KubeCon", url: "https://www.cncf.io/events/" },
            ],
          },
        ],
      },
    ],
  },
]

const gitGithubStages: Stage[] = [
  {
    id: "git-foundation",
    title: "阶段 1：Git 基础与工作流",
    duration: "第 1-2 周",
    goal: "熟练使用 Git 进行日常版本管理与分支协作。",
    weeks: [
      {
        id: "git-w1",
        title: "第 1 周：Git 基础操作",
        summary: "建立 commit/branch/remote 心智模型，能独立管理个人仓库。",
        overview: "掌握 Git 基本命令与状态机：工作区、暂存区与提交历史。",
        keyPoints: [
          "区分工作区、暂存区与提交历史（git status / add / commit）。",
          "学会分支与合并（git branch / checkout / merge）。",
          "理解远程同步（git remote / fetch / pull / push）的差异。",
        ],
        lessons: [
          {
            id: "git-w1-1",
            title: "Git 模型与配置",
            detail: "认识工作区、暂存区、HEAD 与远程别名，配置用户名与默认分支。",
            keyPoints: ["git init / config / status 的常见用法"],
            resources: [
              { title: "Pro Git · 基础", url: "https://git-scm.com/book/zh/v2/起步-关于版本控制" },
              { title: "git config", url: "https://git-scm.com/docs/git-config" },
              { title: "git status", url: "https://git-scm.com/docs/git-status" },
            ],
          },
          {
            id: "git-w1-2",
            title: "提交与回滚",
            detail: "创建提交、查看历史与安全回退。",
            resources: [
              { title: "git add & commit", url: "https://git-scm.com/docs/git-commit" },
              { title: "git log / show", url: "https://git-scm.com/docs/git-log" },
              { title: "git restore / reset", url: "https://git-scm.com/docs/git-restore" },
            ],
          },
          {
            id: "git-w1-3",
            title: "分支与合并基础",
            detail: "创建、切换与合并分支，解决简单冲突。",
            resources: [
              { title: "git branch", url: "https://git-scm.com/docs/git-branch" },
              { title: "git merge", url: "https://git-scm.com/docs/git-merge" },
              { title: "冲突解决指南", url: "https://git-scm.com/docs/git-mergetool" },
            ],
          },
        ],
      },
      {
        id: "git-w2",
        title: "第 2 周：协作与分支策略",
        summary: "在团队中使用分支策略、Pull Request 与 Cherry-pick。",
        overview: "理解协作流程：fork/clone、PR、保护分支与评审。",
        keyPoints: [
          "选用合适的分支模型：main + feature、Git Flow 或 trunk-based。",
          "用 rebase/merge 维护整洁历史，避免强制 push 覆盖他人。",
          "Pull Request 流程：描述、检查、评审与合并策略。",
        ],
        lessons: [
          {
            id: "git-w2-1",
            title: "远程协作与 PR",
            detail: "clone/fetch/pull/push 与 PR 评审的基本流程。",
            resources: [
              { title: "git fetch / pull / push", url: "https://git-scm.com/docs/git-pull" },
              { title: "GitHub Pull Requests", url: "https://docs.github.com/zh/pull-requests" },
              { title: "分支保护规则", url: "https://docs.github.com/zh/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches" },
            ],
          },
          {
            id: "git-w2-2",
            title: "历史整理：rebase 与 cherry-pick",
            detail: "用交互式 rebase 整理提交，安全地挑选或回滚。",
            resources: [
              { title: "git rebase", url: "https://git-scm.com/docs/git-rebase" },
              { title: "git cherry-pick", url: "https://git-scm.com/docs/git-cherry-pick" },
              { title: "避免破坏历史的最佳实践", url: "https://docs.github.com/zh/pull-requests/committing-changes-to-your-project/managing-commit-history" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "github-practices",
    title: "阶段 2：GitHub 实战与自动化",
    duration: "第 3-4 周",
    goal: "用 GitHub 构建安全、可审计、自动化的协作流程。",
    weeks: [
      {
        id: "git-w3",
        title: "第 3 周：仓库健康与安全",
        summary: "设置合规的分支保护、模板与安全扫描。",
        overview: "为团队仓库启用模板、Reviewers、Actions 安全策略。",
        keyPoints: [
          "Issue/PR 模板与 CODEOWNERS 提升协作效率。",
          "使用 Dependabot / 安全扫描提前发现依赖风险。",
          "分支保护 + 签名提交确保变更可追踪。",
        ],
        lessons: [
          {
            id: "git-w3-1",
            title: "模板与代码所有者",
            detail: "设置 Issue/PR 模板与 CODEOWNERS，规范协作入口。",
            resources: [
              { title: "Issue/PR 模板", url: "https://docs.github.com/zh/communities/using-templates-to-encourage-useful-issues-and-pull-requests" },
              { title: "CODEOWNERS", url: "https://docs.github.com/zh/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners" },
              { title: "提交签名", url: "https://docs.github.com/zh/authentication/managing-commit-signature-verification/signing-commits" },
            ],
          },
          {
            id: "git-w3-2",
            title: "安全与合规",
            detail: "启用 Dependabot、安全策略与 secret 检测。",
            resources: [
              { title: "Dependabot 设置", url: "https://docs.github.com/zh/code-security/dependabot" },
              { title: "Secret scanning", url: "https://docs.github.com/zh/code-security/secret-scanning" },
              { title: "安全策略 (SECURITY.md)", url: "https://docs.github.com/zh/code-security/getting-started/adding-a-security-policy-to-your-repository" },
            ],
          },
        ],
      },
      {
        id: "git-w4",
        title: "第 4 周：GitHub Actions 与交付",
        summary: "用 CI/CD 自动化测试、构建与发布，形成可复现流水线。",
        overview: "理解 Actions 组成：workflow、job、step、runner 与 secrets。",
        keyPoints: [
          "写一个最小可行的 CI：lint + test + build。",
          "缓存、矩阵、环境分发与 artifact 上传的常见模式。",
          "发布与环境保护：环境审批、required checks、rollback 策略。",
        ],
        lessons: [
          {
            id: "git-w4-1",
            title: "GitHub Actions 基础",
            detail: "编写 workflow，使用官方 actions 完成 CI。",
            resources: [
              { title: "Actions 概览", url: "https://docs.github.com/zh/actions" },
              { title: "官方 actions 目录", url: "https://github.com/marketplace?type=actions" },
              { title: "缓存与矩阵", url: "https://docs.github.com/zh/actions/using-jobs/using-a-matrix-for-your-jobs" },
            ],
          },
          {
            id: "git-w4-2",
            title: "发布与环境管理",
            detail: "使用环境、审批与 artifact 提升发布可靠性。",
            resources: [
              { title: "部署环境与审批", url: "https://docs.github.com/zh/actions/managing-workflow-runs/reviewing-deployments" },
              { title: "Artifact 上传", url: "https://docs.github.com/zh/actions/managing-workflow-runs/downloading-workflow-artifacts" },
              { title: "版本发布", url: "https://docs.github.com/zh/repositories/releasing-projects-on-github/managing-releases-in-a-repository" },
            ],
          },
        ],
      },
    ],
  },
]

const kubernetesKnowledgeCards: KnowledgeCard[] = [
  {
    id: "phase1",
    title: "容器 = 被雕刻过的 Linux",
    summary: "Namespaces + Cgroups + UnionFS 组合出“隔离的假象”。理解这一点能让你从容面对容器问题排查。",
    points: [
      "Namespaces 决定“看得见谁”，Cgroups 决定“能用多少”，UnionFS 决定“如何共享文件”。",
      "容器崩溃排查：先看资源（Cgroups）再看网络（veth/bridge），最后检查文件系统写时复制。",
      "构建镜像时：多阶段 + 缩小 base image，避免把构建工具带入运行镜像。",
    ],
    practice: "用 docker run --rm -it --pid=host --uts=host --net=host 观察容器与宿主机的 namespace 差异。",
  },
  {
    id: "phase2",
    title: "K8s 编排的“期望状态”",
    summary: "K8s 控制器不断调和期望状态与实际状态，Deployment/Job/Service/StatefulSet 覆盖副本、批处理、流量和身份。",
    points: [
      "Deployment 负责无状态副本，StatefulSet 负责稳定身份，Job/CronJob 负责一次性/定时任务。",
      "Service + Ingress 构成东西向与南北向流量入口，NetworkPolicy 才是“防火墙”。",
      "资源治理与存储：requests/limits/QoS + ResourceQuota/LimitRange，配合 PVC/StorageClass/CSI 管理状态。",
    ],
    practice: "给同一应用同时创建 Deployment 与 StatefulSet，对比 Pod 名称、PVC 行为以及滚动更新方式。",
  },
  {
    id: "phase3",
    title: "交付自动化与 GitOps",
    summary: "一切配置进 Git，CI 生成镜像，CD 由 ArgoCD 拉取并自愈，同步失败即回滚。",
    points: [
      "Terraform 创建集群，Ansible 配机器，K8s 负责运行；分层职责让排错可定位。",
      "GitOps + 多集群：Git 是唯一真相，ArgoCD 对多个集群持续拉取并调和目标状态。",
      "流水线要包含安全：镜像扫描（Trivy）、自动化测试、分支保护与审批。",
    ],
    practice: "为一个示例应用写 GitHub Actions：构建镜像、扫描、推送；再写 ArgoCD Application 自动拉取部署。",
  },
  {
    id: "phase4",
    title: "可观测性三板斧",
    summary: "Metrics 看趋势，Logs 查细节，Traces 找瓶颈；Prometheus + Loki + Tempo/Jaeger 是经典搭配。",
    points: [
      "Prometheus 是 Pull 模型：抓不到就没有数据，记得探针/ServiceMonitor。",
      "PromQL 习惯用 rate/histogram_quantile，把瞬时值转成可读趋势。",
      "服务网格让遥测变简单，但也带来了延迟与资源开销，需权衡。",
    ],
    practice: "给一个 API 应用加上 Prometheus Exporter 与 OpenTelemetry SDK，观察一次请求的三份数据（指标/日志/trace）。",
  },
  {
    id: "phase5",
    title: "安全与认证冲刺",
    summary: "4C 安全模型确保云、集群、容器、代码层层防护；CKA/CKAD 考点集中在排错与日常运维。",
    points: [
      "Admission 控制 + 镜像签名防供应链攻击；Runtime Security 防零日利用。",
      "HPA/VPA/Autoscaler 与事件驱动架构让资源按需弹性，但要监控成本与冷启动。",
      "备考：熟练 kubectl、etcd 备份恢复、NetworkPolicy、PV/PVC 以及常见故障分析。",
    ],
    practice: "用 cosign 给镜像签名，并在集群里配置准入控制器拒绝未签名镜像。",
  },
]

const gitGithubKnowledgeCards: KnowledgeCard[] = [
  {
    id: "git-foundation",
    title: "Git 三状态：工作区 / 暂存区 / 历史",
    summary: "Git 不是“云盘”，而是快照+指针的有向图。掌握三状态才能自信回滚与整理历史。",
    points: [
      "用 git status 观察状态机，add 把变更移入暂存区，commit 生成不可变快照。",
      "HEAD -> 分支 -> 提交 的指针关系决定 checkout/reset 的效果。",
      "善用 git restore/git reset --patch 在不破坏历史的前提下撤销或拆分修改。",
    ],
    practice: "创建一个仓库，分别演练 add/commit/log/show 与 restore/reset 的效果，并记录每步状态。",
  },
  {
    id: "git-collab",
    title: "协作 = 分支策略 + PR 流程",
    summary: "在团队里，分支模型与评审流程决定交付节奏。",
    points: [
      "main 受保护，feature 分支短生命周期，避免长时间漂移。",
      "PR 模板与 CODEOWNERS 明确责任，required checks 保障质量。",
      "遇到冲突先 rebase/fetch 保持同步，避免强制 push 覆盖他人。",
    ],
    practice: "为示例仓库建立 PR 模板与 CODEOWNERS，提交一个包含描述、检查清单与截图的 PR。",
  },
  {
    id: "git-automation",
    title: "自动化流水线 = Actions + 审批 + 产物",
    summary: "CI 负责验证，CD 负责发布；GitHub Actions 串联检查、构建与发布。",
    points: [
      "workflow/job/step 的层级：可复用 action + matrix + cache 提升效率。",
      "环境与审批保护生产：required reviewers、环境锁、artifact 产物可追踪。",
      "安全第一：最小权限 token、密钥存储在 secrets/环境变量，避免明文。",
    ],
    practice: "编写一个 workflow：pnpm install → lint/test → build，上传 artifact，并为 main 分支启用环境审批。",
  },
]

const kubernetesExamQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "K8s 移除 Docker Shim 的主要原因是什么？",
    options: [
      "Docker 不支持镜像签名",
      "减少额外适配层，直接使用符合 CRI 的运行时（如 containerd/CRI-O）",
      "K8s 准备放弃容器技术",
      "为了提升 Dockerfile 构建速度",
    ],
    answer: 1,
    rationale: "直接使用 CRI 运行时能减少维护负担，接口更清晰，性能更稳定。",
  },
  {
    id: "q2",
    question: "Deployment 与 StatefulSet 的核心区别是？",
    options: [
      "Deployment 支持持久卷，StatefulSet 不支持",
      "StatefulSet 提供稳定网络标识与有序部署，适合有状态场景",
      "Deployment 无法滚动更新",
      "StatefulSet 不支持扩容",
    ],
    answer: 1,
    rationale: "StatefulSet 为每个 Pod 绑定稳定身份（序号/Headless Service），并在部署/扩容时保持有序。",
  },
  {
    id: "q3",
    question: "NetworkPolicy 默认行为是？",
    options: [
      "没有任何策略时默认全拒绝",
      "存在策略但未定义 ingress/egress 规则的 Pod 默认拒绝对应方向的流量",
      "默认只允许同命名空间访问",
      "默认只允许来自 Service 的流量",
    ],
    answer: 1,
    rationale: "创建了 NetworkPolicy 且未匹配的方向会被拒绝；未创建策略时是全允许。",
  },
  {
    id: "q4",
    question: "多阶段构建（multi-stage builds）的直接收益是？",
    options: [
      "让镜像自动签名",
      "减少镜像体积、避免将编译工具带入运行镜像",
      "自动生成 Kubernetes YAML",
      "无需写 Dockerfile",
    ],
    answer: 1,
    rationale: "多阶段把编译与运行拆开，最终镜像更小、更安全。",
  },
  {
    id: "q5",
    question: "GitOps 的核心原则是？",
    options: [
      "所有变更直接在集群上手工操作",
      "把集群状态当作唯一真相",
      "Git 作为唯一真相，控制器持续对比并同步到集群",
      "只在发布时使用 Git",
    ],
    answer: 2,
    rationale: "Git 记录期望状态，ArgoCD/Flux 持续拉取并调和集群实际状态。",
  },
  {
    id: "q6",
    question: "Prometheus 采集模型的特点是？",
    options: [
      "推送模型，需要应用主动推送",
      "拉取模型，需要通过 ServiceMonitor/Relabel 抓取目标",
      "只支持日志，不支持指标",
      "只能在单机运行，不能横向扩展",
    ],
    answer: 1,
    rationale: "Prometheus 以拉取为主，PushGateway 只是补充场景。",
  },
  {
    id: "q7",
    question: "Helm 升级失败后希望快速回滚，应该使用？",
    options: ["helm template", "helm lint", "helm rollback", "helm fetch"],
    answer: 2,
    rationale: "helm rollback 可以直接回退到指定 release 版本。",
  },
  {
    id: "q8",
    question: "Istio 中开启 mTLS 的直接收益是？",
    options: ["减少带宽占用", "让 Sidecar 数量变少", "实现服务间双向认证与链路加密，提升零信任安全", "自动缩容到 0"],
    answer: 2,
    rationale: "mTLS 提供身份校验与传输加密，是零信任的核心。",
  },
  {
    id: "q9",
    question: "HPA（Horizontal Pod Autoscaler）主要根据什么做扩缩容？",
    options: ["节点数量", "Pod 数量", "配置的指标（如 CPU/自定义指标）的实时值与目标值对比", "镜像大小"],
    answer: 2,
    rationale: "HPA 通过 Metrics Server 或自定义指标与目标值比较来调整副本数。",
  },
  {
    id: "q10",
    question: "为什么要给镜像做签名并在 Admission 阶段验证？",
    options: ["减少镜像体积", "提升 Pod 启动速度", "确保镜像来源可信、内容未被篡改，阻断供应链攻击", "自动生成 Helm Chart"],
    answer: 2,
    rationale: "签名与准入校验能在供应链环节阻挡恶意镜像进入集群。",
  },
]

const gitGithubExamQuestions: QuizQuestion[] = [
  {
    id: "git-q1",
    question: "git add 的作用是什么？",
    options: ["将修改直接提交到远程", "把工作区修改移入暂存区", "回滚到上一个提交", "删除本地分支"],
    answer: 1,
    rationale: "git add 负责把工作区改动放入暂存区，便于后续 commit。",
  },
  {
    id: "git-q2",
    question: "哪种描述更符合 Pull Request 的最佳实践？",
    options: ["直接 force push 到 main", "PR 里包含描述、检查清单与关联 Issue", "不需要评审就合并", "跳过 CI"],
    answer: 1,
    rationale: "清晰的 PR 描述 + 关联检查有助于评审与追踪。",
  },
  {
    id: "git-q3",
    question: "git rebase 与 git merge 的主要差异是？",
    options: ["rebase 会创建新的基线、重写提交历史", "merge 会删除分支", "rebase 只能在远程执行", "merge 永远是快进模式"],
    answer: 0,
    rationale: "rebase 会重放提交以获得线性历史，merge 保留原有拓扑。",
  },
  {
    id: "git-q4",
    question: "在 GitHub 上保护主分支的常见做法是？",
    options: ["允许任何人强制 push", "关闭审查与检查", "启用分支保护并要求评审/状态检查", "阻止所有推送"],
    answer: 2,
    rationale: "分支保护 + required checks 能保障历史可审计且质量受控。",
  },
  {
    id: "git-q5",
    question: "GitHub Actions workflow 中，哪项做法更安全？",
    options: ["在仓库明文存储 token", "使用 secrets/环境限制权限", "把 secrets 直接写到脚本", "让任何人修改受信任的 action"],
    answer: 1,
    rationale: "最小权限 + secrets 存储能降低凭证泄露风险。",
  },
  {
    id: "git-q6",
    question: "想在发布前阻止未经审批的部署，应使用？",
    options: ["环境与审批保护", "取消所有检查", "改为 FTP 手动上传", "关闭流水线"],
    answer: 0,
    rationale: "GitHub Actions 的环境保护与审批能在生产发布前增加人工把关。",
  },
  {
    id: "git-q7",
    question: "git cherry-pick 适用于哪种场景？",
    options: ["删除整个分支", "挑选某个提交应用到当前分支", "初始化仓库", "强制覆盖远程"],
    answer: 1,
    rationale: "cherry-pick 可将指定提交引入当前分支用于热修或补丁。",
  },
  {
    id: "git-q8",
    question: "以下哪项更能代表“最小可行”CI？",
    options: ["仅上传 artifact", "只运行构建不测试", "安装依赖后运行 lint/test/build", "等待人工执行"],
    answer: 2,
    rationale: "基础 CI 应至少验证 lint/test/build，保证产物质量。",
  },
]

const technicalWriterStages: Stage[] = [
  {
    id: "tw-phase1",
    title: "第一阶段：写作基础与读者思维",
    duration: "第 1-2 周",
    goal: "掌握技术写作的读者分析、结构化表达与风格一致性。",
    weeks: [
      {
        id: "tw-w1",
        title: "第 1 周：技术写作入门",
        summary: "明确读者与目标，写出可执行、可验证的文档。",
        overview:
          "理解技术文档的常见类型（Quickstart/教程/How-to/Reference/解释/排错），用“任务 + 证据”驱动写作，并建立可复用的写作模板。",
        keyPoints: [
          "先回答三件事：写给谁（Persona）、解决什么任务（Task）、如何验收（Evidence）。",
          "以结构化写作替代“流水账”：标题/前置条件/步骤/预期结果/常见错误。",
          "术语统一与示例可复现优先于华丽表达。",
        ],
        lessons: [
          {
            id: "tw-w1-1",
            title: "技术写作的目标与交付物",
            detail: "理解 Technical Writer 的协作方式与常见产出：教程、参考、排错、发布说明。",
            resources: [
              { title: "roadmap.sh Technical Writer", url: "https://roadmap.sh/technical-writer" },
              { title: "Write the Docs：Documentation Guide", url: "https://www.writethedocs.org/guide/" },
              { title: "Diátaxis Framework", url: "https://diataxis.fr/" },
            ],
          },
          {
            id: "tw-w1-2",
            title: "读者分析与任务导向",
            detail: "用读者画像、场景与先验知识划分内容层次，避免“一篇写给所有人”。",
            resources: [
              { title: "Google Developer Documentation：Audience", url: "https://developers.google.com/style/audience" },
              { title: "Nielsen Norman Group：Writing for the Web", url: "https://www.nngroup.com/articles/how-users-read-on-the-web/" },
              { title: "Write the Docs：Audience", url: "https://www.writethedocs.org/guide/writing/beginners-guide-to-docs/#know-your-audience" },
            ],
          },
          {
            id: "tw-w1-3",
            title: "结构化写作与信息架构",
            detail: "用 Diátaxis（Tutorial/How-to/Reference/Explanation）拆分内容，搭出可维护目录结构。",
            resources: [
              { title: "Diátaxis：Quality", url: "https://diataxis.fr/quality/" },
              { title: "Write the Docs：Information Architecture", url: "https://www.writethedocs.org/guide/docs-practices/" },
              { title: "Google：Document structure", url: "https://developers.google.com/style/formatting" },
            ],
          },
          {
            id: "tw-w1-4",
            title: "清晰表达：简洁、准确、一致",
            detail: "掌握句式与术语规则：短句、主动语态、避免歧义，让读者一次读懂。",
            resources: [
              { title: "Google Developer Documentation Style Guide", url: "https://developers.google.com/style" },
              { title: "Microsoft Writing Style Guide", url: "https://learn.microsoft.com/en-us/style-guide/welcome/" },
              { title: "Write the Docs：Style Guides", url: "https://www.writethedocs.org/guide/writing/style-guides/" },
            ],
          },
        ],
      },
      {
        id: "tw-w2",
        title: "第 2 周：工具链与 Docs-as-Code",
        summary: "掌握 Markdown + Git + 评审流程，把文档当代码一样维护。",
        overview: "建立最小 docs-as-code 工作流：Markdown → PR Review → 自动检查 → 站点发布。",
        keyPoints: [
          "写作格式标准化：Markdown 规范、目录结构、图片/链接策略。",
          "用 Git 管理变更：分支、PR、review、changelog，避免“口头同步”。",
          "为文档引入自动化质量线：拼写/链接/风格检查与预览环境。",
        ],
        lessons: [
          {
            id: "tw-w2-1",
            title: "Markdown 与可复用模板",
            detail: "掌握 Markdown 基础语法与可读性排版，沉淀 Quickstart/How-to/Reference 模板。",
            resources: [
              { title: "Markdown Guide", url: "https://www.markdownguide.org/basic-syntax/" },
              { title: "CommonMark Spec", url: "https://spec.commonmark.org/" },
              {
                title: "GitHub：Markdown 快速入门",
                url: "https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github",
              },
            ],
          },
          {
            id: "tw-w2-2",
            title: "Git 基础与协作评审",
            detail: "会用分支、PR、review 与冲突解决，让文档迭代可追踪、可回滚。",
            resources: [
              { title: "Pro Git（免费在线）", url: "https://git-scm.com/book/en/v2" },
              { title: "GitHub：About pull requests", url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests" },
              { title: "Write the Docs：Docs as Code", url: "https://www.writethedocs.org/guide/docs-as-code/" },
            ],
          },
          {
            id: "tw-w2-3",
            title: "静态站点与发布（SSG）",
            detail: "了解 Docusaurus/MkDocs/VitePress 等，能把 Markdown 发布成可导航网站。",
            resources: [
              { title: "Docusaurus Docs", url: "https://docusaurus.io/docs" },
              { title: "MkDocs", url: "https://www.mkdocs.org/" },
              { title: "VitePress", url: "https://vitepress.dev/" },
            ],
          },
          {
            id: "tw-w2-4",
            title: "贡献指南与写作规范",
            detail: "写好 CONTRIBUTING、写作规范与提交约定，让团队协作不靠口口相传。",
            resources: [
              { title: "GitHub：CONTRIBUTING guidelines", url: "https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions" },
              { title: "Keep a Changelog", url: "https://keepachangelog.com/en/1.1.0/" },
              { title: "Write the Docs：Docs Practices", url: "https://www.writethedocs.org/guide/docs-practices/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "tw-phase2",
    title: "第二阶段：技术素养与 API 文档",
    duration: "第 3-4 周",
    goal: "补齐基础技术概念与写作方法，能输出可用的 API/CLI 文档与示例。",
    weeks: [
      {
        id: "tw-w3",
        title: "第 3 周：基础技术素养",
        summary: "理解 HTTP/JSON/CLI 等基础，能跑通示例并复现问题。",
        overview: "技术写作需要“能跑起来”：会用命令行、理解请求/响应、能描述复现步骤与预期/实际差异。",
        keyPoints: [
          "把概念写成可操作：输入、输出、边界条件与错误处理。",
          "示例必须可复现：命令、返回值、截图与版本信息齐全。",
          "排错写作优先：先给快速定位，再给深入解释。",
        ],
        lessons: [
          {
            id: "tw-w3-1",
            title: "HTTP/JSON 基础（面向文档）",
            detail: "理解常见方法、状态码、Headers、JSON 结构，能写出清晰的请求/响应示例。",
            resources: [
              { title: "MDN：HTTP", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP" },
              { title: "HTTP Semantics (RFC 9110)", url: "https://www.rfc-editor.org/rfc/rfc9110" },
              { title: "JSON", url: "https://www.json.org/json-en.html" },
            ],
          },
          {
            id: "tw-w3-2",
            title: "命令行与可复现示例",
            detail: "会用基本命令行工具与环境变量，写出可复制粘贴的操作步骤与输出。",
            resources: [
              { title: "The Art of Command Line", url: "https://github.com/jlevy/the-art-of-command-line" },
              { title: "curl manual", url: "https://curl.se/docs/manual.html" },
              { title: "Write the Docs：Code Samples", url: "https://www.writethedocs.org/guide/writing/code-samples/" },
            ],
          },
          {
            id: "tw-w3-3",
            title: "排错文档（Troubleshooting）写法",
            detail: "从症状到原因：复现步骤、日志/错误信息、快速绕过与根因说明。",
            resources: [
              { title: "Google：Troubleshooting", url: "https://developers.google.com/style/troubleshooting" },
              { title: "Write the Docs：Troubleshooting", url: "https://www.writethedocs.org/guide/writing/troubleshooting/" },
              { title: "Keep a Changelog：Change log guide", url: "https://keepachangelog.com/en/1.1.0/" },
            ],
          },
          {
            id: "tw-w3-4",
            title: "图表与示意图（可维护）",
            detail: "用 Mermaid/PlantUML 画流程/架构/时序图，让复杂概念可视化且可版本化。",
            resources: [
              { title: "Mermaid", url: "https://mermaid.js.org/" },
              { title: "PlantUML", url: "https://plantuml.com/" },
              { title: "Diátaxis：Explanation", url: "https://diataxis.fr/explanation/" },
            ],
          },
        ],
      },
      {
        id: "tw-w4",
        title: "第 4 周：API / CLI 文档体系",
        summary: "写出可用的 API Reference：认证、分页、错误码、示例与最佳实践。",
        overview: "把 API 文档写成“可用说明书”：从概览到认证，再到端点参考、示例与错误处理。",
        keyPoints: [
          "每个端点写清楚：用途、请求参数、响应字段、错误与示例。",
          "示例要覆盖主路径与失败路径：最小可用 + 常见错误。",
          "保持一致性：命名、术语、错误格式与版本策略。",
        ],
        lessons: [
          {
            id: "tw-w4-1",
            title: "API 文档结构与规范",
            detail: "把 API 文档拆成概览、认证、速率限制、错误模型、版本与变更。",
            resources: [
              { title: "Google：API Documentation", url: "https://developers.google.com/style/api-reference-comments" },
              { title: "Stripe API Docs（参考范例）", url: "https://stripe.com/docs/api" },
              { title: "RFC 7807 Problem Details", url: "https://www.rfc-editor.org/rfc/rfc7807" },
            ],
          },
          {
            id: "tw-w4-2",
            title: "OpenAPI / Swagger 入门",
            detail: "理解 OpenAPI 的核心结构，能读懂并用它生成/校验 API 参考文档。",
            resources: [
              { title: "OpenAPI Specification", url: "https://spec.openapis.org/oas/latest.html" },
              { title: "Swagger：Getting Started", url: "https://swagger.io/docs/specification/about/" },
              { title: "Redocly OpenAPI Guides", url: "https://redocly.com/docs/" },
            ],
          },
          {
            id: "tw-w4-3",
            title: "示例、SDK 与代码样例写法",
            detail: "写出可复制、可运行的代码样例：输入/输出、版本、错误处理与说明文字。",
            resources: [
              { title: "Write the Docs：Code Samples", url: "https://www.writethedocs.org/guide/writing/code-samples/" },
              { title: "Google：Sample code", url: "https://developers.google.com/style/code-samples" },
              { title: "Microsoft：Code samples", url: "https://learn.microsoft.com/en-us/style-guide/code-examples" },
            ],
          },
          {
            id: "tw-w4-4",
            title: "CLI 文档与命令参考",
            detail: "写清命令用途、参数、示例与返回值；覆盖最常见的使用路径与错误。",
            resources: [
              { title: "GNU：Command-Line Options", url: "https://www.gnu.org/prep/standards/html_node/Command_002dLine-Interfaces.html" },
              { title: "Cobra User Guide（参考）", url: "https://cobra.dev/" },
              { title: "Click Documentation（参考）", url: "https://click.palletsprojects.com/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "tw-phase3",
    title: "第三阶段：内容体系与质量保障",
    duration: "第 5-6 周",
    goal: "掌握教程/How-to/Reference/Explanation 的写法，并建立审阅、可访问性与自动化质量线。",
    weeks: [
      {
        id: "tw-w5",
        title: "第 5 周：内容类型与写作模板",
        summary: "按 Diátaxis 输出四类内容，让文档“可学、可用、可查、可理解”。",
        overview: "同一主题可拆成：Tutorial（学习路径）、How-to（解决任务）、Reference（查参数）、Explanation（理解原理）。",
        keyPoints: [
          "Tutorial 以学习为主：循序渐进、避免岔路。",
          "How-to 以任务为主：前置条件明确、步骤短且可验证。",
          "Reference 以信息为主：完整、准确、一致，少叙述多结构化。",
        ],
        lessons: [
          {
            id: "tw-w5-1",
            title: "Tutorial（教程）写作",
            detail: "写一篇从 0 到 1 的学习路径：目标、步骤、检查点与复盘。",
            resources: [
              { title: "Diátaxis：Tutorials", url: "https://diataxis.fr/tutorials/" },
              { title: "Google：Tutorials", url: "https://developers.google.com/style/tutorials" },
              { title: "Write the Docs：Tutorials", url: "https://www.writethedocs.org/guide/writing/tutorials/" },
            ],
          },
          {
            id: "tw-w5-2",
            title: "How-to（操作指南）写作",
            detail: "写成任务清单：最少背景、直接步骤、可验证结果与常见坑。",
            resources: [
              { title: "Diátaxis：How-to guides", url: "https://diataxis.fr/how-to-guides/" },
              { title: "Google：How-to", url: "https://developers.google.com/style/how-to" },
              { title: "Microsoft：Procedures", url: "https://learn.microsoft.com/en-us/style-guide/procedures-instructions/writing-step-by-step-instructions" },
            ],
          },
          {
            id: "tw-w5-3",
            title: "Reference（参考）写作",
            detail: "用表格/字段说明写出可查的参考文档：参数、约束、默认值与示例。",
            resources: [
              { title: "Diátaxis：Reference", url: "https://diataxis.fr/reference/" },
              { title: "Google：Reference documents", url: "https://developers.google.com/style/reference-docs" },
              { title: "Microsoft：Tables", url: "https://learn.microsoft.com/en-us/style-guide/scannable-content/tables" },
            ],
          },
          {
            id: "tw-w5-4",
            title: "Explanation（概念解释）写作",
            detail: "建立心智模型：定义、背景、边界、权衡与示意图。",
            resources: [
              { title: "Diátaxis：Explanation", url: "https://diataxis.fr/explanation/" },
              { title: "Google：Conceptual docs", url: "https://developers.google.com/style/conceptual-docs" },
              { title: "Write the Docs：Conceptual Writing", url: "https://www.writethedocs.org/guide/writing/concepts/" },
            ],
          },
        ],
      },
      {
        id: "tw-w6",
        title: "第 6 周：质量线与可持续维护",
        summary: "用风格指南、审阅流程与自动化检查保障质量。",
        overview: "建立文档质量线：术语/风格一致、链接可用、示例可运行、可访问性与本地化考虑。",
        keyPoints: [
          "把主观标准变成可执行规则：style guide + checklist + linter。",
          "可访问性优先：标题层级、替代文本、对比度与易读语言。",
          "本地化/国际化要早做：术语表、占位符、避免文化特定隐喻。",
        ],
        lessons: [
          {
            id: "tw-w6-1",
            title: "风格指南与术语表",
            detail: "建立术语表与写作规范，统一命名、大小写、标点与翻译策略。",
            resources: [
              { title: "Google Style Guide", url: "https://developers.google.com/style" },
              { title: "Microsoft Style Guide", url: "https://learn.microsoft.com/en-us/style-guide/welcome/" },
              { title: "Write the Docs：Style Guides", url: "https://www.writethedocs.org/guide/writing/style-guides/" },
            ],
          },
          {
            id: "tw-w6-2",
            title: "可访问性与包容性写作",
            detail: "用可读语言与结构化信息降低理解门槛，避免歧视性表达。",
            resources: [
              { title: "W3C：WAI Introduction", url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/" },
              { title: "Microsoft：Accessibility", url: "https://learn.microsoft.com/en-us/style-guide/accessibility-guidelines" },
              { title: "Google：Inclusive language", url: "https://developers.google.com/style/inclusive-documentation" },
            ],
          },
          {
            id: "tw-w6-3",
            title: "本地化与国际化（I18n/L10n）",
            detail: "理解翻译流程与约束，写出“可翻译”的原文：术语一致、避免歧义与硬编码。",
            resources: [
              { title: "W3C：Internationalization", url: "https://www.w3.org/International/" },
              { title: "Google：Writing for a global audience", url: "https://developers.google.com/style/translation" },
              { title: "Microsoft：Localization", url: "https://learn.microsoft.com/en-us/style-guide/global-communications" },
            ],
          },
          {
            id: "tw-w6-4",
            title: "文档 QA 与自动化检查",
            detail: "用 Vale/markdownlint/link check 等把质量检查自动化，减少人工重复劳动。",
            resources: [
              { title: "Vale（Style linter）", url: "https://vale.sh/" },
              { title: "markdownlint", url: "https://github.com/DavidAnson/markdownlint" },
              { title: "GitHub Actions", url: "https://docs.github.com/en/actions" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "tw-phase4",
    title: "第四阶段：发布运营与职业作品集",
    duration: "第 7-8 周",
    goal: "把文档发布到可持续维护的站点，建立反馈闭环与个人作品集。",
    weeks: [
      {
        id: "tw-w7",
        title: "第 7 周：发布、反馈与持续改进",
        summary: "用版本与数据驱动迭代：发布说明、变更管理、反馈渠道与指标。",
        overview: "把文档当产品运营：有版本、有发布说明、有反馈闭环，有数据就能迭代。",
        keyPoints: [
          "发布说明要面向用户：新增/变更/弃用/修复与迁移建议。",
          "建立反馈入口：issue 模板、评分组件或表单，形成闭环。",
          "用最小指标衡量：搜索失败率、页面退出、支持工单主题等。",
        ],
        lessons: [
          {
            id: "tw-w7-1",
            title: "信息架构与导航优化",
            detail: "通过目录、侧边栏、交叉链接与术语表，让文档更易找、更易学。",
            resources: [
              { title: "Write the Docs：Information Architecture", url: "https://www.writethedocs.org/guide/docs-practices/" },
              { title: "Nielsen Norman Group：IA Basics", url: "https://www.nngroup.com/articles/information-architecture-ia/" },
              { title: "Google：Cross-references", url: "https://developers.google.com/style/cross-references" },
            ],
          },
          {
            id: "tw-w7-2",
            title: "发布说明与变更日志",
            detail: "写清版本变更：Breaking changes、迁移步骤、弃用计划与兼容性说明。",
            resources: [
              { title: "Keep a Changelog", url: "https://keepachangelog.com/en/1.1.0/" },
              { title: "Semantic Versioning", url: "https://semver.org/" },
              { title: "Google：Release notes", url: "https://developers.google.com/style/release-notes" },
            ],
          },
          {
            id: "tw-w7-3",
            title: "反馈与数据：文档指标",
            detail: "把“感觉”变成数据：收集反馈、定位高跳出页面、优化搜索与导航。",
            resources: [
              { title: "Write the Docs：Analytics", url: "https://www.writethedocs.org/guide/docs-as-code/#analytics" },
              { title: "Nielsen Norman Group：UX Metrics", url: "https://www.nngroup.com/articles/success-metrics/" },
              { title: "Google：Search", url: "https://developers.google.com/style/search" },
            ],
          },
          {
            id: "tw-w7-4",
            title: "DocsOps：预览与自动发布",
            detail: "给每个 PR 提供预览链接，合并后自动发布，减少沟通成本。",
            resources: [
              { title: "GitHub Actions", url: "https://docs.github.com/en/actions" },
              { title: "Netlify Docs（预览/部署）", url: "https://docs.netlify.com/" },
              { title: "Vercel Docs", url: "https://vercel.com/docs" },
            ],
          },
        ],
      },
      {
        id: "tw-w8",
        title: "第 8 周：作品集与面试准备",
        summary: "用一个完整 docs 项目展示能力：信息架构 + 样例 + 质量线 + 发布。",
        overview: "面试最有效的材料是作品：可访问链接、PR 记录、写作测试与复盘。",
        keyPoints: [
          "作品集需要可展示：在线链接 + 变更记录 + 设计取舍说明。",
          "写作测试常考：改写、结构优化、补齐缺失信息、示例可复现。",
          "协作能力同样重要：需求澄清、评审沟通与跨团队推进。",
        ],
        lessons: [
          {
            id: "tw-w8-1",
            title: "作品集项目：从 0 到 1 建一个文档站",
            detail: "选一个开源或个人项目，完成 IA、关键页面、示例与自动化检查并发布。",
            resources: [
              { title: "Write the Docs：Portfolio", url: "https://www.writethedocs.org/guide/writing/portfolio/" },
              { title: "Diátaxis", url: "https://diataxis.fr/" },
              { title: "GitHub Pages", url: "https://pages.github.com/" },
            ],
          },
          {
            id: "tw-w8-2",
            title: "写作测试与复盘方法",
            detail: "用 checklist 复盘：读者、结构、示例可运行、术语一致、可搜索可维护。",
            resources: [
              { title: "Write the Docs：Testing Docs", url: "https://www.writethedocs.org/guide/writing/testing-docs/" },
              { title: "Google：Writing tests (guidance)", url: "https://developers.google.com/style" },
              { title: "Microsoft：Checklist", url: "https://learn.microsoft.com/en-us/style-guide/procedures-instructions" },
            ],
          },
          {
            id: "tw-w8-3",
            title: "跨团队协作：与 PM/工程/支持对齐",
            detail: "学会需求澄清、信息收集与评审沟通，推动文档与产品同步交付。",
            resources: [
              { title: "Write the Docs：Working with Engineers", url: "https://www.writethedocs.org/guide/writing/working-with-engineers/" },
              { title: "Write the Docs：Docs Project Management", url: "https://www.writethedocs.org/guide/docs-project-management/" },
              { title: "Nielsen Norman Group：Stakeholders", url: "https://www.nngroup.com/articles/stakeholder-interviews/" },
            ],
          },
          {
            id: "tw-w8-4",
            title: "职业成长路径",
            detail: "规划深度与广度：产品理解、技术能力、信息架构与团队影响力。",
            resources: [
              { title: "Write the Docs：Career", url: "https://www.writethedocs.org/guide/career/" },
              { title: "roadmap.sh", url: "https://roadmap.sh/" },
              { title: "Write the Docs：Community", url: "https://www.writethedocs.org/" },
            ],
          },
        ],
      },
    ],
  },
]

const technicalWriterKnowledgeCards: KnowledgeCard[] = [
  {
    id: "tw-phase1",
    title: "写作先看读者与任务",
    summary: "技术写作不是文学创作，而是帮助读者完成任务。先明确读者与验收标准，内容才会“可用”。",
    points: [
      "读者画像 > 术语堆砌：不同读者的前置知识完全不同。",
      "用结构化模板降低沟通成本：前置条件/步骤/预期结果/错误处理。",
      "一句话验收：读者看完能否独立完成任务并验证成功？",
    ],
    practice: "选一个你熟悉的功能，写一页 Quickstart：包含前置条件、3-5 步操作与可验证结果。",
  },
  {
    id: "tw-phase2",
    title: "Docs-as-Code 是效率杠杆",
    summary: "把文档当代码一样：用 Git 管变更，用 PR 做评审，用自动化做质量线，发布就变成流水线。",
    points: [
      "PR 让协作可追踪：谁改了什么、为何改、如何回滚。",
      "自动化检查减少重复劳动：链接、拼写、风格与格式一次性解决。",
      "预览环境让评审更高效：所见即所得，减少来回沟通。",
    ],
    practice: "建一个 docs 仓库：启用 PR 预览 + link check + style linter（如 Vale）。",
  },
  {
    id: "tw-phase3",
    title: "用 Diátaxis 组织内容",
    summary: "同一主题需要不同文档类型：教程教会你，How-to 帮你做事，Reference 让你查，Explanation 让你理解。",
    points: [
      "Tutorial 避免岔路：一步一步走到成功体验。",
      "How-to 只为完成任务：最少背景，强校验结果。",
      "Reference 要“结构化与完整”：表格、字段、约束、默认值。",
    ],
    practice: "给同一功能写 4 份内容：Tutorial/How-to/Reference/Explanation，各 1 页。",
  },
  {
    id: "tw-phase4",
    title: "发布与反馈闭环",
    summary: "文档是长期产品。发布说明、反馈渠道与指标让它持续变好，也让你的能力可展示。",
    points: [
      "发布说明面向用户：Breaking change + 迁移指南。",
      "反馈入口要低摩擦：issue 模板、评分组件或表单。",
      "作品集要可验证：在线链接 + PR 记录 + 取舍复盘。",
    ],
    practice: "为作品集站点加“反馈入口”与“变更日志”，并用数据挑 1 页做优化复盘。",
  },
]

const technicalWriterExamQuestions: QuizQuestion[] = [
  {
    id: "tw-q1",
    question: "技术文档最重要的验收标准更接近哪项？",
    options: ["写得足够华丽", "覆盖所有细节", "读者能完成任务并验证成功", "页面排版好看"],
    answer: 2,
    rationale: "技术写作的目标是帮助读者完成任务；是否可复现、可验证是关键。",
  },
  {
    id: "tw-q2",
    question: "Diátaxis 框架中，How-to guide 的核心特征是？",
    options: ["解释原理与背景", "提供完整参数参考", "面向具体任务的可执行步骤", "按章节讲解概念"],
    answer: 2,
    rationale: "How-to 面向完成任务：最少背景、清晰步骤、可验证结果。",
  },
  {
    id: "tw-q3",
    question: "为什么建议用 Docs-as-Code（Git + PR）管理文档？",
    options: ["让写作更有仪式感", "变更可追踪、可评审、可回滚", "避免使用 Markdown", "可以绕过协作沟通"],
    answer: 1,
    rationale: "Git/PR 能追踪变更、进行评审并回滚，降低协作成本。",
  },
  {
    id: "tw-q4",
    question: "一段操作步骤最需要补齐的“证据”通常是？",
    options: ["更多形容词", "预期输出/截图/检查点", "更长的背景故事", "更多抽象概念"],
    answer: 1,
    rationale: "步骤需要可验证：明确预期结果与检查点才能判断是否做对。",
  },
  {
    id: "tw-q5",
    question: "API Reference 文档里，错误处理更推荐怎么写？",
    options: ["只写“发生错误请重试”", "列出错误模型、状态码/错误码与示例", "把错误都放到 FAQ", "完全不写以免吓到读者"],
    answer: 1,
    rationale: "错误模型、常见错误与示例是 API 文档可用性的核心组成。",
  },
  {
    id: "tw-q6",
    question: "写作测试中最常见的“加分项”是？",
    options: ["把每句话都写得更长", "把结构与信息补齐并让示例可复现", "删除所有标题", "只改标点不改内容"],
    answer: 1,
    rationale: "结构化与可复现性直接提升可用性，是写作测试的关键。",
  },
  {
    id: "tw-q7",
    question: "下列哪项更属于 Reference 文档？",
    options: ["从 0 到 1 的完整教程", "面向任务的操作指南", "参数/字段/约束的结构化说明", "原理与背景解释"],
    answer: 2,
    rationale: "Reference 强调结构化信息：参数、字段、约束、默认值与示例。",
  },
  {
    id: "tw-q8",
    question: "为什么要尽早考虑本地化/国际化？",
    options: ["因为翻译越早越便宜", "避免术语不一致与难以翻译的表达", "为了让文档更长", "因为写作必须用英文"],
    answer: 1,
    rationale: "术语与表达如果不一致，会让翻译成本飙升且质量不可控。",
  },
  {
    id: "tw-q9",
    question: "文档的反馈闭环中，最关键的一步是？",
    options: ["开一个群聊", "只收集不处理", "建立低摩擦入口并把改进落到 PR", "把问题都交给支持团队"],
    answer: 2,
    rationale: "反馈要进入可追踪的迭代流程（issue/PR），才能真正改进。",
  },
  {
    id: "tw-q10",
    question: "一个好的 Quickstart 通常包含哪些最小元素？",
    options: ["完整概念史", "前置条件 + 最短步骤 + 可验证结果", "所有高级用法", "至少 20 张截图"],
    answer: 1,
    rationale: "Quickstart 的目标是最短路径跑通成功体验：前置条件、步骤与验证结果。",
  },
]

const kubernetesRoadmap: RoadmapDefinition = {
  id: "kubernetes",
  label: "Kubernetes",
  title: "Kubernetes 云原生实战路线",
  durationLabel: "16 周",
  description:
    "16 周把 Kubernetes 练到可落地：容器与 Linux 基石 → 集群核心 → 网络/存储/调度 → 可观测性 → 安全与合规 → GitOps/Service Mesh。每周有打卡、文档题单与即时测验，进度自动本地保存。",
  heroBadge: "Cloud Native Bootcamp · shadcn UI",
  stages: kubernetesStages,
  knowledgeCards: kubernetesKnowledgeCards,
  examQuestions: kubernetesExamQuestions,
  suggestion: (percent: number) => {
    if (percent < 25) {
      return "建议先完成第 1 阶段前两周，专注 Namespaces、Cgroups 与 Dockerfile 多阶段构建。"
    }
    if (percent < 50) {
      return "完成阶段二工作负载与存储（周 4-5），顺便练习滚动更新与 PVC 绑定。"
    }
    if (percent < 75) {
      return "补齐调度/NetworkPolicy（周 6）并搭建一条 CI/CD 流水线（周 9）。"
    }
    return "加强可观测性（周 11-12）与安全考点（周 14），再做一次全量测验。"
  },
  resourceGuide: {
    environment: "本地 Kind/Minikube 或云上集群，具备 kubectl/容器工具链。",
    fallbackKeyPoints: [
      "照着官方示例跑通最小闭环：构建/部署/验证，先有成功体验。",
      "逐项改参数（资源、探针、路由、存储、策略），观察事件/日志/指标的变化。",
      "整理常见误区与排查路径：权限、网络、存储、镜像拉取、探针、调度。",
    ],
    handsOnSteps: [
      "打开原文，先跑通最小可用示例（命令/清单照抄也行），确认成功信号。",
      "修改 1-2 个关键参数（副本、探针阈值、资源限额、路由/策略等），对比行为差异并记录。",
      "用 `kubectl describe`、事件、日志或容器 CLI 验证修改已生效，并观察监控/告警（如适用）。",
    ],
    selfChecks: [
      "用自己的话阐述：核心机制/配置到底做了什么？边界条件是什么？",
      "故障排查优先级：先看事件/日志，再看网络/权限/存储，再看探针/资源/调度。",
      "在生产落地：需要哪些安全/性能/成本防护（如 RBAC、配额、限流、告警）？",
    ],
    extensions: [
      "把官方示例收录到你的实验仓库，写出“期望 vs 实际”差异与复盘。",
      "列 3 条常见坑，并附上排查脚本/命令（kubectl/日志/监控）。",
      "把本节知识与前后周的内容串联，设计一个小型端到端演练（部署 → 观测 → 调优 → 回滚）。",
    ],
    lessonQuizAdvice: "建议：复盘错题对应的配置/命令，回到文档或实验里重新验证。",
  },
}

const gitGithubRoadmap: RoadmapDefinition = {
  id: "git-github",
  label: "Git & GitHub",
  title: "Git & GitHub 协作加固路线",
  durationLabel: "4 周",
  description:
    "4 周跑通可审计的 Git/GitHub 工作流：掌握三状态心智模型 → 规范分支/PR 协作 → 做好仓库健康与安全 → 上线 Actions 自动化与发布。打卡进度与测验自动保存，便于持续练习。",
  heroBadge: "Version Control Essentials · shadcn UI",
  stages: gitGithubStages,
  knowledgeCards: gitGithubKnowledgeCards,
  examQuestions: gitGithubExamQuestions,
  suggestion: (percent: number) => {
    if (percent < 25) {
      return "先完成 Git 基础：add/commit/log 与分支合并，确保能安全回退。"
    }
    if (percent < 50) {
      return "实践 PR 协作：写好描述、检查清单与分支保护，避免 force push。"
    }
    if (percent < 75) {
      return "给仓库加上模板、CODEOWNERS 与安全扫描，再跑一遍完整协作流程。"
    }
    return "完善 Actions 流水线：为 main 启用审批与 artifact 产物，做一次端到端发布演练。"
  },
  resourceGuide: {
    environment: "已安装 Git 的本地终端 + GitHub 账号（可访问 HTTPS/SSH），Node 或项目所需工具链。",
    fallbackKeyPoints: [
      "始终确认当前分支与远程状态：git status / git fetch / git log --oneline。",
      "变更最小化：小步提交、写好 message，避免强制覆盖。",
      "在 PR 中跑自动化检查与截图，确保 reviewer 可复现。",
    ],
    handsOnSteps: [
      "创建一个示例仓库：初始化、首个 commit、推送到 GitHub。",
      "新建 feature 分支完成一次改动，提交 PR，添加描述与 checklist。",
      "配置一条 Actions 工作流（lint/test/build），为 main 启用 required checks 与审批。",
    ],
    selfChecks: [
      "能否解释 HEAD、分支、远程跟踪分支的关系？",
      "遇到冲突时，如何用 fetch + rebase/merge 解决且不覆盖他人提交？",
      "流水线失败时，能否通过日志/产物定位问题并修复？",
    ],
    extensions: [
      "为仓库添加 CODEOWNERS、Issue/PR 模板、Dependabot 配置。",
      "练习 git bisect 定位缺陷，记录排查脚本。",
      "把 CI 产物部署到临时环境，演练带审批的发布流程。",
    ],
    lessonQuizAdvice: "复盘错题对应的命令或流程，重新在仓库中跑一遍并截图记录。",
  },
}

const technicalWriterRoadmap: RoadmapDefinition = {
  id: "technical-writer",
  label: "Technical Writer",
  title: "技术写作与 Docs-as-Code 路线",
  durationLabel: "8 周",
  description:
    "8 周打造可复用的技术写作体系：写作基础与模板 → Docs-as-Code 工具链/协作 → API/CLI 文档可复现 → 内容体系与质量线 → 发布运营与作品集。每周打卡与课时测验自动保存，持续迭代作品。",
  heroBadge: "Docs-as-Code Bootcamp · shadcn UI",
  stages: technicalWriterStages,
  knowledgeCards: technicalWriterKnowledgeCards,
  examQuestions: technicalWriterExamQuestions,
  suggestion: (percent: number) => {
    if (percent < 25) {
      return "先补齐第 1 阶段：读者分析 + 写作模板 + 风格指南，确保“可用”优先。"
    }
    if (percent < 50) {
      return "把 docs-as-code 跑起来：Git + PR + 自动检查 + 预览发布，形成协作闭环。"
    }
    if (percent < 75) {
      return "重点练 API/CLI 文档：认证/错误模型/示例可复现，并补齐四类文档模板。"
    }
    return "开始做作品集：挑 1 个真实项目做信息架构与发布，并用反馈/数据做一次迭代复盘。"
  },
  resourceGuide: {
    environment: "Markdown 编辑器 + Git 仓库（可选：静态站点生成器），能运行示例命令并产出截图/链接。",
    fallbackKeyPoints: [
      "先写大纲再写正文：标题层级、导航与交叉链接优先。",
      "每一步都可复现：前置条件、版本、命令与预期输出齐全。",
      "术语一致与示例可运行，比“写得很长”更重要。",
    ],
    handsOnSteps: [
      "阅读原文，提炼目标读者、前置条件与验收标准，先写 5-10 行大纲。",
      "写一份最小可用内容（Quickstart/How-to/Reference 任选其一），补齐示例与预期输出/截图。",
      "用 checklist 自检（结构/术语/链接/示例可复现），提交 PR 并邀请评审。",
    ],
    selfChecks: [
      "读者是谁？看完能完成什么任务？成功/失败如何验证？",
      "步骤是否可复制粘贴、可复现？是否遗漏版本/环境差异？",
      "术语、命名与示例是否一致？链接与截图是否可用？",
    ],
    extensions: [
      "把本节产出沉淀为模板（Quickstart/How-to/Reference/Explanation），后续复用。",
      "为仓库加上自动化检查：link check + style linter（如 Vale）+ PR 预览。",
      "补一页 Troubleshooting/FAQ，把高频问题写成可搜索的答案。",
    ],
    lessonQuizAdvice: "建议：把错题对应的概念/模板写成一段可复用示例，并用真实场景验证可用性。",
  },
}

const ROADMAPS: Record<RoadmapId, RoadmapDefinition> = {
  kubernetes: kubernetesRoadmap,
  "git-github": gitGithubRoadmap,
  "technical-writer": technicalWriterRoadmap,
}

const ROADMAP_LIST: RoadmapDefinition[] = [kubernetesRoadmap, gitGithubRoadmap, technicalWriterRoadmap]
const DEFAULT_ROADMAP_ID: RoadmapId = "kubernetes"
const ACTIVE_ROADMAP_KEY = "roadmap-active-id"
const STORAGE_KEY_PREFIX = "roadmap-progress-v1"
const LEGACY_K8S_STORAGE_KEY = "k8s-roadmap-progress-v2"

function getRoadmapIdFromPath(pathname: string): RoadmapId | null {
  const normalized = pathname.replace(/^\/+|\/+$/g, "")
  const [first] = normalized.split("/")
  return first === "kubernetes" || first === "technical-writer" || first === "git-github" ? (first as RoadmapId) : null
}

function storageKeyForRoadmap(roadmapId: RoadmapId) {
  return `${STORAGE_KEY_PREFIX}:${roadmapId}`
}

function roadmapTotals(stages: Stage[]) {
  const lessons = stages.reduce((sum, stage) => sum + stage.weeks.reduce((weekSum, w) => weekSum + w.lessons.length, 0), 0)
  const weeks = stages.reduce((sum, stage) => sum + stage.weeks.length, 0)
  return { lessons, weeks, stages: stages.length }
}

function loadProgressSummary(roadmap: RoadmapDefinition) {
  if (typeof window === "undefined") return { completed: 0, bestScore: undefined as number | undefined }
  try {
    const key = storageKeyForRoadmap(roadmap.id)
    const raw =
      localStorage.getItem(key) || (roadmap.id === "kubernetes" ? localStorage.getItem(LEGACY_K8S_STORAGE_KEY) : null)
    if (!raw) return { completed: 0, bestScore: undefined as number | undefined }
    const parsed = JSON.parse(raw)
    const completed = Array.isArray(parsed.completed) ? parsed.completed.length : 0
    const bestScore = typeof parsed?.quiz?.bestScore === "number" ? parsed.quiz.bestScore : undefined
    return { completed, bestScore }
  } catch {
    return { completed: 0, bestScore: undefined as number | undefined }
  }
}

const defaultQuizState: QuizState = { answers: {}, attempts: 0, bestScore: undefined, lastScore: undefined }
const defaultLessonQuizState: LessonQuizState = { answers: {}, attempts: 0, bestScore: undefined, lastScore: undefined }

function loadPersisted(roadmap: RoadmapDefinition) {
  if (typeof window === "undefined") {
    return {
      completed: new Set<string>(),
      quiz: defaultQuizState,
      lessonQuiz: {} as Record<string, LessonQuizState>,
      docQuiz: {} as DocQuizProgress,
    }
  }
  try {
    const key = storageKeyForRoadmap(roadmap.id)
    const raw = localStorage.getItem(key) || (roadmap.id === "kubernetes" ? localStorage.getItem(LEGACY_K8S_STORAGE_KEY) : null)
    if (!raw)
      return {
        completed: new Set<string>(),
        quiz: defaultQuizState,
        lessonQuiz: {} as Record<string, LessonQuizState>,
        docQuiz: {} as DocQuizProgress,
      }
    const parsed = JSON.parse(raw)

    let lessonQuiz: Record<string, LessonQuizState> = parsed.lessonQuiz || {}
    if (!parsed.lessonQuizOptionsShuffled) {
      try {
        const optionCountByQuestionId: Record<string, number> = {}
        roadmap.stages.forEach((stage) =>
          stage.weeks.forEach((week) =>
            week.lessons.forEach((lesson) =>
              buildLessonQuizCanonical(lesson, week, stage).forEach((q) => {
                optionCountByQuestionId[q.id] = q.options.length
              })
            )
          )
        )

        const migrated: Record<string, LessonQuizState> = {}
        Object.entries(lessonQuiz).forEach(([lessonId, state]) => {
          const answers = state?.answers || {}
          const nextAnswers: Record<string, number | undefined> = {}
          Object.entries(answers).forEach(([qid, idx]) => {
            if (typeof idx !== "number") return
            const optionCount = optionCountByQuestionId[qid]
            if (typeof optionCount !== "number") {
              nextAnswers[qid] = idx
              return
            }
            const order = shuffledOrder(optionCount, hashToUint32(qid))
            const nextIdx = order.indexOf(idx)
            nextAnswers[qid] = nextIdx === -1 ? idx : nextIdx
          })
          migrated[lessonId] = { ...state, answers: nextAnswers }
        })
        lessonQuiz = migrated
      } catch (error) {
        console.warn("课时测验选项顺序迁移失败，将使用原记录", error)
      }
    }

    return {
      completed: new Set<string>(parsed.completed || []),
      quiz: {
        ...defaultQuizState,
        ...parsed.quiz,
        answers: parsed.quiz?.answers ?? {},
      },
      lessonQuiz,
      docQuiz: parsed.docQuiz || ({} as DocQuizProgress),
    }
  } catch (error) {
    console.warn("无法读取本地进度，将使用默认值", error)
    return {
      completed: new Set<string>(),
      quiz: defaultQuizState,
      lessonQuiz: {} as Record<string, LessonQuizState>,
      docQuiz: {} as DocQuizProgress,
    }
  }
}

export default function App() {
  const initial = React.useMemo(() => {
    const pathRoadmapId = typeof window === "undefined" ? null : getRoadmapIdFromPath(window.location.pathname)
    const stored = typeof window === "undefined" ? null : localStorage.getItem(ACTIVE_ROADMAP_KEY)
    const roadmapId: RoadmapId =
      pathRoadmapId ||
      (stored === "kubernetes" || stored === "technical-writer" || stored === "git-github" ? stored : DEFAULT_ROADMAP_ID)
    const roadmap = ROADMAPS[roadmapId] || ROADMAPS[DEFAULT_ROADMAP_ID]
    const page: "landing" | "roadmap" = pathRoadmapId ? "roadmap" : "landing"
    return { roadmapId: roadmap.id, roadmap, persisted: loadPersisted(roadmap), page }
  }, [])

  const [activeRoadmapId, setActiveRoadmapId] = React.useState<RoadmapId>(initial.roadmapId)
  const activeRoadmap = ROADMAPS[activeRoadmapId] || ROADMAPS[DEFAULT_ROADMAP_ID]

  const [completedLessons, setCompletedLessons] = React.useState<Set<string>>(initial.persisted.completed)
  const [quizState, setQuizState] = React.useState<QuizState>(initial.persisted.quiz)
  const [lessonQuiz, setLessonQuiz] = React.useState<Record<string, LessonQuizState>>(initial.persisted.lessonQuiz || {})
  const [docQuiz, setDocQuiz] = React.useState<DocQuizProgress>(initial.persisted.docQuiz || {})
  const [page, setPage] = React.useState<"landing" | "roadmap">(initial.page)
  const [tab, setTab] = React.useState("overview")
  const [knowledgeStage, setKnowledgeStage] = React.useState(initial.roadmap.knowledgeCards[0]?.id || "")
  const [resourceView, setResourceView] = React.useState<ResourceContext | null>(null)
  const [lessonQuizView, setLessonQuizView] = React.useState<{ lesson: Lesson; week: Week; stage: Stage } | null>(null)

  const totalLessons = React.useMemo(
    () =>
      activeRoadmap.stages.reduce((sum, stage) => sum + stage.weeks.reduce((weekSum, w) => weekSum + w.lessons.length, 0), 0),
    [activeRoadmapId]
  )

  const overall = React.useMemo(() => {
    const done = completedLessons.size
    const percent = totalLessons === 0 ? 0 : Math.round((done / totalLessons) * 100)
    return { done, total: totalLessons, percent }
  }, [completedLessons, totalLessons])

  const stageStats = React.useCallback(
    (stageId: string) => {
      const stage = activeRoadmap.stages.find((item) => item.id === stageId)
      if (!stage) return { done: 0, total: 0 }
      const total = stage.weeks.reduce((sum, w) => sum + w.lessons.length, 0)
      let done = 0
      stage.weeks.forEach((week) =>
        week.lessons.forEach((lesson) => {
          if (completedLessons.has(lesson.id)) done += 1
        })
      )
      return { done, total }
    },
    [activeRoadmapId, completedLessons]
  )

  React.useEffect(() => {
    if (typeof window === "undefined") return
    localStorage.setItem(ACTIVE_ROADMAP_KEY, activeRoadmapId)
  }, [activeRoadmapId])

  React.useEffect(() => {
    const payload = {
      completed: Array.from(completedLessons),
      quiz: quizState,
      lessonQuiz,
      docQuiz,
      lessonQuizOptionsShuffled: true,
    }
    localStorage.setItem(storageKeyForRoadmap(activeRoadmapId), JSON.stringify(payload))
  }, [activeRoadmapId, completedLessons, quizState, lessonQuiz, docQuiz])

  const toggleLesson = (lessonId: string) => {
    setCompletedLessons((prev) => {
      const next = new Set(prev)
      next.has(lessonId) ? next.delete(lessonId) : next.add(lessonId)
      return next
    })
  }

  const handleQuizSelect = (qid: string, value: number) => {
    setQuizState((prev) => ({
      ...prev,
      answers: { ...prev.answers, [qid]: value },
    }))
  }

  const submitQuiz = () => {
    const quizQuestions = activeRoadmap.examQuestions
    let score = 0
    quizQuestions.forEach((q) => {
      if (quizState.answers[q.id] === q.answer) score += 1
    })
    const percent = Math.round((score / quizQuestions.length) * 100)
    setQuizState((prev) => ({
      ...prev,
      attempts: prev.attempts + 1,
      lastScore: percent,
      bestScore: prev.bestScore == null ? percent : Math.max(prev.bestScore, percent),
    }))
  }

  const resetQuiz = () => {
    setQuizState((prev) => ({ ...prev, answers: {}, lastScore: undefined }))
  }

  const getLessonQuizState = (lessonId: string): LessonQuizState => lessonQuiz[lessonId] || { ...defaultLessonQuizState }

  const handleLessonQuizSelect = (lessonId: string, qid: string, value: number) => {
    setLessonQuiz((prev) => {
      const current = prev[lessonId] || { ...defaultLessonQuizState }
      return {
        ...prev,
        [lessonId]: { ...current, answers: { ...current.answers, [qid]: value } },
      }
    })
  }

  const submitLessonQuiz = (lessonId: string, questions: QuizQuestion[]) => {
    const current = getLessonQuizState(lessonId)
    let score = 0
    questions.forEach((q) => {
      if (current.answers[q.id] === q.answer) score += 1
    })
    const percent = Math.round((score / questions.length) * 100)
    setLessonQuiz((prev) => ({
      ...prev,
      [lessonId]: {
        answers: current.answers,
        attempts: (current.attempts || 0) + 1,
        lastScore: percent,
        bestScore: current.bestScore == null ? percent : Math.max(current.bestScore, percent),
      },
    }))
  }

  const resetLessonQuiz = (lessonId: string) => {
    setLessonQuiz((prev) => ({
      ...prev,
      [lessonId]: { ...defaultLessonQuizState },
    }))
  }

  const resetAll = () => {
    const ok = window.confirm(`确定要清空「${activeRoadmap.label}」的打卡与答题记录吗？`)
    if (!ok) return
    setCompletedLessons(new Set())
    setQuizState(defaultQuizState)
    setLessonQuiz({})
    setDocQuiz({})
  }

  const scrollToTop = React.useCallback(() => {
    if (typeof window === "undefined") return
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const openRoadmap = React.useCallback(
    (roadmapId: RoadmapId, nextTab: string = "overview", updateHistory = true) => {
      setResourceView(null)
      setLessonQuizView(null)
      if (roadmapId !== activeRoadmapId) {
        const nextRoadmap = ROADMAPS[roadmapId]
        const persisted = loadPersisted(nextRoadmap)
        setCompletedLessons(persisted.completed)
        setQuizState(persisted.quiz)
        setLessonQuiz(persisted.lessonQuiz || {})
        setDocQuiz(persisted.docQuiz || {})
        setKnowledgeStage(nextRoadmap.knowledgeCards[0]?.id || "")
        setActiveRoadmapId(roadmapId)
      }
      setTab(nextTab)
      setPage("roadmap")
      if (updateHistory && typeof window !== "undefined") {
        window.history.pushState({ roadmapId }, "", `/${roadmapId}`)
      }
      scrollToTop()
    },
    [activeRoadmapId, scrollToTop]
  )

  const openLanding = React.useCallback(
    (updateHistory = true) => {
      setResourceView(null)
      setLessonQuizView(null)
      setPage("landing")
      if (updateHistory && typeof window !== "undefined") {
        window.history.pushState({}, "", "/")
      }
      scrollToTop()
    },
    [scrollToTop]
  )

  React.useEffect(() => {
    if (typeof window === "undefined") return
    const handlePopState = () => {
      const roadmapIdFromPath = getRoadmapIdFromPath(window.location.pathname)
      if (roadmapIdFromPath) {
        openRoadmap(roadmapIdFromPath, "overview", false)
      } else {
        openLanding(false)
      }
    }
    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [openLanding, openRoadmap])

  const docQuestionList = React.useCallback((lessonId: string) => docQuestionMap[lessonId] || [], [])
  const docDoneCount = React.useCallback(
    (lessonId: string) => {
      const list = docQuestionList(lessonId)
      const done = docQuiz[lessonId]?.length || 0
      return { done, total: list.length }
    },
    [docQuiz, docQuestionList]
  )
  const toggleDocQuestion = (lessonId: string, idx: number) => {
    setDocQuiz((prev) => {
      const current = new Set(prev[lessonId] || [])
      current.has(idx) ? current.delete(idx) : current.add(idx)
      return { ...prev, [lessonId]: Array.from(current).sort((a, b) => a - b) }
    })
  }
  const resetDocQuiz = (lessonId: string) => {
    setDocQuiz((prev) => ({ ...prev, [lessonId]: [] }))
  }
  const suggestion = React.useMemo(() => activeRoadmap.suggestion(overall.percent), [activeRoadmapId, overall.percent])

  const startLabel = overall.done > 0 ? "继续学习" : "开始学习"

  if (page === "landing") {
    return (
      <div className="min-h-screen bg-background/80 text-foreground">
        <div className="container py-12 space-y-8">
          <Card className="glass-card p-8 space-y-5 animate-fade-in">
            <div className="flex flex-wrap gap-2 items-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <Badge variant="secondary" className="bg-secondary/70 text-xs">
                Roadmaps · Interactive
              </Badge>
              <Badge variant="outline">进度打卡</Badge>
              <Badge variant="outline">测验 + 题单</Badge>
              <Badge variant="outline">本地保存</Badge>
            </div>
            <CardTitle className="text-4xl font-bold tracking-tight">学习路线（Roadmaps）</CardTitle>
            <CardDescription className="text-base leading-relaxed">
              选择一条路线，按阶段/周推进；每节配套权威资源、文档题单与即时测验。
            </CardDescription>
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => openRoadmap(activeRoadmapId, "overview")} className="gap-2">
                <GraduationCap className="h-4 w-4" />
                {startLabel}
              </Button>
              <Button variant="outline" onClick={() => openRoadmap(activeRoadmapId, "exam")} className="gap-2">
                <BadgeCheck className="h-4 w-4" />
                模拟考试
              </Button>
              <Button variant="ghost" onClick={resetAll} className="gap-2 text-muted-foreground">
                <RefreshCw className="h-4 w-4" />
                重置记录
              </Button>
            </div>
          </Card>

          <div className="grid gap-4 lg:grid-cols-3">
            {ROADMAP_LIST.map((roadmap) => {
              const totals = roadmapTotals(roadmap.stages)
              const summary = loadProgressSummary(roadmap)
              const percent = totals.lessons === 0 ? 0 : Math.round((summary.completed / totals.lessons) * 100)
              const roadmapSuggestion = roadmap.suggestion(percent)
              return (
                <Card key={roadmap.id} className="glass-card p-6 space-y-4 animate-fade-in">
                  <div className="flex flex-wrap gap-2 items-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <Badge variant="secondary" className="bg-secondary/70 text-xs">
                      Live
                    </Badge>
                    <Badge variant="outline">{totals.stages} 阶段</Badge>
                    <Badge variant="outline">{totals.weeks} 周</Badge>
                    <Badge variant="outline">{totals.lessons} 课时</Badge>
                  </div>
                  <CardTitle className="text-2xl font-semibold tracking-tight">
                    {roadmap.title}（{roadmap.durationLabel}）
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">{roadmap.description}</CardDescription>
                  <div className="grid gap-3 sm:grid-cols-3 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                      实战优先
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Brain className="h-4 w-4 text-accent" />
                      测验闭环
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-secondary" />
                      权威资料
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">学习进度</span>
                      <span className="font-medium">
                        {summary.completed}/{totals.lessons} · {percent}%
                      </span>
                    </div>
                    <Progress value={percent} />
                    <p className="text-sm text-muted-foreground">{roadmapSuggestion}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button onClick={() => openRoadmap(roadmap.id, "overview")} className="gap-2">
                      <ArrowUpRight className="h-4 w-4" />
                      {summary.completed > 0 ? "继续学习" : "开始学习"}
                    </Button>
                    <Button variant="outline" onClick={() => openRoadmap(roadmap.id, "knowledge")} className="gap-2">
                      <Lightbulb className="h-4 w-4" />
                      速览知识点
                    </Button>
                  </div>
                </Card>
              )
            })}
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card className="glass-card p-5 space-y-2 animate-fade-in">
              <div className="flex items-center gap-2 font-semibold">
                <ListChecks className="h-4 w-4 text-primary" />
                打卡进度
              </div>
              <CardDescription className="text-sm">每节课一键打卡，所有进度保存在本地。</CardDescription>
            </Card>
            <Card className="glass-card p-5 space-y-2 animate-fade-in">
              <div className="flex items-center gap-2 font-semibold">
                <Brain className="h-4 w-4 text-accent" />
                即时测验
              </div>
              <CardDescription className="text-sm">每周/每课配套测验与解析，帮助形成闭环。</CardDescription>
            </Card>
            <Card className="glass-card p-5 space-y-2 animate-fade-in">
              <div className="flex items-center gap-2 font-semibold">
                <BookOpen className="h-4 w-4 text-secondary" />
                权威资料
              </div>
              <CardDescription className="text-sm">优先链接官方文档与权威参考，减少信息噪音。</CardDescription>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  const knowledgeCards = activeRoadmap.knowledgeCards
  const quizQuestions = activeRoadmap.examQuestions
  const knowledge = knowledgeCards.find((card) => card.id === knowledgeStage) || knowledgeCards[0]
  const showQuizFeedback = quizState.lastScore != null
  const lastScore = quizState.lastScore ?? 0
  const bestScore = quizState.bestScore ?? lastScore
  const handleResourceOpen = (resource: Resource, lesson: Lesson, week: Week, stage: Stage) => {
    setResourceView({ resource, lesson, week, stage })
  }

  return (
    <div className="min-h-screen bg-background/80 text-foreground">
      <div className="container py-10 space-y-6">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={() => openLanding()} className="gap-2 text-muted-foreground">
            <ArrowLeft className="h-4 w-4" />
            返回 Roadmaps
          </Button>
          <Badge variant="outline" className="text-xs">
            {activeRoadmap.label}
          </Badge>
        </div>
        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="glass-card p-6 space-y-4 animate-fade-in">
            <div className="flex flex-wrap gap-2 items-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <Badge variant="secondary" className="bg-secondary/70 text-xs">
                {activeRoadmap.heroBadge}
              </Badge>
              <Badge variant="outline">
                {activeRoadmap.durationLabel} · {totalLessons} 课时
              </Badge>
              <Badge variant="outline">本地保存进度</Badge>
            </div>
            <CardTitle className="text-3xl font-bold tracking-tight">
              {activeRoadmap.title}（{activeRoadmap.durationLabel}）
            </CardTitle>
            <CardDescription className="text-base leading-relaxed">{activeRoadmap.description}</CardDescription>
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => setTab("overview")} className="gap-2">
                <Layers className="h-4 w-4" />
                开始学习
              </Button>
              <Button variant="outline" onClick={() => setTab("exam")} className="gap-2">
                <BadgeCheck className="h-4 w-4" />
                进入考试
              </Button>
              <Button variant="ghost" onClick={() => setTab("knowledge")} className="gap-2">
                <Lightbulb className="h-4 w-4" />
                速览知识点
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="h-4 w-4 text-primary" />
                实战优先
              </span>
              <span className="inline-flex items-center gap-1">
                <Sparkles className="h-4 w-4 text-accent" />
                阶段建议
              </span>
              <span className="inline-flex items-center gap-1">
                <ClipboardList className="h-4 w-4 text-muted-foreground" />
                测验解析
              </span>
            </div>
          </Card>

          <Card className="glass-card p-5 space-y-4 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">学习进度</p>
                <p className="text-xl font-semibold mt-1">{overall.percent}%</p>
              </div>
              <Button variant="ghost" size="sm" onClick={resetAll} className="gap-2 text-muted-foreground">
                <RefreshCw className="h-4 w-4" />
                重置
              </Button>
            </div>
            <Progress value={overall.percent} />
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div className="rounded-lg border border-border/60 bg-background/60 p-3">
                <p className="text-muted-foreground text-xs">已完成</p>
                <p className="text-lg font-semibold">{overall.done}</p>
              </div>
              <div className="rounded-lg border border-border/60 bg-background/60 p-3">
                <p className="text-muted-foreground text-xs">总课时</p>
                <p className="text-lg font-semibold">{overall.total}</p>
              </div>
              <div className="rounded-lg border border-border/60 bg-background/60 p-3">
                <p className="text-muted-foreground text-xs">最佳成绩</p>
                <p className="text-lg font-semibold">{quizState.bestScore != null ? `${quizState.bestScore}%` : "—"}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {activeRoadmap.stages.map((stage) => {
                const stats = stageStats(stage.id)
                const percent = stats.total === 0 ? 0 : Math.round((stats.done / stats.total) * 100)
                return (
                  <Badge key={stage.id} variant="subtle" className="border-border/70 bg-background/60 text-muted-foreground">
                    {stage.title} · {percent}%
                  </Badge>
                )
              })}
            </div>
          </Card>
        </div>

        <Tabs value={tab} onValueChange={setTab} className="space-y-4">
          <TabsList className="bg-card/80 border border-border/70">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <ListChecks className="h-4 w-4" />
              路线总览
            </TabsTrigger>
            <TabsTrigger value="knowledge" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              知识讲解
            </TabsTrigger>
            <TabsTrigger value="exam" className="flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              考试环节
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">路线分期</p>
                <h2 className="text-2xl font-semibold leading-tight">{activeRoadmap.durationLabel} 学习地图</h2>
                <p className="text-muted-foreground text-sm">逐周卡片 + 可勾选课时，自动统计完成度并生成行动建议。</p>
              </div>
              <Badge variant="secondary" className="gap-1">
                <Lightbulb className="h-4 w-4" />
                {suggestion}
              </Badge>
            </div>

            <div className="space-y-4">
              {activeRoadmap.stages.map((stage) => {
                const stats = stageStats(stage.id)
                const percent = stats.total === 0 ? 0 : Math.round((stats.done / stats.total) * 100)
                return (
                  <Card key={stage.id} className="glass-card p-5 space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{stage.duration}</Badge>
                          <Badge variant="outline" className="text-muted-foreground">
                            {stage.goal}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl">{stage.title}</CardTitle>
                      </div>
                      <div className="w-full max-w-xs space-y-2">
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>阶段完成度</span>
                          <span>
                            {stats.done}/{stats.total}
                          </span>
                        </div>
                        <Progress value={percent} />
                      </div>
                    </div>

                    <div className="grid gap-3 md:grid-cols-2">
                      {stage.weeks.map((week) => (
                        <div key={week.id} className="rounded-xl border border-border/60 bg-background/70 p-4 space-y-3">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{week.title}</p>
                              <p className="text-sm text-muted-foreground">{week.summary}</p>
                            </div>
                            <Badge variant="outline" className="text-muted-foreground">
                              {week.lessons.filter((l) => completedLessons.has(l.id)).length}/{week.lessons.length}
                            </Badge>
                          </div>
                          <div className="space-y-2">
                            {week.lessons.map((lesson) => {
                              const checked = completedLessons.has(lesson.id)
                              return (
                                <div
                                  key={lesson.id}
                                  className="flex items-start gap-3 rounded-lg border border-border/60 bg-card/40 p-3 transition hover:border-accent/50"
                                >
                              <Checkbox
                                id={lesson.id}
                                checked={checked}
                                onCheckedChange={() => toggleLesson(lesson.id)}
                                className="mt-1"
                              />
                                  <div className="flex-1 space-y-2">
                                    <Label htmlFor={lesson.id} className="cursor-pointer space-y-1">
                                      <p className="text-sm font-medium leading-tight">{lesson.title}</p>
                                      <p className="text-xs text-muted-foreground leading-relaxed">{lesson.detail}</p>
                                    </Label>
                                    <div className="flex flex-wrap gap-2">
                                      {lesson.resources?.length
                                        ? lesson.resources.map((res) => (
                                            <button
                                              key={res.url}
                                              onClick={() => handleResourceOpen(res, lesson, week, stage)}
                                              className="inline-flex items-center gap-1 rounded-md border border-border/60 bg-background/60 px-2 py-1 text-[11px] text-muted-foreground transition hover:border-accent/60 hover:text-foreground"
                                            >
                                              <ArrowUpRight className="h-3 w-3" />
                                              {res.title}
                                            </button>
                                          ))
                                        : null}
                                      <Button
                                        size="sm"
                                        variant="outline"
                                        className="h-7 px-2 text-xs"
                                        onClick={() => setLessonQuizView({ lesson, week, stage })}
                                      >
                                        课时测验
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              )
                        })}
                      </div>
                    </div>
                      ))}
                    </div>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="knowledge" className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">深入浅出</p>
                <h2 className="text-2xl font-semibold leading-tight">关键知识点速览</h2>
                <p className="text-muted-foreground text-sm">按阶段拆解术语、落地价值与常见误区，并给出练习方向。</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {knowledgeCards.map((card) => (
                <Button
                  key={card.id}
                  variant={card.id === knowledgeStage ? "default" : "outline"}
                  size="sm"
                  onClick={() => setKnowledgeStage(card.id)}
                  className="gap-2"
                >
                  <BookOpen className="h-4 w-4" />
                  {card.title}
                </Button>
              ))}
            </div>

            <div className="grid gap-3 lg:grid-cols-[1.1fr_0.9fr]">
              <Card className="glass-card p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    阶段完成度 {(() => {
                      const stats = stageStats(knowledge.id)
                      return stats.total === 0 ? 0 : Math.round((stats.done / stats.total) * 100)
                    })()}
                    %
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {knowledge.practice}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{knowledge.title}</CardTitle>
                <CardDescription className="text-base">{knowledge.summary}</CardDescription>
                <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {knowledge.points.map((point, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="glass-card p-5 space-y-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-accent" />
                  如何快速内化？
                </CardTitle>
                <CardDescription className="text-sm">
                  每周跟踪一个“输入-输出”闭环：理解概念 → 动手实验 → 写出一句话总结。下方基于已完成的课时给你下一步建议。
                </CardDescription>
                <Alert className="border-accent/50 bg-accent/10">
                  <AlertTitle>行动建议</AlertTitle>
                  <AlertDescription>{suggestion}</AlertDescription>
                </Alert>
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="rounded-lg border border-border/60 bg-background/60 p-3">
                    <p className="text-xs text-muted-foreground">最近完成</p>
                    <p className="text-lg font-semibold">
                      {overall.done > 0 ? `${overall.done} / ${overall.total} 课时` : "还没有开始，先挑一节打卡"}
                    </p>
                  </div>
                  <div className="rounded-lg border border-border/60 bg-background/60 p-3">
                    <p className="text-xs text-muted-foreground">测验最佳</p>
                    <p className="text-lg font-semibold">{quizState.bestScore != null ? `${quizState.bestScore}%` : "暂无成绩"}</p>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="exam" className="space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">自测</p>
                <h2 className="text-2xl font-semibold leading-tight">阶段考试与复盘</h2>
                <p className="text-muted-foreground text-sm">即时判分、查看解析，保存最佳成绩并给出复习建议。</p>
              </div>
              <Badge variant="outline" className="gap-1 text-muted-foreground">
                <GraduationCap className="h-4 w-4" />
                建议完成 50% 路线后再测验
              </Badge>
            </div>

            <Card className="glass-card p-4 space-y-4">
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border border-border/60 bg-background/60 p-3">
                  <p className="text-xs text-muted-foreground">已尝试</p>
                  <p className="text-lg font-semibold">{quizState.attempts}</p>
                </div>
                <div className="rounded-lg border border-border/60 bg-background/60 p-3">
                  <p className="text-xs text-muted-foreground">最佳成绩</p>
                  <p className="text-lg font-semibold">{quizState.bestScore != null ? `${quizState.bestScore}%` : "—"}</p>
                </div>
                <div className="rounded-lg border border-border/60 bg-background/60 p-3">
                  <p className="text-xs text-muted-foreground">当前作答</p>
                  <p className="text-lg font-semibold">
                    {Object.keys(quizState.answers).length}/{quizQuestions.length} 题
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {quizQuestions.map((q, idx) => {
                  const selected = quizState.answers[q.id]
                  return (
                    <div key={q.id} className="rounded-xl border border-border/60 bg-background/70 p-4 space-y-3">
                      <div className="flex items-start gap-2">
                        <Badge variant="secondary">Q{idx + 1}</Badge>
                        <div className="space-y-1">
                          <p className="font-semibold text-base">{q.question}</p>
                          {showQuizFeedback && (
                            <p className="text-xs text-muted-foreground">正确答案：{String.fromCharCode(65 + q.answer)}</p>
                          )}
                        </div>
                      </div>
                      <RadioGroup
                        value={selected !== undefined ? String(selected) : undefined}
                        onValueChange={(val) => handleQuizSelect(q.id, Number(val))}
                        className="space-y-2"
                      >
                        {q.options.map((opt, optIdx) => {
                          const isSelected = selected === optIdx
                          const isCorrect = showQuizFeedback && optIdx === q.answer
                          const isWrong = showQuizFeedback && isSelected && optIdx !== q.answer
                          return (
                            <label
                              key={optIdx}
                              className={[
                                "flex cursor-pointer items-start gap-3 rounded-lg border border-border/50 bg-card/40 p-3 transition",
                                isCorrect ? "border-primary/60 bg-primary/10" : "",
                                isWrong ? "border-destructive/50 bg-destructive/10" : "",
                                !showQuizFeedback && isSelected ? "border-accent/50 bg-accent/10" : "",
                              ].join(" ")}
                              htmlFor={`${q.id}-${optIdx}`}
                            >
                              <RadioGroupItem value={String(optIdx)} id={`${q.id}-${optIdx}`} className="mt-1" />
                              <div className="space-y-1">
                                <p className="text-sm font-medium">
                                  {String.fromCharCode(65 + optIdx)}. {opt}
                                </p>
                                {showQuizFeedback && isCorrect && (
                                  <p className="text-xs text-muted-foreground">这是正确答案</p>
                                )}
                                {showQuizFeedback && isWrong && (
                                  <p className="text-xs text-destructive">已选择，建议回顾对应周次</p>
                                )}
                              </div>
                            </label>
                          )
                        })}
                      </RadioGroup>
                      {showQuizFeedback && <p className="text-sm text-muted-foreground">{q.rationale}</p>}
                    </div>
                  )
                })}
              </div>

              <div className="flex flex-wrap gap-2">
                <Button onClick={submitQuiz} className="gap-2">
                  <Trophy className="h-4 w-4" />
                  提交并查看成绩
                </Button>
                <Button variant="outline" onClick={resetQuiz} className="gap-2">
                  <RefreshCw className="h-4 w-4" />
                  清空答题
                </Button>
              </div>

              {showQuizFeedback && (
                <Alert className="border-accent/60 bg-accent/10">
                  <AlertTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-accent" />
                    成绩：{lastScore}%
                  </AlertTitle>
                  <AlertDescription className="space-y-1">
                    <p>最佳成绩：{bestScore}% · 已尝试 {quizState.attempts} 次</p>
                    <p>
                      {lastScore >= 90
                        ? "优秀！具备实战水平，可以做一遍故障排查演练。"
                        : lastScore >= 75
                          ? "良好，再补充 NetworkPolicy / Helm 与可观测性查询练习。"
                          : lastScore >= 60
                            ? "及格，回顾错题对应的周次，并重做动手实验。"
                            : "需要加强：重学第 1-4 阶段核心内容，完成 2 次小实验后再测。"}
                    </p>
                  </AlertDescription>
                </Alert>
              )}
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {resourceView && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 px-4 py-10 backdrop-blur">
          <div className="w-full max-w-3xl rounded-2xl border border-border/70 bg-card/90 p-6 shadow-glow overflow-y-auto max-h-[90vh]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">文档讲解</p>
                <h3 className="text-xl font-semibold text-foreground">{resourceView.resource.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {resourceView.stage.title} · {resourceView.week.title} · {resourceView.lesson.title}
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setResourceView(null)}>
                  关闭
                </Button>
                <Button asChild>
                  <a href={resourceView.resource.url} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                    打开原文 <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground">
              <div className="rounded-lg border border-border/60 bg-background/70 p-4 space-y-2">
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">背景补充</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>前置认知：{resourceView.week.overview || resourceView.week.summary || "先通读官方概念与示例，再上手实验。"}</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>本课综述：{getLessonOverview(resourceView.lesson) || resourceView.lesson.detail}</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>环境预期：{activeRoadmap.resourceGuide.environment}</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>与其他周关联：{resourceView.stage.title} → {resourceView.stage.goal}</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-border/60 bg-background/70 p-4 space-y-2">
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">重难点拆解</p>
                <ul className="space-y-1 text-foreground/90">
                  {(resourceView.week.keyPoints && resourceView.week.keyPoints.length
                    ? resourceView.week.keyPoints
                    : resourceView.lesson.keyPoints && resourceView.lesson.keyPoints.length
                      ? resourceView.lesson.keyPoints
                      : activeRoadmap.resourceGuide.fallbackKeyPoints
                  ).map((kp, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{kp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-border/60 bg-background/70 p-4 space-y-2">
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">动手路径</p>
                <ol className="list-decimal pl-4 space-y-1 text-muted-foreground">
                  {activeRoadmap.resourceGuide.handsOnSteps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className="rounded-lg border border-border/60 bg-background/70 p-4 space-y-2">
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">自检/质询</p>
                <ul className="space-y-1 text-muted-foreground">
                  {activeRoadmap.resourceGuide.selfChecks.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-border/60 bg-background/70 p-4 space-y-2">
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">扩展与衍生</p>
                <ul className="space-y-1 text-muted-foreground">
                  {activeRoadmap.resourceGuide.extensions.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {lessonQuizView && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 px-4 py-10 backdrop-blur">
          <div className="w-full max-w-4xl rounded-2xl border border-border/70 bg-card/90 p-6 shadow-glow overflow-y-auto max-h-[90vh]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">课时测验</p>
                <h3 className="text-xl font-semibold text-foreground">{lessonQuizView.lesson.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {lessonQuizView.stage.title} · {lessonQuizView.week.title}
                </p>
                <p className="text-sm text-muted-foreground mt-2">{getLessonOverview(lessonQuizView.lesson) || lessonQuizView.lesson.detail}</p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    resetLessonQuiz(lessonQuizView.lesson.id)
                    resetDocQuiz(lessonQuizView.lesson.id)
                  }}
                >
                  清空记录
                </Button>
                <Button variant="ghost" onClick={() => setLessonQuizView(null)}>
                  关闭
                </Button>
              </div>
            </div>

            {(() => {
              const docList = docQuestionList(lessonQuizView.lesson.id)
              if (docList.length) {
                const { done, total } = docDoneCount(lessonQuizView.lesson.id)
                return (
                  <div className="mt-4 space-y-4">
                    <div className="grid gap-3 md:grid-cols-3">
                      <div className="rounded-lg border border-border/60 bg-background/70 p-3">
                        <p className="text-xs text-muted-foreground">文档题数</p>
                        <p className="text-lg font-semibold">
                          {done}/{total}
                        </p>
                      </div>
                      <div className="rounded-lg border border-border/60 bg-background/70 p-3">
                        <p className="text-xs text-muted-foreground">来源</p>
                        <p className="text-sm text-muted-foreground">自动解析 lesson_quizzes.md</p>
                      </div>
                      <div className="rounded-lg border border-border/60 bg-background/70 p-3 flex items-center justify-between">
                        <p className="text-xs text-muted-foreground">重置标记</p>
                        <Button size="sm" variant="outline" onClick={() => resetDocQuiz(lessonQuizView.lesson.id)}>
                          清空
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {docList.map((prompt, idx) => {
                        const checked = docQuiz[lessonQuizView.lesson.id]?.includes(idx) || false
                        return (
                          <div key={idx} className="rounded-xl border border-border/60 bg-background/70 p-4 flex gap-3">
                            <Checkbox
                              checked={checked}
                              onCheckedChange={() => toggleDocQuestion(lessonQuizView.lesson.id, idx)}
                              className="mt-1"
                            />
                            <div className="space-y-1">
                              <p className="text-sm font-semibold">
                                Q{idx + 1}. {prompt}
                              </p>
                              <p className="text-xs text-muted-foreground">阅读官方/权威文档后作答并勾选完成</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              }
              const qlist = buildLessonQuiz(lessonQuizView.lesson, lessonQuizView.week, lessonQuizView.stage)
              const state = getLessonQuizState(lessonQuizView.lesson.id)
              const showFeedback = state.lastScore != null
              return (
                <div className="mt-4 space-y-3">
                  <div className="grid gap-3 md:grid-cols-3">
                    <div className="rounded-lg border border-border/60 bg-background/70 p-3">
                      <p className="text-xs text-muted-foreground">已尝试</p>
                      <p className="text-lg font-semibold">{state.attempts || 0}</p>
                    </div>
                    <div className="rounded-lg border border-border/60 bg-background/70 p-3">
                      <p className="text-xs text-muted-foreground">最佳成绩</p>
                      <p className="text-lg font-semibold">{state.bestScore != null ? `${state.bestScore}%` : "—"}</p>
                    </div>
                    <div className="rounded-lg border border-border/60 bg-background/70 p-3">
                      <p className="text-xs text-muted-foreground">已答题目</p>
                      <p className="text-lg font-semibold">
                        {Object.keys(state.answers || {}).length}/{qlist.length}
                      </p>
                    </div>
                  </div>

                  {qlist.map((q, idx) => {
                    const selected = state.answers[q.id]
                    return (
                      <div key={q.id} className="rounded-xl border border-border/60 bg-background/70 p-4 space-y-3">
                        <div className="flex items-start gap-2">
                          <Badge variant="secondary">Q{idx + 1}</Badge>
                          <div className="space-y-1">
                            <p className="font-semibold text-base">{q.question}</p>
                            {showFeedback && (
                              <p className="text-xs text-muted-foreground">正确答案：{String.fromCharCode(65 + q.answer)}</p>
                            )}
                          </div>
                        </div>
                        <RadioGroup
                          value={selected !== undefined ? String(selected) : undefined}
                          onValueChange={(val) => handleLessonQuizSelect(lessonQuizView.lesson.id, q.id, Number(val))}
                          className="space-y-2"
                        >
                          {q.options.map((opt, optIdx) => {
                            const isSelected = selected === optIdx
                            const isCorrect = showFeedback && optIdx === q.answer
                            const isWrong = showFeedback && isSelected && optIdx !== q.answer
                            return (
                              <label
                                key={optIdx}
                                className={[
                                  "flex cursor-pointer items-start gap-3 rounded-lg border border-border/50 bg-card/40 p-3 transition",
                                  isCorrect ? "border-primary/60 bg-primary/10" : "",
                                  isWrong ? "border-destructive/50 bg-destructive/10" : "",
                                  !showFeedback && isSelected ? "border-accent/50 bg-accent/10" : "",
                                ].join(" ")}
                                htmlFor={`${q.id}-${optIdx}`}
                              >
                                <RadioGroupItem value={String(optIdx)} id={`${q.id}-${optIdx}`} className="mt-1" />
                                <div className="space-y-1">
                                  <p className="text-sm font-medium">
                                    {String.fromCharCode(65 + optIdx)}. {opt}
                                  </p>
                                  {showFeedback && isCorrect && (
                                    <p className="text-xs text-muted-foreground">正确</p>
                                  )}
                                  {showFeedback && isWrong && (
                                    <p className="text-xs text-destructive">已选择，建议回顾对应讲解</p>
                                  )}
                                </div>
                              </label>
                            )
                          })}
                        </RadioGroup>
                        {showFeedback && <p className="text-sm text-muted-foreground">{q.rationale}</p>}
                      </div>
                    )
                  })}

                  <div className="flex flex-wrap gap-2">
                    <Button onClick={() => submitLessonQuiz(lessonQuizView.lesson.id, qlist)} className="gap-2">
                      提交并查看成绩
                    </Button>
                    <Button variant="outline" onClick={() => resetLessonQuiz(lessonQuizView.lesson.id)}>
                      清空答题
                    </Button>
                  </div>

                  {(() => {
                    if (!showFeedback) return null
                    return (
                      <Alert className="border-accent/60 bg-accent/10">
                        <AlertTitle>成绩：{getLessonQuizState(lessonQuizView.lesson.id).lastScore}%</AlertTitle>
                        <AlertDescription className="space-y-1">
                          <p>
                            最佳：{getLessonQuizState(lessonQuizView.lesson.id).bestScore}% · 尝试{" "}
                            {getLessonQuizState(lessonQuizView.lesson.id).attempts} 次
                          </p>
                          <p className="text-muted-foreground">
                            {activeRoadmap.resourceGuide.lessonQuizAdvice}
                          </p>
                        </AlertDescription>
                      </Alert>
                    )
                  })()}
                </div>
              )
            })()}
          </div>
        </div>
      )}
    </div>
  )
}
