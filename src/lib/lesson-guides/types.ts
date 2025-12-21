export interface LessonGuide {
    lessonId: string           // 关联课时 ID，如 "tw-w1-1"
    background: string[]       // 背景补充
    keyDifficulties: string[]  // 重难点拆解
    handsOnPath: string[]      // 动手路径
    selfCheck: string[]        // 自检/质询
    extensions: string[]       // 扩展与衍生
    sourceUrls: string[]       // 来源 URL（用于引用）
}
