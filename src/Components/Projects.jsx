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

const getFallbackLabel = (title) => {
  if (!title) return 'Project';
  return title
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 3)
    .toUpperCase();
};

const ProjectVisual = ({ project }) => {
  if (project.image) {
    return (
      <div className={styles.imageFrame}>
        <img
          src={project.image}
          alt={project.title}
          className={styles.thumb}
          loading="lazy"
          decoding="async"
        />
        {project.imageLabel && (
          <div className={styles.imageLabel}>
            <span>{project.imageLabel}</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={styles.imageFallback}>
      <div className={styles.fallbackCopy}>
        <span className={styles.fallbackLabel}>{project.subtitle}</span>
        <strong>{project.title}</strong>
        <p>{project.description}</p>
      </div>
      <div className={styles.fallbackMark}>{getFallbackLabel(project.title)}</div>
    </div>
  );
};

const Projects = () => {
  const list = Array.isArray(projects) ? projects : [];
  const orderedProjects = [...list].sort((a, b) => Number(b.featured) - Number(a.featured));

  return (
    <section className={styles.container} id="projects">
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className={styles.eyebrow}>Selected Work</span>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <p className={styles.subtitle}>
          A focused set of projects that balance UI polish, functional detail, and real-world problem solving.
        </p>
        <div className={styles.sectionStats}>
          <span className={styles.statPill}>{list.length} projects</span>
          <span className={styles.statPill}>Multi-stack delivery</span>
          <span className={styles.statPill}>Business and technical projects</span>
        </div>
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
            {orderedProjects.map((project) => (
            <motion.article 
              key={project.id} 
              className={`${styles.card} ${project.featured ? styles.featuredAccent : ''}`}
              variants={cardVariant}
              whileHover={{ y: -3, scale: 1.005, transition: { type: "spring", stiffness: 180 } }}
            >
              <div className={styles.cardVisual}>
                <ProjectVisual project={project} />
                <div className={styles.overlay}></div>
                {project.featured && <span className={styles.featuredBadge}>Featured</span>}
              </div>

              <div className={styles.body}>
                <span className={styles.category}>{project.subtitle}</span>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.metaRow}>
                  {(project.highlights || []).slice(0, 2).map((item) => (
                    <span key={item} className={styles.metaPill}>{item}</span>
                  ))}
                </div>

                <div className={styles.techStack}>
                  {(project.tech || []).map((tech) => (
                    <span key={tech} className={styles.badge}>{tech}</span>
                  ))}
                </div>

                {(project.highlights && project.highlights.length) && (
                  <div className={styles.cardHighlights}>
                    {(project.highlights || []).slice(2,4).map((h) => (
                      <span key={h} className={styles.highlightPill}>{h}</span>
                    ))}
                  </div>
                )}

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
