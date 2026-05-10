'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export const BounceInFromTop: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 'all', once: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20, delay }}
    >
      {children}
    </motion.div>
  );
};
