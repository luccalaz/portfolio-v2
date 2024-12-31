import { useEffect, useState, useRef } from 'react';

// Define the type for section references
type SectionRefs = React.RefObject<HTMLElement>[];

const useActiveSection = (sections: SectionRefs): string | null => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!sections || sections.length === 0) return;

    // Create the observer
    observer.current = new IntersectionObserver(
      (entries) => {
        let maxVisibleArea = 0;
        let currentActiveSection: string | null = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const visibleArea =
              entry.boundingClientRect.height * entry.intersectionRatio;
            if (visibleArea > maxVisibleArea) {
              maxVisibleArea = visibleArea;
              currentActiveSection = entry.target.id;
            }
          }
        });

        if (currentActiveSection && currentActiveSection !== activeSection) {
          setActiveSection(currentActiveSection);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: Array.from({ length: 11 }, (_, i) => i / 10), // Thresholds from 0.0 to 1.0
      }
    );

    // Observe all sections
    sections.forEach((sectionRef) => {
      if (sectionRef.current) {
        observer.current?.observe(sectionRef.current);
      }
    });

    return () => {
      // Cleanup observer
      if (observer.current) {
        observer.current.disconnect();
        observer.current = null;
      }
    };
  }, [sections, activeSection]);

  return activeSection;
};

export default useActiveSection;
