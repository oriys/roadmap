import { Home, Layers, Brain, GraduationCap } from "lucide-react"
import { cn } from "@/lib/utils"

export type BottomNavTab = "overview" | "knowledge" | "exam"

interface BottomNavProps {
  currentTab: BottomNavTab
  onTabChange: (tab: BottomNavTab) => void
  onHomeClick: () => void
  showHomeButton: boolean
}

const navItems = [
  { id: "home" as const, icon: Home, label: "首页" },
  { id: "overview" as const, icon: Layers, label: "概览" },
  { id: "knowledge" as const, icon: Brain, label: "知识" },
  { id: "exam" as const, icon: GraduationCap, label: "测验" },
] as const

export function BottomNav({
  currentTab,
  onTabChange,
  onHomeClick,
  showHomeButton,
}: BottomNavProps) {
  const handleClick = (id: string) => {
    if (id === "home") {
      onHomeClick()
    } else {
      onTabChange(id as BottomNavTab)
    }
  }

  const items = showHomeButton ? navItems : navItems.slice(1)

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/95 backdrop-blur-lg border-t border-border pb-safe">
      <div className="flex items-center justify-around h-16">
        {items.map((item) => {
          const isActive = item.id !== "home" && item.id === currentTab
          return (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={cn(
                "bottom-nav-item flex flex-col items-center justify-center gap-1 p-2 min-w-[64px] touch-feedback",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
              data-active={isActive}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
