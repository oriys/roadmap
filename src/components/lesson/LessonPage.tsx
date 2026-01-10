import React from "react"
import { ArrowLeft, ChevronLeft, ChevronRight, BookOpen, FileText, ArrowUpRight, Check, Circle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LessonSidebar } from "./LessonSidebar"
import { LessonGuideContent } from "./LessonGuideContent"
import { LessonQuizContent } from "./LessonQuizContent"
import { getLessonGuide } from "@/lib/lesson-guides/by-roadmap"
import { formatStageLabel, formatTopicLabel } from "@/lib/topic-title"
import type { LessonGuide } from "@/lib/lesson-guides/types"
import type {
  DocQuizProgress,
  Lesson,
  LessonQuizState,
  QuizQuestion,
  RoadmapDefinition,
  RoadmapId,
  Stage,
  Week,
} from "@/lib/types"

export type LessonView = {
  lesson: Lesson
  week: Week
  stage: Stage
  guide: LessonGuide | undefined
}

type LessonPageProps = {
  roadmapId: RoadmapId
  roadmap: RoadmapDefinition
  lessonId: string
  viewType: "guide" | "quiz"
  completedLessons: Set<string>
  docQuiz: DocQuizProgress
  getLessonQuizState: (lessonId: string) => LessonQuizState
  onSelectAnswer: (lessonId: string, questionId: string, value: number) => void
  onSubmitQuiz: (lessonId: string, questions: QuizQuestion[]) => void
  onResetQuiz: (lessonId: string) => void
  onToggleDocQuestion: (lessonId: string, index: number) => void
  onResetDocQuiz: (lessonId: string) => void
  onNavigate: (lessonId: string, viewType: "guide" | "quiz") => void
  onToggleComplete: (lessonId: string) => void
  onBack: () => void
}

function findLessonContext(roadmap: RoadmapDefinition, lessonId: string): LessonView | null {
  for (const stage of roadmap.stages) {
    for (const week of stage.weeks) {
      const lesson = week.lessons.find((l) => l.id === lessonId)
      if (lesson) {
        return { lesson, week, stage, guide: undefined }
      }
    }
  }
  return null
}

function getAllLessons(roadmap: RoadmapDefinition): Array<{ lesson: Lesson; week: Week; stage: Stage }> {
  const all: Array<{ lesson: Lesson; week: Week; stage: Stage }> = []
  for (const stage of roadmap.stages) {
    for (const week of stage.weeks) {
      for (const lesson of week.lessons) {
        all.push({ lesson, week, stage })
      }
    }
  }
  return all
}

