'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import { personalInfo } from '@/lib/data';
import { X, Download } from 'lucide-react';

export default function ResumeModal() {
  const { isResumeModalOpen, setIsResumeModalOpen, theme, language } = useApp();

  useEffect(() => {
    if (isResumeModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isResumeModalOpen]);

  if (!isResumeModalOpen) return null;

  const isLight = theme === 'light';
  const isEn = language === 'EN';

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-colors duration-300 ${isLight ? 'bg-slate-900/40 backdrop-blur-md' : 'bg-black/70 backdrop-blur-md'
        }`}
      onClick={() => setIsResumeModalOpen(false)}
    >
      {/* Main Card */}
      <div
        className="rounded-2xl max-w-xl w-full shadow-2xl overflow-hidden transition-all duration-300"
        style={{
          background: isLight ? '#ffffff' : '#161616',
          border: isLight ? '1px solid #e2e8f0' : '1px solid #2a2a2a',
          boxShadow: isLight ? '0 25px 50px -12px rgba(0, 0, 0, 0.15)' : '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
        }}
        onClick={(e) => e.stopPropagation()}
      >

        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-5"
          style={{ borderBottom: isLight ? '1px solid #e2e8f0' : '1px solid #2a2a2a' }}
        >
          <div className="flex items-center gap-3.5">
            <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-border-subtle shadow-sm bg-surface-card">
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className={`text-base font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                {personalInfo.name}
              </h2>
              <p className="text-xs mt-0.5" style={{ color: isLight ? '#64748b' : '#888888' }}>
                {isEn ? 'Full Stack Developer' : 'Desenvolvedor Full Stack'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsResumeModalOpen(false)}
            className="p-1.5 rounded-lg transition-colors cursor-pointer"
            style={{ color: isLight ? '#64748b' : '#888888' }}
            onMouseEnter={e => {
              e.currentTarget.style.color = isLight ? '#0f172a' : '#ffffff';
              e.currentTarget.style.backgroundColor = isLight ? '#f1f5f9' : '#222222';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = isLight ? '#64748b' : '#888888';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3 max-h-[65vh] overflow-y-auto">

          {/* Experiência */}
          <div
            className="rounded-xl overflow-hidden transition-colors duration-300"
            style={{
              background: isLight ? '#f8fafc' : '#1e1e1e',
              border: isLight ? '1px solid #e2e8f0' : '1px solid #2a2a2a'
            }}
          >
            <div
              className="px-4 py-2.5"
              style={{
                borderBottom: isLight ? '1px solid #e2e8f0' : '1px solid #2a2a2a',
                background: isLight ? '#f1f5f9' : '#222222'
              }}
            >
              <p
                className="text-[10px] font-semibold tracking-widest uppercase"
                style={{ color: isLight ? '#64748b' : '#666666' }}
              >
                {isEn ? 'Experience' : 'Experiência'}
              </p>
            </div>
            <div>
              <div
                className="px-4 py-3 flex items-start justify-between gap-2"
                style={{ borderBottom: isLight ? '1px solid #e2e8f0' : '1px solid #2a2a2a' }}
              >
                <div>
                  <p className={`text-sm font-semibold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    {isEn ? 'Full Stack Intern' : 'Estagiário Full Stack'}
                  </p>
                  <p className="text-xs mt-0.5 font-medium" style={{ color: isLight ? '#2563eb' : '#adc6ff' }}>
                    Teknisa
                  </p>
                </div>
                <span className="text-[11px] shrink-0 mt-0.5" style={{ color: isLight ? '#64748b' : '#666666' }}>
                  {isEn ? 'Oct 2025 – Present' : 'Out 2025 – Atual'}
                </span>
              </div>
              <div className="px-4 py-3 flex items-start justify-between gap-2">
                <div>
                  <p className={`text-sm font-semibold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    {isEn ? 'IT Support Technician' : 'Técnico de TI'}
                  </p>
                  <p className="text-xs mt-0.5 font-medium" style={{ color: isLight ? '#2563eb' : '#adc6ff' }}>
                    Automaton
                  </p>
                </div>
                <span className="text-[11px] shrink-0 mt-0.5" style={{ color: isLight ? '#64748b' : '#666666' }}>
                  {isEn ? 'Feb – Oct 2022' : 'Fev – Out 2022'}
                </span>
              </div>
            </div>
          </div>

          {/* Formação */}
          <div
            className="rounded-xl overflow-hidden transition-colors duration-300"
            style={{
              background: isLight ? '#f8fafc' : '#1e1e1e',
              border: isLight ? '1px solid #e2e8f0' : '1px solid #2a2a2a'
            }}
          >
            <div
              className="px-4 py-2.5"
              style={{
                borderBottom: isLight ? '1px solid #e2e8f0' : '1px solid #2a2a2a',
                background: isLight ? '#f1f5f9' : '#222222'
              }}
            >
              <p
                className="text-[10px] font-semibold tracking-widest uppercase"
                style={{ color: isLight ? '#64748b' : '#666666' }}
              >
                {isEn ? 'Education' : 'Formação'}
              </p>
            </div>
            <div>
              <div
                className="px-4 py-3 flex items-start justify-between gap-2"
                style={{ borderBottom: isLight ? '1px solid #e2e8f0' : '1px solid #2a2a2a' }}
              >
                <div>
                  <p className={`text-sm font-semibold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    {isEn ? 'Computer Science Degree' : 'Ciência da Computação'}
                  </p>
                  <p className="text-xs mt-0.5 font-medium" style={{ color: isLight ? '#2563eb' : '#adc6ff' }}>
                    Dom Helder Escola Superior
                  </p>
                </div>
                <span className="text-[11px] shrink-0 mt-0.5" style={{ color: isLight ? '#64748b' : '#666666' }}>
                  2023 – 2027
                </span>
              </div>
              <div className="px-4 py-3 flex items-start justify-between gap-2">
                <div>
                  <p className={`text-sm font-semibold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    {isEn ? 'Systems Development Technician' : 'Técnico em Desenvolvimento de Sistemas'}
                  </p>
                  <p className="text-xs mt-0.5 font-medium" style={{ color: isLight ? '#2563eb' : '#adc6ff' }}>
                    COTEMIG
                  </p>
                </div>
                <span className="text-[11px] shrink-0 mt-0.5" style={{ color: isLight ? '#64748b' : '#666666' }}>
                  2021 – 2022
                </span>
              </div>
            </div>
          </div>

          {/* Tecnologias */}
          <div
            className="rounded-xl overflow-hidden transition-colors duration-300"
            style={{
              background: isLight ? '#f8fafc' : '#1e1e1e',
              border: isLight ? '1px solid #e2e8f0' : '1px solid #2a2a2a'
            }}
          >
            <div
              className="px-4 py-2.5"
              style={{
                borderBottom: isLight ? '1px solid #e2e8f0' : '1px solid #2a2a2a',
                background: isLight ? '#f1f5f9' : '#222222'
              }}
            >
              <p
                className="text-[10px] font-semibold tracking-widest uppercase"
                style={{ color: isLight ? '#64748b' : '#666666' }}
              >
                {isEn ? 'Technologies' : 'Tecnologias'}
              </p>
            </div>
            <div className="px-4 py-3 flex flex-wrap gap-1.5">
              {['TypeScript', 'Next.js', 'React', 'PHP', 'Java', 'Spring Boot', 'Oracle SQL', 'PostgreSQL'].map((s) => (
                <span
                  key={s}
                  className="text-xs px-2.5 py-1 rounded-full font-medium transition-colors"
                  style={{
                    background: isLight ? '#eff6ff' : '#2a2a2a',
                    color: isLight ? '#1d4ed8' : '#adc6ff',
                    border: isLight ? '1px solid #bfdbfe' : '1px solid #333333'
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Certificações */}
          <div
            className="rounded-xl overflow-hidden transition-colors duration-300"
            style={{
              background: isLight ? '#f8fafc' : '#1e1e1e',
              border: isLight ? '1px solid #e2e8f0' : '1px solid #2a2a2a'
            }}
          >
            <div
              className="px-4 py-2.5"
              style={{
                borderBottom: isLight ? '1px solid #e2e8f0' : '1px solid #2a2a2a',
                background: isLight ? '#f1f5f9' : '#222222'
              }}
            >
              <p
                className="text-[10px] font-semibold tracking-widest uppercase"
                style={{ color: isLight ? '#64748b' : '#666666' }}
              >
                {isEn ? 'Certifications' : 'Certificações'}
              </p>
            </div>
            <div>
              {[
                { name: 'AWS Academy Graduate — Cloud Foundations', issuer: 'Amazon Web Services' },
                { name: 'Java Programming in English', issuer: 'Oracle' },
                { name: 'JavaScript Essentials 1 & 2', issuer: 'Cisco' },
              ].map((c, i, arr) => (
                <div
                  key={c.name}
                  className="px-4 py-3 flex items-center justify-between gap-2"
                  style={
                    i < arr.length - 1
                      ? { borderBottom: isLight ? '1px solid #e2e8f0' : '1px solid #2a2a2a' }
                      : {}
                  }
                >
                  <p className={`text-sm ${isLight ? 'text-slate-900' : 'text-white'}`}>{c.name}</p>
                  <span className="text-[11px] shrink-0" style={{ color: isLight ? '#64748b' : '#666666' }}>
                    {c.issuer}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4"
          style={{ borderTop: isLight ? '1px solid #e2e8f0' : '1px solid #2a2a2a' }}
        >
          <span className="text-xs flex items-center gap-1.5" style={{ color: isLight ? '#64748b' : '#666666' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            {isEn ? 'Available for opportunities' : 'Disponível para oportunidades'}
          </span>
          
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <a
              href="/curriculo-pt.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Antonio_Boucinhas_CV_PT.pdf"
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer shadow-xs border"
              style={{
                background: isLight ? '#f1f5f9' : '#222222',
                color: isLight ? '#0f172a' : '#ffffff',
                borderColor: isLight ? '#cbd5e1' : '#333333'
              }}
            >
              <Download className="w-3.5 h-3.5" />
              <span>PDF (PT)</span>
            </a>

            <a
              href="/curriculo-en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Antonio_Boucinhas_CV_EN.pdf"
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer shadow-xs"
              style={{
                background: isLight ? '#2563eb' : '#adc6ff',
                color: isLight ? '#ffffff' : '#161616'
              }}
            >
              <Download className="w-3.5 h-3.5" />
              <span>PDF (EN)</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

