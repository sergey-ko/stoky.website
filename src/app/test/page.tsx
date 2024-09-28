"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="p-4 min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <h1 className="text-2xl mb-4">Theme Tester</h1>
      <p>Current theme: {theme}</p>
      <button 
        className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        Toggle theme
      </button>
    </div>
  )
}
