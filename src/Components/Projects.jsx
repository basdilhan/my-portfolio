// src/Components/Projects.jsx
import React, { useState, useEffect, useRef } from 'react';
import styles from './Project.module.css';
import { projects } from "../Data/Projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const list = Array.isArray(projects) ? projects : [];

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.container} id="projects">
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <p className={styles.subtitle}>
          A selection of work I'm proud of. Built with modern tech and clean code.
        </p>
      </div>

      {!list.length ? (
        <p className={styles.empty}>No projects to display.</p>
      ) : (
        <div className={styles.grid}>
          {list.map((project) => (
            <article key={project.id} className={styles.card}>
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
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
