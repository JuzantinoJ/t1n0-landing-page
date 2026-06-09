import { motion } from "framer-motion";
import type { Client } from "../types/site.js";

interface ClientCardProps {
  client: Client;
}

export const ClientCard = ({ client }: ClientCardProps) => (
  <motion.article
    whileHover={{ y: -4 }}
    transition={{ duration: 0.2 }}
    className="flex h-full min-h-32 flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
  >
    <p className="font-heading text-lg font-semibold text-slate-950">
      {client.name}
    </p>
    <p className="mt-3 text-sm leading-6 text-brand-slate">{client.focus}</p>
  </motion.article>
);
