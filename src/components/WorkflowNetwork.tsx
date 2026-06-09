import { motion } from 'framer-motion';
import { BarChart3, Database, FileCheck2, MailCheck, Workflow } from 'lucide-react';

const nodes = [
  { label: 'Intake', x: '12%', y: '24%' },
  { label: 'Review', x: '42%', y: '12%' },
  { label: 'Route', x: '72%', y: '28%' },
  { label: 'Report', x: '24%', y: '72%' },
  { label: 'Decision', x: '64%', y: '70%' }
];

const cards = [
  { label: 'Lead summary', value: '3 min', icon: MailCheck, className: 'left-2 top-8' },
  { label: 'Data sync', value: 'Live', icon: Database, className: 'right-0 top-24' },
  { label: 'Weekly report', value: 'Auto', icon: BarChart3, className: 'bottom-10 left-8' },
  { label: 'Approval path', value: 'Ready', icon: FileCheck2, className: 'bottom-2 right-12' }
];

export const WorkflowNetwork = () => (
  <div className="relative min-h-[440px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-2xl">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(110,231,216,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(110,231,216,0.08)_1px,transparent_1px)] bg-[size:42px_42px]" />
    <svg className="absolute inset-0 h-full w-full" role="img" aria-label="Animated workflow network diagram">
      <defs>
        <linearGradient id="lineGradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#6EE7D8" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#01655C" stopOpacity="0.42" />
        </linearGradient>
      </defs>
      <path d="M72 115 C170 20 270 70 352 105 S506 104 578 154" fill="none" stroke="url(#lineGradient)" strokeWidth="2" />
      <path d="M128 322 C226 250 330 302 458 320" fill="none" stroke="url(#lineGradient)" strokeWidth="2" />
      <path d="M204 126 C210 218 238 270 290 332" fill="none" stroke="url(#lineGradient)" strokeWidth="2" />
    </svg>
    {nodes.map((node, index) => (
      <motion.div
        key={node.label}
        className="absolute h-4 w-4 rounded-full border border-brand-mint bg-brand-navy shadow-[0_0_32px_rgba(110,231,216,0.5)]"
        style={{ left: node.x, top: node.y }}
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.25 }}
      >
        <span className="sr-only">{node.label}</span>
      </motion.div>
    ))}
    <motion.div
      className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-brand-mint/30 bg-brand-teal/25 text-brand-mint backdrop-blur"
      animate={{ y: [-6, 6, -6] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Workflow aria-hidden="true" className="h-10 w-10" />
    </motion.div>
    {cards.map((card, index) => {
      const Icon = card.icon;

      return (
        <motion.div
          key={card.label}
          className={`absolute ${card.className} w-44 rounded-2xl border border-white/10 bg-white/95 p-4 text-slate-950 shadow-xl`}
          animate={{ y: [-4, 8, -4] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }}
        >
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
              <Icon aria-hidden="true" className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-medium text-brand-slate">{card.label}</p>
              <p className="font-heading text-lg font-semibold">{card.value}</p>
            </div>
          </div>
        </motion.div>
      );
    })}
  </div>
);
