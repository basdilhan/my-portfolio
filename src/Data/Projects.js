// src/Data/Projects.js

export const projects = [
  {
    id: "project-1",
    title: "IPD Health Hub",
    subtitle: "PHP & MySQL",
    description:
      "A comprehensive healthcare management system that streamlines patient care and hospital operations. Features include doctor appointment scheduling, real-time bed availability tracking, pharmacy inventory management, and secure payment processing.",
    image: "/Ipd.png", // Replace with actual project image
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
 
    source: "https://github.com/basdilhan/ipd-health-hub", // Replace with actual repo link
    category: "Web Development",
    status: "live",
    features: [
      "Doctor appointment scheduling",
      "Real-time bed availability tracking",
      "Pharmacy inventory management",
      "Secure payment integration",
      "Patient portal dashboard",
    ],
    timeline: {
      start: "October 2024",
      end: "April 2025",
      duration: "4 months",
    },
  },
  {
    id: "project-2",
    title: "Personal Portfolio Website",
    subtitle: "React & Vite",
    description:
      "A modern, responsive portfolio website built with React and Vite. Features include dynamic content loading, smooth animations, dark/light theme switching, and optimized performance metrics.",
    image: "/Personal.png", // Replace with actual project image
    technologies: ["React", "Vite", "CSS Modules", "Framer Motion", "React Icons"],

    source: "https://github.com/yourusername/portfolio", // Replace with actual repo link
    category: "Frontend",
    status: "live",
    features: [
      "Responsive design",
      "Dark/Light theme toggle",
      "Smooth page transitions",
      "Project showcase",
      "Contact form integration",
    ],
    timeline: {
      start: "June 2023",
      end: "July 2023",
      duration: "2 months",
    },
  },
  {
    id: "project-3",
    title: "RideEase Car Rental Site",
    subtitle: "Spring Boot & Thymeleaf",
    description:
      "A comprehensive car rental platform with real-time booking system, vehicle management, and secure payment integration. Features include user authentication, vehicle availability tracking, booking management, and automated billing system.",
    image: "/RideEase.png", // Replace with actual project image
    technologies: ["Spring Boot", "Thymeleaf", "MySQL", "Bootstrap", "jQuery"],
    source: "https://github.com/basdilhan/ride-ease", // Replace with actual repo link
    category: "Web Development",
    status: "live",
    features: [
      "User authentication & role-based access",
      "Real-time vehicle availability",
      "Booking management system",
      "Payment integration",
      "Admin dashboard",
    ],
    timeline: {
      start: "May 2023",
      end: "July 2023",
      duration: "3 months",
    },
  },
];
