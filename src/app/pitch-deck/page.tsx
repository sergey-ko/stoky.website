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
    ProblemSlide, SolutionSlide, MarketOpportunitySlide, ProductSlide,
    BusinessModelSlide, TractionSlide, GoToMarketSlide, TeamSlide,
    FinancialProjectionsSlide, AskSlide
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-pitch-primary">Pitch Deck</h1>
        <div className="space-y-16">
          {slides.map((Slide, index) => (
            <div key={index} className="aspect-[16/9] w-[90%] mx-auto bg-gray-800 rounded-lg">
              <Slide />
            </div>
          ))}
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default PitchDeckPage;