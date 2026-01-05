import { kubernetesQuizzes } from "./quizzes/kubernetes"
import { technicalWriterQuizzes } from "./quizzes/technical-writer"
import { apiPlatformLessonQuizzes } from "./lesson-guides/api-platform"
import { golangLessonQuizzes } from "./lesson-guides/golang"
import { dataStructuresAlgorithmsLessonQuizzes } from "./lesson-guides/data-structures-algorithms"
import { productManagerLessonQuizzes } from "./lesson-guides/product-manager"
import { javaFeaturesLessonQuizzes } from "./lesson-guides/java-features"
import { pythonLessonQuizzes } from "./lesson-guides/python"
import { domainDrivenDesignLessonQuizzes } from "./lesson-guides/domain-driven-design"
import { backendPerformanceLessonQuizzes } from "./lesson-guides/backend-performance"
import { machineLearningLessonQuizzes } from "./lesson-guides/machine-learning"
import { systemDesignLessonQuizzes } from "./lesson-guides/system-design"
import { jvmLessonQuizzes } from "./lesson-guides/jvm"
import { ecommerceLessonQuizzes } from "./lesson-guides/ecommerce"
import { homeBuyingLessonQuizzes } from "./lesson-guides/home-buying"
import { investmentLessonQuizzes } from "./lesson-guides/investment"
import { microservicesPatternsLessonQuizzes } from "./lesson-guides/microservices-patterns"
import { multiTenantLessonQuizzes } from "./lesson-guides/multi-tenant"
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
  ...pythonLessonQuizzes,
  ...domainDrivenDesignLessonQuizzes,
  ...backendPerformanceLessonQuizzes,
  ...machineLearningLessonQuizzes,
  ...systemDesignLessonQuizzes,
  ...jvmLessonQuizzes,
  ...ecommerceLessonQuizzes,
  ...homeBuyingLessonQuizzes,
  ...investmentLessonQuizzes,
  ...microservicesPatternsLessonQuizzes,
  ...multiTenantLessonQuizzes,
}
