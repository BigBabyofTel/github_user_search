"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"


export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    console.log(theme)

    return (
        <div>
            {(theme === "system" || theme === "light") ? (
                <Button onClick={() => setTheme("dark")} color="primary"
                variant="default"
                >Dark
                <Moon/>
                </Button>
            )  : (
                <Button  onClick={() => setTheme("light")} color="primary"  variant="default">Light
                    <Sun/>
                </Button>
            )
            }

        </div>

    )}