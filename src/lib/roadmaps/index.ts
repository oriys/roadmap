import { kubernetesRoadmap } from "./kubernetes"
import { technicalWriterRoadmap } from "./technical-writer"
import { systemDesignRoadmap } from "./system-design"
import { backendPerformanceRoadmap } from "./backend-performance"
import { apiPlatformRoadmap } from "./api-platform"
import { golangRoadmap } from "./golang"
import { engineeringManagerRoadmap } from "./engineering-manager"
import { seniorEngineerInterviewRoadmap } from "./senior-engineer-interview"
import { observabilitySreRoadmap } from "./observability-sre"
import type { RoadmapDefinition, RoadmapId } from "../types"

export * from "./kubernetes"
export * from "./technical-writer"
export * from "./system-design"
export * from "./backend-performance"
export * from "./api-platform"
export * from "./golang"
export * from "./engineering-manager"
export * from "./senior-engineer-interview"
export * from "./observability-sre"

export const ROADMAPS: Record<RoadmapId, RoadmapDefinition> = {
  kubernetes: kubernetesRoadmap,
  "technical-writer": technicalWriterRoadmap,
  "system-design": systemDesignRoadmap,
  "backend-performance-best-practices": backendPerformanceRoadmap,
  "api-platform": apiPlatformRoadmap,
  "engineering-manager": engineeringManagerRoadmap,
  golang: golangRoadmap,
  "senior-engineer-interview": seniorEngineerInterviewRoadmap,
  "observability-sre": observabilitySreRoadmap,
}

export const ROADMAP_LIST: RoadmapDefinition[] = [
  kubernetesRoadmap,
  technicalWriterRoadmap,
  systemDesignRoadmap,
  backendPerformanceRoadmap,
  apiPlatformRoadmap,
  engineeringManagerRoadmap,
  golangRoadmap,
  seniorEngineerInterviewRoadmap,
  observabilitySreRoadmap,
]
export const DEFAULT_ROADMAP_ID: RoadmapId = "kubernetes"
