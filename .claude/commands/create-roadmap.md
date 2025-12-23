# Create Roadmap

从零开始创建一个新的学习路线（Roadmap）。

## 使用说明

用法: `/create-roadmap <roadmap-id> "<topic>"`

参数:
- `roadmap-id`: 路线的唯一标识符（小写字母，如 `kubernetes`、`technical-writer`、`golang`）
- `topic`: 学习主题描述（用引号包裹）

示例:
- `/create-roadmap golang "Go 语言从入门到精通"`
- `/create-roadmap devops "DevOps 工程师成长路线"`
- `/create-roadmap rust "Rust 系统编程"`

---

## 核心原则

1. **面向高智商受众**：内容要有深度，不要过度简化
2. **基于官方文档**：所有资源优先使用官方文档
3. **循序渐进**：从基础到高级，有清晰的学习路径
4. **实践导向**：每个主题都有动手实践的资源

---

## 执行流程

### 步骤 1: 需求分析

1. **确认主题范围**：
   - 这个主题的核心内容是什么？
   - 学习者需要什么前置知识？
   - 学完后能达到什么水平？

2. **研究行业标准**：
   使用 WebSearch 搜索：
   ```
   WebSearch(query: "<topic> learning roadmap best practices")
   WebSearch(query: "<topic> official documentation")
   WebSearch(query: "<topic> certification path")
   ```

3. **确定学习周期**：
   - 评估内容深度和广度
   - 建议每周 4 个主题（lessons）
   - 总周数通常在 8-16 周

### 步骤 2: 课程结构设计

设计分阶段的课程结构：

```typescript
// 典型的阶段划分
Stage 1: 基础入门（第 1-N 周）
Stage 2: 核心概念（第 N+1-M 周）
Stage 3: 进阶实践（第 M+1-P 周）
Stage 4: 高级主题（第 P+1-Q 周）
```

每个阶段（Stage）包含：
- `id`: 阶段 ID（如 `phase1`）
- `title`: 阶段标题
- `duration`: 时间范围（如 "第 1-4 周"）
- `goal`: 阶段目标

每周（Week）包含：
- `id`: 周 ID（如 `w1`）
- `title`: 周标题
- `summary`: 一句话概述
- `overview`: 详细概述
- `keyPoints`: 关键要点（3-4 个）
- `lessons`: 4 个具体课时

每个课时（Lesson）包含：
- `id`: 课时 ID（如 `w1-1`）
- `title`: 课时标题
- `detail`: 详细描述
- `resources`: 学习资源（2-4 个）

### 步骤 3: 为每个课时寻找资源 ⚠️ 关键步骤

**对于每个课时，必须使用 WebSearch 搜索官方文档和权威资源：**

```
WebSearch(query: "<lesson topic> official documentation")
WebSearch(query: "<lesson topic> tutorial guide")
```

**资源选择优先级：**
1. 官方文档（kubernetes.io, docs.docker.com, golang.org 等）
2. RFC/规范文档
3. 权威博客（CNCF, Linux Foundation, 官方博客）
4. 高质量教程（官方 GitHub repo）

**每个资源必须：**
- 使用 WebFetch 验证 URL 可访问
- 确认内容与课时主题相关
- 标题准确描述内容

### 步骤 4: 创建知识卡片

为整个路线创建 8-12 个知识卡片（KnowledgeCard）：

```typescript
{
    id: "card1",
    title: "核心概念名称",
    summary: "一句话概述",
    points: [
        "要点 1",
        "要点 2",
        "要点 3"
    ],
    practice: "动手实践建议"
}
```

知识卡片应覆盖：
- 核心概念和术语
- 关键架构和设计模式
- 最佳实践总结
- 常见问题解答

### 步骤 5: 创建综合考试题

为路线创建 20-30 道综合测验题：

```typescript
{
    id: "exam-q1",
    question: "问题描述",
    options: [
        "正确答案",
        "干扰项 A",
        "干扰项 B",
        "干扰项 C"
    ],
    answer: 0,  // 随机分布 0-3
    rationale: "答案解析和原因"
}
```

