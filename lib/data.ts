import { Project, ExperienceItem, EducationItem } from './types';

export const personalInfo = {
  name: 'Antonio Boucinhas Neto',
  tagline: {
    EN: 'Full Stack Developer',
    PT: 'Desenvolvedor Full Stack'
  },
  about: {
    EN: 'I work as a Full Stack Developer at Teknisa, developing high-complexity enterprise systems with the Zeedhi-next framework. On a daily basis, I focus on building dynamic and intuitive interfaces using TypeScript and JavaScript, always integrated with PHP backends and Oracle SQL / PostgreSQL databases. Extensive experience in creating complex screens, dynamic grids, advanced filters, and implementing business logic with strong UI/UX principles.\n\nKey Technologies:\n• Frontend: TypeScript, JavaScript, React.js, Next.js, HTML5, CSS.\n• Backend: PHP, Java Spring Boot, C#, .NET.\n• Database: Oracle SQL, PostgreSQL, PL/SQL.\n\nSolid background in REST API integration, JSON payload manipulation, legacy code refactoring, and Agile methodologies (Scrum and Kanban). Currently pursuing a Bachelor degree in Computer Science at Dom Helder (expected graduation 2028) with technical IT degree from COTEMIG.',
    PT: 'Atuo como Desenvolvedor Full Stack na Teknisa, onde trabalho no desenvolvimento de sistemas corporativos de alta complexidade com o framework Zeedhi-next. No dia a dia, me dedico a construir interfaces dinâmicas e intuitivas usando TypeScript e JavaScript, sempre integradas a back-ends em PHP e bancos Oracle SQL. Tenho bastante experiência na criação de telas complexas, grids dinâmicos, filtros avançados e na implementação de regras de negócio, sempre com foco forte em boa experiência do usuário (UI/UX).\n\nPrincipais tecnologias que trabalho:\n• Front-end: TypeScript, JavaScript, React.js, Next.js, HTML5 e CSS.\n• Back-end: PHP, Java Spring Boot, C# e .NET.\n• Banco de Dados: Oracle SQL e PostgreSQL, modelagem de dados e PL/SQL.\n\nTenho sólida vivência com integração de APIs REST, manipulação de JSON, refatoração de código legado e metodologias ágeis (Scrum e Kanban). Sou graduando em Ciência da Computação pela Dom Helder (previsão 2028) e tenho formação técnica em TI pelo COTEMIG.'
  },
  avatar: '/images/eu.png',
  resumeUrl: '#',
  socials: {
    github: 'https://github.com/antoniobouneto',
    linkedin: 'https://www.linkedin.com/in/antonio-boucinhas-neto/',
    email: 'mailto:antoniobneto11@gmail.com'
  }
};

export const skillsList = [
  'TypeScript',
  'JavaScript',
  'Next.js',
  'React.js',
  'PHP',
  'Java',
  'Spring Boot',
  'C#',
  '.NET',
  'Oracle SQL',
  'PostgreSQL',
  'PL/SQL',
  'REST APIs',
  'Git & GitHub',
  'TailwindCSS',
  'HTML5 / CSS3',
  'AWS Cloud',
  'Python'
];

export const experienceData: ExperienceItem[] = [
  {
    company: 'Teknisa',
    role: {
      EN: 'Full Stack Software Developer ',
      PT: 'Desenvolvedor Full Stack'
    },
    period: 'Out 2025 - Presente',
    description: {
      EN: 'Development, maintenance, and conversion of enterprise web applications using TypeScript/JavaScript on the frontend and PHP on the backend with Zeedhi-next framework. Refactored complex business rules, dynamic form validations, REST APIs, and contributed to database migrations from Oracle SQL to PostgreSQL.',
      PT: 'Atuo no desenvolvimento, manutenção e conversão de aplicações web corporativas utilizando TypeScript/JavaScript no frontend e PHP no backend, com forte uso do framework Zeedhi-next. Implementação de regras de negócio complexas, APIs REST, rotinas dinâmicas e colaboração na migração de banco de dados de Oracle SQL para PostgreSQL.'
    }
  },
  {
    company: 'Automaton',
    role: {
      EN: 'IT Technician Intern',
      PT: 'Técnico de TI (Estágio)'
    },
    period: 'Fev 2022 - Out 2022',
    description: {
      EN: 'Preventive maintenance on servers and computers, user technical support, workstation onboarding, and implementation of data backup routines.',
      PT: 'Manutenção preventiva em servidores e computadores, suporte técnico personalizado a usuários, preparação de estações de trabalho e implementação de rotinas de backup de dados.'
    }
  }
];

