import React from "react"
import { BottomNav, type BottomNavTab } from "./BottomNav"
import { MobileHeader } from "./MobileHeader"
import { useIsMobile } from "@/hooks/useMediaQuery"
import { cn } from "@/lib/utils"

interface AppShellProps {
  children: React.ReactNode
  page: "landing" | "roadmap"
  currentTab?: BottomNavTab
  onTabChange?: (tab: BottomNavTab) => void
  onHomeClick?: () => void
  roadmapTitle?: string
  rightAction?: React.ReactNode
  className?: string
}

export function AppShell({
  children,
  page,
  currentTab = "overview",
  onTabChange,
  onHomeClick,
  roadmapTitle,
  rightAction,
  className,
}: AppShellProps) {
  const isMobile = useIsMobile()
  const isRoadmapPage = page === "roadmap"

  return (
    <div className={cn("min-h-screen", className)}>
      {/* Mobile Header - only on roadmap page */}
      {isMobile && isRoadmapPage && roadmapTitle && (
        <MobileHeader
          title={roadmapTitle}
          onBack={onHomeClick}
          showBack={true}
          rightAction={rightAction}
        />
      )}

      {/* Main content */}
      <main
        className={cn(
          isMobile && isRoadmapPage && "pb-bottom-nav"
        )}
      >
        {children}
      </main>

      {/* Bottom Navigation - only on mobile and roadmap page */}
      {isMobile && isRoadmapPage && onTabChange && onHomeClick && (
        <BottomNav
          currentTab={currentTab}
          onTabChange={onTabChange}
          onHomeClick={onHomeClick}
          showHomeButton={true}
        />
      )}
    </div>
  )
}
