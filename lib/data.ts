import { Project, ExperienceItem, EducationItem } from './types';

export const personalInfo = {
  name: 'Antonio Boucinhas Neto',
  tagline: {
    EN: 'Full Stack Developer',
    PT: 'Desenvolvedor Full Stack'
  },
  about: {
    EN: 'I work as a Full Stack Developer at Teknisa, contributing to the development and maintenance of web applications with TypeScript/JavaScript, PHP, and the Zeedhi-next framework. My work includes implementing business rules, building interfaces, and contributing to database migrations from Oracle SQL to PostgreSQL.\n\nTechnologies I work with:\n• Front end: TypeScript, JavaScript, React.js, Next.js, HTML, and CSS.\n• Back end: PHP at work; Java with Spring Boot and C#/.NET in personal projects.\n• Databases: Oracle SQL, PostgreSQL, and PL/SQL.\n\nI also have experience integrating REST APIs, refactoring legacy code, and working with agile methodologies (Scrum and Kanban). I am studying Computer Science and use personal projects to practice and build on what I learn at work.',
    PT: 'Atuo como Desenvolvedor Full Stack na Teknisa, contribuindo para o desenvolvimento e a manutenção de aplicações web com TypeScript/JavaScript, PHP e o framework Zeedhi-next. Meu trabalho inclui implementar regras de negócio, construir interfaces e colaborar na migração de bancos de dados Oracle SQL para PostgreSQL.\n\nPrincipais tecnologias com as quais trabalho:\n• Front-end: TypeScript, JavaScript, React.js, Next.js, HTML e CSS\n• Back-end: PHP (no trabalho); Java com Spring Boot e C#/.NET (projetos pessoais)\n• Banco de dados: Oracle SQL, PostgreSQL e PL/SQL\n\nTambém tenho experiência com integração de APIs REST, refatoração de código legado e metodologias ágeis (Scrum e Kanban). Estou cursando Ciência da Computação e uso projetos pessoais para praticar e ampliar o que aprendo no trabalho.'
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
  'HTML5 / CSS3'
];

export const experienceData: ExperienceItem[] = [
  {
    company: 'Teknisa',
    role: {
      EN: 'Full Stack Software Developer',
      PT: 'Desenvolvedor Full Stack'
    },
    period: 'Out 2025 - Presente',
    description: {
      EN: 'Develop and maintain corporate web applications using TypeScript/JavaScript on the frontend and PHP on the backend with Zeedhi-next. Implement business rules, REST APIs, and dynamic forms, and contribute to database migrations from Oracle SQL to PostgreSQL.',
      PT: 'Atuo no desenvolvimento e na manutenção de aplicações web corporativas com TypeScript/JavaScript no frontend e PHP no backend, utilizando o framework Zeedhi-next. Implemento regras de negócio, APIs REST e formulários dinâmicos, além de colaborar na migração de bancos de dados de Oracle SQL para PostgreSQL.'
    }
  },
  {
    company: 'Automaton',
    role: {
      EN: 'IT Support Technician Intern',
      PT: 'Técnico de TI (Estágio)'
    },
    period: 'Fev 2022 - Out 2022',
    description: {
      EN: 'Preventive maintenance and infrastructure support for internal users, workstation setup, and data backup routines.',
      PT: 'Manutenção preventiva e suporte de infraestrutura para usuários internos, preparação de estações de trabalho e rotinas de backup de dados.'
    }
  }
];

export const projectsData: Project[] = [
  {
    id: 'java-next',
    title: 'Java & Next.js Full Stack App',
    description: {
      EN: 'A full-stack project combining a Next.js frontend with a Java Spring Boot backend and REST API communication.',
      PT: 'Projeto full stack que combina um frontend em Next.js com um backend em Java Spring Boot e comunicação por API REST.'
    },
    tags: ['Java', 'Spring Boot', 'Next.js', 'TypeScript', 'REST API'],
    codeHref: 'https://github.com/antoniobouneto/java-next',
    featured: true
  },
  {
    id: 'calendar-app',
    title: 'Calendar & Scheduling App',
    description: {
      EN: 'A calendar and scheduling app with a responsive interface and event management features.',
      PT: 'Aplicação de calendário e agendamento com interface responsiva e funcionalidades de gerenciamento de eventos.'
    },
    tags: ['TypeScript', 'React.js', 'Next.js', 'TailwindCSS'],
    codeHref: 'https://github.com/antoniobouneto/calendar-app',
    featured: true
  },
  {
    id: 'dotnet-pagamentos',
    title: '.NET Payment Management System',
    description: {
      EN: 'A C#/.NET project for payment management, with business-rule validation. See the repository for implementation details.',
      PT: 'Projeto em C#/.NET para gerenciamento de pagamentos, com validação de regras de negócio. Consulte o repositório para ver os detalhes da implementação.'
    },
    tags: ['C#', '.NET', 'REST API', 'SQL'],
    codeHref: 'https://github.com/antoniobouneto/.NET_pagamentos',
    featured: true
  }
];

export const educationData: EducationItem[] = [
  {
    school: 'Escola Superior Dom Helder Câmara',
    degree: {
      EN: 'Bachelor of Computer Science',
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
    period: 'Fev 2021 - Dez 2022'
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
      subtitle: 'A selection of my recent projects'
    },
    education: {
      title: 'Education & Qualifications'
    },
    contact: {
      title: 'Get in Touch',
      subtitle: "Interested in working together or have a question? Feel free to reach out and I'll respond as soon as possible.",
      sendBtn: 'Send Message',
      emailPlaceholder: 'Your email address',
      messagePlaceholder: 'Your message...',
      successMsg: 'Message processed! Opening your email app to send...'
    },
    footer: {
      copyright: '© 2026 Antonio Boucinhas Neto.',
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
      title: 'Projetos em Destaque',
      subtitle: 'Conheça alguns dos meus projetos recentes'
    },
    education: {
      title: 'Formação Acadêmica'
    },
    contact: {
      title: 'Entrar em Contato',
      subtitle: 'Quer conversar ou propor uma oportunidade? Mande uma mensagem e responderei o mais rápido possível.',
      sendBtn: 'Enviar Mensagem',
      emailPlaceholder: 'Seu e-mail',
      messagePlaceholder: 'Sua mensagem...',
      successMsg: 'Mensagem pronta! Abrindo seu aplicativo de e-mail...'
    },
    footer: {
      copyright: '© 2026 Antonio Boucinhas Neto.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'E-mail'
    }
  }
};
