import { useEffect } from "react";

export function usePerformanceOptimization() {
  useEffect(() => {
    // Reduce motion for users who prefer it
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    
    const handleReducedMotion = (e: MediaQueryListEvent) => {
      const root = document.documentElement;
      if (e.matches) {
        root.style.setProperty("--animation-duration", "0.01ms");
        root.style.setProperty("--transition-duration", "0.01ms");
      } else {
        root.style.removeProperty("--animation-duration");
        root.style.removeProperty("--transition-duration");
      }
    };

    // Initial check
    if (mediaQuery.matches) {
      handleReducedMotion({ matches: true } as MediaQueryListEvent);
    }

    mediaQuery.addEventListener("change", handleReducedMotion);
    return () => mediaQuery.removeEventListener("change", handleReducedMotion);
  }, []);

  useEffect(() => {
    // Optimize images on slow connections
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection && connection.effectiveType === '2g') {
        document.documentElement.classList.add('slow-connection');
      }
    }

    // Add scroll performance optimization
    let scrollTimer: NodeJS.Timeout | null = null;
    const optimizeScrolling = () => {
      document.body.classList.add('is-scrolling');
      
      if (scrollTimer) clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        document.body.classList.remove('is-scrolling');
      }, 150);
    };

    window.addEventListener('scroll', optimizeScrolling, { passive: true });
    return () => {
      window.removeEventListener('scroll', optimizeScrolling);
      if (scrollTimer) clearTimeout(scrollTimer);
    };
  }, []);
}
