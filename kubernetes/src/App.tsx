import React from "react"
import {
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

function createLessonQuiz(lesson: Lesson, week: Week, stage: Stage): QuizQuestion[] {
  const resTitle = lesson.resources[0]?.title || lesson.title
  const keyPoint =
    lesson.keyPoints?.[0] ||
    week.keyPoints?.[0] ||
    `如何将 ${lesson.title} 落地到 ${stage.goal.replace("目标：", "") || "业务场景"}`
  const verification = "按照官方示例运行最小案例，并通过事件/日志/监控验证结果"
  const baseline = lesson.detail
  const stageGoal = stage.goal
  const weekSummary = week.summary
  const practicePath = week.overview || week.summary || stage.goal
  const keyPointSecondary = lesson.keyPoints?.[1] || week.keyPoints?.[1] || stage.goal
  const successSignal = "事件/日志/探针/指标均与文档预期一致，且变更后的行为可复现"
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
      rationale: "先跑通文档示例，再用事件/日志/监控确认行为，形成可复制的闭环。",
    },
    {
      id: `${lesson.id}-risk`,
      question: `官方/生产常见风险如何排查？`,
      options: [
        "按层次检查权限/网络/存储/探针/调度，结合事件和日志定位",
        "先重启集群",
        "忽略告警，等待自愈",
        "只看应用日志，不检查资源与配置",
      ],
      answer: 0,
      rationale: "分层排查结合事件/日志是权威推荐的高效路径。",
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
        "输出/事件/日志与官方示例一致，关键指标/探针通过",
        "未执行也算完成",
        "只要配置文件存在即可",
        "跳过验证",
      ],
      answer: 0,
      rationale: "以可观测信号与探针/指标为准，符合官方示例预期才算验收。",
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
        "Pod 处于 Running 就算成功，不看探针/日志",
        "未验证直接删除资源",
        "只在本地记录命令，不关注实际输出",
      ],
      answer: 0,
      rationale: "需要用事件、日志、探针或监控确认效果，而非仅凭状态值。",
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
function buildLessonQuiz(lesson: Lesson, week: Week, stage: Stage): QuizQuestion[] {
  const base = createLessonQuiz(lesson, week, stage)
  const custom = customLessonQuizzes[lesson.id] || []
  if (!custom.length) return base
  const customIds = new Set(custom.map((q) => q.id))
  const merged = [...custom, ...base.filter((q) => !customIds.has(q.id))]
  return merged.slice(0, 10)
}

