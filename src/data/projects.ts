import type { Project } from '../types/site';

// Static project data is intentionally isolated so src/services/api.ts can
// replace this with a Supabase, Firebase, PostgreSQL, or headless CMS call.
export const projects: Project[] = [
  {
    client: 'Jamal Kazura',
    industry: 'E-commerce',
    title: 'Shopify Transformation',
    description:
      'Rebuilt the commerce workflow around cleaner product management, faster updates, and a more reliable customer buying journey.',
    outcome: 'A more maintainable Shopify operation with fewer manual update loops.',
    technologies: ['Shopify', 'Workflow mapping', 'Automation roadmap']
  },
  {
    client: 'Jamal Kazura',
    industry: 'E-commerce',
    title: 'AI Product Content Workflow',
    description:
      'Designed a practical AI-assisted content flow for product descriptions, metadata, and catalogue consistency.',
    outcome: 'Faster product publishing with more consistent content quality.',
    technologies: ['AI assistants', 'Prompt systems', 'Content QA']
  },
  {
    client: 'Jamal Kazura',
    industry: 'E-commerce',
    title: 'International Shipping Integration',
    description:
      'Connected shipping requirements into the operating workflow so international orders can move with less internal coordination.',
    outcome: 'Reduced order handling friction and clearer shipping operations.',
    technologies: ['Shopify', 'Shipping logic', 'Operations design']
  },
  {
    client: 'Jamal Kazura',
    industry: 'E-commerce',
    title: 'Airwallex Integration',
    description:
      'Integrated payment and operations needs into the commerce workflow for cleaner cross-border business handling.',
    outcome: 'Improved payment visibility and smoother international transactions.',
    technologies: ['Airwallex', 'Payments', 'Workflow automation']
  }
];
