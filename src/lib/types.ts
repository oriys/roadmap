export type Resource = { title: string; url: string }
export type Lesson = { id: string; title: string; detail: string; overview?: string; keyPoints?: string[]; resources: Resource[] }
export type Week = { id: string; title: string; summary: string; overview?: string; keyPoints?: string[]; lessons: Lesson[] }
export type Stage = { id: string; title: string; duration: string; goal: string; weeks: Week[] }
export type KnowledgeCard = { id: string; title: string; summary: string; points: string[]; practice: string }
export type QuizState = { answers: Record<string, number | undefined>; attempts: number; bestScore?: number; lastScore?: number }
export type LessonQuizState = { answers: Record<string, number | undefined>; attempts: number; bestScore?: number; lastScore?: number }
export type DocQuizProgress = Record<string, number[]>
export type ResourceContext = { resource: Resource; lesson: Lesson; week: Week; stage: Stage }

export type RoadmapId =
  | "kubernetes"
  | "technical-writer"
  | "system-design"
  | "backend-performance-best-practices"
  | "api-platform"
  | "engineering-manager"
  | "golang"
  | "senior-engineer-interview"
  | "observability-sre"
  | "message-queue"
  | "database"
  | "java-jvm"
  | "security"
  | "linux"
  | "soft-skills"
  | "blockchain"
  | "mcp"
  | "cto"
  | "open-platform-gateway"
  | "machine-learning"
  | "ecommerce"
  | "data-structures-algorithms"

// Improved QuizQuestion type to be more precise about undefined vs number
export type QuizQuestion = {
    id: string
    question: string
    options: string[]
    answer: number
    rationale: string
}

export type RoadmapDefinition = {
    id: RoadmapId
    label: string
    title: string
    durationLabel: string
    description: string
    heroBadge: string
    stages: Stage[]
    knowledgeCards: KnowledgeCard[]
    examQuestions: QuizQuestion[]
    suggestion: (percent: number) => string
    resourceGuide: {
        environment: string
        fallbackKeyPoints: string[]
        handsOnSteps: string[]
        selfChecks: string[]
        extensions: string[]
        lessonQuizAdvice: string
    }
}
