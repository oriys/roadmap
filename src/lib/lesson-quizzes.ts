import { kubernetesQuizzes } from "./quizzes/kubernetes"
import { technicalWriterQuizzes } from "./quizzes/technical-writer"
import { apiPlatformLessonQuizzes } from "./lesson-guides/api-platform"
import type { QuizQuestion } from "./quizzes/types"

export type { QuizQuestion }

export const customLessonQuizzes: Record<string, QuizQuestion[]> = {
  ...kubernetesQuizzes,
  ...technicalWriterQuizzes,
  ...apiPlatformLessonQuizzes,
}
