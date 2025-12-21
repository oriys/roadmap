import type { LessonGuide } from "../types"
import { week1Guides } from "./week1"
import { week2Guides } from "./week2"
import { week3Guides } from "./week3"
import { week4Guides } from "./week4"
import { week5Guides } from "./week5"
import { week6Guides } from "./week6"

// Week 1-8 guides will be imported and merged here
export const technicalWriterGuides: Record<string, LessonGuide> = {
    ...week1Guides,
    ...week2Guides,
    ...week3Guides,
    ...week4Guides,
    ...week5Guides,
    ...week6Guides,
}
