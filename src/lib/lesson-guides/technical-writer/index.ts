import type { LessonGuide } from "../types"
import { week1Guides } from "./week1"
import { week2Guides } from "./week2"

// Week 1-8 guides will be imported and merged here
export const technicalWriterGuides: Record<string, LessonGuide> = {
    ...week1Guides,
    ...week2Guides,
}
