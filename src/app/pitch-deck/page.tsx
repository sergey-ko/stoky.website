'use client'

import '@/utils/chartConfig';
import React from 'react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import SolutionSlide from '@/components/pitch-deck/SolutionSlide';
import MarketOpportunitySlide from '@/components/pitch-deck/MarketOpportunitySlide';
import ProductSlide from '@/components/pitch-deck/ProductSlide';
import BusinessModelSlide from '@/components/pitch-deck/BusinessModelSlide';
import TractionSlide from '@/components/pitch-deck/TractionSlide';
import GoToMarketSlide from '@/components/pitch-deck/GoToMarketSlide';
import TeamSlide from '@/components/pitch-deck/TeamSlide';
import FinancialProjectionsSlide from '@/components/pitch-deck/FinancialProjectionsSlide';
import Slide from '@/components/pitch-deck/slide';
import IntroSlide from '@/components/pitch-deck/Intro';
import ContactsSlide from '@/components/pitch-deck/Contacts';
import EmptySlide from '@/components/pitch-deck/EmptySlide';
import ProblemPrpSlide from '@/components/pitch-deck/ProblemPrpSlide';
import AskPrpSlide from '@/components/pitch-deck/AskPrpSlide';
import CompetitiveLandscapeSlide from '@/components/pitch-deck/CompetitiveLandscapeSlide';
import TargetAudienceSlide from '@/components/pitch-deck/TargetAudienceSlide';

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
    { title: "Stoky", Content: IntroSlide },
    // { title: "Current Trading Platforms Stuck in 90s", Content: ProblemSlide },
    { title: "Challenges Faced by Traders", Content: ProblemPrpSlide },
    //{ title: "Bridging the Gap between Graph and Quant Platforms", Content: SolutionSlide },
    { title: "Bridging the Gap", Content: SolutionSlide },
    { title: "Growing user base with strong retention", Content: TractionSlide },
    { title: "Tap into a Multi-Billion-Dollar Market", Content: MarketOpportunitySlide },
    { title: "Target Audience: Who We're Serving", Content: TargetAudienceSlide },
    { title: "Subscription based revenue model", Content: BusinessModelSlide },
    { title: "What Sets Stoky Apart", Content: ProductSlide },
    { title: "Competitive Landscape", Content: CompetitiveLandscapeSlide },
    { title: "Targeting retail traders and hobby quants", Content: GoToMarketSlide },
    { title: "Forecasting Growth", Content: FinancialProjectionsSlide },
    { title: "Funding Request", Content: AskPrpSlide },
    // { title: "Experienced Team With Deep Expertise", Content: TeamSlide },
    { title: "Join Us in Revolutionizing Trading", Content: ContactsSlide }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-pitch-primary">STOKY: Pitch Deck</h1>
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
