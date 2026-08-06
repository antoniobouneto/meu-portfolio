'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { experienceData } from '@/lib/data';
import { Briefcase } from 'lucide-react';

export default function ExperienceSection() {
  const { t, language } = useApp();

  return (
    <section id="experience" className="section-frame space-y-6">
      <h2 className="text-2xl font-bold text-on-surface">{t.experience.title}</h2>

      <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border-subtle before:to-transparent">
        {experienceData.map((item, idx) => {
          const role = item.role[language];
          const desc = item.description?.[language];

          return (
            <div
              key={idx}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Icon Node */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border-subtle bg-surface-card text-on-surface-variant shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:border-primary group-hover:text-primary transition-colors">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bento-card">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-1">
                  <h3 className="text-lg font-semibold text-on-surface">{item.company}</h3>
                  <span className="text-xs text-text-muted font-mono">{item.period}</span>
                </div>
                <p className="text-sm font-medium text-primary mb-2">{role}</p>
                {desc && <p className="text-xs text-on-surface-variant leading-relaxed">{desc}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
