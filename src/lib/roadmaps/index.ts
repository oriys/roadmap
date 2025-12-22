import { kubernetesRoadmap } from "./kubernetes"
import { technicalWriterRoadmap } from "./technical-writer"
import type { RoadmapDefinition, RoadmapId } from "../types"

export * from "./kubernetes"
export * from "./technical-writer"

export const ROADMAPS: Record<RoadmapId, RoadmapDefinition> = {
    kubernetes: kubernetesRoadmap,
    "technical-writer": technicalWriterRoadmap,
}

export const ROADMAP_LIST: RoadmapDefinition[] = [kubernetesRoadmap, technicalWriterRoadmap]
export const DEFAULT_ROADMAP_ID: RoadmapId = "kubernetes"
