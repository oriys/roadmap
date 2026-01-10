import React from "react"
import { BookOpen, FileText, Menu, X, PanelLeftClose, PanelLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { formatTopicLabel, formatLessonLabel } from "@/lib/topic-title"
import type { RoadmapDefinition } from "@/lib/types"
import type { LessonGuide } from "@/lib/lesson-guides/types"

type LessonSidebarProps = {
  roadmap: RoadmapDefinition
  currentLessonId: string
  viewType: "guide" | "quiz"
  completedLessons: Set<string>
  getLessonGuide: (lessonId: string) => LessonGuide | undefined
  onNavigate: (lessonId: string, viewType: "guide" | "quiz") => void
}

export function LessonSidebar({
  roadmap,
  currentLessonId,
  viewType,
  completedLessons,
  getLessonGuide,
  onNavigate,
}: LessonSidebarProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [collapsed, setCollapsed] = React.useState(false)
  const currentLessonRef = React.useRef<HTMLDivElement>(null)

  // Auto-scroll to current lesson
  React.useEffect(() => {
    if (currentLessonRef.current && !collapsed) {
      currentLessonRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }, [currentLessonId, collapsed])

  const handleLessonClick = (lessonId: string, type: "guide" | "quiz") => {
    onNavigate(lessonId, type)
    setMobileOpen(false)
  }

  // Flatten all weeks with their stage index for display
  const allTopics: Array<{ week: typeof roadmap.stages[0]["weeks"][0]; weekIdx: number; stageIdx: number }> = []
  roadmap.stages.forEach((stage, stageIdx) => {
    stage.weeks.forEach((week, weekIdx) => {
      allTopics.push({ week, weekIdx, stageIdx })
    })
  })

  const sidebarContent = (
    <div className="space-y-3">
      <div className="px-2 py-1">
        <h2 className="text-sm font-semibold text-foreground">{roadmap.title}</h2>
      </div>

      {allTopics.map(({ week }) => (
        <div key={week.id}>
          <div className="px-2 py-1 text-xs font-medium text-muted-foreground">
            {formatTopicLabel(week.title)}
          </div>
          <div className="space-y-0.5">
            {week.lessons.map((lesson) => {
              const isCurrent = lesson.id === currentLessonId
              const isCompleted = completedLessons.has(lesson.id)
              const hasGuide = !!getLessonGuide(lesson.id)

              return (
                <div key={lesson.id} className="px-1" ref={isCurrent ? currentLessonRef : undefined}>
                  <div
                    className={cn(
                      "flex items-center gap-1.5 py-1.5 px-2 rounded text-[11px] transition cursor-pointer",
                      isCurrent ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-muted/50"
                    )}
                    onClick={() => handleLessonClick(lesson.id, hasGuide ? "guide" : "quiz")}
                  >
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full flex-shrink-0",
                        isCompleted ? "bg-primary" : "bg-border"
                      )}
                    />
                    <span className="flex-1 truncate">{formatLessonLabel(lesson.title)}</span>
                  </div>
                  {isCurrent && (
                    <div className="flex gap-1 pl-5 mt-0.5 mb-1">
                      {hasGuide && (
                        <button
                          onClick={() => handleLessonClick(lesson.id, "guide")}
                          className={cn(
                            "flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] transition",
                            viewType === "guide"
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:bg-muted/50"
                          )}
                        >
                          <BookOpen className="h-2.5 w-2.5" />
                          讲解
                        </button>
                      )}
                      <button
                        onClick={() => handleLessonClick(lesson.id, "quiz")}
                        className={cn(
                          "flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] transition",
                          viewType === "quiz"
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:bg-muted/50"
                        )}
                      >
                        <FileText className="h-2.5 w-2.5" />
                        测验
                      </button>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <>
      {/* Mobile toggle button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-20 left-4 z-40 md:hidden shadow-lg"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 bottom-0 w-56 bg-card border-r border-border z-50 overflow-y-auto transition-transform duration-300 md:hidden",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-2 pt-16">
          {sidebarContent}
        </div>
      </aside>

      {/* Desktop sidebar */}
      <aside
        className={cn(
          "hidden md:block flex-shrink-0 border-r border-border bg-card/50 overflow-y-auto h-[calc(100vh-4rem)] sticky top-16 transition-all duration-300",
          collapsed ? "w-10" : "w-48 lg:w-52"
        )}
      >
        {/* Collapse toggle button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute top-2 right-2 p-1.5 rounded-md text-muted-foreground hover:bg-muted/50 hover:text-foreground transition z-10"
          title={collapsed ? "展开大纲" : "收起大纲"}
        >
          {collapsed ? <PanelLeft className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
        </button>

        {collapsed ? (
          <div className="p-1.5 pt-10">
            <button
              onClick={() => setCollapsed(false)}
              className="w-full flex items-center justify-center p-1.5 rounded-md text-muted-foreground hover:bg-muted/50 hover:text-foreground transition"
              title="展开大纲"
            >
              <Menu className="h-3.5 w-3.5" />
            </button>
          </div>
        ) : (
          <div className="p-2 pt-10">
            {sidebarContent}
          </div>
        )}
      </aside>
    </>
  )
}
