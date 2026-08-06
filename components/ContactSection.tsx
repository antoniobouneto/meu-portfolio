'use client';

import React, { useState, useRef } from 'react';
import { useApp } from '@/context/AppContext';
import { personalInfo } from '@/lib/data';
import { Mail, Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/BrandIcons';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';

// Rate limit: max 3 submissions per 5 minutes
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000;
const MAX_MESSAGE_LENGTH = 2000;

export default function ContactSection() {
  const { t, language } = useApp();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const submissionTimestamps = useRef<number[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message || loading) return;

    // Rate limiting check
    const now = Date.now();
    submissionTimestamps.current = submissionTimestamps.current.filter(
      (ts) => now - ts < RATE_LIMIT_WINDOW_MS
    );
    if (submissionTimestamps.current.length >= RATE_LIMIT_MAX) {
      setErrorMessage(
        language === 'EN'
          ? 'Too many messages sent. Please wait a few minutes before trying again.'
          : 'Muitas mensagens enviadas. Aguarde alguns minutos antes de tentar novamente.'
      );
      return;
    }

    // Input validation
    const trimmedMessage = message.trim();
    const trimmedEmail = email.trim();
    if (trimmedMessage.length < 10) {
      setErrorMessage(
        language === 'EN'
          ? 'Please write a longer message (at least 10 characters).'
          : 'Por favor, escreva uma mensagem mais longa (mínimo 10 caracteres).'
      );
      return;
    }
    if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
      setErrorMessage(
        language === 'EN'
          ? `Message is too long (max ${MAX_MESSAGE_LENGTH} characters).`
          : `Mensagem muito longa (máximo ${MAX_MESSAGE_LENGTH} caracteres).`
      );
      return;
    }

    setLoading(true);
    setErrorMessage('');

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Fallback to mailto if env variables are not yet set
    if (!serviceId || !templateId || !publicKey) {
      const mailtoSubject = encodeURIComponent(`Contato via Portfólio — ${trimmedEmail}`);
      const mailtoBody = encodeURIComponent(`E-mail do Remetente: ${trimmedEmail}\n\nMensagem:\n${trimmedMessage}`);
      
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
      setLoading(false);
      setTimeout(() => setSent(false), 6000);
      return;
    }

    try {
      await emailjs.send(
        serviceId.trim(),
        templateId.trim(),
        {
          from_name: trimmedEmail,
          from_email: trimmedEmail,
          user_email: trimmedEmail,
          email: trimmedEmail,
          reply_to: trimmedEmail,
          message: trimmedMessage,
          to_email: 'antoniobneto11@gmail.com',
        },
        publicKey.trim()
      );

      // Track successful submission for rate limiting
      submissionTimestamps.current.push(Date.now());

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
    } catch (err: unknown) {
      console.warn('EmailJS response error:', err);
      
      const emailjsErr = err as { status?: number; text?: string; message?: string };
      const status = emailjsErr?.status ? `[Status ${emailjsErr.status}] ` : '';
      const text = emailjsErr?.text || emailjsErr?.message || '';
      const fullError = `${status}${text}`.trim();

      setErrorMessage(
        fullError
          ? `EmailJS Error: ${fullError}`
          : (language === 'EN'
              ? 'Failed to send email. Please try again later.'
              : 'Erro ao enviar e-mail. Tente novamente mais tarde.')
      );
    } finally {
      setLoading(false);
    }
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

        <button
          onClick={(e) => {
            e.preventDefault();
            navigator.clipboard.writeText('antoniobneto11@gmail.com');
            setCopiedEmail(true);
            setTimeout(() => setCopiedEmail(false), 2500);
          }}
          className="p-3 rounded-full bg-surface-container-low hover:bg-surface-container border border-border-subtle hover:border-primary text-on-surface hover:text-primary transition-all cursor-pointer active:scale-95 relative group/mail"
          title={copiedEmail ? (language === 'EN' ? 'Copied!' : 'Copiado!') : 'Email'}
        >
          <Mail className={`w-5 h-5 ${copiedEmail ? 'text-emerald-500' : ''}`} />
          <span className={`absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-medium transition-opacity pointer-events-none whitespace-nowrap shadow-md ${
            copiedEmail ? 'opacity-100 bg-emerald-600 text-white' : 'opacity-0 group-hover/mail:opacity-100 bg-on-surface text-background'
          }`}>
            {copiedEmail ? (language === 'EN' ? '✓ Copied!' : '✓ Copiado!') : 'antoniobneto11@gmail.com'}
          </span>
        </button>
      </div>

      {/* Direct Contact Form */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3 pt-6 text-left">
        <input
          type="email"
          required
          disabled={loading}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.contact.emailPlaceholder || 'Seu E-mail'}
          className="w-full bg-surface-card border border-border-subtle rounded-lg px-4 py-3 text-sm text-on-surface focus:border-primary outline-none transition-all placeholder:text-text-muted disabled:opacity-50"
        />
        <textarea
          rows={3}
          required
          disabled={loading}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t.contact.messagePlaceholder || 'Sua Mensagem...'}
          className="w-full bg-surface-card border border-border-subtle rounded-lg px-4 py-3 text-sm text-on-surface focus:border-primary outline-none transition-all placeholder:text-text-muted resize-none disabled:opacity-50"
        />

        {sent && (
          <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-medium flex items-center gap-2 animate-fade-in">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{t.contact.successMsg || 'Mensagem enviada com sucesso!'}</span>
          </div>
        )}

        {errorMessage && (
          <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-medium flex items-center gap-2 animate-fade-in">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg bg-on-surface text-background font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>{language === 'EN' ? 'Sending...' : 'Enviando...'}</span>
            </>
          ) : (
            <>
              <span>{t.contact.sendBtn}</span>
              <Send className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </form>
    </section>
  );
}

