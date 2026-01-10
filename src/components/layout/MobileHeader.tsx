import { ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

interface MobileHeaderProps {
  title: string
  subtitle?: string
  onBack?: () => void
  showBack?: boolean
  rightAction?: React.ReactNode
  className?: string
}

export function MobileHeader({
  title,
  subtitle,
  onBack,
  showBack = true,
  rightAction,
  className,
}: MobileHeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 md:hidden bg-card/95 backdrop-blur-lg border-b border-border pt-safe",
        className
      )}
    >
      <div className="flex items-center h-14 px-4">
        {/* Back button */}
        {showBack && onBack && (
          <button
            onClick={onBack}
            className="p-2 -ml-2 mr-2 rounded-full hover:bg-muted transition-colors touch-feedback"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
        )}

        {/* Title area */}
        <div className="flex-1 min-w-0">
          <h1 className="text-base font-semibold truncate">{title}</h1>
          {subtitle && (
            <p className="text-xs text-muted-foreground truncate">{subtitle}</p>
          )}
        </div>

        {/* Right action */}
        {rightAction && <div className="ml-2">{rightAction}</div>}
      </div>
    </header>
  )
}
