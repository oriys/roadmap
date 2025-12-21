import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"
import { week1Guides, week1Quizzes } from "./week1"

// 课时测验接口
export interface LessonQuiz {
    lessonId: string
    questions: QuizQuestion[]
}

// 讲解文档汇总
export const kubernetesGuides: Record<string, LessonGuide> = {
    ...week1Guides,
}

// 课时测验汇总
export const kubernetesLessonQuizzes: Record<string, QuizQuestion[]> = {
    ...week1Quizzes,
}
