// src/Components/Projects.jsx
/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Project.module.css';
import { projects } from "../Data/Projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

const Projects = () => {
  const list = Array.isArray(projects) ? projects : [];

  return (
    <section className={styles.container} id="projects">
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.sectionTitle}>Projects</h2>
        <p className={styles.subtitle}>
          A selection of recent work built with practical tools and clean, readable code.
        </p>
      </motion.div>

      {!list.length ? (
        <p className={styles.empty}>No projects to display.</p>
      ) : (
        <motion.div 
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {list.map((project) => (
            <motion.article 
              key={project.id} 
              className={styles.card}
              variants={cardVariant}
              whileHover={{ y: -4, scale: 1.01, transition: { type: "spring", stiffness: 200 } }}
            >
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} className={styles.thumb} />
                <div className={styles.overlay}></div>
              </div>

              <div className={styles.body}>
                <span className={styles.category}>{project.subtitle}</span>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.techStack}>
                  {(project.tech || []).map((tech) => (
                    <span key={tech} className={styles.badge}>{tech}</span>
                  ))}
                </div>

                <div className={styles.footer}>
                  <div className={styles.actions}>
                    {project.github && (
                      <a 
                        className={styles.btn}
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        title="View on GitHub"
                      >
                        <FaGithub size={18} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        className={`${styles.btn} ${styles.demo}`}
                        href={project.demo} 
                        target="_blank" 
                        rel="noreferrer"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt size={16} />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
