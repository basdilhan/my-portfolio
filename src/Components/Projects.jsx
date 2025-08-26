import React from 'react';
import styles from './Projects.module.css';
// Import the new data file
import { projects } from '../../data/projects';

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, id) => (
          <div key={id} className={styles.projectCard}>
            <img 
              src={project.image} 
              alt={`Screenshot of the ${project.title} project`} // More descriptive alt text
              className={styles.image} 
            />
            <div className={styles.cardContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <ul className={styles.skills}>
                {project.technologies.map((tech, id) => <li key={id}>{tech}</li>)}
              </ul>
              <div className={styles.links}>
                <a href={project.link} className={styles.link} target="_blank" rel="noopener noreferrer">Demo</a>
                <a href={project.source} className={styles.link} target="_blank" rel="noopener noreferrer">Source</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;