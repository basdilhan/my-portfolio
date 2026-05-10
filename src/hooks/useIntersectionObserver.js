// src/hooks/useIntersectionObserver.js
import { useEffect, useRef } from 'react';

const useIntersectionObserver = (setActiveSection) => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    // The Intersection Observer API watches for elements entering the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If an element is intersecting (visible on screen)
          if (entry.isIntersecting) {
            // Add the 'visible' class for animations
            entry.target.classList.add('visible');
            // If a function was passed to update the active section, call it with the element's ID
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

    // Snapshot the refs to avoid them changing during cleanup
    const refs = Array.isArray(sectionRefs.current) ? sectionRefs.current.slice() : [];
    refs.forEach((section) => { if (section) observer.observe(section); });

    // Clean up by unobserving the same snapshot
    return () => {
      refs.forEach((section) => { if (section) observer.unobserve(section); });
    };
  }, [setActiveSection]);

  return sectionRefs;
};

export default useIntersectionObserver;
