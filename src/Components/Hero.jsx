// src/components/Hero.jsx
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import styles from './HeroClean.module.css';
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope } from 'react-icons/fa';

/* ── Particle canvas ── */
function useParticleCanvas(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    const PARTICLE_COUNT = 70;
    const MAX_DIST = 130;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2 + 1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100,255,218,${0.15 * (1 - dist / MAX_DIST)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(100,255,218,0.5)';
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);
}

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
};

// Word reveal variants
const titleVariant = {
  hidden: { y: '120%', opacity: 0, rotate: 5 },
  show: { y: 0, opacity: 1, rotate: 0, transition: { type: 'spring', damping: 12, stiffness: 100 } }
};

// Magnetic Button Wrapper
const MagneticButton = ({ children, className, href, animate }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.3); // Magnetic strength multiplier
    y.set((clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      animate={animate}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};

const Hero = () => {
  const typedRef  = useRef(null);
  const canvasRef = useRef(null);
  useParticleCanvas(canvasRef);

  // Parallax Setup
  const { scrollY } = useScroll();
  // Move the background slower than scroll, and the content slightly faster
  const bgY = useTransform(scrollY, [0, 1000], [0, 300]);
  const contentY = useTransform(scrollY, [0, 1000], [0, -100]);
  const contentOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Full Stack Developer',
        'Data Analyst',
        'Statistics Enthusiast',
        'Java & React Engineer',
      ],
      typeSpeed: 55,
      backSpeed: 35,
      backDelay: 1800,
      loop: true,
      smartBackspace: true,
    });
    return () => typed.destroy();
  }, []);

  const titleWords = ["Hi,", "I'm", "Samudu", "Dilhan"];

  return (
    <motion.section 
      className={styles.container} 
      id="hero"
    >
      <motion.div style={{ y: bgY, width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
        <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
      </motion.div>

      <motion.div 
        className={styles.contentWrapper}
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{ y: contentY, opacity: contentOpacity, position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <div className={styles.titleMaskWrapper}>
          {titleWords.map((word, i) => (
            <span key={i} style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.4em' }}>
              <motion.span 
                variants={titleVariant} 
                className={word === "Samudu" || word === "Dilhan" ? styles.accent : ''}
                style={{ display: 'inline-block' }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </div>

        <motion.h3 variants={fadeUp} className={styles.subtitle}>
          <span ref={typedRef} />
        </motion.h3>

        <motion.p variants={fadeUp} className={styles.description}>
          I specialize in full-stack web development with Java Spring Boot and React,
          and I'm equally passionate about data analytics and statistics. I love
          transforming raw data into actionable insights while building scalable
          applications.
        </motion.p>

        <motion.div variants={fadeUp} className={styles.buttonContainer}>
          {/* Continuous pulsing CTA button with Magnetic pull */}
          <MagneticButton
            animate={{ boxShadow: ['0px 0px 0px rgba(100,255,218,0)', '0px 0px 20px rgba(100,255,218,0.5)', '0px 0px 0px rgba(100,255,218,0)'] }}
            className={styles.contactBtn} 
            href="#contact"
          >
            <FaEnvelope />
            Get In Touch
          </MagneticButton>
          
          <MagneticButton 
            className={styles.outlineBtn} 
            href="#cv"
          >
            <FaDownload />
            View Experience
          </MagneticButton>
        </motion.div>

        <motion.div variants={fadeUp} className={styles.socials}>
          <a href="https://github.com/basdilhan" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub Profile">
            <FaGithub size={26} />
          </a>
          <a href="https://www.linkedin.com/in/samudu-dilhan-45907028b/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn Profile">
            <FaLinkedin size={26} />
          </a>
        </motion.div>

        <motion.div variants={fadeUp} className={styles.scrollCue} aria-hidden="true">
          <span />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
