'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { personalInfo } from '@/lib/data';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/BrandIcons';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const { t } = useApp();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    const mailtoSubject = encodeURIComponent(`Contato via Portfólio — ${email}`);
    const mailtoBody = encodeURIComponent(`E-mail do Remetente: ${email}\n\nMensagem:\n${message}`);
    
    // Open default mail client with prefilled parameters
    window.location.href = `mailto:antoniobneto11@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    setSent(true);
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#adc6ff', '#3b82f6', '#10b981'],
    });

    setEmail('');
    setMessage('');
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <section id="contact" className="section-frame text-center space-y-6">
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-on-surface">
        {t.contact.title}
      </h2>
      <p className="text-base sm:text-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed">
        {t.contact.subtitle}
      </p>

      {/* Social Button Row */}
      <div className="flex justify-center gap-4 pt-4">
        <a
          href={personalInfo.socials.github}
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-full bg-surface-container-low hover:bg-surface-container border border-border-subtle hover:border-primary text-on-surface hover:text-primary transition-all cursor-pointer active:scale-95"
          title="GitHub"
        >
          <GithubIcon className="w-5 h-5" />
        </a>

        <a
          href={personalInfo.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-full bg-surface-container-low hover:bg-surface-container border border-border-subtle hover:border-primary text-on-surface hover:text-primary transition-all cursor-pointer active:scale-95"
          title="LinkedIn"
        >
          <LinkedinIcon className="w-5 h-5" />
        </a>

        <a
          href={personalInfo.socials.email}
          className="p-3 rounded-full bg-surface-container-low hover:bg-surface-container border border-border-subtle hover:border-primary text-on-surface hover:text-primary transition-all cursor-pointer active:scale-95"
          title="Email"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>

      {/* Direct Contact Form */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3 pt-6 text-left">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.contact.emailPlaceholder || 'Seu E-mail'}
          className="w-full bg-surface-card border border-border-subtle rounded-lg px-4 py-3 text-sm text-on-surface focus:border-primary outline-none transition-all placeholder:text-text-muted"
        />
        <textarea
          rows={3}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t.contact.messagePlaceholder || 'Sua Mensagem...'}
          className="w-full bg-surface-card border border-border-subtle rounded-lg px-4 py-3 text-sm text-on-surface focus:border-primary outline-none transition-all placeholder:text-text-muted resize-none"
        />

        {sent && (
          <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-medium flex items-center gap-2 animate-fade-in">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{t.contact.successMsg || 'Mensagem enviada com sucesso!'}</span>
          </div>
        )}

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-on-surface text-background font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 shadow-sm"
        >
          <span>{t.contact.sendBtn}</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </section>
  );
}
