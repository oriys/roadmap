export function formatTopicLabel(title: string) {
  return title.replace(/^第\\s*\\d+\\s*周[:：]?\\s*/, "").trim() || title
}

export function displayTopicTitle(title: string, idx?: number) {
  const cleaned = formatTopicLabel(title)
  return idx != null ? `主题 ${idx + 1}：${cleaned}` : `主题：${cleaned}`
}

