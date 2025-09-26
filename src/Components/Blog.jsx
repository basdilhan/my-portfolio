// src/Components/Blog.jsx
import React from 'react';
import styles from './Blog.module.css';
// Ensure this path points to your data file
import { blogPosts } from '../Data/BlogPosts'; 

const Blog = () => {
  return (
    <section className={styles.container} id="blog">
      <h2 className={styles.title}>Latest Posts</h2>
      <div className={styles.blogGrid}>
        {blogPosts.map((post) => (
          <article key={post.id} className={styles.blogCard}>
            <div className={styles.imageContainer}>
              <img src={post.image} alt={`Featured image for ${post.title}`} />
              <span className={styles.category}>{post.category}</span>
            </div>
            <div className={styles.content}>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className={styles.metadata}>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime} min read</span>
              </div>
              <a href={post.link} className={styles.readMore} target="_blank" rel="noopener noreferrer">
                Read More &rarr;
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
