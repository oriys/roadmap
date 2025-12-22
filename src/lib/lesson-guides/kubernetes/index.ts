import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"
import { week1Guides, week1Quizzes } from "./week1"
import { week2Guides, week2Quizzes } from "./week2"
import { week3Guides, week3Quizzes } from "./week3"
import { week4Guides, week4Quizzes } from "./week4"
import { week5Guides, week5Quizzes } from "./week5"
import { week6Guides, week6Quizzes } from "./week6"
import { week7Guides, week7Quizzes } from "./week7"
import { week8Guides, week8Quizzes } from "./week8"
import { week9Guides, week9Quizzes } from "./week9"
import { week10Guides, week10Quizzes } from "./week10"
import { week11Guides, week11Quizzes } from "./week11"
import { week12Guides, week12Quizzes } from "./week12"
import { week13Guides, week13Quizzes } from "./week13"
import { week14Guides, week14Quizzes } from "./week14"
import { week15Guides, week15Quizzes } from "./week15"

// 课时测验接口
export interface LessonQuiz {
    lessonId: string
    questions: QuizQuestion[]
}

// 讲解文档汇总
export const kubernetesGuides: Record<string, LessonGuide> = {
    ...week1Guides,
    ...week2Guides,
    ...week3Guides,
    ...week4Guides,
    ...week5Guides,
    ...week6Guides,
    ...week7Guides,
    ...week8Guides,
    ...week9Guides,
    ...week10Guides,
    ...week11Guides,
    ...week12Guides,
    ...week13Guides,
    ...week14Guides,
    ...week15Guides,
}

// 课时测验汇总
export const kubernetesLessonQuizzes: Record<string, QuizQuestion[]> = {
    ...week1Quizzes,
    ...week2Quizzes,
    ...week3Quizzes,
    ...week4Quizzes,
    ...week5Quizzes,
    ...week6Quizzes,
    ...week7Quizzes,
    ...week8Quizzes,
    ...week9Quizzes,
    ...week10Quizzes,
    ...week11Quizzes,
    ...week12Quizzes,
    ...week13Quizzes,
    ...week14Quizzes,
    ...week15Quizzes,
}
