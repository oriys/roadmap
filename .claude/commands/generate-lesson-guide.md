# Generate Lesson Guide

根据学习路线的 topic 文档生成详细准确的文档讲解和测验题目。

**核心原则：必须阅读所有文档，基于文档内容生成讲解和出题。**

## 使用说明

用法: `/generate-lesson-guide <roadmap> <week> [lessonId]`

参数:
- `roadmap`: 学习路线 ID，如 `kubernetes` 或 `technical-writer`
- `week`: 周数，如 `1`、`2` 等
- `lessonId`: (可选) 具体课时 ID，如 `w1-1`。不指定则处理该周所有课时

示例:
- `/generate-lesson-guide kubernetes 1` - 生成 Kubernetes 第 1 周所有课时的讲解
- `/generate-lesson-guide kubernetes 1 w1-1` - 只生成 w1-1 课时的讲解

---

## 执行流程

### 步骤 1: 读取路线定义

1. 读取路线定义文件:
   - Kubernetes: `src/lib/roadmaps/kubernetes.ts`
   - Technical Writer: `src/lib/roadmaps/technical-writer.ts`

2. 读取类型定义: `src/lib/lesson-guides/types.ts`

3. 从路线定义中提取目标周的课时信息:
   ```typescript
   type Lesson = {
     id: string           // 如 "w1-1"
     title: string        // 课时标题
     detail: string       // 课时描述
     resources: Resource[] // 文档链接列表 ← 关键！
   }
   type Resource = { title: string; url: string }
   ```

### 步骤 2: 阅读所有课程文档 ⚠️ 关键步骤

**对于每个课时，必须使用 WebFetch 工具读取其 `resources` 中的所有文档 URL。**

例如，w1-1 课时有以下文档：
```typescript
resources: [
  { title: "namespaces man7", url: "https://man7.org/linux/man-pages/man7/namespaces.7.html" },
  { title: "Linux namespaces 指南", url: "https://docs.kernel.org/admin-guide/namespaces/index.html" },
  { title: "Play with Docker", url: "https://www.docker.com/play-with-docker/" },
]
```

**必须执行：**
```
WebFetch(url: "https://man7.org/linux/man-pages/man7/namespaces.7.html", prompt: "提取关于 Linux namespaces 的关键概念、类型、用法和重要细节")
WebFetch(url: "https://docs.kernel.org/admin-guide/namespaces/index.html", prompt: "提取 namespaces 的内核级文档要点")
WebFetch(url: "https://www.docker.com/play-with-docker/", prompt: "了解这个工具的用途和特点")
```

#### 处理失效文档 ⚠️ 重要

如果 WebFetch 返回错误（404、无法访问、内容为空等），执行以下步骤：

1. **搜索替代文档**：
   ```
   WebSearch(query: "<文档标题> <相关技术> official documentation")
   ```
   例如：
   ```
   WebSearch(query: "Linux namespaces official documentation kernel")
   WebSearch(query: "Docker Play with Docker online playground")
   ```

2. **验证新文档**：
   - 使用 WebFetch 读取搜索到的新 URL
   - 确认内容与原文档主题相符
   - 优先选择官方文档或权威来源

3. **更新路线定义文件**：
   使用 Edit 工具更新 `src/lib/roadmaps/<roadmap>.ts` 中的失效 URL：
   ```typescript
   // 将失效的 URL
   { title: "旧标题", url: "https://old-invalid-url.com" }
   // 替换为
   { title: "新标题", url: "https://new-valid-url.com" }
   ```

4. **记录替换信息**：
   在输出中说明：
   - 哪些文档失效
   - 替换成了什么新文档
   - 新文档的来源和理由

**搜索替代文档的优先级**：
1. 同一来源的更新链接（如 docs.docker.com 的新路径）
2. 官方文档（kubernetes.io, docs.docker.com, kernel.org 等）
3. 权威技术博客（CNCF, Linux Foundation 等）
4. 高质量教程（官方 GitHub repo 的 README）

**从每个文档中提取：**
- 核心概念和定义
- 技术术语和解释
- 重要参数和配置
- 最佳实践和注意事项
- 常见问题和解决方案
- 具体的命令、代码示例

### 步骤 3: 基于文档内容生成 LessonGuide

**所有内容必须来源于步骤 2 阅读的文档，不能凭空编造！**

```typescript
{
    lessonId: string,           // 如 "w1-1"
    background: string[],       // 基于文档的背景知识（4-6 条）
    keyDifficulties: string[],  // 文档中的重难点（4-5 条）
    handsOnPath: string[],      // 文档中的实践步骤（5-7 条）
    selfCheck: string[],        // 基于文档的自检问题（5-8 条）
    extensions: string[],       // 文档提及的扩展内容（4-5 条）
    sourceUrls: string[]        // 来源 URL 列表（直接使用 resources 中的 URL）
}
```

#### 内容生成要求

