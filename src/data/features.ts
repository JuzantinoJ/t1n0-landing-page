import { BookOpenCheck, Gauge, Handshake, LayoutDashboard, Scale, Settings2 } from 'lucide-react';
import type { Feature, Stat } from '../types/site';

export const features: Feature[] = [
  {
    title: 'Practical over hype',
    description: 'Every recommendation maps to work your team already needs to complete.',
    icon: Scale
  },
  {
    title: 'Business outcome focused',
    description: 'Projects are judged by time saved, consistency improved, and decisions made easier.',
    icon: Gauge
  },
  {
    title: 'Human-centred AI',
    description: 'Systems support people with clear oversight, review paths, and maintainable handover.',
    icon: Handshake
  },
  {
    title: 'Easy to maintain',
    description: 'Documentation, prompts, and workflows are structured so your team can keep improving them.',
    icon: Settings2
  },
  {
    title: 'Scalable architecture',
    description: 'Implementations can grow from simple automation to integrated business systems.',
    icon: LayoutDashboard
  },
  {
    title: 'Clear documentation',
    description: 'Your team receives the maps, SOPs, and operating notes needed to use the system confidently.',
    icon: BookOpenCheck
  }
];

export const stats: Stat[] = [
  { value: 6, suffix: '+', label: 'workflow areas covered' },
  { value: 7, suffix: '+', label: 'project types delivered' },
  { value: 100, suffix: '%', label: 'focused on business outcomes' }
];
