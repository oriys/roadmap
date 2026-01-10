import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { SheetModal } from "@/components/mobile/SheetModal"
import { useIsMobile } from "@/hooks/useMediaQuery"
import { docQuestionMap } from "@/lib/doc-questions"
import { buildLessonQuiz, getLessonOverview } from "@/lib/quiz-helpers"
import { displayTopicTitle } from "@/lib/topic-title"
import type {
  DocQuizProgress,
  Lesson,
  LessonQuizState,
  QuizQuestion,
  RoadmapDefinition,
  Stage,
  Week,
} from "@/lib/types"

type LessonQuizView = { lesson: Lesson; week: Week; stage: Stage }

type LessonQuizModalProps = {
  view: LessonQuizView
  roadmap: RoadmapDefinition
  docQuiz: DocQuizProgress
  getLessonQuizState: (lessonId: string) => LessonQuizState
  onSelectAnswer: (lessonId: string, questionId: string, value: number) => void
  onSubmitQuiz: (lessonId: string, questions: QuizQuestion[]) => void
  onResetQuiz: (lessonId: string) => void
  onToggleDocQuestion: (lessonId: string, index: number) => void
  onResetDocQuiz: (lessonId: string) => void
  onClose: () => void
}

function LessonQuizContent({
  view,
  roadmap,
  docQuiz,
  getLessonQuizState,
  onSelectAnswer,
  onSubmitQuiz,
  onResetQuiz,
  onToggleDocQuestion,
  onResetDocQuiz,
}: Omit<LessonQuizModalProps, "onClose">) {
  const topicIndex = view.stage.weeks.findIndex((week) => week.id === view.week.id)
  const topicTitle = displayTopicTitle(view.week.title, topicIndex === -1 ? undefined : topicIndex)
  const docList = docQuestionMap[view.lesson.id] || []
  const questions = buildLessonQuiz(view.lesson, view.week, view.stage)
  const state = getLessonQuizState(view.lesson.id)
  const showFeedback = state.lastScore != null

  return (
    <div className="space-y-4">
      <div className="mb-4">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">课时测验</p>
        <h3 className="text-lg font-semibold text-foreground">{view.lesson.title}</h3>
        <p className="text-xs text-muted-foreground mt-1">
          {view.stage.title} · {topicTitle}
        </p>
        <p className="text-xs text-muted-foreground mt-2">{getLessonOverview(view.lesson) || view.lesson.detail}</p>
      </div>

      {docList.length ? (
        <div className="space-y-4">
          <div className="grid gap-3 grid-cols-2">
            <div className="rounded-lg border border-border/60 bg-background/70 p-3">
              <p className="text-xs text-muted-foreground">已完成</p>
              <p className="text-lg font-semibold">
                {(docQuiz[view.lesson.id]?.length || 0)}/{docList.length}
              </p>
            </div>
            <div className="rounded-lg border border-border/60 bg-background/70 p-3 flex items-center justify-between">
              <p className="text-xs text-muted-foreground">重置</p>
              <Button size="sm" variant="outline" onClick={() => onResetDocQuiz(view.lesson.id)}>
                清空
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            {docList.map((prompt, idx) => {
              const checked = docQuiz[view.lesson.id]?.includes(idx) || false
              return (
                <div key={idx} className="rounded-xl border border-border/60 bg-background/70 p-4 flex gap-3">
                  <Checkbox
                    checked={checked}
                    onCheckedChange={() => onToggleDocQuestion(view.lesson.id, idx)}
                    className="mt-1"
                  />
                  <div className="space-y-1">
                    <p className="text-sm font-semibold">
                      Q{idx + 1}. {prompt}
                    </p>
                    <p className="text-xs text-muted-foreground">阅读文档后作答并勾选</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="grid gap-3 grid-cols-3">
            <div className="rounded-lg border border-border/60 bg-background/70 p-3">
              <p className="text-xs text-muted-foreground">尝试</p>
              <p className="text-lg font-semibold">{state.attempts || 0}</p>
            </div>
            <div className="rounded-lg border border-border/60 bg-background/70 p-3">
              <p className="text-xs text-muted-foreground">最佳</p>
              <p className="text-lg font-semibold">{state.bestScore != null ? `${state.bestScore}%` : "—"}</p>
            </div>
            <div className="rounded-lg border border-border/60 bg-background/70 p-3">
              <p className="text-xs text-muted-foreground">已答</p>
              <p className="text-lg font-semibold">
                {Object.keys(state.answers || {}).length}/{questions.length}
              </p>
            </div>
          </div>

          {questions.map((q, idx) => {
            const selected = state.answers[q.id]
            return (
              <div key={q.id} className="rounded-xl border border-border/60 bg-background/70 p-4 space-y-3">
                <div className="flex items-start gap-2">
                  <Badge variant="secondary">Q{idx + 1}</Badge>
                  <div className="space-y-1">
                    <p className="font-semibold text-sm">{q.question}</p>
                    {showFeedback && (
                      <p className="text-xs text-muted-foreground">正确答案：{String.fromCharCode(65 + q.answer)}</p>
                    )}
                  </div>
                </div>
                <RadioGroup
                  value={selected !== undefined ? String(selected) : undefined}
                  onValueChange={(val) => onSelectAnswer(view.lesson.id, q.id, Number(val))}
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
                            <p className="text-xs text-destructive">已选择，建议回顾</p>
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
            <Button onClick={() => onSubmitQuiz(view.lesson.id, questions)} className="gap-2">
              提交
            </Button>
            <Button variant="outline" onClick={() => onResetQuiz(view.lesson.id)}>
              清空
            </Button>
          </div>

          {showFeedback ? (
            <Alert className="border-accent/60 bg-accent/10">
              <AlertTitle>成绩：{state.lastScore}%</AlertTitle>
              <AlertDescription className="space-y-1">
                <p>
                  最佳：{state.bestScore}% · 尝试 {state.attempts} 次
                </p>
                <p className="text-muted-foreground text-sm">{roadmap.resourceGuide.lessonQuizAdvice}</p>
              </AlertDescription>
            </Alert>
          ) : null}
        </div>
      )}
    </div>
  )
}

export function LessonQuizModal({
  view,
  roadmap,
  docQuiz,
  getLessonQuizState,
  onSelectAnswer,
  onSubmitQuiz,
  onResetQuiz,
  onToggleDocQuestion,
  onResetDocQuiz,
  onClose,
}: LessonQuizModalProps) {
  const isMobile = useIsMobile()
  const topicIndex = view.stage.weeks.findIndex((week) => week.id === view.week.id)
  const topicTitle = displayTopicTitle(view.week.title, topicIndex === -1 ? undefined : topicIndex)
  const docList = docQuestionMap[view.lesson.id] || []
  const questions = buildLessonQuiz(view.lesson, view.week, view.stage)
  const state = getLessonQuizState(view.lesson.id)
  const showFeedback = state.lastScore != null

  if (isMobile) {
    return (
      <SheetModal isOpen={true} onClose={onClose} title="课时测验">
        <LessonQuizContent
          view={view}
          roadmap={roadmap}
          docQuiz={docQuiz}
          getLessonQuizState={getLessonQuizState}
          onSelectAnswer={onSelectAnswer}
          onSubmitQuiz={onSubmitQuiz}
          onResetQuiz={onResetQuiz}
          onToggleDocQuestion={onToggleDocQuestion}
          onResetDocQuiz={onResetDocQuiz}
        />
      </SheetModal>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 px-3 sm:px-4 py-4 sm:py-10 backdrop-blur overflow-y-auto">
      <div className="w-full max-w-4xl rounded-2xl border border-border/70 bg-card/90 p-4 sm:p-6 shadow-glow my-auto">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">课时测验</p>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground">{view.lesson.title}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              {view.stage.title} · {topicTitle}
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">{getLessonOverview(view.lesson) || view.lesson.detail}</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                onResetQuiz(view.lesson.id)
                onResetDocQuiz(view.lesson.id)
              }}
            >
              清空记录
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose}>
              关闭
            </Button>
          </div>
        </div>

        {docList.length ? (
          <div className="mt-4 space-y-4">
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border border-border/60 bg-background/70 p-3">
                <p className="text-xs text-muted-foreground">文档题数</p>
                <p className="text-lg font-semibold">
                  {(docQuiz[view.lesson.id]?.length || 0)}/{docList.length}
                </p>
              </div>
              <div className="rounded-lg border border-border/60 bg-background/70 p-3">
                <p className="text-xs text-muted-foreground">来源</p>
                <p className="text-sm text-muted-foreground">自动解析 lesson_quizzes.md</p>
              </div>
              <div className="rounded-lg border border-border/60 bg-background/70 p-3 flex items-center justify-between">
                <p className="text-xs text-muted-foreground">重置标记</p>
                <Button size="sm" variant="outline" onClick={() => onResetDocQuiz(view.lesson.id)}>
                  清空
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              {docList.map((prompt, idx) => {
                const checked = docQuiz[view.lesson.id]?.includes(idx) || false
                return (
                  <div key={idx} className="rounded-xl border border-border/60 bg-background/70 p-4 flex gap-3">
                    <Checkbox
                      checked={checked}
                      onCheckedChange={() => onToggleDocQuestion(view.lesson.id, idx)}
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
        ) : (
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
                  {Object.keys(state.answers || {}).length}/{questions.length}
                </p>
              </div>
            </div>

            {questions.map((q, idx) => {
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
                    onValueChange={(val) => onSelectAnswer(view.lesson.id, q.id, Number(val))}
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
                              <p className="text-xs text-muted-foreground">这是正确答案</p>
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
              <Button onClick={() => onSubmitQuiz(view.lesson.id, questions)} className="gap-2">
                提交并查看成绩
              </Button>
              <Button variant="outline" onClick={() => onResetQuiz(view.lesson.id)}>
                清空答题
              </Button>
            </div>

            {showFeedback ? (
              <Alert className="border-accent/60 bg-accent/10">
                <AlertTitle>成绩：{state.lastScore}%</AlertTitle>
                <AlertDescription className="space-y-1">
                  <p>
                    最佳：{state.bestScore}% · 尝试 {state.attempts} 次
                  </p>
                  <p className="text-muted-foreground">{roadmap.resourceGuide.lessonQuizAdvice}</p>
                </AlertDescription>
              </Alert>
            ) : null}
          </div>
        )}
      </div>
    </div>
  )
}
