'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { personalInfo } from '@/lib/data';

export default function Footer() {
  const { t, language } = useApp();
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('antoniobneto11@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

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
          <button
            onClick={handleCopyEmail}
            className="text-text-muted hover:text-primary transition-colors cursor-pointer relative"
          >
            {copied ? (language === 'EN' ? '✓ Copied!' : '✓ Copiado!') : t.footer.email}
          </button>
        </div>
      </div>
    </footer>
  );
}
