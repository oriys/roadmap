import type { Stage } from "@/lib/types"

export function roadmapTotals(stages: Stage[]) {
  let lessons = 0
  let weeks = 0

  stages.forEach((stage) => {
    weeks += stage.weeks.length
    stage.weeks.forEach((week) => {
      lessons += week.lessons.length
    })
  })

  return { lessons, weeks, stages: stages.length }
}

