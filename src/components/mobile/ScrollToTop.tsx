import React from "react"
import { ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface ScrollToTopProps {
  threshold?: number
  className?: string
}

export function ScrollToTop({ threshold = 300, className }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Check initial position

    return () => window.removeEventListener("scroll", handleScroll)
  }, [threshold])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed z-40 p-3 rounded-full bg-primary text-primary-foreground shadow-lg",
        "transition-all duration-300 touch-feedback",
        "hover:scale-105 active:scale-95",
        "bottom-20 right-4 md:bottom-6 md:right-6",
        className
      )}
      aria-label="返回顶部"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  )
}
