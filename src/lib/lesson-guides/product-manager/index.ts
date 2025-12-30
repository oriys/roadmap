import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"
import { week1Guides, week1Quizzes } from "./week1"
import { week2Guides, week2Quizzes } from "./week2"

// Lesson guides will be added here as they are generated
// Use /generate-lesson-guide product-manager <week> to generate each week's content

export const productManagerLessonGuides: Record<string, LessonGuide> = {
  ...week1Guides,
  ...week2Guides,
  // Week 3-12 lesson guides will be added here
}

export const productManagerQuizzes: Record<string, QuizQuestion[]> = {
  ...week1Quizzes,
  ...week2Quizzes,
  // Week 3-12 quizzes will be added here
}
