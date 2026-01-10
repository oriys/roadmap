import type {
  DocQuizProgress,
  LessonQuizState,
  QuizState,
  RoadmapDefinition,
  RoadmapId,
} from "@/lib/types"
import {
  buildLessonQuizCanonical,
  hashToUint32,
  shuffledOrder,
} from "@/lib/quiz-helpers"

export const ACTIVE_ROADMAP_KEY = "roadmap-active-id"
const STORAGE_KEY_PREFIX = "roadmap-progress-v1"
const LEGACY_K8S_STORAGE_KEY = "k8s-roadmap-progress-v2"

export const defaultQuizState: QuizState = {
  answers: {},
  attempts: 0,
  bestScore: undefined,
  lastScore: undefined,
}

export const defaultLessonQuizState: LessonQuizState = {
  answers: {},
  attempts: 0,
  bestScore: undefined,
  lastScore: undefined,
}

type ProgressSummary = {
  completed: number
  bestScore: number | undefined
  lastStudiedLessonId: string | undefined
}

type PersistedProgress = {
  completed: Set<string>
  quiz: QuizState
  lessonQuiz: Record<string, LessonQuizState>
  docQuiz: DocQuizProgress
  lastStudiedLessonId: string | undefined
}

function createDefaultSummary(): ProgressSummary {
  return { completed: 0, bestScore: undefined, lastStudiedLessonId: undefined }
}

function createDefaultProgress(): PersistedProgress {
  return {
    completed: new Set<string>(),
    quiz: defaultQuizState,
    lessonQuiz: {},
    docQuiz: {},
    lastStudiedLessonId: undefined,
  }
}

export function storageKeyForRoadmap(roadmapId: RoadmapId): string {
  return `${STORAGE_KEY_PREFIX}:${roadmapId}`
}

function getRawProgress(roadmapId: RoadmapId) {
  const key = storageKeyForRoadmap(roadmapId)
  return localStorage.getItem(key) || (roadmapId === "kubernetes" ? localStorage.getItem(LEGACY_K8S_STORAGE_KEY) : null)
}

function safeJsonParse(input: string): unknown {
  try {
    return JSON.parse(input)
  } catch {
    return null
  }
}

function buildOptionCountByQuestionId(roadmap: RoadmapDefinition) {
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
  return optionCountByQuestionId
}

function migrateLessonQuizOptionIndexes(
  lessonQuiz: Record<string, LessonQuizState>,
  optionCountByQuestionId: Record<string, number>
) {
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
  return migrated
}

export function loadProgressSummary(roadmap: RoadmapDefinition): ProgressSummary {
  if (typeof window === "undefined") return createDefaultSummary()
  try {
    const raw = getRawProgress(roadmap.id)
    if (!raw) return createDefaultSummary()
    const parsed = safeJsonParse(raw)
    if (!parsed || typeof parsed !== "object") return createDefaultSummary()
    const payload = parsed as Record<string, unknown>
    const completed = Array.isArray(payload.completed) ? payload.completed.length : 0
    const quiz = payload.quiz as Record<string, unknown> | undefined
    const bestScore = typeof quiz?.bestScore === "number" ? (quiz.bestScore as number) : undefined
    const lastStudiedLessonId = typeof payload.lastStudiedLessonId === "string" ? payload.lastStudiedLessonId : undefined
    return { completed, bestScore, lastStudiedLessonId }
  } catch {
    return createDefaultSummary()
  }
}

export function loadPersistedProgress(roadmap: RoadmapDefinition): PersistedProgress {
  if (typeof window === "undefined") return createDefaultProgress()

  try {
    const raw = getRawProgress(roadmap.id)
    if (!raw) return createDefaultProgress()

    const parsed = safeJsonParse(raw)
    if (!parsed || typeof parsed !== "object") return createDefaultProgress()

    const payload = parsed as Record<string, unknown>
    const completed = new Set<string>(Array.isArray(payload.completed) ? (payload.completed as string[]) : [])

    const quizRaw = payload.quiz as Record<string, unknown> | undefined
    const quiz: QuizState = {
      ...defaultQuizState,
      ...(quizRaw as Partial<QuizState>),
      answers: (quizRaw?.answers as QuizState["answers"]) ?? {},
    }

    let lessonQuiz = (payload.lessonQuiz as Record<string, LessonQuizState> | undefined) || {}
    if (!payload.lessonQuizOptionsShuffled) {
      try {
        const optionCountByQuestionId = buildOptionCountByQuestionId(roadmap)
        lessonQuiz = migrateLessonQuizOptionIndexes(lessonQuiz, optionCountByQuestionId)
      } catch (error) {
        console.warn("课时测验选项顺序迁移失败，将使用原记录", error)
      }
    }

    const docQuiz = (payload.docQuiz as DocQuizProgress | undefined) || {}
    const lastStudiedLessonId = typeof payload.lastStudiedLessonId === "string" ? payload.lastStudiedLessonId : undefined

    return { completed, quiz, lessonQuiz, docQuiz, lastStudiedLessonId }
  } catch (error) {
    console.warn("无法读取本地进度，将使用默认值", error)
    return createDefaultProgress()
  }
}

