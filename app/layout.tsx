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
  metadataBase: new URL('https://antonio-boucinhas.vercel.app'),
  title: 'Antonio Boucinhas Neto | Portfólio de Desenvolvedor Full Stack',
  description:
    'Portfólio de Antonio Boucinhas Neto. Desenvolvedor Full Stack atuando com TypeScript, Next.js, Java Spring Boot, PHP, C# .NET e bancos de dados Oracle SQL e PostgreSQL.',
  keywords: [
    'Antonio Boucinhas Neto',
    'Portfólio de Desenvolvedor',
    'Full Stack Developer',
    'Next.js',
    'TypeScript',
    'PHP',
    'Java',
    'Spring Boot',
    'C#',
    '.NET',
    'Teknisa'
  ],
  authors: [{ name: 'Antonio Boucinhas Neto', url: 'https://github.com/antoniobouneto' }],
  creator: 'Antonio Boucinhas Neto',
  openGraph: {
    title: 'Antonio Boucinhas Neto | Portfólio de Desenvolvedor Full Stack',
    description:
      'Portfólio de Antonio Boucinhas Neto. Desenvolvedor Full Stack atuando com TypeScript, Next.js, Java Spring Boot, PHP, C# .NET e bancos de dados Oracle SQL e PostgreSQL.',
    url: 'https://antonio-boucinhas.vercel.app',
    siteName: 'Antonio Boucinhas Neto | Portfólio',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/developer.png',
        width: 1200,
        height: 630,
        alt: 'Antonio Boucinhas Neto | Desenvolvedor Full Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antonio Boucinhas Neto | Portfólio de Desenvolvedor Full Stack',
    description:
      'Portfólio de Antonio Boucinhas Neto. Desenvolvedor Full Stack atuando com TypeScript, Next.js, Java Spring Boot, PHP, C# .NET e bancos de dados Oracle SQL e PostgreSQL.',
    images: ['/images/developer.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
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
