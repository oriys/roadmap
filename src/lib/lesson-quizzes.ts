import { kubernetesQuizzes } from "./quizzes/kubernetes"
import { technicalWriterQuizzes } from "./quizzes/technical-writer"
import type { QuizQuestion } from "./quizzes/types"

export type { QuizQuestion }

export const customLessonQuizzes: Record<string, QuizQuestion[]> = {
  ...kubernetesQuizzes,
  ...technicalWriterQuizzes,
}
