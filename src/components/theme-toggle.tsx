import { Moon, Sun, Cloud, Sunset, Sparkles, PartyPopper, TreePine, Star, Gamepad2, type LucideIcon } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useTheme, type Theme } from "@/components/theme-provider"

type ThemeConfig = {
  id: Theme
  label: string
  icon: LucideIcon
}

const THEMES: ThemeConfig[] = [
  { id: "light", label: "Light", icon: Sun },
  { id: "dark", label: "Dark", icon: Moon },
  { id: "ocean", label: "Ocean", icon: Cloud },
  { id: "sunset", label: "Sunset", icon: Sunset },
  { id: "clean", label: "Clean", icon: Sparkles },
  { id: "newyear", label: "New Year", icon: PartyPopper },
  { id: "xmas", label: "Christmas", icon: TreePine },
  { id: "starry", label: "Starry", icon: Star },
  { id: "pixel", label: "Pixel", icon: Gamepad2 },
]

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const currentTheme = THEMES.find((t) => t.id === theme) || THEMES[0]
  const CurrentIcon = currentTheme.icon

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <Button variant="outline" size="icon" onClick={() => setIsOpen(!isOpen)}>
        <CurrentIcon className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-card border border-border shadow-lg focus:outline-none z-50 animate-in fade-in zoom-in-95 duration-200">
          <div className="py-1">
            {THEMES.map((themeConfig) => {
              const Icon = themeConfig.icon
              return (
                <button
                  key={themeConfig.id}
                  className="flex w-full items-center px-4 py-2 text-sm text-popover-foreground hover:bg-muted"
                  onClick={() => {
                    setTheme(themeConfig.id)
                    setIsOpen(false)
                  }}
                >
                  <Icon className="mr-2 h-4 w-4" /> {themeConfig.label}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
