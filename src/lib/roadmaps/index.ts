import { kubernetesRoadmap } from "./kubernetes"
import { technicalWriterRoadmap } from "./technical-writer"
import { systemDesignRoadmap } from "./system-design"
import { backendPerformanceRoadmap } from "./backend-performance"
import { apiPlatformRoadmap } from "./api-platform"
import { golangRoadmap } from "./golang"
import { engineeringManagerRoadmap } from "./engineering-manager"
import { seniorEngineerInterviewRoadmap } from "./senior-engineer-interview"
import { observabilitySreRoadmap } from "./observability-sre"
import { messageQueueRoadmap } from "./message-queue"
import { databaseRoadmap } from "./database"
import { javaJvmRoadmap } from "./java-jvm"
import { securityRoadmap } from "./security"
import { linuxRoadmap } from "./linux"
import { softSkillsRoadmap } from "./soft-skills"
import { mcpRoadmap } from "./mcp"
import { blockchainRoadmap } from "./blockchain"
import { openGatewayRoadmap } from "./open-platform-gateway"
import { ctoRoadmap } from "./cto"
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
export * from "./message-queue"
export * from "./database"
export * from "./java-jvm"
export * from "./security"
export * from "./linux"
export * from "./soft-skills"
export * from "./mcp"
export * from "./blockchain"
export * from "./open-platform-gateway"
export * from "./cto"

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
  "message-queue": messageQueueRoadmap,
  database: databaseRoadmap,
  "java-jvm": javaJvmRoadmap,
  security: securityRoadmap,
  linux: linuxRoadmap,
  "soft-skills": softSkillsRoadmap,
  mcp: mcpRoadmap,
  blockchain: blockchainRoadmap,
  "open-platform-gateway": openGatewayRoadmap,
  cto: ctoRoadmap,
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
  messageQueueRoadmap,
  databaseRoadmap,
  javaJvmRoadmap,
  securityRoadmap,
  linuxRoadmap,
  softSkillsRoadmap,
  mcpRoadmap,
  blockchainRoadmap,
  openGatewayRoadmap,
  ctoRoadmap,
]
export const DEFAULT_ROADMAP_ID: RoadmapId = "kubernetes"
