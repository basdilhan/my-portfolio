/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';
import { FaCode, FaDatabase, FaServer, FaTools } from 'react-icons/fa';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
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
      skills: [
        { name: 'React.js', level: 92 },
        { name: 'Vite', level: 88 },
        { name: 'JavaScript / TypeScript', level: 90 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Framer Motion', level: 85 },
        { name: 'CSS Modules & Responsive Design', level: 92 }
      ]
    },
    {
      icon: <FaServer />,
      title: 'Backend Development',
      skills: [
        { name: 'Java & Spring Boot', level: 90 },
        { name: 'Node.js & Express', level: 82 },
        { name: 'REST APIs & Microservices', level: 88 },
        { name: 'PHP & Laravel', level: 84 },
        { name: 'JWT Authentication', level: 87 },
        { name: 'Database Design & Optimization', level: 86 }
      ]
    },
    {
      icon: <FaDatabase />,
      title: 'Data & Databases',
      skills: [
        { name: 'MySQL & PostgreSQL', level: 88 },
        { name: 'Firebase Realtime DB', level: 85 },
        { name: 'Data Analysis & Python', level: 84 },
        { name: 'ETL Pipelines', level: 82 },
        { name: 'Statistical Analysis', level: 83 },
        { name: 'Data Visualization (Jupyter)', level: 84 }
      ]
    },
    {
      icon: <FaTools />,
      title: 'Mobile & Tools',
      skills: [
        { name: 'Flutter & Dart', level: 86 },
        { name: 'Android Development', level: 84 },
        { name: 'Git & GitHub Workflows', level: 92 },
        { name: 'IoT / MQTT Protocols', level: 80 },
        { name: 'Figma & UI/UX Design', level: 85 },
        { name: 'Docker & CI/CD', level: 78 }
      ]
    }
  ];

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
          <h2>Skills</h2>
          <p>A clearer look at the tools I use to build polished frontend experiences, reliable backend systems, and mobile-friendly products.</p>
        </motion.div>

        <motion.div 
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className={styles.category}
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
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2 + (skillIndex * 0.1), ease: "easeOut" }}
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
