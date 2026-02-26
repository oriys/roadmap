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
import { jvmRoadmap } from "./jvm"
import { securityRoadmap } from "./security"
import { linuxRoadmap } from "./linux"
import { softSkillsRoadmap } from "./soft-skills"
import { mcpRoadmap } from "./mcp"
import { blockchainRoadmap } from "./blockchain"
import { openGatewayRoadmap } from "./open-platform-gateway"
import { ctoRoadmap } from "./cto"
import { machineLearningRoadmap } from "./machine-learning"
import { ecommerceRoadmap } from "./ecommerce"
import { dataStructuresAlgorithmsRoadmap } from "./data-structures-algorithms"
import { linuxKernelRoadmap } from "./linux-kernel"
import { investmentRoadmap } from "./investment"
import { productManagerRoadmap } from "./product-manager"
import { homeBuyingRoadmap } from "./home-buying"
import { javaFeaturesRoadmap } from "./java-features"
import { microservicesPatternsRoadmap } from "./microservices-patterns"
import { domainDrivenDesignRoadmap } from "./domain-driven-design"
import { multiTenantRoadmap } from "./multi-tenant"
import { pythonRoadmap } from "./python"
import { cloudDesignPatternsRoadmap } from "./cloud-design-patterns"
import { pulsarRoadmap } from "./pulsar"
import { grpcRoadmap } from "./grpc"
import { locksRoadmap } from "./locks"
import { techManagementRoadmap } from "./tech-management"
import { serverlessRoadmap } from "./serverless"
import { developmentAntiPatternsRoadmap } from "./development-anti-patterns"
import { redisRoadmap } from "./redis"
import { dockerRoadmap } from "./docker"
import { cicdRoadmap } from "./cicd"
import type { RoadmapDefinition, RoadmapId, RoadmapCategory } from "../types"

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
export * from "./jvm"
export * from "./security"
export * from "./linux"
export * from "./soft-skills"
export * from "./mcp"
export * from "./blockchain"
export * from "./open-platform-gateway"
export * from "./cto"
export * from "./machine-learning"
export * from "./ecommerce"
export * from "./data-structures-algorithms"
export * from "./linux-kernel"
export * from "./investment"
export * from "./product-manager"
export * from "./home-buying"
export * from "./java-features"
export * from "./microservices-patterns"
export * from "./domain-driven-design"
export * from "./multi-tenant"
export * from "./python"
export * from "./cloud-design-patterns"
export * from "./pulsar"
export * from "./grpc"
export * from "./locks"
export * from "./tech-management"
export * from "./serverless"
export * from "./development-anti-patterns"
export * from "./redis"
export * from "./docker"
export * from "./cicd"

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
  jvm: jvmRoadmap,
  security: securityRoadmap,
  linux: linuxRoadmap,
  "soft-skills": softSkillsRoadmap,
  mcp: mcpRoadmap,
  blockchain: blockchainRoadmap,
  "open-platform-gateway": openGatewayRoadmap,
  cto: ctoRoadmap,
  "machine-learning": machineLearningRoadmap,
  ecommerce: ecommerceRoadmap,
  "data-structures-algorithms": dataStructuresAlgorithmsRoadmap,
  "linux-kernel": linuxKernelRoadmap,
  investment: investmentRoadmap,
  "product-manager": productManagerRoadmap,
  "home-buying": homeBuyingRoadmap,
  "java-features": javaFeaturesRoadmap,
  "microservices-patterns": microservicesPatternsRoadmap,
  "domain-driven-design": domainDrivenDesignRoadmap,
  "multi-tenant": multiTenantRoadmap,
  python: pythonRoadmap,
  "cloud-design-patterns": cloudDesignPatternsRoadmap,
  pulsar: pulsarRoadmap,
  grpc: grpcRoadmap,
  locks: locksRoadmap,
  "tech-management": techManagementRoadmap,
  serverless: serverlessRoadmap,
  "development-anti-patterns": developmentAntiPatternsRoadmap,
  redis: redisRoadmap,
  docker: dockerRoadmap,
  cicd: cicdRoadmap,
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
  jvmRoadmap,
  securityRoadmap,
  linuxRoadmap,
  softSkillsRoadmap,
  mcpRoadmap,
  blockchainRoadmap,
  openGatewayRoadmap,
  ctoRoadmap,
  machineLearningRoadmap,
  ecommerceRoadmap,
  dataStructuresAlgorithmsRoadmap,
  linuxKernelRoadmap,
  investmentRoadmap,
  productManagerRoadmap,
  homeBuyingRoadmap,
  javaFeaturesRoadmap,
  microservicesPatternsRoadmap,
  domainDrivenDesignRoadmap,
  multiTenantRoadmap,
  pythonRoadmap,
  cloudDesignPatternsRoadmap,
  pulsarRoadmap,
  grpcRoadmap,
  locksRoadmap,
  techManagementRoadmap,
  serverlessRoadmap,
  developmentAntiPatternsRoadmap,
  redisRoadmap,
  dockerRoadmap,
  cicdRoadmap,
]
export const DEFAULT_ROADMAP_ID: RoadmapId = "kubernetes"

export const ROADMAP_CATEGORIES: { id: RoadmapCategory; label: string }[] = [
  { id: "all", label: "全部" },
  { id: "backend", label: "后端开发" },
  { id: "system-design", label: "系统设计" },
  { id: "devops", label: "DevOps" },
  { id: "ai-ml", label: "AI/ML" },
  { id: "career", label: "职业发展" },
  { id: "other", label: "其他" },
]

export const CATEGORY_MAP: Record<RoadmapId, RoadmapCategory> = {
  // Backend Development
  golang: "backend",
  "java-jvm": "backend",
  "java-features": "backend",
  jvm: "backend",
  "backend-performance-best-practices": "backend",
  database: "backend",
  "message-queue": "backend",
  grpc: "backend",
  locks: "backend",
  "microservices-patterns": "backend",
  "domain-driven-design": "backend",
  "multi-tenant": "backend",
  pulsar: "backend",
  python: "backend",
  // System Design
  "system-design": "system-design",
  "api-platform": "system-design",
  "open-platform-gateway": "system-design",
  ecommerce: "system-design",
  "cloud-design-patterns": "system-design",
  // DevOps
  kubernetes: "devops",
  "observability-sre": "devops",
  linux: "devops",
  "linux-kernel": "devops",
  security: "devops",
  serverless: "devops",
  // AI/ML
  "machine-learning": "ai-ml",
  mcp: "ai-ml",
  // Career
  "engineering-manager": "career",
  "senior-engineer-interview": "career",
  "soft-skills": "career",
  cto: "career",
  "product-manager": "career",
  "technical-writer": "career",
  "tech-management": "career",
  "development-anti-patterns": "system-design",
  redis: "backend",
  docker: "devops",
  cicd: "devops",
  // Other
  blockchain: "other",
  "data-structures-algorithms": "other",
  investment: "other",
  "home-buying": "other",
}
