import { customLessonQuizzes } from "./lesson-quizzes"
import { lessonOverviewMap } from "./lesson-overviews"
import type { Lesson, Week, Stage, QuizQuestion } from "./types"

export function getLessonOverview(lesson: Lesson): string | undefined {
    return lesson.overview || lessonOverviewMap[lesson.id.toLowerCase()]
}

export function hashToUint32(input: string): number {
    let hash = 2166136261
    for (let i = 0; i < input.length; i += 1) {
        hash ^= input.charCodeAt(i)
        hash = Math.imul(hash, 16777619)
    }
    return hash >>> 0
}

export function mulberry32(seed: number) {
    let state = seed >>> 0
    return () => {
        state += 0x6d2b79f5
        let t = state
        t = Math.imul(t ^ (t >>> 15), t | 1)
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }
}

export function shuffledOrder(length: number, seed: number): number[] {
    const order = Array.from({ length }, (_, idx) => idx)
    const rand = mulberry32(seed)
    for (let i = order.length - 1; i > 0; i -= 1) {
        const j = Math.floor(rand() * (i + 1))
        const tmp = order[i]
        order[i] = order[j]
        order[j] = tmp
    }
    return order
}

export function shuffleQuizOptions(question: QuizQuestion): QuizQuestion {
    if (question.options.length <= 1) return question
    const order = shuffledOrder(question.options.length, hashToUint32(question.id))
    const options = order.map((idx) => question.options[idx])
    const answer = order.indexOf(question.answer)
    if (answer === -1) return question
    return { ...question, options, answer }
}


export function buildLessonQuizCanonical(lesson: Lesson, week: Week, stage: Stage): QuizQuestion[] {
    void week
    void stage
    return customLessonQuizzes[lesson.id] || []
}

export function buildLessonQuiz(lesson: Lesson, week: Week, stage: Stage): QuizQuestion[] {
    return buildLessonQuizCanonical(lesson, week, stage).map(shuffleQuizOptions)
}
