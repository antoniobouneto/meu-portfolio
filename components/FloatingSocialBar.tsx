'use client';

import React from 'react';
import { personalInfo } from '@/lib/data';
import { GithubIcon, LinkedinIcon } from '@/components/BrandIcons';
import { Mail, MessageSquare } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function FloatingSocialBar() {
  const { t, language } = useApp();
  const [copied, setCopied] = React.useState(false);

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('antoniobneto11@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
      <div className="flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 rounded-full bg-surface-card/90 backdrop-blur-xl border border-border-subtle shadow-lg transition-all duration-300 hover:border-primary/50 group">
        <a
          href={personalInfo.socials.github}
          target="_blank"
          rel="noreferrer"
          title="GitHub"
          className="p-2 sm:p-2.5 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all duration-200 active:scale-95 relative group/btn cursor-pointer"
          aria-label="GitHub"
        >
          <GithubIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-on-surface text-background text-[10px] font-medium opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
            GitHub
          </span>
        </a>

        <a
          href={personalInfo.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
          className="p-2 sm:p-2.5 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all duration-200 active:scale-95 relative group/btn cursor-pointer"
          aria-label="LinkedIn"
        >
          <LinkedinIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-on-surface text-background text-[10px] font-medium opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
            LinkedIn
          </span>
        </a>

        <button
          onClick={handleCopyEmail}
          title={copied ? (language === 'EN' ? 'Copied!' : 'Copiado!') : 'Email'}
          className="p-2 sm:p-2.5 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all duration-200 active:scale-95 relative group/btn cursor-pointer"
          aria-label="Copy Email"
        >
          <Mail className={`w-4 h-4 sm:w-4.5 sm:h-4.5 ${copied ? 'text-emerald-500' : ''}`} />
          <span className={`absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-[10px] font-medium transition-opacity pointer-events-none whitespace-nowrap shadow-md ${
            copied
              ? 'opacity-100 bg-emerald-600 text-white'
              : 'opacity-0 group-hover/btn:opacity-100 bg-on-surface text-background'
          }`}>
            {copied ? (language === 'EN' ? '✓ Copied!' : '✓ Copiado!') : 'Email'}
          </span>
        </button>

        <div className="h-4 w-px bg-border-subtle mx-0.5" />

        {/* Action Button: Scroll to Contact */}
        <button
          onClick={handleScrollToContact}
          title={t.contact.title}
          className="flex items-center justify-center p-2 sm:p-2.5 rounded-full bg-primary text-background hover:opacity-90 transition-all active:scale-95 shadow-sm cursor-pointer"
          aria-label={t.contact.title}
        >
          <MessageSquare className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
        </button>
      </div>
    </div>
  );
}