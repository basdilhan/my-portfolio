import React, { useState } from "react";
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
    verify: "#"
  }
];

const filters = ["All", "Degree", "Professional"];

const CertificatesGallery = () => {
  const [filter, setFilter] = useState("All");
  const [activeImage, setActiveImage] = useState({});
  const filtered = filter === "All" ? certificates : certificates.filter(c => c.category === filter);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Certifications & Achievements</h2>
        <p className={styles.subtitle}>Professional credentials and completed courses</p>
      </div>

      <div className={styles.filters}>
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`${styles.filterBtn} ${filter === f ? styles.active : ""}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map(cert => (
          <div key={cert.id} className={styles.card}>
            <div className={styles.thumb}>
              <img 
                src={cert.images ? (activeImage[cert.id] !== undefined ? cert.images[activeImage[cert.id]] : cert.images[0]) : cert.thumb} 
                alt={cert.title} 
              />
              {cert.images && cert.images.length > 1 && (
                <div className={styles.imageControls}>
                  {cert.images.map((img, idx) => (
                    <button
                      key={idx}
                      className={`${styles.dotBtn} ${(activeImage[cert.id] || 0) === idx ? styles.activeDot : ""}`}
                      onClick={() => setActiveImage({...activeImage, [cert.id]: idx})}
                    >
                      {idx + 1}
                    </button>
                  ))}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesGallery;