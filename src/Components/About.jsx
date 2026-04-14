// src/Components/About.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './About.module.css';
import { FaCode, FaPaintBrush, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaFigma, FaPhp, FaLeaf } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiSpringboot, SiArduino, SiFlutter } from 'react-icons/si';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

const slideVariants = {
  enter: { opacity: 0, scale: 0.95 },
  center: { zIndex: 1, opacity: 1, scale: 1, transition: { duration: 0.8 } },
  exit: { zIndex: 0, opacity: 0, transition: { duration: 0.8 } }
};

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const photos = [
    '/samudu.jpg',
    '/My1.jpg',
    '/My2.jpg',
    '/My3.jpg',
  ];

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % photos.length);
    }, 4000); // 4 seconds for smoother long transitions
    return () => clearInterval(timer);
  }, [photos.length]);

  const techs = [
    { icon: <FaReact size={50} />,        label: 'React'       },
    { icon: <FaNodeJs size={50} />,       label: 'Node.js'     },
    { icon: <IoLogoJavascript size={50}/>,label: 'JavaScript'  },
    { icon: <FaPhp size={50} />,          label: 'PHP'         },
    { icon: <SiSpringboot size={50} />,   label: 'Spring Boot' },
    { icon: <FaLeaf size={50} />,         label: 'Thymeleaf'   },
    { icon: <SiFlutter size={50} />,      label: 'Flutter'     },
    { icon: <SiArduino size={50} />,      label: 'Arduino'     },
    { icon: <FaHtml5 size={50} />,        label: 'HTML5'       },
    { icon: <FaCss3Alt size={50} />,      label: 'CSS3'        },
    { icon: <FaFigma size={50} />,        label: 'Figma'       },
  ];

  return (
    <section className={styles.container} id="about">
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        WHO AM I?
      </motion.h2>

      {/* Main content grid */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className={styles.content}
      >
        <div className={styles.aboutText}>
          <h3>Hey there! 👋 I'm Samudu Dilhan, a passionate developer from Sri Lanka.</h3>
          <p>
            I love crafting modern web and mobile applications, with a huge enthusiasm for building impactful
            solutions for the future. Beyond development, I'm passionate about data analytics and
            statistics—uncovering patterns, telling data stories, and making data-driven decisions. I often dive
            deep into areas like Machine Learning (ML), Artificial Intelligence (AI), and data visualization.
          </p>
          <p>
            Beyond the screen, I'm passionate about exploring new places and capturing moments through
            photography 📸. I believe that creativity fuels innovation, and I'm always looking for new experiences
            to draw inspiration from. When I'm not coding, you can find me listening to music 🎧, planning my
            next adventure, or simply enjoying the vibrant culture of Sri Lanka.
          </p>
          <p>
            Currently, I'm pursuing my studies in Software Engineering. Always hungry to learn, I'm on a journey
            to push boundaries and build amazing things. Let's connect and explore the world of innovation
            together! ✨
          </p>
        </div>

        <div className={styles.mediaSection}>
          {/* Photo slideshow */}
          <div className={styles.photoSlideshow} style={{ position: 'relative', overflow: 'hidden' }}>
            <AnimatePresence mode="popLayout">
              <motion.img
                key={currentImage}
                src={photos[currentImage]}
                alt={`Slideshow image ${currentImage + 1}`}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className={styles.slideshowImage}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}
              />
            </AnimatePresence>
          </div>

          {/* Dot indicators */}
          <div className={styles.dots}>
            {photos.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${currentImage === i ? styles.dotActive : ''}`}
                onClick={() => setCurrentImage(i)}
                aria-label={`Go to photo ${i + 1}`}
              />
            ))}
          </div>

          {/* Principle cards */}
          <div className={styles.principles}>
            <motion.div whileHover={{ y: -8 }} className={styles.principleCard}>
              <FaCode size={40} className={styles.icon} />
              <h4>Clean Code</h4>
              <p>I believe in writing efficient, scalable, and clean code.</p>
            </motion.div>
            <motion.div whileHover={{ y: -8 }} className={styles.principleCard}>
              <FaPaintBrush size={40} className={styles.icon} />
              <h4>Modern Design</h4>
              <p>I create sleek, responsive, and modern designs.</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Technologies */}
      <motion.div 
        className={styles.techSection}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h3 className={styles.techTitle}>Technologies I Use</h3>
        <div className={styles.techGrid}>
          {techs.map(({ icon, label }) => (
            <motion.div
              key={label}
              className={styles.techItem}
              variants={itemVariant}
              whileHover={{ scale: 1.15, rotate: 360, transition: { duration: 0.6 } }}
            >
              {icon}
              <p>{label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
