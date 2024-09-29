'use client'

import React from 'react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import {AIHero} from '@/components/AIHero';
import {AIShowcase} from '@/components/AIShowcase';
import {AIPainPoints} from '@/components/AIPainPoints';
import {AIProcess} from '@/components/AIProcess';
import {AIFinalSolution} from '@/components/AIFinalSolution';
import {AIWhyUs} from '@/components/AIBenefits';
import {AIPricingPlans} from '@/components/AIPricingPlans';
import {AIPartnerships} from '@/components/AIPartnerships';
import {AITestimonial} from '@/components/AITestimonial';
import {AIFAQ} from '@/components/AIFAQ';
import {AIContactForm} from '@/components/AIContactForm';

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
      <AIPainPoints />
      <AIProcess />
      <AIFinalSolution />
      <AIWhyUs />
      <AIPricingPlans />
      {/* <AIPartnerships /> */}
      {/* <AITestimonial /> */}
      <AIFAQ />
      <AIContactForm />
    </div>
  );
}