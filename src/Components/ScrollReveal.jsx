import React from 'react';
import { motion } from 'framer-motion';

/* ═══════════════════════════════════════════
   ScrollReveal — wraps any child in a smooth
   scroll-triggered entrance animation.
   ═══════════════════════════════════════════ */

const presets = {
  up:    { hidden: { opacity: 0, y: 60  }, visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -60 }, visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 80  }, visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1 } },
  rotate:{ hidden: { opacity: 0, rotate: -6, y: 40 }, visible: { opacity: 1, rotate: 0, y: 0 } },
  flip:  { hidden: { opacity: 0, rotateX: -30, y: 30 }, visible: { opacity: 1, rotateX: 0, y: 0 } },
};

const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  once = true,
  margin = '-80px',
  className = '',
  style = {},
}) => {
  const preset = presets[direction] || presets.up;

  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      variants={{
        hidden: preset.hidden,
        visible: {
          ...preset.visible,
          transition: {
            duration,
            delay,
            ease: [0.22, 1, 0.36, 1], // expo-out
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

/* ═══════════════════════════════════════════
   SectionDivider — animated line between
   portfolio sections.
   ═══════════════════════════════════════════ */
const dividerStyle = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px 0',
  overflow: 'hidden',
};
const lineStyle = {
  height: '1px',
  background: 'linear-gradient(90deg, transparent, rgba(100,255,218,0.35), transparent)',
  borderRadius: '2px',
};
const dotStyle = {
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  background: '#64ffda',
  boxShadow: '0 0 8px rgba(100,255,218,0.5)',
  flexShrink: 0,
  margin: '0 12px',
};

const SectionDivider = () => (
  <motion.div
    style={dividerStyle}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <motion.div
      style={lineStyle}
      initial={{ width: 0 }}
      whileInView={{ width: '30%' }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    />
    <motion.div
      style={dotStyle}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, type: 'spring', stiffness: 300 }}
    />
    <motion.div
      style={lineStyle}
      initial={{ width: 0 }}
      whileInView={{ width: '30%' }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    />
  </motion.div>
);

export { ScrollReveal, SectionDivider };
export default ScrollReveal;
