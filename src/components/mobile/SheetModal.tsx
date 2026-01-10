import React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface SheetModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
  className?: string
}

export function SheetModal({
  isOpen,
  onClose,
  children,
  title,
  className,
}: SheetModalProps) {
  const sheetRef = React.useRef<HTMLDivElement>(null)
  const dragStartY = React.useRef(0)
  const currentY = React.useRef(0)
  const isDragging = React.useRef(false)

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleTouchStart = (e: React.TouchEvent) => {
    const target = e.target as HTMLElement
    if (target.closest(".sheet-handle-area")) {
      dragStartY.current = e.touches[0].clientY
      isDragging.current = true
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !sheetRef.current) return

    const deltaY = e.touches[0].clientY - dragStartY.current
    if (deltaY > 0) {
      currentY.current = deltaY
      sheetRef.current.style.transform = `translateY(${deltaY}px)`
      sheetRef.current.style.transition = "none"
    }
  }

  const handleTouchEnd = () => {
    if (!isDragging.current || !sheetRef.current) return
    isDragging.current = false

    sheetRef.current.style.transition = "transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)"

    if (currentY.current > 100) {
      sheetRef.current.style.transform = "translateY(100%)"
      setTimeout(onClose, 300)
    } else {
      sheetRef.current.style.transform = "translateY(0)"
    }
    currentY.current = 0
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-backdrop"
        onClick={onClose}
      />

      {/* Sheet */}
      <div
        ref={sheetRef}
        className={cn(
          "absolute bottom-0 left-0 right-0 bg-card rounded-t-2xl animate-slide-up",
          "max-h-[90vh] flex flex-col",
          className
        )}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Handle area */}
        <div className="sheet-handle-area pt-3 pb-2 cursor-grab active:cursor-grabbing">
          <div className="sheet-handle" />
        </div>

        {/* Header */}
        {title && (
          <div className="flex items-center justify-between px-4 pb-3 border-b border-border">
            <h2 className="text-lg font-semibold">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 -mr-2 rounded-full hover:bg-muted transition-colors touch-feedback"
            >
              <X className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
        )}

        {/* Content - extra padding at bottom to ensure content isn't covered */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-4 pt-4 pb-20 scroll-smooth-touch">
          {children}
        </div>
      </div>
    </div>
  )
}
