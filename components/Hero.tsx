'use client';

import React from 'react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import { personalInfo } from '@/lib/data';

export default function Hero() {
  const { t } = useApp();

  return (
    <section id="hero" className="pt-32 pb-16 flex flex-col-reverse md:flex-row items-center justify-between gap-8 sm:gap-12">
      {/* Left Text */}
      <div className="flex-1 space-y-4 text-center md:text-left">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-on-surface">
          {t.hero.title}
        </h1>
        <p className="text-lg sm:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
          {t.hero.tagline}
        </p>
      </div>

      {/* Right Headshot Portrait */}
      <div className="w-44 h-44 sm:w-64 sm:h-64 rounded-full overflow-hidden border-2 border-border-subtle p-1 shrink-0 relative bg-surface-card shadow-xl">
        <div className="w-full h-full rounded-full overflow-hidden relative">
          <Image
            src={personalInfo.avatar}
            alt={personalInfo.name}
            fill
            priority
            sizes="(max-width: 768px) 176px, 256px"
            className="object-cover rounded-full hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
