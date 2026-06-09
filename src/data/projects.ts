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
    industry: 'Creative AI',
    title: 'Product Image Custom GPT',
    description:
      'Created a custom GPT that asks the team what kind of image they need, collects the creative brief, and uses uploaded references to guide image prompts for Shopify and social media assets.',
    outcome: 'A repeatable creative workflow for producing more consistent product visuals and design directions.',
    technologies: ['Custom GPT', 'Image prompting', 'Creative briefs']
  },
  {
    client: 'Jamal Kazura',
    industry: 'Social content',
    title: 'Social Media Post Custom GPT',
    description:
      'Built a custom GPT to help the team generate structured social media post ideas, captions, hooks, and content angles based on campaign goals and product context.',
    outcome: 'Faster content planning with clearer prompts, reusable formats, and stronger alignment across posts.',
    technologies: ['Custom GPT', 'Content planning', 'Prompt systems']
  },
  {
    client: 'Jamal Kazura',
    industry: 'Research automation',
    title: 'Weekly Competitor Research Pipeline',
    description:
      'Designed an n8n workflow that reads research requests from Google Sheets, uses the OpenAI API to support competitor and market research, and runs on a Monday schedule.',
    outcome: 'A recurring research process that turns team inputs into structured market intelligence without starting from scratch each week.',
    technologies: ['n8n', 'OpenAI API', 'Google Sheets']
  },
  {
    client: 'Jamal Kazura',
    industry: 'Reporting automation',
    title: 'Research Report Delivery System',
    description:
      'Configured the workflow to generate research outputs, save PDF reports into Google Drive, and email the completed report to the relevant team members.',
    outcome: 'Research is easier to distribute, archive, and review across the team after each scheduled run.',
    technologies: ['Google Drive', 'Email automation', 'PDF reports']
  },
  {
    client: 'Jamal Kazura',
    industry: 'Strategy workflow',
    title: 'Planning, Analytics, and Strategy Layer',
    description:
      'Extended the research flow with planning support that combines research outputs with analytics and strategy prompts to suggest social media direction, campaign ideas, and next steps for human review.',
    outcome: 'The team gets clearer recommendations after research, while approvals and final decisions stay human-led.',
    technologies: ['AI agents', 'Analytics prompts', 'Human review']
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