const roadmap: Stage[] = [
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
            title: "Linux 进程隔离原理",
            detail: "深入理解 Namespaces（PID、Network、Mount）如何制造“隔离的假象”。",
            resources: [
              { title: "namespaces man7", url: "https://man7.org/linux/man-pages/man7/namespaces.7.html" },
              { title: "Linux namespaces 指南", url: "https://docs.kernel.org/admin-guide/namespaces/index.html" },
              { title: "Play with Docker（在线容器实验）", url: "https://labs.play-with-docker.com/" },
            ],
          },
          {
            id: "w1-2",
            title: "资源限制与调度",
            detail: "详解 Cgroups（v1/v2）如何限制 CPU 和内存使用。",
            resources: [
              { title: "cgroup v2 内核文档", url: "https://www.kernel.org/doc/html/latest/admin-guide/cgroup-v2.html" },
              { title: "cgroups man7", url: "https://man7.org/linux/man-pages/man7/cgroups.7.html" },
              { title: "容器资源限制示例（Docker 官方）", url: "https://docs.docker.com/config/containers/resource_constraints/" },
            ],
          },
          {
            id: "w1-3",
            title: "联合文件系统（UnionFS）",
            detail: "剖析 Overlay2 存储驱动与 Copy-on-Write 机制。",
            resources: [
              { title: "Docker OverlayFS 驱动", url: "https://docs.docker.com/storage/storagedriver/overlayfs-driver/" },
              { title: "Linux overlayfs 内核文档", url: "https://docs.kernel.org/filesystems/overlayfs.html" },
              { title: "容器镜像与层演示（官方教程）", url: "https://docs.docker.com/get-started/overview/#images" },
            ],
          },
          {
            id: "w1-4",
            title: "容器网络基础",
            detail: "虚拟网桥、Veth Pair 与 iptables 在容器通信中的作用。",
            resources: [
              { title: "Docker Bridge 网络", url: "https://docs.docker.com/network/bridge/" },
              { title: "veth 内核文档", url: "https://www.kernel.org/doc/Documentation/networking/veth.txt" },
              { title: "Docker 网络动手实验", url: "https://docs.docker.com/network/network-tutorial-standalone/" },
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
            title: "Docker 架构解剖",
            detail: "Docker CLI、Daemon、Containerd 与 Runc 的关系。",
            resources: [
              { title: "Docker 官方概览", url: "https://docs.docker.com/get-started/overview/" },
              { title: "containerd 架构", url: "https://github.com/containerd/containerd/blob/main/docs/architecture.md" },
              { title: "Docker CLI 与 Daemon 交互演示", url: "https://docs.docker.com/get-started/" },
            ],
          },
          {
            id: "w2-2",
            title: "Dockerfile 最佳实践",
            detail: "多阶段构建、镜像瘦身与层缓存优化。",
            resources: [
              { title: "多阶段构建", url: "https://docs.docker.com/build/building/multi-stage/" },
              { title: "Dockerfile 最佳实践", url: "https://docs.docker.com/build/building/best-practices/" },
              { title: "CI 中构建镜像（官方示例）", url: "https://docs.docker.com/build/ci/" },
            ],
          },
          {
            id: "w2-3",
            title: "容器运行时演变",
            detail: "为何 K8s 移除 Docker Shim？Containerd 与 CRI-O 的区别。",
            resources: [
              { title: "Dockershim FAQ（K8s 官方）", url: "https://kubernetes.io/blog/2020/12/02/dockershim-faq/" },
              { title: "CRI-O 官方文档", url: "https://cri-o.io/" },
              { title: "Kubelet CRI 说明", url: "https://kubernetes.io/docs/concepts/architecture/cri/" },
            ],
          },
          {
            id: "w2-4",
            title: "OCI 标准",
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
        summary: "迈入 K8s：架构、声明式 API 与 Pod 生命周期。",
        overview: "建立对控制平面/数据平面的全局图，动手用 kubeadm/minikube/kind 拉起集群并体验声明式 API 与调和循环。",
        keyPoints: [
          "API Server + etcd + Scheduler + Controller Manager 的职责边界，kubelet/kube-proxy 的节点责任。",
          "声明式 vs 命令式：期望状态、调和循环、finalizer，kubectl apply/patch 的差异。",
          "Pod 生命周期：Init/Probes/重启策略，常见 CrashLoopBackOff 排查路径。",
        ],
        lessons: [
          {
            id: "w3-1",
            title: "K8s 核心架构",
            detail: "控制平面（API Server、Etcd、Scheduler）与工作节点（Kubelet、Kube-proxy）。",
            resources: [
              { title: "Kubernetes 组件概览", url: "https://kubernetes.io/docs/concepts/overview/components/" },
              { title: "Controller 模式", url: "https://kubernetes.io/docs/concepts/architecture/controller/" },
              { title: "Kubernetes Basics 交互式教程", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/" },
            ],
          },
          {
            id: "w3-2",
            title: "集群搭建实战",
            detail: "Kubeadm 或 Minikube/Kind 的快速集群搭建。",
            resources: [
              { title: "kubeadm 创建集群", url: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/" },
              { title: "minikube 快速开始", url: "https://minikube.sigs.k8s.io/docs/start/" },
              { title: "kind 快速开始", url: "https://kind.sigs.k8s.io/docs/user/quick-start/" },
              { title: "kubeadm HA 部署指南", url: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/ha-topology/" },
            ],
          },
          {
            id: "w3-3",
            title: "声明式 API 与 YAML",
            detail: "期望状态 vs 实际状态，理解 Reconciliation Loop。",
            resources: [
              { title: "Kubernetes 对象", url: "https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/" },
              { title: "声明式配置", url: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/" },
              { title: "kubectl 应用/补丁示例", url: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/" },
            ],
          },
          {
            id: "w3-4",
            title: "Pod 生命周期",
            detail: "Init Containers、Liveness/Readiness Probe 与 CrashLoopBackOff 排查。",
            resources: [
              { title: "Pod 生命周期", url: "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/" },
              { title: "探针配置", url: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/" },
              { title: "调试 Pod 重启与探针", url: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-liveness-readiness/" },
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
        overview: "熟悉 Deployment 滚动升级与回滚，掌握 Service/Ingress 如何让应用被发现与暴露。",
        keyPoints: [
          "ReplicaSet/Deployment 的发布策略、探针配合、金丝雀/蓝绿基本做法。",
          "Service 类型（ClusterIP/NodePort/LB）与 kube-proxy iptables/IPVS 流量路径。",
          "Ingress Controller/Ingress 规则与 TLS、Host/Path 路由、常见 404/调试。",
        ],
        lessons: [
          {
            id: "w4-1",
            title: "控制器模式",
            detail: "ReplicaSet 与 Deployment 的滚动更新 / 回滚。",
            resources: [
              { title: "Deployment 官方文档", url: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/" },
              { title: "滚动更新与回滚", url: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-update-deployment" },
              { title: "滚动更新动手实验", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/update/update-intro/" },
            ],
          },
          {
            id: "w4-2",
            title: "服务发现",
            detail: "ClusterIP、NodePort、LoadBalancer 的实现原理。",
            resources: [
              { title: "Service 类型", url: "https://kubernetes.io/docs/concepts/services-networking/service/" },
              { title: "kube-proxy 模式", url: "https://kubernetes.io/docs/concepts/services-networking/service/#kube-proxy-iptables-vs-ipvs" },
              { title: "Guestbook 示例（Service 实战）", url: "https://github.com/kubernetes/examples/tree/master/guestbook" },
            ],
          },
          {
            id: "w4-3",
            title: "流量入口",
            detail: "Nginx Ingress Controller 与域名路由规则。",
            resources: [
              { title: "Ingress 概念", url: "https://kubernetes.io/docs/concepts/services-networking/ingress/" },
              { title: "Ingress-NGINX 文档", url: "https://kubernetes.github.io/ingress-nginx/user-guide/basic-usage/" },
              { title: "Minikube Ingress 实践", url: "https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/" },
            ],
          },
          {
            id: "w4-4",
            title: "命名空间与配额",
            detail: "Namespaces 隔离与 ResourceQuota / LimitRange。",
            resources: [
              { title: "Namespaces", url: "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/" },
              { title: "ResourceQuota / LimitRange", url: "https://kubernetes.io/docs/concepts/policy/resource-quotas/" },
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
            title: "配置解耦",
            detail: "ConfigMap & Secret 的注入方式（Env vs Volume）。",
            resources: [
              { title: "ConfigMap", url: "https://kubernetes.io/docs/concepts/configuration/configmap/" },
              { title: "Secret", url: "https://kubernetes.io/docs/concepts/configuration/secret/" },
              { title: "ConfigMap 注入示例", url: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/" },
            ],
          },
          {
            id: "w5-2",
            title: "持久化存储基础",
            detail: "PV 与 PVC 的绑定生命周期。",
            resources: [
              { title: "Persistent Volumes", url: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/" },
              { title: "卷生命周期", url: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#claims-as-volumes" },
              { title: "PVC 动手示例", url: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-persistent-volume-storage/" },
            ],
          },
          {
            id: "w5-3",
            title: "动态供给",
            detail: "StorageClass 与 CSI 插件机制。",
            resources: [
              { title: "StorageClass", url: "https://kubernetes.io/docs/concepts/storage/storage-classes/" },
              { title: "CSI 卷", url: "https://kubernetes.io/docs/concepts/storage/volumes/#csi" },
              { title: "动态供给详解", url: "https://kubernetes.io/docs/concepts/storage/dynamic-provisioning/" },
            ],
          },
          {
            id: "w5-4",
            title: "有状态应用",
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
        overview: "用亲和/反亲和、污点/容忍把工作负载放对位置，再用 NetworkPolicy/CNI 控制网络可达性与隔离。",
        keyPoints: [
          "节点/Pod 亲和与反亲和适用场景，拓扑分布约束应对跨可用区的分布。",
          "污点与容忍的匹配逻辑，常见专用节点/NoSchedule/NoExecute 场景。",
          "NetworkPolicy 默认允许→显式拒绝模型，CNI 插件差异（Overlay vs BGP）。",
        ],
        lessons: [
          {
            id: "w6-1",
            title: "高级调度策略",
            detail: "Node Affinity 与 Pod Anti-Affinity。",
            resources: [
              { title: "节点亲和/反亲和", url: "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/" },
              { title: "拓扑分布约束", url: "https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/" },
              { title: "亲和性示例 YAML", url: "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#affinity-and-anti-affinity" },
            ],
          },
          {
            id: "w6-2",
            title: "污点与容忍",
            detail: "Taints & Tolerations 实战配置。",
            resources: [
              { title: "Taints & Tolerations", url: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/" },
              { title: "污点容忍示例", url: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/#example-use-cases" },
            ],
          },
          {
            id: "w6-3",
            title: "网络策略",
            detail: "NetworkPolicy 的默认拒绝与白名单模式。",
            resources: [
              { title: "NetworkPolicy", url: "https://kubernetes.io/docs/concepts/services-networking/network-policies/" },
              { title: "默认拒绝与白名单示例", url: "https://kubernetes.io/docs/tasks/administer-cluster/declare-network-policy/" },
            ],
          },
          {
            id: "w6-4",
            title: "CNI 插件解析",
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
            title: "RBAC 鉴权",
            detail: "Role、ClusterRole、Binding 的多租户控制。",
            resources: [
              { title: "RBAC 授权", url: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/" },
              { title: "RBAC 示例（k8s 官方）", url: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#default-roles-and-role-bindings" },
            ],
          },
          {
            id: "w7-2",
            title: "Service Account",
            detail: "Pod 访问 API Server 的安全方式。",
            resources: [
              { title: "ServiceAccount", url: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/" },
              { title: "ServiceAccount Token 投射", url: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#use-an-imagepullsecret" },
            ],
          },
          {
            id: "w7-3",
            title: "Helm 基础",
            detail: "Chart 结构与 Install / Upgrade / Rollback。",
            resources: [
              { title: "Helm 快速上手", url: "https://helm.sh/docs/intro/quickstart/" },
              { title: "Helm 基本命令", url: "https://helm.sh/docs/intro/using_helm/" },
              { title: "Helm Chart 示例（官方 repo）", url: "https://github.com/helm/examples" },
            ],
          },
          {
            id: "w7-4",
            title: "Helm 进阶",
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
            title: "Terraform 基础",
            detail: "HCL 语法、Provider 配置与 State 管理。",
            resources: [
              { title: "Terraform 概览", url: "https://developer.hashicorp.com/terraform/intro" },
              { title: "Terraform 语言概览", url: "https://developer.hashicorp.com/terraform/language/overview" },
              { title: "Terraform CLI 快速开始", url: "https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli" },
            ],
          },
          {
            id: "w8-2",
            title: "Terraform 实战",
            detail: "代码化创建云端 K8s 集群（EKS/GKE）。",
            resources: [
              { title: "aws_eks_cluster 资源", url: "https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/eks_cluster" },
              { title: "google_container_cluster 资源", url: "https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/container_cluster" },
              { title: "EKS Terraform 教程", url: "https://developer.hashicorp.com/terraform/tutorials/aws-eks/eks-fargate" },
            ],
          },
          {
            id: "w8-3",
            title: "Ansible 基础",
            detail: "Playbook 与无 Agent 架构优势。",
            resources: [
              { title: "Ansible Playbook 指南", url: "https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_intro.html" },
              { title: "Ansible 架构", url: "https://docs.ansible.com/ansible/latest/getting_started/get_started_ansible.html" },
              { title: "第一个 Playbook 示例", url: "https://docs.ansible.com/ansible/latest/getting_started/get_started_playbook.html" },
            ],
          },
          {
            id: "w8-4",
            title: "IaC 工具组合",
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
            title: "CI/CD 理论",
            detail: "云原生环境下的持续集成与交付挑战。",
            resources: [
              { title: "GitHub Actions CI 概览", url: "https://docs.github.com/en/actions/automating-builds-and-tests/about-continuous-integration" },
              { title: "Jenkins Pipeline 概览", url: "https://www.jenkins.io/doc/book/pipeline/" },
              { title: "部署到 Kubernetes（GH Actions）", url: "https://docs.github.com/actions/deployment/deploying-to-your-cloud-provider/deploying-to-kubernetes" },
            ],
          },
          {
            id: "w9-2",
            title: "流水线实战（上）",
            detail: "Jenkins/GitHub Actions 构建并推镜像。",
            resources: [
              { title: "Publishing Docker images (GH Actions)", url: "https://docs.github.com/en/actions/publishing-packages/publishing-docker-images" },
              { title: "Jenkins Pipeline + Docker", url: "https://www.jenkins.io/doc/book/pipeline/docker/" },
              { title: "GitHub Actions + Container Registry 模板", url: "https://github.com/actions/starter-workflows/blob/main/ci/docker-publish.yml" },
            ],
          },
          {
            id: "w9-3",
            title: "流水线实战（下）",
            detail: "集成 Trivy 扫描与自动化测试。",
            resources: [
              { title: "Trivy 使用指南", url: "https://aquasecurity.github.io/trivy/latest/" },
              { title: "Trivy GitHub Action", url: "https://github.com/aquasecurity/trivy-action" },
              { title: "CI 集成容器扫描示例", url: "https://aquasecurity.github.io/trivy/latest/integrations/github-action/" },
            ],
          },
          {
            id: "w9-4",
            title: "GitOps 导论",
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
          "多环境（dev/stage/prod）差异管理：Kustomize overlays 或 Helm values；App of Apps 引导大规模集群。",
        ],
        lessons: [
          {
            id: "w10-1",
            title: "ArgoCD 架构",
            detail: "部署 ArgoCD 与 Application CRD。",
            resources: [
              { title: "ArgoCD 架构", url: "https://argo-cd.readthedocs.io/en/stable/operator-manual/architecture/" },
              { title: "Application CRD 规范", url: "https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/" },
              { title: "ArgoCD Getting Started", url: "https://argo-cd.readthedocs.io/en/stable/getting_started/" },
            ],
          },
          {
            id: "w10-2",
            title: "同步策略",
            detail: "Auto-Sync、Prune、Self-Heal 功能。",
            resources: [
              { title: "ArgoCD 自动同步", url: "https://argo-cd.readthedocs.io/en/stable/user-guide/auto_sync/" },
              { title: "Self Heal & Prune", url: "https://argo-cd.readthedocs.io/en/stable/user-guide/sync-options/" },
              { title: "Sync Waves / Hooks", url: "https://argo-cd.readthedocs.io/en/stable/user-guide/sync-waves/" },
            ],
          },
          {
            id: "w10-3",
            title: "多环境管理",
            detail: "Kustomize 或 Helm 管理 Dev/Prod 差异。",
            resources: [
              { title: "ArgoCD Kustomize 支持", url: "https://argo-cd.readthedocs.io/en/stable/user-guide/kustomize/" },
              { title: "ArgoCD Helm 支持", url: "https://argo-cd.readthedocs.io/en/stable/user-guide/helm/" },
              { title: "Kustomize 入门", url: "https://kubectl.docs.kubernetes.io/guides/introduction/kustomize/" },
            ],
          },
          {
            id: "w10-4",
            title: "App of Apps 模式",
            detail: "规模化管理数千微服务的策略。",
            resources: [
              { title: "App of Apps/集群引导", url: "https://argo-cd.readthedocs.io/en/stable/operator-manual/cluster-bootstrapping/" },
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
          "PromQL 常用函数（rate/sum by/histogram_quantile），区分瞬时值与区间向量。",
          "Grafana Dashboard 设计与告警路由、静默/抑制策略，防“告警风暴”。",
        ],
        lessons: [
          {
            id: "w11-1",
            title: "Prometheus 架构",
            detail: "Pull 模型、TSDB 存储与 Exporter。",
            resources: [
              { title: "Prometheus 概览", url: "https://prometheus.io/docs/introduction/overview/" },
              { title: "Exporter 生态", url: "https://prometheus.io/docs/instrumenting/exporters/" },
              { title: "Prometheus 安装示例", url: "https://prometheus.io/docs/prometheus/latest/installation/" },
            ],
          },
          {
            id: "w11-2",
            title: "PromQL 查询语言",
            detail: "常用聚合、Rate 计算与 Histogram 分析。",
            resources: [
              { title: "PromQL 基础", url: "https://prometheus.io/docs/prometheus/latest/querying/basics/" },
              { title: "Range & rate", url: "https://prometheus.io/docs/prometheus/latest/querying/basics/#range-vector-selectors" },
              { title: "直方图/分位数实践", url: "https://prometheus.io/docs/practices/histograms/" },
            ],
          },
          {
            id: "w11-3",
            title: "Grafana 可视化",
            detail: "配置数据源、导入 Dashboard 与自定义面板。",
            resources: [
              { title: "Grafana 数据源", url: "https://grafana.com/docs/grafana/latest/datasources/" },
              { title: "Dashboard 入门", url: "https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/" },
              { title: "导入社区 Dashboard", url: "https://grafana.com/docs/grafana/latest/dashboards/export-import/#import-dashboard" },
            ],
          },
          {
            id: "w11-4",
            title: "告警管理",
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
            title: "日志收集架构",
            detail: "DaemonSet vs Sidecar 模式对比。",
            resources: [
              { title: "Kubernetes 日志架构", url: "https://kubernetes.io/docs/concepts/cluster-administration/logging/" },
              { title: "Fluent Bit 在 Kubernetes 中部署", url: "https://docs.fluentbit.io/manual/installation/kubernetes" },
            ],
          },
          {
            id: "w12-2",
            title: "轻量级日志栈（PLG）",
            detail: "Loki 标签索引与 LogQL 语法。",
            resources: [
              { title: "Loki 官方文档", url: "https://grafana.com/docs/loki/latest/" },
              { title: "LogQL", url: "https://grafana.com/docs/loki/latest/logql/" },
              { title: "Loki Helm 安装", url: "https://grafana.com/docs/loki/latest/installation/helm/" },
            ],
          },
          {
            id: "w12-3",
            title: "分布式链路追踪",
            detail: "Span、Trace、Context Propagation。",
            resources: [
              { title: "OpenTelemetry Traces", url: "https://opentelemetry.io/docs/concepts/signals/traces/" },
              { title: "Context Propagation", url: "https://opentelemetry.io/docs/concepts/context-propagation/" },
            ],
          },
          {
            id: "w12-4",
            title: "OpenTelemetry & Jaeger",
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
            title: "Service Mesh 解决什么",
            detail: "微服务通信挑战与 Sidecar 模式。",
            resources: [
              { title: "Istio 是什么", url: "https://istio.io/latest/docs/concepts/what-is-istio/" },
              { title: "Service Mesh Interface (SMI)", url: "https://smi-spec.io/" },
            ],
          },
          {
            id: "w13-2",
            title: "Istio 架构与安装",
            detail: "Istiod 控制平面与 Envoy 数据平面。",
            resources: [
              { title: "Istio 架构", url: "https://istio.io/latest/docs/ops/deployment/architecture/" },
              { title: "Istio 快速安装", url: "https://istio.io/latest/docs/setup/getting-started/" },
              { title: "安装配置 Profiles", url: "https://istio.io/latest/docs/setup/additional-setup/config-profiles/" },
            ],
          },
          {
            id: "w13-3",
            title: "流量治理实战",
            detail: "灰度发布、断路器、故障注入。",
            resources: [
              { title: "Istio 流量管理", url: "https://istio.io/latest/docs/concepts/traffic-management/" },
              { title: "故障注入示例", url: "https://istio.io/latest/docs/tasks/traffic-management/fault-injection/" },
              { title: "流量分流/金丝雀示例", url: "https://istio.io/latest/docs/tasks/traffic-management/traffic-shifting/" },
            ],
          },
          {
            id: "w13-4",
            title: "网格安全",
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
            title: "4C 安全模型",
            detail: "Cloud、Cluster、Container、Code 的分层防御。",
            resources: [
              { title: "Kubernetes Security 概览", url: "https://kubernetes.io/docs/concepts/security/" },
              { title: "Pod Security Standards", url: "https://kubernetes.io/docs/concepts/security/pod-security-standards/" },
              { title: "NSA/CISA Kubernetes 加固指南", url: "https://www.cisa.gov/sites/default/files/publications/CISA_NSA_Kubernetes_Hardening_Guidance_1.2_508C.pdf" },
            ],
          },
          {
            id: "w14-2",
            title: "供应链安全",
            detail: "镜像签名（Cosign）与准入控制。",
            resources: [
              { title: "Cosign 概览", url: "https://docs.sigstore.dev/cosign/overview/" },
              { title: "Admission Controllers", url: "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/" },
              { title: "policy-controller（Sigstore）", url: "https://docs.sigstore.dev/policy-controller/overview/" },
            ],
          },
          {
            id: "w14-3",
            title: "策略即代码",
            detail: "OPA Gatekeeper 或 Kyverno 的合规策略。",
            resources: [
              { title: "OPA Gatekeeper", url: "https://open-policy-agent.github.io/gatekeeper/website/docs/" },
              { title: "Kyverno 文档", url: "https://kyverno.io/docs/" },
              { title: "Gatekeeper 策略库", url: "https://open-policy-agent.github.io/gatekeeper-library/website/" },
            ],
          },
          {
            id: "w14-4",
            title: "运行时安全",
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
          "HPA 指标来源（metrics-server/自定义指标）与目标配置，抖动与冷却时间调优。",
          "Cluster Autoscaler 节点弹性与调度耦合；Knative Serving 冷启动、并发控制。",
          "Eventing + CloudEvents 的事件总线思路，Operator/CRD 让扩展点可编排。",
        ],
        lessons: [
          {
            id: "w15-1",
            title: "自动扩缩容",
            detail: "HPA 与 Cluster Autoscaler 的协同。",
            resources: [
              { title: "Horizontal Pod Autoscaler", url: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/" },
              { title: "Cluster Autoscaler", url: "https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler" },
              { title: "HPA 自定义指标示例", url: "https://kubernetes.io/docs/tasks/run-application/hpa-walkthrough/" },
            ],
          },
          {
            id: "w15-2",
            title: "Knative Serving",
            detail: "Scale-to-Zero 与冷启动机制。",
            resources: [
              { title: "Knative Serving", url: "https://knative.dev/docs/serving/" },
              { title: "Scale to zero", url: "https://knative.dev/docs/serving/autoscaling/scale-to-zero/" },
              { title: "Knative Serving 快速安装", url: "https://knative.dev/docs/install/yaml-install/serving/install-serving-with-yaml" },
            ],
          },
          {
            id: "w15-3",
            title: "事件驱动架构",
            detail: "Knative Eventing 与 CloudEvents。",
            resources: [
              { title: "Knative Eventing", url: "https://knative.dev/docs/eventing/" },
              { title: "CloudEvents 规范", url: "https://cloudevents.io/" },
              { title: "Eventing 入门示例", url: "https://knative.dev/docs/eventing/getting-started/" },
            ],
          },
          {
            id: "w15-4",
            title: "Operator 模式",
            detail: "用 Operator 管理复杂有状态应用。",
            resources: [
              { title: "Operator 模式", url: "https://kubernetes.io/docs/concepts/extend-kubernetes/operator/" },
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
            title: "集群灾备",
            detail: "Etcd 数据快照备份与恢复（CKA 考点）。",
            resources: [
              { title: "etcd 备份恢复（K8s 官方）", url: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/" },
              { title: "etcd snapshot 恢复", url: "https://etcd.io/docs/v3.5/op-guide/recovery/" },
              { title: "etcd 维护与备份", url: "https://etcd.io/docs/v3.5/op-guide/maintenance/" },
            ],
          },
          {
            id: "w16-2",
            title: "高频故障排查",
            detail: "OOMKilled、CrashLoopBackOff、ImagePullBackOff 分析。",
            resources: [
              { title: "调试应用", url: "https://kubernetes.io/docs/tasks/debug/debug-application/" },
              { title: "镜像拉取问题", url: "https://kubernetes.io/docs/concepts/containers/images/#imagepullbackoff" },
              { title: "调试 Pod（官方任务）", url: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/" },
            ],
          },
          {
            id: "w16-3",
            title: "认证体系解读",
            detail: "CKA vs CKAD 考试策略与真题分析。",
            resources: [
              { title: "CKA 认证", url: "https://www.cncf.io/certification/cka/" },
              { title: "CKAD 认证", url: "https://www.cncf.io/certification/ckad/" },
              { title: "CNCF 考纲（curriculum）", url: "https://github.com/cncf/curriculum" },
            ],
          },
          {
            id: "w16-4",
            title: "课程回顾与职业规划",
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

const knowledgeCards: KnowledgeCard[] = [
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
    summary: "K8s 控制器不断调和期望状态与实际状态，Deployment/Service/StatefulSet 分别关注副本、流量和身份。",
    points: [
      "Deployment 负责无状态副本，StatefulSet 负责稳定身份，有序部署与持久卷。",
      "Service + Ingress 构成东西向与南北向流量入口，NetworkPolicy 才是“防火墙”。",
      "存储三件事：声明（PVC）、供给（StorageClass/CSI）、生命周期（绑定/回收）。",
    ],
    practice: "给同一应用同时创建 Deployment 与 StatefulSet，对比 Pod 名称、PVC 行为以及滚动更新方式。",
  },
  {
    id: "phase3",
    title: "交付自动化与 GitOps",
    summary: "一切配置进 Git，CI 生成镜像，CD 由 ArgoCD 拉取并自愈，同步失败即回滚。",
    points: [
      "Terraform 创建集群，Ansible 配机器，K8s 负责运行；分层职责让排错可定位。",
      "GitOps：Git 是唯一真相，ArgoCD 持续拉取并调和目标集群状态。",
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
      "HPA/Autoscaler 与事件驱动架构让资源按需弹性，但要监控成本与冷启动。",
      "备考：熟练 kubectl、etcd 备份恢复、NetworkPolicy、PV/PVC 以及常见故障分析。",
    ],
    practice: "用 cosign 给镜像签名，并在集群里配置准入控制器拒绝未签名镜像。",
  },
]

const quizQuestions: QuizQuestion[] = [
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

const STORAGE_KEY = "k8s-roadmap-progress-v2"
const defaultQuizState: QuizState = { answers: {}, attempts: 0, bestScore: undefined, lastScore: undefined }
const defaultLessonQuizState: LessonQuizState = { answers: {}, attempts: 0, bestScore: undefined, lastScore: undefined }

function loadPersisted() {
  if (typeof window === "undefined") {
    return {
      completed: new Set<string>(),
      quiz: defaultQuizState,
      lessonQuiz: {} as Record<string, LessonQuizState>,
      docQuiz: {} as DocQuizProgress,
    }
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw)
      return {
        completed: new Set<string>(),
        quiz: defaultQuizState,
        lessonQuiz: {} as Record<string, LessonQuizState>,
        docQuiz: {} as DocQuizProgress,
      }
    const parsed = JSON.parse(raw)
    return {
      completed: new Set<string>(parsed.completed || []),
      quiz: {
        ...defaultQuizState,
        ...parsed.quiz,
        answers: parsed.quiz?.answers ?? {},
      },
      lessonQuiz: parsed.lessonQuiz || {},
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
  const persisted = React.useMemo(() => loadPersisted(), [])
  const [completedLessons, setCompletedLessons] = React.useState<Set<string>>(persisted.completed)
  const [quizState, setQuizState] = React.useState<QuizState>(persisted.quiz)
  const [lessonQuiz, setLessonQuiz] = React.useState<Record<string, LessonQuizState>>(persisted.lessonQuiz || {})
  const [docQuiz, setDocQuiz] = React.useState<DocQuizProgress>(persisted.docQuiz || {})
  const [tab, setTab] = React.useState("overview")
  const [knowledgeStage, setKnowledgeStage] = React.useState(knowledgeCards[0].id)
  const [resourceView, setResourceView] = React.useState<ResourceContext | null>(null)
  const [lessonQuizView, setLessonQuizView] = React.useState<{ lesson: Lesson; week: Week; stage: Stage } | null>(null)

  const totalLessons = React.useMemo(
    () => roadmap.reduce((sum, stage) => sum + stage.weeks.reduce((weekSum, w) => weekSum + w.lessons.length, 0), 0),
    []
  )

  const overall = React.useMemo(() => {
    const done = completedLessons.size
    const percent = totalLessons === 0 ? 0 : Math.round((done / totalLessons) * 100)
    return { done, total: totalLessons, percent }
  }, [completedLessons, totalLessons])

  const stageStats = React.useCallback(
    (stageId: string) => {
      const stage = roadmap.find((item) => item.id === stageId)
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
    [completedLessons]
  )

  React.useEffect(() => {
    const payload = {
      completed: Array.from(completedLessons),
      quiz: quizState,
      lessonQuiz,
      docQuiz,
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  }, [completedLessons, quizState, lessonQuiz, docQuiz])

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
    const ok = window.confirm("确定要清空打卡与答题记录吗？")
    if (!ok) return
    setCompletedLessons(new Set())
    setQuizState(defaultQuizState)
    setLessonQuiz({})
    setDocQuiz({})
  }

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


  const suggestion = React.useMemo(() => {
    if (overall.percent < 25) {
      return "建议先完成第 1 阶段前两周，专注 Namespaces、Cgroups 与 Dockerfile 多阶段构建。"
    }
    if (overall.percent < 50) {
      return "完成阶段二工作负载与存储（周 4-5），顺便练习滚动更新与 PVC 绑定。"
    }
    if (overall.percent < 75) {
      return "补齐调度/NetworkPolicy（周 6）并搭建一条 CI/CD 流水线（周 9）。"
    }
    return "加强可观测性（周 11-12）与安全考点（周 14），再做一次全量测验。"
  }, [overall.percent])

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
        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="glass-card p-6 space-y-4 animate-fade-in">
            <div className="flex flex-wrap gap-2 items-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <Badge variant="secondary" className="bg-secondary/70 text-xs">
                Cloud Native Bootcamp · shadcn UI
              </Badge>
              <Badge variant="outline">16 周 · 64 课时</Badge>
              <Badge variant="outline">本地保存进度</Badge>
            </div>
            <CardTitle className="text-3xl font-bold tracking-tight">Kubernetes 学习路线（16 周）</CardTitle>
            <CardDescription className="text-base leading-relaxed">
              基于 README 打造的互动学习地图：从 Linux 内核到 GitOps 与服务网格，逐周打卡、即时测验、保存本地进度。
            </CardDescription>
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
              {roadmap.map((stage) => {
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
                <h2 className="text-2xl font-semibold leading-tight">16 周学习地图</h2>
                <p className="text-muted-foreground text-sm">逐周卡片 + 可勾选课时，自动统计完成度并生成行动建议。</p>
              </div>
              <Badge variant="secondary" className="gap-1">
                <Lightbulb className="h-4 w-4" />
                {suggestion}
              </Badge>
            </div>

            <div className="space-y-4">
              {roadmap.map((stage) => {
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
                    <span>环境预期：本地 Kind/Minikube 或云上集群，具备 kubectl/容器工具链。</span>
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
                      : [
                          "照着官方示例跑通最小闭环：构建/部署/验证，先有成功体验。",
                          "逐项改参数（资源、探针、路由、存储、策略），观察事件/日志/指标的变化。",
                          "整理常见误区与排查路径：权限、网络、存储、镜像拉取、探针、调度。",
                        ]
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
                  <li>打开原文，先跑通最小可用示例（命令/清单照抄也行），确认成功信号。</li>
                  <li>修改 1-2 个关键参数（副本、探针阈值、资源限额、路由/策略等），对比行为差异并记录。</li>
                  <li>用 `kubectl describe`、事件、日志或容器 CLI 验证修改已生效，并观察监控/告警（如适用）。</li>
                </ol>
              </div>

              <div className="rounded-lg border border-border/60 bg-background/70 p-4 space-y-2">
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">自检/质询</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>用自己的话阐述：核心机制/配置到底做了什么？边界条件是什么？</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>故障排查优先级：先看事件/日志，再看网络/权限/存储，再看探针/资源/调度。</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>在生产落地：需要哪些安全/性能/成本防护（如 RBAC、配额、限流、告警）？</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-border/60 bg-background/70 p-4 space-y-2">
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">扩展与衍生</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>把官方示例收录到你的实验仓库，写出“期望 vs 实际”差异与复盘。</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>列 3 条常见坑，并附上排查脚本/命令（kubectl/日志/监控）。</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>把本节知识与前后周的内容串联，设计一个小型端到端演练（部署 → 观测 → 调优 → 回滚）。</span>
                  </li>
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
                            建议：复盘错题对应的配置/命令，回到文档或实验里重新验证。
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
