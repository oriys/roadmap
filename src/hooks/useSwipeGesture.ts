import { useRef, useCallback, useMemo } from "react"

interface SwipeGestureOptions {
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  threshold?: number
  enabled?: boolean
}

interface SwipeHandlers {
  onTouchStart: (e: React.TouchEvent) => void
  onTouchMove: (e: React.TouchEvent) => void
  onTouchEnd: (e: React.TouchEvent) => void
}

export function useSwipeGesture(options: SwipeGestureOptions): SwipeHandlers {
  const {
    onSwipeLeft,
    onSwipeRight,
    threshold = 50,
    enabled = true,
  } = options

  const startX = useRef(0)
  const startY = useRef(0)
  const isDragging = useRef(false)
  const isHorizontalSwipe = useRef<boolean | null>(null)

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (!enabled) return

      startX.current = e.touches[0].clientX
      startY.current = e.touches[0].clientY
      isDragging.current = true
      isHorizontalSwipe.current = null
    },
    [enabled]
  )

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!enabled || !isDragging.current) return

      const deltaX = e.touches[0].clientX - startX.current
      const deltaY = e.touches[0].clientY - startY.current

      // Determine swipe direction on first move
      if (isHorizontalSwipe.current === null) {
        const absX = Math.abs(deltaX)
        const absY = Math.abs(deltaY)

        // Need at least 10px movement to determine direction
        if (absX > 10 || absY > 10) {
          isHorizontalSwipe.current = absX > absY
        }
      }

      // If vertical scroll, cancel swipe detection
      if (isHorizontalSwipe.current === false) {
        isDragging.current = false
      }
    },
    [enabled]
  )

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!enabled || !isDragging.current || isHorizontalSwipe.current === false) {
        isDragging.current = false
        return
      }

      const deltaX = e.changedTouches[0].clientX - startX.current

      if (Math.abs(deltaX) > threshold) {
        if (deltaX > 0) {
          onSwipeRight?.()
        } else {
          onSwipeLeft?.()
        }
      }

      isDragging.current = false
      isHorizontalSwipe.current = null
    },
    [enabled, threshold, onSwipeLeft, onSwipeRight]
  )

  return useMemo(
    () => ({
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
    }),
    [handleTouchStart, handleTouchMove, handleTouchEnd]
  )
}
