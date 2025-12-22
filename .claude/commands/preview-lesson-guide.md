# Preview Lesson Guide

预览已有的课时讲解内容，方便检查和参考。

## 使用说明

用法: `/preview-lesson-guide <roadmap> <lessonId>`

参数:
- `roadmap`: 学习路线 ID，如 `kubernetes` 或 `technical-writer`
- `lessonId`: 课时 ID，如 `w1-1`、`w9-2` 等

示例:
- `/preview-lesson-guide kubernetes w9-1` - 预览 Kubernetes w9-1 的讲解
- `/preview-lesson-guide technical-writer tw-w1-1` - 预览 Technical Writer tw-w1-1 的讲解

---

## 执行流程

1. 确定文件路径:
   - 从 lessonId 提取周数（如 `w9-1` → week 9）
   - 构建文件路径: `src/lib/lesson-guides/<roadmap>/week<N>.ts`

2. 读取并解析文件内容

3. 输出讲解和测验的结构化预览:

```markdown
## 课时: <lessonId> - <title>

### 背景补充 (Background)
1. ...
2. ...

### 重难点拆解 (Key Difficulties)
1. ...
2. ...

### 动手路径 (Hands-On Path)
1. ...
2. ...

### 自检问题 (Self Check)
1. ...
2. ...

### 扩展衍生 (Extensions)
1. ...
2. ...

### 来源 URL
- ...

---

### 测验题 (共 N 题)
1. Q: ...
   A: ...
   解析: ...
```

$ARGUMENTS
