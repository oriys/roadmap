# Validate Lesson Guides

验证课时讲解内容的完整性和质量。

## 使用说明

用法: `/validate-lesson-guides <roadmap> [week]`

参数:
- `roadmap`: 学习路线 ID，如 `kubernetes` 或 `technical-writer`
- `week`: (可选) 周数。不指定则验证所有周

示例:
- `/validate-lesson-guides kubernetes` - 验证 Kubernetes 所有周的讲解
- `/validate-lesson-guides kubernetes 9` - 只验证第 9 周

---

## 验证项目

### 1. 结构完整性

检查每个课时是否包含所有必需字段:
- [ ] lessonId 存在且格式正确
- [ ] background 数组非空 (建议 4-6 条)
- [ ] keyDifficulties 数组非空 (建议 4-5 条)
- [ ] handsOnPath 数组非空 (建议 5-7 条)
- [ ] selfCheck 数组非空 (建议 5-8 条)
- [ ] extensions 数组非空 (建议 4-5 条)
- [ ] sourceUrls 数组非空

### 2. 测验题质量

检查每个课时的测验题:
- [ ] 题目数量在 10-15 道之间
- [ ] Quiz ID 格式正确: `<lessonId>-q<number>`
- [ ] 每题有 4 个选项
- [ ] answer 值在 0-3 范围内
- [ ] rationale 非空

### 3. 内容一致性

检查与路线定义的一致性:
- [ ] 所有路线定义中的课时都有对应的讲解
- [ ] lessonId 与路线定义匹配
- [ ] 没有多余的讲解（不在路线定义中的课时）

### 4. 链接有效性

验证 sourceUrls 中的链接:
- [ ] URL 格式正确
- [ ] 链接可访问（可选，需要网络请求）

---

## 输出格式

```markdown
# 验证报告: <roadmap>

## 摘要
- 检查周数: N
- 检查课时: N
- 发现问题: N

## 详细结果

### Week 1
- ✅ w1-1: 通过所有检查
- ⚠️ w1-2: background 只有 2 条 (建议 4-6 条)
- ❌ w1-3: 缺少测验题

### Week 2
...

## 建议修复
1. w1-2: 补充 background 内容
2. w1-3: 添加 10-15 道测验题
```

$ARGUMENTS
