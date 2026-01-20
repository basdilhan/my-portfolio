import React, { useEffect, useRef, useState } from 'react';
import styles from './Skills.module.css';
import { FaCode, FaDatabase, FaServer, FaTools } from 'react-icons/fa';

const Skills = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
    <section id="skills" className={styles.skills} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Skills & Expertise</h2>
          <p>Technologies I work with to bring ideas to life</p>
        </div>

        <div className={styles.grid}>
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`${styles.category} ${isVisible ? styles.visible : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
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
                      <div 
                        className={styles.progress}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
