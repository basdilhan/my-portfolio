// src/Components/DeviceShowcase.jsx
/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import styles from './DeviceShowcase.module.css';

const DeviceShowcase = () => {
  return (
    <section id="demos" className={styles.showcase}>
      <div className={styles.container}>

        {/* ── Header ── */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className={styles.eyebrow}>Live Demos</span>
          <h2>See My Projects in Action</h2>
          <p>
            Real recordings of finished products — a mobile finance app and a
            full web storefront, shown in true device context.
          </p>
        </motion.div>

        {/* ── Device grid: phone left, large laptop right ── */}
        <div className={styles.devicesGrid}>

          {/* Mobile — Dream Saver */}
          <motion.div
            className={styles.deviceContainer}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className={styles.deviceVisual}>
              <div className={styles.mobileDevice}>
                <div className={styles.mobileBezel}>
                  <div className={styles.mobileNotch} />
                  <video
                    className={styles.mobileScreen}
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/DreamSaver_vdo.mp4" type="video/mp4" />
                    Your browser doesn&apos;t support HTML5 video.
                  </video>
                </div>
              </div>
            </div>
            <div className={styles.deviceCaption}>
              <h3>Dream Saver</h3>
              <p>Android Financial Management App</p>
            </div>
          </motion.div>

          {/* Laptop — GM Frontend */}
          <motion.div
            className={styles.deviceContainer}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <div className={styles.deviceVisual}>
              <div className={styles.laptopDevice}>
                <div className={styles.laptopBezel}>
                  <div className={styles.laptopCam} />
                  <video
                    className={styles.laptopScreen}
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/Gm_vdo.mp4" type="video/mp4" />
                    Your browser doesn&apos;t support HTML5 video.
                  </video>
                </div>
                <div className={styles.laptopStand} />
              </div>
            </div>
            <div className={styles.deviceCaption}>
              <h3>GM Frontend</h3>
              <p>Business Storefront &amp; Product Catalog — HTML · CSS · JS · Bootstrap</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DeviceShowcase;
