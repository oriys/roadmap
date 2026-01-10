import React from "react"
import { useSwipeGesture } from "@/hooks/useSwipeGesture"
import { cn } from "@/lib/utils"

interface SwipeContainerProps {
  children: React.ReactNode
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  threshold?: number
  enabled?: boolean
  className?: string
}

export function SwipeContainer({
  children,
  onSwipeLeft,
  onSwipeRight,
  threshold = 50,
  enabled = true,
  className,
}: SwipeContainerProps) {
  const swipeHandlers = useSwipeGesture({
    onSwipeLeft,
    onSwipeRight,
    threshold,
    enabled,
  })

  return (
    <div className={cn("touch-pan-y", className)} {...swipeHandlers}>
      {children}
    </div>
  )
}
