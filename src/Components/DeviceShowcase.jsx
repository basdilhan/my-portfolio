import React from 'react';
import { motion } from 'framer-motion';
import styles from './DeviceShowcase.module.css';

const DeviceShowcase = () => {
  return (
    <section id="demos" className={styles.showcase}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Live Demos</h2>
          <p>See my projects in action on mobile and web</p>
        </motion.div>

        <div className={styles.devicesGrid}>
          {/* Mobile Device Demo */}
          <motion.div 
            className={styles.deviceContainer}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.deviceVisual}>
              <div className={styles.mobileDevice}>
                <div className={styles.mobileBezel}>
                  <div className={styles.mobileNotch}></div>
                  <video 
                    className={styles.mobileScreen}
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    poster="/placeholder-mobile.jpg"
                  >
                    <source src="/demo-mobile.mp4" type="video/mp4" />
                    Your browser doesn't support HTML5 video.
                  </video>
                </div>
              </div>
            </div>
            <h3>Mobile App Demo</h3>
            <p>Dream Saver - Financial Management App</p>
          </motion.div>

          {/* Laptop Device Demo */}
          <motion.div 
            className={styles.deviceContainer}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.deviceVisual}>
              <div className={styles.laptopDevice}>
                <div className={styles.laptopBezel}>
                  <div className={styles.laptopCam}></div>
                  <video 
                    className={styles.laptopScreen}
                    autoPlay 
                    muted 
                    loop
                    poster="/placeholder-web.jpg"
                  >
                    <source src="/demo-web.mp4" type="video/mp4" />
                    Your browser doesn't support HTML5 video.
                  </video>
                </div>
                <div className={styles.laptopStand}></div>
              </div>
            </div>
            <h3>Web Demo</h3>
            <p>GM Frontend - Business Product Catalog</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeviceShowcase;
