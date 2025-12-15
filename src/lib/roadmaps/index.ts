import { kubernetesRoadmap } from "./kubernetes"
import { gitGithubRoadmap } from "./git-github"
import { technicalWriterRoadmap } from "./technical-writer"
import type { RoadmapDefinition, RoadmapId } from "../types"

export * from "./kubernetes"
export * from "./git-github"
export * from "./technical-writer"

export const ROADMAPS: Record<RoadmapId, RoadmapDefinition> = {
    kubernetes: kubernetesRoadmap,
    "git-github": gitGithubRoadmap,
    "technical-writer": technicalWriterRoadmap,
}

export const ROADMAP_LIST: RoadmapDefinition[] = [kubernetesRoadmap, gitGithubRoadmap, technicalWriterRoadmap]
export const DEFAULT_ROADMAP_ID: RoadmapId = "kubernetes"
