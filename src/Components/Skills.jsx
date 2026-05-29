/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const skillGroups = [
  {
    label: 'Frontend',
    color: 'teal',
    items: ['React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Vite', 'Framer Motion'],
  },
  {
    label: 'Backend',
    color: 'blue',
    items: ['Java', 'Spring Boot', 'Node.js', 'PHP', 'REST APIs', 'JWT Auth'],
  },
  {
    label: 'Mobile',
    color: 'purple',
    items: ['Flutter', 'Dart', 'Android (Java)', 'Firebase', 'MQTT / IoT'],
  },
  {
    label: 'AI / ML & Data',
    color: 'green',
    items: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Jupyter', 'Data Visualization'],
  },
  {
    label: 'Databases & Tools',
    color: 'teal',
    items: ['MySQL', 'PostgreSQL', 'Firebase Firestore', 'Git', 'Docker', 'Figma'],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const groupVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
};

const Skills = () => (
  <section id="skills" className={styles.skills}>
    <div className={styles.container}>

      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className={styles.eyebrow}>Skill Set</span>
        <h2>Technical Skills</h2>
        <p>A broad toolkit built across real-world projects — from web and mobile to AI&nbsp;/ ML.</p>
      </motion.div>

      <motion.div
        className={styles.groups}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.label}
            className={`${styles.group} ${styles[`accent_${group.color}`]}`}
            variants={groupVariants}
          >
            <h3 className={styles.groupLabel}>{group.label}</h3>
            <motion.div
              className={styles.tags}
              variants={containerVariants}
            >
              {group.items.map((skill) => (
                <motion.span
                  key={skill}
                  className={styles.tag}
                  variants={tagVariants}
                  whileHover={{ y: -3, scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

    </div>
  </section>
);

export default Skills;