**出题要求：**
- 覆盖所有阶段的核心内容
- 答案位置随机分布（不要总是 0）
- 难度分布：30% 基础、50% 中等、20% 进阶

### 步骤 6: 生成 TypeScript 代码

在 `src/lib/roadmaps/<roadmap-id>.ts` 创建文件：

```typescript
import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const <roadmapId>Stages: Stage[] = [
    // 所有阶段定义
]

export const <roadmapId>Cards: KnowledgeCard[] = [
    // 所有知识卡片
]

export const <roadmapId>ExamQuestions: QuizQuestion[] = [
    // 所有考试题目
]

export const <roadmapId>Definition: RoadmapDefinition = {
    id: "<roadmap-id>",
    label: "<标签>",
    title: "<完整标题>",
    durationLabel: "X 周完整学习路线",
    description: "<路线描述>",
    heroBadge: "XX 周 · YY 主题",
    stages: <roadmapId>Stages,
    knowledgeCards: <roadmapId>Cards,
    examQuestions: <roadmapId>ExamQuestions,
    suggestion: (percent: number) => {
        if (percent >= 90) return "出色！你已经掌握了核心内容。"
        if (percent >= 70) return "不错！继续巩固薄弱环节。"
        if (percent >= 50) return "及格了，但还需要更多练习。"
        return "需要重新学习基础内容。"
    },
    resourceGuide: {
        environment: "推荐的学习环境配置",
        fallbackKeyPoints: [
            "通用学习要点 1",
            "通用学习要点 2",
        ],
        handsOnSteps: [
            "动手实践步骤 1",
            "动手实践步骤 2",
        ],
        selfChecks: [
            "自检问题 1",
            "自检问题 2",
        ],
        extensions: [
            "扩展学习方向 1",
            "扩展学习方向 2",
        ],
        lessonQuizAdvice: "测验建议"
    }
}
```

### 步骤 7: 更新路由和类型

1. **更新类型定义** `src/lib/types.ts`：
   ```typescript
   export type RoadmapId = "kubernetes" | "technical-writer" | "<new-roadmap-id>"
   ```

2. **更新路由映射** `src/lib/roadmaps/index.ts`：
   ```typescript
   import { <roadmapId>Definition } from "./<roadmap-id>"

   export const roadmaps: Record<RoadmapId, RoadmapDefinition> = {
       kubernetes: kubernetesDefinition,
       "technical-writer": technicalWriterDefinition,
       "<roadmap-id>": <roadmapId>Definition,
   }
   ```

3. **创建 lesson-guides 目录**：
   ```
   src/lib/lesson-guides/<roadmap-id>/
   ├── index.ts
   └── week1.ts (后续用 /generate-lesson-guide 生成)
   ```

### 步骤 8: 验证和构建

1. **运行构建检查**：
   ```bash
   pnpm build
   ```

2. **修复任何类型错误**

3. **提交代码**：
   ```bash
   git add -A
   git commit -m "feat(roadmap): add <roadmap-id> learning roadmap"
   git push
   ```

---

## 质量检查清单

### 结构检查
- [ ] 阶段划分合理，有清晰的进阶路径
- [ ] 每周 4 个课时，每课时 2-4 个资源
- [ ] 所有 ID 格式正确（w1-1, w1-2 等）

### 资源检查
- [ ] 所有 URL 已用 WebFetch 验证可访问
- [ ] 优先使用官方文档
- [ ] 资源标题准确描述内容

### 内容检查
- [ ] keyPoints 简洁有力（3-4 个要点）
- [ ] overview 概述清晰完整
- [ ] 知识卡片覆盖核心概念

### 代码检查
- [ ] TypeScript 类型正确
- [ ] 构建通过无错误
- [ ] 路由已正确配置

---

## 后续步骤

创建完 roadmap 后，使用以下命令生成详细的课程讲解：

```
/generate-lesson-guide <roadmap-id> 1
/generate-lesson-guide <roadmap-id> 2
...
```

建议：
- 每次生成一周的内容
- 生成后检查构建
- 提交后再继续下一周

$ARGUMENTS
