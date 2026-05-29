import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./CertificatesGallery.module.css";

const certificates = [
  {
    id: 1,
    title: "Diploma in Software Engineering",
    org: "National Institute of Business Management",
    date: "2024",
    category: "Degree",
    thumb: "/Dip1.jpeg",
    images: ["/Dip1.jpeg", "/Dip2.jpeg"],
    skills: ["Distinction", "GPA: 3.87"],
    pdf: null,
    url: null
  },
  {
    id: 2,
    title: "Free Data Scientist Course",
    org: "Simplilearn SkillUP",
    date: "28th May 2026",
    category: "Professional",
    thumb: "https://certificates.simplicdn.net/share/10280043_10555705_1779976020672.png",
    images: null,
    skills: ["Data Science", "Certificate of Completion", "Code: 10280043"],
    pdf: "/Certificate.pdf",
    url: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI1MjU5IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvMTAyODAwNDNfMTA1NTU3MDVfMTc3OTk3NjAyMDY3Mi5wbmciLCJ1c2VybmFtZSI6InNhbXVkdSBkaWxoYW4ifQ%3D%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F8250%2FFree-Data-Scientist-Course%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1588792431774774360&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVN8wKjrDMKvIoM06yrytKTUstKsrMS49PKsovL04tsnVNSU8FANJInHY9AAAA"
  },
  {
    id: 3,
    title: "Python (Basic) Certificate",
    org: "HackerRank",
    date: "2024",
    category: "Professional",
    thumb: null,
    images: null,
    skills: ["Python", "Programming", "Problem Solving"],
    pdf: "/python_basic%20certificate.pdf",
    url: "https://www.hackerrank.com/certificates/iframe/e94de83592b6"
  },
  {
    id: 4,
    title: "Introduction to Generative AI",
    org: "Simplilearn SkillUP",
    date: "2026",
    category: "Professional",
    thumb: "https://certificates.simplicdn.net/share/10282968_10555705_1780060928488.png",
    images: null,
    skills: ["Generative AI", "Certificate of Completion"],
    pdf: null,
    url: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzODA3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvMTAyODI5NjhfMTA1NTU3MDVfMTc4MDA2MDkyODQ4OC5wbmciLCJ1c2VybmFtZSI6IkIgQSBTIERpbGhhbiJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F6750%2FIntroduction-to-Generative-AI%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1588897657923164779&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVDzBKdLe0rMyuME6yrytKTUstKsrMS49PKsovL04tsnVNSU8FADE1kHk9AAAA"
  },
  {
    id: 5,
    title: "Intro to Machine Learning",
    org: "Kaggle",
    date: "May 29, 2026",
    category: "Professional",
    thumb: "/kaggle_cert.png",
    images: null,
    skills: ["Machine Learning", "Python", "Data Science"],
    pdf: null,
    url: "https://www.kaggle.com/learn/certification/samududilhan12/intro-to-machine-learning"
  }
];

const filters = ["All", "Degree", "Professional"];

const CertificatesGallery = () => {
  const [filter, setFilter] = useState("All");
  const [activeImage, setActiveImage] = useState({});
  const filtered = filter === "All" ? certificates : certificates.filter(c => c.category === filter);

  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className={styles.title}>Certifications & Achievements</h2>
        <p className={styles.subtitle}>Professional credentials and completed courses</p>
      </motion.div>

      <motion.div 
        className={styles.filters}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`${styles.filterBtn} ${filter === f ? styles.active : ""}`}
          >
            {f}
          </button>
        ))}
      </motion.div>

      <motion.div 
        className={styles.grid}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {filtered.map(cert => {
          const CardWrapper = cert.url ? 'a' : 'div';
          const wrapperProps = cert.url ? { 
            href: cert.url, 
            target: "_blank", 
            rel: "noopener noreferrer",
            className: styles.cardLink 
          } : {
            className: styles.cardLink
          };

          return (
            <div key={cert.id} className={styles.card}>
              <CardWrapper {...wrapperProps}>
                <div className={styles.thumb}>
                  {cert.images ? (
                    <>
                      <img
                        src={activeImage[cert.id] !== undefined ? cert.images[activeImage[cert.id]] : cert.images[0]}
                        alt={cert.title}
                      />
                      {cert.images.length > 1 && (
                        <div className={styles.imageControls} onClick={e => e.preventDefault()}>
                          {cert.images.map((img, idx) => (
                            <button
                              key={idx}
                              className={`${styles.dotBtn} ${(activeImage[cert.id] || 0) === idx ? styles.activeDot : ""}`}
                              onClick={(e) => {
                                e.preventDefault();
                                setActiveImage({...activeImage, [cert.id]: idx});
                              }}
                            >
                              {idx + 1}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  ) : cert.thumb ? (
                    <img src={cert.thumb} alt={cert.title} />
                  ) : cert.pdf ? (
                    <embed 
                      src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} 
                      type="application/pdf"
                      title={cert.title}
                      style={{ width: '100%', height: '100%', border: 'none', pointerEvents: 'none' }}
                    />
                  ) : (
                    <div className={styles.pdfPlaceholder}>
                      <span className={styles.pdfLabel}>Certificate</span>
                    </div>
                  )}
                </div>
                <div className={styles.body}>
                  <span className={styles.badge}>{cert.category}</span>
                  <h3>{cert.title}</h3>
                  <p className={styles.org}>{cert.org}</p>
                  <p className={styles.date}>{cert.date}</p>
                  <div className={styles.skills}>
                    {cert.skills.map(s => <span key={s}>{s}</span>)}
                  </div>
                </div>
              </CardWrapper>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default CertificatesGallery;