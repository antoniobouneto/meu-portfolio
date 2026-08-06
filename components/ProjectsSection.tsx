'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { projectsData } from '@/lib/data';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/BrandIcons';

export default function ProjectsSection() {
  const { t, language, setSelectedProject } = useApp();

  return (
    <section id="projects" className="section-frame space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-on-surface">{t.projects.title}</h2>
        <p className="text-sm text-on-surface-variant">{t.projects.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project) => {
          const desc = project.description[language];

          return (
            <div
              key={project.id}
              className="bento-card flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex gap-2 text-primary">
                    {project.codeHref && (
                      <a
                        href={project.codeHref}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="hover:text-on-surface transition-colors p-1"
                        title="Source Code"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="hover:text-on-surface transition-colors p-1"
                      title="Open Live"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {desc}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
