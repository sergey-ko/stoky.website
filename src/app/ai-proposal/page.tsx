import React from 'react';
import {AIHero} from '@/components/AIHero';
import {AIShowcase} from '@/components/AIShowcase';
import {AIPainPoints} from '@/components/AIPainPoints';
import {AIProcess} from '@/components/AIProcess';
import {AIFinalSolution} from '@/components/AIFinalSolution';
import {AIBenefits} from '@/components/AIBenefits';
import {AIPricingPlans} from '@/components/AIPricingPlans';
import {AIPartnerships} from '@/components/AIPartnerships';
import {AITestimonial} from '@/components/AITestimonial';
import {AIFAQ} from '@/components/AIFAQ';
import {AIContactForm} from '@/components/AIContactForm';

export default function AIDataAccessPage() {
  return (
    <div className="min-h-screen bg-background">
      <AIHero />
      <AIShowcase />
      <AIPainPoints />
      <AIProcess />
      <AIFinalSolution />
      <AIBenefits />
      <AIPricingPlans />
      {/* <AIPartnerships /> */}
      <AITestimonial />
      <AIFAQ />
      <AIContactForm />
    </div>
  );
}