'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { personalInfo } from '@/lib/data';
import { Globe, Sun, Moon, Menu, X, FileText } from 'lucide-react';

export default function Navbar() {
  const { language, setLanguage, theme, toggleTheme, setIsResumeModalOpen, t } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.education, href: '#education' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border-subtle z-50 transition-colors">
      <div className="flex justify-between items-center h-16 px-4 sm:px-6 max-w-6xl mx-auto">

        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group cursor-pointer"
          aria-label="Home"
        >
          <span className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center font-bold text-xs tracking-wider group-hover:bg-primary group-hover:text-background transition-all shadow-xs">
            AB
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className={`flex items-center gap-1 p-1 rounded-lg text-xs font-medium border transition-colors ${
            theme === 'light'
              ? 'bg-slate-100 border-slate-300'
              : 'bg-zinc-900 border-zinc-800'
          }`}>
            <button
              onClick={() => setLanguage('PT')}
              className={`px-2.5 py-1 rounded-md transition-all cursor-pointer text-xs font-semibold ${
                language === 'PT'
                  ? theme === 'light'
                    ? 'bg-blue-600 text-white shadow-xs font-bold'
                    : 'bg-blue-500 text-white shadow-xs font-bold'
                  : theme === 'light'
                    ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
              title="Português"
            >
              PT
            </button>
            <button
              onClick={() => setLanguage('EN')}
              className={`px-2.5 py-1 rounded-md transition-all cursor-pointer text-xs font-semibold ${
                language === 'EN'
                  ? theme === 'light'
                    ? 'bg-blue-600 text-white shadow-xs font-bold'
                    : 'bg-blue-500 text-white shadow-xs font-bold'
                  : theme === 'light'
                    ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-border-subtle text-on-surface hover:border-primary hover:text-primary transition-all active:scale-95 cursor-pointer"
            title="Toggle Light / Dark Mode"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-on-surface" />}
          </button>

          {/* Resume Button */}
          <button
            onClick={() => setIsResumeModalOpen(true)}
            className="bg-on-surface text-background font-medium text-sm px-4 py-2 rounded-lg hover:opacity-90 transition-opacity hidden md:flex items-center gap-2 cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>{t.nav.resume}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-on-surface hover:text-primary transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 border-b border-border-subtle px-6 py-4 space-y-3 font-medium text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-on-surface-variant hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setIsResumeModalOpen(true);
            }}
            className="w-full mt-2 bg-on-surface text-background font-medium py-2 rounded-lg text-center flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4" />
            <span>{t.nav.resume}</span>
          </button>
        </div>
      )}
    </nav>
  );
}
