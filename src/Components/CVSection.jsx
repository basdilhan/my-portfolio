import React from "react";
import styles from "./CVSection.module.css";
import { FaGithub, FaBriefcase, FaGraduationCap } from "react-icons/fa";

const CVSection = () => {
  const githubUsername = "basdilhan"; // Replace with your actual GitHub username

  const experience = [
    {
      company: "IPD Health Hub",
      role: "Full Stack Developer",
      period: "2024 - 2025",
      desc: "Built comprehensive hospital inpatient management platform with PHP, MySQL, and Bootstrap covering admissions, prescriptions, billing, and reporting.",
      tech: ["PHP", "MySQL", "Bootstrap", "jQuery"]
    },
    {
      company: "RideEase",
      role: "Full Stack Developer",
      period: "2023",
      desc: "Developed complete car rental platform with Spring Boot backend REST APIs and Thymeleaf-based responsive frontend, featuring secure authentication, inventory management, and booking workflows.",
      tech: ["Spring Boot", "Java", "MySQL", "HTML5", "Thymeleaf"]
    },
    {
      company: "IoT Tea Weighing System",
      role: "Mobile Developer",
      period: "2023",
      desc: "Created Flutter mobile app for real-time IoT device control and monitoring with cloud connectivity via Firebase and MQTT.",
      tech: ["Flutter", "Dart", "Firebase", "MQTT"]
    }
  ];

  const education = [
    {
      title: "Higher National Diploma in Software Engineering",
      school: "Currently Pursuing",
      year: "2025 - Present",
      details: "Advanced software development, system design, and engineering best practices"
    },
    {
      title: " Diploma in Software Engineering",
      school: "National Institute of Business Management",
      year: "2024",
      details: "Distinction • GPA: 3.87"
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Experience & Stats</h2>
        <p className={styles.subtitle}>Professional journey and coding activity</p>
      </div>

      <div className={styles.mainGrid}>
        {/* GitHub Stats Section */}
        <div className={styles.githubSection}>
          <h3 className={styles.sectionTitle}>
            <FaGithub size={24} /> GitHub Activity
          </h3>
          
          <div className={styles.statsRow}>
            <div className={styles.statCard}>
              <img 
                src={`https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=${githubUsername}&show_icons=true&theme=radical&hide_border=true&bg_color=0a192f&title_color=64ffda&icon_color=64ffda&text_color=ccd6f6&cache_seconds=86400`}
                alt="GitHub Stats"
                className={styles.statImage}
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div style="color: #ccd6f6; text-align: center; padding: 2rem;"><p>GitHub Stats</p><p style="margin-top: 1rem;">Visit <a href="https://github.com/' + githubUsername + '" target="_blank" style="color: #64ffda;">@' + githubUsername + '</a></p></div>';
                }}
              />
            </div>

            <div className={styles.statCard}>
              <img 
                src={`https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=radical&hide_border=true&bg_color=0a192f&title_color=64ffda&text_color=ccd6f6&cache_seconds=86400`}
                alt="Top Languages"
                className={styles.statImage}
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div style="color: #ccd6f6; text-align: center; padding: 2rem;"><p>Top Languages</p><p style="margin-top: 1rem; color: #64ffda;">PHP • Java • JavaScript • Dart</p></div>';
                }}
              />
            </div>
          </div>

          <div className={styles.githubLink}>
            <a 
              href={`https://github.com/${githubUsername}`} 
              target="_blank" 
              rel="noreferrer"
              className={styles.githubBtn}
            >
              <FaGithub size={20} />
              <span>View GitHub Profile</span>
            </a>
          </div>
        </div>

        {/* Experience Section */}
        <div className={styles.contentSection}>
          <h3 className={styles.sectionTitle}>
            <FaBriefcase size={24} /> Work Experience
          </h3>
          
          <div className={styles.timeline}>
            {experience.map((exp, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h4 className={styles.jobTitle}>{exp.role}</h4>
                  <p className={styles.company}>{exp.company}</p>
                  <p className={styles.period}>{exp.period}</p>
                  <p className={styles.jobDesc}>{exp.desc}</p>
                  <div className={styles.techTags}>
                    {exp.tech.map(tech => (
                      <span key={tech} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className={styles.contentSection}>
          <h3 className={styles.sectionTitle}>
            <FaGraduationCap size={24} /> Education
          </h3>
          
          <div className={styles.timeline}>
            {education.map((edu, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h4 className={styles.jobTitle}>{edu.title}</h4>
                  <p className={styles.company}>{edu.school}</p>
                  <p className={styles.period}>{edu.year}</p>
                  <p className={styles.jobDesc}>{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVSection;