import { customLessonQuizzes } from "./lesson-quizzes"
import { lessonOverviewMap } from "./lesson-overviews"
import type { Lesson, Week, Stage, QuizQuestion } from "./types"

export function getLessonOverview(lesson: Lesson): string | undefined {
    return lesson.overview || lessonOverviewMap[lesson.id.toLowerCase()]
}

export function hashToUint32(input: string): number {
    let hash = 2166136261
    for (let i = 0; i < input.length; i += 1) {
        hash ^= input.charCodeAt(i)
        hash = Math.imul(hash, 16777619)
    }
    return hash >>> 0
}

export function mulberry32(seed: number) {
    let state = seed >>> 0
    return () => {
        state += 0x6d2b79f5
        let t = state
        t = Math.imul(t ^ (t >>> 15), t | 1)
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }
}

export function shuffledOrder(length: number, seed: number): number[] {
    const order = Array.from({ length }, (_, idx) => idx)
    const rand = mulberry32(seed)
    for (let i = order.length - 1; i > 0; i -= 1) {
        const j = Math.floor(rand() * (i + 1))
        const tmp = order[i]
        order[i] = order[j]
        order[j] = tmp
    }
    return order
}

export function shuffleQuizOptions(question: QuizQuestion): QuizQuestion {
    if (question.options.length <= 1) return question
    const order = shuffledOrder(question.options.length, hashToUint32(question.id))
    const options = order.map((idx) => question.options[idx])
    const answer = order.indexOf(question.answer)
    if (answer === -1) return question
    return { ...question, options, answer }
}

export function createLessonQuiz(lesson: Lesson, week: Week, stage: Stage): QuizQuestion[] {
    const resTitle = lesson.resources[0]?.title || lesson.title
    const keyPoint =
        lesson.keyPoints?.[0] ||
        week.keyPoints?.[0] ||
        `如何将 ${lesson.title} 落地到 ${stage.goal.replace("目标：", "") || "业务场景"}`
    const verification = "按照官方/权威资料完成最小可行练习，并用输出/截图/测试/日志等证据验证结果"
    const baseline = lesson.detail
    const stageGoal = stage.goal
    const weekSummary = week.summary
    const practicePath = week.overview || week.summary || stage.goal
    const keyPointSecondary = lesson.keyPoints?.[1] || week.keyPoints?.[1] || stage.goal
    const successSignal = "输出/截图/测试结果与文档预期一致，且步骤可复现"
    return [
        {
            id: `${lesson.id}-what`,
            question: `官方文档聚焦的核心主题（What）是？`,
            options: [baseline, weekSummary, stageGoal, "与本节无关的内容"],
            answer: 0,
            rationale: `聚焦 ${lesson.title} 本身，来源：${resTitle}。`,
        },
        {
            id: `${lesson.id}-why`,
            question: `官方推荐在此阶段学习它的原因（Why）？`,
            options: [stageGoal, weekSummary, keyPoint, "仅为了演示，无生产价值"],
            answer: 0,
            rationale: `与阶段目标对齐，确保落地价值：${stageGoal}。`,
        },
        {
            id: `${lesson.id}-how`,
            question: `How：官方最小可行实践的正确验证方式？`,
            options: [verification, "只阅读不执行", "跳过验证直接上线", "等待他人验证"],
            answer: 0,
            rationale: "先跑通示例，再用可观察证据确认结果，形成可复制的闭环。",
        },
        {
            id: `${lesson.id}-risk`,
            question: `官方/生产常见风险如何排查？`,
            options: [
                "按层次检查前置条件/权限/配置/输入输出/边界条件，结合错误信息和示例定位",
                "先重启一切再说",
                "忽略告警，等待自愈",
                "只看局部现象，不回到文档与步骤复现",
            ],
            answer: 0,
            rationale: "按层次排查并回到文档/示例复现，是权威推荐的高效路径。",
        },
        {
            id: `${lesson.id}-resource`,
            question: `权威参考资料首选哪一个？`,
            options: [resTitle, "随机博客", "短视频碎片", "与主题无关的教程"],
            answer: 0,
            rationale: `优先使用官方/权威资料：${resTitle}。`,
        },
        {
            id: `${lesson.id}-ops`,
            question: `实操验收标准（How well）：哪种描述最符合官方示例？`,
            options: [
                "输出/截图/测试与官方示例一致，关键检查点通过",
                "未执行也算完成",
                "只要配置文件存在即可",
                "跳过验证",
            ],
            answer: 0,
            rationale: "以可观察证据为准，符合官方示例预期才算验收。",
        },
        {
            id: `${lesson.id}-path`,
            question: `动手实验的推荐路径或场景更接近哪段描述？`,
            options: [practicePath, stageGoal, "跳过实验只背诵概念", "只看第三方博客，不看官方示例"],
            answer: 0,
            rationale: `周概览/总结给出的实践路线最贴近官方建议：${practicePath}。`,
        },
        {
            id: `${lesson.id}-signal`,
            question: `完成实验后，什么信号最能证明配置/行为与文档一致？`,
            options: [
                successSignal,
                "只要界面显示 OK 就算成功，不看输出与验证步骤",
                "未验证直接删除资源",
                "只在本地记录命令，不关注实际输出",
            ],
            answer: 0,
            rationale: "需要用输出/截图/测试/日志等证据确认效果，而非仅凭状态值。",
        },
        {
            id: `${lesson.id}-key`,
            question: `下列哪条更能代表本节需要特别关注的关键点？`,
            options: [keyPoint, keyPointSecondary, weekSummary, "与主题无关的泛泛技巧"],
            answer: 0,
            rationale: `关键点来自周/节的重点提示：${keyPoint}。`,
        },
        {
            id: `${lesson.id}-handoff`,
            question: `本节成果如何与阶段目标衔接？`,
            options: [
                `把本节实践沉淀为模板/脚本，支撑“${stageGoal}”这一阶段目标`,
                "仅在本地做一次性尝试，与阶段目标无关",
                "跳过与后续周的关联",
                "只关注理论，不做落地",
            ],
            answer: 0,
            rationale: `阶段目标是学习顺序的依据，需将本节产出服务于：${stageGoal}。`,
        },
    ]
}

export function buildLessonQuizCanonical(lesson: Lesson, week: Week, stage: Stage): QuizQuestion[] {
    const minQuestions = 10
    const maxQuestions = 30
    const base = createLessonQuiz(lesson, week, stage)
    const custom = customLessonQuizzes[lesson.id] || []
    if (!custom.length) return base
    if (custom.length >= minQuestions) return custom.slice(0, maxQuestions)
    const customIds = new Set(custom.map((q) => q.id))
    const merged = [...custom, ...base.filter((q) => !customIds.has(q.id))]
    return merged.slice(0, minQuestions)
}

export function buildLessonQuiz(lesson: Lesson, week: Week, stage: Stage): QuizQuestion[] {
    return buildLessonQuizCanonical(lesson, week, stage).map(shuffleQuizOptions)
}