**background (背景补充)** - 必须来自文档：
- 提取文档中对核心概念的定义和解释
- 引用文档中提到的设计原理和动机
- 总结文档中的关键术语和分类
- 每条应标注来源文档

**keyDifficulties (重难点拆解)** - 必须来自文档：
- 识别文档中强调的注意事项
- 提取文档中的常见陷阱和误区
- 总结文档中的对比说明（如 v1 vs v2）
- 归纳文档中的权衡考量

**handsOnPath (动手路径)** - 必须来自文档：
- 直接使用文档中的命令示例
- 按文档建议的顺序组织步骤
- 包含文档中的配置示例
- 引用文档中的验证方法

**selfCheck (自检问题)** - 基于文档内容设计：
- 针对文档中的关键概念提问
- 涵盖文档中的重要细节
- 问题答案必须能在文档中找到

**extensions (扩展衍生)** - 来自文档：
- 文档中提到的相关主题
- 文档中的进阶内容链接
- 文档建议的后续学习方向

**sourceUrls** - 直接使用：
- 直接复制课时 resources 中的所有 URL

### 步骤 4: 基于文档出测验题 ⚠️ 关键步骤

**测验题目必须基于步骤 2 阅读的文档内容，确保：**
1. 每道题的正确答案都能在文档中找到依据
2. 题目覆盖文档中的关键知识点
3. 不出文档未提及的内容

为每个课时生成 10-15 道测验题：

```typescript
{
    id: "<lessonId>-q<number>",  // 如 "w1-1-q1"
    question: string,            // 基于文档内容的题目
    options: string[],           // 4 个选项
    answer: number,              // 正确答案索引 (0-3)
    rationale: string            // 解析，说明文档中的依据
}
```

#### 出题原则

1. **文档覆盖**：
   - 每个文档至少出 2-3 道题
   - 确保所有重要概念都有对应题目
   - 题目内容必须能在文档中验证

2. **题目类型分布**：
   - 3-4 道概念定义题（文档中的术语解释）
   - 4-5 道理解应用题（文档中的原理说明）
   - 3-4 道实践操作题（文档中的命令/配置）
   - 2-3 道对比分析题（文档中的差异说明）

3. **选项设计**：
   - 正确答案放在第一个位置 (answer: 0)
   - 错误选项基于文档中的相关但不同的概念
   - 避免明显错误的干扰项

4. **解析说明**：
   - 引用文档中的原文或要点
   - 说明为什么正确答案对应文档内容
   - 指出其他选项的问题

### 步骤 5: 输出结果

生成完整的 TypeScript 文件：

```typescript
import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week<N>Guides: Record<string, LessonGuide> = {
    "<lessonId>": {
        lessonId: "<lessonId>",
        background: [
            "【来源: 文档1】核心概念说明...",
            "【来源: 文档2】设计原理解释...",
            // ...
        ],
        keyDifficulties: [...],
        handsOnPath: [...],
        selfCheck: [...],
        extensions: [...],
        sourceUrls: ["url1", "url2", ...]
    },
    // ... 更多课时
}

export const week<N>Quizzes: Record<string, QuizQuestion[]> = {
    "<lessonId>": [
        {
            id: "<lessonId>-q1",
            question: "根据文档，...",
            options: [...],
            answer: 0,
            rationale: "文档中明确指出..."
        },
        // ... 10-15 道题
    ],
    // ... 更多课时
}
```

---

## 质量检查清单

### 文档阅读检查
- [ ] 该课时的所有 resources URL 都已用 WebFetch 读取
- [ ] 从每个文档提取了关键信息
- [ ] 记录了文档中的命令、配置示例

### 失效文档处理检查
- [ ] 所有失效的 URL 都已用 WebSearch 找到替代
- [ ] 新文档已通过 WebFetch 验证可访问
- [ ] 已使用 Edit 更新 `src/lib/roadmaps/<roadmap>.ts` 中的失效 URL
- [ ] 输出中记录了所有替换信息

### 内容生成检查
- [ ] background 内容都能在文档中找到来源
- [ ] keyDifficulties 来自文档中的重点说明
- [ ] handsOnPath 使用了文档中的实际命令
- [ ] selfCheck 问题可用文档内容回答
- [ ] sourceUrls 包含所有 resources 的 URL

### 测验题检查
- [ ] 每道题的答案都能在文档中验证
- [ ] 题目覆盖了文档的主要内容
- [ ] 10-15 道题，难度分布合理
- [ ] Quiz ID 格式正确: `<lessonId>-q<number>`
- [ ] answer 始终为 0（正确答案在第一位）
- [ ] rationale 引用了文档依据

---

## 参考示例

查看现有讲解：
- `src/lib/lesson-guides/kubernetes/week9.ts` - CI/CD 周示例
- `src/lib/lesson-guides/kubernetes/week1.ts` - 容器基础示例

$ARGUMENTS
