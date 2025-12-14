import raw from "../../lesson_quizzes.md?raw"

export type DocQuestionMap = Record<string, string[]>

function parseDocQuestions(content: string): DocQuestionMap {
  const map: DocQuestionMap = {}
  let currentId: string | null = null
  content.split(/\r?\n/).forEach((line) => {
    const heading = line.match(/^##\s+(w\d+-\d+)/i)
    if (heading) {
      currentId = heading[1].toLowerCase()
      if (!map[currentId]) map[currentId] = []
      return
    }
    const q = line.match(/^\d+\.\s*(.+)$/)
    if (q && currentId) {
      map[currentId].push(q[1].trim())
    }
  })
  return map
}

export const docQuestionMap: DocQuestionMap = parseDocQuestions(raw)
