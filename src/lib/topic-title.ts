// Remove "第X周：" prefix from topic title
export function formatTopicLabel(title: string) {
  return title.replace(/^第\s*\d+\s*周[:：]?\s*/, "").trim() || title
}

// Remove "第X阶段：" prefix from stage title
export function formatStageLabel(title: string) {
  return title.replace(/^第.+阶段[:：]?\s*/, "").trim() || title
}

// Get short lesson title (part before first colon)
export function formatLessonLabel(title: string) {
  const colonIdx = Math.min(
    title.indexOf("：") >= 0 ? title.indexOf("：") : Infinity,
    title.indexOf(":") >= 0 ? title.indexOf(":") : Infinity
  )
  return colonIdx < Infinity ? title.substring(0, colonIdx).trim() : title
}

// Display topic title with "主题 X：" prefix
export function displayTopicTitle(title: string, idx?: number) {
  const cleaned = formatTopicLabel(title)
  return idx != null ? `主题 ${idx + 1}：${cleaned}` : `主题：${cleaned}`
}

