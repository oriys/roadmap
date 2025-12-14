import raw from "../../lesson_overviews.md?raw"

export type LessonOverviewMap = Record<string, string>

function parseLessonOverviews(content: string): LessonOverviewMap {
  const map: LessonOverviewMap = {}
  content.split(/\r?\n/).forEach((line) => {
    const match = line.match(/^-+\s+(w\d+-\d+)\s+[^：]+：\s*(.+)$/i)
    if (!match) return
    const id = match[1].toLowerCase()
    const overview = match[2].trim().replace(/`([^`]+)`/g, "$1")
    map[id] = overview
  })
  return map
}

export const lessonOverviewMap: LessonOverviewMap = parseLessonOverviews(raw)
