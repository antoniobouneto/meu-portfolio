'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';

export default function AboutSection() {
  const { t } = useApp();

  return (
    <section id="about" className="section-frame space-y-4">
      <h2 className="text-2xl font-bold text-on-surface">{t.about.title}</h2>
      <p className="text-base text-on-surface-variant leading-relaxed font-sans whitespace-pre-line">
        {t.about.content}
      </p>
    </section>
  );
}
