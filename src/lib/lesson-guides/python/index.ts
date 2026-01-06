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
import { week16Guides, week16Quizzes } from "./week16"
import { week17Guides, week17Quizzes } from "./week17"
import { week18Guides, week18Quizzes } from "./week18"
import { week19Guides, week19Quizzes } from "./week19"
import { week20Guides, week20Quizzes } from "./week20"
import { week21Guides, week21Quizzes } from "./week21"
import { week22Guides, week22Quizzes } from "./week22"
import { week23Guides, week23Quizzes } from "./week23"
import { week24Guides, week24Quizzes } from "./week24"

// 课时测验接口
export interface LessonQuiz {
    lessonId: string
    questions: QuizQuestion[]
}

// 讲解文档汇总（使用 /generate-lesson-guide python <week> 生成）
export const pythonGuides: Record<string, LessonGuide> = {
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
    ...week16Guides,
    ...week17Guides,
    ...week18Guides,
    ...week19Guides,
    ...week20Guides,
    ...week21Guides,
    ...week22Guides,
    ...week23Guides,
    ...week24Guides,
}

// 课时测验汇总
export const pythonLessonQuizzes: Record<string, QuizQuestion[]> = {
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
    ...week16Quizzes,
    ...week17Quizzes,
    ...week18Quizzes,
    ...week19Quizzes,
    ...week20Quizzes,
    ...week21Quizzes,
    ...week22Quizzes,
    ...week23Quizzes,
    ...week24Quizzes,
}
