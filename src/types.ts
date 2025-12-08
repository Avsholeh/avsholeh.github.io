export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  tags: string[];
  link?: string;
  stats?: string;
  image: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  stack: string[];
  type: "Full-time" | "Contract" | "Project" | "Internship";
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  research?: string;
  researchLink?: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  link?: string;
}
