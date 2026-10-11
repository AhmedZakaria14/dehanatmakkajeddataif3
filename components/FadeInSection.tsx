'use client';

import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';

interface FadeInSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  isImmediate?: boolean;
}

export default function FadeInSection({
  children,
  className = '',
  id,
  delay = 0,
  isImmediate = false,
  ...rest
}: FadeInSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -20px 0px' });
  const shouldReduceMotion = useReducedMotion();

  // If reduced motion is preferred or isImmediate is true, do not hide initially
  const initial = isImmediate || shouldReduceMotion ? false : { opacity: 0, y: 24 };
  const animate = isInView || isImmediate ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 24 };

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial={initial}
      animate={animate}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...(rest as any)}
    >
      {children}
    </motion.section>
  );
}
