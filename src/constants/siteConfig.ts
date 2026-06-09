import logoUrl from '../assets/logo/t1n0-logo.png';
import type { NavigationLink, SocialLink } from '../types/site';

export const siteConfig = {
  companyName: 'T1N0.ai',
  tagline: 'AI Consultancy — Automation and Growth',
  motto: 'Remove Friction. Create Momentum.',
  email: 't1noai.sg@gmail.com',
  url: 'https://t1n0.ai',
  logoUrl,
  seo: {
    title: 'T1N0.ai | AI Workflow Automation Consultancy',
    description:
      'T1N0.ai helps businesses remove workflow friction with practical AI systems, automation, custom assistants, and measurable operational improvements.',
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
