// src/Components/Services.jsx
/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Services.module.css';
import { services } from '../Data/ServicesData';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } }
};

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 14 } 
  }
};

const Services = () => {
  return (
    <section className={styles.container} id="services">
      <motion.div
        className={styles.headerGroup}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className={styles.eyebrow}>What I Do</span>
        <h2 className={styles.title}>Services</h2>
      </motion.div>
      
      <motion.div 
        className={styles.servicesGrid}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={styles.serviceCard}
            variants={cardVariant}
            whileHover={{ 
              y: -8, 
              scale: 1.02,
              transition: { type: 'spring', stiffness: 300, damping: 20 } 
            }}
          >
            <motion.div 
              className={styles.icon}
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
              transition={{ duration: 0.5 }}
            >
              {service.icon}
            </motion.div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
            <div className={styles.cardGlow} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
