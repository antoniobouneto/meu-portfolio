export type Language = 'EN' | 'PT';

export interface Project {
  id: string;
  title: string;
  description: {
    EN: string;
    PT: string;
  };
  longDescription?: {
    EN: string;
    PT: string;
  };
  tags: string[];
  href: string;
  codeHref?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  company: string;
  role: {
    EN: string;
    PT: string;
  };
  period: string;
  description?: {
    EN: string;
    PT: string;
  };
  logo?: string;
}

export interface EducationItem {
  school: string;
  degree: {
    EN: string;
    PT: string;
  };
  period: string;
}
