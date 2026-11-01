'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { personalInfo } from '@/lib/data';
import { Mail, Send, CheckCircle2, Loader2, AlertCircle, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/BrandIcons';
import confetti from 'canvas-confetti';

const MAX_MESSAGE_LENGTH = 2000;

export default function ContactSection() {
  const { t, language } = useApp();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isHuman, setIsHuman] = useState(false);
  const [website, setWebsite] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message || loading) return;

    const trimmedMessage = message.trim();
    const trimmedEmail = email.trim();

    if (!isHuman) {
      setErrorMessage(
        language === 'EN'
          ? 'Please confirm you are not a robot before sending the message.'
          : 'Confirme que você não é um robô antes de enviar a mensagem.'
      );
      return;
    }

    if (website) {
      setErrorMessage(
        language === 'EN'
          ? 'Submission rejected. Please try again.'
          : 'Envio rejeitado. Tente novamente.'
      );
      return;
    }

    // Input validation
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

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: trimmedEmail,
          message: trimmedMessage,
          human: isHuman,
          website,
        }),
      });

      const data = await res.json().catch(() => null);

      if (res.status === 429) {
        const waitMinutes = data?.retryAfter ? Math.ceil(data.retryAfter / 60) : 10;
        setErrorMessage(
          language === 'EN'
            ? (data?.error || `Too many messages sent. Please wait ~${waitMinutes} minute(s) before trying again.`)
            : (data?.errorPT || `Muitas mensagens enviadas. Aguarde ~${waitMinutes} minuto(s) antes de tentar novamente.`)
        );
        return;
      }

      if (!res.ok) {
        setErrorMessage(
          language === 'EN'
            ? (data?.error || 'Failed to send message. Please try again later.')
            : (data?.errorPT || 'Erro ao enviar mensagem. Tente novamente mais tarde.')
        );
        return;
      }

      if (data?.fallbackToMailto) {
        const mailtoSubject = encodeURIComponent(`Contato via Portfólio — ${trimmedEmail}`);
        const mailtoBody = encodeURIComponent(`E-mail do Remetente: ${trimmedEmail}\n\nMensagem:\n${trimmedMessage}`);
        window.location.href = `mailto:antoniobneto11@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
      }

      setSent(true);
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#adc6ff', '#3b82f6', '#10b981'],
      });

      setEmail('');
      setMessage('');
      setIsHuman(false);
      setWebsite('');
      setTimeout(() => setSent(false), 6000);
    } catch (err: unknown) {
      console.warn('Contact API error:', err);
      setErrorMessage(
        language === 'EN'
          ? 'Failed to send email. Please check your connection and try again.'
          : 'Erro ao enviar e-mail. Verifique sua conexão e tente novamente.'
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

      <div className="flex justify-center gap-4 pt-4">
        <a
          href={personalInfo.socials.github}
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-full bg-surface-container-low hover:bg-surface-container border border-border-subtle hover:border-primary text-on-surface hover:text-primary transition-all cursor-pointer"
          title="GitHub"
        >
          <GithubIcon className="w-5 h-5" />
        </a>

        <a
          href={personalInfo.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-full bg-surface-container-low hover:bg-surface-container border border-border-subtle hover:border-primary text-on-surface hover:text-primary transition-all cursor-pointer"
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
          className="group relative p-3 rounded-full bg-surface-container-low hover:bg-surface-container border border-border-subtle hover:border-primary text-on-surface hover:text-primary transition-all cursor-pointer"
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

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3 pt-6 text-left">
        <input
          type="email"
          required
          disabled={loading}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.contact.emailPlaceholder || 'Seu E-mail'}
          className="w-full bg-surface-card border border-border-subtle rounded-lg px-4 py-3 text-sm text-on-surface focus:border-primary outline-none transition-all placeholder:text-text-muted"
        />
        <textarea
          rows={3}
          required
          disabled={loading}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t.contact.messagePlaceholder || 'Sua Mensagem...'}
          className="w-full bg-surface-card border border-border-subtle rounded-lg px-4 py-3 text-sm text-on-surface focus:border-primary outline-none transition-all placeholder:text-text-muted resize-none"
        />

        <input
          type="text"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <label className="flex items-start gap-3 text-xs text-on-surface-variant cursor-pointer select-none">
          <input
            type="checkbox"
            checked={isHuman}
            onChange={(e) => setIsHuman(e.target.checked)}
            disabled={loading}
            className="mt-0.5 h-4 w-4 rounded border-border-subtle text-primary focus:ring-primary"
          />
          <span>
            {language === 'EN'
              ? 'I confirm I am not a robot.'
              : 'Confirmo que não sou um robô.'}
          </span>
        </label>

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
          className="w-full py-3 rounded-lg bg-on-surface text-background font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer"
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

        <div className="text-[11px] text-text-muted flex items-center justify-center gap-1.5 pt-2">
          <ShieldCheck className="w-3.5 h-3.5 text-primary shrink-0" />
          <span>
            {language === 'EN'
              ? 'Protected by spam checks and rate limiting'
              : 'Protegido por verificações anti-spam e rate limiting'}
          </span>
        </div>
      </form>
    </section>
  );
}
