"use client"

import { Hero } from "@/components/Hero"
import { Features } from "@/components/Features"
import { RealTimeData } from "@/components/RealTimeData"
import { BestPractices } from "@/components/BestPractices"
import { SubscriptionPlans } from "@/components/SubscriptionPlans"
import { PlatformCards } from "@/components/PlatformCards"
import { Testimonials } from "@/components/Testimonials"
import { CallToAction } from "@/components/CallToAction"
import { FAQ } from "@/components/FAQ"
import { Footer } from "@/components/Footer"
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Home() {

  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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
