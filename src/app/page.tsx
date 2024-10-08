"use client"

import { Hero } from "@/components/hero/Hero"
import { Features } from "@/components/features/sections/Features"
import { RealTimeData } from "@/components/features/sections/RealTimeData"
import { BestPractices } from "@/components/features/sections/BestPractices"
import { SubscriptionPlans } from "@/components/features/pricing/SubscriptionPlans"
import { PlatformCards } from "@/components/features/sections/PlatformCards"
import { Testimonials } from "@/components/features/sections/Testimonials"
import { CallToAction } from "@/components/features/marketing/CallToAction"
import { FAQ } from "@/components/info/FAQ"
import { Footer } from "@/components/ui/layout/Footer"
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Home() {

  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (theme === 'system' || theme === 'light') {
      setTheme('dark')
    }
  }, [theme, setTheme])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      {/*<div className="p-4">
        <p className="mb-2">Current theme: {theme}</p>
        <button 
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          Toggle theme
        </button>
      </div>*/}

      <Hero />
      {/*<Features />*/}
      {/* <RealTimeData /> */}
      <BestPractices />
      <SubscriptionPlans />
      <PlatformCards />
      <Testimonials />
      <CallToAction />
      <FAQ />
      <Footer />
    </main>
  )
}
