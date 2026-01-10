import { displayTopicTitle } from "@/lib/topic-title"
import type { LessonGuide } from "@/lib/lesson-guides/types"
import type { Lesson, Stage, Week } from "@/lib/types"

export type LessonGuideView = { lesson: Lesson; week: Week; stage: Stage; guide: LessonGuide }

type LessonGuideContentProps = {
  view: LessonGuideView
  showHeader?: boolean
}

export function LessonGuideContent({ view, showHeader = true }: LessonGuideContentProps) {
  const topicIndex = view.stage.weeks.findIndex((week) => week.id === view.week.id)
  const topicTitle = displayTopicTitle(view.week.title, topicIndex === -1 ? undefined : topicIndex)

  return (
    <div className="space-y-6">
      {showHeader && (
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">主题讲解</p>
          <h3 className="text-xl font-semibold text-foreground mt-1">{view.lesson.title}</h3>
          <p className="text-sm text-muted-foreground mt-2">
            {view.stage.title} · {topicTitle}
          </p>
        </div>
      )}

      <div className="rounded-lg border border-border/60 bg-background/70 p-5 space-y-3">
        <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium">背景补充</p>
        <ul className="space-y-3 text-sm text-muted-foreground">
          {view.guide.background.map((item, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg border border-border/60 bg-background/70 p-5 space-y-3">
        <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium">重难点拆解</p>
        <ul className="space-y-3 text-sm text-foreground/90">
          {view.guide.keyDifficulties.map((item, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg border border-border/60 bg-background/70 p-5 space-y-3">
        <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium">动手路径</p>
        <ol className="list-decimal pl-5 space-y-3 text-sm text-muted-foreground">
          {view.guide.handsOnPath.map((step, idx) => (
            <li key={idx} className="leading-relaxed pl-1">{step}</li>
          ))}
        </ol>
      </div>

      <div className="rounded-lg border border-border/60 bg-background/70 p-5 space-y-3">
        <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium">自检/质询</p>
        <ul className="space-y-3 text-sm text-muted-foreground">
          {view.guide.selfCheck.map((item, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg border border-border/60 bg-background/70 p-5 space-y-3">
        <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium">扩展与衍生</p>
        <ul className="space-y-3 text-sm text-muted-foreground">
          {view.guide.extensions.map((item, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {view.guide.sourceUrls.length > 0 && (
        <div className="rounded-lg border border-border/60 bg-background/70 p-5 space-y-3">
          <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium">参考来源</p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {view.guide.sourceUrls.map((url, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                <a href={url} target="_blank" rel="noreferrer" className="text-accent hover:underline break-all leading-relaxed">
                  {url}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
