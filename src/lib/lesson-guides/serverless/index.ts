import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

// 课时测验接口
export interface LessonQuiz {
    lessonId: string
    questions: QuizQuestion[]
}

// 讲解文档汇总（使用 /generate-lesson-guide serverless <week> 生成）
export const serverlessGuides: Record<string, LessonGuide> = {}

// 课时测验汇总
export const serverlessLessonQuizzes: Record<string, QuizQuestion[]> = {}
