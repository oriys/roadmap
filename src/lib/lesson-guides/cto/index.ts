import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"
import { week1Guides, week1Quizzes } from "./week1"
import { week2Guides, week2Quizzes } from "./week2"
import { week3Guides, week3Quizzes } from "./week3"
import { week4Guides, week4Quizzes } from "./week4"
import { week5Guides, week5Quizzes } from "./week5"
import { week6Guides, week6Quizzes } from "./week6"

export interface LessonQuiz {
  lessonId: string
  questions: QuizQuestion[]
}

export const ctoGuides: Record<string, LessonGuide> = {
  ...week1Guides,
  ...week2Guides,
  ...week3Guides,
  ...week4Guides,
  ...week5Guides,
  ...week6Guides,
}

export const ctoLessonQuizzes: Record<string, QuizQuestion[]> = {
  ...week1Quizzes,
  ...week2Quizzes,
  ...week3Quizzes,
  ...week4Quizzes,
  ...week5Quizzes,
  ...week6Quizzes,
}
