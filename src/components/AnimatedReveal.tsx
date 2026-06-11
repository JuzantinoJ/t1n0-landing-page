import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

interface AnimatedRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  viewportAmount?: number;
}

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

export const AnimatedReveal = ({
  children,
  className = '',
  delay = 0,
  viewportAmount = 0.25
}: AnimatedRevealProps) => (
  <motion.div
    className={className}
    variants={revealVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: viewportAmount }}
    transition={{ duration: 0.6, ease: 'easeOut', delay }}
  >
    {children}
  </motion.div>
);
