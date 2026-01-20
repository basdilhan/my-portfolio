import React from "react";
import styles from "./Blog.module.css";
import { blogPosts } from "../Data/BlogPosts";

const Blog = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>Blog</h2>
    <div className={styles.grid}>
      {blogPosts.map(post => (
        <article key={post.id} className={styles.card}>
          <div className={styles.thumb}>
            <img src={post.image} alt={post.title} />
            <span className={styles.badge}>{post.category}</span>
          </div>
          <div className={styles.body}>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <div className={styles.meta}>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <a href={post.link} className={styles.link}>Read more →</a>
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default Blog;