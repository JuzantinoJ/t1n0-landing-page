import { motion } from "framer-motion";
import type { Service } from "../types/site.js";

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const Icon = service.icon;

  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:border-brand-teal/30 hover:shadow-premium"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal transition duration-200 group-hover:bg-brand-teal group-hover:text-white">
        <Icon aria-hidden="true" className="h-6 w-6" />
      </div>
      <h3 className="mt-6 font-heading text-xl font-semibold text-slate-950">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-brand-slate">
        {service.description}
      </p>
    </motion.article>
  );
};
