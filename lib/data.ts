import { Project, ExperienceItem, EducationItem } from './types';

export const personalInfo = {
  name: 'Antonio Boucinhas Neto',
  tagline: {
    EN: 'Full Stack Developer',
    PT: 'Desenvolvedor Full Stack'
  },
  about: {
    EN: 'I work as a Full Stack Developer at Teknisa, developing high-complexity enterprise systems with the Zeedhi-next framework. On a daily basis, I focus on building dynamic and intuitive interfaces using TypeScript and JavaScript, always integrated with PHP backends and Oracle SQL / PostgreSQL databases. Extensive experience in creating complex screens, dynamic grids, advanced filters, and implementing business logic with strong UI/UX principles.\n\nKey Technologies:\n• Frontend: TypeScript, JavaScript, React.js, Next.js, HTML5, CSS.\n• Backend: PHP, Java Spring Boot, C#, .NET.\n• Database: Oracle SQL, PostgreSQL, PL/SQL.\n\nSolid background in REST API integration, JSON payload manipulation, legacy code refactoring, and Agile methodologies (Scrum and Kanban). Currently pursuing a Bachelor degree in Computer Science at Dom Helder (expected graduation 2027) with technical IT degree from COTEMIG.',
    PT: 'Atuo como Desenvolvedor Full Stack na Teknisa, onde trabalho no desenvolvimento de sistemas corporativos de alta complexidade com o framework Zeedhi-next. No dia a dia, me dedico a construir interfaces dinâmicas e intuitivas usando TypeScript e JavaScript, sempre integradas a back-ends em PHP e bancos Oracle SQL. Tenho bastante experiência na criação de telas complexas, grids dinâmicos, filtros avançados e na implementação de regras de negócio, sempre com foco forte em boa experiência do usuário (UI/UX).\n\nPrincipais tecnologias que trabalho:\n• Front-end: TypeScript, JavaScript, React.js, Next.js, HTML5 e CSS.\n• Back-end: PHP, Java Spring Boot, C# e .NET.\n• Banco de Dados: Oracle SQL e PostgreSQL, modelagem de dados e PL/SQL.\n\nTenho sólida vivência com integração de APIs REST, manipulação de JSON, refatoração de código legado e metodologias ágeis (Scrum e Kanban). Sou graduando em Ciência da Computação pela Dom Helder (previsão 2027) e tenho formação técnica em TI pelo COTEMIG.'
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
    id: 'aws-cloud-foundations',
    title: 'AWS Cloud Architecture & Infrastructure',
    description: {
      EN: 'Certified AWS Academy Cloud Foundations project covering cloud architecture, EC2, S3 storage, RDS databases, auto-scaling, and security best practices.',
      PT: 'Projeto e formação com certificação AWS Academy Cloud Foundations, englobando arquitetura em nuvem, EC2, S3, bancos RDS, auto-scaling e segurança.'
    },
    tags: ['AWS', 'Cloud Computing', 'EC2', 'S3', 'Security'],
    href: 'https://github.com/antoniobouneto',
    codeHref: 'https://github.com/antoniobouneto',
    featured: true
  },
  {
    id: 'fullstack-zeedhi-php',
    title: 'Enterprise Web Application Engine',
    description: {
      EN: 'Full-stack enterprise application built with TypeScript, Zeedhi-next, PHP backend REST APIs, and Oracle SQL / PostgreSQL database integration.',
      PT: 'Aplicação web corporativa desenvolvida em TypeScript com Zeedhi-next, integrando APIs em PHP e bancos de dados Oracle SQL e PostgreSQL.'
    },
    tags: ['TypeScript', 'Next.js', 'PHP', 'Oracle SQL', 'PostgreSQL'],
    href: 'https://github.com/antoniobouneto',
    codeHref: 'https://github.com/antoniobouneto',
    featured: true
  },
  {
    id: 'java-spring-api',
    title: 'Java Spring Boot REST API',
    description: {
      EN: 'Scalable backend REST API built with Java and Spring Boot implementing OOP principles, data persistence, and clean architecture.',
      PT: 'API REST backend escalável desenvolvida em Java com Spring Boot, aplicando princípios de POO, persistência de dados e arquitetura limpa.'
    },
    tags: ['Java', 'Spring Boot', 'REST API', 'SQL'],
    href: 'https://github.com/antoniobouneto',
    codeHref: 'https://github.com/antoniobouneto',
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
    period: '2023 - 2027 (Previsão)'
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
