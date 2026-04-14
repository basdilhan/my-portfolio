// src/Components/CustomCursor.jsx
import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Framer Motion values for physics-based fluid movement
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for trailing effect
  const springX = useSpring(mouseX, { stiffness: 400, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 400, damping: 28 });

  useEffect(() => {
    // Detect touch devices to hide custom cursor
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 10); // Offset to perfectly center the dot
      mouseY.set(e.clientY - 10);
    };

    const handleMouseOver = (e) => {
      // Check if hovering over a clickable element
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (isTouchDevice) return null;

  return (
    <>
      <motion.div
        className={styles.cursorDot}
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          scale: isHovering ? 0 : 1, // Shrink dot on hover
          opacity: 1
        }}
        transition={{ type: 'tween', duration: 0.15 }}
      />
      <motion.div
        className={styles.cursorRing}
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: isHovering ? 1.8 : 1, // Expand ring on hover
          backgroundColor: isHovering ? 'rgba(100,255,218,0.1)' : 'transparent',
          opacity: isHovering ? 0.8 : 0.5
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
    </>
  );
};

export default CustomCursor;
