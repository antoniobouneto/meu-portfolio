'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { personalInfo } from '@/lib/data';

export default function Footer() {
  const { t } = useApp();

  return (
    <footer className="w-full py-12 bg-background border-t border-border-subtle transition-colors">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 max-w-6xl mx-auto gap-4">
        <div className="text-lg font-bold text-on-surface">
          {t.nav.portfolio}
        </div>

        <p className="text-sm text-text-muted">
          {t.footer.copyright}
        </p>

        <div className="flex gap-6 text-sm font-medium">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noreferrer"
            className="text-text-muted hover:text-primary transition-colors"
          >
            {t.footer.github}
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-text-muted hover:text-primary transition-colors"
          >
            {t.footer.linkedin}
          </a>
          <a
            href={personalInfo.socials.email}
            className="text-text-muted hover:text-primary transition-colors"
          >
            {t.footer.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
