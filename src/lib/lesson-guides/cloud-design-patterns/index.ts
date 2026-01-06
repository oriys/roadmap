import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

// 导入各周的讲解和测验
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

// 课时测验接口
export interface LessonQuiz {
    lessonId: string
    questions: QuizQuestion[]
}

// 讲解文档汇总（使用 /generate-lesson-guide 命令生成）
export const cloudDesignPatternsGuides: Record<string, LessonGuide> = {
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
}

// 课时测验汇总（使用 /generate-lesson-guide 命令生成）
export const cloudDesignPatternsLessonQuizzes: Record<string, QuizQuestion[]> = {
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
}
