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
        { name: 'React.js', level: 90 },
        { name: 'JavaScript/ES6+', level: 85 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Thymeleaf', level: 75 }
      ]
    },
    {
      icon: <FaServer />,
      title: 'Backend Development',
      skills: [
        { name: 'Java & Spring Boot', level: 88 },
        { name: 'Node.js', level: 80 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'Python', level: 80 }
      ]
    },
    {
      icon: <FaDatabase />,
      title: 'Data Analytics & Databases',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 75 },
        { name: 'Statistical Analysis', level: 82 },
        { name: 'Data Visualization', level: 85 }
      ]
    },
    {
      icon: <FaTools />,
      title: 'Analytics Tools & Others',
      skills: [
        { name: 'Excel / Power BI', level: 85 },
        { name: 'Python (Pandas, NumPy)', level: 80 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'IoT Integration', level: 75 }
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
          <h2>Skills & Expertise</h2>
          <p>Technologies I work with to bring ideas to life</p>
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