export const projectsData: Project[] = [
  {
    id: 'java-next',
    title: 'Java & Next.js Full Stack App',
    description: {
      EN: 'Full-stack enterprise application integrating a modern Next.js frontend with a robust Java Spring Boot backend, featuring REST API communication, type safety, and clean architecture.',
      PT: 'Aplicação full stack integrando front-end moderno em Next.js com back-end em Java Spring Boot, com consumo de APIs REST, tipagem estrita e arquitetura limpa.'
    },
    tags: ['Java', 'Spring Boot', 'Next.js', 'TypeScript', 'REST API'],
    codeHref: 'https://github.com/antoniobouneto/java-next',
    featured: true
  },
  {
    id: 'calendar-app',
    title: 'Calendar & Scheduling App',
    description: {
      EN: 'Interactive calendar and scheduling application with responsive UI, dynamic event management, intuitive state handling, and seamless user experience.',
      PT: 'Aplicação de calendário e agendamento interativo com interface responsiva, gerenciamento dinâmico de eventos, controle de estados e navegação fluida.'
    },
    tags: ['TypeScript', 'React.js', 'Next.js', 'TailwindCSS'],
    codeHref: 'https://github.com/antoniobouneto/calendar-app',
    featured: true
  },
  {
    id: 'dotnet-pagamentos',
    title: '.NET Payment Management System',
    description: {
      EN: 'Payment processing and financial management system built with C# and .NET, focusing on transaction integrity, business rule validation, and scalable architecture.',
      PT: 'Sistema de processamento e gestão de pagamentos desenvolvido em C# e .NET, focado em segurança de transações, validação de regras de negócio e arquitetura escalável.'
    },
    tags: ['C#', '.NET', 'REST API', 'SQL', 'Clean Architecture'],
    codeHref: 'https://github.com/antoniobouneto/.NET_pagamentos',
    featured: true
  }
];

export const educationData: EducationItem[] = [
  {
    school: 'Dom Helder Escola Superior',
    degree: {
      EN: 'Bachelor of Computer Science (BS)',
      PT: 'Bacharelado em Ciência da Computação'
    },
    period: '2024 - 2028 (Previsão)'
  },
  {
    school: 'COTEMIG - Colégio e Faculdade',
    degree: {
      EN: 'Technical Diploma in Systems Development',
      PT: 'Técnico em Informática / Desenvolvimento de Sistemas'
    },
    period: '2021 - 2022'
  }
];

export const translations = {
  EN: {
    nav: {
      portfolio: 'Portfolio',
      experience: 'Experience',
      projects: 'Projects',
      education: 'Education',
      resume: 'Resume',
      contact: 'Contact'
    },
    hero: {
      title: "Hi, I'm Antonio",
      tagline: personalInfo.tagline.EN
    },
    about: {
      title: 'About Me',
      content: personalInfo.about.EN
    },
    skills: {
      title: 'Tech Stack & Skills'
    },
    experience: {
      title: 'Work Experience'
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Check out some of my recent work and certifications'
    },
    education: {
      title: 'Education & Qualifications'
    },
    contact: {
      title: 'Get in Touch',
      subtitle: "Interested in working together or have a query? Feel free to reach out and I'll respond as soon as possible.",
      sendBtn: 'Send Message',
      emailPlaceholder: 'Your Email address',
      messagePlaceholder: 'Your Message...',
      successMsg: 'Message processed! Opening your email app to send...'
    },
    footer: {
      copyright: '© 2026 Antonio Boucinhas Neto. Built with precision.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email'
    }
  },
  PT: {
    nav: {
      portfolio: 'Portfólio',
      experience: 'Experiência',
      projects: 'Projetos',
      education: 'Educação',
      resume: 'Currículo',
      contact: 'Contato'
    },
    hero: {
      title: 'Olá, sou o Antonio',
      tagline: personalInfo.tagline.PT
    },
    about: {
      title: 'Sobre Mim',
      content: personalInfo.about.PT
    },
    skills: {
      title: 'Habilidades & Tecnologias'
    },
    experience: {
      title: 'Experiência Profissional'
    },
    projects: {
      title: 'Projetos & Destaques',
      subtitle: 'Confira meus trabalhos mais recentes e certificações'
    },
    education: {
      title: 'Formação Acadêmica'
    },
    contact: {
      title: 'Entrar em Contato',
      subtitle: 'Quer conversar ou propor uma oportunidade? Mande uma mensagem e responderei o mais rápido possível.',
      sendBtn: 'Enviar Mensagem',
      emailPlaceholder: 'Seu E-mail',
      messagePlaceholder: 'Sua Mensagem...',
      successMsg: 'Mensagem pronta! Abrindo seu aplicativo de e-mail...'
    },
    footer: {
      copyright: '© 2026 Antonio Boucinhas Neto. Construído com precisão.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'E-mail'
    }
  }
};
