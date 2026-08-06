import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { AppProvider } from '@/context/AppContext';
import ResumeModal from '@/components/ResumeModal';
import ProjectModal from '@/components/ProjectModal';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Antonio Boucinhas Neto | Portfólio de Desenvolvedor Full Stack',
  description:
    'Desenvolvedor Full Stack | Next.js, TypeScript, Java, Spring Boot, PHP, Oracle SQL & PostgreSQL.',
  keywords: [
    'Antonio Boucinhas Neto',
    'Portfólio de Desenvolvedor',
    'Full Stack Developer',
    'Next.js',
    'TypeScript',
    'PHP',
    'Java',
    'Spring Boot',
    'Teknisa'
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} dark scroll-smooth h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-background text-on-surface font-body-md selection:bg-primary/30 selection:text-primary transition-colors duration-300"
      >
        <AppProvider>
          {children}
          <ResumeModal />
          <ProjectModal />
        </AppProvider>
      </body>
    </html>
  );
}
