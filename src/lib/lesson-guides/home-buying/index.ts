import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

// 课时测验接口
export interface LessonQuiz {
    lessonId: string
    questions: QuizQuestion[]
}

// 讲解文档汇总（待使用 /generate-lesson-guide 生成）
export const homeBuyingGuides: Record<string, LessonGuide> = {
}

// 课时测验汇总（待使用 /generate-lesson-guide 生成）
export const homeBuyingLessonQuizzes: Record<string, QuizQuestion[]> = {
}
