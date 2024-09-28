'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { useTheme } from 'next-themes';

interface PlatformButtonProps {
  cta: string;
  ctaLink: string;
  buttonColor: string;
}

export function PlatformButton({ cta, ctaLink, buttonColor }: PlatformButtonProps) {
  const { theme } = useTheme();

  return (
    <Button
      className={`w-full ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : buttonColor}`}
      onClick={() => window.location.href = ctaLink}
    >
      {cta}
    </Button>
  );
}