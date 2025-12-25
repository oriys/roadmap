import { Moon, Sun, Cloud, Sunset, Sparkles, PartyPopper, TreePine, Star } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

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

    const getIcon = () => {
        switch (theme) {
            case "dark": return <Moon className="h-[1.2rem] w-[1.2rem]" />
            case "ocean": return <Cloud className="h-[1.2rem] w-[1.2rem]" />
            case "sunset": return <Sunset className="h-[1.2rem] w-[1.2rem]" />
            case "clean": return <Sparkles className="h-[1.2rem] w-[1.2rem]" />
            case "newyear": return <PartyPopper className="h-[1.2rem] w-[1.2rem]" />
            case "xmas": return <TreePine className="h-[1.2rem] w-[1.2rem]" />
            case "starry": return <Star className="h-[1.2rem] w-[1.2rem]" />
            default: return <Sun className="h-[1.2rem] w-[1.2rem]" />
        }
    }

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <Button variant="outline" size="icon" onClick={() => setIsOpen(!isOpen)}>
                {getIcon()}
                <span className="sr-only">Toggle theme</span>
            </Button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-popover shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 animate-in fade-in zoom-in-95 duration-200">
                    <div className="py-1">
                        <button
                            className="flex w-full items-center px-4 py-2 text-sm text-popover-foreground hover:bg-muted"
                            onClick={() => { setTheme("light"); setIsOpen(false) }}
                        >
                            <Sun className="mr-2 h-4 w-4" /> Light
                        </button>
                        <button
                            className="flex w-full items-center px-4 py-2 text-sm text-popover-foreground hover:bg-muted"
                            onClick={() => { setTheme("dark"); setIsOpen(false) }}
                        >
                            <Moon className="mr-2 h-4 w-4" /> Dark
                        </button>
                        <button
                            className="flex w-full items-center px-4 py-2 text-sm text-popover-foreground hover:bg-muted"
                            onClick={() => { setTheme("ocean"); setIsOpen(false) }}
                        >
                            <Cloud className="mr-2 h-4 w-4" /> Ocean
                        </button>
                        <button
                            className="flex w-full items-center px-4 py-2 text-sm text-popover-foreground hover:bg-muted"
                            onClick={() => { setTheme("sunset"); setIsOpen(false) }}
                        >
                            <Sunset className="mr-2 h-4 w-4" /> Sunset
                        </button>
                        <button
                            className="flex w-full items-center px-4 py-2 text-sm text-popover-foreground hover:bg-muted"
                            onClick={() => { setTheme("clean"); setIsOpen(false) }}
                        >
                            <Sparkles className="mr-2 h-4 w-4" /> Clean
                        </button>
                        <button
                            className="flex w-full items-center px-4 py-2 text-sm text-popover-foreground hover:bg-muted"
                            onClick={() => { setTheme("newyear"); setIsOpen(false) }}
                        >
                            <PartyPopper className="mr-2 h-4 w-4" /> New Year
                        </button>
                        <button
                            className="flex w-full items-center px-4 py-2 text-sm text-popover-foreground hover:bg-muted"
                            onClick={() => { setTheme("xmas"); setIsOpen(false) }}
                        >
                            <TreePine className="mr-2 h-4 w-4" /> Christmas
                        </button>
                        <button
                            className="flex w-full items-center px-4 py-2 text-sm text-popover-foreground hover:bg-muted"
                            onClick={() => { setTheme("starry"); setIsOpen(false) }}
                        >
                            <Star className="mr-2 h-4 w-4" /> Starry
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
