'use client';

import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { X, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/BrandIcons';

export default function ProjectModal() {
  const { selectedProject, setSelectedProject, language } = useApp();

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  if (!selectedProject) return null;

  const desc = selectedProject.description[language];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-surface-card border border-border-subtle rounded-2xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl space-y-6">
        
        {/* Close button */}
        <button
          onClick={() => setSelectedProject(null)}
          className="absolute top-4 right-4 p-2 rounded-full bg-surface-container-low text-text-muted hover:text-on-surface transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-on-surface">{selectedProject.title}</h2>
          <p className="text-sm text-on-surface-variant leading-relaxed font-sans">{desc}</p>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {selectedProject.tags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-border-subtle flex gap-4">
          <a
            href={selectedProject.href}
            target="_blank"
            rel="noreferrer"
            className="flex-1 bg-on-surface text-background font-medium py-2.5 rounded-lg text-center text-xs uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Visit Live Project</span>
          </a>

          {selectedProject.codeHref && (
            <a
              href={selectedProject.codeHref}
              target="_blank"
              rel="noreferrer"
              className="px-4 border border-border-subtle text-on-surface font-medium py-2.5 rounded-lg text-xs uppercase tracking-wider hover:border-primary hover:text-primary transition-colors flex items-center gap-2 cursor-pointer"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
