import { kubernetesRoadmap } from "./kubernetes"
import { technicalWriterRoadmap } from "./technical-writer"
import { systemDesignRoadmap } from "./system-design"
import type { RoadmapDefinition, RoadmapId } from "../types"

export * from "./kubernetes"
export * from "./technical-writer"
export * from "./system-design"

export const ROADMAPS: Record<RoadmapId, RoadmapDefinition> = {
    kubernetes: kubernetesRoadmap,
    "technical-writer": technicalWriterRoadmap,
    "system-design": systemDesignRoadmap,
}

export const ROADMAP_LIST: RoadmapDefinition[] = [kubernetesRoadmap, technicalWriterRoadmap, systemDesignRoadmap]
export const DEFAULT_ROADMAP_ID: RoadmapId = "kubernetes"
