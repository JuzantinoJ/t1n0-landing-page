import { BotMessageSquare, BrainCircuit, ClipboardList, GitBranch, GraduationCap, Workflow } from 'lucide-react';
import type { Service } from '../types/site';

export const services: Service[] = [
  {
    title: 'AI Workflow Audit',
    description: 'Review processes, identify automation opportunities, and leave with a practical roadmap of quick wins.',
    icon: ClipboardList
  },
  {
    title: 'Custom AI Assistant Setup',
    description: 'Assistants for support, sales, onboarding, knowledge search, reporting, and internal team workflows.',
    icon: BotMessageSquare
  },
  {
    title: 'Workflow Automation',
    description: 'Connect tools such as Sheets, Gmail, Slack, CRM, Airtable, Notion, Zapier, and Make.',
    icon: Workflow
  },
  {
    title: 'AI Training for Teams',
    description: 'Practical training that helps teams use AI responsibly, clearly, and with immediate business value.',
    icon: GraduationCap
  },
  {
    title: 'SOP & Prompt Systems',
    description: 'Prompt libraries, department SOPs, workflow templates, and usage guidelines teams can maintain.',
    icon: BrainCircuit
  },
  {
    title: 'Agentic Workflow Solutions',
    description: 'Human-supervised workflows for research, summarisation, routing, reviews, and approval-based actions.',
    icon: GitBranch
  }
];
