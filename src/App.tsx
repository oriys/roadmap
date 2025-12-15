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
import { ThemeToggle } from "@/components/theme-toggle"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { docQuestionMap } from "@/lib/doc-questions"

import {
  type Resource,
  type Lesson,
  type Week,
  type Stage,

  type QuizState,
  type LessonQuizState,
  type DocQuizProgress,
  type ResourceContext,
  type RoadmapId,
  type QuizQuestion,
  type RoadmapDefinition,
} from "@/lib/types"
import {
  getLessonOverview,
  hashToUint32,
  shuffledOrder,

  buildLessonQuizCanonical,
  buildLessonQuiz,
} from "@/lib/quiz-helpers"
import {
  ROADMAPS,
  ROADMAP_LIST,
  DEFAULT_ROADMAP_ID,
} from "@/lib/roadmaps"


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
      <div className="min-h-screen bg-background/80 text-foreground relative">
        <div className="absolute top-4 right-4 z-50">
          <ThemeToggle />
        </div>
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
    <div className="min-h-screen bg-background/80 text-foreground relative">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
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
