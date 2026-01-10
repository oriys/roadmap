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
  Search,
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
import { LessonGuideModal } from "@/components/roadmap/LessonGuideModal"
import { LessonQuizModal } from "@/components/roadmap/LessonQuizModal"
import { ResourceModal } from "@/components/roadmap/ResourceModal"
import { AppShell } from "@/components/layout/AppShell"
import { SwipeContainer } from "@/components/mobile/SwipeContainer"
import { ScrollToTop } from "@/components/mobile/ScrollToTop"
import { useIsMobile } from "@/hooks/useMediaQuery"
import { getLessonGuide } from "@/lib/lesson-guides/by-roadmap"
import { roadmapTotals } from "@/lib/roadmap-totals"
import { displayTopicTitle } from "@/lib/topic-title"
import type { BottomNavTab } from "@/components/layout/BottomNav"

import {
  type Lesson,
  type Week,
  type Stage,
  type QuizState,
  type LessonQuizState,
  type DocQuizProgress,
  type ResourceContext,
  type RoadmapId,
  type RoadmapCategory,
  type QuizQuestion,
} from "@/lib/types"
import {
  ROADMAPS,
  ROADMAP_LIST,
  DEFAULT_ROADMAP_ID,
  ROADMAP_CATEGORIES,
  CATEGORY_MAP,
} from "@/lib/roadmaps"
import type { LessonGuide } from "@/lib/lesson-guides/types"
import {
  ACTIVE_ROADMAP_KEY,
  defaultLessonQuizState,
  defaultQuizState,
  loadPersistedProgress,
  loadProgressSummary,
  storageKeyForRoadmap,
} from "@/lib/progress-storage"
import { matchAnyPinyin } from "@/lib/pinyin-search"

const isRoadmapId = (value: string | null): value is RoadmapId =>
  !!value && Object.hasOwn(ROADMAPS, value)

function getRoadmapIdFromPath(pathname: string): RoadmapId | null {
  const normalized = pathname.replace(/^\/+|\/+$/g, "")
  const [first] = normalized.split("/")
  return isRoadmapId(first) ? first : null
}

