// src/Components/Projects.jsx
import React, { useState, useEffect } from 'react';
import styles from './Project.module.css';
import { projects } from '../Data/Projects';

const Projects = () => {
  const [flippedCardId, setFlippedCardId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Handle filtering and searching
  useEffect(() => {
    const filtered = projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredProjects(filtered);
  }, [searchTerm, activeCategory]);

  const handleCardClick = (id, event) => {
    // Only flip if clicking the front face
    if (!event.target.closest('.flipCardBack')) {
      setFlippedCardId(flippedCardId === id ? null : id);
    }
  };

  // Get unique categories from projects
  const categories = ['All', ...new Set(projects.map(project => project.category))];

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>My Projects</h2>
      
      {/* Search Bar */}
      <div className={styles.searchContainer}>
        <input 
          type="text" 
          className={styles.searchInput}
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      {/* Categories */}
      <div className={styles.categories}>
        {categories.map(category => (
          <button 
            key={category}
            className={`${styles.categoryButton} ${activeCategory === category ? styles.active : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Projects Grid */}
      <div className={styles.projectsGrid}>
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className={styles.flipCard}
          >
            <div 
              className={`${styles.flipCardInner} ${flippedCardId === project.id ? styles.isFlipped : ''}`}
              onClick={(e) => handleCardClick(project.id, e)}
            >
              {/* Front of the Card */}
              <div className={styles.flipCardFront}>
                <span className={`${styles.statusBadge} ${styles[`status${project.status}`]}`}>
                  {project.status}
                </span>
                <img 
                  src={project.image} 
                  alt={`Screenshot of ${project.title}`}
                  className={styles.image} 
                />
                <h3 className={styles.projectTitleOnImage}>{project.title}</h3>
              </div>

              {/* Back of the Card */}
              <div className={styles.flipCardBack}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.techTags}>
                  {project.technologies.map(tech => (
                    <span key={tech} className={styles.tag}>{tech}</span>
                  ))}
                </div>
                <div className={styles.features}>
                  {project.features?.map(feature => (
                    <span key={feature} className={styles.feature}>• {feature}</span>
                  ))}
                </div>
                <div className={styles.links}>
                  <a href={project.link} className={styles.link} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.source} className={styles.link} target="_blank" rel="noopener noreferrer">
                    Source Code
                  </a>
                </div>
                <span className={styles.timeline}>
                  {project.timeline.duration}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
