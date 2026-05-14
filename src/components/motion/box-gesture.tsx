'use client';

import { motion } from 'motion/react';
import { useRef } from 'react';

export const BoxGesture: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
}) => {
  const ref = useRef(null);

  return (
    <motion.div ref={ref} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      {children}
    </motion.div>
  );
};
