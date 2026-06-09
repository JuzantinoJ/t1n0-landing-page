import { ArrowRight } from 'lucide-react';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export const PrimaryButton = ({ children, className = '', ...props }: ButtonProps) => (
  <a
    className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-white shadow-glow transition duration-200 hover:-translate-y-0.5 hover:bg-[#01584f] focus:outline-none focus:ring-4 focus:ring-brand-mint/40 ${className}`}
    {...props}
  >
    {children}
    <ArrowRight aria-hidden="true" className="h-4 w-4" />
  </a>
);

export const SecondaryButton = ({ children, className = '', ...props }: ButtonProps) => (
  <a
    className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-300/80 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition duration-200 hover:-translate-y-0.5 hover:border-brand-teal hover:text-brand-teal focus:outline-none focus:ring-4 focus:ring-brand-mint/40 ${className}`}
    {...props}
  >
    {children}
  </a>
);
