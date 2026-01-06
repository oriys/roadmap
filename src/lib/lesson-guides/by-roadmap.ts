import type { RoadmapId } from "@/lib/types"
import type { LessonGuide } from "@/lib/lesson-guides/types"

import { apiPlatformGuides } from "@/lib/lesson-guides/api-platform"
import { backendPerformanceGuides } from "@/lib/lesson-guides/backend-performance"
import { cloudDesignPatternsGuides } from "@/lib/lesson-guides/cloud-design-patterns"
import { dataStructuresAlgorithmsGuides } from "@/lib/lesson-guides/data-structures-algorithms"
import { domainDrivenDesignGuides } from "@/lib/lesson-guides/domain-driven-design"
import { ecommerceGuides } from "@/lib/lesson-guides/ecommerce"
import { golangGuides } from "@/lib/lesson-guides/golang"
import { homeBuyingGuides } from "@/lib/lesson-guides/home-buying"
import { javaFeaturesGuides } from "@/lib/lesson-guides/java-features"
import { jvmGuides } from "@/lib/lesson-guides/jvm"
import { kubernetesGuides } from "@/lib/lesson-guides/kubernetes"
import { machineLearningGuides } from "@/lib/lesson-guides/machine-learning"
import { microservicesPatternsGuides } from "@/lib/lesson-guides/microservices-patterns"
import { multiTenantGuides } from "@/lib/lesson-guides/multi-tenant"
import { productManagerGuides } from "@/lib/lesson-guides/product-manager"
import { pythonGuides } from "@/lib/lesson-guides/python"
import { systemDesignGuides } from "@/lib/lesson-guides/system-design"
import { technicalWriterGuides } from "@/lib/lesson-guides/technical-writer"
import { investmentGuides } from "@/lib/lesson-guides/investment"

type LessonGuideMap = Record<string, LessonGuide>

const LESSON_GUIDES_BY_ROADMAP_ID: Partial<Record<RoadmapId, LessonGuideMap>> = {
  "api-platform": apiPlatformGuides,
  "backend-performance-best-practices": backendPerformanceGuides,
  "cloud-design-patterns": cloudDesignPatternsGuides,
  "data-structures-algorithms": dataStructuresAlgorithmsGuides,
  "domain-driven-design": domainDrivenDesignGuides,
  ecommerce: ecommerceGuides,
  golang: golangGuides,
  "home-buying": homeBuyingGuides,
  investment: investmentGuides,
  "java-features": javaFeaturesGuides,
  jvm: jvmGuides,
  kubernetes: kubernetesGuides,
  "machine-learning": machineLearningGuides,
  "microservices-patterns": microservicesPatternsGuides,
  "multi-tenant": multiTenantGuides,
  "product-manager": productManagerGuides,
  python: pythonGuides,
  "system-design": systemDesignGuides,
  "technical-writer": technicalWriterGuides,
}

export function getLessonGuide(roadmapId: RoadmapId, lessonId: string): LessonGuide | undefined {
  return LESSON_GUIDES_BY_ROADMAP_ID[roadmapId]?.[lessonId]
}

