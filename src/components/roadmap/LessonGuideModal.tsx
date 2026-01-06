import { Button } from "@/components/ui/button"
import { displayTopicTitle } from "@/lib/topic-title"
import type { LessonGuide } from "@/lib/lesson-guides/types"
import type { Lesson, Stage, Week } from "@/lib/types"

type LessonGuideView = { lesson: Lesson; week: Week; stage: Stage; guide: LessonGuide }

type LessonGuideModalProps = {
  view: LessonGuideView
  onClose: () => void
}

export function LessonGuideModal({ view, onClose }: LessonGuideModalProps) {
  const topicIndex = view.stage.weeks.findIndex((week) => week.id === view.week.id)
  const topicTitle = displayTopicTitle(view.week.title, topicIndex === -1 ? undefined : topicIndex)

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 px-3 sm:px-4 py-4 sm:py-10 backdrop-blur overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl rounded-2xl border border-border/70 bg-card/90 p-4 sm:p-6 shadow-glow my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">主题讲解</p>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground">{view.lesson.title}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              {view.stage.title} · {topicTitle}
            </p>
          </div>
          <Button variant="outline" size="sm" onClick={onClose}>
            关闭
          </Button>
        </div>

        <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground">
          <div className="rounded-lg border border-border/60 bg-background/70 p-4 space-y-2">
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">背景补充</p>
            <ul className="space-y-1 text-muted-foreground">
              {view.guide.background.map((item, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-border/60 bg-background/70 p-4 space-y-2">
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">重难点拆解</p>
            <ul className="space-y-1 text-foreground/90">
              {view.guide.keyDifficulties.map((item, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-border/60 bg-background/70 p-4 space-y-2">
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">动手路径</p>
            <ol className="list-decimal pl-4 space-y-1 text-muted-foreground">
              {view.guide.handsOnPath.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="rounded-lg border border-border/60 bg-background/70 p-4 space-y-2">
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">自检/质询</p>
            <ul className="space-y-1 text-muted-foreground">
              {view.guide.selfCheck.map((item, idx) => (
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
              {view.guide.extensions.map((item, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {view.guide.sourceUrls.length > 0 ? (
            <div className="rounded-lg border border-border/60 bg-background/70 p-4 space-y-2">
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">参考来源</p>
              <ul className="space-y-1 text-muted-foreground">
                {view.guide.sourceUrls.map((url, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                    <a href={url} target="_blank" rel="noreferrer" className="text-accent hover:underline break-all">
                      {url}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

