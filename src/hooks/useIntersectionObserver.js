// src/hooks/useIntersectionObserver.js
import { useEffect, useRef } from 'react';

const useIntersectionObserver = (setActiveSection) => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (setActiveSection) {
              setActiveSection(entry.target.id);
            }
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [setActiveSection]);

  return sectionRefs;
};

export default useIntersectionObserver;