import { Project, ExperienceItem, EducationItem, CertificationItem } from './types';

export const personalInfo = {
  name: 'Antonio Boucinhas Neto',
  tagline: {
    EN: 'Full Stack Developer',
    PT: 'Desenvolvedor Full Stack'
  },
  about: {
    EN: 'I work as a Full Stack Developer at Teknisa, developing enterprise web applications with the Zeedhi-next framework. On a daily basis, I build dynamic and intuitive interfaces using TypeScript and JavaScript, integrated with PHP backends and Oracle SQL / PostgreSQL databases. My focus is on creating dynamic screens, data grids, advanced filters, and implementing business logic with strong UI/UX standards.\n\nKey Technologies:\n• Frontend: TypeScript, JavaScript, React.js, Next.js, HTML5, CSS.\n• Backend: PHP, Java Spring Boot, C#, .NET.\n• Database: Oracle SQL, PostgreSQL, PL/SQL.\n\nPractical experience with REST API integration, JSON data handling, legacy code refactoring, and Agile methodologies (Scrum and Kanban). Currently pursuing a Bachelor degree in Computer Science at Escola Superior Dom Helder Câmara (expected graduation 2028) with technical IT degree from COTEMIG.',
    PT: 'Atuo como Desenvolvedor Full Stack na Teknisa, onde trabalho no desenvolvimento e manutenção de sistemas corporativos com o framework Zeedhi-next. No dia a dia, construo interfaces dinâmicas e intuitivas usando TypeScript e JavaScript, integradas a back-ends em PHP e bancos Oracle SQL / PostgreSQL. Foco na criação de telas interativas, grids dinâmicos, filtros avançados e implementação de regras de negócio com atenção à experiência do usuário (UI/UX).\n\nPrincipais tecnologias com as quais trabalho:\n• Front-end: TypeScript, JavaScript, React.js, Next.js, HTML5 e CSS.\n• Back-end: PHP, Java Spring Boot, C# e .NET.\n• Banco de Dados: Oracle SQL e PostgreSQL, modelagem de dados e PL/SQL.\n\nExperiência prática com integração de APIs REST, manipulação de JSON, refatoração de código e rotinas em equipes ágeis (Scrum e Kanban). Sou graduando em Ciência da Computação pela Escola Superior Dom Helder Câmara (previsão 2028) e tenho formação técnica em TI pelo COTEMIG.'
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
      EN: 'Development, maintenance, and conversion of enterprise web applications using TypeScript/JavaScript on the frontend and PHP on the backend (Zeedhi-next). Delivered dynamic forms, reports, and validation routines, while collaborating on adapting database queries during the Oracle SQL to PostgreSQL migration.',
      PT: 'Atuo no desenvolvimento, manutenção e conversão de telas corporativas utilizando TypeScript/JavaScript no front-end e PHP no back-end (Zeedhi-next). Responsável pela entrega de formulários dinâmicos, relatórios e rotinas de validação de regras de negócio, além de colaborar na adaptação de consultas durante a migração de Oracle SQL para PostgreSQL.',
    }
  },
  {
    company: 'ATMC Consultoria e Engenharia',
    role: {
      EN: 'IT Support Technician (Intern)',
      PT: 'Técnico de TI (Estágio)'
    },
    period: 'Jan 2022 - Out 2022',
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
      EN: 'Payment management and simulation API built with C# and .NET, featuring RESTful endpoints for transaction records, queries, and business rule validations with data persistence.',
      PT: 'API de gestão e simulação de pagamentos desenvolvida em C# e .NET, com endpoints RESTful para registro, consulta e validação de regras de negócio financeiras com persistência de dados.',
    },
    tags: ['C#', '.NET', 'REST API', 'SQL', 'Clean Architecture'],
    codeHref: 'https://github.com/antoniobouneto/.NET_pagamentos',
    featured: true
  }
];

export const educationData: EducationItem[] = [
  {
    school: 'Escola Superior Dom Helder Câmara',
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
    period: '2020 - 2022'
  }
];

export const certificationsData: CertificationItem[] = [
  {
    name: 'AWS Academy Graduate - Cloud Foundations - Training Badge',
    issuer: 'Amazon Web Services (AWS)',
    issueDate: {
      EN: 'November 2025',
      PT: 'Novembro de 2025'
    },
    skills: ['Amazon Web Services', 'Amazon EC2']
  },
  {
    name: 'Java Programming – English',
    issuer: 'Oracle',
    issueDate: {
      EN: 'November 2025',
      PT: 'Novembro de 2025'
    },
    skills: ['Desenvolvimento de software', 'Core Java']
  },
  {
    name: 'JavaScript Essentials 2',
    issuer: 'Cisco',
    issueDate: {
      EN: 'September 2025',
      PT: 'Setembro de 2025'
    },
    skills: ['JavaScript']
  },
  {
    name: 'JavaScript Essentials 1',
    issuer: 'Cisco',
    issueDate: {
      EN: 'August 2025',
      PT: 'Agosto de 2025'
    },
    skills: ['Desenvolvimento de software', 'Desenvolvimento front-end']
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
    certifications: {
      title: 'Certifications',
      subtitle: 'Check out my recent certifications and achievements'
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
    certifications: {
      title: 'Certificações',
      subtitle: 'Confira minhas certificações e conquistas recentes'
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
