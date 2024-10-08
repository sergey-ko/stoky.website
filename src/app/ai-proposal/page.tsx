'use client'

import React from 'react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { AIHero } from '@/components/hero/AIHero';
import { AIShowcase } from '@/components/features/ai-proposal/AIShowcase';
import { AIPainPoints } from '@/components/features/ai-proposal/AIPainPoints';
import { AIProcess } from '@/components/features/ai-proposal/AIProcess';
import { AIFinalSolution } from '@/components/features/ai-proposal/AIFinalSolution';
import { AIWhyUs } from '@/components/features/ai-proposal/AIBenefits';
import { AIPricingPlans } from '@/components/features/pricing/AIPricingPlans';
import { AIPartnerships } from '@/components/features/ai-proposal/AIPartnerships';
import { AITestimonial } from '@/components/features/ai-proposal/AITestimonial';
import { AIFAQ } from '@/components/info/AIFAQ';
import { AIContactForm } from '@/components/features/ai-proposal/AIContactForm';
import AICallToAction from '@/components/features/marketing/AICallToAction';
import { Footer } from '@/components/ui/layout/Footer';
import AIAssistantArchitecture from '@/components/features/ai-proposal/AIAssistantArchitecture';

export default function AIDataAccessPage() {

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
    <div className="min-h-screen bg-background">
      <AIHero />
      {/* <AIShowcase /> */}
      {/* <AIPainPoints /> */}
      <AIAssistantArchitecture />
      <AIProcess />
      {/* <AIFinalSolution /> */}
      <AIPricingPlans />
      <AIWhyUs />
      
      {/* <AIPartnerships /> */}
      {/* <AITestimonial /> */}
      <AIFAQ />
      <AICallToAction />
      {/* <AIContactForm /> */}
      <Footer />
    </div>
  );
}