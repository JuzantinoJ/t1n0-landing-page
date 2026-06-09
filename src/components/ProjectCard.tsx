import { motion } from "framer-motion";
import type { Project } from "../types/site.js";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => (
  <motion.article
    whileHover={{ y: -6 }}
    transition={{ duration: 0.2 }}
    className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:border-brand-teal/30 hover:shadow-premium"
  >
    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-teal">
      <span>{project.client}</span>
      <span aria-hidden="true" className="h-1 w-1 rounded-full bg-brand-mint" />
      <span>{project.industry}</span>
    </div>
    <h3 className="mt-5 font-heading text-2xl font-semibold leading-tight text-slate-950">
      {project.title}
    </h3>
    <p className="mt-4 flex-1 text-base leading-7 text-brand-slate">
      {project.description}
    </p>
    <div className="mt-6 rounded-xl bg-slate-50 p-4">
      <p className="text-sm font-semibold text-slate-950">Outcome</p>
      <p className="mt-2 text-sm leading-6 text-brand-slate">
        {project.outcome}
      </p>
    </div>
    <div className="mt-5 flex flex-wrap gap-2">
      {project.technologies.map((technology: string) => (
        <span
          key={technology}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600"
        >
          {technology}
        </span>
      ))}
    </div>
  </motion.article>
);
