import { pinyin, match } from "pinyin-pro"

/**
 * Check if query matches text (supports Chinese, pinyin, and pinyin initials)
 */
export function matchPinyin(text: string, query: string): boolean {
  if (!query || !text) return !query

  const lowerQuery = query.toLowerCase().trim()
  const lowerText = text.toLowerCase()

  // Direct match
  if (lowerText.includes(lowerQuery)) return true

  // Pinyin match (using pinyin-pro's match function)
  const matchResult = match(text, lowerQuery, { continuous: true })
  if (matchResult && matchResult.length > 0) return true

  // Full pinyin match
  const fullPinyin = pinyin(text, { toneType: "none", type: "array" }).join("")
  if (fullPinyin.includes(lowerQuery)) return true

  // Pinyin initials match
  const initials = pinyin(text, { pattern: "first", toneType: "none", type: "array" }).join("")
  if (initials.includes(lowerQuery)) return true

  return false
}

/**
 * Check if query matches any of the given texts
 */
export function matchAnyPinyin(texts: string[], query: string): boolean {
  return texts.some((text) => matchPinyin(text, query))
}
