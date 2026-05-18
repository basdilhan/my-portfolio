/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';
import {
  FaCode, FaDatabase, FaServer, FaMobileAlt, FaBrain
} from 'react-icons/fa';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

const Skills = () => {
  const skillCategories = [
    {
      icon: <FaCode />,
      title: 'Frontend Development',
      accent: 'teal',
      skills: [
        { name: 'React.js', level: 92 },
        { name: 'JavaScript / TypeScript', level: 90 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Framer Motion', level: 85 },
        { name: 'CSS Modules & Responsive Design', level: 92 },
        { name: 'Vite', level: 88 },
      ]
    },
    {
      icon: <FaServer />,
      title: 'Backend Development',
      accent: 'blue',
      skills: [
        { name: 'Java & Spring Boot', level: 90 },
        { name: 'REST APIs & Microservices', level: 88 },
        { name: 'Node.js & Express', level: 82 },
        { name: 'PHP', level: 84 },
        { name: 'JWT Authentication', level: 87 },
        { name: 'Database Design', level: 86 },
      ]
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile Development',
      accent: 'purple',
      skills: [
        { name: 'Flutter & Dart', level: 86 },
        { name: 'Android (Java)', level: 84 },
        { name: 'Firebase & Realtime DB', level: 85 },
        { name: 'Material Design 3', level: 83 },
        { name: 'IoT / MQTT Integration', level: 80 },
        { name: 'Gradle & App Build', level: 78 },
      ]
    },
    {
      icon: <FaBrain />,
      title: 'AI / ML & Data',
      accent: 'green',
      skills: [
        { name: 'Python (Pandas, NumPy)', level: 86 },
        { name: 'Scikit-learn & ML Models', level: 80 },
        { name: 'Jupyter Notebooks', level: 88 },
        { name: 'ETL Pipelines & Data Warehousing', level: 82 },
        { name: 'Data Visualization', level: 84 },
        { name: 'Statistical Analysis', level: 83 },
      ]
    },
    {
      icon: <FaDatabase />,
      title: 'Databases & Tools',
      accent: 'teal',
      skills: [
        { name: 'MySQL & PostgreSQL', level: 88 },
        { name: 'Firebase Firestore', level: 85 },
        { name: 'Git & GitHub', level: 92 },
        { name: 'Figma & UI/UX Design', level: 85 },
        { name: 'Docker & CI/CD', level: 78 },
        { name: 'Arduino & IoT Hardware', level: 80 },
      ]
    },
  ];

  const accentMap = {
    teal:   'linear-gradient(90deg, #64ffda, #61dafb)',
    blue:   'linear-gradient(90deg, #61dafb, #818cf8)',
    purple: 'linear-gradient(90deg, #a78bfa, #ec4899)',
    green:  'linear-gradient(90deg, #22c55e, #64ffda)',
  };

  return (
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
          <p>
            From full-stack web and mobile development to AI&nbsp;/ ML pipelines and data analytics —
            a broad toolkit built across real projects.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className={`${styles.category} ${styles[`accent_${category.accent}`]}`}
              variants={cardVariant}
            >
              <div className={styles.categoryHeader}>
                <div className={styles.icon}>{category.icon}</div>
                <h3>{category.title}</h3>
              </div>

              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={styles.skill}>
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.progressBar}>
                      <motion.div
                        className={styles.progress}
                        style={{ background: accentMap[category.accent] }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: 0.1 + skillIndex * 0.08,
                          ease: 'easeOut'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
