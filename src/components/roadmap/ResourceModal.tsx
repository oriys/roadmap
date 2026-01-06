import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { getLessonOverview } from "@/lib/quiz-helpers"
import { displayTopicTitle } from "@/lib/topic-title"
import type { RoadmapDefinition, ResourceContext } from "@/lib/types"

type ResourceModalProps = {
  view: ResourceContext
  roadmap: RoadmapDefinition
  onClose: () => void
}

export function ResourceModal({ view, roadmap, onClose }: ResourceModalProps) {
  const topicIndex = view.stage.weeks.findIndex((week) => week.id === view.week.id)
  const topicTitle = displayTopicTitle(view.week.title, topicIndex === -1 ? undefined : topicIndex)

  const keyPoints = (view.week.keyPoints && view.week.keyPoints.length
    ? view.week.keyPoints
    : view.lesson.keyPoints && view.lesson.keyPoints.length
      ? view.lesson.keyPoints
      : roadmap.resourceGuide.fallbackKeyPoints
  )

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 px-3 sm:px-4 py-4 sm:py-10 backdrop-blur overflow-y-auto">
      <div className="w-full max-w-3xl rounded-2xl border border-border/70 bg-card/90 p-4 sm:p-6 shadow-glow my-auto">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">文档讲解</p>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground">{view.resource.title}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              {view.stage.title} · {topicTitle} · {view.lesson.title}
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={onClose}>
              关闭
            </Button>
            <Button size="sm" asChild>
              <a href={view.resource.url} target="_blank" rel="noreferrer" className="flex items-center gap-2">
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
                <span>前置认知：{view.week.overview || view.week.summary || "先通读官方概念与示例，再上手实验。"}</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>本课综述：{getLessonOverview(view.lesson) || view.lesson.detail}</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>环境预期：{roadmap.resourceGuide.environment}</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>与其他主题关联：{view.stage.title} → {view.stage.goal}</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-border/60 bg-background/70 p-4 space-y-2">
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">重难点拆解</p>
            <ul className="space-y-1 text-foreground/90">
              {keyPoints.map((kp, idx) => (
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
              {roadmap.resourceGuide.handsOnSteps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="rounded-lg border border-border/60 bg-background/70 p-4 space-y-2">
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">自检/质询</p>
            <ul className="space-y-1 text-muted-foreground">
              {roadmap.resourceGuide.selfChecks.map((item, idx) => (
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
              {roadmap.resourceGuide.extensions.map((item, idx) => (
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
  )
}

