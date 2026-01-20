// src/Components/Services.jsx
import React from 'react';
import styles from './Services.module.css';
import { services } from '../Data/ServicesData';

const Services = () => {
  return (
    <section className={styles.container} id="services">
      <h2 className={styles.title}>What I Do</h2>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.icon}>{service.icon}</div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
