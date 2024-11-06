import React from 'react';
import { motion, Variants, Transition } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  variants?: Variants;
  transition?: Transition;
  className?: string;
  staggerChildren?: boolean | number;
  delayChildren?: number;
  [x: string]: any; // Allow additional props
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const defaultTransition: Transition = {
  duration: 0.6,
  ease: 'easeOut',
};

const Reveal: React.FC<RevealProps> = ({
  children,
  variants = defaultVariants,
  transition = {},
  className,
  staggerChildren = false,
  delayChildren = 0,
  ...props
}) => {
  const combinedTransition = { ...defaultTransition, ...transition };

  if (staggerChildren) {
    // Determine the stagger delay
    const staggerDelay =
      typeof staggerChildren === 'number' ? staggerChildren : 0.2;

    // Parent container variants with stagger settings
    const containerVariants: Variants = {
      hidden: {},
      visible: {
        transition: {
          delayChildren, // Delay before children animations start
          staggerChildren: staggerDelay, // Delay between child animations
        },
      },
    };

    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={className}
        {...props}
      >
        {React.Children.map(children, (child) => (
          // Wrap each child with a motion.div
          <motion.div variants={variants} transition={combinedTransition}>
            {child}
          </motion.div>
        ))}
      </motion.div>
    );
  } else {
    // Non-staggered animation
    return (
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={combinedTransition}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
};

export default Reveal;
