import logoUrl from '../assets/logo/t1n0-logo.png';
import type { NavigationLink, SocialLink } from '../types/site';

export const siteConfig = {
  companyName: 'T1N0.ai',
  tagline: 'AI education and implementation for Singapore businesses',
  motto: 'Understand first. Build with confidence.',
  email: 't1noai.sg@gmail.com',
  url: 'https://t1n0.ai',
  logoUrl,
  seo: {
    title: 'T1N0.ai | AI Workflow Automation Consultancy',
    description:
      'T1N0.ai helps Singapore businesses understand AI clearly, identify practical use cases, and build automation, custom assistants, and workflow systems with confidence.',
    keywords: [
      'AI workflow automation',
      'AI consultancy',
      'Workflow optimisation',
      'Business automation',
      'AI implementation services',
      'AI assistants',
      'Operational efficiency'
    ]
  },
  navLinks: [
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ] satisfies NavigationLink[],
  socialLinks: [
    { label: 'Email', href: 'mailto:t1noai.sg@gmail.com' }
  ] satisfies SocialLink[]
};
