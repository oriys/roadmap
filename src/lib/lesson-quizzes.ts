import { kubernetesQuizzes } from "./quizzes/kubernetes"
import { technicalWriterQuizzes } from "./quizzes/technical-writer"
import { apiPlatformLessonQuizzes } from "./lesson-guides/api-platform"
import { golangLessonQuizzes } from "./lesson-guides/golang"
import { dataStructuresAlgorithmsLessonQuizzes } from "./lesson-guides/data-structures-algorithms"
import { productManagerLessonQuizzes } from "./lesson-guides/product-manager"
import { javaFeaturesLessonQuizzes } from "./lesson-guides/java-features"
import type { QuizQuestion } from "./quizzes/types"

export type { QuizQuestion }

export const customLessonQuizzes: Record<string, QuizQuestion[]> = {
  ...kubernetesQuizzes,
  ...technicalWriterQuizzes,
  ...apiPlatformLessonQuizzes,
  ...golangLessonQuizzes,
  ...dataStructuresAlgorithmsLessonQuizzes,
  ...productManagerLessonQuizzes,
  ...javaFeaturesLessonQuizzes,
}
