'use client'

import React from 'react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import ProblemSlide from '@/components/pitch-deck/ProblemSlide';
import SolutionSlide from '@/components/pitch-deck/SolutionSlide';
import MarketOpportunitySlide from '@/components/pitch-deck/MarketOpportunitySlide';
import ProductSlide from '@/components/pitch-deck/ProductSlide';
import BusinessModelSlide from '@/components/pitch-deck/BusinessModelSlide';
import TractionSlide from '@/components/pitch-deck/TractionSlide';
import GoToMarketSlide from '@/components/pitch-deck/GoToMarketSlide';
import TeamSlide from '@/components/pitch-deck/TeamSlide';
import FinancialProjectionsSlide from '@/components/pitch-deck/FinancialProjectionsSlide';
import AskSlide from '@/components/pitch-deck/AskSlide';
import Slide from '@/components/pitch-deck/slide';
import IntroSlide from '@/components/pitch-deck/Intro';
const PitchDeckPage: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (theme === 'system' || theme === 'light') {
      setTheme('dark')
    }
  }, [theme, setTheme])

  if (!mounted) return null

  const slides = [
    { title: "Intro", Content: IntroSlide },
    { title: "Current Trading Platforms Stuck in 90s", Content: ProblemSlide },
    { title: "Bridging the Gap between Graph and Quant Platforms", Content: SolutionSlide },
    { title: "Tap into a Multi-Billion-Dollar Market", Content: MarketOpportunitySlide },
    { title: "Simple, yet powerful trading tool", Content: ProductSlide },
    { title: "Subscription based revenue model", Content: BusinessModelSlide },
    { title: "Growing user base with strong retention", Content: TractionSlide },
    { title: "Targeting retail traders and hobby quants", Content: GoToMarketSlide },
    { title: "Experienced Team With Deep Expertise", Content: TeamSlide },
    { title: "Strong revenue growth potential", Content: FinancialProjectionsSlide },
    { title: "Join Us in Revolutionizing Trading", Content: AskSlide }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="container mx-auto py-8">
        {/* <h1 className="text-4xl font-bold mb-8 text-center text-pitch-primary">Pitch Deck</h1> */}
        <div className="space-y-16">
          {slides.map(({ title, Content }, index) => (
            <Slide key={index} title={title} content={<Content />} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default PitchDeckPage;