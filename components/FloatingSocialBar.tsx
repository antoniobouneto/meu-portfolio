'use client';

import React from 'react';
import { personalInfo } from '@/lib/data';
import { GithubIcon, LinkedinIcon } from '@/components/BrandIcons';
import { Mail, MessageSquare } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function FloatingSocialBar() {
  const { t } = useApp();

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialItems = [
    {
      name: 'GitHub',
      icon: GithubIcon,
      href: personalInfo.socials.github,
    },
    {
      name: 'LinkedIn',
      icon: LinkedinIcon,
      href: personalInfo.socials.linkedin,
    },
    {
      name: 'Email',
      icon: Mail,
      href: personalInfo.socials.email,
    },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
      <div className="flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 rounded-full bg-surface-card/90 backdrop-blur-xl border border-border-subtle shadow-lg transition-all duration-300 hover:border-primary/50 group">
        {socialItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              title={item.name}
              className="p-2 sm:p-2.5 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all duration-200 active:scale-95 relative group/btn cursor-pointer"
              aria-label={item.name}
            >
              <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />

              {/* Tooltip */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-on-surface text-background text-[10px] font-medium opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
                {item.name}
              </span>
            </a>
          );
        })}

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