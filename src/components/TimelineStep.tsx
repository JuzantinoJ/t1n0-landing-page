import type { ProcessStep } from '../types/site';

interface TimelineStepProps {
  item: ProcessStep;
  isLast: boolean;
}

export const TimelineStep = ({ item, isLast }: TimelineStepProps) => (
  <li className="relative flex gap-5 pb-10 last:pb-0">
    {!isLast && <span aria-hidden="true" className="absolute left-6 top-12 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-brand-teal via-brand-mint to-slate-200" />}
    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-teal text-sm font-bold text-white shadow-glow">
      {item.step}
    </div>
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="font-heading text-xl font-semibold text-slate-950">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-brand-slate">{item.description}</p>
    </div>
  </li>
);
