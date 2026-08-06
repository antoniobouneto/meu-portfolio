'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { educationData } from '@/lib/data';
import { GraduationCap } from 'lucide-react';

export default function EducationSection() {
  const { t, language } = useApp();

  return (
    <section id="education" className="section-frame space-y-6">
      <h2 className="text-2xl font-bold text-on-surface">{t.education.title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {educationData.map((edu, idx) => {
          const degree = edu.degree[language];

          return (
            <div key={idx} className="glass-panel p-5 rounded-xl flex items-center gap-4 hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-full bg-surface-container-low border border-border-subtle flex items-center justify-center text-primary shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-on-surface">{edu.school}</h4>
                <p className="text-xs text-text-muted mt-0.5">{degree} ({edu.period})</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
