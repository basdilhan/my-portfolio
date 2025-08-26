import React from 'react';
import styles from './Project.module.css';

// Create an array of your project data
const projects = [
  {
    title: "E-Commerce Site",
    imageSrc: "https://via.placeholder.com/300", // Replace with project image
    description: "A fully functional e-commerce platform built with the MERN stack.",
    skills: ["React", "Express", "Node", "MongoDB"],
    demo: "#", // Replace with live demo URL
    source: "#" // Replace with GitHub source URL
  },
  {
    title: "Portfolio Website",
    imageSrc: "https://via.placeholder.com/300", // Replace with project image
    description: "My personal portfolio, built with React and Vite for blazing fast performance.",
    skills: ["React", "Vite", "CSS Modules"],
    demo: "#", // Replace with live demo URL
    source: "#" // Replace with GitHub source URL
  },
];

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, id) => (
          <div key={id} className={styles.projectCard}>
            <img src={project.imageSrc} alt={`Screenshot of ${project.title}`} className={styles.image} />
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <ul className={styles.skills}>
              {project.skills.map((skill, id) => <li key={id}>{skill}</li>)}
            </ul>
            <div className={styles.links}>
              <a href={project.demo} className={styles.link} target="_blank" rel="noopener noreferrer">Demo</a>
              <a href={project.source} className={styles.link} target="_blank" rel="noopener noreferrer">Source</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;