import { kubernetesQuizzes } from "./quizzes/kubernetes";
import { technicalWriterQuizzes } from "./quizzes/technical-writer";
import { gitGithubQuizzes } from "./quizzes/git-github";
import type { QuizQuestion } from "./quizzes/types";

export type { QuizQuestion };

export const customLessonQuizzes: Record<string, QuizQuestion[]> = {
  ...kubernetesQuizzes,
  ...technicalWriterQuizzes,
  ...gitGithubQuizzes,
};
