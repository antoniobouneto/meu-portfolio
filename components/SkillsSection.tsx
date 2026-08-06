'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { skillsList } from '@/lib/data';

export default function SkillsSection() {
  const { t } = useApp();

  return (
    <section id="skills" className="section-frame space-y-4">
      <h2 className="text-2xl font-bold text-on-surface">{t.skills.title}</h2>
      <div className="flex flex-wrap gap-2.5">
        {skillsList.map((skill) => (
          <span key={skill} className="chip cursor-default text-sm py-1.5 px-3">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
