import { AnimatedReveal } from "./AnimatedReveal.js";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  inverse?: boolean;
}

export const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = "center",
  inverse = false,
}: SectionHeaderProps) => (
  <AnimatedReveal
    className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
  >
    <p
      className={`text-sm font-semibold uppercase tracking-[0.18em] ${inverse ? "text-brand-mint" : "text-brand-teal"}`}
    >
      {eyebrow}
    </p>
    <h2
      className={`mt-4 font-heading text-3xl font-semibold leading-tight sm:text-4xl ${inverse ? "text-white" : "text-slate-950"}`}
    >
      {title}
    </h2>
    <p
      className={`mt-4 text-base leading-7 sm:text-lg ${inverse ? "text-slate-300" : "text-brand-slate"}`}
    >
      {description}
    </p>
  </AnimatedReveal>
);
