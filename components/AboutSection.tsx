'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';

export default function AboutSection() {
  const { t } = useApp();

  const paragraphs = t.about.content.split('\n\n');

  return (
    <section id="about" className="section-frame space-y-4">
      <h2 className="text-2xl font-bold text-on-surface">{t.about.title}</h2>

      <div className="space-y-4 text-base text-on-surface-variant leading-relaxed font-sans">
        {paragraphs.map((paragraph, index) => {
          if (paragraph.includes('•')) {
            const [title, ...items] = paragraph.split('\n');
            return (
              <div key={index} className="space-y-2 py-1">
                {title && <p className="font-semibold text-on-surface">{title}</p>}
                <ul className="space-y-2 pl-5 list-disc list-outside marker:text-primary">
                  {items.map((item, i) => {
                    const cleanItem = item.replace(/^•\s*/, '').trim();
                    if (!cleanItem) return null;
                    return (
                      <li key={i} className="pl-1 leading-relaxed">
                        {cleanItem}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          }

          return (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          );
        })}
      </div>
    </section>
  );
}