export function LessonPage({
  roadmapId,
  roadmap,
  lessonId,
  viewType,
  completedLessons,
  docQuiz,
  getLessonQuizState,
  onSelectAnswer,
  onSubmitQuiz,
  onResetQuiz,
  onToggleDocQuestion,
  onResetDocQuiz,
  onNavigate,
  onToggleComplete,
  onBack,
}: LessonPageProps) {
  const context = findLessonContext(roadmap, lessonId)
  const allLessonsForNav = React.useMemo(() => getAllLessons(roadmap), [roadmap])
  const currentIndex = allLessonsForNav.findIndex((l) => l.lesson.id === lessonId)

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return

      if (e.key === "ArrowLeft" && currentIndex > 0) {
        onNavigate(allLessonsForNav[currentIndex - 1].lesson.id, viewType)
      } else if (e.key === "ArrowRight" && currentIndex < allLessonsForNav.length - 1) {
        onNavigate(allLessonsForNav[currentIndex + 1].lesson.id, viewType)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentIndex, allLessonsForNav, viewType, onNavigate])

  if (!context) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">课程未找到</p>
          <Button onClick={onBack}>返回路线</Button>
        </div>
      </div>
    )
  }

  const guide = getLessonGuide(roadmapId, lessonId)
  const prevLesson = currentIndex > 0 ? allLessonsForNav[currentIndex - 1] : null
  const nextLesson = currentIndex < allLessonsForNav.length - 1 ? allLessonsForNav[currentIndex + 1] : null
  const isCompleted = completedLessons.has(lessonId)

  const getLessonGuideForSidebar = (lid: string) => getLessonGuide(roadmapId, lid)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-border bg-card/80 backdrop-blur">
        <div className="flex items-center justify-between h-14 px-4">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <Button variant="ghost" size="sm" onClick={onBack} className="gap-1 flex-shrink-0">
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">返回</span>
            </Button>
            <div className="hidden sm:block h-4 w-px bg-border flex-shrink-0" />
            {/* Breadcrumb */}
            <nav className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground">
              <span>{roadmap.title}</span>
              <ChevronRight className="h-3 w-3" />
              <span>{formatStageLabel(context.stage.title)}</span>
              <ChevronRight className="h-3 w-3" />
              <span>{formatTopicLabel(context.week.title)}</span>
            </nav>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Progress indicator */}
            <span className="text-xs text-muted-foreground hidden sm:inline">
              {currentIndex + 1}/{allLessonsForNav.length}
            </span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <LessonSidebar
          roadmap={roadmap}
          currentLessonId={lessonId}
          viewType={viewType}
          completedLessons={completedLessons}
          getLessonGuide={getLessonGuideForSidebar}
          onNavigate={onNavigate}
        />

        {/* Main content */}
        <main className="flex-1 min-w-0">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
            {/* View type tabs and completion checkbox */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex gap-2">
                {guide && (
                  <Button
                    variant={viewType === "guide" ? "default" : "outline"}
                    size="sm"
                    onClick={() => onNavigate(lessonId, "guide")}
                    className="gap-1.5"
                  >
                    <BookOpen className="h-4 w-4" />
                    主题讲解
                  </Button>
                )}
                <Button
                  variant={viewType === "quiz" ? "default" : "outline"}
                  size="sm"
                  onClick={() => onNavigate(lessonId, "quiz")}
                  className="gap-1.5"
                >
                  <FileText className="h-4 w-4" />
                  课时测验
                </Button>
              </div>
              {/* Completion checkbox */}
              <Button
                variant={isCompleted ? "default" : "outline"}
                size="sm"
                onClick={() => onToggleComplete(lessonId)}
                className="gap-1.5"
              >
                {isCompleted ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span className="hidden sm:inline">已完成</span>
                  </>
                ) : (
                  <>
                    <Circle className="h-4 w-4" />
                    <span className="hidden sm:inline">标记完成</span>
                  </>
                )}
              </Button>
            </div>

            {/* Resource links */}
            {context.lesson.resources && context.lesson.resources.length > 0 && (
              <div className="mb-6 rounded-lg border border-border/60 bg-background/70 p-4">
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium mb-3">参考文档</p>
                <div className="flex flex-wrap gap-2">
                  {context.lesson.resources.map((res) => (
                    <a
                      key={res.url}
                      href={res.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-card/60 px-3 py-1.5 text-sm text-muted-foreground transition hover:border-primary/60 hover:text-foreground"
                    >
                      <ArrowUpRight className="h-3.5 w-3.5" />
                      {res.title}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Content */}
            {viewType === "guide" && guide ? (
              <LessonGuideContent view={{ ...context, guide }} />
            ) : (
              <LessonQuizContent
                view={context}
                roadmap={roadmap}
                docQuiz={docQuiz}
                getLessonQuizState={getLessonQuizState}
                onSelectAnswer={onSelectAnswer}
                onSubmitQuiz={onSubmitQuiz}
                onResetQuiz={onResetQuiz}
                onToggleDocQuestion={onToggleDocQuestion}
                onResetDocQuiz={onResetDocQuiz}
              />
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              {prevLesson ? (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onNavigate(prevLesson.lesson.id, viewType)}
                  className="gap-1.5 group"
                >
                  <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                  上一课
                </Button>
              ) : (
                <div />
              )}
              <span className="text-xs text-muted-foreground">
                {currentIndex + 1}/{allLessonsForNav.length}
              </span>
              {nextLesson ? (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onNavigate(nextLesson.lesson.id, viewType)}
                  className="gap-1.5 group"
                >
                  下一课
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              ) : (
                <div />
              )}
            </div>

            {/* Keyboard hint */}
            <p className="text-center text-xs text-muted-foreground mt-4 hidden sm:block">
              使用 ← → 键快速切换课程
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
