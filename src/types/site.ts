import type { LucideIcon } from 'lucide-react';

export interface NavigationLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface Client {
  name: string;
  focus: string;
}

export interface Project {
  client: string;
  industry: string;
  title: string;
  description: string;
  outcome: string;
  technologies: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}
