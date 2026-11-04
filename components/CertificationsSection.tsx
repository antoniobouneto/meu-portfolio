'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { certificationsData } from '@/lib/data';
import { Award } from 'lucide-react';

export default function CertificationsSection() {
  const { t, language } = useApp();

  return (
    <section id="certifications" className="section-frame space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-on-surface">{t.certifications.title}</h2>
        <p className="text-sm text-on-surface-variant">{t.certifications.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certificationsData.map((cert, idx) => {
          const issueDate = cert.issueDate[language];

          return (
            <div key={idx} className="glass-panel p-5 rounded-xl flex gap-4 hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-full bg-surface-container-low border border-border-subtle flex items-center justify-center text-primary shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-base font-bold text-on-surface leading-snug">{cert.name}</h4>
                <p className="text-xs text-text-muted mt-0.5">{cert.issuer} · {issueDate}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