export default function App() {
  const initial = React.useMemo(() => {
    const pathRoadmapId = typeof window === "undefined" ? null : getRoadmapIdFromPath(window.location.pathname)
    const stored = typeof window === "undefined" ? null : localStorage.getItem(ACTIVE_ROADMAP_KEY)
    const roadmapId: RoadmapId =
      pathRoadmapId ||
      (isRoadmapId(stored) ? stored : DEFAULT_ROADMAP_ID)
    const roadmap = ROADMAPS[roadmapId] || ROADMAPS[DEFAULT_ROADMAP_ID]
    const page: "landing" | "roadmap" = pathRoadmapId ? "roadmap" : "landing"
    return { roadmapId: roadmap.id, roadmap, persisted: loadPersistedProgress(roadmap), page }
  }, [])

  const [activeRoadmapId, setActiveRoadmapId] = React.useState<RoadmapId>(initial.roadmapId)
  const activeRoadmap = ROADMAPS[activeRoadmapId] || ROADMAPS[DEFAULT_ROADMAP_ID]

  const [completedLessons, setCompletedLessons] = React.useState<Set<string>>(initial.persisted.completed)
  const [quizState, setQuizState] = React.useState<QuizState>(initial.persisted.quiz)
  const [lessonQuiz, setLessonQuiz] = React.useState<Record<string, LessonQuizState>>(initial.persisted.lessonQuiz || {})
  const [docQuiz, setDocQuiz] = React.useState<DocQuizProgress>(initial.persisted.docQuiz || {})
  const [lastStudiedLessonId, setLastStudiedLessonId] = React.useState<string | undefined>(initial.persisted.lastStudiedLessonId)
  const [page, setPage] = React.useState<"landing" | "roadmap">(initial.page)
  const [selectedCategory, setSelectedCategory] = React.useState<RoadmapCategory>("all")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [tab, setTab] = React.useState("overview")
  const [knowledgeStage, setKnowledgeStage] = React.useState(initial.roadmap.knowledgeCards[0]?.id || "")
  const [resourceView, setResourceView] = React.useState<ResourceContext | null>(null)
  const [lessonQuizView, setLessonQuizView] = React.useState<{ lesson: Lesson; week: Week; stage: Stage } | null>(null)
  const [lessonGuideView, setLessonGuideView] = React.useState<{ lesson: Lesson; week: Week; stage: Stage; guide: LessonGuide } | null>(null)

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
      lastStudiedLessonId,
    }
    localStorage.setItem(storageKeyForRoadmap(activeRoadmapId), JSON.stringify(payload))
  }, [activeRoadmapId, completedLessons, quizState, lessonQuiz, docQuiz, lastStudiedLessonId])

  const toggleLesson = (lessonId: string) => {
    setCompletedLessons((prev) => {
      const next = new Set(prev)
      next.has(lessonId) ? next.delete(lessonId) : next.add(lessonId)
      return next
    })
    setLastStudiedLessonId(lessonId)
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

  const scrollToLastLesson = React.useCallback((lessonId: string | undefined) => {
    if (typeof window === "undefined" || !lessonId) return
    // Use requestAnimationFrame to wait for DOM to update
    requestAnimationFrame(() => {
      setTimeout(() => {
        const element = document.querySelector(`[data-lesson-id="${lessonId}"]`)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" })
          // Add a brief highlight effect
          element.classList.add("ring-2", "ring-primary/50")
          setTimeout(() => {
            element.classList.remove("ring-2", "ring-primary/50")
          }, 2000)
        }
      }, 100)
    })
  }, [])

  const openRoadmap = React.useCallback(
    (roadmapId: RoadmapId, nextTab: string = "overview", updateHistory = true, scrollToRecent = false) => {
      setResourceView(null)
      setLessonQuizView(null)
      setLessonGuideView(null)
      let lessonToScrollTo: string | undefined
      if (roadmapId !== activeRoadmapId) {
        const nextRoadmap = ROADMAPS[roadmapId]
        const persisted = loadPersistedProgress(nextRoadmap)
        setCompletedLessons(persisted.completed)
        setQuizState(persisted.quiz)
        setLessonQuiz(persisted.lessonQuiz || {})
        setDocQuiz(persisted.docQuiz || {})
        setKnowledgeStage(nextRoadmap.knowledgeCards[0]?.id || "")
        setActiveRoadmapId(roadmapId)
        setLastStudiedLessonId(persisted.lastStudiedLessonId)
        lessonToScrollTo = persisted.lastStudiedLessonId
      } else {
        lessonToScrollTo = lastStudiedLessonId
      }
      setTab(nextTab)
      setPage("roadmap")
      if (updateHistory && typeof window !== "undefined") {
        window.history.pushState({ roadmapId }, "", `/${roadmapId}`)
      }
      if (scrollToRecent && nextTab === "overview" && lessonToScrollTo) {
        scrollToLastLesson(lessonToScrollTo)
      } else {
        scrollToTop()
      }
    },
    [activeRoadmapId, scrollToTop, scrollToLastLesson, lastStudiedLessonId]
  )

  const openLanding = React.useCallback(
    (updateHistory = true) => {
      setResourceView(null)
      setLessonQuizView(null)
      setLessonGuideView(null)
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

  // Scroll to last studied lesson on initial page load
  React.useEffect(() => {
    if (initial.page === "roadmap" && initial.persisted.lastStudiedLessonId) {
      scrollToLastLesson(initial.persisted.lastStudiedLessonId)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

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

  const isMobile = useIsMobile()

  const tabs: BottomNavTab[] = ["overview", "knowledge", "exam"]
  const handleSwipeLeft = React.useCallback(() => {
    const currentIndex = tabs.indexOf(tab as BottomNavTab)
    if (currentIndex < tabs.length - 1) {
      setTab(tabs[currentIndex + 1])
    }
  }, [tab])

  const handleSwipeRight = React.useCallback(() => {
    const currentIndex = tabs.indexOf(tab as BottomNavTab)
    if (currentIndex > 0) {
      setTab(tabs[currentIndex - 1])
    }
  }, [tab])

  const handleTabChange = React.useCallback((newTab: BottomNavTab) => {
    setTab(newTab)
  }, [])

  const startLabel = overall.done > 0 ? "继续学习" : "开始学习"

  if (page === "landing") {
    return (
      <div className="min-h-screen bg-background/80 text-foreground relative">
        <div className="absolute top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        <div className="container px-4 sm:px-6 py-8 sm:py-12 space-y-6 sm:space-y-8">
          <Card className="glass-card p-5 sm:p-8 space-y-4 sm:space-y-5 animate-fade-in">
            <div className="flex flex-wrap gap-2 items-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <Badge variant="secondary" className="bg-secondary/70 text-xs">
                Roadmaps · Interactive
              </Badge>
              <Badge variant="outline">进度打卡</Badge>
              <Badge variant="outline">测验 + 题单</Badge>
              <Badge variant="outline">本地保存</Badge>
            </div>
            <CardTitle className="text-2xl sm:text-4xl font-bold tracking-tight">学习路线（Roadmaps）</CardTitle>
            <CardDescription className="text-base leading-relaxed">
              选择一条路线，按阶段与主题拆解；每节配套权威资源、文档题单与即时测验，按自己的节奏推进。
            </CardDescription>
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => openRoadmap(activeRoadmapId, "overview", true, true)} className="gap-2">
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

          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="搜索课程..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
              {ROADMAP_CATEGORIES.map((cat) => (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat.id)}
                  className="shrink-0"
                >
                  {cat.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ROADMAP_LIST.filter((roadmap) => {
              const matchesCategory = selectedCategory === "all" || CATEGORY_MAP[roadmap.id] === selectedCategory
              const query = searchQuery.trim()
              const matchesSearch = !query || matchAnyPinyin(
                [roadmap.title, roadmap.label, roadmap.description],
                query
              )
              return matchesCategory && matchesSearch
            }).map((roadmap) => {
              const totals = roadmapTotals(roadmap.stages)
              const summary = loadProgressSummary(roadmap)
              const percent = totals.lessons === 0 ? 0 : Math.round((summary.completed / totals.lessons) * 100)
              const roadmapSuggestion = roadmap.suggestion(percent)
              return (
                <Card key={roadmap.id} className="glass-card p-6 flex flex-col animate-fade-in">
                  <div className="flex flex-wrap gap-2 items-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <Badge variant="secondary" className="bg-secondary/70 text-xs">
                      Live
                    </Badge>
                    <Badge variant="outline">{totals.stages} 阶段</Badge>
                    <Badge variant="outline">{totals.weeks} 主题</Badge>
                    <Badge variant="outline">{totals.lessons} 课时</Badge>
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-semibold tracking-tight mt-4">
                    {roadmap.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed mt-4 flex-1">{roadmap.description}</CardDescription>
                  <div className="grid gap-3 sm:grid-cols-3 text-sm text-muted-foreground mt-4">
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
                  <div className="space-y-2 mt-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">学习进度</span>
                      <span className="font-medium">
                        {summary.completed}/{totals.lessons} · {percent}%
                      </span>
                    </div>
                    <Progress value={percent} />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 min-h-[40px]">{roadmapSuggestion}</p>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <Button onClick={() => openRoadmap(roadmap.id, "overview", true, summary.completed > 0)} className="gap-2">
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
              <CardDescription className="text-sm">每个主题/课时配套测验与解析，帮助形成闭环。</CardDescription>
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

  return (
    <AppShell
      page="roadmap"
      currentTab={tab as BottomNavTab}
      onTabChange={handleTabChange}
      onHomeClick={() => openLanding()}
      roadmapTitle={activeRoadmap.label}
      rightAction={<ThemeToggle />}
    >
    <div className="min-h-screen bg-background/80 text-foreground relative">
      <div className="absolute top-4 right-4 z-50 hidden md:block">
        <ThemeToggle />
      </div>
      <div className="container px-4 sm:px-6 py-6 sm:py-10 space-y-4 sm:space-y-6">
        <div className="hidden md:flex flex-col sm:flex-row sm:items-center justify-between gap-3">
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
            <CardTitle className="text-2xl sm:text-3xl font-bold tracking-tight">
              {activeRoadmap.title}
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
            <div className="grid gap-2 grid-cols-3 text-sm">
              <div className="rounded-lg border border-border/60 bg-background/60 p-2 sm:p-3">
                <p className="text-muted-foreground text-xs">已完成</p>
                <p className="text-base sm:text-lg font-semibold">{overall.done}</p>
              </div>
              <div className="rounded-lg border border-border/60 bg-background/60 p-2 sm:p-3">
                <p className="text-muted-foreground text-xs">总课时</p>
                <p className="text-base sm:text-lg font-semibold">{overall.total}</p>
              </div>
              <div className="rounded-lg border border-border/60 bg-background/60 p-2 sm:p-3">
                <p className="text-muted-foreground text-xs">最佳成绩</p>
                <p className="text-base sm:text-lg font-semibold">{quizState.bestScore != null ? `${quizState.bestScore}%` : "—"}</p>
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
          <div className="hidden md:block overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            <TabsList className="bg-card/80 border border-border/70 w-max sm:w-auto">
              <TabsTrigger value="overview" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                <ListChecks className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden xs:inline">路线</span>总览
              </TabsTrigger>
              <TabsTrigger value="knowledge" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                <Brain className="h-3 w-3 sm:h-4 sm:w-4" />
                知识<span className="hidden xs:inline">讲解</span>
              </TabsTrigger>
              <TabsTrigger value="exam" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                <Trophy className="h-3 w-3 sm:h-4 sm:w-4" />
                考试<span className="hidden xs:inline">环节</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <SwipeContainer
            onSwipeLeft={handleSwipeLeft}
            onSwipeRight={handleSwipeRight}
            enabled={isMobile}
          >

          <TabsContent value="overview" className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">路线分期</p>
                <h2 className="text-xl sm:text-2xl font-semibold leading-tight">阶段/主题学习地图</h2>
                <p className="text-muted-foreground text-sm">按阶段与主题组织的卡片，可勾选课时，自动统计完成度并生成行动建议。</p>
              </div>
              <Badge variant="secondary" className="gap-1">
                <Lightbulb className="h-4 w-4" />
                {suggestion}
              </Badge>
            </div>

            <div className="space-y-4">
              {activeRoadmap.stages.map((stage, stageIdx) => {
                const stats = stageStats(stage.id)
                const percent = stats.total === 0 ? 0 : Math.round((stats.done / stats.total) * 100)
                return (
                  <Card key={stage.id} className="glass-card p-5 space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">阶段 {stageIdx + 1}</Badge>
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
                      {stage.weeks.map((week, weekIdx) => (
                        <div key={week.id} className="rounded-xl border border-border/60 bg-background/70 p-4 space-y-3">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                                {displayTopicTitle(week.title, weekIdx)}
                              </p>
                              <p className="text-sm text-muted-foreground">{week.summary}</p>
                            </div>
                            <Badge variant="outline" className="text-muted-foreground">
                              {week.lessons.filter((l) => completedLessons.has(l.id)).length}/{week.lessons.length}
                            </Badge>
                          </div>
                          <div className="space-y-2">
                            {week.lessons.map((lesson) => {
                              const checked = completedLessons.has(lesson.id)
                              const guide = getLessonGuide(activeRoadmapId, lesson.id)
                              return (
                                <div
                                  key={lesson.id}
                                  data-lesson-id={lesson.id}
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
                                          <a
                                            key={res.url}
                                            href={res.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-1 rounded-md border border-border/60 bg-background/60 px-2 py-1 text-[11px] text-muted-foreground transition hover:border-accent/60 hover:text-foreground"
                                          >
                                            <ArrowUpRight className="h-3 w-3" />
                                            {res.title}
                                          </a>
                                        ))
                                        : null}
                                      {guide ? (
                                        <Button
                                          size="sm"
                                          variant="outline"
                                          className="h-7 px-2 text-xs"
                                          onClick={() => {
                                            setLessonGuideView({ lesson, week, stage, guide })
                                            setLastStudiedLessonId(lesson.id)
                                          }}
                                        >
                                          主题讲解
                                        </Button>
                                      ) : null}
                                      <Button
                                        size="sm"
                                        variant="outline"
                                        className="h-7 px-2 text-xs"
                                        onClick={() => {
                                          setLessonQuizView({ lesson, week, stage })
                                          setLastStudiedLessonId(lesson.id)
                                        }}
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
                <h2 className="text-xl sm:text-2xl font-semibold leading-tight">关键知识点速览</h2>
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
                  每个主题跟踪一个“输入-输出”闭环：理解概念 → 动手实验 → 写出一句话总结。下方基于已完成的课时给你下一步建议。
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
                <h2 className="text-xl sm:text-2xl font-semibold leading-tight">阶段考试与复盘</h2>
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
                                  <p className="text-xs text-destructive">已选择，建议回顾对应主题</p>
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
                            ? "及格，回顾错题对应的主题，并重做动手实验。"
                            : "需要加强：重学第 1-4 阶段核心内容，完成 2 次小实验后再测。"}
                    </p>
                  </AlertDescription>
                </Alert>
              )}
            </Card>
          </TabsContent>
          </SwipeContainer>
        </Tabs>
      </div>

      {resourceView ? (
        <ResourceModal view={resourceView} roadmap={activeRoadmap} onClose={() => setResourceView(null)} />
      ) : null}

      {lessonQuizView ? (
        <LessonQuizModal
          view={lessonQuizView}
          roadmap={activeRoadmap}
          docQuiz={docQuiz}
          getLessonQuizState={getLessonQuizState}
          onSelectAnswer={handleLessonQuizSelect}
          onSubmitQuiz={submitLessonQuiz}
          onResetQuiz={resetLessonQuiz}
          onToggleDocQuestion={toggleDocQuestion}
          onResetDocQuiz={resetDocQuiz}
          onClose={() => setLessonQuizView(null)}
        />
      ) : null}

      {lessonGuideView ? (
        <LessonGuideModal view={lessonGuideView} onClose={() => setLessonGuideView(null)} />
      ) : null}

      <ScrollToTop />
    </div>
    </AppShell>
  )
}
